// BANK LOADER — aggregates every module via the generated manifest (build time).
import { QUESTIONS as SEED } from '../questions.js'
import { MODULES } from './manifest.js'

const RAW = [...SEED]
for (const m of MODULES) {
  for (const key in m) if (Array.isArray(m[key])) RAW.push(...m[key])
}

// DEDUPE: by id + exact question text
const seen = new Set(), seenText = new Set()
export const ALL_QUESTIONS = RAW.filter(q => {
  if (!q || typeof q !== 'object') return false
  const text = (q.q && (q.q.hi || '')).trim()
  if (q.id && seen.has(q.id)) return false
  if (text && seenText.has(text)) return false
  if (q.id) seen.add(q.id)
  if (text) seenText.add(text)
  return true
})

export const BANK_STATS = {
  total: ALL_QUESTIONS.length,
  shippable: ALL_QUESTIONS.filter(q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))).length,
  realPyq: ALL_QUESTIONS.filter(q => q.origin === 'real_pyq').length,
  agentAuthored: ALL_QUESTIONS.filter(q => q.origin === 'agent_authored').length,
  bySubject: ALL_QUESTIONS.reduce((acc, q) => { acc[q.subject] = (acc[q.subject] || 0) + 1; return acc }, {})
}
