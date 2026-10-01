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
  ok('first-visit strip shown to true first-timer', await p.evaluate(() => !!document.querySelector('.onboard') && document.querySelectorAll('.onbStep').length === 3))
  await p.evaluate(() => document.querySelector('.onboard .iconBtn').click())
  ok('strip dismissed + persists across reload', await p.evaluate(() => !document.querySelector('.onboard')) && (await p.reload({ waitUntil: 'networkidle0' }), await p.evaluate(() => !document.querySelector('.onboard'))))
  await p.evaluate(() => { localStorage.setItem('rjx-onboard', '1'); localStorage.removeItem('examos-history') }) // keep deterministic practice state for flow below
  ok('icons are SVG (no emoji glyphs)', await p.evaluate(() => !!document.querySelector('.tile svg') && !['⌨', '📖', '▦'].some(e => document.body.textContent.includes(e))))
  // today-plan: TRUE cold start → plan card with pick-exam (no exam, no history, no errors yet)
  ok('cold start shows आज का प्लान with pick-exam', await p.evaluate(() => !!document.body.textContent.match(/आज का प्लान/) && !!document.body.textContent.match(/परीक्षा चुनें/)))

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
  ok('result shows speed analytics (bars + measured avg)', await p.evaluate(() => {
    const card = [...document.querySelectorAll('.card h3')].find(h => /गति विश्लेषण|Speed analysis/.test(h.textContent))
    if (!card) return false
    const box = card.closest('.card')
    return box.querySelectorAll('.timeRow').length > 0 && /औसत \d+ सेकंड|Avg \d+s/.test(box.textContent)
  }))
  ok('result momentum CTA correct (errors→review primary, else retry)', await p.evaluate(() => {
    const next = document.querySelector('.dockNext'); if (!next) return false
    const errs = document.querySelectorAll('.explain.err').length
    return errs > 0 ? /एरर रिव्यू|Review errors/.test(next.textContent) : /फिर से करें|Retry/.test(next.textContent)
  }))

  // today-plan: 9-day mock gap → cadence nudge with honest reason (exam selection persists across reload now)
  const planBefore = await p.evaluate(() => document.body.textContent.includes('1 मॉक टेस्ट दें'))
  await p.evaluate(() => { const h = JSON.parse(localStorage.getItem('examos-history') || '[]'); h.unshift({ key: 'k1', examId: 'steno', examName: 'x', date: Date.now() - 9 * 86400000, score: 50, max: 100, accuracy: 50, correct: 25, wrong: 25, total: 50 }); localStorage.setItem('examos-history', JSON.stringify(h)) })
  await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 700))
  const planAfter = await p.evaluate(() => document.body.textContent.includes('1 मॉक टेस्ट दें') && document.body.textContent.includes('पिछले मॉक को 9 दिन'))
  ok('today-plan reacts to 9-day mock gap (cadence nudge, honest reason)', !planBefore && planAfter)

  // weak-topic signals: real attempts write topic stats; progress shows honest state until 5+ samples
  const tsAfter = await p.evaluate(() => JSON.parse(localStorage.getItem('examos-topic-stats') || '{}'))
  ok('topic stats written by real session attempts', Object.keys(tsAfter).length > 0 && Object.values(tsAfter).some(v => v.a >= 1))
  ok('no topic appears weak below 5 attempts (honesty)', await p.evaluate(() => {
    const s = JSON.parse(localStorage.getItem('examos-topic-stats') || '{}')
    return Object.values(s).every(v => v.a < 5) // the smoke mock answers < 5 per topic
  }))
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b => /प्रगति|Progress/.test(b.textContent)); if (x) x.click() })
  await new Promise(r => setTimeout(r, 600))
  const onProgress = await p.evaluate(() => document.body.textContent.includes('प्रगति रिपोर्ट') || document.body.textContent.includes('Progress Report'))
  ok('progress screen opens', onProgress)
  if (onProgress) ok('progress shows honest not-enough-data state (no invented bars)', await p.evaluate(() => document.body.textContent.includes('काफ़ी डेटा नहीं') || document.body.textContent.includes('Not enough data')))
  await p.goBack(); await new Promise(r => setTimeout(r, 600))

  // positive path: a topic with 5+ real attempts renders as a weak-topic bar (data shape contract)
  await p.evaluate(() => { const s = JSON.parse(localStorage.getItem('examos-topic-stats') || '{}'); s['maths::प्रतिशत'] = { subject: 'maths', topic: 'प्रतिशत', a: 6, c: 2 }; localStorage.setItem('examos-topic-stats', JSON.stringify(s)) })
  await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b => /प्रगति|Progress/.test(b.textContent)); if (x) x.click() })
  await new Promise(r => setTimeout(r, 600))
  ok('weak topic with 5+ attempts renders bar with measured accuracy', await p.evaluate(() => {
    const row = [...document.querySelectorAll('.listRow')].find(r => r.textContent.includes('प्रतिशत'))
    return !!row && row.textContent.includes('33%') && !!row.querySelector('.tFill')
  }))
  await p.goBack(); await new Promise(r => setTimeout(r, 500))

  await p.evaluate(() => localStorage.removeItem('examos-history')); await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 700))
  // spaced revision E2E: mock made real error records (+1d, not due). Age one → home card → revision session → ladder updates
  const revQid = await p.evaluate(() => {
    const eb = JSON.parse(localStorage.getItem('examos-error-book') || '{}')
    const ids = Object.keys(eb); if (!ids.length) return null
    eb[ids[0]].nextReviewAt = Date.now() - 3600000 // now overdue
    localStorage.setItem('examos-error-book', JSON.stringify(eb)); return ids[0]
  })
  ok('mock created real error-book records', !!revQid)
  await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 800))
  ok('home plan card shows आज का रिवीजन when items are due', await p.evaluate(() => !!document.body.textContent.match(/आज का रिवीजन/) && [...document.querySelectorAll('button')].some(b2 => /आज का रिवीजन:|Today's revision/.test(b2.textContent))))
  await p.evaluate(() => { [...document.querySelectorAll('button')].find(b2 => /आज का रिवीजन:|Today's revision/.test(b2.textContent)).click() })
  await new Promise(r => setTimeout(r, 1500))
  ok('one-tap revision opens a practice session', await p.evaluate(() => /अभ्यास मोड|Practice/.test(document.body.textContent) && !!document.querySelector('.opt')))
  await p.keyboard.press('1'); await new Promise(r => setTimeout(r, 400))
  await p.evaluate(() => { [...document.querySelectorAll('.dock button')].find(b2 => /समाप्त|जमा|Finish|Submit/.test(b2.textContent))?.click() })
  await new Promise(r => setTimeout(r, 1200))
  ok('ladder responded to the attempt (advanced or reset, next review in future)', await p.evaluate((id) => {
    const eb = JSON.parse(localStorage.getItem('examos-error-book') || '{}')
    const rec = eb[id]; if (!rec) return false
    return rec.nextReviewAt > Date.now() && (rec.rung === 1 || rec.wrongCount >= 2)
  }, revQid))

  // back safety + traps
  await p.goBack(); await new Promise(r => setTimeout(r, 500))
  ok('browser Back intercepted (still app)', await p.evaluate(() => !!document.querySelector('.examCard, .gauge, .opt')))

  // typing module + stale-resume guards
  await p.evaluate(() => [...document.querySelectorAll('button')].find(x => x.textContent.trim() === '←')?.click())
  await new Promise(r => setTimeout(r, 400))
  await p.evaluate(() => { localStorage.setItem('examos-active-mock', JSON.stringify({ examId: 'ghost', mode: 'mock', ids: ['x'], answers: {}, idx: 0 })) })
  await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 700))
  ok('ghost resume state silently cleaned', await p.evaluate(() => !!document.querySelector('.examCard') && !/जारी रखें|Resume/.test(document.body.textContent)))

  // coach panel: student NEVER sees backend config (no URL input, no setup form)
  await p.evaluate(() => { [...document.querySelectorAll('button')].find(x => /स्टेनोग्राफर/.test(x.textContent))?.click() })
  await new Promise(r => setTimeout(r, 500))
  await p.evaluate(() => { [...document.querySelectorAll('button')].find(x => /शुरू करें/.test(x.textContent))?.click() })
  await new Promise(r => setTimeout(r, 500))
  await p.evaluate(() => { [...document.querySelectorAll('button')].find(x => /अभ्यास मोड/.test(x.textContent))?.click() })
  await new Promise(r => setTimeout(r, 1200))
  await p.keyboard.press('1'); await new Promise(r => setTimeout(r, 500)) // answer → explanation view exposes the coach button
  await p.evaluate(() => { [...document.querySelectorAll('button')].find(x => /AI कोच से पूछें|Ask AI Coach/.test(x.textContent))?.click() })
  await new Promise(r => setTimeout(r, 800))
  ok('coach panel shows NO backend config to students', await p.evaluate(() => {
    const sheet = document.querySelector('.paletteSheet'); if (!sheet) return false
    const hasUrlInput = !!sheet.querySelector('input[placeholder*="workers.dev"], input[placeholder*="https://"]')
    const hasSetupCopy = /serverless|ai-coach-worker|proxy/i.test(sheet.textContent)
    return !hasUrlInput && !hasSetupCopy
  }))
  await p.evaluate(() => { [...document.querySelectorAll('.paletteSheet .iconBtn')].find(x => /बंद|Close/.test(x.getAttribute('aria-label') || ''))?.click() })
  await new Promise(r => setTimeout(r, 400))

  // hidden Owner Console: 5 quick taps on the footer data line opens it; 2 taps must NOT
  await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 700)) // back to home (practice session isn't persisted; reload lands clean on home)
  await p.evaluate(() => { const note = [...document.querySelectorAll('p.note')].find(x => /स्नैपशॉट|snapshot/i.test(x.textContent)); if (!note) return false; for (let i = 0; i < 2; i++) note.click() })
  await new Promise(r => setTimeout(r, 400))
  ok('2 footer taps do NOT open Owner Console', await p.evaluate(() => !document.body.textContent.includes('एडमिन टोकन डालें') && !document.body.textContent.includes('Enter admin token')))
  await p.evaluate(() => { const note = [...document.querySelectorAll('p.note')].find(x => /स्नैपशॉट|snapshot/i.test(x.textContent)); if (!note) return false; for (let i = 0; i < 5; i++) note.click() })
  await new Promise(r => setTimeout(r, 600))
  ok('5 quick footer taps open Owner Console (honest state)', await p.evaluate(() =>
    document.body.textContent.includes('एडमिन टोकन डालें') || document.body.textContent.includes('Enter admin token')
    || document.body.textContent.includes('बैकएंड वर्कर अभी') || document.body.textContent.includes('No backend worker connected')))
  ok('Owner Console has no admin-token in localStorage (session-only)', await p.evaluate(() => !Object.keys(localStorage).includes('rjx-owner-token')))

  ok('zero page errors', errors.length === 0)
  if (errors.length) console.log('errors:', errors)
  await b.close()
  process.exit(FAIL ? 1 : 0)
} catch (e) { console.error('SMOKE CRASHED:', e.stack); process.exit(1) }
