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

export function fmtTime(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
  return (h > 0 ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0')
}
