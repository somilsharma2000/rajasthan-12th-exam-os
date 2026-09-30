// VERIFIED EXAM HUB DATA — every field from the deep surveys (gather/exam-hubs/deep-*.md),
// all OFFICIAL_CONFIRMED unless marked. AS-OF: September 2026.
export const AS_OF = { hi: 'सत्यापन अनुसार: सितंबर 2026', en: 'Verified as of: September 2026' }

export const HUBS = {
  'cet-12th': {
    qualification: { hi: '10+2 (राजस्थान/सीबीएसई बोर्ड) उत्तीर्ण। आयु: 18–40 वर्ष + श्रेणी छूट (पुरुष SC/ST/OBC/EWS +5, सामान्य महिला +5, SC/ST महिला +10)', en: '10+2 pass (RBSE/CBSE). Age 18-40 with relaxations' },
    stages: { hi: 'सीईटी स्क्रीनिंग लिखित → प्रति पद 15 गुना अभ्यर्थी शॉर्टलिस्ट → अगला चरण (मेन्स/PET/टाइपिंग) → स्कोरकार्ड 3 वर्ष वैध', en: 'CET screening written -> 15x shortlist -> next stage (Mains/PET/typing) -> scorecard valid 3 years' },
    pay: { hi: 'सीईटी स्वयं पद नहीं देता — 7 सेवाओं में मेधा सूची बनाता है', en: 'CET itself is not a post - it builds the merit list for 7 services' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'ldc-junior-assistant': {
    qualification: { hi: '12वीं उत्तीर्ण + RS-CIT / O-Level / COPA / सीएस डिप्लोमा-डिग्री (कोई एक) + CET 12th लेवल स्क्रीनिंग उत्तीर्ण', en: '12th pass + RS-CIT / O-Level / COPA / CS diploma-degree (any one) + CET 12th screening qualified' },
    stages: { hi: 'CET शॉर्टलिस्ट (15x) → लिखित (200 अंक) → टाइपिंग टेस्ट (100 अंक: 4 उप-परीक्षाएँ × 25, प्रत्येक में न्यूनतम 9 अंक, 25 wpm कृतिदेव 010) → दस्तावेज़ सत्यापन', en: 'CET shortlist (15x) -> Written (200 marks) -> Typing test (100 marks: 4 sub-tests x 25, min 9 each, 25 wpm Kruti Dev 010) -> DV' },
    pay: { hi: 'पे लेवल L-5 (ग्रेड पे 2400) · प्रोबेशन: ₹14,600 नियत · बेसिक: ₹20,800 से', en: 'Pay level L-5 (GP 2400); probation stipend Rs 14,600; basic from Rs 20,800' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'police-constable': {
    qualification: { hi: '10+2 उत्तीर्ण + CET 12th लेवल (सामान्य/OBC 40%, SC/ST 36%) · आयु: न्यूनतम 18, सामान्यतः 23 तक (+COVID छूट अनुसार)', en: '10+2 pass + CET 12th level (Gen/OBC 40%, SC/ST 36%); age min 18, normally max 23 (+ Covid relaxation)' },
    stages: { hi: 'PET/PST (अर्हक) → सीबीटी लिखित (150 अंक) → प्रोफिशिएंसी (30 अंक, ड्राइवर/बैंड) → विशेष अंक (20) → मेधा सूची', en: 'PET/PST (qualifying) -> CBT written (150 marks) -> Proficiency (30, driver/band) -> Special marks (20) -> merit' },
    pay: { hi: 'पे लेवल L-5 (राजस्थान संशोधित वेतन नियम 2017)', en: 'Pay level L-5 (Rajasthan Revised Pay Rules 2017)' },
    official: 'https://police.rajasthan.gov.in'
  },
  'forester': {
    qualification: { hi: '12वीं उत्तीर्ण (कोई भी संवर्ग) + देवनागरी हिंदी व राजस्थानी संस्कृति + CET 12th लेवल 2024 स्कोरकार्ड', en: '12th pass (any stream) + Devanagari Hindi & Raj culture + CET 12th level 2024 scorecard' },
    stages: { hi: 'CET गेट → लिखित → शारीरिक परीक्षा → DV → मेडिकल', en: 'CET gate -> written -> physical test -> DV -> medical' },
    pay: { hi: 'पे लेवल L-8 (ग्रेड पे ₹2800, ₹26,300–₹85,500) · प्रोबेशन स्टाइपेंड ₹18,500/माह · प्रोबेशन 2 वर्ष', en: 'Pay level L-8 (GP Rs 2800, Rs 26,300-85,500); probation stipend Rs 18,500/month; 2-year probation' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'jail-prahari': {
    qualification: { hi: '12वीं उत्तीर्ण + देवनागरी हिंदी व राजस्थानी संस्कृति + CET 12th लेवल 2024 स्कोरकार्ड', en: '12th pass + Devanagari Hindi & Raj culture + CET 12th level 2024 scorecard' },
    stages: { hi: 'लिखित (200 प्रश्न / 400 अंक) → PST/PET → DV → मेडिकल', en: 'Written (200 questions / 400 marks) -> PST/PET -> DV -> medical' },
    pay: { hi: 'पे लेवल L-5 (ग्रेड पे 2400) · प्रोबेशन स्टाइपेंड ₹14,600/माह', en: 'Pay level L-5 (GP 2400); probation stipend Rs 14,600/month' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'hostel-superintendent': {
    qualification: { hi: '12वीं उत्तीर्ण + कंप्यूटर प्रमाणपत्र (RS-CIT / O-Level / COPA / सीएस डिप्लोमा) + CET 12th लेवल स्क्रीनिंग — (अल्पसंख्यक विभाग कैडर, 12th-स्तर)', en: '12th pass + computer certificate (RS-CIT / O-Level / COPA / CS diploma) + CET 12th screening (Minority Affairs cadre, 12th-level)' },
    stages: { hi: 'CET शॉर्टलिस्ट → लिखित → DV → मेधा सूची', en: 'CET shortlist -> written -> DV -> merit list' },
    pay: { hi: 'पे लेवल L-5 (ग्रेड पे 2400)', en: 'Pay level L-5 (GP 2400)' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'jamadar-excise': {
    qualification: { hi: '12वीं उत्तीर्ण + CET 12th लेवल स्क्रीनिंग (आबकारी विभाग, निवारक शाखा)', en: '12th pass + CET 12th level screening (Excise Dept, preventive branch)' },
    stages: { hi: 'CET शॉर्टलिस्ट → लिखित → PST/PET (आवश्यकतानुसार) → DV', en: 'CET shortlist -> written -> PST/PET (as required) -> DV' },
    pay: { hi: 'पे लेवल L-5 (राजस्थान संशोधित वेतन नियम 2017)', en: 'Pay level L-5 (Rajasthan Revised Pay Rules 2017)' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'lab-assistant': {
    qualification: { hi: '12वीं विज्ञान (न्यूनतम 3 निर्धारित विषय) या 12वीं भूगोल या 12वीं होम साइंस — प्रत्यक्ष भर्ती (NON-CET), कोई डिप्लोमा आवश्यक नहीं', en: '12th science (min 3 prescribed subjects) OR 12th geography OR 12th home science - direct entry (NON-CET), no diploma required' },
    stages: { hi: 'एकल लिखित परीक्षा (एमसीक्यू) → दस्तावेज़ सत्यापन (1.5x) → मेडिकल व मेधा सूची', en: 'Single written MCQ exam -> DV (1.5x) -> medical & merit list' },
    pay: { hi: 'लैब असिस्टेंट: पे लेवल L-8 (ग्रेड पे 2800) · जूनियर लैब असिस्टेंट: L-5', en: 'Lab Assistant: L-8 (GP 2800); Junior Lab Assistant: L-5' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'agriculture-supervisor': {
    qualification: { hi: '12वीं कृषि-संवर्ग (या निर्धारित समतुल्य) — प्रत्यक्ष भर्ती; वरीयता नियम विज्ञापन अनुसार', en: '12th agriculture stream (or prescribed equivalent) - direct entry; preference rules per notification' },
    stages: { hi: 'लिखित परीक्षा → दस्तावेज़ सत्यापन → मेधा सूची', en: 'Written exam -> DV -> merit list' },
    pay: { hi: 'पे लेवल L-5 (ग्रेड पे 2400) · प्रोबेशन स्टाइपेंड ₹14,600/माह · प्रोबेशन 2 वर्ष', en: 'Pay level L-5 (GP 2400); probation stipend Rs 14,600/month; 2-year probation' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'reet-level1': {
    qualification: { hi: '12वीं उत्तीर्ण (50%) + 2-वर्षीय D.El.Ed / BSTC / D.Ed (एनसीटीई मान्य) — बी.एड. धारक सुप्रीम कोर्ट निर्णय (11.08.2023) के अनुसार लेवल-1 से बाहर', en: '12th pass (50%) + 2-year D.El.Ed / BSTC / D.Ed (NCTE recognized) - B.Ed excluded from Level 1 per Supreme Court ruling (11.08.2023)' },
    stages: { hi: 'रीट लिखित (स्क्रीनिंग, नकारात्मक अंकन नहीं) → पात्रता/दस्तावेज़ सत्यापन → अध्यापक भर्ती प्रक्रिया', en: 'REET written (screening, no negative marking) -> eligibility/DV -> teacher recruitment process' },
    pay: { hi: 'पे लेवल L-10 (ग्रेड पे 3600) · प्रोबेशन स्टाइपेंड ₹23,700 · बेसिक ₹33,800 से', en: 'Pay level L-10 (GP 3600); probation stipend Rs 23,700; basic from Rs 33,800' },
    official: 'https://rajeduboard.rajasthan.gov.in'
  },
  'stenographer': {
    qualification: { hi: '12वीं उत्तीर्ण + RS-CIT / DOEACC O-Level / COPA / सीएस-आईटी डिप्लोमा-डिग्री — प्रत्यक्ष भर्ती (NON-CET)', en: '12th pass + RS-CIT / O-Level / COPA / CS-IT diploma-degree - direct entry (NON-CET)' },
    stages: { hi: 'चरण-1: लिखित (200 अंक) → चरण-2: डिक्टेशन-कौशल परीक्षा (100 अंक; अंग्रेजी 100 wpm/10 मिनट + 60 मिनट ट्रांसक्रिप्शन; हिंदी 80 wpm/10 मिनट + 70 मिनट; न्यूनतम 36%) → DV व अंतिम मेधा (300 अंक)', en: 'Phase-1: Written (200 marks) -> Phase-2: Dictation-skill test (100 marks; English 100 wpm/10min + 60min transcription; Hindi 80 wpm/10min + 70min; min 36%) -> DV & final merit (300 marks)' },
    pay: { hi: 'पे लेवल L-10 (ग्रेड पे 3600) · प्रोबेशन स्टाइपेंड ₹23,700 · बेसिक ₹33,800 से', en: 'Pay level L-10 (GP 3600); probation stipend Rs 23,700; basic from Rs 33,800' },
    official: 'https://rssb.rajasthan.gov.in'
  },
  'librarian-grade3': {
    qualification: { hi: '12वीं उत्तीर्ण + लाइब्रेरी विज्ञान प्रमाणपत्र/डिप्लोमा (आरएसएसबी विज्ञापन अनुसार) — प्रत्यक्ष भर्ती', en: '12th pass + library science certificate/diploma (per RSSB advertisement) - direct entry' },
    stages: { hi: 'लिखित परीक्षा → दस्तावेज़ सत्यापन → मेधा सूची', en: 'Written exam -> DV -> merit list' },
    pay: { hi: 'पदस्तर विज्ञापन-सत्यापन में अंतिम रूप से लॉक होगा', en: 'Pay level to be locked from the notification' },
    official: 'https://rssb.rajasthan.gov.in'
  }
}
