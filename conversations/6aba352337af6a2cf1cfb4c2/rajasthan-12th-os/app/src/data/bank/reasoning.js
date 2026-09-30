// Reasoning Question Bank for Rajasthan 12th Level Govt Exams
export const REASONING = [
  {
    "id": "rea-001",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि किसी निश्चित कूट भाषा में \"JAIPUR\" को \"KBJQVS\" लिखा जाता है, तो उसी भाषा में \"UDAIPUR\" को क्या लिखा जाएगा?",
      "en": "If in a certain code language \"JAIPUR\" is written as \"KBJQVS\", how will \"UDAIPUR\" be written in that language?"
    },
    "options": {
      "hi": [
        "VEBJQVS",
        "VEBJQVR",
        "UDBJQVS",
        "VEAIRVS"
      ],
      "en": [
        "VEBJQVS",
        "VEBJQVR",
        "UDBJQVS",
        "VEAIRVS"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "प्रत्येक अक्षर में +1 जोड़ा गया है: J+1=K, A+1=B, I+1=J, P+1=Q, U+1=V, R+1=S। इसी प्रकार UDAIPUR का कूट VEBJQVS होगा।",
      "en": "Each letter is shifted by +1: J->K, A->B, etc. Thus UDAIPUR becomes VEBJQVS."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-002",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि किसी कूट भाषा में \"KOTA\" को \"ATOK\" लिखा जाता है, तो उसी भाषा में \"BIKANER\" को किस प्रकार लिखा जाएगा?",
      "en": "If in a code language \"KOTA\" is written as \"ATOK\", how will \"BIKANER\" be written in that language?"
    },
    "options": {
      "hi": [
        "RENAKIB",
        "RENAIBK",
        "REANKIB",
        "RENAKBI"
      ],
      "en": [
        "RENAKIB",
        "RENAIBK",
        "REANKIB",
        "RENAKBI"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "शब्द के अक्षरों को विपरीत (Reverse) क्रम में लिखा गया है: B-I-K-A-N-E-R को उलटा करने पर R-E-N-A-K-I-B (RENAKIB) प्राप्त होता है।",
      "en": "The letters of the word are written in reverse order: B-I-K-A-N-E-R reversed gives RENAKIB."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-003",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि अंग्रेजी वर्णमाला के मानों के आधार पर \"RAM\" को 32 लिखा जाता है (R=18, A=1, M=13), तो \"SHYAM\" का मान क्या होगा?",
      "en": "If based on English alphabetical positions \"RAM\" is coded as 32 (R=18, A=1, M=13), what will be the code value for \"SHYAM\"?"
    },
    "options": {
      "hi": [
        "64",
        "66",
        "68",
        "70"
      ],
      "en": [
        "64",
        "66",
        "68",
        "70"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "वर्णमाला स्थान मानों का योग: S(19) + H(8) + Y(25) + A(1) + M(13) = 66।",
      "en": "Sum of alphabetical positions: S(19) + H(8) + Y(25) + A(1) + M(13) = 66."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-004",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि किसी सांकेतिक भाषा में \"RAJ\" को \"TZL\" लिखा जाता है (R+2=T, A-1=Z, J+2=L), तो उसी भाषा में \"POOJA\" को क्या लिखा जाएगा?",
      "en": "If in a symbolic language \"RAJ\" is written as \"TZL\" (R+2=T, A-1=Z, J+2=L), how will \"POOJA\" be coded?"
    },
    "options": {
      "hi": [
        "RNQIC",
        "RMQIB",
        "ROQJC",
        "RNQHC"
      ],
      "en": [
        "RNQIC",
        "RMQIB",
        "ROQJC",
        "RNQHC"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "पैटर्न एकांतर क्रम में है (+2, -1, +2, -1, +2): P(+2)=R, O(-1)=N, O(+2)=Q, J(-1)=I, A(+2)=C -> RNQIC।",
      "en": "Alternating pattern (+2, -1, +2, -1, +2): P(+2)=R, O(-1)=N, O(+2)=Q, J(-1)=I, A(+2)=C -> RNQIC."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-005",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि 'लाल' को 'हरा', 'हरा' को 'नीला', 'नीला' को 'सफेद' और 'सफेद' को 'पीला' कहा जाए, तो साफ़ आकाश का रंग क्या होगा?",
      "en": "If 'Red' is called 'Green', 'Green' is called 'Blue', 'Blue' is called 'White', and 'White' is called 'Yellow', what is the color of clear sky?"
    },
    "options": {
      "hi": [
        "हरा",
        "नीला",
        "सफेद",
        "पीला"
      ],
      "en": [
        "Green",
        "Blue",
        "White",
        "Yellow"
      ]
    },
    "answer": 2,
    "explanation": {
      "hi": "साफ़ आकाश का वास्तविक रंग 'नीला' होता है, और कूट भाषा में 'नीला' को 'सफेद' कहा गया है। इसलिए उत्तर 'सफेद' होगा।",
      "en": "The actual color of clear sky is Blue, and in this code language 'Blue' is called 'White'. Hence the answer is White."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-006",
    "subject": "reasoning",
    "topic": "coding-decoding",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि वर्णमाला के विपरीत अक्षरों (A↔Z, B↔Y, C↔X) के नियम से \"CAT\" को \"XZG\" लिखा जाता है, तो \"DOG\" का कूट क्या होगा?",
      "en": "If by opposite letter rules (A↔Z, B↔Y, C↔X) \"CAT\" is written as \"XZG\", what will be the code for \"DOG\"?"
    },
    "options": {
      "hi": [
        "WLT",
        "WLU",
        "VLT",
        "WMS"
      ],
      "en": [
        "WLT",
        "WLU",
        "VLT",
        "WMS"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "D का विपरीत W, O का विपरीत L, और G का विपरीत T होता है। अतः \"DOG\" -> \"WLT\"।",
      "en": "Opposite of D is W, O is L, and G is T. Thus \"DOG\" -> \"WLT\"."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-007",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "उस विकल्प का चयन करें जो तीसरे शब्द से उसी प्रकार संबंधित है जैसे दूसरा शब्द पहले शब्द से संबंधित है:\nराजस्थान : जयपुर :: गुजरात : ?",
      "en": "Select the option that is related to the third word in the same way as the second word is related to the first word:\nRajasthan : Jaipur :: Gujarat : ?"
    },
    "options": {
      "hi": [
        "अहमदाबाद",
        "गांधीनगर",
        "सूरत",
        "वडोदरा"
      ],
      "en": [
        "Ahmedabad",
        "Gandhinagar",
        "Surat",
        "Vadodara"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "जयपुर राजस्थान की राजधानी है। उसी प्रकार गांधीनगर गुजरात की राजधानी है।",
      "en": "Jaipur is the capital of Rajasthan. Similarly, Gandhinagar is the capital of Gujarat."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-008",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "दिए गए विकल्पों में से संबंधित संख्या चुनिए:\n8 : 64 :: 11 : ?",
      "en": "Select the related number from the given options:\n8 : 64 :: 11 : ?"
    },
    "options": {
      "hi": [
        "110",
        "121",
        "132",
        "144"
      ],
      "en": [
        "110",
        "121",
        "132",
        "144"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "संबंध वर्ग (Square) का है: 8^2 = 64। उसी प्रकार 11^2 = 121।",
      "en": "The relationship is square of the number: 8^2 = 64. Similarly, 11^2 = 121."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-009",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "संबंधित शब्द युग्म का चयन कीजिए:\nबीमार : अस्पताल :: छात्र : ?",
      "en": "Select the related word pair:\nSick : Hospital :: Student : ?"
    },
    "options": {
      "hi": [
        "पुस्तक",
        "विद्यालय",
        "शिक्षक",
        "परीक्षा"
      ],
      "en": [
        "Book",
        "School",
        "Teacher",
        "Exam"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "बीमार व्यक्ति इलाज के लिए अस्पताल जाता है, उसी प्रकार छात्र शिक्षा प्राप्त करने के लिए विद्यालय जाता है।",
      "en": "A sick person goes to a hospital for treatment, similarly a student goes to a school for education."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-010",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "दिए गए विकल्पों में से संबंधित संख्या को चुनिए:\n7 : 50 :: 9 : ?",
      "en": "Select the related number from the given options:\n7 : 50 :: 9 : ?"
    },
    "options": {
      "hi": [
        "80",
        "81",
        "82",
        "83"
      ],
      "en": [
        "80",
        "81",
        "82",
        "83"
      ]
    },
    "answer": 2,
    "explanation": {
      "hi": "पैटर्न (n^2 + 1) है: 7^2 + 1 = 49 + 1 = 50। उसी प्रकार 9^2 + 1 = 81 + 1 = 82।",
      "en": "Pattern is (n^2 + 1): 7^2 + 1 = 50. Similarly 9^2 + 1 = 82."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-011",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "उस विकल्प का चयन करें जो तीसरे पद से संबंधित है:\nथर्मामीटर : तापमान :: हाइग्रोमीटर : ?",
      "en": "Select the option related to the third term:\nThermometer : Temperature :: Hygrometer : ?"
    },
    "options": {
      "hi": [
        "दाब",
        "आर्द्रता",
        "वायु वेग",
        "भूकंप"
      ],
      "en": [
        "Pressure",
        "Humidity",
        "Wind Speed",
        "Earthquake"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "थर्मामीटर से तापमान मापा जाता है, जबकि हाइग्रोमीटर से वायुमंडलीय आर्द्रता (Humidity) मापी जाती है।",
      "en": "Thermometer measures temperature, whereas hygrometer measures atmospheric humidity."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-012",
    "subject": "reasoning",
    "topic": "analogy",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "वर्णमाला सादृश्यता में लुप्त पद ज्ञात कीजिए:\nACE : FHJ :: OQS : ?",
      "en": "Find the missing term in the letter analogy:\nACE : FHJ :: OQS : ?"
    },
    "options": {
      "hi": [
        "TVX",
        "TVW",
        "SUW",
        "UWY"
      ],
      "en": [
        "TVX",
        "TVW",
        "SUW",
        "UWY"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "प्रत्येक अक्षर में +5 जोड़ा गया है: A(+5)=F, C(+5)=H, E(+5)=J। उसी प्रकार O(+5)=T, Q(+5)=V, S(+5)=X -> TVX।",
      "en": "Each letter is incremented by +5: A(+5)=F, C(+5)=H, E(+5)=J. Similarly O(+5)=T, Q(+5)=V, S(+5)=X -> TVX."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-013",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "दी गई संख्या श्रृंखला में प्रश्नवाचक चिह्न (?) के स्थान पर क्या आएगा?\n5, 10, 20, 40, 80, ?",
      "en": "What will come in place of the question mark (?) in the given number series?\n5, 10, 20, 40, 80, ?"
    },
    "options": {
      "hi": [
        "120",
        "140",
        "160",
        "180"
      ],
      "en": [
        "120",
        "140",
        "160",
        "180"
      ]
    },
    "answer": 2,
    "explanation": {
      "hi": "प्रत्येक संख्या को 2 से गुणा किया जा रहा है: 5×2=10, 10×2=20, 20×2=40, 40×2=80, 80×2=160।",
      "en": "Each number is multiplied by 2: 5x2=10, 10x2=20, 20x2=40, 40x2=80, 80x2=160."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-014",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित श्रृंखला में अगली संख्या क्या होगी?\n2, 5, 10, 17, 26, ?",
      "en": "What will be the next number in the following series?\n2, 5, 10, 17, 26, ?"
    },
    "options": {
      "hi": [
        "35",
        "36",
        "37",
        "38"
      ],
      "en": [
        "35",
        "36",
        "37",
        "38"
      ]
    },
    "answer": 2,
    "explanation": {
      "hi": "अंतर विषम संख्याओं में बढ़ रहा है (+3, +5, +7, +9, +11) अथवा (n^2 + 1): 1^2+1=2, 2^2+1=5, ..., 6^2+1=37।",
      "en": "Differences increase as odd numbers (+3, +5, +7, +9, +11) or (n^2 + 1): 6^2+1=37."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-015",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "अक्षर श्रृंखला को पूरा कीजिए:\nB, E, H, K, N, ?",
      "en": "Complete the letter series:\nB, E, H, K, N, ?"
    },
    "options": {
      "hi": [
        "P",
        "Q",
        "R",
        "S"
      ],
      "en": [
        "P",
        "Q",
        "R",
        "S"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "प्रत्येक चरण में 3 स्थान आगे बढ़ रहे हैं: B(2)+3=E(5), E+3=H(8), H+3=K(11), K+3=N(14), N+3=Q(17)।",
      "en": "Advancing by +3 positions each time: B(2)+3=E(5), E+3=H(8), H+3=K(11), K+3=N(14), N+3=Q(17)."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-016",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित श्रृंखला में प्रश्नवाचक चिह्न (?) को प्रतिस्थापित कीजिए:\n1, 8, 27, 64, 125, ?",
      "en": "Replace the question mark (?) in the following series:\n1, 8, 27, 64, 125, ?"
    },
    "options": {
      "hi": [
        "196",
        "216",
        "225",
        "243"
      ],
      "en": [
        "196",
        "216",
        "225",
        "243"
      ]
    },
    "answer": 1,
    "explanation": {
      "hi": "यह प्राकृतिक संख्याओं के घन (Cubes) की श्रृंखला है: 1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216।",
      "en": "This is a series of cubes of natural numbers: 1^3=1, 2^3=8, 3^3=27, 4^3=64, 5^3=125, 6^3=216."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-017",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "मिश्रित श्रृंखला में अगला पद ज्ञात कीजिए:\nA2C, D5F, G10I, J17L, ?",
      "en": "Find the next term in the mixed series:\nA2C, D5F, G10I, J17L, ?"
    },
    "options": {
      "hi": [
        "M26O",
        "M25O",
        "N26O",
        "M26P"
      ],
      "en": [
        "M26O",
        "M25O",
        "N26O",
        "M26P"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "पहला अक्षर +3 (A, D, G, J -> M)। मध्य संख्या (n^2 + 1: 1^2+1=2, 2^2+1=5, 3^2+1=10, 4^2+1=17, 5^2+1=26)। अंतिम अक्षर +3 (C, F, I, L -> O)। अतः उत्तर M26O है।",
      "en": "First letter +3 (A, D, G, J -> M). Middle number n^2+1 (2, 5, 10, 17 -> 26). Last letter +3 (C, F, I, L -> O). Result is M26O."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-018",
    "subject": "reasoning",
    "topic": "series",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "घटती हुई संख्या श्रृंखला का अगला पद बताइए:\n100, 96, 88, 76, 60, ?",
      "en": "Find the next term of the decreasing number series:\n100, 96, 88, 76, 60, ?"
    },
    "options": {
      "hi": [
        "40",
        "42",
        "44",
        "48"
      ],
      "en": [
        "40",
        "42",
        "44",
        "48"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "अंतर का पैटर्न -4, -8, -12, -16, -20 है। 60 - 20 = 40।",
      "en": "Pattern of differences is -4, -8, -12, -16, -20. 60 - 20 = 40."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-019",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "राम ने एक तस्वीर की ओर इशारा करते हुए कहा, \"वह मेरे पिता के इकलौते पुत्र की पुत्री है।\" तस्वीर वाली लड़की का राम से क्या संबंध है?",
      "en": "Pointing to a photograph, Ram said, \"She is the daughter of my father's only son.\" How is the girl in the photograph related to Ram?"
    },
    "options": {
      "hi": [
        "पुत्री",
        "बहन",
        "भतीजी",
        "माता"
      ],
      "en": [
        "Daughter",
        "Sister",
        "Niece",
        "Mother"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "राम के पिता का इकलौता पुत्र स्वयं राम है। अतः वह लड़की राम की पुत्री है।",
      "en": "Ram's father's only son is Ram himself. Therefore, the girl is Ram's daughter."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-020",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "A, B का भाई है। C, A की माता है। D, C का पिता है। B का D से क्या संबंध है?",
      "en": "A is the brother of B. C is the mother of A. D is the father of C. What is B's relation to D?"
    },
    "options": {
      "hi": [
        "नाती / पौत्र (Grandchild)",
        "पिता (Father)",
        "भाई (Brother)",
        "दादा (Grandfather)"
      ],
      "en": [
        "Grandchild",
        "Father",
        "Brother",
        "Grandfather"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "C, B की भी माता है। D, C का पिता है, तो D, B का नाना है। इसलिए B, D का नाती / पोता (Grandchild) है।",
      "en": "C is the mother of B as well. D is the father of C, making D the grandfather of B. Hence B is the grandchild of D."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-021",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "सुनीता का परिचय देते हुए अनिल ने कहा, \"इसके पति मेरी माता के अकेले बेटे हैं।\" अनिल का सुनीता से क्या संबंध है?",
      "en": "Introducing Sunita, Anil said, \"Her husband is the only son of my mother.\" How is Anil related to Sunita?"
    },
    "options": {
      "hi": [
        "पति",
        "भाई",
        "पिता",
        "चाचा"
      ],
      "en": [
        "Husband",
        "Brother",
        "Father",
        "Uncle"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "अनिल की माता का अकेला बेटा स्वयं अनिल है। सुनीता का पति अनिल है, अतः अनिल सुनीता का पति है।",
      "en": "The only son of Anil's mother is Anil himself. Thus Sunita's husband is Anil, making Anil her husband."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-022",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "X और Y भाई-भाई हैं। R, Y का पिता है। S, T का भाई है और X का मामा है। T का R से क्या संबंध है?",
      "en": "X and Y are brothers. R is the father of Y. S is the brother of T and maternal uncle of X. How is T related to R?"
    },
    "options": {
      "hi": [
        "पत्नी",
        "बहन",
        "पुत्री",
        "माता"
      ],
      "en": [
        "Wife",
        "Sister",
        "Daughter",
        "Mother"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "S, X का मामा है अर्थात X की माता का भाई है। S, T का भाई है, इसलिए T, X और Y की माता है। R, Y का पिता है। अतः T, R की पत्नी है।",
      "en": "S is X's maternal uncle, so he is the brother of X's mother. Since S is T's brother, T is X's mother. R is Y's father, making T the wife of R."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-023",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "एक महिला की ओर इशारा करते हुए विजय ने कहा, \"इसकी माता मेरी पत्नी की माता की इकलौती पुत्री है।\" विजय का उस महिला से क्या संबंध है?",
      "en": "Pointing to a woman, Vijay said, \"Her mother is the only daughter of my wife's mother.\" How is Vijay related to that woman?"
    },
    "options": {
      "hi": [
        "पिता",
        "भाई",
        "चाचा",
        "दादा"
      ],
      "en": [
        "Father",
        "Brother",
        "Uncle",
        "Grandfather"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "विजय की पत्नी की माता की इकलौती पुत्री विजय की पत्नी ही है। उस महिला की माता विजय की पत्नी है, इसलिए विजय उस महिला का पिता है।",
      "en": "The only daughter of Vijay's wife's mother is Vijay's wife. The woman's mother is Vijay's wife, so Vijay is her father."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-024",
    "subject": "reasoning",
    "topic": "blood-relations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "P, Q की बहन है। R, Q की माता है। S, R का पिता है। P का S से क्या संबंध है?",
      "en": "P is Q's sister. R is Q's mother. S is R's father. How is P related to S?"
    },
    "options": {
      "hi": [
        "नातिन / पोती (Granddaughter)",
        "माता (Mother)",
        "बहन (Sister)",
        "दादी (Grandmother)"
      ],
      "en": [
        "Granddaughter",
        "Mother",
        "Sister",
        "Grandmother"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "R, P और Q दोनों की माता है। S, R का पिता है, अतः S, P का नाना है। इसलिए P, S की नातिन (Granddaughter) है।",
      "en": "R is mother of P and Q. S is father of R, so S is grandfather of P. Thus P is granddaughter of S."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-025",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "रोहित उत्तर दिशा में 10 मीटर चलता है। फिर वह दाएँ मुड़कर 5 मीटर चलता है। इसके बाद वह दाएँ मुड़कर 10 मीटर चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में और कितनी दूरी पर है?",
      "en": "Rohit walks 10m North. Then he turns right and walks 5m. After that he turns right and walks 10m. In which direction and at what distance is he from his starting point?"
    },
    "options": {
      "hi": [
        "5 मीटर पूर्व",
        "5 मीटर पश्चिम",
        "10 मीटर उत्तर",
        "5 मीटर दक्षिण"
      ],
      "en": [
        "5 meters East",
        "5 meters West",
        "10 meters North",
        "5 meters South"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "उत्तर 10 मीटर फिर दाएँ (पूर्व) 5 मीटर फिर दाएँ (दक्षिण) 10 मीटर चलने पर वह प्रारम्भिक स्थान से 5 मीटर पूर्व दिशा में पहुँच जाता है।",
      "en": "Walking 10m North, 5m East, and 10m South puts him 5 meters East from the initial point."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-026",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "मोहन पूर्व दिशा की ओर 8 किमी चलता है, फिर दक्षिण की ओर मुड़कर 6 किमी चलता है। वह अपने प्रारंभिक स्थान से सीधी दूरी पर कितना दूर है?",
      "en": "Mohan walks 8 km East, then turns South and walks 6 km. How far is he in a straight line from his starting point?"
    },
    "options": {
      "hi": [
        "10 किमी",
        "14 किमी",
        "12 किमी",
        "2 किमी"
      ],
      "en": [
        "10 km",
        "14 km",
        "12 km",
        "2 km"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "पाइथागोरस प्रमेय: दूरी = √(8^2 + 6^2) = √(64 + 36) = √100 = 10 किमी।",
      "en": "Pythagoras theorem: distance = √(8^2 + 6^2) = √100 = 10 km."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-027",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "एक व्यक्ति दक्षिण की ओर मुँह करके खड़ा है। वह वामावर्त (Anti-clockwise) दिशा में 135° मुड़ता है और फिर दक्षिणावर्त (Clockwise) दिशा में 180° मुड़ता है। अब उसका मुँह किस दिशा में है?",
      "en": "A person is facing South. He turns 135° anti-clockwise and then turns 180° clockwise. Which direction is he facing now?"
    },
    "options": {
      "hi": [
        "दक्षिण-पश्चिम",
        "उत्तर-पूर्व",
        "दक्षिण-पूर्व",
        "उत्तर-पश्चिम"
      ],
      "en": [
        "South-West",
        "North-East",
        "South-East",
        "North-West"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "दक्षिण से वामावर्त 135° -> उत्तर-पूर्व। फिर उत्तर-पूर्व से दक्षिणावर्त 180° -> दक्षिण-पश्चिम (South-West)।",
      "en": "From South, anti-clockwise 135° points North-East. Then clockwise 180° points South-West."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-028",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "सीता पश्चिम की ओर 4 किमी चलती है, फिर दाएँ मुड़कर 3 किमी चलती है। प्रारंभिक बिंदु से उसकी सीधी न्यूनतम दूरी क्या है?",
      "en": "Sita walks 4 km West, then turns right and walks 3 km. What is her straight minimum distance from the starting point?"
    },
    "options": {
      "hi": [
        "5 किमी",
        "7 किमी",
        "1 किमी",
        "6 किमी"
      ],
      "en": [
        "5 km",
        "7 km",
        "1 km",
        "6 km"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "समकोण त्रिभुज बन रहा है: दूरी = √(4^2 + 3^2) = √(16 + 9) = √25 = 5 किमी।",
      "en": "Right triangle forms: Distance = √(4^2 + 3^2) = √25 = 5 km."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-029",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "सुबह सूर्योदय के समय, रमेश एक खंभे की ओर मुँह करके खड़ा था। खंभे की छाया रमेश के ठीक दाएँ पड़ रही थी। रमेश का मुँह किस दिशा में था?",
      "en": "At sunrise in the morning, Ramesh was standing facing a pole. The shadow of the pole fell exactly to Ramesh's right. Which direction was Ramesh facing?"
    },
    "options": {
      "hi": [
        "दक्षिण",
        "उत्तर",
        "पूर्व",
        "पश्चिम"
      ],
      "en": [
        "South",
        "North",
        "East",
        "West"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "प्रातः सूर्य पूर्व में होता है, अतः छाया पश्चिम दिशा में बनेगी। यदि छाया दाएँ है तो पश्चिम दिशा दाएँ है, अर्थात व्यक्ति का मुँह दक्षिण दिशा की ओर है।",
      "en": "In the morning, sun is in the East, so shadow falls West. If shadow is to the right, West is right, which means facing South."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-030",
    "subject": "reasoning",
    "topic": "direction-sense",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "प्रिया अपने घर से उत्तर की ओर 12 मीटर चलती है, फिर पूर्व की ओर 9 मीटर चलती है। वह अपने घर से सीधी दूरी पर कितनी दूर है?",
      "en": "Priya walks 12m North from her house, then 9m East. How far is she in a straight line from her house?"
    },
    "options": {
      "hi": [
        "15 मीटर",
        "21 मीटर",
        "3 मीटर",
        "18 मीटर"
      ],
      "en": [
        "15 meters",
        "21 meters",
        "3 meters",
        "18 meters"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "सीधी दूरी = √(12^2 + 9^2) = √(144 + 81) = √225 = 15 मीटर।",
      "en": "Straight distance = √(12^2 + 9^2) = √225 = 15 meters."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-031",
    "subject": "reasoning",
    "topic": "odd-one-out",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित चार शहरों में से तीन किसी प्रकार समान हैं और एक भिन्न है। भिन्न का चयन कीजिए:\nभोपाल, जयपुर, जोधपुर, उदयपुर",
      "en": "Three of the following four cities are alike in a certain way and one is different. Select the odd one:\nBhopal, Jaipur, Jodhpur, Udaipur"
    },
    "options": {
      "hi": [
        "भोपाल",
        "जयपुर",
        "जोधपुर",
        "उदयपुर"
      ],
      "en": [
        "Bhopal",
        "Jaipur",
        "Jodhpur",
        "Udaipur"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "जयपुर, जोधपुर और उदयपुर राजस्थान के शहर हैं, जबकि भोपाल मध्य प्रदेश का शहर है।",
      "en": "Jaipur, Jodhpur, and Udaipur are cities in Rajasthan, whereas Bhopal is in Madhya Pradesh."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-032",
    "subject": "reasoning",
    "topic": "odd-one-out",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित संख्याओं में से विषम संख्या का चयन कीजिए:\n150, 121, 144, 169",
      "en": "Select the odd number from the following options:\n150, 121, 144, 169"
    },
    "options": {
      "hi": [
        "150",
        "121",
        "144",
        "169"
      ],
      "en": [
        "150",
        "121",
        "144",
        "169"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "121 (11^2), 144 (12^2) और 169 (13^2) पूर्ण वर्ग संख्याएँ हैं, जबकि 150 पूर्ण वर्ग नहीं है।",
      "en": "121, 144, and 169 are perfect square numbers, while 150 is not a perfect square."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-033",
    "subject": "reasoning",
    "topic": "odd-one-out",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित में से विजातीय शब्द को चुनिए:\nशेर, गाय, बकरी, हिरण",
      "en": "Select the odd word out:\nLion, Cow, Goat, Deer"
    },
    "options": {
      "hi": [
        "शेर",
        "गाय",
        "बकरी",
        "हिरण"
      ],
      "en": [
        "Lion",
        "Cow",
        "Goat",
        "Deer"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "गाय, बकरी और हिरण शाकाहारी पशु हैं, जबकि शेर मांसाहारी पशु है।",
      "en": "Cow, goat, and deer are herbivores, whereas lion is a carnivore."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-034",
    "subject": "reasoning",
    "topic": "odd-one-out",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित संख्या युग्मों में से विषम युग्म चुनिए:\n(5 - 30), (4 - 16), (6 - 36), (8 - 64)",
      "en": "Select the odd pair from the following number pairs:\n(5 - 30), (4 - 16), (6 - 36), (8 - 64)"
    },
    "options": {
      "hi": [
        "5 - 30",
        "4 - 16",
        "6 - 36",
        "8 - 64"
      ],
      "en": [
        "5 - 30",
        "4 - 16",
        "6 - 36",
        "8 - 64"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "अन्य सभी युग्मों में दूसरी संख्या पहली संख्या का वर्ग है (4^2=16, 6^2=36, 8^2=64), जबकि 5 का वर्ग 25 होना चाहिए था।",
      "en": "In all other pairs, the second number is the square of the first. For 5 it should be 25 instead of 30."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-035",
    "subject": "reasoning",
    "topic": "odd-one-out",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित महीनों में से भिन्न महीना चुनिए:\nजून, जनवरी, मार्च, मई",
      "en": "Select the odd month from the following:\nJune, January, March, May"
    },
    "options": {
      "hi": [
        "जून",
        "जनवरी",
        "मार्च",
        "मई"
      ],
      "en": [
        "June",
        "January",
        "March",
        "May"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "जनवरी, मार्च और मई में 31 दिन होते हैं, जबकि जून में 30 दिन होते हैं।",
      "en": "January, March, and May have 31 days, whereas June has 30 days."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-036",
    "subject": "reasoning",
    "topic": "syllogisms",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "कथन:\n1. सभी फल फूल हैं।\n2. सभी फूल पेड़ हैं।\nनिष्कर्ष:\nI. सभी फल पेड़ हैं।\nII. कुछ पेड़ फल हैं।",
      "en": "Statements:\n1. All fruits are flowers.\n2. All flowers are trees.\nConclusions:\nI. All fruits are trees.\nII. Some trees are fruits."
    },
    "options": {
      "hi": [
        "दोनों निष्कर्ष I और II अनुसरण करते हैं",
        "केवल निष्कर्ष I अनुसरण करता है",
        "केवल निष्कर्ष II अनुसरण करता है",
        "कोई भी निष्कर्ष अनुसरण नहीं करता"
      ],
      "en": [
        "Both conclusions I and II follow",
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Neither conclusion follows"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "चूँकि फल ⊂ फूल ⊂ पेड़ है, इसलिए 'सभी फल पेड़ हैं' और 'कुछ पेड़ फल हैं' दोनों कथन सत्य हैं।",
      "en": "Since Fruits ⊂ Flowers ⊂ Trees, both conclusions follow logically."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-037",
    "subject": "reasoning",
    "topic": "syllogisms",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "कथन:\n1. सभी कुत्ते बिल्ली हैं।\n2. कोई बिल्ली शेर नहीं है।\nनिष्कर्ष:\nI. कोई कुत्ता शेर नहीं है।\nII. कुछ बिल्ली कुत्ते हैं।",
      "en": "Statements:\n1. All dogs are cats.\n2. No cat is a lion.\nConclusions:\nI. No dog is a lion.\nII. Some cats are dogs."
    },
    "options": {
      "hi": [
        "दोनों निष्कर्ष I और II अनुसरण करते हैं",
        "केवल निष्कर्ष I अनुसरण करता है",
        "केवल निष्कर्ष II अनुसरण करता है",
        "कोई भी निष्कर्ष अनुसरण नहीं करता"
      ],
      "en": [
        "Both conclusions I and II follow",
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Neither conclusion follows"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "सभी कुत्ते बिल्ली के अंदर हैं और कोई बिल्ली शेर नहीं है, इसलिए कोई कुत्ता भी शेर नहीं हो सकता। साथ ही बिल्ली का कुछ हिस्सा कुत्ते हैं। दोनों निष्कर्ष अनुसरण करते हैं।",
      "en": "All dogs are inside cats and no cat is a lion, so no dog can be a lion. Also some cats are dogs. Both follow."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-038",
    "subject": "reasoning",
    "topic": "syllogisms",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "कथन:\n1. कुछ पेन पेंसिल हैं।\n2. सभी पेंसिल रबड़ हैं।\nनिष्कर्ष:\nI. कुछ पेन रबड़ हैं।\nII. सभी रबड़ पेन हैं।",
      "en": "Statements:\n1. Some pens are pencils.\n2. All pencils are erasers.\nConclusions:\nI. Some pens are erasers.\nII. All erasers are pens."
    },
    "options": {
      "hi": [
        "केवल निष्कर्ष I अनुसरण करता है",
        "केवल निष्कर्ष II अनुसरण करता है",
        "दोनों निष्कर्ष अनुसरण करते हैं",
        "कोई निष्कर्ष अनुसरण नहीं करता"
      ],
      "en": [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion follows"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "जो पेन पेंसिल हैं वे निश्चित रूप से रबड़ भी होंगे, इसलिए निष्कर्ष I सत्य है। लेकिन सभी रबड़ पेन हों, यह आवश्यक नहीं है।",
      "en": "The pens that are pencils must also be erasers, so conclusion I is true. But all erasers being pens is not guaranteed."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-039",
    "subject": "reasoning",
    "topic": "syllogisms",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "कथन:\n1. कोई पुस्तक कापी नहीं है।\n2. कोई कापी पेन नहीं है।\nनिष्कर्ष:\nI. कोई पुस्तक पेन नहीं है।\nII. कुछ कापी पुस्तक हैं।",
      "en": "Statements:\n1. No book is a notebook.\n2. No notebook is a pen.\nConclusions:\nI. No book is a pen.\nII. Some notebooks are books."
    },
    "options": {
      "hi": [
        "कोई भी निष्कर्ष अनुसरण नहीं करता है",
        "केवल निष्कर्ष I अनुसरण करता है",
        "केवल निष्कर्ष II अनुसरण करता है",
        "दोनों निष्कर्ष अनुसरण करते हैं"
      ],
      "en": [
        "Neither conclusion follows",
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "दो नकारात्मक कथनों से पुस्तक और पेन के बीच सीधा संबंध स्थापित नहीं होता (निष्कर्ष I निश्चित नहीं है)। 'कोई पुस्तक कापी नहीं है' से निष्कर्ष II गलत सिद्ध होता है।",
      "en": "No direct relationship can be established between book and pen from two negative statements. Conclusion II is false."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-040",
    "subject": "reasoning",
    "topic": "syllogisms",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "कथन:\n1. सभी शिक्षक विद्वान हैं।\n2. कुछ विद्वान लेखक हैं।\nनिष्कर्ष:\nI. कुछ शिक्षक लेखक हैं।\nII. कुछ लेखक विद्वान हैं।",
      "en": "Statements:\n1. All teachers are scholars.\n2. Some scholars are writers.\nConclusions:\nI. Some teachers are writers.\nII. Some writers are scholars."
    },
    "options": {
      "hi": [
        "केवल निष्कर्ष II अनुसरण करता है",
        "केवल निष्कर्ष I अनुसरण करता है",
        "दोनों निष्कर्ष अनुसरण करते हैं",
        "कोई भी निष्कर्ष अनुसरण नहीं करता"
      ],
      "en": [
        "Only conclusion II follows",
        "Only conclusion I follows",
        "Both conclusions follow",
        "Neither conclusion follows"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "कथन 2 (कुछ विद्वान लेखक हैं) का परिवर्तन 'कुछ लेखक विद्वान हैं' (निष्कर्ष II) सत्य है। शिक्षक और लेखक के बीच निश्चित संबंध नहीं है।",
      "en": "Conversion of statement 2 ('Some scholars are writers') gives 'Some writers are scholars', which is true. Teacher and writer relation is indefinite."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-041",
    "subject": "reasoning",
    "topic": "calendar-and-clock",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि 1 जनवरी 2023 को रविवार था, तो 31 दिसंबर 2023 को सप्ताह का कौन सा दिन होगा?",
      "en": "If January 1, 2023 was Sunday, what day of the week will December 31, 2023 be?"
    },
    "options": {
      "hi": [
        "रविवार",
        "सोमवार",
        "शनिवार",
        "मंगलवार"
      ],
      "en": [
        "Sunday",
        "Monday",
        "Saturday",
        "Tuesday"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "सामान्य वर्ष (Non-leap year) का प्रथम दिन और अंतिम दिन (31 दिसंबर) समान वार का होता है। अतः 31 दिसंबर 2023 को रविवार ही होगा।",
      "en": "In an ordinary non-leap year, the first day (Jan 1) and last day (Dec 31) fall on the exact same day of the week. Hence Sunday."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-042",
    "subject": "reasoning",
    "topic": "calendar-and-clock",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि 15 अगस्त 2021 को रविवार था, तो 15 अगस्त 2022 को कौन सा दिन था?",
      "en": "If August 15, 2021 was Sunday, what day of the week was August 15, 2022?"
    },
    "options": {
      "hi": [
        "सोमवार",
        "रविवार",
        "मंगलवार",
        "शनिवार"
      ],
      "en": [
        "Monday",
        "Sunday",
        "Tuesday",
        "Saturday"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "2021 से 2022 के बीच 1 साधारण वर्ष (365 दिन = 52 सप्ताह + 1 विषम दिन) है। रविवार + 1 दिन = सोमवार।",
      "en": "Between 2021 and 2022 there is 1 ordinary year (365 days = 52 weeks + 1 odd day). Sunday + 1 day = Monday."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-043",
    "subject": "reasoning",
    "topic": "calendar-and-clock",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "निम्नलिखित वर्षों में से कौन सा एक अधिवर्ष (Leap Year) है?",
      "en": "Which of the following years is a Leap Year?"
    },
    "options": {
      "hi": [
        "2024",
        "2021",
        "2023",
        "2025"
      ],
      "en": [
        "2024",
        "2021",
        "2023",
        "2025"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "2024 संख्या 4 से पूर्णतः विभाजित होती है (2024 ÷ 4 = 506), इसलिए यह अधिवर्ष (Leap Year) है।",
      "en": "2024 is completely divisible by 4 (2024 ÷ 4 = 506), so it is a leap year."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-044",
    "subject": "reasoning",
    "topic": "calendar-and-clock",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "एक घड़ी में ठीक 3:00 बजे हैं। घंटे और मिनट की सुइयों के बीच कितने अंश (Degree) का कोण बनेगा?",
      "en": "A clock shows exactly 3:00. What is the angle in degrees between the hour and minute hands?"
    },
    "options": {
      "hi": [
        "90°",
        "60°",
        "120°",
        "180°"
      ],
      "en": [
        "90°",
        "60°",
        "120°",
        "180°"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "प्रत्येक घंटे का अंतर 30° का होता है। 3 बजे मिनट की सुई 12 पर तथा घंटे की सुई 3 पर होती है, अतः 3 × 30° = 90° का समकोण बनता है।",
      "en": "Each hour difference accounts for 30°. At 3 o'clock hands are 3 hours apart, so 3 x 30° = 90°."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-045",
    "subject": "reasoning",
    "topic": "calendar-and-clock",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "घड़ी की घंटे तथा मिनट की सुइयाँ 24 घंटे में कुल कितनी बार एक-दूसरे के सम्पाती (Overlap / 0°) होती हैं?",
      "en": "How many times in 24 hours do the hour and minute hands of a clock overlap (0°)?"
    },
    "options": {
      "hi": [
        "22 बार",
        "24 बार",
        "12 बार",
        "44 बार"
      ],
      "en": [
        "22 times",
        "24 times",
        "12 times",
        "44 times"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "सुइयाँ 12 घंटे में 11 बार सम्पाती होती हैं, इसलिए 24 घंटे में कुल 2 × 11 = 22 बार सम्पाती होती हैं।",
      "en": "The hands overlap 11 times in 12 hours, so in 24 hours they overlap 22 times."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-046",
    "subject": "reasoning",
    "topic": "seating-arrangement",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "5 मित्र - A, B, C, D और E उत्तर की ओर मुँह करके एक पंक्ति में बैठे हैं। C, A और B के ठीक मध्य में है। E, D के ठीक दाएँ है। यदि A बाईं ओर के अंतिम छोर पर है, तो ठीक मध्य में कौन बैठा है?",
      "en": "5 friends - A, B, C, D and E are sitting in a row facing North. C is exactly between A and B. E is to the immediate right of D. If A is at the extreme left end, who is sitting right in the middle?"
    },
    "options": {
      "hi": [
        "B",
        "C",
        "A",
        "D"
      ],
      "en": [
        "B",
        "C",
        "A",
        "D"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "बाएँ से दाएँ क्रम: स्थान 1 = A; C मध्य में होने से स्थान 2 = C, स्थान 3 = B; स्थान 4 = D, स्थान 5 = E। क्रम A, C, B, D, E बनता है। ठीक मध्य (स्थान 3) में B बैठा है।",
      "en": "Left to right order: A, C, B, D, E. B is sitting right in the middle position (3rd position)."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-047",
    "subject": "reasoning",
    "topic": "seating-arrangement",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "4 मित्र - A, B, C और D एक वर्गाकार मेज के चार कोनों पर केंद्र की ओर मुँह करके बैठे हैं। A, C के ठीक आमने-सामने बैठा है। B, A के दाएँ बैठा है। D किसके दाएँ बैठा है?",
      "en": "4 friends - A, B, C and D are sitting at the four corners of a square table facing the center. A is directly opposite C. B is to the right of A. Whom is D sitting to the right of?"
    },
    "options": {
      "hi": [
        "C के दाएँ",
        "A के दाएँ",
        "B के दाएँ",
        "किसी के नहीं"
      ],
      "en": [
        "To the right of C",
        "To the right of A",
        "To the right of B",
        "None of these"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "दक्षिणावर्त क्रम (Clockwise): A, B, C, D। केंद्र की ओर मुँह होने से A के दाएँ B है, B के दाएँ C है, C के दाएँ D है, और D के दाएँ A है। अतः D, C के दाएँ बैठा है।",
      "en": "In clockwise order: A, B, C, D facing center. Right of C is D. Hence D sits to the right of C."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-048",
    "subject": "reasoning",
    "topic": "seating-arrangement",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "4 व्यक्ति P, Q, R, S एक पंक्ति में बैठे हैं। P, Q के बाएँ है और R के दाएँ है। S, Q के दाएँ बैठा है। सबसे बाएँ छोर पर कौन है?",
      "en": "4 persons P, Q, R, S are sitting in a row. P is to the left of Q and to the right of R. S is to the right of Q. Who is at the extreme left end?"
    },
    "options": {
      "hi": [
        "R",
        "P",
        "Q",
        "S"
      ],
      "en": [
        "R",
        "P",
        "Q",
        "S"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "समीकरण से क्रम R - P - Q - S प्राप्त होता है। सबसे बाएँ छोर पर R बैठा है।",
      "en": "From the conditions, the order is R - P - Q - S. R is at the extreme left end."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-049",
    "subject": "reasoning",
    "topic": "seating-arrangement",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "5 लड़कियाँ - कविता, नीता, सीता, गीता और रीता एक पंक्ति में बैठी हैं। सीता, नीता के दाएँ है। गीता, नीता के बाएँ है लेकिन कविता के दाएँ है। रीता, सीता के दाएँ है। पंक्ति के मध्य में कौन बैठी है?",
      "en": "5 girls - Kavita, Nita, Sita, Geeta and Reeta are sitting in a row. Sita is to the right of Nita. Geeta is to the left of Nita but right of Kavita. Reeta is to the right of Sita. Who is in the middle of the row?"
    },
    "options": {
      "hi": [
        "नीता",
        "गीता",
        "सीता",
        "कविता"
      ],
      "en": [
        "Nita",
        "Geeta",
        "Sita",
        "Kavita"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "बाएँ से दाएँ क्रम: कविता, गीता, नीता, सीता, रीता। ठीक मध्य (तीसरे स्थान) में 'नीता' बैठी है।",
      "en": "Left to right order: Kavita, Geeta, Nita, Sita, Reeta. Nita is in the exact middle."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-050",
    "subject": "reasoning",
    "topic": "seating-arrangement",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "किसी कक्षा में राम का स्थान ऊपर से 15वाँ और नीचे से 21वाँ है। कक्षा में कुल कितने छात्र हैं?",
      "en": "In a class, Ram's rank is 15th from the top and 21st from the bottom. How many total students are in the class?"
    },
    "options": {
      "hi": [
        "35",
        "36",
        "34",
        "37"
      ],
      "en": [
        "35",
        "36",
        "34",
        "37"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "कुल छात्र = (ऊपर से स्थान + नीचे से स्थान) - 1 = (15 + 21) - 1 = 36 - 1 = 35।",
      "en": "Total students = (Rank from top + Rank from bottom) - 1 = (15 + 21) - 1 = 35."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-051",
    "subject": "reasoning",
    "topic": "mirror-images",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "अंग्रेजी के निम्नलिखित किस शब्द की समतल दर्पण (Vertical Mirror) में छवि मूल शब्द के बिल्कुल समान दिखेगी?",
      "en": "Which of the following English words will look exactly identical in a vertical mirror reflection?"
    },
    "options": {
      "hi": [
        "MOM",
        "CAT",
        "DOG",
        "BOY"
      ],
      "en": [
        "MOM",
        "CAT",
        "DOG",
        "BOY"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "'MOM' के सभी अक्षर (M, O, M) और शब्द की संरचना पार्श्व रूप से सममित (Symmetric) है, इसलिए दर्पण में यह 'MOM' ही दिखेगा।",
      "en": "'MOM' consists of vertically symmetric letters and symmetrical arrangement, so its mirror reflection remains 'MOM'."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-052",
    "subject": "reasoning",
    "topic": "mirror-images",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "जल प्रतिबिम्ब (Water Image) बनने पर किसी आकृति का कौन सा भाग परिवर्तित होता है?",
      "en": "When a Water Image is formed, which portion of an image undergoes reflection/change?"
    },
    "options": {
      "hi": [
        "ऊपरी और निचला भाग आपस में बदलता है",
        "दायाँ और बायाँ भाग आपस में बदलता है",
        "कोई बदलाव नहीं होता",
        "केवल आकार आधा रह जाता है"
      ],
      "en": [
        "Top and bottom exchange positions",
        "Right and left exchange positions",
        "No change occurs",
        "Only size shrinks to half"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "जल प्रतिबिम्ब में ऊपर का भाग नीचे तथा नीचे का भाग ऊपर दिखाई देता है (Top and Bottom interchange), जबकि दायाँ-बायाँ समान रहता है।",
      "en": "In a water image, top and bottom interchange while left and right remain unaffected."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-053",
    "subject": "reasoning",
    "topic": "mirror-images",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "अंग्रेजी शब्द \"OTTO\" की समतल दर्पण (Vertical Mirror) में छवि क्या होगी?",
      "en": "What will be the vertical mirror image of the English word \"OTTO\"?"
    },
    "options": {
      "hi": [
        "OTTO",
        "TTOO",
        "OOTT",
        "TOOT"
      ],
      "en": [
        "OTTO",
        "TTOO",
        "OOTT",
        "TOOT"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "O तथा T दोनों सममित अक्षर हैं। 'OTTO' को दर्पण में उलटने पर O-T-T-O ही प्राप्त होता है।",
      "en": "Both O and T are symmetric letters. Reversing 'OTTO' in a mirror still yields 'OTTO'."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-054",
    "subject": "reasoning",
    "topic": "mirror-images",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि घड़ी में वास्तविक समय 3:15 हो रहा है, तो लंबवत समतल दर्पण (Vertical Mirror) में देखने पर क्या समय दिखाई देगा?",
      "en": "If the actual time in a clock is 3:15, what time will be visible when seen in a vertical plane mirror?"
    },
    "options": {
      "hi": [
        "8:45",
        "9:15",
        "8:15",
        "9:45"
      ],
      "en": [
        "8:45",
        "9:15",
        "8:15",
        "9:45"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "दर्पण समय = 11:60 - वास्तविक समय = 11:60 - 3:15 = 8:45।",
      "en": "Mirror time = 11:60 - actual time = 11:60 - 3:15 = 8:45."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-055",
    "subject": "reasoning",
    "topic": "mirror-images",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि दर्पण में देखने पर घड़ी का समय 2:40 दिखाई दे रहा है, तो घड़ी में वास्तविक समय क्या है?",
      "en": "If a clock seen in a mirror shows 2:40, what is the actual time in the clock?"
    },
    "options": {
      "hi": [
        "9:20",
        "8:20",
        "9:40",
        "10:20"
      ],
      "en": [
        "9:20",
        "8:20",
        "9:40",
        "10:20"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "वास्तविक समय = 11:60 - दर्पण समय = 11:60 - 2:40 = 9:20।",
      "en": "Actual time = 11:60 - mirror time = 11:60 - 2:40 = 9:20."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-056",
    "subject": "reasoning",
    "topic": "mathematical-operations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि '+' का अर्थ '×', '-' का अर्थ '÷', '×' का अर्थ '+' और '÷' का अर्थ '-' है, तो व्यंजक का मान क्या होगा?\n12 - 3 + 4 ÷ 2 × 6",
      "en": "If '+' means '×', '-' means '÷', '×' means '+' and '÷' means '-', what is the value of the expression?\n12 - 3 + 4 ÷ 2 × 6"
    },
    "options": {
      "hi": [
        "20",
        "18",
        "22",
        "16"
      ],
      "en": [
        "20",
        "18",
        "22",
        "16"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "चिह्नों के प्रतिस्थापन के बाद: 12 ÷ 3 × 4 - 2 + 6। BODMAS नियम से: (4 × 4) - 2 + 6 = 16 - 2 + 6 = 20।",
      "en": "After replacing signs: 12 ÷ 3 × 4 - 2 + 6. By BODMAS: 4 × 4 - 2 + 6 = 16 - 2 + 6 = 20."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-057",
    "subject": "reasoning",
    "topic": "mathematical-operations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि 'A' का अर्थ '+', 'B' का अर्थ '-', 'C' का अर्थ '×' और 'D' का अर्थ '÷' है, तो 16 C 4 A 8 D 2 B 5 का मान क्या होगा?",
      "en": "If 'A' means '+', 'B' means '-', 'C' means '×' and 'D' means '÷', what is the value of 16 C 4 A 8 D 2 B 5?"
    },
    "options": {
      "hi": [
        "63",
        "65",
        "61",
        "59"
      ],
      "en": [
        "63",
        "65",
        "61",
        "59"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "व्यंजक: 16 × 4 + 8 ÷ 2 - 5। BODMAS से: 64 + 4 - 5 = 68 - 5 = 63।",
      "en": "Expression: 16 × 4 + 8 ÷ 2 - 5 = 64 + 4 - 5 = 63."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-058",
    "subject": "reasoning",
    "topic": "mathematical-operations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "समीकरण को संतुलित करने के लिए * चिह्नों के स्थान पर कौन सा गणितीय विकल्प सही होगा?\n8 * 4 * 2 = 16",
      "en": "Which mathematical operator set will correctly balance the equation?\n8 * 4 * 2 = 16"
    },
    "options": {
      "hi": [
        "× और ÷",
        "+ और -",
        "- और +",
        "÷ और ×"
      ],
      "en": [
        "× and ÷",
        "+ and -",
        "- and +",
        "÷ and ×"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "विकल्प 1 रखने पर: 8 × 4 ÷ 2 = 8 × 2 = 16। अतः समीकरण संतुलित होता है।",
      "en": "Putting option 1: 8 × 4 ÷ 2 = 32 ÷ 2 = 16. Equation is balanced."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-059",
    "subject": "reasoning",
    "topic": "mathematical-operations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि नियम के अनुसार 3 @ 4 = 25 और 5 @ 12 = 169 है, तो 6 @ 8 का मान क्या होगा?",
      "en": "If according to a rule 3 @ 4 = 25 and 5 @ 12 = 169, what is the value of 6 @ 8?"
    },
    "options": {
      "hi": [
        "100",
        "96",
        "110",
        "108"
      ],
      "en": [
        "100",
        "96",
        "110",
        "108"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "पैटर्न a^2 + b^2 है: 3^2 + 4^2 = 9 + 16 = 25। 5^2 + 12^2 = 25 + 144 = 169। इसी प्रकार 6^2 + 8^2 = 36 + 64 = 100।",
      "en": "Pattern is a^2 + b^2: 3^2 + 4^2 = 25, 5^2 + 12^2 = 169. Similarly 6^2 + 8^2 = 36 + 64 = 100."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  },
  {
    "id": "rea-060",
    "subject": "reasoning",
    "topic": "mathematical-operations",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "यदि 'P' का मान 2, 'Q' का मान 4, 'R' का मान 6 और 'S' का मान 8 है, तो व्यंजक (S × R) ÷ (Q + P) का मान क्या होगा?",
      "en": "If value of 'P' is 2, 'Q' is 4, 'R' is 6 and 'S' is 8, what is the value of (S × R) ÷ (Q + P)?"
    },
    "options": {
      "hi": [
        "8",
        "6",
        "10",
        "12"
      ],
      "en": [
        "8",
        "6",
        "10",
        "12"
      ]
    },
    "answer": 0,
    "explanation": {
      "hi": "मान रखने पर: (8 × 6) ÷ (4 + 2) = 48 ÷ 6 = 8।",
      "en": "Substituting values: (8 × 6) ÷ (4 + 2) = 48 ÷ 6 = 8."
    },
    "provenance": {
      "source": "agent-authored, logic double-checked",
      "evidence": "VERIFIED_DERIVED"
    }
  }
];
