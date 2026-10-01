// EXAM ENGINE — config-driven, one engine for every paper. Pure logic, testable.
export const SUBJECT_LABELS = {
  'raj-gk': { hi: 'राजस्थान सामान्य ज्ञान', en: 'Rajasthan GK' },
  'india-gk': { hi: 'भारत सामान्य ज्ञान', en: 'India GK' },
  'current-affairs': { hi: 'समकालीन घटनाएँ', en: 'Current Affairs' },
  'maths': { hi: 'गणित', en: 'Mathematics' },
  'reasoning': { hi: 'तार्किक क्षमता', en: 'Reasoning' },
  'science': { hi: 'विज्ञान', en: 'Science' },
  'english': { hi: 'अंग्रेजी', en: 'English' },
  'hindi': { hi: 'हिंदी', en: 'Hindi' },
  'computer': { hi: 'कंप्यूटर', en: 'Computer' },
  'agriculture': { hi: 'कृषि', en: 'Agriculture' },
  'child-pedagogy': { hi: 'बाल विकास व शिक्षण विधियाँ', en: 'Child Development & Pedagogy' },
  'language': { hi: 'भाषा', en: 'Language' },
  'environment-science': { hi: 'पर्यावरण अध्ययन', en: 'Environmental Studies' },
  'library-science': { hi: 'पुस्तकालय विज्ञान', en: 'Library Science' }
}

export function availableQuestions(bank, exam) {
  // Only ship questions whose verification allows student display. QUARANTINED/UNVERIFIED never render.
  return bank.filter(q => q.verification !== 'UNVERIFIED' && !q.provenance.evidence.includes('QUARANTINED') && exam.subjects.includes(q.subject))
}

export function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function buildSession(exam, bank, mode, lang, count, onlyIds) {
  // Random sampling so the FULL bank is reachable across sessions (was: static first-N)
  const pool = onlyIds ? shuffle(bank.filter(q => onlyIds.includes(q.id))) : shuffle(availableQuestions(bank, exam))
  const target = count || exam.pattern.totalQuestions
  const questions = pool.slice(0, Math.min(target, pool.length))
  // Scaled duration: short mocks get proportional time (honest timing, min 5 min)
  const durationMin = mode === 'mock'
    ? Math.max(5, Math.round(exam.pattern.durationMin * questions.length / exam.pattern.totalQuestions))
    : null
  return {
    examId: exam.id, mode, lang,
    questions, answers: {}, // qId -> {choice: 0-3 | null, markedE: bool}
    durationMin, startedAt: Date.now(), submitted: false
  }
}

export function scoreSession(session) {
  const ex = session.examId
  const conf = session.config
  const { negative, fifthOptionRule, marksPerQuestion } = conf.pattern
  let correct = 0, wrong = 0, attempted = 0, blankWithoutE = 0, score = 0
  for (const q of session.questions) {
    const a = session.answers[q.id]
    if (a && a.choice !== null && a.choice !== undefined) {
      attempted++
      if (a.choice === q.answer) { correct++; score += marksPerQuestion }
      else {
        wrong++
        if (negative.wrong === 'none') { /* no penalty */ }
        else if (negative.wrong === '1/4') score -= marksPerQuestion / 4
        else if (negative.wrong === '1-mark-per-wrong') score -= 1
        else score -= marksPerQuestion / 3 // '1/3'
      }
    } else {
      // unattempted
      if (fifthOptionRule && fifthOptionRule.enabled) {
        if (a && a.markedE) { /* E bubbled: safe, no penalty */ }
        else {
          blankWithoutE++
          score -= marksPerQuestion / 3
        }
      }
    }
  }
  const total = session.questions.length
  const disqualified = fifthOptionRule && fifthOptionRule.enabled &&
    (blankWithoutE / Math.max(total, 1)) > fifthOptionRule.disqualificationThreshold
  return { correct, wrong, attempted, blankWithoutE, score, total, disqualified,
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0 }
}

