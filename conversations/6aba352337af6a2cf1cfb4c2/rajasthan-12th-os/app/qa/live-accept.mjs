// LIVE acceptance: fresh user on production URL
import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] })
const p = await b.newPage(); await p.setViewport({ width: 375, height: 860 }); await p.setCacheEnabled(false)
const ok = (n, c) => { console.log((c ? 'PASS' : 'FAIL') + ' ' + n); if (!c) process.exitCode = 1 }
await p.goto('https://somilsharma2000.github.io/rajasthan-12th-exam-os/', { waitUntil: 'networkidle0' })
await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil: 'networkidle0' })
await new Promise(r => setTimeout(r, 800))
ok('live: first-visit strip renders (fresh user)', await p.evaluate(() => !!document.querySelector('.onboard') && document.querySelectorAll('.onbStep').length === 3))
await p.evaluate(() => document.querySelector('.onboard .iconBtn').click())
await p.reload({ waitUntil: 'networkidle0' })
await p.waitForSelector('.examCard', { timeout: 15000 }) // render-gate: strip-absence is trivially true on a blank page
ok('live: strip dismiss persists', await p.evaluate(() => !document.querySelector('.onboard')))
// full journey: mock → result momentum CTA
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /Stenographer|स्टेनोग्राफर/.test(b2.textContent)); x.click() })
await new Promise(r => setTimeout(r, 600))
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /शुरू करें/.test(b2.textContent)); x.click() })
await new Promise(r => setTimeout(r, 600))
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /मॉक टेस्ट/.test(b2.textContent)); x.click() })
await new Promise(r => setTimeout(r, 1500))
await p.keyboard.press('2'); await new Promise(r => setTimeout(r, 400)) // one wrong-or-right answer
await p.evaluate(() => document.querySelector('.dock button[aria-label]').click()); await new Promise(r => setTimeout(r, 600)) // open palette (SVG icon button)
await p.evaluate(() => { const cells = [...document.querySelectorAll('.pal')]; cells[cells.length - 1].click() }); await new Promise(r => setTimeout(r, 500)) // jump to last question (cells, not buttons)
await new Promise(r => setTimeout(r, 400))
await p.evaluate(() => { const x = [...document.querySelectorAll('.dock button')].find(b2 => /जमा/.test(b2.textContent)); for (let i = 0; i < 6; i++) x.click() })
await new Promise(r => setTimeout(r, 1500))
ok('live: result renders', await p.evaluate(() => !!document.querySelector('.gauge')))
ok('live: momentum CTA branch', await p.evaluate(() => {
  const next = document.querySelector('.dockNext'); if (!next) return false
  const errs = document.querySelectorAll('.explain.err').length
  return errs > 0 ? /एरर रिव्यू|Review errors/.test(next.textContent) : /फिर से करें|Retry/.test(next.textContent)
}))

// cycle-3: admin separation on production
await p.goto('https://somilsharma2000.github.io/rajasthan-12th-exam-os/', { waitUntil: 'networkidle0' })
await p.reload({ waitUntil: 'networkidle0' }); await new Promise(r => setTimeout(r, 800))
ok('live: owner console opens on 5 footer taps', await p.evaluate(() => {
  const note = [...document.querySelectorAll('p.note')].find(x => /स्नैपशॉट|snapshot/i.test(x.textContent))
  if (!note) return false
  for (let i = 0; i < 5; i++) note.click()
  return new Promise(res => setTimeout(() => res(document.body.textContent.includes('बैकएंड वर्कर अभी') || document.body.textContent.includes('No backend worker connected') || document.body.textContent.includes('एडमिन टोकन')), 900))
}))
ok('live: admin token never lands in localStorage', await p.evaluate(() => !Object.keys(localStorage).includes('rjx-owner-token')))
await b.close()
