// ENGINE UNIT TESTS — pure functions, node only (no browser needed).
// Run: npm test   (part of the release gate; see docs/QA-MASTER-PROMPT.md module 20_TESTING)
import { buildSession, scoreSession, speedStats, fmtTime, availableQuestions, shuffle, REV_LADDER, reviseErrorRecord, buildTodayPlan, mergeTopicStats, weakTopics, MIN_TOPIC_ATTEMPTS, buildShareData, calcNegativeMarks, calcAge, calcAgeEligibility } from '../src/engine.js'
import assert from 'node:assert'

// shapes mirror the real bank: q.answer is a number; pattern carries scoring config
const PATTERN = { totalQuestions: 10, durationMin: 10, marksPerQuestion: 1, negative: { wrong: '1/3' }, fifthOptionRule: { enabled: false } }
const EXAM = { id: 'test-exam', name: { hi: 'ट', en: 'T' }, subjects: ['gk'], pattern: PATTERN }
const mkQ = (id, correct, n = 4) => ({ id, subject: 'gk', options: { hi: Array(n).fill('o'), en: Array(n).fill('o') }, answer: correct, verification: 'VERIFIED', provenance: { level: 'VERIFIED', evidence: 'PYQ', source: 'unit-test' } })
const Q5 = [mkQ('q1', 0), mkQ('q2', 1), mkQ('q3', 2), mkQ('q4', 3), mkQ('q5', 0)]

// 1. scoreSession basics + negative marking (1 correct +1, 1 wrong -1/3 → 0.67)
const r = scoreSession({ mode: 'mock', config: EXAM, questions: Q5, answers: { q1: { choice: 0 }, q2: { choice: 0 }, q3: { choice: null } } })
assert.equal(r.correct, 1); assert.equal(r.wrong, 1); assert.equal(r.attempted, 2)
assert.ok(Math.abs(r.score - 0.67) < 0.011, 'score ' + r.score)

// 2. 'none' penalty mode: wrong costs nothing
const rn = scoreSession({ mode: 'mock', config: { ...EXAM, pattern: { ...PATTERN, negative: { wrong: 'none' } } }, questions: Q5, answers: { q1: { choice: 1 }, q2: { choice: 1 } } })
assert.ok(Math.abs(rn.score - 1) < 1e-9, 'no-penalty: only correct counts, ' + rn.score)

// 3. 1/4 penalty
const rq = scoreSession({ mode: 'mock', config: { ...EXAM, pattern: { ...PATTERN, negative: { wrong: '1/4' } } }, questions: Q5, answers: { q1: { choice: 1 } } })
assert.ok(Math.abs(rq.score + 0.25) < 1e-9, 'quarter penalty ' + rq.score)

// 4. E-rule (5th option): blank without E penalized; with E safe; disqualification threshold
const E_EXAM = { ...EXAM, pattern: { ...PATTERN, marksPerQuestion: 1, fifthOptionRule: { enabled: true, disqualificationThreshold: 0.7 } } }
const re = scoreSession({ mode: 'mock', config: E_EXAM, questions: Q5, answers: { q1: { choice: 0 }, q2: { choice: null, markedE: true }, q3: { choice: null, markedE: true }, q4: { choice: null, markedE: true }, q5: { choice: null, markedE: true } } })
assert.equal(re.blankWithoutE, 0); assert.ok(Math.abs(re.score - 1) < 1e-9, 'E-rule safe blanks, ' + re.score)
assert.equal(re.disqualified, false)
const rd = scoreSession({ mode: 'mock', config: E_EXAM, questions: Q5, answers: { q1: { choice: 0 } } })
assert.equal(rd.blankWithoutE, 4, 'all blanks counted'); assert.equal(rd.disqualified, true, '4/5=0.8 > 0.7 → DQ')

// 5. fmtTime
assert.equal(fmtTime(0), '00:00'); assert.equal(fmtTime(65 * 1000), '01:05'); assert.equal(fmtTime(75 * 60000), '1:15:00') // >1h formats as h:mm:ss

// 6. buildSession: count cap, no duplicates, scaled duration floor of 5 min
const bs = buildSession(EXAM, Q5, 'mock', 'hi', 3)
assert.ok(bs.questions.length <= 3)
assert.equal(new Set(bs.questions.map(q => q.id)).size, bs.questions.length)
assert.equal(bs.durationMin, 5, 'scaled to 5-min floor')