// SHARE DATA (v4 cycle 8) — pure assembly for the result share card. Only MEASURED numbers:
// no percentile (we have no population), no invented rank, no motivational badge (D-12/D-18).
const SHARE_URL = 'somilsharma2000.github.io/rajasthan-12th-exam-os'
const HI_MONTHS = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर']
export function buildShareData(session, r, lang) {
  const started = new Date(session.startedAt || Date.now())
  const dateHi = started.getDate() + ' ' + HI_MONTHS[started.getMonth()] + ' ' + started.getFullYear()
  const max = Math.round(r.total * session.config.pattern.marksPerQuestion * 100) / 100
  const skipped = r.total - r.attempted
  return {
    appHi: 'राजस्थान 12th लेवल एग्जाम OS',
    reportLabel: 'मॉक टेस्ट रिपोर्ट',
    examHi: session.config.name.hi,
    dateHi,
    score: Math.round(r.score * 100) / 100,
    max,
    pct: max > 0 ? Math.round((r.score / max) * 100) : 0,
    accuracy: r.accuracy,
    correct: r.correct,
    wrong: r.wrong,
    skipped,
    total: r.total,
    correctHi: 'सही',
    wrongHi: 'गलत',
    skippedHi: 'छोड़े',
    accuracyHi: 'शुद्धता',
    ctaHi: 'मुफ़्त मॉक टेस्ट खुद दें',
    url: SHARE_URL,
    shareTitle: 'राजस्थान 12th लेवल एग्जाम OS',
    shareText: `मैंने ${session.config.name.hi} का मॉक दिया — स्कोर ${Math.round(r.score * 100) / 100}/${max}, शुद्धता ${r.accuracy}%। आप भी मुफ़्त में ट्राई करें: https://${SHARE_URL}`
  }
}

// TOPIC STATS (v4 cycle 7) — the "where am I weak?" spine link. Honesty rule: a topic needs
// MIN_TOPIC_ATTEMPTS real attempts before it can appear in the weakness list — small samples mislead.
export const MIN_TOPIC_ATTEMPTS = 5
export function mergeTopicStats(stats, outcomes) {
  const out = { ...(stats || {}) }
  for (const o of outcomes) {
    if (!o.topic || !o.subject) continue
    const k = o.subject + '::' + o.topic
    const cur = out[k] || { subject: o.subject, topic: o.topic, a: 0, c: 0 }
    out[k] = { subject: o.subject, topic: o.topic, a: cur.a + 1, c: cur.c + (o.correct ? 1 : 0) }
  }
  return out
}
export function weakTopics(stats, min = MIN_TOPIC_ATTEMPTS) {
  return Object.values(stats || {})
    .filter(s => s.a >= min)
    .map(s => ({ subject: s.subject, topic: s.topic, attempts: s.a, accuracy: s.c / s.a }))
    .sort((x, y) => x.accuracy - y.accuracy) // weakest first
}

// TODAY PLAN (v4 cycle 6) — "what should I prepare today?" Pure and explainable: every item
// exists because of a measured signal, and the cap is 3 so it stays an action list, not a dashboard.
// Priority: resume unfinished mock → due revision → mock cadence → error practice → new practice.
export function buildTodayPlan(s = {}) {
  const items = []
  const push = (id, n) => items.push({ id, n: n || 0 })
  const dueRev = s.dueRevision || 0
  const errors = s.errors || 0
  const dsm = (s.daysSinceMock === null || s.daysSinceMock === undefined) ? null : s.daysSinceMock
  if (s.unfinishedMock) push('resume')
  if (dueRev > 0) push('revise', dueRev)
  if (s.hasExam) {
    if (dsm === null) { push('mock-first'); push('practice') } // no baseline yet: first mock + light practice
    else if (dsm >= 7) push('mock-due', Math.floor(dsm)) // cadence: mock weekly
  }
  if (dueRev === 0 && errors >= 5) push('err-practice', errors) // errors exist but none due yet today
  if (!items.length) push(s.hasExam ? 'practice' : 'pick-exam')
  return items.slice(0, 3)
}

