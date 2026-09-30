// Generates src/data/bank/manifest.js — static imports for every bank file.
// Run automatically before every build (see package.json "build" script).
import { readdirSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const BANK = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/bank')
const files = readdirSync(BANK).filter(f => f.endsWith('.js') && f !== 'index.js' && f !== 'manifest.js').sort()
const imports = files.map((f, i) => `import * as m${i} from './${f}'`).join('\n')
const arr = `export const MODULES = [${files.map((_, i) => `m${i}`).join(', ')}]`
writeFileSync(resolve(BANK, 'manifest.js'), `// AUTO-GENERATED — do not edit. Regenerated on every build.\n${imports}\n${arr}\n`)
console.log('manifest.js generated with', files.length, 'bank modules')

// Also emits src/data/bank-meta.js — tiny per-subject/PYQ counts so the app shell
// can render home/hub/setup without loading the whole bank chunk.
const ex_ok = q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))
const seed = (await import(resolve(BANK, '../questions.js'))).QUESTIONS || []
const raw = [...seed]
for (const f of files) { const m = await import(resolve(BANK, f)); for (const k in m) if (Array.isArray(m[k])) raw.push(...m[k]) }
const ok = raw.filter(ex_ok)
const bySubject = {}
for (const q of ok) bySubject[q.subject] = (bySubject[q.subject] || 0) + 1
const PYQ_PREFIXES = { cet: 'cet24-', ldc: 'ldc24-', pol: 'pol22-', sten: 'sten24-' }
const pyqByIdPrefix = {}
for (const [k, pre] of Object.entries(PYQ_PREFIXES)) pyqByIdPrefix[k] = ok.filter(q => q.origin === 'real_pyq' && q.id.startsWith(pre)).length
const metaSrc = `// AUTO-GENERATED — do not edit. Regenerated on every build.\nexport const BANK_META = ${JSON.stringify({ shippable: ok.length, bySubject, pyqByIdPrefix })}\n`
writeFileSync(resolve(BANK, '../bank-meta.js'), metaSrc)
console.log('bank-meta.js generated:', ok.length, 'shippable,', Object.keys(bySubject).length, 'subjects')
