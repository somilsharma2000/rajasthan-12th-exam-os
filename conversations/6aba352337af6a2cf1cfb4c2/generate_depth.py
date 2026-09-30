import json
import os

questions = [
  # Group 1: 2024-50-District Era Specifics (rgd-001 to rgd-010)
  {
    "id": "rgd-001",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "वर्ष 2023-2024 के प्रशासनिक पुनर्गठन के दौरान राजस्थान में गठित 3 नए प्रशासनिक संभाग कौन-से हैं?",
      "en": "Which are the 3 new administrative divisions formed in Rajasthan during the 2023-2024 administrative reorganization?"
    },
    "options": {
      "hi": ["सीकर, पाली और बांसवाड़ा", "अनूपगढ़, फलौदी और बालोतरा", "केकड़ी, दूदू और शाहपुरा", "कोटपूतली, खैरथल और गंगापुर"],
      "en": ["Sikar, Pali, and Banswara", "Anupgarh, Phalodi, and Balotra", "Kekri, Dudu, and Shahpura", "Kotputli, Khairthal, and Gangapur"]
    },
    "answer": 0,
    "explanation": {
      "hi": "अगस्त 2023 की अधिसूचना के अनुसार राजस्थान में 3 नए संभाग (सीकर, पाली, बांसवाड़ा) बनाए गए, जिससे राज्य में कुल संभागों की संख्या 7 से बढ़कर 10 हो गई।",
      "en": "As per the August 2023 notification, 3 new divisions (Sikar, Pali, Banswara) were created, taking the total count from 7 to 10."
    },
    "provenance": { "source": "Rajasthan Revenue Dept Reorganization Notification 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-002",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "वर्ष 2023 में जयपुर जिले से पृथक कर गठित किया गया 'दूदू' (Dudu) जिला क्षेत्रफल के संदर्भ में राजस्थान का कौन-सा जिला है?",
      "en": "Formed in 2023 by carving out from Jaipur district, what distinction does Dudu district hold in terms of area in Rajasthan?"
    },
    "options": {
      "hi": ["सबसे छोटा जिला", "सबसे बड़ा जिला", "तटीय सीमा वाला जिला", "अंतर्राष्ट्रीय सीमा वाला जिला"],
      "en": ["Smallest district", "Largest district", "Coastal boundary district", "International border district"]
    },
    "answer": 0,
    "explanation": {
      "hi": "दूदू जिला मात्र 3 तहसीलों (दूदू, फागी, मौजमाबाद) के साथ क्षेत्रफल की दृष्टि से राजस्थान का सबसे छोटा जिला बन गया है।",
      "en": "Dudu district, with just 3 tehsils (Dudu, Phagi, Mozmabad), became the smallest district by area in Rajasthan."
    },
    "provenance": { "source": "Rajasthan Gazette Notification Aug 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-003",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "अलवर जिले का विभाजन कर बनाए गए 'खैरथल-तिजारा' (Khairthal-Tijara) जिले का मुख्यालय कहाँ स्थित है तथा इसमें कौन-सा प्रमुख औद्योगिक क्षेत्र शामिल है?",
      "en": "Where is the headquarters of Khairthal-Tijara district (carved from Alwar) located, and which major industrial hub does it include?"
    },
    "options": {
      "hi": ["खैरथल मुख्यालय - भिवाड़ी औद्योगिक क्षेत्र", "तिजारा मुख्यालय - नीमराणा औद्योगिक क्षेत्र", "कोटपूतली मुख्यालय - बहरोड़ औद्योगिक क्षेत्र", "टपूकड़ा मुख्यालय - शाहजहाँपुर औद्योगिक क्षेत्र"],
      "en": ["Khairthal HQ - Bhiwadi Industrial Area", "Tijara HQ - Neemrana Industrial Area", "Kotputli HQ - Behror Industrial Area", "Tapukara HQ - Shahjahanpur Industrial Area"]
    },
    "answer": 0,
    "explanation": {
      "hi": "खैरथल-तिजारा जिले का मुख्यालय खैरथल है तथा राजस्थान का प्रमुख औद्योगिक नगर भिवाड़ी अब इसी जिले के अंतर्गत आता है।",
      "en": "The district HQ of Khairthal-Tijara is Khairthal, and Bhiwadi, a major industrial town of Rajasthan, now falls in this district."
    },
    "provenance": { "source": "RIICO & Rajasthan Gazette Reorganization 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-004",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "नवीन गठित 'केकड़ी' (Kekri) जिला मुख्यतः किन दो पूर्ववर्ती जिलों के क्षेत्रों को मिलाकर बनाया गया है?",
      "en": "The newly formed Kekri district was created primarily by combining areas from which two former districts?"
    },
    "options": {
      "hi": ["अजमेर एवं टोंक", "भीलवाड़ा एवं चित्तौड़गढ़", "जयपुर एवं दौसा", "कोटा एवं बूंदी"],
      "en": ["Ajmer and Tonk", "Bhilwara and Chittorgarh", "Jaipur and Dausa", "Kota and Bundi"]
    },
    "answer": 0,
    "explanation": {
      "hi": "केकड़ी जिले का गठन अजमेर जिले की तहसीलों (केकड़ी, सावर, भिनाय, सरवाड़) और टोंक जिले की टोडा रायसिंह तहसील को मिलाकर किया गया है।",
      "en": "Kekri district was formed by combining tehsils from Ajmer (Kekri, Sawar, Bhinay, Sarwar) and Todaraisingh tehsil from Tonk."
    },
    "provenance": { "source": "Revenue Dept Notification Govt of Rajasthan 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-005",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "उदयपुर से अलग होकर बना नया 'सलूंबर' (Salumbar) जिला किस प्रसिद्ध मीठे पानी की कृत्रिम झील को अपने भौगोलिक क्षेत्र में समाहित करता है?",
      "en": "Which famous freshwater artificial lake is now located in the newly created Salumbar district (carved out of Udaipur)?"
    },
    "options": {
      "hi": ["जयसमंद झील", "राजसमंद झील", "फतेहसागर झील", "आनासागर झील"],
      "en": ["Jaisamand Lake", "Rajsamand Lake", "Fatehsagar Lake", "Anasagar Lake"]
    },
    "answer": 0,
    "explanation": {
      "hi": "उदयपुर से पृथक हुए नए सलूंबर जिले में एशिया की दूसरी सबसे बड़ी कृत्रिम मीठे पानी की झील 'जयसमंद' (ढेबर झील) स्थित है।",
      "en": "Jaisamand Lake (Dhebar Lake), Asia's second largest artificial freshwater lake, now falls within the newly created Salumbar district."
    },
    "provenance": { "source": "Rajasthan Water Resources Dept & District Map 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-006",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    "origin": "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "सीकर एवं झुंझुनूं जिलों के पुनर्गठन से निर्मित 'नीम का थाना' (Neem Ka Thana) जिले में कौन-सी प्रसिद्ध आंतरिक अपवाह की नदी तथा ताम्रपाषाणकालीन सभ्यता स्थित है?",
      "en": "Which famous inland river and Chalcolithic civilization site are located in the newly created Neem Ka Thana district?"
    },
    "options": {
      "hi": ["कांतली नदी एवं गणेश्वर सभ्यता", "साबी नदी एवं जोधपुरा सभ्यता", "बाणगंगा नदी एवं बैराठ सभ्यता", "कांतली नदी एवं सुनारी सभ्यता"],
      "en": ["Katli River and Ganeshwar Civilization", "Sabi River and Jodhpura Civilization", "Banganga River and Bairat Civilization", "Katli River and Sunari Civilization"]
    },
    "answer": 0,
    "explanation": {
      "hi": "नीम का थाना जिले में कांतली नदी प्रवाहित होती है तथा प्रसिद्ध ताम्रयुगीन सभ्यता स्थल 'गणेश्वर' अब इसी जिले में स्थित है।",
      "en": "The Katli River flows through Neem Ka Thana district, and the famous Copper Age site Ganeshwar is now located in this district."
    },
    "provenance": { "source": "Archaeological Survey of Rajasthan & Gazette 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-007",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    origin: "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "बाड़मेर से अलग कर बनाए गए 'बालोतरा' (Balotra) जिले में लूनी नदी के किनारे कौन-सा प्रसिद्ध धार्मिक स्थल और हस्तशिल्प केंद्र स्थित है?",
      "en": "Which famous religious site and handicraft center is located along the Luni river in Balotra district (separated from Barmer)?"
    },
    "options": {
      "hi": ["जसोल (रानी भटियाणी) एवं अजरक/मलीर प्रिंट", "रामदेवरा एवं पटवों की हवेली", "देशनोक एवं उस्ता कला", "तिलवाड़ा एवं मथेरण कला"],
      "en": ["Jasol (Rani Bhatiani) and Ajrakh/Malir Print", "Ramdevra and Patwon Ki Haveli", "Deshnoke and Usta Kala", "Tilwara and Matheran Kala"]
    },
    "answer": 0,
    "explanation": {
      "hi": "बालोतरा जिले में जसोल (माता रानी भटियाणी मंदिर), अजरक एवं मलीर प्रिंट हस्तशिल्प तथा पचपदरा नमक झील स्थित है।",
      "en": "Balotra district houses Jasol (Rani Bhatiani temple), Ajrakh and Malir textile print handicrafts, and Pachpadra salt lake."
    },
    "provenance": { "source": "Rajasthan Tourism & Reorganization Map 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-008",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    origin: "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "मध्य राजस्थान का 'ब्यावर' (Beawar) जिला किन चार पूर्ववर्ती जिलों के पुनर्गठित भू-भागों को मिलाकर बनाया गया है?",
      "en": "Central Rajasthan's Beawar district was formed by merging reorganized areas from which four former districts?"
    },
    "options": {
      "hi": ["अजमेर, पाली, भीलवाड़ा एवं राजसमंद", "जयपुर, टोंक, सवाई माधोपुर एवं दौसा", "उदयपुर, चित्तौड़गढ़, राजसमंद एवं सिरोही", "सीकर, झुंझुनूं, चूरू एवं नागौर"],
      "en": ["Ajmer, Pali, Bhilwara, and Rajsamand", "Jaipur, Tonk, Sawai Madhopur, and Dausa", "Udaipur, Chittorgarh, Rajsamand, and Sirohi", "Sikar, Jhunjhunu, Churu, and Nagaur"]
    },
    "answer": 0,
    "explanation": {
      "hi": "ब्यावर जिले में अजमेर (ब्यावर, टॉटगढ़), पाली (जैतारण, रायपुर), भीलवाड़ा (बदनौर) और राजसमंद (भीम) के क्षेत्र शामिल किए गए हैं।",
      "en": "Beawar district integrates parts of Ajmer (Beawar, Tatgarh), Pali (Jaitaran, Raipur), Bhilwara (Badnor), and Rajsamand (Bhim)."
    },
    "provenance": { "source": "Revenue Dept Gazette Notification 2023", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-009",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    origin: "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "जोधपुर से पृथक कर गठित 'फलौदी' (Phalodi) जिले में स्थित 'बाप' (Bap) क्षेत्र भूविज्ञान में किस विशेष संरचना के लिए प्रसिद्ध है?",
      "en": "The Bap area in Phalodi district (separated from Jodhpur) is famous in geology for which unique geological structure?"
    },
    "options": {
      "hi": ["बाप बोल्डर बैड (हिमानी निक्षेप)", "आकल वुड फॉसिल पार्क", "छप्पन की पहाड़ियाँ", "लाठी सीरीज़"],
      "en": ["Bap Boulder Bed (Glacial Deposits)", "Akal Wood Fossil Park", "Chappan Hills", "Lathi Series"]
    },
    "answer": 0,
    "explanation": {
      "hi": "फलौदी के बाप क्षेत्र में कार्बोनिफेरस युग के हिमानी (ग्लेशियर) द्वारा निर्मित 'बाप बोल्डर बैड' (Bap Boulder Bed) चट्टानें पाई जाती हैं।",
      "en": "The Bap area of Phalodi features Permo-Carboniferous glacial deposits known as Bap Boulder Bed."
    },
    "provenance": { "source": "Geological Survey of India - Rajasthan Chapter", "evidence": "VERIFIED_DERIVED" }
  },
  {
    "id": "rgd-010",
    "subject": "raj-gk",
    "topic": "जिले, प्रशासनिक संभाग एवं पुनर्गठन",
    origin: "agent_authored",
    "verification": "VERIFIED_DERIVED",
    "q": {
      "hi": "भीलवाड़ा जिले से अलग होकर बने नए 'शाहपुरा' (Shahpura) जिले में किस प्रसिद्ध धार्मिक सम्प्रदाय की मुख्य पीठ स्थित है जहाँ 'फूलडोल महोत्सव' मनाया जाता है?",
      "en": "In the newly formed Shahpura district (carved out of Bhilwara), which religious sect has its main seat where Phooldol Festival is celebrated?"
    },
    "options": {
      "hi": ["रामस्नेही सम्प्रदाय", "जसनाती सम्प्रदाय", "बिश्नोई सम्प्रदाय", "दादू पंथ"],
      "en": ["Ramsnehi Sect", "Jasnathi Sect", "Bishnoi Sect", "Dadu Panth"]
    },
    answer: 0,
    "explanation": {
      "hi": "शाहपुरा (अब स्वतंत्र जिला) में स्वामी रामचरण जी द्वारा स्थापित रामस्नेही सम्प्रदाय की प्रधान पीठ (धाम) है, जहाँ चैत्र माह में फूलडोल मेला लगता है।",
      "en": "Shahpura (now an independent district) is the head seat of the Ramsnehi Sect founded by Swami Ramcharan, where Phooldol festival is held."
    },
    "provenance": { "source": "Rajasthan Cultural Heritage & Gazette 2023", "evidence": "VERIFIED_DERIVED" }
  }
]

print("Script template ready. Creating full builder script...")
