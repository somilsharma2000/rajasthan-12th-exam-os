// WORKER UNIT TESTS — runs the fetch handler with mocked env (no network, no deploy)
// node serverless/worker.test.mjs
import { readFileSync } from 'node:fs'
// import the worker (ESM) via data URL
const src = readFileSync(new URL('./ai-coach-worker.js', import.meta.url), 'utf8')
const mod = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'))
const worker = mod.default

const ok = (n, c) => { console.log((c ? 'PASS' : 'FAIL') + ' ' + n); if (!c) process.exitCode = 1 }

function mockEnv({ cap = '2', origin = 'https://somilsharma2000.github.io', kv = true, admin = 'sekrit-token' } = {}) {
  const store = {}
  return {
    ALLOWED_ORIGIN: origin, DAILY_CAP: cap, MODEL: 'gemini-2.0-flash', GEMINI_API_KEY: 'TEST', ADMIN_TOKEN: admin,
    COACH_KV: kv ? { get: async k => store[k] ?? null, put: async (k, v) => { store[k] = v } } : undefined,
    __store: store,
  }
}
const req = (path, { body, ip = '1.1.1.1', origin = 'https://somilsharma2000.github.io', method = 'POST', token } = {}) => {
  const headers = { 'CF-Connecting-IP': ip, 'Origin': origin, 'Content-Type': 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`
  return new Request('https://w' + path, { method, headers, body: body !== undefined ? JSON.stringify(body) : undefined })
}

// stub upstream LLM — records the call, replies with a canned part
let upstreamCalls = 0, lastUpstreamBody = null
globalThis.fetch = async (url, init) => {
  upstreamCalls++; lastUpstreamBody = JSON.parse(init.body)
  return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: 'mock reply' }] } }] }), { status: 200 })
}

const valid = { context: { question: 'Q?', options: ['a', 'b'], answer: 0, chosen: 1, explanation: 'expl' }, lang: 'hi' }

// --- COACH ENDPOINT ---

// 1. origin gate
let r = await worker.fetch(req('/', { body: valid, origin: 'https://evil.example' }), mockEnv())
ok('foreign origin rejected 403', r.status === 403)

// 2. method gate
r = await worker.fetch(req('/', { method: 'GET' }), mockEnv())
ok('GET / rejected 404 (no route)', r.status === 404)

// 3. body validation
r = await worker.fetch(req('/', { body: { lang: 'hi' } }), mockEnv())
ok('missing context rejected 400', r.status === 400)

// 4. happy path + KV counting
const e = mockEnv()
r = await worker.fetch(req('/', { body: valid }), e)
ok('valid request passes upstream + replies', r.status === 200 && (await r.json()).reply === 'mock reply')
ok('KV per-IP counter incremented', Object.keys(e.__store).some(k => k.startsWith('coach:1.1.1.1')))
ok('KV aggregate total counter incremented', Object.keys(e.__store).some(k => k.startsWith('coach:total:')))

// 5. daily cap enforced (cap=2 → calls 1,2 pass, call 3 blocked)
await worker.fetch(req('/', { body: valid, ip: '2.2.2.2' }), e)
r = await worker.fetch(req('/', { body: valid, ip: '2.2.2.2' }), e)
ok('calls under cap pass', r.status === 200)
r = await worker.fetch(req('/', { body: valid, ip: '2.2.2.2' }), e)
ok('cap enforced at DAILY_CAP (daily_limit)', (await r.json()).error === 'daily_limit')
ok('cap blocked BEFORE upstream call (no token burn)', upstreamCalls === 3) // 1(test4) + 2(allowed) + 0(blocked)

// 6. cap applies before body parse: garbage body at cap doesn't 400 first (cap wins → no upstream regardless)
const e6 = mockEnv()
await worker.fetch(req('/', { body: valid, ip: '3.3.3.3' }), e6); await worker.fetch(req('/', { body: valid, ip: '3.3.3.3' }), e6)
r = await worker.fetch(req('/', { body: { junk: true }, ip: '3.3.3.3' }), e6)
ok('cap applies before body parse (cost gate is first)', (await r.json()).error === 'daily_limit')

// 7. input bounds: huge history truncated to last 8, fields sliced
const e7 = mockEnv()
await worker.fetch(req('/', { body: { ...valid, history: Array.from({ length: 30 }, () => ({ role: 'user', text: 'x'.repeat(5000) })) } }), e7)
ok('history bounded to 8 messages', lastUpstreamBody.contents.length === 9) // 8 + current
ok('history texts sliced to 1000', lastUpstreamBody.contents.every(c => c.parts[0].text.length < 5000))

// 8. KV-less fallback cap still enforced
const e8 = mockEnv({ kv: false, cap: '1' })
await worker.fetch(req('/', { body: valid, ip: '4.4.4.4' }), e8)
r = await worker.fetch(req('/', { body: valid, ip: '4.4.4.4' }), e8)
ok('KV-less fallback enforces cap (never unlimited)', (await r.json()).error === 'daily_limit')

// 9. system prompt scope present + lang instruction
ok('system instruction present + scoped', /Rajasthan government-exam/.test(lastUpstreamBody.system_instruction.parts[0].text))

// 10. CORS header set only for allowed origin
ok('CORS header echoes allowed origin', r.headers.get('Access-Control-Allow-Origin') === 'https://somilsharma2000.github.io')

// --- PUBLIC CONFIG (no auth) ---

const e10 = mockEnv()
r = await worker.fetch(req('/public/config', { method: 'GET' }), e10)
ok('public config no-auth 200', r.status === 200)
ok('public config defaults enabled=true', (await r.json()).enabled === true)

// --- ADMIN ROUTES (auth required, server-verified) ---

const e11 = mockEnv()
r = await worker.fetch(req('/admin/status', { method: 'GET' }), e11)
ok('admin status without token -> 401', r.status === 401)

r = await worker.fetch(req('/admin/status', { method: 'GET', token: 'wrong-token' }), e11)
ok('admin status with wrong token -> 401', r.status === 401)

r = await worker.fetch(req('/admin/status', { method: 'GET', token: 'sekrit-token' }), e11)
const status1 = await r.json()
ok('admin status with correct token -> 200', r.status === 200)
ok('admin status reports kvBound', status1.kvBound === true)
ok('admin status reports dailyCapPerStudent from env default', status1.dailyCapPerStudent === 2)

// admin can disable coach without redeploying
r = await worker.fetch(req('/admin/config', { method: 'POST', token: 'sekrit-token', body: { enabled: false } }), e11)
ok('admin disable coach -> 200', r.status === 200 && (await r.json()).enabled === false)
r = await worker.fetch(req('/', { body: valid, ip: '9.9.9.9' }), e11)
ok('coach endpoint returns coach_disabled while admin has disabled it', r.status === 503 && (await r.clone().json()).error === 'coach_disabled')
r = await worker.fetch(req('/public/config', { method: 'GET' }), e11)
ok('public config reflects disabled state', (await r.json()).enabled === false)

// admin can raise/lower the per-student cap at runtime
r = await worker.fetch(req('/admin/config', { method: 'POST', token: 'sekrit-token', body: { enabled: true, dailyCap: 5 } }), e11)
ok('admin sets dailyCap -> 200', r.status === 200 && (await r.json()).dailyCapPerStudent === 5)
r = await worker.fetch(req('/admin/status', { method: 'GET', token: 'sekrit-token' }), e11)
ok('new dailyCap reflected in status', (await r.json()).dailyCapPerStudent === 5)

// admin routes stay fully closed if ADMIN_TOKEN was never configured (safe default)
const e12 = mockEnv({ admin: undefined })
r = await worker.fetch(req('/admin/status', { method: 'GET', token: 'anything' }), e12)
ok('admin routes closed entirely when ADMIN_TOKEN unset', r.status === 401)

// unknown routes 404
r = await worker.fetch(req('/nope', { method: 'GET' }), mockEnv())
ok('unknown route -> 404', r.status === 404)