// SPACED REVISION (v4 cycle 5) — the 1-3-7-15-30 ladder, pure and testable.
// Wrong again → rung resets to 0 (1 day). Correct → rung advances (3,7,15,30 days).
// Correct past the 30-day rung → MASTERED: returns null (record deleted — the question earned its exit).
export const REV_LADDER = [1, 3, 7, 15, 30]
export function reviseErrorRecord(rec, wasWrong, skipped = false, now = Date.now()) {
  const DAY = 86400000
  if (wasWrong) return { ...rec, wrongCount: rec.wrongCount + 1, rung: 0, lastWrongAt: now, nextReviewAt: now + REV_LADDER[0] * DAY, skipped }
  const rung = (rec.rung || 0) + 1
  if (rung >= REV_LADDER.length) return null
  return { ...rec, rung, nextReviewAt: now + REV_LADDER[rung] * DAY }
}

// SPEED & ACCURACY ANALYTICS (v4 cycle 4) — pure, testable. Honesty rule: compares
// ONLY the student's own measured data against the exam's own time budget. No invented
// "topper averages" (we have no real topper dataset for these exams — showing a fake
// benchmark would violate the no-fake-data rule). session.times: { [qId]: ms }
export function speedStats(session, r) {
  const times = session.times || {}
  const perQ = session.questions.map((q, i) => {
    const a = session.answers[q.id]
    const status = a && a.choice !== null && a.choice !== undefined ? (a.choice === q.answer ? 'correct' : 'wrong') : 'skipped'
    return { n: i + 1, subject: q.subject, ms: times[q.id] || 0, status }
  })
  const answeredTimed = perQ.filter(x => x.ms > 300) // ignore sub-300ms taps/palette jumps
  const avg = xs => xs.length ? Math.round(xs.reduce((s, x) => s + x.ms, 0) / xs.length) : 0
  const avgMs = avg(answeredTimed)
  const correctAvgMs = avg(answeredTimed.filter(x => x.status === 'correct'))
  const wrongAvgMs = avg(answeredTimed.filter(x => x.status === 'wrong'))
  const budgetSec = session.mode === 'mock' && session.config.pattern.durationMin
    ? Math.round(session.config.pattern.durationMin * 60 / Math.max(1, session.questions.length)) : null
  const slowest = answeredTimed.length ? perQ.reduce((a, b) => (b.ms > a.ms ? b : a)) : null
  const sec = ms => Math.round(ms / 1000)
  const insights = []
  if (budgetSec && avgMs && sec(avgMs) > Math.round(budgetSec * 1.15)) {
    insights.push({ hi: `औसत ${sec(avgMs)} सेकंड/प्रश्न — इस परीक्षा की समय-सीमा ~${budgetSec} सेकंड/प्रश्न है। गति बढ़ाने का अभ्यास करें।`, en: `Average ${sec(avgMs)}s/question vs this exam's ~${budgetSec}s/question budget — practice pacing.` })
  }
  if (correctAvgMs && wrongAvgMs && wrongAvgMs > correctAvgMs * 1.4) {
    insights.push({ hi: `जहाँ ज़्यादा समय लगा वहीं गलती हुई: गलत प्रश्नों पर औसत ${sec(wrongAvgMs)}s, सही प्रश्नों पर ${sec(correctAvgMs)}s।`, en: `Slow meant wrong: ${sec(wrongAvgMs)}s avg on wrong vs ${sec(correctAvgMs)}s on correct.` })
  }
  if (correctAvgMs && wrongAvgMs && wrongAvgMs < correctAvgMs * 0.6 && wrongAvgMs > 0) {
    insights.push({ hi: `जल्दबाज़ी में गलतियाँ: गलत प्रश्नों पर सिर्फ ${sec(wrongAvgMs)}s लगा (सही प्रश्नों पर ${sec(correctAvgMs)}s)। भरोसे से तय करें, अंदाज़े से नहीं।`, en: `Rushed answers: only ${sec(wrongAvgMs)}s on wrong questions vs ${sec(correctAvgMs)}s on correct — decide, don't guess.` })
  }
  if (slowest && slowest.ms > avgMs * 2.5 && slowest.ms > 60000) {
    insights.push({ hi: `प्रश्न ${slowest.n} पर सबसे ज़्यादा समय (${Math.floor(slowest.ms / 60000)}:${String(sec(slowest.ms % 60000)).padStart(2, '0')}) — ऐसे प्रश्न परीक्षा में छोड़ना सीखें।`, en: `Question ${slowest.n} ate ${sec(slowest.ms)}s — learn to skip time sinks in the real exam.` })
  }
  return { perQ, avgMs, budgetSec, correctAvgMs, wrongAvgMs, insights, hasData: answeredTimed.length > 0, timedCount: answeredTimed.length }
}

