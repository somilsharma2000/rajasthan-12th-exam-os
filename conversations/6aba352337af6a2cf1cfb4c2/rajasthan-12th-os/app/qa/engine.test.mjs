// ENGINE UNIT TESTS — pure functions, node only (no browser needed).
// Run: npm test   (part of the release gate; see docs/QA-MASTER-PROMPT.md module 20_TESTING)
import { buildSession, scoreSession, speedStats, fmtTime, availableQuestions, shuffle, REV_LADDER, reviseErrorRecord, buildTodayPlan, mergeTopicStats, weakTopics, MIN_TOPIC_ATTEMPTS } from '../src/engine.js'
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

console.log('engine tests: ALL PASS (11 groups)')
