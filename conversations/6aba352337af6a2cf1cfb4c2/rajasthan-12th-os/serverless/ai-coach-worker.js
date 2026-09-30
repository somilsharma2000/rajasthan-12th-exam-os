// AI COACH PROXY + OWNER ADMIN API — Cloudflare Worker
// Deploy: wrangler deploy (requires: GEMINI_API_KEY + ADMIN_TOKEN secrets, ALLOWED_ORIGIN var)
// Security model:
//  - The LLM key and the admin token live ONLY in this Worker's secrets. The static
//    app (GitHub Pages) never sees them.
//  - Backend/operational config (enable-coach, daily cap) is admin-only, gated by a
//    Bearer token checked HERE on every request — never trusted from the client.
//    This is why it's a real admin panel and not a client-side toggle.
//  - Per-IP daily cap enforced BEFORE the upstream LLM call — a capped/disabled
//    request can never burn a token, regardless of what the client sends.
//
// wrangler.toml:
//   name = "rajasthan-exam-coach"
//   main = "serverless/ai-coach-worker.js"
//   compatibility_date = "2026-01-01"
//   [vars]
//   ALLOWED_ORIGIN = "https://somilsharma2000.github.io"
//   DAILY_CAP = "15"
//   MODEL = "gemini-2.0-flash"
//   wrangler secret put GEMINI_API_KEY
//   wrangler secret put ADMIN_TOKEN     (any long random string you choose — this is your admin password)
//
// Routes:
//   POST /              -> student coach reply (unauthenticated, origin-gated, rate-limited)
//   GET  /public/config -> { enabled }                         (no auth — safe to expose)
//   GET  /admin/status  -> full status                          (Bearer ADMIN_TOKEN required)
//   POST /admin/config  -> { enabled?, dailyCap? }              (Bearer ADMIN_TOKEN required)

const SYSTEM_PROMPT = `You are the AI Coach of a Rajasthan government-exam preparation app (12th-level: LDC, CET, Stenographer, Police Constable, Forest Guard etc.).
Rules:
1. Answer ONLY about the question given in context, exam preparation strategy, or the exam's syllabus. Refuse anything unrelated.
2. Reply in the same language as the student (Hindi or English).
3. Be concise (max ~150 words). Explain step by step, simply, like a good tutor.
4. If the official explanation conflicts with your knowledge, trust the given explanation and say so.
5. Never invent exam facts, dates or rules. If unsure, say you are unsure.`

