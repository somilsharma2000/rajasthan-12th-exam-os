// A5 analysis: rank raj-gk fact-clusters by PYQ recurrence (throwaway)
import { readFile } from 'fs/promises'
const files = ['raj-gk-history.js', 'raj-gk-geo.js', 'raj-gk-polity.js', 'raj-gk-depth.js', 'pyq-cet-2024.js', 'pyq-ldc-2024.js', 'pyq-police-2022.js', 'pyq-steno-2024.js']
let qs = []
for (const f of files) {
  const src = await readFile(`src/data/bank/${f}`, 'utf8')
  const m = src.match(/=\s*(\[[\s\S]*\])\s*;?\s*$/)
  if (!m) { console.log('no-match', f); continue }
  try { const arr = eval(m[1]); qs = qs.concat(arr); } catch (e) { console.log('parse-fail', f, e.message) }
}
const raj = qs.filter(q => q.subject === 'raj-gk')
console.log('total scanned:', qs.length, '| raj-gk:', raj.length)
const clusters = [
  ['dynasty/succession', /उत्तराधिकारी|वंशावली|गुहिल|सिसोदिया|चौहान|राठौड़|महाराणा|कुम्भा|सांगा|पृथ्वीराज|बापा|उदय सिंह|प्रताप/i],
  ['battles/chronology', /युद्ध|तराइन|हल्दीघाटी|खानवा|चित्तौड़|घेराबंदी|अभियान|मुगल|अकबर/i],
  ['1857 heroes', /1857|आंदोलन|क्रांति|नासिराबाद|नीमच|आउवा|एरिनपुरा|सिपाही|विद्रोह|स्वतंत्रता संग्राम/i],
  ['integration 1949-56', /एकीकरण|विलय|मत्स्य|राजस्थान संघ|बड़ा राजस्थान|महान राजस्थान|संयुक्त राजस्थान/i],
  ['folk deities', /लोकदेव|पाबूजी|गोगाजी|तेजाजी|रामदेवजी|मेहाजी|हरभूजी|पंचपीठ|गोगामेड़ी|परबतसर|झुंझार/i],
  ['districts/admin', /जिला|अंचल|मंडल|प्रखंड|क्षेत्रफल/i],
  ['rivers/dams', /नदी|बांध|जलाशय|चंबल|बनास|लूणी|सांभर|माही/i],
  ['CM/Governor/lists', /मुख्यमंत्री|राज्यपाल|प्रथम मुख्य/i],
  ['formation years', /1949|1951|1956|किस वर्ष/i]
]
for (const [name, re] of clusters) {
  const hits = raj.filter(q => re.test(q.q?.hi || q.q || '') || re.test(JSON.stringify(q.options?.hi || q.options || [])))
  console.log(String(hits.length).padStart(4), name)
  if (hits.length && clusters.findIndex(c => c[0] === name) < 5) hits.slice(0, 2).forEach(h => console.log('    *', (h.q?.hi || h.q || '').slice(0, 100), '|', h.origin || '?', h.verification || '?'))
}