// 7. availableQuestions + shuffle integrity
assert.equal(availableQuestions(Q5, { ...EXAM, subjects: ['gk'] }).length, 5)
const arr = [1, 2, 3, 4, 5]
const sh = shuffle(arr)
assert.equal(arr.length, 5)
assert.equal([...sh].sort((a, b) => a - b).join(), '1,2,3,4,5')

// 8. speedStats: honest own-data analytics (v4 cycle 4)
const TS = { mode: 'mock', config: EXAM, questions: Q5, answers: { q1: { choice: 0 }, q2: { choice: 3 } }, // q1 correct (ans 0), q2 wrong (ans 1)
  times: { q1: 30000, q2: 300000, q3: 100000, q4: 0, q5: 100 } } // q5 sub-300ms → excluded as tap, q4=0 → untimed
const sp = speedStats(TS, scoreSession(TS))
assert.ok(sp.hasData, 'timed data present')
assert.equal(sp.timedCount, 3, 'q1,q2,q3 timed; q4 zero and q5 sub-300ms excluded')
assert.equal(sp.avgMs, 143333, '(30000+300000+100000)/3 → 143333 rounded') // (430000/3 = 143333.33 → Math.round 143333
assert.equal(sp.correctAvgMs, 30000, 'correct avg = q1 only')
assert.equal(sp.wrongAvgMs, 300000, 'wrong avg = q2 only')
assert.equal(sp.budgetSec, 120, 'budget: 10-min pattern / 5 questions = 120s/question')
assert.ok(sp.insights.some(i => /जहाँ ज़्यादा समय/.test(i.hi)), 'slow-meant-wrong insight fires (300s wrong vs 30s correct)')
assert.ok(sp.insights.some(i => /143 सेकंड/.test(i.hi) && /120 सेकंड/.test(i.hi)), 'over-budget insight fires (143s avg vs 120s budget)')
assert.equal(sp.perQ.length, 5, 'one row per question')
assert.equal(sp.perQ[0].status, 'correct'); assert.equal(sp.perQ[1].status, 'wrong'); assert.equal(sp.perQ[2].status, 'skipped')
// honest absence: no times → hidden
const spNone = speedStats({ mode: 'mock', config: EXAM, questions: Q5, answers: {} }, scoreSession({ mode: 'mock', config: EXAM, questions: Q5, answers: {} }))
assert.equal(spNone.hasData, false, 'no times → hasData false → UI hides card')
// practice mode: no fake exam budget
const spPrac = speedStats({ mode: 'practice', config: EXAM, questions: Q5, answers: { q1: { choice: 0 } }, times: { q1: 8000 } }, scoreSession({ mode: 'practice', config: EXAM, questions: Q5, answers: { q1: { choice: 0 } } }))
assert.equal(spPrac.budgetSec, null, 'practice has no exam budget — no invented benchmark')

// 9. spaced-revision ladder: reset on wrong, advance on right, master past 30-day rung
const DAY = 86400000, T0 = 1700000000000
let rec = reviseErrorRecord({ wrongCount: 0, subject: 'gk' }, true, false, T0) // first wrong
assert.equal(rec.wrongCount, 1); assert.equal(rec.rung, 0); assert.equal(rec.nextReviewAt - T0, 1 * DAY)
rec = reviseErrorRecord(rec, true, false, T0 + DAY) // wrong again → rung resets, still 1 day
assert.equal(rec.wrongCount, 2); assert.equal(rec.rung, 0); assert.equal(rec.nextReviewAt - (T0 + DAY), 1 * DAY)
rec = reviseErrorRecord(rec, false, false, T0 + 2 * DAY) // correct → rung 1 → 3 days
assert.equal(rec.rung, 1); assert.equal(rec.nextReviewAt - (T0 + 2 * DAY), 3 * DAY); assert.equal(rec.wrongCount, 2, 'wrongCount is lifetime, not reset by success')
rec = reviseErrorRecord(rec, false, false, T0 + 5 * DAY) // → rung 2 → 7 days
assert.equal(rec.rung, 2); assert.equal(rec.nextReviewAt - (T0 + 5 * DAY), 7 * DAY)
rec = reviseErrorRecord(rec, false, false, T0 + 12 * DAY)
assert.equal(rec.rung, 3); assert.equal(rec.nextReviewAt - (T0 + 12 * DAY), 15 * DAY)
rec = reviseErrorRecord(rec, false, false, T0 + 27 * DAY)
assert.equal(rec.rung, 4); assert.equal(rec.nextReviewAt - (T0 + 27 * DAY), 30 * DAY)
const mastered = reviseErrorRecord(rec, false, false, T0 + 57 * DAY) // correct past 30-day rung
assert.equal(mastered, null, 'mastered → null → caller deletes record')
const relapse = reviseErrorRecord(rec, true, true, T0 + 40 * DAY) // wrong at the last rung → back to square 1
assert.ok(relapse && relapse.rung === 0 && relapse.skipped === true, 'relapse resets rung and flags skipped')
assert.deepEqual(REV_LADDER, [1, 3, 7, 15, 30], 'ladder contract unchanged')

