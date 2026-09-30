import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] })
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 900 })
await p.setCacheEnabled(false)
await p.evaluate(async () => { const rs = await navigator.serviceWorker?.getRegistrations?.() || []; await Promise.all(rs.map(r => r.unregister())) }).catch(() => {})
p.on('pageerror', e => console.log('PAGEERROR:', String(e).slice(0, 200)))
await p.goto('http://localhost:4173', { waitUntil: 'networkidle0' })
await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /स्टेनोग्राफर/.test(x.textContent))?.click())
await new Promise(r => setTimeout(r, 500))
await p.evaluate(() => [...document.querySelectorAll('button')].find(x => x.textContent.trim() === 'शुरू करें')?.click())
await new Promise(r => setTimeout(r, 500))
console.log('mode screen:', await p.evaluate(() => [...document.querySelectorAll('button')].map(x => x.textContent.trim().slice(0, 22)).join(' | ')))
await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /अभ्यास मोड/.test(x.textContent))?.click())
await new Promise(r => setTimeout(r, 600))
await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /विज्ञान/.test(x.textContent))?.click())
await new Promise(r => setTimeout(r, 1200))
console.log('player?', await p.evaluate(() => !!document.querySelector('.opt')))
// answer question 1 -> feedback with coach button
const answered = await p.evaluate(() => { const o = document.querySelectorAll('.opt'); if (o.length) { o[1].click(); return true } return false })
await new Promise(r => setTimeout(r, 400))
const coachBtn = await p.evaluate(() => {
  const b2 = [...document.querySelectorAll('button')].find(x => /AI कोच|Ask AI Coach/.test(x.textContent))
  if (b2) { b2.click(); return true }
  return false
})
console.log('answered:', answered, 'coachBtn:', coachBtn)
if (coachBtn) {
  await new Promise(r => setTimeout(r, 600))
  console.log('setup state:', await p.evaluate(() => document.body.textContent.includes('कोच अभी सेट नहीं है')))
  // configure endpoint
  await p.evaluate(() => {
    const i = document.querySelector('.coachInput')
    const s = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    s.call(i, 'https://example-proxy.workers.dev')
    i.dispatchEvent(new Event('input', { bubbles: true }))
    ;[...document.querySelectorAll('button')].find(x => /सेव|Save/.test(x.textContent))?.click()
  })
  await new Promise(r => setTimeout(r, 500))
  console.log('chat state:', await p.evaluate(() => document.body.textContent.includes('प्रश्न के बारे में पूछें')))
  // send a message -> fetch to dead endpoint fails -> honest error
  await p.type('.coachInput', 'यह प्रश्न समझाइए', { delay: 0 })
  await p.evaluate(() => [...document.querySelectorAll('button')].find(x => /भेजें|Send/.test(x.textContent))?.click())
  await new Promise(r => setTimeout(r, 1500))
  console.log('honest error:', await p.evaluate(() => document.body.textContent.includes('कोच उत्तर नहीं दे पाया')))
  await p.screenshot({ path: '../shots/15-coach.png' })
}
await b.close()