const memCap = {}
const memCfg = {} // KV-less fallback for admin config (per-isolate; KV is the durable store)

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (request.method === 'OPTIONS') return cors(new Response(null, { status: 204 }), env)

    if (url.pathname === '/public/config' && request.method === 'GET') {
      return cors(json({ enabled: await getEnabled(env) }), env)
    }
    if (url.pathname === '/admin/status' && request.method === 'GET') {
      if (!isAdmin(request, env)) return cors(json({ error: 'unauthorized' }, 401), env)
      const today = new Date().toISOString().slice(0, 10)
      const total = env.COACH_KV ? parseInt((await env.COACH_KV.get(`coach:total:${today}`)) || '0', 10) : (memCap.total?.[today] || 0)
      return cors(json({
        enabled: await getEnabled(env),
        dailyCapPerStudent: await getCap(env),
        requestsToday: total,
        kvBound: !!env.COACH_KV,
        model: env.MODEL || 'gemini-2.0-flash',
      }), env)
    }
    if (url.pathname === '/admin/config' && request.method === 'POST') {
      if (!isAdmin(request, env)) return cors(json({ error: 'unauthorized' }, 401), env)
      let body; try { body = await request.json() } catch { return cors(json({ error: 'bad_json' }, 400), env) }
      if (typeof body.enabled === 'boolean') await setKV(env, 'cfg:enabled', body.enabled ? '1' : '0')
      if (typeof body.dailyCap === 'number' && body.dailyCap > 0 && body.dailyCap <= 200) await setKV(env, 'cfg:cap', String(Math.floor(body.dailyCap)))
      return cors(json({ enabled: await getEnabled(env), dailyCapPerStudent: await getCap(env) }), env)
    }

    if (url.pathname !== '/' || request.method !== 'POST') return cors(new Response('not found', { status: 404 }), env)

    const origin = request.headers.get('Origin') || ''
    if (env.ALLOWED_ORIGIN && origin !== env.ALLOWED_ORIGIN) {
      return cors(new Response('forbidden', { status: 403 }), env)
    }

    if (!(await getEnabled(env))) return cors(json({ error: 'coach_disabled' }, 503), env)

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const today = new Date().toISOString().slice(0, 10)
    const cap = await getCap(env)

    // Per-IP daily counting (KV namespace: COACH_KV; falls back to per-isolate Map)
    let used = 0
    if (env.COACH_KV) {
      const key = `coach:${ip}:${today}`
      used = parseInt((await env.COACH_KV.get(key)) || '0', 10)
      if (used >= cap) return cors(json({ error: 'daily_limit' }), env)
      await env.COACH_KV.put(key, String(used + 1), { expirationTtl: 86400 })
      const totalKey = `coach:total:${today}`
      const total = parseInt((await env.COACH_KV.get(totalKey)) || '0', 10)
      await env.COACH_KV.put(totalKey, String(total + 1), { expirationTtl: 86400 })
    } else {
      // Fallback cap (per-isolate Map): best-effort but NEVER unlimited
      memCap.count ||= {}
      const k = `${ip}:${today}`
      used = memCap.count[k] || 0
      if (used >= cap) return cors(json({ error: 'daily_limit' }), env)
      memCap.count[k] = used + 1
      memCap.total ||= {}; memCap.total[today] = (memCap.total[today] || 0) + 1
    }

    let body
    try { body = await request.json() } catch { return cors(json({ error: 'bad_json' }, 400), env) }
    const { context, history = [], lang = 'hi' } = body
    if (!context || !context.question) return cors(json({ error: 'bad_request' }, 400), env)
    // Input bounds: no field may blow up the prompt size (cost + abuse defense)
    const S = (x, n) => (typeof x === 'string' ? x.slice(0, n) : '')
    context.question = S(context.question, 2000)
    context.explanation = S(context.explanation, 3000)
    if (Array.isArray(context.options)) context.options = context.options.map(o => S(o, 400)).slice(0, 6)
    const boundedHistory = Array.isArray(history) ? history.slice(-8).map(m => ({ role: m.role, text: S(m.text, 1000) })) : []

    const contextText = `Current question the student is viewing:
Subject: ${context.subject || '-'} | Origin: ${context.origin || '-'}
Question: ${context.question}
Options: ${(context.options || []).map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join(' | ')}
Correct answer: ${context.answer !== undefined ? String.fromCharCode(65 + context.answer) : '-'}
Student chose: ${context.chosen !== undefined && context.chosen !== null ? String.fromCharCode(65 + context.chosen) : 'nothing'}
Official explanation: ${context.explanation || '-'}`

    const contents = []
    boundedHistory.forEach(m => contents.push({ role: m.role === 'coach' ? 'model' : 'user', parts: [{ text: m.text }] }))
    contents.push({ role: 'user', parts: [{ text: contextText + `\n\n(${lang === 'hi' ? 'हिंदी में उत्तर दें।' : 'Answer in English.'} छात्र का सवाल आगे दिया गया है।)` }] })

    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${env.MODEL || 'gemini-2.0-flash'}:generateContent?key=${env.GEMINI_API_KEY}`, {
      method: 'POST',
      signal: AbortSignal.timeout(20000), // never hang a worker invocation on a slow upstream
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 600, temperature: 0.3 }
      })
    })
    if (!r.ok) return cors(json({ error: 'upstream_' + r.status }, 502), env)
    const data = await r.json()
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (!reply) return cors(json({ error: 'no_reply' }, 502), env)
    return cors(json({ reply }), env)
  }
}

// --- admin config, KV-backed with in-memory fallback (never crashes without KV) ---
async function getKV(env, key) {
  if (env.COACH_KV) return await env.COACH_KV.get(key)
  return memCfg[key] ?? null
}
async function setKV(env, key, val) {
  if (env.COACH_KV) return await env.COACH_KV.put(key, val)
  memCfg[key] = val
}
async function getEnabled(env) {
  const v = await getKV(env, 'cfg:enabled')
  return v === null ? true : v === '1' // default ON until an admin explicitly disables
}
async function getCap(env) {
  const v = await getKV(env, 'cfg:cap')
  const n = v === null ? parseInt(env.DAILY_CAP || '15', 10) : parseInt(v, 10)
  return Number.isFinite(n) && n > 0 ? n : 15
}
function isAdmin(request, env) {
  if (!env.ADMIN_TOKEN) return false // no token configured -> admin routes stay fully closed
  const auth = request.headers.get('Authorization') || ''
  const m = auth.match(/^Bearer (.+)$/)
  return !!m && m[1] === env.ADMIN_TOKEN
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } })
}
function cors(res, env) {
  if (env.ALLOWED_ORIGIN) res.headers.set('Access-Control-Allow-Origin', env.ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return res
}
