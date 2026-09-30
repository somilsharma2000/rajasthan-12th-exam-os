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
