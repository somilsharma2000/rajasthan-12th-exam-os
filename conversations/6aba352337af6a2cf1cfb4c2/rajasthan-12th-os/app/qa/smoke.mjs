// BROWSER SMOKE TEST — release gate. Requires: `npm run build && npx vite preview --port 4173 &` then `npm run qa`.
// Mirrors docs/QA-MASTER-PROMPT.md module 20_TESTING + 25_REGRESSION. Default language is HI — click helpers match both.
import puppeteer from 'puppeteer-core'
const PORT = process.env.QA_PORT || 4173
const b = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] })
let FAIL = 0
const ok = (name, cond) => { console.log((cond ? 'PASS' : 'FAIL') + ' ' + name); if (!cond) FAIL++ }
try {
  const p = await b.newPage(); await p.setViewport({ width: 375, height: 860 })
  await p.setCacheEnabled(false)
  await p.evaluate(async () => { const rs = await navigator.serviceWorker?.getRegistrations?.() || []; await Promise.all(rs.map(r => r.unregister())) }).catch(() => {})
  const errors = []
  p.on('pageerror', e => errors.push(String(e).slice(0, 150)))
  const click = async (re) => { await p.evaluate(rx => { const x = [...document.querySelectorAll('button')].find(b2 => new RegExp(rx).test(b2.textContent)); if (x) x.click() }, re); await new Promise(r => setTimeout(r, 500)) }

  await p.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' })
  await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil: 'networkidle0' })
  ok('home renders with exam cards', await p.evaluate(() => !!document.querySelector('.examCard')))
  ok('icons are SVG (no emoji glyphs)', await p.evaluate(() => !!document.querySelector('.tile svg') && !['⌨', '📖', '▦'].some(e => document.body.textContent.includes(e))))

  // practice flow: answer via keyboard
  await click('Stenographer|स्टेनोग्राफर'); await click('शुरू|Start')
  await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /अभ्यास मोड/.test(x.textContent)).click())
  await new Promise(r => setTimeout(r, 1000))
  ok('practice player renders', await p.evaluate(() => !!document.querySelector('.opt')))
  await p.keyboard.press('2'); await new Promise(r => setTimeout(r, 300))
  ok('keyboard answer registers + explanation + provenance shown', await p.evaluate(() => !!document.querySelector('.opt.chosen') && !!document.querySelector('.explain') && !!document.querySelector('.explain .note')))

  // mock flow: finish → result → exactly 1 history record (idempotency) — restart in MOCK mode
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => b2.textContent.trim() === '←'); if (x) x.click() })
  await new Promise(r => setTimeout(r, 500))
  await p.evaluate(() => { const m = [...document.querySelectorAll('.modal button')]; const leave = m.find(b2 => /छोड़ें|Leave/.test(b2.textContent)); if (leave) leave.click() })
  await new Promise(r => setTimeout(r, 500))
  await click('Stenographer|स्टेनोग्राफर'); await click('शुरू|Start')
  await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /मॉक टेस्ट/.test(x.textContent)).click())
  await new Promise(r => setTimeout(r, 1200))
  await p.keyboard.press('1'); await new Promise(r => setTimeout(r, 250))
  await p.evaluate(() => document.querySelector('.dock button[aria-label]').click()); await new Promise(r => setTimeout(r, 400))
  await p.evaluate(() => { const b2 = [...document.querySelectorAll('.pal')]; b2[b2.length - 1].click() })
  await new Promise(r => setTimeout(r, 300))
  await p.evaluate(() => { const x = [...document.querySelectorAll('.dock button')].find(b2 => /जमा|Submit/.test(b2.textContent)); for (let i = 0; i < 5; i++) x.click() })
  await new Promise(r => setTimeout(r, 1200))
  ok('mock → result gauge with aria', await p.evaluate(() => { const g = document.querySelector('.gauge'); return !!g && !!g.getAttribute('aria-label') }))
  ok('10x submit spam → exactly 1 history record', await p.evaluate(() => JSON.parse(localStorage.getItem('examos-history') || '[]').length === 1))

  // back safety + traps
  await p.goBack(); await new Promise(r => setTimeout(r, 500))
  ok('browser Back intercepted (still app)', await p.evaluate(() => !!document.querySelector('.examCard, .gauge, .opt')))

  // typing module + stale-resume guards
  await p.evaluate(() => [...document.querySelectorAll('button')].find(x => x.textContent.trim() === '←')?.click())
  await new Promise(r => setTimeout(r, 400))
  await p.evaluate(() => { localStorage.setItem('examos-active-mock', JSON.stringify({ examId: 'ghost', mode: 'mock', ids: ['x'], answers: {}, idx: 0 })) })
  await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 700))
  ok('ghost resume state silently cleaned', await p.evaluate(() => !!document.querySelector('.examCard') && !/जारी रखें|Resume/.test(document.body.textContent)))

  ok('zero page errors', errors.length === 0)
  if (errors.length) console.log('errors:', errors)
  await b.close()
  process.exit(FAIL ? 1 : 0)
} catch (e) { console.error('SMOKE CRASHED:', e.message); process.exit(1) }
