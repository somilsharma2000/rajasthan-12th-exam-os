import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-gpu','--window-size=414,896'] })
const p = await b.newPage()
await p.setViewport({ width: 414, height: 896, deviceScaleFactor: 2 })
const shot = async n => { await p.screenshot({ path: `../shots/${n}.png` }); console.log('shot', n) }
await p.goto('http://localhost:4173', { waitUntil: 'networkidle0' })
await shot('01-home')
// open an exam hub (Steno - last card)
const cards = await p.$$('.examCard')
await cards[cards.length - 1].click(); await new Promise(r => setTimeout(r, 400)); await shot('02-hub')
// start -> setup
await p.evaluate(() => [...document.querySelectorAll('.dock button')].find(x => x.textContent.includes('शुरू') || x.textContent.includes('Start'))?.click())
await new Promise(r => setTimeout(r, 400)); await shot('03-setup')
// start practice (hero mode card)
await p.evaluate(() => [...document.querySelectorAll('.modeCard')][0]?.click())
await new Promise(r => setTimeout(r, 600)); await shot('04-player')
// answer option A, see feedback
await p.evaluate(() => [...document.querySelectorAll('.opt')][0]?.click())
await new Promise(r => setTimeout(r, 400)); await shot('05-feedback')
// open palette
await p.evaluate(() => [...document.querySelectorAll('.dock button')][1]?.click())
await new Promise(r => setTimeout(r, 400)); await shot('06-palette')
await p.evaluate(() => document.querySelector('.paletteOverlay')?.click())
// finish -> result
await p.evaluate(() => [...document.querySelectorAll('.dock button')].find(x => /समाप्त|Finish/.test(x.textContent))?.click())
await new Promise(r => setTimeout(r, 600)); await shot('07-result')
await b.close()
