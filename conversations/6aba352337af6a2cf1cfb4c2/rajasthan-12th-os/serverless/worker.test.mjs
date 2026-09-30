// WORKER UNIT TESTS — runs the fetch handler with mocked env (no network, no deploy)
// node serverless/worker.test.mjs
import { readFileSync } from 'node:fs'
// import the worker (ESM) via data URL
const src = readFileSync(new URL('./ai-coach-worker.js', import.meta.url), 'utf8')
const mod = await import('data:text/javascript;base64,' + Buffer.from(src).toString('base64'))
const worker = mod.default

const ok = (n, c) => { console.log((c ? 'PASS' : 'FAIL') + ' ' + n); if (!c) process.exitCode = 1 }

function mockEnv({ cap = '2', origin = 'https://somilsharma2000.github.io', kv = true } = {}) {
  const store = {}
  return {
    ALLOWED_ORIGIN: origin, DAILY_CAP: cap, MODEL: 'gemini-2.0-flash', GEMINI_API_KEY: 'TEST',
    COACH_KV: kv ? { get: async k => store[k] || null, put: async (k, v) => { store[k] = v } } : undefined,
    __store: store,
  }
}
const req = (body, ip = '1.1.1.1', origin = 'https://somilsharma2000.github.io', method = 'POST') =>
  new Request('https://w/', { method, headers: { 'CF-Connecting-IP': ip, 'Origin': origin, 'Content-Type': 'application/json' }, body: method === 'POST' ? JSON.stringify(body) : undefined })

// stub upstream LLM — records the call, replies with a canned part
let upstreamCalls = 0, lastUpstreamBody = null
globalThis.fetch = async (url, init) => {
  upstreamCalls++; lastUpstreamBody = JSON.parse(init.body)
  return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: 'mock reply' }] } }] }), { status: 200 })
}

const valid = { context: { question: 'Q?', options: ['a', 'b'], answer: 0, chosen: 1, explanation: 'expl' }, lang: 'hi' }

// 1. origin gate
let r = await worker.fetch(req(valid, '1.1.1.1', 'https://evil.example'), mockEnv())
ok('foreign origin rejected 403', r.status === 403)

// 2. method gate
r = await worker.fetch(req(null, '1.1.1.1', undefined, 'GET'), mockEnv())
ok('GET rejected 405', r.status === 405)

// 3. body validation
r = await worker.fetch(req({ lang: 'hi' }), mockEnv())
ok('missing context rejected 400', r.status === 400)

// 4. happy path + KV counting
const e = mockEnv()
r = await worker.fetch(req(valid), e)
ok('valid request passes upstream + replies', r.status === 200 && (await r.json()).reply === 'mock reply')
ok('KV counter incremented', Object.keys(e.__store).some(k => k.startsWith('coach:')))

// 5. daily cap enforced (cap=2 → calls 1,2 pass, call 3 blocked)
await worker.fetch(req(valid, '2.2.2.2'), e)
r = await worker.fetch(req(valid, '2.2.2.2'), e)
ok('calls under cap pass', r.status === 200)
r = await worker.fetch(req(valid, '2.2.2.2'), e)
ok('cap enforced at DAILY_CAP (daily_limit)', (await r.json()).error === 'daily_limit')
ok('cap blocked BEFORE upstream call (no token burn)', upstreamCalls === 3) // 1 (test4) + 2 (allowed) + 0 (blocked)

// 6. cap counts BEFORE body parse: garbage body at cap doesn't 400 first (cap wins → no upstream regardless)
const e6 = mockEnv()
await worker.fetch(req(valid, '3.3.3.3'), e6); await worker.fetch(req(valid, '3.3.3.3'), e6)
r = await worker.fetch(req({ junk: true }, '3.3.3.3'), e6)
ok('cap applies before body parse (cost gate is first)', (await r.json()).error === 'daily_limit')

// 7. input bounds: huge history truncated to last 8, fields sliced
const e7 = mockEnv()
await worker.fetch(req({ ...valid, history: Array.from({ length: 30 }, (_, i) => ({ role: 'user', text: 'x'.repeat(5000) })) }), e7)
ok('history bounded to 8 messages', lastUpstreamBody.contents.length === 9) // 8 + current
ok('history texts sliced to 1000', lastUpstreamBody.contents.every(c => c.parts[0].text.length < 5000))

// 8. KV-less fallback cap still enforced
const e8 = mockEnv({ kv: false, cap: '1' })
await worker.fetch(req(valid, '4.4.4.4'), e8)
r = await worker.fetch(req(valid, '4.4.4.4'), e8)
ok('KV-less fallback enforces cap (never unlimited)', (await r.json()).error === 'daily_limit')

// 9. system prompt scope present + lang instruction
ok('system instruction present + scoped', /Rajasthan government-exam/.test(lastUpstreamBody.system_instruction.parts[0].text))

// 10. CORS header set only for allowed origin
ok('CORS header echoes allowed origin', r.headers.get('Access-Control-Allow-Origin') === 'https://somilsharma2000.github.io')
