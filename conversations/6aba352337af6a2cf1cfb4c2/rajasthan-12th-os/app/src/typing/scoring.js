// RSSB TYPING SCORE ENGINE — exact RSMSSB speed-test formula
// Marks = (20/8000) * Net KDPH, capped at 25; qualifying >= 9 marks (36%)
// Penalty: 5 keystrokes per word-level error (mismatched/missing/extra word)
// Reference: gather/typing-module-research.md §1.4, §7.2

export function scoreTyping(typedText, sourceText, durationSeconds) {
  const durationMinutes = Math.max(durationSeconds / 60, 1 / 60)
  const grossKeystrokes = typedText.length
  const typedWords = typedText.trim().split(/\s+/).filter(Boolean)
  const sourceWords = sourceText.trim().split(/\s+/).filter(Boolean)

  let errors = 0
  // Errors counted ONLY within the typed portion (spec 7.2: loop over typedWords).
  // Unfinished passage tail is not penalized — it just yields fewer keystrokes.
  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] !== sourceWords[i]) errors++
  }

  const penaltyKeystrokes = errors * 5
  const netKeystrokes = Math.max(0, grossKeystrokes - penaltyKeystrokes)
  // KDPH = keystrokes per minute * 60
  const grossKDPH = Math.round((grossKeystrokes / durationMinutes) * 60)
  const netKDPH = Math.round((netKeystrokes / durationMinutes) * 60)

  const grossWpm = Math.round(grossKeystrokes / 5 / durationMinutes)
  const netWpm = Math.round(netKeystrokes / 5 / durationMinutes)
  const accuracy = grossKeystrokes > 0 ? Math.round((netKeystrokes / grossKeystrokes) * 100) : 0

  let marks = (20 / 8000) * netKDPH
  marks = Math.min(25, Math.max(0, Math.round(marks * 100) / 100))
  const qualifying = marks >= 9

  return {
    grossKeystrokes, netKeystrokes, errors, penaltyKeystrokes,
    durationMinutes: Math.round(durationMinutes * 10) / 10,
    grossKdph: grossKDPH, netKdph: netKDPH,
    grossWpm, netWpm, accuracy, marks, qualifying
  }
}

// Word-by-word diff for result review
export function diffWords(typedText, sourceText) {
  const typedWords = typedText.trim().split(/\s+/).filter(Boolean)
  const sourceWords = sourceText.trim().split(/\s+/).filter(Boolean)
  const out = []
  const n = Math.max(typedWords.length, sourceWords.length)
  for (let i = 0; i < n; i++) {
    out.push({ src: sourceWords[i], typed: typedWords[i], ok: typedWords[i] === sourceWords[i] })
  }
  return out
}
