// AI COACH PROXY — Cloudflare Worker
// Deploy: wrangler deploy (requires: GEMINI_API_KEY secret, ALLOWED_ORIGIN var)
// Security: the LLM key lives ONLY in this Worker's secrets. The static app
// (GitHub Pages) never sees it. Per-IP daily cap enforced here as the real
// cost control; the client cap (15/day) is UX only.
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

const SYSTEM_PROMPT = `You are the AI Coach of a Rajasthan government-exam preparation app (12th-level: LDC, CET, Stenographer, Police Constable, Forest Guard etc.).
Rules:
1. Answer ONLY about the question given in context, exam preparation strategy, or the exam's syllabus. Refuse anything unrelated.
2. Reply in the same language as the student (Hindi or English).
3. Be concise (max ~150 words). Explain step by step, simply, like a good tutor.
4. If the official explanation conflicts with your knowledge, trust the given explanation and say so.
5. Never invent exam facts, dates or rules. If unsure, say you are unsure.`

const memCap = {}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return cors(new Response(null, { status: 204 }), env)
    if (request.method !== 'POST') return cors(new Response('method not allowed', { status: 405 }), env)

    const origin = request.headers.get('Origin') || ''
    if (env.ALLOWED_ORIGIN && origin !== env.ALLOWED_ORIGIN) {
      return cors(new Response('forbidden', { status: 403 }), env)
    }

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const today = new Date().toISOString().slice(0, 10)
    const cap = parseInt(env.DAILY_CAP || '15', 10)

    // Per-IP daily counting (KV namespace: COACH_KV; falls back to per-isolate Map)
    let used = 0
    if (env.COACH_KV) {
      const key = `coach:${ip}:${today}`
      used = parseInt((await env.COACH_KV.get(key)) || '0', 10)
      if (used >= cap) return cors(json({ error: 'daily_limit' }), env)
      await env.COACH_KV.put(key, String(used + 1), { expirationTtl: 86400 })
    } else {
      // Fallback cap (per-isolate Map): best-effort but NEVER unlimited
      memCap.count ||= {}
      const k = `${ip}:${today}`
      used = memCap.count[k] || 0
      if (used >= cap) return cors(json({ error: 'daily_limit' }), env)
      memCap.count[k] = used + 1
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

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } })
}
function cors(res, env) {
  if (env.ALLOWED_ORIGIN) res.headers.set('Access-Control-Allow-Origin', env.ALLOWED_ORIGIN)
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return res
}