// 10. today-plan: every item has a reason, capped at 3, priority order stable
assert.deepEqual(buildTodayPlan({}).map(i => i.id), ['pick-exam'], 'cold start, no exam picked → pick-exam')
assert.deepEqual(buildTodayPlan({ hasExam: true }).map(i => i.id), ['mock-first', 'practice'], 'exam picked, never mocked → baseline mock + practice')
assert.deepEqual(buildTodayPlan({ hasExam: true, daysSinceMock: 2, errors: 12, dueRevision: 0 }).map(i => i.id), ['err-practice'], 'errors logged, none due, recent mock → error practice')
assert.deepEqual(buildTodayPlan({ hasExam: true, daysSinceMock: 2, errors: 3 }).map(i => i.id), ['practice'], 'nothing special due → default practice')
const due = buildTodayPlan({ hasExam: true, daysSinceMock: 2, dueRevision: 4, errors: 20 })
assert.deepEqual(due.map(i => i.id), ['revise'], 'due revision outranks error practice')
assert.equal(due[0].n, 4)
const cadence = buildTodayPlan({ hasExam: true, daysSinceMock: 9.6, dueRevision: 2 })
assert.deepEqual(cadence.map(i => i.id), ['revise', 'mock-due'], '7+ days without mock → cadence nudge')
assert.equal(cadence[1].n, 9, 'days rounded down in the label data')
const capped = buildTodayPlan({ hasExam: true, unfinishedMock: true, dueRevision: 2, daysSinceMock: 9, errors: 20 })
assert.deepEqual(capped.map(i => i.id), ['resume', 'revise', 'mock-due'], 'resume first; cap at 3 cuts err-practice')
assert.deepEqual(buildTodayPlan({ hasExam: true, daysSinceMock: 0 }).map(i => i.id), ['practice'], 'mocked today → no nudge')
assert.deepEqual(buildTodayPlan({ unfinishedMock: true }).map(i => i.id), ['resume'], 'unfinished mock outranks everything, even without exam')

// 11. topic stats: merge correctness, honest minimum sample, weakest-first ordering
let ts = mergeTopicStats({}, [
  { subject: 'maths', topic: 'प्रतिशत', correct: true }, { subject: 'maths', topic: 'प्रतिशत', correct: false },
  { subject: 'raj-gk', topic: 'नदियां एवं अपवाह तंत्र', correct: false },
  { subject: 'maths', topic: 'LCM-HCF', correct: true }
])
assert.equal(ts['maths::प्रतिशत'].a, 2, 'merge counts attempts')
assert.equal(ts['maths::प्रतिशत'].c, 1, 'merge counts correct')
assert.equal(weakTopics(ts).length, 0, 'below minimum sample → nothing shown (honesty)')
ts = mergeTopicStats(ts, Array.from({ length: MIN_TOPIC_ATTEMPTS - 1 }, () => ({ subject: 'raj-gk', topic: 'नदियां एवं अपवाह तंत्र', correct: false })))
assert.equal(weakTopics(ts).length, 1, 'topic reaches 5 attempts → appears')
ts = mergeTopicStats(ts, Array.from({ length: MIN_TOPIC_ATTEMPTS }, () => ({ subject: 'maths', topic: 'प्रतिशत', correct: true })))
const wt = weakTopics(ts)
assert.equal(wt[0].topic, 'नदियां एवं अपवाह तंत्र', 'weakest first (0% before 66%)')
assert.equal(wt[1].accuracy, 6 / 7, 'accuracy is correct/attempted')
assert.ok(!mergeTopicStats({}, [{ correct: true }])['undefined::'], 'outcome without subject/topic is ignored')

