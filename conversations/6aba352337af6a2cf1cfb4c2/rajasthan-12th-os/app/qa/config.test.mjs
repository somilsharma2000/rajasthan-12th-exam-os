// CONFIG INTEGRITY TEST (cycle 9) — locks exam configs to facts SETTLED from official
// notifications (4-pass verified 2026-10-02). Run: node qa/config.test.mjs
// Sources: gather/radar-settle-1-cet-jail.md (RSSB Adv 08/2024, Adv 17/2024),
// gather/radar-settle-2-hc-dc.md (RHCJ notification RHCJ/Exam Cell/JA/2022/2748),
// gather/radar-settle-3-librarian.md (RSSB Librarian G-3 advt, 12th + C.Lib.Sc).
import assert from 'node:assert'
import { readFileSync } from 'node:fs'
const src = readFileSync(new URL('../src/data/exams.js', import.meta.url), 'utf-8')

// 1. CET 12th: NO negative marking for wrong answers; 5th-option E rule with 1/3 penalty
const cet = src.slice(src.indexOf("id: 'cet-12th'"), src.indexOf("id: 'ldc-junior-assistant'"))
assert.ok(cet.includes("negative: { wrong: 'none'"), 'CET must have NO negative marking (Adv 08/2024)')
assert.ok(cet.includes('unattemptedPenalty'), 'CET must keep the 5th-option E unattempted-penalty rule')
assert.ok(cet.includes('150') && cet.includes('300') && cet.includes('180'), 'CET pattern 150Q/300 marks/180min')

// 2. Jail Prahari: 100Q x 4 marks, 400 total, 120 min, 1-mark negative (Adv 17/2024)
const jail = src.slice(src.indexOf("id: 'jail-prahari'"), src.indexOf("id: 'hostel-superintendent'"))
assert.ok(jail.includes('totalQuestions: 100') && jail.includes('marksPerQuestion: 4') && jail.includes('totalMarks: 400') && jail.includes('durationMin: 120'), 'Jail Prahari = 100Q x 4 marks / 400 / 2h')
assert.ok(jail.includes("'1-mark-per-wrong'"), 'Jail Prahari negative = 1 mark per wrong answer')
assert.ok(!jail.includes("'1/3'"), 'Jail Prahari must NOT carry the old 1/3 negative')

// 3. Graduate-level exclusions stay excluded: High Court JA + District Court clerk (RHCJ 2022: graduate mandatory)
for (const ex of ['high-court-ja', 'district-court-clerk']) {
  const i = src.indexOf(ex)
  assert.ok(i > -1, `${ex} must be listed (as excluded)`)
  const block = src.slice(i, i + 400)
  assert.ok(/EXCLUDED.*graduate/i.test(block), `${ex} must stay EXCLUDED as graduate-level`)
}

// 4. Librarian Grade-3 stays IN scope: 12th + Certificate in Library Science qualifies (RSSB advt)
assert.ok(src.includes("id: 'librarian-grade3'"), 'Librarian G-3 must remain an included exam (12th-level post)')

console.log('config tests: ALL PASS (4 settled-fact locks)')