export function fmtTime(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
  return (h > 0 ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0')
}

// FREE UTILITY CALCULATORS (Tools tab) — pure, testable math & logic.

export function calcNegativeMarks(input = {}, examConfig = null) {
  const pattern = examConfig?.pattern || {}
  const totalQuestions = Math.max(1, Number(input.totalQuestions ?? pattern.totalQuestions ?? 100))
  const marksPerQuestion = Number(input.marksPerQuestion ?? pattern.marksPerQuestion ?? 1)
  const negativeScheme = input.negativeScheme ?? input.negativeFraction ?? pattern.negative?.wrong ?? '1/3'

  const correct = Math.max(0, Number(input.correct || 0))
  const wrong = Math.max(0, Number(input.wrong || 0))
  const attempted = input.attempted !== undefined && input.attempted !== null
    ? Math.max(0, Number(input.attempted))
    : correct + wrong

  const unattempted = Math.max(0, totalQuestions - attempted)

  let penaltyPerWrong = 0
  if (negativeScheme === 'none' || negativeScheme === 0 || negativeScheme === '0') {
    penaltyPerWrong = 0
  } else if (negativeScheme === '1-mark-per-wrong') {
    penaltyPerWrong = 1
  } else if (negativeScheme === '1/4') {
    penaltyPerWrong = marksPerQuestion / 4
  } else if (negativeScheme === '1/3') {
    penaltyPerWrong = marksPerQuestion / 3
  } else if (typeof negativeScheme === 'number') {
    penaltyPerWrong = negativeScheme
  } else if (typeof negativeScheme === 'string' && negativeScheme.includes('/')) {
    const [num, den] = negativeScheme.split('/').map(Number)
    if (den) penaltyPerWrong = marksPerQuestion * (num / den)
  } else {
    const num = Number(negativeScheme)
    penaltyPerWrong = isNaN(num) ? marksPerQuestion / 3 : num
  }

  const correctMarks = correct * marksPerQuestion
  const totalPenalty = wrong * penaltyPerWrong
  const netScore = Math.round((correctMarks - totalPenalty) * 100) / 100
  const maxScore = Math.round((totalQuestions * marksPerQuestion) * 100) / 100
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0

  return {
    totalQuestions,
    marksPerQuestion,
    negativeScheme,
    attempted,
    correct,
    wrong,
    unattempted,
    correctMarks: Math.round(correctMarks * 100) / 100,
    totalPenalty: Math.round(totalPenalty * 100) / 100,
    netScore,
    maxScore,
    accuracy,
    noteHi: pattern.negative?.noteHi || null,
    noteEn: pattern.negative?.noteEn || null,
    fifthOptionNoteHi: pattern.fifthOptionRule?.noteHi || null,
    fifthOptionNoteEn: pattern.fifthOptionRule?.noteEn || null
  }
}

export function calcAge(dobStr, refDateStr) {
  if (!dobStr || !refDateStr) return null
  const dob = new Date(dobStr)
  const ref = new Date(refDateStr)
  if (isNaN(dob.getTime()) || isNaN(ref.getTime()) || ref < dob) return null

  let y1 = dob.getUTCFullYear(), m1 = dob.getUTCMonth() + 1, d1 = dob.getUTCDate()
  let y2 = ref.getUTCFullYear(), m2 = ref.getUTCMonth() + 1, d2 = ref.getUTCDate()

  let years = y2 - y1
  let months = m2 - m1
  let days = d2 - d1

  if (days < 0) {
    months -= 1
    const prevMonth = m2 - 1 === 0 ? 12 : m2 - 1
    const prevYear = m2 - 1 === 0 ? y2 - 1 : y2
    const daysInPrevMonth = new Date(Date.UTC(prevYear, prevMonth, 0)).getUTCDate()
    if (d1 > daysInPrevMonth) {
      days = d2
    } else {
      days += daysInPrevMonth
    }
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years, months, days }
}

export function calcAgeEligibility(age, category = 'GEN', ageLimitCfg = null) {
  if (!ageLimitCfg || ageLimitCfg.verification !== 'OFFICIAL_CONFIRMED' || !ageLimitCfg.minAge || !ageLimitCfg.maxAge) {
    return {
      verdict: 'UNVERIFIED',
      reasonHi: 'इस परीक्षा की उम्र सीमा अभी सत्यापित नहीं है',
      reasonEn: 'Age limit for this exam is not yet verified'
    }
  }

  if (!age || typeof age.years !== 'number') {
    return {
      verdict: 'INVALID',
      reasonHi: 'कृपया वैध जन्मतिथि दर्ज करें',
      reasonEn: 'Please enter a valid date of birth'
    }
  }

  const catUpper = (category || 'GEN').toUpperCase()
  const minAge = ageLimitCfg.minAge
  const maxAge = ageLimitCfg.maxAge[catUpper] ?? ageLimitCfg.maxAge.GEN ?? 40

  const { years, months, days } = age

  if (years < minAge) {
    return {
      verdict: 'UNDERAGE',
      minAge,
      maxAge,
      category: catUpper,
      reasonHi: `आपकी आयु (${years} वर्ष ${months} माह) न्यूनतम आयु (${minAge} वर्ष) से कम है।`,
      reasonEn: `Your age (${years}y ${months}m) is below the minimum age (${minAge} years).`
    }
  }

  if (years > maxAge || (years === maxAge && (months > 0 || days > 0))) {
    return {
      verdict: 'OVERAGE',
      minAge,
      maxAge,
      category: catUpper,
      reasonHi: `आपकी आयु (${years} वर्ष ${months} माह ${days} दिन) अधिकतम आयु (${maxAge} वर्ष - ${catUpper} वर्ग) से अधिक है।`,
      reasonEn: `Your age (${years}y ${months}m ${days}d) exceeds the maximum age limit (${maxAge} years for ${catUpper}).`
    }
  }

  return {
    verdict: 'ELIGIBLE',
    minAge,
    maxAge,
    category: catUpper,
    reasonHi: `आप पात्र हैं! आपकी आयु (${years} वर्ष ${months} माह ${days} दिन) निर्धारित सीमा (${minAge}-${maxAge} वर्ष) के अंतर्गत है।`,
    reasonEn: `Eligible! Your age (${years}y ${months}m ${days}d) is within the allowed limit (${minAge}-${maxAge} years).`
  }
}

export function calcCountdown(expectedDateStr, nowMs = Date.now()) {
  if (!expectedDateStr) return null
  const exp = new Date(expectedDateStr)
  if (isNaN(exp.getTime())) return null
  const today = new Date(nowMs)
  today.setHours(0, 0, 0, 0)
  exp.setHours(0, 0, 0, 0)
  const diffMs = exp.getTime() - today.getTime()
  const days = Math.round(diffMs / (1000 * 60 * 60 * 24))
  return { days, isPast: days < 0, isToday: days === 0 }
}
