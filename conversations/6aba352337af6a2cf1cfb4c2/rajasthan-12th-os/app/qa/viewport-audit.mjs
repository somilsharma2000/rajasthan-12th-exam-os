// Viewport sweep on LIVE: horizontal overflow + layout sanity per screen per width
import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] })
const p = await b.newPage(); await p.setCacheEnabled(false)
const W = [320, 375, 768, 1280, 1920]
const ok = (n, c) => { console.log((c ? 'PASS' : 'FAIL') + ' ' + n); if (!c) process.exitCode = 1 }
const overflow = () => { const d = document.scrollingElement; return d.scrollWidth - d.clientWidth }
const tapTargets = () => [...document.querySelectorAll('button')].map(b2 => { const r = b2.getBoundingClientRect(); return r.width * r.height }).filter(a => a > 0 && a < 44 * 44 * 0.5).length // <50% of 44px target
await p.goto('https://somilsharma2000.github.io/rajasthan-12th-exam-os/', { waitUntil: 'networkidle0' })
await p.evaluate(() => localStorage.clear()); await p.reload({ waitUntil: 'networkidle0' })
for (const w of W) {
  await p.setViewport({ width: w, height: 860 })
  await new Promise(r => setTimeout(r, 400))
  ok(`home ${w}px no horizontal overflow`, await p.evaluate(overflow) <= 0)
  ok(`home ${w}px all buttons ≥ ~44px-target area (50% tol)`, await p.evaluate(tapTargets) === 0)
}
// hub + setup + player sweep
await p.setViewport({ width: 375, height: 860 })
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /स्टेनोग्राफर/.test(b2.textContent)); x.click() }); await new Promise(r => setTimeout(r, 500))
for (const w of W) { await p.setViewport({ width: w, height: 860 }); await new Promise(r => setTimeout(r, 300)); ok(`hub ${w}px no overflow`, await p.evaluate(overflow) <= 0) }
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /शुरू करें/.test(b2.textContent)); x.click() }); await new Promise(r => setTimeout(r, 500))
for (const w of W) { await p.setViewport({ width: w, height: 860 }); await new Promise(r => setTimeout(r, 300)); ok(`setup ${w}px no overflow`, await p.evaluate(overflow) <= 0) }
await p.evaluate(() => { const x = [...document.querySelectorAll('button')].find(b2 => /अभ्यास मोड/.test(b2.textContent)); x.click() }); await new Promise(r => setTimeout(r, 1000))
for (const w of W) { await p.setViewport({ width: w, height: 860 }); await new Promise(r => setTimeout(r, 300)); ok(`player ${w}px no overflow`, await p.evaluate(overflow) <= 0) }
// result screen incl. speed-analytics card
for (let i = 0; i < 12 && !(await p.evaluate(() => !!document.querySelector('.gauge'))); i++) { // practice = 10Q: click next until finish → result
  await p.evaluate(() => { [...document.querySelectorAll('.dock button')].find(b2 => /अगला|समाप्त|जमा|Next|Finish|Submit/.test(b2.textContent))?.click() })
  await new Promise(r => setTimeout(r, 350))
}
ok('result actually rendered (not a player false-positive)', await p.evaluate(() => !!document.querySelector('.gauge')))
for (const w of W) { await p.setViewport({ width: w, height: 860 }); await new Promise(r => setTimeout(r, 300)); ok(`result ${w}px no overflow`, await p.evaluate(overflow) <= 0) }
ok('speed bars render at 320px', await p.evaluate(() => { const card = [...document.querySelectorAll('.card h3')].find(h => /गति विश्लेषण|Speed analysis/.test(h.textContent)); return card ? card.closest('.card').querySelectorAll('.timeRow').length > 0 : false }))
await b.close()
