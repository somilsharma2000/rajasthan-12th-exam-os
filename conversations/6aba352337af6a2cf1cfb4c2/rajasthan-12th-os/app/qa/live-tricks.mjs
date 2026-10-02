// One-off cycle 11: live tricks verification on production
import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--disable-gpu'] })
const p = await b.newPage()
const errs = []
p.on('pageerror', e => errs.push(e.message))
await p.goto('https://somilsharma2000.github.io/rajasthan-12th-exam-os/?nocache=' + Date.now(), { waitUntil: 'networkidle0' })
await p.evaluate(() => localStorage.setItem('rjx-onboard', '1')); await p.reload({ waitUntil: 'networkidle0' })
const hasTile = await p.evaluate(() => !![...document.querySelectorAll('button')].find(x => /ट्रिक्स|Tricks/.test(x.textContent)))
await p.evaluate(() => { [...document.querySelectorAll('button')].find(x => /ट्रिक्स|Tricks/.test(x.textContent))?.click() })
await new Promise(r => setTimeout(r, 2000))
const st = await p.evaluate(() => ({
  screen: !!document.querySelector('#tricksScreen'),
  cards: document.querySelectorAll('.trickCard').length,
  count: document.querySelector('#tricksScreen .trickCount')?.textContent
}))
console.log('tile:', hasTile, '| screen:', st.screen, '| cards:', st.cards, '| count:', st.count?.trim())
// open one trick + check verif badge + geo filter
await p.evaluate(() => document.querySelector('.trickHead')?.click()); await new Promise(r => setTimeout(r, 500))
const det = await p.evaluate(() => ({
  mn: !!document.querySelector('.trickMnemonic'),
  chain: document.querySelectorAll('.trickChain li').length,
  verif: document.querySelector('.trickVerif')?.textContent
}))
console.log('mnemonic:', det.mn, '| chain items:', det.chain, '| verif badge:', det.verif?.trim())
await p.evaluate(() => { [...document.querySelectorAll('.chip')].find(c => /भूगोल|Geography/.test(c.textContent))?.click() }); await new Promise(r => setTimeout(r, 600))
const geo = await p.evaluate(() => Number((document.querySelector('#tricksScreen .trickCount')?.textContent.match(/\d+/) || [0])[0]))
console.log('geo filter count:', geo, '(expect 15) | page errors:', errs.length)
await b.close(); process.exit(hasTile && st.screen && st.cards === 55 && det.mn && det.chain > 0 && geo === 15 && errs.length === 0 ? 0 : 1)
