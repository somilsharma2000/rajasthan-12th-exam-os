import puppeteer from 'puppeteer-core'
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox','--disable-gpu'] })
const p = await b.newPage()
await p.setViewport({ width: 414, height: 896 })
await p.goto('http://localhost:4173', { waitUntil: 'networkidle0' })
const cs = (sel, prop) => p.evaluate((s, pr) => { const el = document.querySelector(s); return el ? getComputedStyle(el)[pr] : 'MISSING' }, sel, prop)
const checks = [
  ['body bg dark', await cs('body','backgroundColor')],
  ['examCard bg', await cs('.examCard','backgroundColor')],
  ['examCard border', await cs('.examCard','borderColor')],
  ['primary btn', await cs('.tile ~ * ~ .grid + .note + .note, .primary','backgroundColor')],
  ['text color', await cs('.hero h1','color')],
  ['gauge', await cs('.gauge','backgroundImage')],
]
console.log(JSON.stringify(checks, null, 1))
// navigation + key screens
const cards = await p.$$('.examCard')
await cards[0].click(); await new Promise(r => setTimeout(r, 300))
console.log('hub featured:', await cs('.featured','backgroundColor'), '| trust badge:', await cs('.trust','color'))
console.log('dock fixed:', await cs('.dock','position'), '| dock bottom:', await cs('.dock','bottom'))
await p.evaluate(() => [...document.querySelectorAll('.dock button')].find(x => /शुरू|Start/.test(x.textContent))?.click()); await new Promise(r => setTimeout(r, 300))
await p.evaluate(() => [...document.querySelectorAll('.modeCard')][0]?.click()); await new Promise(r => setTimeout(r, 500))
console.log('opt min-height:', await cs('.opt','minHeight'), '| opt bg:', await cs('.opt','backgroundColor'))
console.log('qText size:', await cs('.qText','fontSize'), 'lh:', await cs('.qText','lineHeight'))
console.log('progress fill:', await cs('.progressFill','width'))
await p.evaluate(() => [...document.querySelectorAll('.dock button')][1]?.click()); await new Promise(r => setTimeout(r, 300))
console.log('palette sheet:', await cs('.paletteSheet','backgroundColor'))
console.log('pal buttons:', (await p.$$('.pal')).length)
await p.evaluate(() => document.querySelector('.paletteOverlay').click()); await new Promise(r => setTimeout(r, 200))
// exit-confirm test: press back with 0 answers should NOT show modal
await p.evaluate(() => [...document.querySelectorAll('.bar .iconBtn')][0]?.click()); await new Promise(r => setTimeout(r, 300))
console.log('exit modal (0 answered):', (await p.$('.modalWrap')) ? 'SHOWN(unexpected)' : 'not shown(ok)')
// hub -> start practice again, answer 1, exit -> confirm modal expected
await p.evaluate(() => [...document.querySelectorAll('.dock button')].find(x => /शुरू|Start/.test(x.textContent))?.click()); await new Promise(r => setTimeout(r, 300))
await p.evaluate(() => [...document.querySelectorAll('.modeCard')][0]?.click()); await new Promise(r => setTimeout(r, 500))
await p.evaluate(() => [...document.querySelectorAll('.opt')][1]?.click()); await new Promise(r => setTimeout(r, 200))
await p.evaluate(() => [...document.querySelectorAll('.bar .iconBtn')][0]?.click()); await new Promise(r => setTimeout(r, 300))
console.log('exit modal (1 answered):', (await p.$('.modalWrap')) ? 'shown(ok)' : 'MISSING(bug)')
await b.close()