// 12. share data: only measured numbers, honest counts, real URL
const shSess = { startedAt: new Date('2026-10-01T10:30:00').getTime(), config: { name: { hi: 'राजस्थान पुलिस कांस्टेबल' }, pattern: { marksPerQuestion: 1 } } }
const sd = buildShareData(shSess, { score: 52.5, total: 100, attempted: 90, correct: 60, wrong: 30, accuracy: 67 }, 'hi')
assert.equal(sd.score, 52.5, 'share carries exact measured score')
assert.equal(sd.max, 100, 'share max = total x marks')
assert.equal(sd.pct, 53, 'pct = score/max')
assert.equal(sd.skipped, 10, 'skipped = total - attempted')
assert.equal(sd.correct + sd.wrong + sd.skipped, 100, 'stacked bar segments sum to total')
assert.ok(sd.dateHi.includes('अक्टूबर'), 'date formatted in Hindi')
assert.ok(sd.shareText.includes('https://somilsharma2000.github.io'), 'share text carries real URL')
assert.ok(!/topper|टॉपर|rank|रैंक/i.test(JSON.stringify(sd)), 'no invented rank/badge language')

// 13. calculators: pure utility functions (calcNegativeMarks, calcAge, calcAgeEligibility)
// 13a. calcNegativeMarks schemes and configs
// Jail Prahari style config: 100Q x 4 marks, -1 per wrong: 60 correct + 20 wrong = 220 net score
const jpRes = calcNegativeMarks(
  { correct: 60, wrong: 20 },
  { pattern: { totalQuestions: 100, marksPerQuestion: 4, negative: { wrong: '1-mark-per-wrong' } } }
)
assert.equal(jpRes.correctMarks, 240)
assert.equal(jpRes.totalPenalty, 20)
assert.equal(jpRes.netScore, 220)
assert.equal(jpRes.maxScore, 400)
assert.equal(jpRes.attempted, 80)
assert.equal(jpRes.unattempted, 20)
assert.equal(jpRes.accuracy, 75)

// CET style config: negative 'none' + fifthOptionRule
const cetRes = calcNegativeMarks(
  { correct: 80, wrong: 20 },
  {
    pattern: {
      totalQuestions: 150,
      marksPerQuestion: 2,
      negative: { wrong: 'none', noteHi: 'कोई नकारात्मक अंकन नहीं', noteEn: 'No negative marking' },
      fifthOptionRule: { enabled: true, noteHi: '5वां विकल्प अनुत्तरित हेतु', noteEn: '5th option for unattempted' }
    }
  }
)
assert.equal(cetRes.totalPenalty, 0)
assert.equal(cetRes.correctMarks, 160)
assert.equal(cetRes.netScore, 160)
assert.equal(cetRes.noteHi, 'कोई नकारात्मक अंकन नहीं')
assert.equal(cetRes.fifthOptionNoteHi, '5वां विकल्प अनुत्तरित हेतु')

// Standard negative schemes: '1/3', '1/4', 'none', custom fraction '1/5'
assert.equal(calcNegativeMarks({ correct: 30, wrong: 12, negativeScheme: '1/3', marksPerQuestion: 1 }).totalPenalty, 4)
assert.equal(calcNegativeMarks({ correct: 30, wrong: 12, negativeScheme: '1/4', marksPerQuestion: 1 }).totalPenalty, 3)
assert.equal(calcNegativeMarks({ correct: 30, wrong: 12, negativeScheme: 'none', marksPerQuestion: 1 }).totalPenalty, 0)
assert.equal(calcNegativeMarks({ correct: 50, wrong: 10, negativeScheme: '1/5', marksPerQuestion: 1 }).totalPenalty, 2)

// Adversarial attempted < correct + wrong: attempted corrected to at least correct + wrong
const attRes = calcNegativeMarks({ correct: 10, wrong: 5, attempted: 8, totalQuestions: 100 })
assert.equal(attRes.attempted, 15, 'attempted auto-corrected from 8 to 10+5=15')
assert.equal(attRes.accuracy, 67, 'accuracy calculated using corrected attempted = 15')
assert.equal(attRes.unattempted, 85, 'unattempted = total (100) - attempted (15)')

// 13b. calcAge date arithmetic & leap years
// Leap year DOB: 2000-02-29
const leapNonLeap = calcAge('2000-02-29', '2021-02-28')
assert.deepEqual(leapNonLeap, { years: 21, months: 0, days: 0 })
const leapToLeap = calcAge('2000-02-29', '2024-02-29')
assert.deepEqual(leapToLeap, { years: 24, months: 0, days: 0 })

// Month boundary date math: 2000-08-31 to 2024-09-30 (exactly 24y 1m 0d)
const augToSep = calcAge('2000-08-31', '2024-09-30')
assert.deepEqual(augToSep, { years: 24, months: 1, days: 0 })

// Min age exact boundary: 2006-01-01 to 2024-01-01 = 18y 0m 0d
const exact18 = calcAge('2006-01-01', '2024-01-01')
assert.deepEqual(exact18, { years: 18, months: 0, days: 0 })

