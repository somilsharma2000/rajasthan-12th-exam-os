export const LANG_COMPUTER = [
  {
    id: 'lc-001',
    subject: 'hindi',
    topic: 'संधि (Sandhi)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'हिमालय' शब्द का सही संधि-विच्छेद क्या होगा?",
      en: "Sandhi Split: Select the correct sandhi split for the Hindi word Himalaya (Him + Alay)."
    },
    options: {
      hi: ['हिम + आलय', 'हिमा + लय', 'हिम + लय', 'हिमा + अल्य'],
      en: ['Him + Aalay', 'Hima + Laay', 'Him + Laay', 'Hima + Aalya']
    },
    answer: 0,
    explanation: {
      hi: "'हिमालय' में दीर्घ स्वर संधि है (अ + आ = आ)। सही संधि विच्छेद 'हिम + आलय' है।",
      en: "Him + Aalay forms Himalaya by Dirgha Swar Sandhi (a + aa = aa)."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-002',
    subject: 'hindi',
    topic: 'संधि (Sandhi)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'सज्जन' शब्द में कौन-सी संधि है?",
      en: "Sandhi Type: Identify the type of sandhi in the word Sajjan."
    },
    options: {
      hi: ['स्वर संधि', 'व्यंजन संधि', 'विसर्ग संधि', 'अयादि संधि'],
      en: ['Swar Sandhi', 'Vyanjan Sandhi', 'Visarga Sandhi', 'Ayadi Sandhi']
    },
    answer: 1,
    explanation: {
      hi: "'सज्जन' का संधि विच्छेद 'सत + जन' होता है, जिसमें त् के स्थान पर ज् हो जाता है। यह व्यंजन संधि का उदाहरण है।",
      en: "Sajjan splits as Sat + Jan (t + j -> jj), which is an example of Vyanjan Sandhi."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-003',
    subject: 'hindi',
    topic: 'संधि (Sandhi)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'मनोहर' शब्द का सही संधि-विच्छेद है -",
      en: "Sandhi Split: Correct sandhi-vicched for Manohar."
    },
    options: {
      hi: ['मन + हर', 'मनः + हर', 'मनो + हर', 'मना + हर'],
      en: ['Man + Har', 'Manah + Har', 'Mano + Har', 'Mana + Har']
    },
    answer: 1,
    explanation: {
      hi: "'मनोहर' में विसर्ग संधि है (मनः + हर = मनोहर)। विसर्ग का 'ओ' में परिवर्तन होता है।",
      en: "Manohar splits into Manah + Har under Visarga Sandhi."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-004',
    subject: 'hindi',
    topic: 'समास (Samas)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'यथाशक्ति' शब्द में कौन-सा समास है?",
      en: "Samas Identification: Identify the compound type for Yathashakti."
    },
    options: {
      hi: ['तत्पुरुष समास', 'द्विगु समास', 'अव्ययीभाव समास', 'बहुव्रीहि समास'],
      en: ['Tatpurush Samas', 'Dvigu Samas', 'Avyayibhav Samas', 'Bahuvrihi Samas']
    },
    answer: 2,
    explanation: {
      hi: "जिस समास का पहला पद अव्यय तथा प्रधान हो, उसे अव्ययीभाव समास कहते हैं। 'यथाशक्ति' का विग्रह 'शक्ति के अनुसार' है।",
      en: "Yathashakti (according to ability) has an indeclinable prefix 'yatha', making it Avyayibhav Samas."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-005',
    subject: 'hindi',
    topic: 'समास (Samas)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'दशानन' (दस हैं आनन जिसके अर्थात् रावण) में कौन-सा समास है?",
      en: "Samas Identification: Compound classification of Dashanan."
    },
    options: {
      hi: ['कर्मधारय समास', 'बहुव्रीहि समास', 'द्वंद्व समास', 'तत्पुरुष समास'],
      en: ['Karmadharaya Samas', 'Bahuvrihi Samas', 'Dvandva Samas', 'Tatpurush Samas']
    },
    answer: 1,
    explanation: {
      hi: "जिस समास में दोनों पद मिलकर किसी तीसरे विशेष अर्थ (रावण) का बोध कराते हैं, वहाँ बहुव्रीहि समास होता है।",
      en: "Dashanan refers specifically to a third entity (Ravana), classifying it as Bahuvrihi Samas."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-006',
    subject: 'hindi',
    topic: 'समास (Samas)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'माता-पिता' शब्द में कौन-सा समास है?",
      en: "Samas Identification: Identify the compound type of Mata-Pita."
    },
    options: {
      hi: ['द्वंद्व समास', 'द्विगु समास', 'अव्ययीभाव समास', 'तत्पुरुष समास'],
      en: ['Dvandva Samas', 'Dvigu Samas', 'Avyayibhav Samas', 'Tatpurush Samas']
    },
    answer: 0,
    explanation: {
      hi: "जिस समास में दोनों पद प्रधान हों तथा विग्रह करने पर 'और' या 'या' लगे, उसे द्वंद्व समास कहते हैं (माता और पिता)।",
      en: "Mata-Pita (Mother and Father) has both terms equally primary, constituting Dvandva Samas."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-007',
    subject: 'hindi',
    topic: 'उपसर्ग एवं प्रत्यय (Upsarg & Pratyay)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'अनुज' शब्द में कौन-सा उपसर्ग प्रयुक्त हुआ है?",
      en: "Prefix Identification: Identify the prefix (upsarg) in the word Anuj."
    },
    options: {
      hi: ['अ', 'अनु', 'अन', 'अन्'],
      en: ['A', 'Anu', 'An', 'Ann']
    },
    answer: 1,
    explanation: {
      hi: "'अनुज' शब्द 'अनु' (उपसर्ग) + 'ज' (मूल शब्द) से मिलकर बना है, जिसका अर्थ 'पीछे जन्म लेने वाला (छोटा भाई)' होता है।",
      en: "The prefix 'Anu' attaches to 'ja' to mean younger brother."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-008',
    subject: 'hindi',
    topic: 'उपसर्ग एवं प्रत्यय (Upsarg & Pratyay)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'मिठास' शब्द में कौन-सा प्रत्यय है?",
      en: "Suffix Identification: Identify the suffix (pratyay) in Mithas."
    },
    options: {
      hi: ['आस', 'स', 'ठास', 'मीठा'],
      en: ['Aas', 'Sa', 'Thaas', 'Meetha']
    },
    answer: 0,
    explanation: {
      hi: "'मीठा' शब्द में 'आस' प्रत्यय जुड़ने से भाववाचक संज्ञा 'मिठास' बनती है (मीठा + आस = मिठास)।",
      en: "The suffix 'aas' added to 'meetha' forms the abstract noun 'mithas'."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-009',
    subject: 'hindi',
    topic: 'पर्यायवाची (Synonyms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "निम्नलिखित में से कौन-सा शब्द 'सूर्य' का पर्यायवाची नहीं है?",
      en: "Synonyms: Which of the following is NOT a synonym for Sun (Surya)?"
    },
    options: {
      hi: ['दिनकर', 'रवि', 'निशाकर', 'भास्कर'],
      en: ['Dinkar', 'Ravi', 'Nishakar', 'Bhaskar']
    },
    answer: 2,
    explanation: {
      hi: "'निशाकर' चंद्रमा का पर्यायवाची है, जबकि दिनकर, रवि और भास्कर सूर्य के पर्यायवाची हैं।",
      en: "Nishakar means the Moon (night-maker). Dinkar, Ravi, and Bhaskar mean Sun."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-010',
    subject: 'hindi',
    topic: 'पर्यायवाची (Synonyms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'अमृत' शब्द का पर्यायवाची शब्द कौन-सा है?",
      en: "Synonyms: Which option is a synonym of Amrit (Nectar)?"
    },
    options: {
      hi: ['पीयूष', 'विष', 'गरल', 'हलाहल'],
      en: ['Piyush', 'Vish', 'Garal', 'Halahal']
    },
    answer: 0,
    explanation: {
      hi: "'अमृत' के पर्यायवाची पीयूष, सुधा, सोम, अमिय हैं। विष, गरल और हलाहल 'ज़हर' के पर्यायवाची हैं।",
      en: "Piyush is a synonym for nectar (Amrit). Vish, Garal, Halahal mean poison."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-011',
    subject: 'hindi',
    topic: 'विलोम शब्द (Antonyms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'अनुराग' शब्द का सही विलोम शब्द क्या है?",
      en: "Antonyms: Select the correct antonym for Anurag (Affection/Love)."
    },
    options: {
      hi: ['विराग', 'राग', 'प्रेम', 'अनुशक्ति'],
      en: ['Virag', 'Raag', 'Prem', 'Anushakti']
    },
    answer: 0,
    explanation: {
      hi: "'अनुराग' (प्रेम/आसक्ति) का सही विलोम शब्द 'विराग' (वैराग्य/अनासक्ति) होता है।",
      en: "Virag (detachment) is the direct antonym of Anurag (affection)."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-012',
    subject: 'hindi',
    topic: 'विलोम शब्द (Antonyms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'स्थावर' शब्द का विलोम शब्द क्या होगा?",
      en: "Antonyms: Find the antonym of Sthavar (Immovable)."
    },
    options: {
      hi: ['चंचल', 'जंगम', 'सचल', 'अचल'],
      en: ['Chanchal', 'Jangam', 'Sachal', 'Achal']
    },
    answer: 1,
    explanation: {
      hi: "'स्थावर' (स्थिर/न हिलने वाला) का प्रामाणिक विलोम शब्द 'जंगम' (चलने-फिरने वाला) है।",
      en: "Jangam (movable) is the classic grammatical antonym of Sthavar (immovable)."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-013',
    subject: 'hindi',
    topic: 'मुहावरे (Idioms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'आसमान पर चढ़ाना' मुहावरे का सही अर्थ क्या है?",
      en: "Idiom: What is the meaning of the idiom Aasman par chadhana?"
    },
    options: {
      hi: ['अत्यधिक प्रशंसा करना', 'कठिन काम के लिए प्रेरित करना', 'बहुत शोर करना', 'गाली देना'],
      en: ['Extremely praising someone', 'Inspiring for hard work', 'Making noise', 'Abusing someone']
    },
    answer: 0,
    explanation: {
      hi: "'आसमान पर चढ़ाना' मुहावरे का अर्थ किसी की अत्यधिक या झूठी प्रशंसा करके उसे फुला देना होता है।",
      en: "Aasman par chadhana means to praise someone excessively or flatter them."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-014',
    subject: 'hindi',
    topic: 'मुहावरे (Idioms)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'अपने मुँह मियाँ मिट्ठू बनना' मुहावरे का अर्थ है -",
      en: "Idiom: Meaning of Apne muh miyan mitthu banna."
    },
    options: {
      hi: ['अपनी प्रशंसा स्वयं करना', 'दूसरों की बुराई करना', 'मीठी बातें करना', 'तोते की तरह रटना'],
      en: ['Praising oneself', 'Speaking ill of others', 'Speaking sweetly', 'Rote learning']
    },
    answer: 0,
    explanation: {
      hi: "'अपने मुँह मियाँ मिट्ठू बनना' का अर्थ अपनी प्रशंसा स्वयं करना होता है।",
      en: "Apne muh miyan mitthu banna means praising oneself."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-015',
    subject: 'hindi',
    topic: 'वाक्य शुद्धि (Sentence Correction)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "निम्नलिखित में से कौन-सा वाक्य शुद्ध है?",
      en: "Sentence Correction: Which of the following sentences is grammatically correct?"
    },
    options: {
      hi: ['मेरे को बाज़ार जाना है।', 'मुझे बाज़ार जाना है।', 'मेरे को बाज़ार जाने का है।', 'मुझको बाज़ार जाने का है।'],
      en: ['Mere ko bazar jana hai.', 'Mujhe bazar jana hai.', 'Mere ko bazar jane ka hai.', 'Mujhko bazar jane ka hai.']
    },
    answer: 1,
    explanation: {
      hi: "हिंदी व्याकरण के अनुसार सर्वनाम का सही रूप 'मुझे बाज़ार जाना है' शुद्ध वाक्य है। 'मेरे को' अशुद्ध प्रयोग है।",
      en: "'Mujhe bazar jana hai' uses the correct pronoun case in standard Hindi."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-016',
    subject: 'hindi',
    topic: 'वर्तनी शुद्धि (Spelling Correction)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "किस क्रमांक में शब्द की वर्तनी पूर्णतः शुद्ध है?",
      en: "Spelling Correction: Which option has the correct spelling of Kavayitri?"
    },
    options: {
      hi: ['कवयित्री', 'कविअत्री', 'कवियत्री', 'कवयत्री'],
      en: ['Kavayitri', 'Kaviatri', 'Kaviyatri', 'Kavayatri']
    },
    answer: 0,
    explanation: {
      hi: "कवि का स्त्रीलिंग रूप 'कवयित्री' शुद्ध वर्तनी है, जो विभिन्न प्रतियोगी परीक्षाओं में बार-बार पूछा जाता है।",
      en: "Kavayitri (कवयित्री) is the standard grammatically correct feminine form of Kavi."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-017',
    subject: 'hindi',
    topic: 'वर्तनी शुद्धि (Spelling Correction)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "निम्नलिखित में से किस शब्द की वर्तनी शुद्ध है?",
      en: "Spelling Correction: Identify the correctly spelled word for Ujjwal."
    },
    options: {
      hi: ['उज्वल', 'उज्ज्वल', 'उज्जवल', 'उज्वला'],
      en: ['Ujwal', 'Ujjwal', 'Ujjawal', 'Ujwala']
    },
    answer: 1,
    explanation: {
      hi: "'उत् + ज्वल' की संधि से 'उज्ज्वल' बनता है, जिसमें दो आधे 'ज' (ज्ज) होते हैं।",
      en: "Ujjwal (उत् + ज्वल) correctly contains double half 'j' (ज्ज)."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-018',
    subject: 'hindi',
    topic: 'वाक्यांश के लिए एक शब्द (One-word Substitution)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'जिसका कोई शत्रु न जन्मा हो' - वाक्यांश के लिए एक शब्द है:",
      en: "One-word Substitution: Term for someone who has no born enemies."
    },
    options: {
      hi: ['अजातशत्रु', 'शत्रुहंता', 'अज्ञेय', 'सर्वजयी'],
      en: ['Ajatashatru', 'Shatruhanta', 'Agyeya', 'Sarvajayi']
    },
    answer: 0,
    explanation: {
      hi: "जिसका कोई शत्रु पैदा न हुआ हो, उसे 'अजातशत्रु' कहा जाता है।",
      en: "Ajatashatru means one whose enemy has never been born."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-019',
    subject: 'hindi',
    topic: 'रस एवं अलंकार (Ras & Alankar)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "'श्रृंगार रस' का स्थायी भाव क्या है?",
      en: "Ras Basics: What is the Sthayi Bhava (permanent emotion) of Shringara Ras?"
    },
    options: {
      hi: ['रति (प्रेम)', 'उत्साह', 'ह्रास', 'क्रोध'],
      en: ['Rati (Love/Affection)', 'Utsah (Enthusiasm)', 'Hras (Laughter)', 'Krodh (Anger)']
    },
    answer: 0,
    explanation: {
      hi: "श्रृंगार रस का स्थायी भाव 'रति' या प्रेम है। उत्साह वीर रस का, क्रोध रौद्र रस का और ह्रास हास्य रस का स्थायी भाव है।",
      en: "Rati (love) is the Sthayi Bhava of Shringara Ras."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-020',
    subject: 'hindi',
    topic: 'रस एवं अलंकार (Ras & Alankar)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "\"कनक कनक ते सौ गुनी मादकता अधिकाय\" - इस पंक्ति में कौन-सा अलंकार है?",
      en: "Alankar Basics: Identify the figure of speech (Alankar) in Kanak Kanak te Sau guni..."
    },
    options: {
      hi: ['अनुप्रास अलंकार', 'यम‍क अलंकार', 'श्लेष अलंकार', 'उपमा अलंकार'],
      en: ['Anupras Alankar', 'Yamak Alankar', 'Shlesh Alankar', 'Upama Alankar']
    },
    answer: 1,
    explanation: {
      hi: "जहाँ एक ही शब्द दो या दो से अधिक बार आए और हर बार अर्थ भिन्न हो (प्रथम कनक = सोना, द्वितीय कनक = धतूरा), वहाँ यमक अलंकार होता है।",
      en: "Yamak Alankar occurs when the same word (Kanak) appears twice with different meanings (gold and thorn-apple)."
    },
    provenance: { source: 'Rajasthan Class 12 Hindi Vyakaran & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-021',
    subject: 'english',
    topic: 'Articles',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(अंग्रेज़ी व्याकरण) रिक्त स्थान के लिए उपयुक्त Article चुनें: \"He is ______ honest officer.\"",
      en: "Choose the correct article to fill in the blank: \"He is ______ honest officer.\""
    },
    options: {
      hi: ['a', 'an', 'the', 'No article required'],
      en: ['a', 'an', 'the', 'No article required']
    },
    answer: 1,
    explanation: {
      hi: "'Honest' शब्द का उच्चारण स्वर ध्वनि (vowel sound) से शुरू होता है, इसलिए इससे पहले 'an' का प्रयोग होता है।",
      en: "The word 'honest' begins with a silent 'h' and a vowel sound, so the indefinite article 'an' is used."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-022',
    subject: 'english',
    topic: 'Tenses',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(अंग्रेज़ी व्याकरण) सही काल (Tense) चुनें: \"She ______ to school every day.\"",
      en: "Select the correct verb form: \"She ______ to school every day.\""
    },
    options: {
      hi: ['go', 'goes', 'going', 'gone'],
      en: ['go', 'goes', 'going', 'gone']
    },
    answer: 1,
    explanation: {
      hi: "नियमित या दैनिक कार्य (every day) व्यक्त करने के लिए Simple Present Tense का प्रयोग होता है। She (एकवचन) के साथ 'goes' आएगा।",
      en: "For habitual actions, Simple Present Tense is used. Third-person singular 'She' takes 'goes'."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-023',
    subject: 'english',
    topic: 'Prepositions',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(अंग्रेज़ी व्याकरण) उपयुक्त Preposition चुनें: \"The book is ______ the table.\"",
      en: "Fill in the blank with the appropriate preposition: \"The book is ______ the table.\""
    },
    options: {
      hi: ['in', 'on', 'at', 'into'],
      en: ['in', 'on', 'at', 'into']
    },
    answer: 1,
    explanation: {
      hi: "जब कोई वस्तु किसी सतह को स्पर्श करते हुए उसके ऊपर रखी होती है, तब 'on' Preposition का प्रयोग होता है।",
      en: "'On' is used to indicate position above and touching a surface."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-024',
    subject: 'english',
    topic: 'Active & Passive Voice',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(वाच्य परिवर्तन) \"Ram plays cricket.\" - इसका सही Passive Voice क्या होगा?",
      en: "Change to Passive Voice: \"Ram plays cricket.\""
    },
    options: {
      hi: ['Cricket was played by Ram.', 'Cricket is played by Ram.', 'Cricket is playing by Ram.', 'Cricket played Ram.'],
      en: ['Cricket was played by Ram.', 'Cricket is played by Ram.', 'Cricket is playing by Ram.', 'Cricket played Ram.']
    },
    answer: 1,
    explanation: {
      hi: "Simple Present Tense (plays) का Passive Voice 'is/am/are + V3' की सहायता से बनता है: Cricket + is + played + by Ram.",
      en: "Simple Present active voice (plays) changes to 'is + past participle (played)' in passive voice."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-025',
    subject: 'english',
    topic: 'Direct & Indirect Speech',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(प्रत्यक्ष/अप्रत्यक्ष कथन) \"He said, 'I am ill.'\" - इसका Indirect Speech रूप क्या होगा?",
      en: "Choose the correct indirect form: He said, \"I am ill.\""
    },
    options: {
      hi: ['He said that he was ill.', 'He said that I am ill.', 'He said that he is ill.', 'He tells that he was ill.'],
      en: ['He said that he was ill.', 'He said that I am ill.', 'He said that he is ill.', 'He tells that he was ill.']
    },
    answer: 0,
    explanation: {
      hi: "Reporting verb भूतकाल (said) में होने पर Simple Present बदलकर Past में (was ill) हो जाता है और 'I' बदल कर 'he' बनता है।",
      en: "When reporting in the past tense, present tense 'am' changes to past tense 'was' and pronoun 'I' shifts to 'he'."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-026',
    subject: 'english',
    topic: 'Synonyms',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(पर्यायवाची शब्द) अंग्रेजी शब्द \"Frank\" के लिए सही Synonym क्या है?",
      en: "What is the synonym of the word \"Frank\"?"
    },
    options: {
      hi: ['Candid', 'Shy', 'Secretive', 'Dishonest'],
      en: ['Candid', 'Shy', 'Secretive', 'Dishonest']
    },
    answer: 0,
    explanation: {
      hi: "'Frank' का अर्थ स्पष्टवादी या निष्कपट होता है, जिसका Synonym 'Candid' है।",
      en: "'Frank' and 'Candid' both mean truthful, straightforward, and outspoken."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-027',
    subject: 'english',
    topic: 'Antonyms',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(विलोम शब्द) अंग्रेजी शब्द \"Ancient\" का सही Antonym क्या है?",
      en: "Select the correct antonym for the word \"Ancient\"."
    },
    options: {
      hi: ['Old', 'Past', 'Modern', 'Historic'],
      en: ['Old', 'Past', 'Modern', 'Historic']
    },
    answer: 2,
    explanation: {
      hi: "'Ancient' (प्राचीन) का सही विलोम शब्द (Antonym) 'Modern' (आधुनिक) होता है।",
      en: "'Ancient' means belonging to the distant past; its antonym is 'Modern'."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-028',
    subject: 'english',
    topic: 'One-Word Substitution',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(एक शब्द) \"One who knows or speaks many languages\" के लिए सही One-word क्या है?",
      en: "Choose the one-word substitution for: \"One who knows or speaks many languages\"."
    },
    options: {
      hi: ['Polyglot', 'Linguist', 'Autobiographer', 'Orator'],
      en: ['Polyglot', 'Linguist', 'Autobiographer', 'Orator']
    },
    answer: 0,
    explanation: {
      hi: "कई भाषाएं जानने या बोलने वाले व्यक्ति को 'Polyglot' (बहुभाषाविद) कहते हैं।",
      en: "A person who knows or uses several languages is called a Polyglot."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-029',
    subject: 'english',
    topic: 'One-Word Substitution',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(एक शब्द) \"A life history of a person written by himself\" को क्या कहते हैं?",
      en: "What is \"A life history of a person written by himself\" called?"
    },
    options: {
      hi: ['Biography', 'Autobiography', 'History', 'Novel'],
      en: ['Biography', 'Autobiography', 'History', 'Novel']
    },
    answer: 1,
    explanation: {
      hi: "स्वयं द्वारा लिखी गई अपनी जीवन कथा को 'Autobiography' (आत्मकथा) कहते हैं। किसी और द्वारा लिखी जाए तो Biography कहलाती है।",
      en: "An account of a person's life written by that person is an Autobiography."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-030',
    subject: 'english',
    topic: 'Subject-Verb Agreement',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(अंग्रेज़ी व्याकरण) सही Verb चुनें: \"Neither Ram nor his friends ______ present at the party.\"",
      en: "Complete the sentence: \"Neither Ram nor his friends ______ present at the party.\""
    },
    options: {
      hi: ['was', 'were', 'is', 'has'],
      en: ['was', 'were', 'is', 'has']
    },
    answer: 1,
    explanation: {
      hi: "जब दो कर्ता 'Neither... nor' से जुड़े हों, तो क्रिया (Verb) निकटतम कर्ता (his friends - बहुवचन) के अनुसार आती है, इसलिए 'were' सही उत्तर है।",
      en: "When subjects are joined by 'Neither... nor', the verb agrees with the nearer subject ('his friends' - plural, so 'were')."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-031',
    subject: 'english',
    topic: 'Vocabulary & Spelling',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(वर्तनी जांच) निम्नलिखित में से किस शब्द की स्पेलिंग (Spelling) सही है?",
      en: "Identify the correctly spelled word:"
    },
    options: {
      hi: ['Receive', 'Recieve', 'Receeve', 'Recive'],
      en: ['Receive', 'Recieve', 'Receeve', 'Recive']
    },
    answer: 0,
    explanation: {
      hi: "अंग्रेजी नियम 'i before e except after c' के अनुसार 'C' के बाद 'ei' आता है, अतः 'Receive' शुद्ध स्पेलिंग है।",
      en: "The correct spelling is 'Receive' (R-E-C-E-I-V-E)."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-032',
    subject: 'english',
    topic: 'Idioms & Phrases',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(मुहावरे) अंग्रेजी मुहावरे \"A piece of cake\" का क्या अर्थ है?",
      en: "What is the meaning of the idiom \"A piece of cake\"?"
    },
    options: {
      hi: ['A very easy task', 'A delicious food item', 'A complicated problem', 'A sweet gift'],
      en: ['A very easy task', 'A delicious food item', 'A complicated problem', 'A sweet gift']
    },
    answer: 0,
    explanation: {
      hi: "अंग्रेजी मुहावरे 'A piece of cake' का अर्थ 'अत्यंत आसान कार्य' (A very easy task) होता है।",
      en: "'A piece of cake' is an informal idiom meaning something that is very easy to do."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-033',
    subject: 'english',
    topic: 'Prepositions',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(अंग्रेज़ी व्याकरण) रिक्त स्थान भरें: \"He has been living in Jaipur ______ 2015.\"",
      en: "Fill in the blank: \"He has been living in Jaipur ______ 2015.\""
    },
    options: {
      hi: ['for', 'since', 'from', 'in'],
      en: ['for', 'since', 'from', 'in']
    },
    answer: 1,
    explanation: {
      hi: "Present Perfect Continuous Tense में निश्चित समय (Point of Time - जैसे 2015) दर्शाने के लिए 'since' का प्रयोग होता है।",
      en: "'Since' is used with perfect tenses to denote a specific point in time in the past."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-034',
    subject: 'english',
    topic: 'Antonyms',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(विलोम शब्द) \"Barren\" (अनुपजाऊ/बंजर) शब्द का सही Antonym क्या होगा?",
      en: "Find the opposite/antonym of the word \"Barren\"."
    },
    options: {
      hi: ['Fertile', 'Dry', 'Desert', 'Waste'],
      en: ['Fertile', 'Dry', 'Desert', 'Waste']
    },
    answer: 0,
    explanation: {
      hi: "'Barren' का अर्थ बंजर/अनुपजाऊ होता है, जिसका विलोम 'Fertile' (उर्वर/उपजाऊ) है।",
      en: "'Barren' means unproductive/sterile; its antonym is 'Fertile' (productive)."
    },
    provenance: { source: 'Rajasthan Class 12 English Vocabulary & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-035',
    subject: 'english',
    topic: 'Adjectives & Degrees',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "(विशेषण की अवस्था) रिक्त स्थान भरें: \"Mount Everest is the ______ peak in the world.\"",
      en: "Fill in the blank with the correct degree of adjective: \"Mount Everest is the ______ peak in the world.\""
    },
    options: {
      hi: ['high', 'higher', 'highest', 'more high'],
      en: ['high', 'higher', 'highest', 'more high']
    },
    answer: 2,
    explanation: {
      hi: "विशेषण से पहले Article 'the' का प्रयोग हुआ है और पूरे विश्व से तुलना की जा रही है, अतः Superlative Degree 'highest' का प्रयोग होगा।",
      en: "The definite article 'the' precedes superlative adjectives when comparing one to all others, requiring 'highest'."
    },
    provenance: { source: 'Rajasthan Class 12 English Grammar & RSSB Exam Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-036',
    subject: 'computer',
    topic: 'Computer Hardware',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "कंप्यूटर में डेटा और निर्देश प्रविष्ट (Input) करने के लिए निम्नलिखित में से किस उपकरण का उपयोग किया जाता है?",
      en: "Which of the following devices is used to input data and instructions into a computer?"
    },
    options: {
      hi: ['कीबोर्ड (Keyboard)', 'मॉनिटर (Monitor)', 'प्रिन्टर (Printer)', 'स्पीकर (Speaker)'],
      en: ['Keyboard', 'Monitor', 'Printer', 'Speaker']
    },
    answer: 0,
    explanation: {
      hi: "कीबोर्ड एक प्राथमिक इनपुट डिवाइस है। मॉनिटर, प्रिंटर और स्पीकर आउटपुट डिवाइस हैं।",
      en: "A keyboard is a primary input device used for entering characters and commands into a computer system."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-037',
    subject: 'computer',
    topic: 'Keyboard Shortcuts',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "MS Word में चयनित टेक्स्ट को 'कॉपी' (Copy) करने के लिए किस शॉर्टकट कुंजी (Shortcut Key) का उपयोग किया जाता है?",
      en: "Which shortcut key is used to copy selected text in MS Word?"
    },
    options: {
      hi: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'],
      en: ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z']
    },
    answer: 1,
    explanation: {
      hi: "Ctrl + C कॉपी करने के लिए, Ctrl + V पेस्ट करने के लिए, Ctrl + X कट करने के लिए और Ctrl + Z अनडू करने के लिए उपयोग किया जाता है।",
      en: "Ctrl + C is the standard keyboard shortcut used to copy selected text or items to the clipboard."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-038',
    subject: 'computer',
    topic: 'MS Office (Excel)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "MS Excel में रो (Row) और कॉलम (Column) के कटान बिंदु (Intersection) को क्या कहते हैं?",
      en: "In MS Excel, the intersection of a row and a column is known as a:"
    },
    options: {
      hi: ['सेल (Cell)', 'वर्कशीट (Worksheet)', 'ग्रिड (Grid)', 'ब्लॉक (Block)'],
      en: ['Cell', 'Worksheet', 'Grid', 'Block']
    },
    answer: 0,
    explanation: {
      hi: "MS Excel में रो और कॉलम जहाँ एक-दूसरे को काटते हैं, उस आयताकार खाने को 'सेल' (Cell) कहा जाता है।",
      en: "In spreadsheets, a cell is the basic unit formed at the intersection of a row and a column."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-039',
    subject: 'computer',
    topic: 'Input/Output Devices',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "निम्नलिखित में से कौन-सा एक आउटपुट डिवाइस (Output Device) का उदाहरण है?",
      en: "Which of the following is an example of an output device?"
    },
    options: {
      hi: ['माउस (Mouse)', 'स्कैनर (Scanner)', 'प्लाटर (Plotter)', 'माइक्रोफोन (Microphone)'],
      en: ['Mouse', 'Scanner', 'Plotter', 'Microphone']
    },
    answer: 2,
    explanation: {
      hi: "प्लाटर (Plotter) एक आउटपुट डिवाइस है जो बड़े बैनर, नक्शे या वेक्टर ग्राफिक्स प्रिंट करने के काम आता है। माउस, स्कैनर व माइक्रोफोन इनपुट डिवाइस हैं।",
      en: "A plotter is a hard-copy output device used to print high-quality vector graphics."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-040',
    subject: 'computer',
    topic: 'Internet Basics',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "URL का पूरा नाम (Full Form) क्या है?",
      en: "What is the full form of URL in computer terminology?"
    },
    options: {
      hi: ['Uniform Resource Locator', 'Universal Resource Link', 'Uniform Recovery Location', 'United Resource Locator'],
      en: ['Uniform Resource Locator', 'Universal Resource Link', 'Uniform Recovery Location', 'United Resource Locator']
    },
    answer: 0,
    explanation: {
      hi: "URL का पूर्ण रूप Uniform Resource Locator होता है, जो इंटरनेट पर किसी वेब पेज का पता होता है।",
      en: "URL stands for Uniform Resource Locator, serving as the global address of documents on the web."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-041',
    subject: 'computer',
    topic: 'Computer Memory',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "कंप्यूटर की मुख्य मेमोरी (Primary Memory) के रूप में किसे जाना जाता है?",
      en: "Which of the following is considered as the primary memory of a computer?"
    },
    options: {
      hi: ['हार्ड डिस्क (Hard Disk)', 'RAM (रैंडम एक्सेस मेमोरी)', 'पेन ड्राइव (Pen Drive)', 'CD-ROM'],
      en: ['Hard Disk', 'RAM (Random Access Memory)', 'Pen Drive', 'CD-ROM']
    },
    answer: 1,
    explanation: {
      hi: "RAM (Random Access Memory) कंप्यूटर की प्राथमिक (Primary/Volatile) मेमोरी है। हार्ड डिस्क, पेन ड्राइव और CD-ROM सेकेंडरी मेमोरी हैं।",
      en: "RAM (Random Access Memory) is the primary volatile memory accessed directly by the CPU."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-042',
    subject: 'computer',
    topic: 'Operating System Basics',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "निम्नलिखित में से कौन-सा एक ऑपरेटिंग सिस्टम (Operating System) नहीं है?",
      en: "Which of the following is NOT an Operating System?"
    },
    options: {
      hi: ['Windows 11', 'Linux', 'MS Word', 'Android'],
      en: ['Windows 11', 'Linux', 'MS Word', 'Android']
    },
    answer: 2,
    explanation: {
      hi: "MS Word एक एप्लीकेशन सॉफ्टवेयर (वर्ड प्रोसेसर) है, जबकि Windows 11, Linux तथा Android ऑपरेटिंग सिस्टम (सिस्टम सॉफ्टवेयर) हैं।",
      en: "MS Word is an application software (word processor), whereas Windows, Linux, and Android are operating systems."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-043',
    subject: 'computer',
    topic: 'MS Office (PowerPoint)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "MS PowerPoint में नई स्लाइड जोड़ने (Insert New Slide) के लिए किस शॉर्टकट की का प्रयोग किया जाता है?",
      en: "Which shortcut key is used to insert a new slide in MS PowerPoint?"
    },
    options: {
      hi: ['Ctrl + N', 'Ctrl + M', 'Ctrl + S', 'Ctrl + P'],
      en: ['Ctrl + N', 'Ctrl + M', 'Ctrl + S', 'Ctrl + P']
    },
    answer: 1,
    explanation: {
      hi: "PowerPoint में वर्तमान प्रेजेंटेशन में नई स्लाइड जोड़ने के लिए Ctrl + M दबाया जाता है। (Ctrl + N से नई प्रेजेंटेशन फाइल खुलती है)।",
      en: "Ctrl + M inserts a new slide into the active presentation in MS PowerPoint."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-044',
    subject: 'computer',
    topic: 'Computer Fundamentals',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "कंप्यूटर का 'मस्तिष्क' (Brain of Computer) किसे कहा जाता है?",
      en: "Which component is referred to as the \"Brain of the Computer\"?"
    },
    options: {
      hi: ['CPU', 'RAM', 'ALU', 'Monitor'],
      en: ['CPU', 'RAM', 'ALU', 'Monitor']
    },
    answer: 0,
    explanation: {
      hi: "CPU (Central Processing Unit) कंप्यूटर की सभी गणनाओं व प्रक्रियाओं को नियंत्रित करता है, इसलिए इसे कंप्यूटर का मस्तिष्क कहा जाता है।",
      en: "The CPU (Central Processing Unit) performs instructions and controls overall processing, making it the brain of the computer."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-045',
    subject: 'computer',
    topic: 'Internet & Email',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "ई-मेल (E-mail) भेजते समय 'BCC' का पूर्ण रूप क्या होता है?",
      en: "What does BCC stand for in email messaging?"
    },
    options: {
      hi: ['Blind Carbon Copy', 'Basic Carbon Copy', 'Blind Computer Copy', 'Business Carbon Copy'],
      en: ['Blind Carbon Copy', 'Basic Carbon Copy', 'Blind Computer Copy', 'Business Carbon Copy']
    },
    answer: 0,
    explanation: {
      hi: "BCC का अर्थ Blind Carbon Copy होता है। इसमें शामिल प्राप्यकर्ताओं की सूची अन्य किसी प्राप्तकर्ता को दिखाई नहीं देती।",
      en: "BCC stands for Blind Carbon Copy, which hides the recipient list from other recipients."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-046',
    subject: 'computer',
    topic: 'Cyber Security (RS-CIT level)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "कंप्यूटर को अनधिकृत पहुँच (Unauthorized Access) व नेटवर्क हमलों से बचाने वाली सुरक्षा प्रणाली क्या कहलाती है?",
      en: "What security system protects a computer network from unauthorized access?"
    },
    options: {
      hi: ['फ़ायरवॉल (Firewall)', 'स्पैम (Spam)', 'एंटी-वायरस (Anti-virus)', 'कुकीज़ (Cookies)'],
      en: ['Firewall', 'Spam', 'Anti-virus', 'Cookies']
    },
    answer: 0,
    explanation: {
      hi: "फ़ायरवॉल (Firewall) नेटवर्क सुरक्षा प्रणाली है जो आने वाले और जाने वाले नेटवर्क ट्रैफ़िक की निगरानी और नियंत्रण करती है।",
      en: "A Firewall is a network security system that monitors and controls incoming and outgoing network traffic."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-047',
    subject: 'computer',
    topic: 'MS Office (Word)',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "MS Word 2010/2016 में डिफ़ॉल्ट फाइल एक्सटेंशन (File Extension) क्या होता है?",
      en: "What is the default file extension for MS Word documents (2007 and later)?"
    },
    options: {
      hi: ['.docx', '.xlsx', '.pptx', '.txt'],
      en: ['.docx', '.xlsx', '.pptx', '.txt']
    },
    answer: 0,
    explanation: {
      hi: "MS Word 2007 और उसके बाद के संस्करणों का डिफ़ॉल्ट फाइल एक्सटेंशन .docx होता है।",
      en: "The default file extension for documents saved in MS Word 2007 and newer versions is .docx."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-048',
    subject: 'computer',
    topic: 'Operating System Basics',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "विंडोज ऑपरेटिंग सिस्टम में हटाए गए (Delete किए गए) फाइलों को अस्थाई रूप से कहाँ संग्रहित किया जाता है?",
      en: "Where are deleted files temporarily stored in Windows OS?"
    },
    options: {
      hi: ['रिसाइकल बिन (Recycle Bin)', 'कंट्रोल पैनल (Control Panel)', 'माय डॉक्यूमेंट्स (My Documents)', 'टास्क बार (Taskbar)'],
      en: ['Recycle Bin', 'Control Panel', 'My Documents', 'Taskbar']
    },
    answer: 0,
    explanation: {
      hi: "विंडोज में साधारणतया डिलीट की गई फाइलें रिसाइकल बिन (Recycle Bin) में सुरक्षित रहती हैं, जिन्हें बाद में रीस्टोर किया जा सकता है।",
      en: "Files deleted in Windows are temporarily sent to the Recycle Bin before permanent deletion."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-049',
    subject: 'computer',
    topic: 'Data Measurement Units',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "1 गीगाबाइट (1 GB) में कितने मेगाबाइट (MB) होते हैं?",
      en: "How many Megabytes (MB) make 1 Gigabyte (GB)?"
    },
    options: {
      hi: ['1024 MB', '1000 MB', '512 MB', '2048 MB'],
      en: ['1024 MB', '1000 MB', '512 MB', '2048 MB']
    },
    answer: 0,
    explanation: {
      hi: "कंप्यूटर बाइनरी डेटा माप के अनुसार 1 GB = 1024 MB, 1 MB = 1024 KB, और 1 KB = 1024 Bytes होता है।",
      en: "In binary computer storage measurement, 1 GB equals 1024 Megabytes (MB)."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'lc-050',
    subject: 'computer',
    topic: 'Internet & Networking',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: "Wi-Fi का पूर्ण रूप (Full Form) क्या होता है?",
      en: "What is the full form of Wi-Fi?"
    },
    options: {
      hi: ['Wireless Fidelity', 'Wireless Function', 'Wired Fidelity', 'Wireless File'],
      en: ['Wireless Fidelity', 'Wireless Function', 'Wired Fidelity', 'Wireless File']
    },
    answer: 0,
    explanation: {
      hi: "Wi-Fi का पूर्ण रूप 'Wireless Fidelity' है, जो बिना तार के लोकल एरिया नेटवर्क (WLAN) कनेक्शन प्रदान करता है।",
      en: "Wi-Fi stands for Wireless Fidelity, representing wireless local area networking technology."
    },
    provenance: { source: 'RS-CIT Syllabus & Rajasthan Board Computer Science Standard', evidence: 'VERIFIED_DERIVED' }
  }
];
