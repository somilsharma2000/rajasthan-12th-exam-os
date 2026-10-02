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
      negative: { wrong: 'none', noteHi: 'इस परीक्षा में नकारात्मक अंकन नहीं है', noteEn: 'No negative marking in CET 12th' },
      fifthOptionRule: {
        enabled: true,
        unattemptedPenalty: '1/3',
        disqualificationThreshold: 0.10,
        noteHi: 'खाली छोड़े प्रश्न पर विकल्प-E भरना अनिवार्य; बिना E के 10% से अधिक खाली = अपात्र',
        noteEn: 'Option E must be bubbled on unattempted; >10% blank without E = disqualification'
      }
    },
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2025 तक)। राजस्थान आरक्षित श्रेणियों (EWS/BC/MBC/SC/ST) पुरुष अभ्यर्थियों को 5 वर्ष की छूट।',
      noteEn: '18 to 40 years as on 1 Jan 2025. 5 years relaxation for reserved category males.'
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
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2025 तक)। आरक्षित श्रेणियों को 5 वर्ष की छूट।',
      noteEn: '18 to 40 years as on 1 Jan 2025. 5 years relaxation for reserved categories.'
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
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 24, EWS: 29, BC: 29, MBC: 29, SC: 29, ST: 29 },
      noteHi: 'कांस्टेबल: सामान्य 18-24 वर्ष, आरक्षित वर्ग/महिलाएँ 18-29 वर्ष (1 जनवरी 2025 तक)।',
      noteEn: 'Constable: General 18-24 years, Reserved/women 18-29 years as on 1 Jan 2025.'
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'forester',
    name: { hi: 'फॉरेस्टर (वनपाल)', en: 'Forester (Vanpal)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 200, marksPerQuestion: 2, totalMarks: 400, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null, extraStage: { hi: 'शारीरिक परीक्षा', en: 'Physical test' } },
    // SETTLED 2026-10-02 (coordinator-verified, RSSB वनपाल सीधी भर्ती-2026 advt PDF): मूल आयु 01.01.2027 के अनुसार 18-40 (GEN पुरुष) + पिछले वर्षों में भर्ती न होने से सभी को 3 वर्ष अतिरिक्त छूट => प्रभावी GEN 43
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2027-01-01',
      minAge: 18,
      maxAge: { GEN: 43, EWS: 48, BC: 48, MBC: 48, SC: 48, ST: 48, WOMEN: 48 },
      noteHi: 'मूल सीमा 18-40 वर्ष (1 जनवरी 2027 तक, GEN पुरुष)। विज्ञापन अनुसार पिछले वर्षों में भर्ती न होने के कारण सभी श्रेणियों को 3 वर्ष अतिरिक्त छूट — प्रभावी अधिकतम GEN 43 / आरक्षित 48 वर्ष। (आरक्षित पुरुष +5 और महिलाएँ +5/+10 पहले से जुड़ती हैं।)',
      noteEn: 'Base 18-40 as on 1 Jan 2027 (GEN male) + 3-year special relaxation for all categories per advt -> effective GEN max 43, reserved 48.',
      source: 'RSSB वनपाल सीधी भर्ती-2026, rssb.rajasthan.gov.in/storage/advertisement_item/1767617460.pdf'
    },
    subjects: ['raj-gk', 'india-gk', 'maths', 'science']
  },
  {
    id: 'jail-prahari',
    name: { hi: 'जेल प्रहरी', en: 'Jail Prahari' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    // SETTLED 2026-10-02 from विज्ञापन सं. 17/2024 (दिनांक 11.12.2024, RSSB): 100 प्रश्न / 400 अंक / 2 घंटे, प्रत्येक प्रश्न 4 अंक, गलत उत्तर पर 1 अंक कटौती
    // खण्ड: भाग-अ विवेचना/तार्किक 45Q·180M, भाग-ब सामान्य ज्ञान/विज्ञान/समसामयिक 25Q·100M, भाग-स राजस्थान GK 30Q·120M
    pattern: { totalQuestions: 100, marksPerQuestion: 4, totalMarks: 400, durationMin: 120, negative: { wrong: '1-mark-per-wrong', noteHi: 'गलत उत्तर पर 1 अंक कटौती (प्रश्न 4 अंक का)', noteEn: '1 mark deducted per wrong answer (question carries 4 marks)' }, fifthOptionRule: null, extraStage: { hi: 'PST/PET: 5 किमी दौड़, ऊँचाई/छाती मानक', en: 'PST/PET: 5km run, height/chest standards' } },
    // SETTLED 2026-10-02 (coordinator-verified from Adv 17/2024 PDF + indexed text): आयु 01.01.2026 के अनुसार 18-26 (GEN पुरुष)
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2026-01-01',
      minAge: 18,
      maxAge: { GEN: 26, EWS: 31, BC: 31, MBC: 31, SC: 31, ST: 31, WOMEN: 31 },
      noteHi: '18 से 26 वर्ष (1 जनवरी 2026 तक, GEN पुरुष)। राजस्थान आरक्षित श्रेणियों के पुरुष +5 वर्ष; सभी महिलाएँ GEN +5, आरक्षित महिलाएँ +10 वर्ष (स्थानीय संस्करण)। वर्दीधारी पद — सामान्य 18-40 वाली भर्तियों से अलग।',
      noteEn: '18 to 26 years as on 1 Jan 2026 (GEN male; uniformed post). Reserved males +5; women GEN +5, reserved women +10.',
      source: 'Adv 17/2024 (11.12.2024), rssb.rajasthan.gov.in/storage/advertisement_item/1734001071.pdf'
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'hostel-superintendent',
    name: { hi: 'हॉस्टल सुपरिंटेंडेंट (अल्पसंख्यक विभाग)', en: 'Hostel Superintendent (Minority Affairs)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    // SETTLED 2026-10-02 (coordinator-verified, official PDF Adv_HS_MAD_2024.pdf): आयु 01.01.2025 के अनुसार 18-40 (GEN पुरुष)
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45, WOMEN: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2025 तक, GEN पुरुष)। आरक्षित श्रेणियों के पुरुष +5; महिलाएँ GEN +5, आरक्षित महिलाएँ +10 वर्ष।',
      noteEn: '18 to 40 years as on 1 Jan 2025 (GEN male). Reserved males +5; women GEN +5, reserved women +10.',
      source: 'RSMSSB Adv (Hostel Suptd MAD 2024), rsmssb.rajasthan.gov.in/Static/files/Adv_HS_MAD_2024.pdf'
    },
    subjects: ['raj-gk', 'india-gk', 'current-affairs', 'maths', 'reasoning', 'hindi', 'computer']
  },
  {
    id: 'jamadar-excise',
    name: { hi: 'जमादार ग्रेड-II (आबकारी)', en: 'Jamadar Grade-II (Excise)' },
    family: 'CET', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    // SETTLED 2026-10-02 (coordinator-verified from Adv 07/2025 PDF indexed text): आयु 01.01.2026 के अनुसार 18-40 (GEN पुरुष)
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2026-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45, WOMEN: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2026 तक, GEN पुरुष)। आरक्षित श्रेणियाँ पुरुष +5; महिलाएँ GEN +5, आरक्षित महिलाएँ +10 वर्ष (स्थानीय संस्करण)।',
      noteEn: '18 to 40 years as on 1 Jan 2026 (GEN male). Reserved males +5; women GEN +5, reserved women +10.',
      source: 'Adv 07/2025, rssb.rajasthan.gov.in/storage/advertisement_item/1760618283.pdf'
    },
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
    family: 'DIRECT', verification: 'CROSS_CHECKED',
    pattern: { totalQuestions: 100, marksPerQuestion: 3, totalMarks: 300, durationMin: 120, negative: { wrong: '1/3', noteHi: 'गलत उत्तर पर 1/3 अंक कटौती', noteEn: '1/3 negative marking' }, fifthOptionRule: null },
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2025 तक)। नियमानुसार आरक्षित श्रेणी में छूट।',
      noteEn: '18 to 40 years as on 1 Jan 2025. Age relaxation per rules.'
    },
    subjects: ['agriculture', 'raj-gk', 'india-gk', 'maths', 'science', 'hindi']
  },
  {
    id: 'reet-level1',
    name: { hi: 'रीट लेवल 1 (प्राथमिक शिक्षक)', en: 'REET Level 1 (Primary Teacher)' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 1, totalMarks: 150, durationMin: 150, negative: { wrong: 'none', noteHi: 'स्क्रीनिंग में नकारात्मक अंकन नहीं', noteEn: 'No negative marking in screening' }, fifthOptionRule: null },
    // SETTLED 2026-10-02 (coordinator-verified, BSER विज्ञाप्ति 01/2024, 12-12-2024): REET पात्रता परीक्षा में कोई आयु सीमा नहीं
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      noAgeLimit: true,
      noteHi: 'REET केवल पात्रता परीक्षा है — आयोजन हेतु कोई न्यूनतम/अधिकतम आयु सीमा नहीं (विज्ञाप्ति 01/2024)। आयु सीमा शिक्षक भर्ती (अलग प्रक्रिया) में लागू होती है।',
      noteEn: 'REET is purely an eligibility test — no age limit prescribed (Vigyapati 01/2024). Age limits apply separately in teacher recruitment.',
      source: 'BSER REET-2024 विज्ञाप्ति सं. 01/2024 (12.12.2024), rajeduboard.rajasthan.gov.in/reet2024final121224.PDF'
    },
    subjects: ['child-pedagogy', 'raj-gk', 'maths', 'language', 'environment-science']
  },
  {
    id: 'stenographer',
    name: { hi: 'स्टेनोग्राफर / पीए ग्रेड-II', en: 'Stenographer / PA Grade-II' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 100, marksPerQuestion: 2, totalMarks: 200, durationMin: 120, negative: { wrong: '1/3' }, fifthOptionRule: { enabled: true, unattemptedPenalty: '1/3', disqualificationThreshold: 0.10, noteHi: 'खाली छोड़े प्रश्न पर विकल्प-E भरना अनिवार्य; बिना E के 10% से अधिक खाली = अपात्र', noteEn: 'Option E must be bubbled on unattempted; >10% blank without E = disqualification' },
      questionCountVerified: 'PENDING_FINAL_LOCK',
      extraStage: { hi: 'चरण-1: लिखित 200 अंक → चरण-2: डिक्टेशन 100 अंक (अंग्रेजी 100 wpm/10 मिनट + 60 मिनट ट्रांसक्रिप्शन; हिंदी 80 wpm/10 मिनट + 70 मिनट; न्यूनतम 36%) → DV', en: 'Phase-1: Written 200 marks -> Phase-2: Dictation 100 marks (English 100 wpm/10min + 60min transcription; Hindi 80 wpm/10min + 70min; min 36%) -> DV' } },
    // SETTLED 2026-10-02 (coordinator-verified, official advt PDF 26-02-2024): आयु 01.01.2025 के अनुसार 18-40 (GEN पुरुष)
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2025-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45, WOMEN: 45 },
      noteHi: '18 से 40 वर्ष (1 जनवरी 2025 तक, GEN पुरुष)। आरक्षित श्रेणियों के पुरुष +5; महिलाएँ GEN +5, आरक्षित महिलाएँ +10 वर्ष।',
      noteEn: '18 to 40 years as on 1 Jan 2025 (GEN male). Reserved males +5; women GEN +5, reserved women +10.',
      source: 'RSMSSB Steno & PA Gr-II Adv 2024 (26.02.2024), rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II _2024_26022024.pdf'
    },
    subjects: ['raj-gk', 'india-gk', 'science', 'english', 'hindi', 'reasoning']
  },
  {
    id: 'librarian-grade3',
    name: { hi: 'लाइब्रेरियन ग्रेड-3', en: 'Librarian Grade-3' },
    family: 'DIRECT', verification: 'OFFICIAL_CONFIRMED',
    pattern: { totalQuestions: 150, marksPerQuestion: 2, totalMarks: 300, durationMin: 180, negative: { wrong: '1/3' }, fifthOptionRule: null },
    // SETTLED 2026-10-02 (coordinator-verified: Adv 06/2022 verbatim age line 18-40; नवीनतम चक्र में आयु गणना 01.01.2026 — RSSB news_item/1734001649.pdf)
    ageLimit: {
      verification: 'OFFICIAL_CONFIRMED',
      refDate: '2026-01-01',
      minAge: 18,
      maxAge: { GEN: 40, EWS: 45, BC: 45, MBC: 45, SC: 45, ST: 45, WOMEN: 45 },
      noteHi: '18 से 40 वर्ष (वर्तमान चक्र में आयु गणना 1 जनवरी 2026 के अनुसार, GEN पुरुष)। आरक्षित श्रेणियों के पुरुष +5; महिलाएँ GEN +5, आरक्षित महिलाएँ +10 वर्ष।',
      noteEn: '18 to 40 years (current cycle reckons age as on 1 Jan 2026, GEN male). Reserved males +5; women GEN +5, reserved women +10.',
      source: 'RSSB Librarian Gr-III advt (11.12.2024) + Adv 06/2022 age clause, rssb.rajasthan.gov.in/storage/news_item/1734001649.pdf'
    },
    subjects: ['library-science', 'raj-gk', 'india-gk', 'hindi', 'english', 'computer']
  }
]

export const SHELF = [
  { id: 'forest-guard', name: { hi: 'फॉरेस्ट गार्ड (वन रक्षक)', en: 'Forest Guard (Van Rakshak)' }, note: 'FOUNDERS_DECISION_PENDING — 10th-level post, keep-as-bonus vs drop' },
  { id: 'high-court-ja', name: { hi: 'हाई कोर्ट जूनियर असिस्टेंट', en: 'High Court Junior Assistant' }, note: 'EXCLUDED — graduate-level (OFFICIAL_CONFIRMED)' },
  { id: 'district-court-clerk', name: { hi: 'जिला न्यायालय क्लर्क', en: 'District Court Clerk' }, note: 'EXCLUDED — graduate-level (OFFICIAL_CONFIRMED)' }
]