// Invalid dates / null / ref < dob
assert.equal(calcAge(null, '2024-01-01'), null)
assert.equal(calcAge('2024-01-01', null), null)
assert.equal(calcAge('invalid-date', '2024-01-01'), null)
assert.equal(calcAge('2024-01-01', '2023-01-01'), null, 'ref < dob returns null')

// 13c. calcAgeEligibility boundaries, categories, unverified config
const ageCfg = {
  verification: 'OFFICIAL_CONFIRMED',
  minAge: 18,
  maxAge: { GEN: 40, OBC: 43, SC: 45, ST: 45 }
}

// Min age boundary: 18y 0m 0d -> ELIGIBLE, 17y 11m 29d -> UNDERAGE
const elMin = calcAgeEligibility({ years: 18, months: 0, days: 0 }, 'GEN', ageCfg)
assert.equal(elMin.verdict, 'ELIGIBLE')
const elUnder = calcAgeEligibility({ years: 17, months: 11, days: 29 }, 'GEN', ageCfg)
assert.equal(elUnder.verdict, 'UNDERAGE')

// Max age boundary for GEN: 40y 0m 0d -> ELIGIBLE, 40y 0m 1d -> OVERAGE
const elMaxGen = calcAgeEligibility({ years: 40, months: 0, days: 0 }, 'GEN', ageCfg)
assert.equal(elMaxGen.verdict, 'ELIGIBLE')
const elOverGen = calcAgeEligibility({ years: 40, months: 0, days: 1 }, 'GEN', ageCfg)
assert.equal(elOverGen.verdict, 'OVERAGE')

// Category-specific maxAge map (OBC max 43)
const elMaxObc = calcAgeEligibility({ years: 43, months: 0, days: 0 }, 'OBC', ageCfg)
assert.equal(elMaxObc.verdict, 'ELIGIBLE')
assert.equal(elMaxObc.maxAge, 43)
const elOverObc = calcAgeEligibility({ years: 43, months: 0, days: 1 }, 'OBC', ageCfg)
assert.equal(elOverObc.verdict, 'OVERAGE')

// Category fallback to GEN maxAge for unlisted category (e.g. EWS)
const elEws = calcAgeEligibility({ years: 41, months: 0, days: 0 }, 'EWS', ageCfg)
assert.equal(elEws.verdict, 'OVERAGE')
assert.equal(elEws.maxAge, 40)

// Primitive maxAge number (e.g. maxAge = 35)
const primitiveCfg = { verification: 'OFFICIAL_CONFIRMED', minAge: 18, maxAge: 35 }
assert.equal(calcAgeEligibility({ years: 35, months: 0, days: 0 }, 'GEN', primitiveCfg).verdict, 'ELIGIBLE')
assert.equal(calcAgeEligibility({ years: 35, months: 0, days: 1 }, 'GEN', primitiveCfg).verdict, 'OVERAGE')

// Null or unverified ageLimitCfg
assert.equal(calcAgeEligibility({ years: 25 }, 'GEN', null).verdict, 'UNVERIFIED')
assert.equal(calcAgeEligibility({ years: 25 }, 'GEN', { verification: 'UNVERIFIED' }).verdict, 'UNVERIFIED')

// Invalid age input
assert.equal(calcAgeEligibility(null, 'GEN', ageCfg).verdict, 'INVALID')
assert.equal(calcAgeEligibility({ years: 'invalid' }, 'GEN', ageCfg).verdict, 'INVALID')


// GROUP 14: noAgeLimit exams (REET L1 — officially no age bar for eligibility test)
const noLimitCfg = { verification: 'OFFICIAL_CONFIRMED', noAgeLimit: true, noteHi: 'कोई आयु सीमा नहीं', noteEn: 'No age limit' }
const nl17 = calcAgeEligibility({ years: 17, months: 0, days: 0 }, 'GEN', noLimitCfg)
const nl60 = calcAgeEligibility({ years: 60, months: 0, days: 0 }, 'SC', noLimitCfg)
assert.equal(nl17.verdict, 'NO_LIMIT'); assert.ok(nl17.reasonHi.includes('आयु सीमा नहीं'))
assert.equal(nl60.verdict, 'NO_LIMIT')
// a noAgeLimit block must win over missing minAge/maxAge (guard order in the function)
assert.equal(calcAgeEligibility({ years: 45 }, 'GEN', { verification: 'OFFICIAL_CONFIRMED', noAgeLimit: true }).verdict, 'NO_LIMIT')

console.log('engine tests: ALL PASS (14 groups)')
