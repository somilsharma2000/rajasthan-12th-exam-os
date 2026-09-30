// ADVERSARIAL BANK VALIDATOR — constitution gate: no question ships broken.
import { readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SEED = (await import(resolve(ROOT, 'src/data/questions.js'))).QUESTIONS
let files = []
try { files = readdirSync(resolve(ROOT, 'src/data/bank')).filter(f => f.endsWith('.js') && f !== 'index.js' && f !== 'manifest.js') } catch { files = [] }
let ALL = [...SEED], issues = [], subjectCounts = {}, ids = new Set()
for (const f of files) {
  const mod = await import(resolve(ROOT, 'src/data/bank', f))
  for (const k in mod) if (Array.isArray(mod[k])) ALL.push(...mod[k])
}
const SUBJECTS = new Set(['raj-gk','india-gk','current-affairs','maths','reasoning','science','english','hindi','computer','agriculture','child-pedagogy','language','environment-science','library-science'])
for (const q of ALL) {
  const where = q.id || '??'
  if (!q.id) issues.push(`${where}: missing id`)
  else if (ids.has(q.id)) issues.push(`${where}: DUPLICATE id`)
  if (q.id) ids.add(q.id)
  if (!SUBJECTS.has(q.subject)) issues.push(`${where}: bad subject "${q.subject}"`)
  if (!q.q || !q.q.hi || !q.q.en) issues.push(`${where}: missing question text hi/en`)
  else if (q.q.hi.length < 12) issues.push(`${where}: question suspiciously short`)
  if (!q.options || !Array.isArray(q.options.hi) || q.options.hi.length !== 4 || !Array.isArray(q.options.en) || q.options.en.length !== 4) issues.push(`${where}: options must be exactly 4 (hi+en)`)
  else {
    if (new Set(q.options.hi.map(o => String(o).trim())).size !== 4) issues.push(`${where}: duplicate options (hi)`)
    if (q.options.hi.some(o => o === null || o === undefined || String(o).trim() === '')) issues.push(`${where}: empty option`)
  }
  if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) issues.push(`${where}: answer index invalid (${q.answer})`)
  if (!q.explanation || !q.explanation.hi || !q.explanation.en) issues.push(`${where}: missing explanation hi/en`)
  if (!q.provenance || !q.provenance.source) issues.push(`${where}: missing provenance`)
  if (q.origin !== 'real_pyq' && q.origin !== 'agent_authored') issues.push(`${where}: bad origin "${q.origin}"`)
  if (q.verification === 'UNVERIFIED' || (q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))) issues.push(`${where}: QUARANTINED/UNVERIFIED (excluded from shipping)`)
  subjectCounts[q.subject] = (subjectCounts[q.subject] || 0) + 1
}
const shippable = ALL.filter(q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))).length
console.log('FILES:', files.length)
console.log('TOTAL QUESTIONS:', ALL.length, '| SHIPPABLE:', shippable)
console.log('BY SUBJECT:', JSON.stringify(subjectCounts))
console.log(issues.length ? 'ISSUES (' + issues.length + '):\n' + issues.slice(0, 40).join('\n') : 'ZERO ISSUES — BANK PASSES')
process.exit(0)
