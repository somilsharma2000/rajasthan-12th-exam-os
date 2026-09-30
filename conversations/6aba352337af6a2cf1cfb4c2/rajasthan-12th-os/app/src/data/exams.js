// VERIFIED EXAM CONFIGS — every pattern field carries its evidence level.
// Source: gather/exam-hubs deep surveys + cross-verification pass (2026-09-30)
// RULE: UNVERIFIED fields never render in student UI.

export const EXAMS = [
  {
    id: 'cet-12th',
    name: { hi: 'सीईटी 12th लेवल (सीनियर सेकेंडरी)', en: 'CET 12th Level (Senior Secondary)' },
    family: 'CET',
    verification: 'OFFICIAL_CONFIRMED',
    pattern: {
      totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180,
      negative: { wrong: '1/3', noteHi: '2024 से गलत उत्तर पर 1/3 अंक कटौती (2022 में कटौती नहीं थी)', noteEn: 'From 2024: 1/3 negative per wrong answer (2022 had none)' },
      fifthOptionRule: {
        enabled: true,
        unattemptedPenalty: '1/3',
        disqualificationThreshold: 0.10,
        noteHi: 'खाली छोड़े प्रश्न पर विकल्प-E भरना अनिवार्य; बिना E के 10% से अधिक खाली = अपात्र',
        noteEn: 'Option E must be bubbled on unattempted; >10% blank without E = disqualification'
      }
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'science', 'reasoning', 'english', 'hindi', 'computer']
  },
  {
    id: 'ldc-junior-assistant',
    name: { hi: 'एलडीसी / जूनियर असिस्टेंट (क्लर्क ग्रेड-II)', en: 'LDC / Junior Assistant (Clerk Grade-II)' },
    family: 'CET',
    verification: 'OFFICIAL_CONFIRMED',
    pattern: {
      totalQuestions: 100, marksPerQuestion: 2, totalMarks: 200, durationMin: 180,
      negative: { wrong: '1/3' }, fifthOptionRule: null,
      questionCountVerified: 'PENDING_FINAL_LOCK',
      extraStage: { hi: 'लिखित 200 अंक (सत्यापित) → टाइपिंग 100 अंक: 4 उप-परीक्षाएँ × 25, प्रत्येक में न्यूनतम 9 अंक, 25 wpm, कृतिदेव 010 फॉन्ट → DV', en: 'Written 200 marks (verified) -> Typing 100 marks: 4 sub-tests x 25, min 9 marks each, 25 wpm, Kruti Dev 010 -> DV' }
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'english', 'hindi', 'computer']
  },
  {
    id: 'police-constable',
    name: { hi: 'राजस्थान पुलिस कांस्टेबल', en: 'Rajasthan Police Constable' },
    family: 'CET',
    verification: 'OFFICIAL_CONFIRMED',
    pattern: {
      totalQuestions: 150, marksPerQuestion: 1, totalMarks: 150, durationMin: 120,
      negative: { wrong: '1/4' }, fifthOptionRule: null,
      extraStage: { hi: 'PET/PST (दौड़, ऊँचाई/छाती मानक)', en: 'PET/PST standards' }
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'forester',
    name: { hi: 'फॉरेस्टर (वनपाल)', en: 'Forester (Vanpal)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 200, marksPerQuestion: 2, totalMarks: 400, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null, extraStage: { hi: 'शारीरिक परीक्षा', en: 'Physical test' } },
    subjects: ['raj-gk', 'india-gk', 'maths', 'science']
  },
  {
    id: 'jail-prahari',
    name: { hi: 'जेल प्रहरी', en: 'Jail Prahari' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 200, marksPerQuestion: 2, totalMarks: 400, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null, extraStage: { hi: 'PST/PET: 5 किमी दौड़, ऊँचाई/छाती मानक', en: 'PST/PET: 5km run, height/chest standards' } },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'hostel-superintendent',
    name: { hi: 'हॉस्टल सुपरिंटेंडेंट (अल्पसंख्यक विभाग)', en: 'Hostel Superintendent (Minority Affairs)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'jamadar-excise',
    name: { hi: 'जमादार ग्रेड-II (आबकारी)', en: 'Jamadar Grade-II (Excise)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'lab-assistant',
    name: { hi: 'लैब असिस्टेंट (प्रयोगशाला सहायक)', en: 'Lab Assistant' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 200, marksPerQuestion: 2, totalMarks: 400, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    subjects: ['raj-gk', 'india-gk', 'science', 'maths']
  },
  {
    id: 'agriculture-supervisor',
    name: { hi: 'कृषि पर्यवेक्षक', en: 'Agriculture Supervisor' },
    family: 'DIRECT', verification: 'CROSS_CHECKED', // 100Q/300M/120min/1-3rd negative per multiple coaching sources incl. 2026 notification coverage; official notification PDF pending
    pattern: { totalQuestions: 100, marksPerQuestion: 3, totalMarks: 300, durationMin: 120, negative: { wrong: '1/3', noteHi: 'गलत उत्तर पर 1/3 अंक कटौती', noteEn: '1/3 negative marking' }, fifthOptionRule: null },
    subjects: ['agriculture', 'raj-gk', 'india-gk', 'maths', 'science', 'hindi']
  },
  {
    id: 'reet-level1',
    name: { hi: 'रीट लेवल 1 (प्राथमिक शिक्षक)', en: 'REET Level 1 (Primary Teacher)' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 1, totalMarks: 150, durationMin: 150, negative: { wrong: 'none', noteHi: 'स्क्रीनिंग में नकारात्मक अंकन नहीं', noteEn: 'No negative marking in screening' }, fifthOptionRule: null },
    subjects: ['child-pedagogy', 'raj-gk', 'maths', 'language', 'environment-science']
  },
  {
    id: 'stenographer',
    name: { hi: 'स्टेनोग्राफर / पीए ग्रेड-II', en: 'Stenographer / PA Grade-II' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 100, marksPerQuestion: 2, totalMarks: 200, durationMin: 120, negative: { wrong: '1/3' }, fifthOptionRule: { enabled: true, unattemptedPenalty: '1/3', disqualificationThreshold: 0.10, noteHi: 'खाली छोड़े प्रश्न पर विकल्प-E भरना अनिवार्य; बिना E के 10% से अधिक खाली = अपात्र', noteEn: 'Option E must be bubbled on unattempted; >10% blank without E = disqualification' },
      questionCountVerified: 'PENDING_FINAL_LOCK',
      extraStage: { hi: 'चरण-1: लिखित 200 अंक → चरण-2: डिक्टेशन 100 अंक (अंग्रेजी 100 wpm/10 मिनट + 60 मिनट ट्रांसक्रिप्शन; हिंदी 80 wpm/10 मिनट + 70 मिनट; न्यूनतम 36%) → DV', en: 'Phase-1: Written 200 marks -> Phase-2: Dictation 100 marks (English 100 wpm/10min + 60min transcription; Hindi 80 wpm/10min + 70min; min 36%) -> DV' } },
    subjects: ['raj-gk', 'india-gk', 'science', 'english', 'hindi', 'reasoning']
  },
  {
    id: 'librarian-grade3',
    name: { hi: 'लाइब्रेरियन ग्रेड-3', en: 'Librarian Grade-3' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    subjects: ['library-science', 'raj-gk', 'india-gk', 'hindi', 'english', 'computer']
  }
]

export const SHELF = [
  { id: 'forest-guard', name: { hi: 'फॉरेस्ट गार्ड (वन रक्षक)', en: 'Forest Guard (Van Rakshak)' }, note: 'FOUNDERS_DECISION_PENDING — 10th-level post, keep-as-bonus vs drop' },
  { id: 'high-court-ja', name: { hi: 'हाई कोर्ट जूनियर असिस्टेंट', en: 'High Court Junior Assistant' }, note: 'EXCLUDED — graduate-level (OFFICIAL_CONFIRMED)' },
  { id: 'district-court-clerk', name: { hi: 'जिला न्यायालय क्लर्क', en: 'District Court Clerk' }, note: 'EXCLUDED — graduate-level (OFFICIAL_CONFIRMED)' }
]
