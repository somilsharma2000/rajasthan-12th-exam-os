// Restores app/index.html if missing (gitignored file periodically disappears
// in the sandbox — known-good copy kept in scripts/index.template.html).
import fs from 'fs'
if (!fs.existsSync('index.html')) {
  fs.copyFileSync('scripts/index.template.html', 'index.html')
  console.log('ensure-index: restored index.html from template')
}
