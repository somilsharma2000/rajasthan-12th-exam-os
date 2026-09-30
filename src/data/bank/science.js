// SCIENCE QUESTION BANK — Rajasthan 12th Level Govt Exams Standard
// Schema: id, subject, topic, origin, verification, q, options, answer, explanation, provenance
// Verified with Node.js parse and validation checks.

export const SCIENCE = [
  {
    id: 'sci-001',
    subject: 'science',
    topic: 'प्रकाश - परावर्तन और दर्पण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'समतल दर्पण (Plane Mirror) द्वारा किसी वस्तु का बना प्रतिबिंब कैसा होता है?',
      en: 'What type of image is formed by a plane mirror for an object?'
    },
    options: {
      hi: ['आभासी, सीधा और वस्तु के बराबर', 'वास्तविक, उल्टा और वस्तु से बड़ा', 'आभासी, उल्टा और वस्तु से छोटा', 'वास्तविक, सीधा और वस्तु से छोटा'],
      en: ['Virtual, erect and same size', 'Real, inverted and larger', 'Virtual, inverted and smaller', 'Real, erect and smaller']
    },
    answer: 0,
    explanation: {
      hi: 'समतल दर्पण द्वारा बना प्रतिबिंब सदैव आभासी (Virtual), सीधा (Erect) तथा वस्तु के आकार के बराबर होता है। यह पार्श्व उत्क्रमण (Lateral Inversion) भी दर्शाता है।',
      en: 'The image formed by a plane mirror is always virtual, erect, and equal in size to the object with lateral inversion.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-002',
    subject: 'science',
    topic: 'प्रकाश - दृष्टि दोष एवं निवारण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'निकट दृष्टि दोष (Myopia) के निवारण के लिए किस प्रकार के लेंस का उपयोग किया जाता है?',
      en: 'Which type of lens is used to correct Myopia (near-sightedness)?'
    },
    options: {
      hi: ['उत्तल लेंस (Convex lens)', 'अवतल लेंस (Concave lens)', 'बेलनाकार लेंस (Cylindrical lens)', 'द्विफोकसी लेंस (Bifocal lens)'],
      en: ['Convex lens', 'Concave lens', 'Cylindrical lens', 'Bifocal lens']
    },
    answer: 1,
    explanation: {
      hi: 'निकट दृष्टि दोष में दूर की वस्तुएँ स्पष्ट नहीं दिखतीं। इसे सही करने के लिए अवतल लेंस (Concave lens) का प्रयोग किया जाता है, जो प्रकाश किरणों को अपसारित करके प्रतिबिंब को सीधे दृष्टिपटल (Retina) पर बनाता है।',
      en: 'A concave lens is used to correct myopia by diverging incoming light rays so that the image focuses directly on the retina.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-003',
    subject: 'science',
    topic: 'मानव नेत्र',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव नेत्र में किसी वस्तु का वास्तविक और उल्टा प्रतिबिंब कहाँ बनता है?',
      en: 'Where is a real and inverted image of an object formed in the human eye?'
    },
    options: {
      hi: ['कॉर्निया पर', 'पुतली पर', 'दृष्टिपटल (रेटिना) पर', 'परितारिका (आइरिस) पर'],
      en: ['Cornea', 'Pupil', 'Retina', 'Iris']
    },
    answer: 2,
    explanation: {
      hi: 'मानव नेत्र के दृष्टिपटल (Retina) पर प्रकाश संवेदनशील कोशिकाएँ (Rods & Cones) होती हैं जहाँ वस्तु का वास्तविक और उल्टा प्रतिबिंब बनता है।',
      en: 'The retina acts as a screen containing photoreceptor cells where a real and inverted image is formed.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-004',
    subject: 'science',
    topic: 'गति के नियम',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'न्यूटन के गति के प्रथम नियम को अन्य किस नाम से जाना जाता है?',
      en: 'By what other name is Newton\'s First Law of Motion known?'
    },
    options: {
      hi: ['संवेग का नियम', 'जड़त्व का नियम', 'क्रिया-प्रतिक्रिया का नियम', 'गुरुत्वाकर्षण का नियम'],
      en: ['Law of Momentum', 'Law of Inertia', 'Law of Action-Reaction', 'Law of Gravitation']
    },
    answer: 1,
    explanation: {
      hi: 'न्यूटन के प्रथम नियम के अनुसार प्रत्येक वस्तु अपनी विराम या गति की अवस्था को बनाए रखती है जब तक उस पर बाह्य बल न लगे। इसे गैलीलियो का जड़त्व का नियम (Law of Inertia) भी कहते हैं।',
      en: 'Newton\'s First Law states that an object remains at rest or in uniform motion unless acted upon by an external force; hence it is called the Law of Inertia.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-005',
    subject: 'science',
    topic: 'कार्य, ऊर्जा और शक्ति',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'किसी गतिशील वस्तु में उसकी गति के कारण निहित ऊर्जा को क्या कहते हैं?',
      en: 'What is the energy possessed by an object due to its motion called?'
    },
    options: {
      hi: ['स्थितिज ऊर्जा (Potential energy)', 'गतिज ऊर्जा (Kinetic energy)', 'रासायनिक ऊर्जा (Chemical energy)', 'नाभिकीय ऊर्जा (Nuclear energy)'],
      en: ['Potential energy', 'Kinetic energy', 'Chemical energy', 'Nuclear energy']
    },
    answer: 1,
    explanation: {
      hi: 'गतिज ऊर्जा (Kinetic Energy = 1/2 mv²) किसी पिंड में उसकी गति के कारण उपस्थित कार्य करने की क्षमता है (जैसे बहती हवा या बहता पानी)।',
      en: 'Kinetic energy is the energy possessed by a body by virtue of its motion (E_k = 1/2 m v²).'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-006',
    subject: 'science',
    topic: 'विद्युत - ओम का नियम',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'ओम के नियम (Ohm\'s Law) के अनुसार विभवांतर (V), विद्युत धारा (I) और प्रतिरोध (R) में क्या सही संबंध है?',
      en: 'According to Ohm\'s Law, what is the correct relation between voltage (V), current (I) and resistance (R)?'
    },
    options: {
      hi: ['V = I / R', 'V = I × R', 'V = R / I', 'V = I² × R'],
      en: ['V = I / R', 'V = I × R', 'V = R / I', 'V = I² × R']
    },
    answer: 1,
    explanation: {
      hi: 'ओम के नियमानुसार स्थिर ताप पर चालक के सिरों के बीच का विभवांतर (V) उसमें प्रवाहित धारा (I) के समानुपाती होता है (V = I × R)।',
      en: 'Ohm\'s Law states that voltage V across a conductor is directly proportional to the current I flowing through it, V = I × R.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-007',
    subject: 'science',
    topic: 'विद्युत परिपथ - प्रतिरोधकों का संयोजन',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'यदि 2 Ω, 3 Ω और 6 Ω के तीन प्रतिरोधकों को श्रेणीक्रम (Series) में जोड़ा जाए, तो कुल तुल्य प्रतिरोध कितना होगा?',
      en: 'If three resistors of 2 Ω, 3 Ω, and 6 Ω are connected in series, what is the total equivalent resistance?'
    },
    options: {
      hi: ['1 Ω', '6 Ω', '11 Ω', '36 Ω'],
      en: ['1 Ω', '6 Ω', '11 Ω', '36 Ω']
    },
    answer: 2,
    explanation: {
      hi: 'श्रेणीक्रम संयोजन में कुल तुल्य प्रतिरोध R_total = R₁ + R₂ + R₃ होता है। अतः R = 2 Ω + 3 Ω + 6 Ω = 11 Ω।',
      en: 'In series combination, equivalent resistance is the algebraic sum of individual resistances: R = 2 + 3 + 6 = 11 Ω.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-008',
    subject: 'science',
    topic: 'विद्युत ऊर्जा - मात्रक रूपांतरण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: '1 किलोवाट-घंटा (1 kWh) विद्युत ऊर्जा कितने जूल (Joule) के बराबर होती है?',
      en: '1 kilowatt-hour (1 kWh) of electrical energy is equal to how many Joules?'
    },
    options: {
      hi: ['3.6 × 10³ J', '3.6 × 10⁵ J', '3.6 × 10⁶ J', '3.6 × 10⁸ J'],
      en: ['3.6 × 10³ J', '3.6 × 10⁵ J', '3.6 × 10⁶ J', '3.6 × 10⁸ J']
    },
    answer: 2,
    explanation: {
      hi: '1 kWh = 1000 W × 3600 सेकंड = 3,600,000 जूल = 3.6 × 10⁶ J। इसे विद्युत ऊर्जा का एक व्यापारिक यूनिट (1 Unit) कहते हैं।',
      en: '1 kWh = 1000 W × 3600 s = 3.6 × 10^6 Joules.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-009',
    subject: 'science',
    topic: 'गुरुत्वाकर्षण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'पृथ्वी की सतह पर गुरुत्वीय त्वरण (g) का मानक औसत मान कितना होता है?',
      en: 'What is the standard average value of acceleration due to gravity (g) at Earth\'s surface?'
    },
    options: {
      hi: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '11.2 m/s²'],
      en: ['8.9 m/s²', '9.8 m/s²', '10.8 m/s²', '11.2 m/s²']
    },
    answer: 1,
    explanation: {
      hi: 'पृथ्वी की सतह पर गुरुत्वीय त्वरण (acceleration due to gravity) का औसत मान लगभग 9.8 m/s² (या 9.8 N/kg) होता है।',
      en: 'The standard mean value of acceleration due to gravity on Earth is approximately 9.8 m/s².'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-010',
    subject: 'science',
    topic: 'ध्वनि तरंगे',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'ध्वनि तरंगे निम्नलिखित में से किस माध्यम में संचरित नहीं हो सकती हैं?',
      en: 'Through which of the following media can sound waves NOT travel?'
    },
    options: {
      hi: ['ठोस', 'द्रव', 'गैस', 'निर्वात (Vacuum)'],
      en: ['Solid', 'Liquid', 'Gas', 'Vacuum']
    },
    answer: 3,
    explanation: {
      hi: 'ध्वनि एक अनुदैर्घ्य यांत्रिक तरंग है जिसे संचरण के लिए द्रव्यमान माध्यम की आवश्यकता होती है। निर्वात (Vacuum) में माध्यम के कण नहीं होने के कारण ध्वनि संचरित नहीं हो सकती।',
      en: 'Sound is a mechanical wave requiring a material medium and cannot travel through a vacuum.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-011',
    subject: 'science',
    topic: 'ऊष्मा और ताप',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'परम शून्य ताप (Absolute Zero Temperature) का मान सेलसियस पैमाने पर कितना होता है?',
      en: 'What is the value of Absolute Zero Temperature on the Celsius scale?'
    },
    options: {
      hi: ['0 °C', '-100 °C', '-273.15 °C', '-373.15 °C'],
      en: ['0 °C', '-100 °C', '-273.15 °C', '-373.15 °C']
    },
    answer: 2,
    explanation: {
      hi: 'परम शून्य ताप (0 Kelvin) वह न्यूनतम संभव सैद्धांतिक ताप है जिस पर पदार्थों के अणुओं की तापीय गति रुक जाती है। यह -273.15 °C (लगभग -273 °C) होता है।',
      en: 'Absolute zero (0 K) is -273.15 °C, the theoretical lowest temperature where molecular motion ceases.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-012',
    subject: 'science',
    topic: 'प्रकाश - पूर्ण आंतरिक परावर्तन',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'रेगिस्तान में मरीचिका (Mirage) बनने की घटना का मुख्य कारण क्या है?',
      en: 'What is the main cause of the formation of a Mirage in deserts?'
    },
    options: {
      hi: ['प्रकाश का प्रकीर्णन (Scattering)', 'प्रकाश का व्यतिकरण (Interference)', 'प्रकाश का पूर्ण आंतरिक परावर्तन (Total Internal Reflection)', 'प्रकाश का विवर्तन (Diffraction)'],
      en: ['Scattering of light', 'Interference of light', 'Total Internal Reflection of light', 'Diffraction of light']
    },
    answer: 2,
    explanation: {
      hi: 'गर्मियों में रेगिस्तान में हवा की निचली परतें अत्यधिक गर्म और विरल हो जाती हैं। प्रकाश की किरणें जब ऊपर की सघन हवा से नीचे की विरल हवा में आपतित होकर क्रांतिक कोण से अधिक कोण पर टकराती हैं, तो पूर्ण आंतरिक परावर्तन होता है।',
      en: 'Mirage is caused by Total Internal Reflection when light moves through air layers of varying temperatures and densities near hot desert ground.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-013',
    subject: 'science',
    topic: 'बल एवं दाब',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'SI पद्धति में दाब (Pressure) का मात्रक क्या है?',
      en: 'What is the SI unit of pressure?'
    },
    options: {
      hi: ['न्यूटन (Newton)', 'पास्कल (Pascal)', 'जूल (Joule)', 'वाट (Watt)'],
      en: ['Newton', 'Pascal', 'Joule', 'Watt']
    },
    answer: 1,
    explanation: {
      hi: 'प्रति एकांक क्षेत्रफल पर लगने वाले लंबवत बल को दाब (Pressure = Force / Area) कहते हैं। इसका SI मात्रक पास्कल (Pa) होता है जो 1 N/m² के तुल्य है।',
      en: 'The SI unit of pressure is Pascal (Pa), defined as 1 Newton per square meter (1 N/m²).'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-014',
    subject: 'science',
    topic: 'अम्ल, क्षार एवं लवण - pH स्केल',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: '25 °C पर शुद्ध जल का pH मान कितना होता है?',
      en: 'What is the pH value of pure water at 25 °C?'
    },
    options: {
      hi: ['0', '5', '7', '14'],
      en: ['0', '5', '7', '14']
    },
    answer: 2,
    explanation: {
      hi: 'शुद्ध जल एक उदासीन (Neutral) द्रव है, जिसमें H⁺ और OH⁻ आयनों की सांद्रता बराबर (10⁻⁷ M) होती है, इसलिए इसका pH मान 7 होता है।',
      en: 'Pure water is neutral with equal concentrations of H+ and OH- ions, resulting in a pH of 7 at 25 °C.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-015',
    subject: 'science',
    topic: 'प्राकृतिक अम्ल',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'सिरके (Vinegar) में मुख्य रूप से कौन-सा अम्ल पाया जाता है?',
      en: 'Which acid is primarily found in vinegar?'
    },
    options: {
      hi: ['साइट्रिक अम्ल (Citric acid)', 'एसिटिक अम्ल (Acetic acid)', 'टार्टरिक अम्ल (Tartaric acid)', 'लैक्टिक अम्ल (Lactic acid)'],
      en: ['Citric acid', 'Acetic acid', 'Tartaric acid', 'Lactic acid']
    },
    answer: 1,
    explanation: {
      hi: 'सिरका (Vinegar) एसिटिक अम्ल (CH₃COOH / इथेनॉइक अम्ल) का लगभग 4-8% जलीय घोल होता है। खट्टे फलों में साइट्रिक अम्ल और दही में लैक्टिक अम्ल पाया जाता है।',
      en: 'Vinegar is a dilute solution containing 4-8% acetic acid (ethanoic acid, CH3COOH).'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-016',
    subject: 'science',
    topic: 'दैनिक जीवन में रसायन - बेकिंग सोडा',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'खाने के सोडे (बेकिंग सोडा) का रासायनिक नाम क्या है?',
      en: 'What is the chemical name of baking soda?'
    },
    options: {
      hi: ['सोडियम कार्बोनेट', 'सोडियम बायकार्बोनेट (सोडियम हाइड्रोजन कार्बोनेट)', 'सोडियम क्लोराइड', 'सोडियम हाइड्रोक्साइड'],
      en: ['Sodium carbonate', 'Sodium bicarbonate (Sodium hydrogen carbonate)', 'Sodium chloride', 'Sodium hydroxide']
    },
    answer: 1,
    explanation: {
      hi: 'खाने के सोडे का रासायनिक नाम सोडियम बायकार्बोनेट (NaHCO₃) है। कपड़े धोने के सोडे को सोडियम कार्बोनेट (Na₂CO₃·10H₂O) कहते हैं।',
      en: 'Baking soda\'s chemical name is Sodium Bicarbonate or Sodium Hydrogen Carbonate (NaHCO3).'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-017',
    subject: 'science',
    topic: 'रासायनिक यौगिक - प्लास्टर ऑफ पेरिस',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक सूत्र क्या है?',
      en: 'What is the chemical formula of Plaster of Paris?'
    },
    options: {
      hi: ['CaSO₄ · 2H₂O', 'CaSO₄ · ½H₂O', 'CaCO₃', 'CaCl₂'],
      en: ['CaSO₄ · 2H₂O', 'CaSO₄ · ½H₂O', 'CaCO₃', 'CaCl₂']
    },
    answer: 1,
    explanation: {
      hi: 'प्लास्टर ऑफ पेरिस कैलशियम सल्फेट हेमीहाइड्रेट (CaSO₄ · ½H₂O) होता है। जब जिप्सम (CaSO₄ · 2H₂O) को 373 K पर गर्म करते हैं, तो यह जल के अणु त्यागकर प्लास्टर ऑफ पेरिस बनाता है।',
      en: 'Plaster of Paris is calcium sulfate hemihydrate (CaSO4·½H2O), produced by heating gypsum (CaSO4·2H2O) at 373 K.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-018',
    subject: 'science',
    topic: 'धातु और अधातु - भौतिक गुण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'कमरे के ताप पर द्रव अवस्था में रहने वाली एकमात्र धातु कौन-सी है?',
      en: 'Which is the only metal that remains liquid at room temperature?'
    },
    options: {
      hi: ['पारा (मर्करी - Hg)', 'ब्रोमीन (Br)', 'सोडियम (Na)', 'गैलियम (Ga)'],
      en: ['Mercury (Hg)', 'Bromine (Br)', 'Sodium (Na)', 'Gallium (Ga)']
    },
    answer: 0,
    explanation: {
      hi: 'पारा (Mercury - Hg) कमरे के तापमान पर द्रव अवस्था में रहने वाली एकमात्र धातु है। (ब्रोमीन कमरे के ताप पर द्रव रहने वाली एकमात्र अधातु है)।',
      en: 'Mercury (Hg) is the only metallic element that is liquid at standard room temperature.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-019',
    subject: 'science',
    topic: 'धातुओं की सक्रियता श्रेणी',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'निम्नलिखित में से कौन-सी धातु रासायनिक रूप से सर्वाधिक अभिक्रियाशील (Most Reactive) है?',
      en: 'Which of the following metals is chemically the most reactive?'
    },
    options: {
      hi: ['सोना (Gold)', 'कॉपर (Copper)', 'लोहा (Iron)', 'पोटैशियम (Potassium)'],
      en: ['Gold', 'Copper', 'Iron', 'Potassium']
    },
    answer: 3,
    explanation: {
      hi: 'सक्रियता श्रेणी में पोटैशियम (K) सबसे ऊपर आता है और जल व वायु से अत्यंत तेजी से अभिक्रिया करता है, जबकि सोना (Au) श्रेणी में सबसे नीचे अक्रिय धातु के रूप में होता है।',
      en: 'Potassium (K) is at the top of the metal reactivity series and reacts vigorously with water and air.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-020',
    subject: 'science',
    topic: 'धातु संक्षारण एवं सुरक्षा',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'लोहे को जंग से बचाने के लिए उस पर जस्ते (Zinc) की पतली परत चढ़ाने की प्रक्रिया को क्या कहते हैं?',
      en: 'What is the process of coating iron with a thin layer of zinc to protect it from rusting called?'
    },
    options: {
      hi: ['विद्युत अपघटन (Electrolysis)', 'जस्तीकरण / यशद लेपन (Galvanization)', 'क्रिस्टलीकरण (Crystallization)', 'आसवन (Distillation)'],
      en: ['Electrolysis', 'Galvanization', 'Crystallization', 'Distillation']
    },
    answer: 1,
    explanation: {
      hi: 'लोहे और इस्पात को जंग (Rusting) से बचाने के लिए उन पर जस्ते (Zinc) की परत चढ़ाने की प्रक्रिया को यशद लेपन या गैल्वेनीकरण (Galvanization) कहते हैं।',
      en: 'Galvanization is the application of a protective zinc coating to iron or steel to prevent rusting.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-021',
    subject: 'science',
    topic: 'रासायनिक अभिक्रियाओं के प्रकार',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'जिस रासायनिक अभिक्रिया में उत्पाद बनने के साथ-साथ ऊष्मा भी मुक्त होती है, उसे क्या कहते हैं?',
      en: 'What is a chemical reaction in which heat is released along with the formation of products called?'
    },
    options: {
      hi: ['ऊष्माशोषी अभिक्रिया (Endothermic reaction)', 'ऊष्माक्षेपी अभिक्रिया (Exothermic reaction)', 'विस्थापन अभिक्रिया (Displacement reaction)', 'अपघटन अभिक्रिया (Decomposition reaction)'],
      en: ['Endothermic reaction', 'Exothermic reaction', 'Displacement reaction', 'Decomposition reaction']
    },
    answer: 1,
    explanation: {
      hi: 'वे अभिक्रियाएँ जिनमें ऊष्मा ऊर्जा बाहर निकलती है, ऊष्माक्षेपी (Exothermic) कहलाती हैं (जैसे प्राकृतिक गैस का दहन या श्वसन)। जिसमें ऊष्मा अवशोषित होती है वह ऊष्माशोषी कहलाती है।',
      en: 'Reactions that release heat energy along with products are exothermic reactions.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-022',
    subject: 'science',
    topic: 'कार्बन के अपररूप',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'पेंसिल की लीड (Lead) बनाने में कार्बन के किस अपररूप का उपयोग किया जाता है?',
      en: 'Which allotrope of carbon is used to make pencil lead?'
    },
    options: {
      hi: ['हीरा (Diamond)', 'ग्रेफाइट (Graphite)', 'फुलरीन (Fullerene)', 'कोक (Coke)'],
      en: ['Diamond', 'Graphite', 'Fullerene', 'Coke']
    },
    answer: 1,
    explanation: {
      hi: 'ग्रेफाइट कार्बन का एक अपररूप है जिसकी परतीय संरचना होती है। यह नरम और चिकना होता है तथा कागज पर निशान छोड़ता है, इसलिए इसका प्रयोग पेंसिल लीड में होता है।',
      en: 'Graphite is a soft, slippery allotrope of carbon with layered structure, used in pencil lead.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-023',
    subject: 'science',
    topic: 'दैनिक रसायन - रसोई गैस',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'रसोई गैस (LPG) में मुख्य रूप से किन हाइड्रोकार्बन गैसों का मिश्रण होता है?',
      en: 'Which hydrocarbon gases form the main components of Liquefied Petroleum Gas (LPG)?'
    },
    options: {
      hi: ['मीथेन और एथेन', 'ब्यूटेन और प्रोपेन', 'एथिलीन और एसिटिलीन', 'हाइड्रोजन और हीलियम'],
      en: ['Methane and Ethane', 'Butane and Propane', 'Ethylene and Acetylene', 'Hydrogen and Helium']
    },
    answer: 1,
    explanation: {
      hi: 'एलपीजी (LPG) में मुख्य रूप से ब्यूटेन (C₄H₁₀) और प्रोपेन (C₃H₈) होती हैं। लीकेज की पहचान के लिए इसमें तीव्र गंध वाला इथाइल मरकैप्टन (Ethyl mercaptan) मिलाया जाता है।',
      en: 'LPG mainly consists of butane and propane. Ethyl mercaptan is added to impart odor for leak detection.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-024',
    subject: 'science',
    topic: 'आवर्त सारणी का नियम',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'हेनरी मोजले द्वारा प्रतिपादित आधुनिक आवर्त सारणी (Modern Periodic Table) किस नियम पर आधारित है?',
      en: 'The Modern Periodic Table formulated by Henry Moseley is based on which property of elements?'
    },
    options: {
      hi: ['परमाणु द्रव्यमान (Atomic Mass)', 'परमाणु क्रमांक (Atomic Number)', 'द्रव्यमान संख्या (Mass Number)', 'संयोजकता (Valency)'],
      en: ['Atomic Mass', 'Atomic Number', 'Mass Number', 'Valency']
    },
    answer: 1,
    explanation: {
      hi: 'आधुनिक आवर्त नियम के अनुसार तत्वों के भौतिक एवं रासायनिक गुण उनके परमाणु क्रमांक (Atomic Number) के आवर्ती फलन होते हैं। (मेंडलीव की आवर्त सारणी परमाणु द्रव्यमान पर आधारित थी)।',
      en: 'Moseley\'s Modern Periodic Law states that properties of elements are a periodic function of their atomic numbers.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-025',
    subject: 'science',
    topic: 'अम्ल वर्षा और पर्यावरण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'वायुमंडल में किन गैसों के प्रदूषण के कारण मुख्य रूप से अम्ल वर्षा (Acid Rain) होती है?',
      en: 'Acid Rain is primarily caused by atmospheric pollution due to which gases?'
    },
    options: {
      hi: ['सल्फर डाइऑक्साइड (SO₂) और नाइट्रोजन डाइऑक्साइड (NO₂)', 'कार्बन डाइऑक्साइड (CO₂) और ऑक्सीजन (O₂)', 'मीथेन (CH₄) और ओजोन (O₃)', 'कार्बन मोनोऑक्साइड (CO) और हीलियम (He)'],
      en: ['SO₂ and NO₂', 'CO₂ and O₂', 'CH₄ and O₃', 'CO and He']
    },
    answer: 0,
    explanation: {
      hi: 'वायुमंडल में जीवाश्म ईंधन जलने से SO₂ और NO₂ गैसें निकलती हैं जो वर्षा जल से क्रिया करके सल्फ्यूरिक अम्ल (H₂SO₄) और नाइट्रिक अम्ल (HNO₃) बनाती हैं, जिससे pH मान 5.6 से कम हो जाता है।',
      en: 'SO2 and NO2 react with rain water to form sulfuric and nitric acids, lowering precipitation pH below 5.6.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-026',
    subject: 'science',
    topic: 'परमाणु रसायन - भारी जल',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'परमाणु भट्ठियों (Nuclear Reactors) में मंदक के रूप में प्रयुक्त भारी जल (Heavy Water) का रासायनिक नाम और सूत्र क्या है?',
      en: 'What is the chemical name and formula of Heavy Water used as a moderator in nuclear reactors?'
    },
    options: {
      hi: ['हाइड्रोजन पेरोक्साइड (H₂O₂)', 'ड्यूटेरियम ऑक्साइड (D₂O)', 'ट्रिटियम ऑक्साइड (T₂O)', 'हाइड्रोनियम आयन (H₃O⁺)'],
      en: ['Hydrogen peroxide (H₂O₂)', 'Deuterium oxide (D₂O)', 'Tritium oxide (T₂O)', 'Hydronium ion (H₃O⁺)']
    },
    answer: 1,
    explanation: {
      hi: 'भारी जल ड्यूटेरियम ऑक्साइड (D₂O) है, जो हाइड्रोजन के भारी समस्थानिक ड्यूटेरियम (²H या D) का ऑक्साइड है। इसका उपयोग नाभिकीय रिएक्टर में न्यूट्रॉनों की गति धीमी करने (मंदक) में होता है।',
      en: 'Heavy water is Deuterium Oxide (D2O), used as a neutron moderator in nuclear reactors.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-027',
    subject: 'science',
    topic: 'मानव पाचन तंत्र',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव आमाशय (Stomach) में भोजन के पाचन एवं रोगाणु नाश के लिए कौन-सा अम्ल स्रावित होता है?',
      en: 'Which acid is secreted in the human stomach for digestion and killing ingested microbes?'
    },
    options: {
      hi: ['सल्फ्यूरिक अम्ल (H₂SO₄)', 'हाइड्रोक्लोरिक अम्ल (HCl)', 'नाइट्रिक अम्ल (HNO₃)', 'एसिटिक अम्ल (CH₃COOH)'],
      en: ['Sulfuric acid', 'Hydrochloric acid', 'Nitric acid', 'Acetic acid']
    },
    answer: 1,
    explanation: {
      hi: 'आमाशय की भित्ति में स्थित जठर ग्रंथियों से हाइड्रोक्लोरिक अम्ल (HCl) स्रावित होता है जो अम्लीय माध्यम बनाकर पेप्सिन एंजाइम को सक्रिय करता है और सूक्ष्मजीवों को नष्ट करता है।',
      en: 'Gastric glands in the stomach secrete Hydrochloric Acid (HCl), creating an acidic pH required for pepsin activity.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-028',
    subject: 'science',
    topic: 'मानव रक्त समूह',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'किस रक्त समूह (Blood Group) वाले व्यक्ति को सर्वदाता (Universal Donor) कहा जाता है?',
      en: 'Which blood group is known as the Universal Donor?'
    },
    options: {
      hi: ['AB पॉजिटिव (AB+)', 'O नेगेटिव (O-)', 'A पॉजिटिव (A+)', 'B नेगेटिव (B-)'],
      en: ['AB positive (AB+)', 'O negative (O-)', 'A positive (A+)', 'B negative (B-)']
    },
    answer: 1,
    explanation: {
      hi: 'O नेगेटिव (O-) रक्त समूह की RBC पर कोई A या B एंटीजन और Rh फैक्टर उपस्थित नहीं होता, इसलिए यह किसी भी प्राप्तकर्ता को सुरक्षित रूप से दिया जा सकता है। (AB+ को सर्वग्राही कहते हैं)।',
      en: 'Blood group O negative (O-) lacks A, B, and Rh antigens, making it safe for transfusion to any recipient.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-029',
    subject: 'science',
    topic: 'मानव परिसंचरण तंत्र - हीमोग्लोबिन',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'लाल रक्त कणिकाओं (RBC) में ऑक्सीजन का संवहन करने वाला लोह-युक्त वर्णक कौन-सा है?',
      en: 'Which iron-containing pigment in red blood cells (RBCs) is responsible for transporting oxygen?'
    },
    options: {
      hi: ['क्लोरोफिल', 'हीमोग्लोबिन', 'कैरोटीन', 'मायोग्लोबिन'],
      en: ['Chlorophyll', 'Hemoglobin', 'Carotene', 'Myoglobin']
    },
    answer: 1,
    explanation: {
      hi: 'हीमोग्लोबिन (Hemoglobin) लाल रक्त कोशिकाओं में मौजूद लोह-युक्त जटिल प्रोटीन है जो फेफड़ों से शरीर की सभी कोशिकाओं तक ऑक्सीजन का वहन करता है।',
      en: 'Hemoglobin is an iron-rich conjugated protein in RBCs that binds oxygen and transports it through blood.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-030',
    subject: 'science',
    topic: 'मानव मस्तिष्क - अनैच्छिक क्रियाएँ',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव मस्तिष्क का कौन-सा भाग हृदय स्पंदन, रक्तचाप और श्वसन जैसी अनैच्छिक क्रियाओं का केंद्र है?',
      en: 'Which part of the human brain controls involuntary actions like heartbeat, blood pressure, and respiration?'
    },
    options: {
      hi: ['प्रमस्तिष्क (Cerebrum)', 'अनुमस्तिष्क (Cerebellum)', 'मेडुला ऑबलोंगेटा (Medulla Oblongata)', 'हाइपोथैलेमस (Hypothalamus)'],
      en: ['Cerebrum', 'Cerebellum', 'Medulla Oblongata', 'Hypothalamus']
    },
    answer: 2,
    explanation: {
      hi: 'मेडुला ऑबलोंगेटा (Medulla Oblongata) पश्च मस्तिष्क का हिस्सा है जो श्वसन, हृदय गति, लार आना और रक्तचाप जैसी स्वायत्त और अनैच्छिक क्रियाओं का नियमन करता है।',
      en: 'The Medulla Oblongata in the hindbrain regulates essential autonomic involuntary functions including heart rate and breathing.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-031',
    subject: 'science',
    topic: 'मानव उत्सर्जन तंत्र',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव वृक्क (Kidney) की कार्यात्मक एवं संरचनात्मक सूक्ष्म इकाई क्या कहलाती है?',
      en: 'What is the structural and functional filtering unit of the human kidney called?'
    },
    options: {
      hi: ['न्यूरॉन (Neuron)', 'नेफ्रॉन / वृक्काणु (Nephron)', 'एल्वियोली (Alveoli)', 'विली (Villi)'],
      en: ['Neuron', 'Nephron', 'Alveoli', 'Villi']
    },
    answer: 1,
    explanation: {
      hi: 'प्रत्येक वृक्क में लगभग 10 लाख नेफ्रॉन (Nephron) पाए जाते हैं जो रुधिर से अपशिष्ट पदार्थों (यूरिया आदि) को छानकर मूत्र निर्माण करते हैं। न्यूरॉन तंत्रिका कोशिका है।',
      en: 'Nephrons are microscopic tubular structures in the kidney responsible for filtering blood and producing urine.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-032',
    subject: 'science',
    topic: 'अन्तःस्रावी तंत्र - इंसुलिन',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव शरीर में शर्करा (ग्लूकोज) के स्तर को नियंत्रित करने वाला इंसुलिन हार्मोन कहाँ से स्रावित होता है?',
      en: 'From which gland is the hormone Insulin secreted to regulate blood sugar levels in the human body?'
    },
    options: {
      hi: ['यकृत (Liver)', 'अग्न्याशय (Pancreas)', 'थायराइड ग्रंथि', 'पीयूष ग्रंथि'],
      en: ['Liver', 'Pancreas', 'Thyroid gland', 'Pituitary gland']
    },
    answer: 1,
    explanation: {
      hi: 'अग्न्याशय (Pancreas) की लैंगरहैंस द्वीपिकाओं की बीटा-कोशिकाओं से इंसुलिन हार्मोन स्रावित होता है। इसकी कमी से मधुमेह (Diabetes Mellitus) रोग होता है।',
      en: 'Insulin is produced by the beta cells of the Islets of Langerhans in the pancreas.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-033',
    subject: 'science',
    topic: 'अन्तःस्रावी ग्रंथि - मास्टर ग्रंथि',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मानव शरीर की किस अन्तःस्रावी ग्रंथि को मास्टर ग्रंथि (Master Gland) कहा जाता है?',
      en: 'Which endocrine gland in the human body is referred to as the Master Gland?'
    },
    options: {
      hi: ['थायराइड ग्रंथि (Thyroid)', 'पीयूष ग्रंथि (Pituitary Gland)', 'अधिवृक्क ग्रंथि (Adrenal Gland)', 'अग्न्याशय (Pancreas)'],
      en: ['Thyroid gland', 'Pituitary gland', 'Adrenal gland', 'Pancreas']
    },
    answer: 1,
    explanation: {
      hi: 'पीयूष ग्रंथि (Pituitary Gland) हाइपोथैलेमस के नीचे स्थित होती है और अन्य अधिकांश अन्तःस्रावी ग्रंथियों के हार्मोन स्रावण को नियंत्रित करती है, इसलिए इसे मास्टर ग्रंथि कहते हैं।',
      en: 'The Pituitary gland is called the Master Gland because its hormones regulate the activity of other endocrine glands.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-034',
    subject: 'science',
    topic: 'कोशिका विज्ञान - कोशिकांग',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'कोशिका का पावरहाउस या ऊर्जा गृह किस कोशिकांग को कहा जाता है?',
      en: 'Which organelle is called the Powerhouse of the cell?'
    },
    options: {
      hi: ['राइबोसोम (Ribosome)', 'लाइसोसोम (Lysosome)', 'माइटोकॉन्ड्रिया (Mitochondrion)', 'गॉल्जीकाय (Golgi apparatus)'],
      en: ['Ribosome', 'Lysosome', 'Mitochondria', 'Golgi apparatus']
    },
    answer: 2,
    explanation: {
      hi: 'माइटोकॉन्ड्रिया में कोशिकीय श्वसन द्वारा ATP (एडेनोसिन ट्राइफॉस्फेट) के रूप में ऊर्जा बनती और संचित होती है, इसलिए इसे कोशिका का पावरहाउस कहते हैं।',
      en: 'Mitochondria generate energy currency in the form of ATP through cellular respiration, earning the title powerhouse of the cell.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-035',
    subject: 'science',
    topic: 'पादप एवं जंतु कोशिका में अंतर',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'निम्नलिखित में से कौन-सी संरचना केवल पादप कोशिका में पाई जाती है, जंतु कोशिका में नहीं?',
      en: 'Which of the following structures is present only in plant cells and not in animal cells?'
    },
    options: {
      hi: ['कोशिका झिल्ली (Cell membrane)', 'कोशिका भित्ति (Cell wall)', 'केंद्रक (Nucleus)', 'माइटोकॉन्ड्रिया (Mitochondria)'],
      en: ['Cell membrane', 'Cell wall', 'Nucleus', 'Mitochondria']
    },
    answer: 1,
    explanation: {
      hi: 'पादप कोशिकाओं के चारों ओर सेल्यूलोज की बनी एक दृढ़ बाहरी परत होती है जिसे कोशिका भित्ति (Cell Wall) कहते हैं। जंतु कोशिकाओं में बाहरी आवरण केवल कोशिका झिल्ली होती है।',
      en: 'A rigid cellulose cell wall surrounds the cell membrane in plant cells but is absent in animal cells.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-036',
    subject: 'science',
    topic: 'पोषण एवं विटामिन - स्कर्वी',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'स्कर्वी (Scurvy) रोग किस विटामिन की कमी के कारण होता है?',
      en: 'Scurvy disease is caused by the deficiency of which vitamin?'
    },
    options: {
      hi: ['विटामिन A', 'विटामिन B1', 'विटामिन C', 'विटामिन D'],
      en: ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin D']
    },
    answer: 2,
    explanation: {
      hi: 'विटामिन C (एस्कॉर्बिक एसिड) की कमी से स्कर्वी रोग होता है जिसमें मसूड़ों से खून आता है और घाव भरने में समय लगता है। आँवला, नींबू और खट्टे फल इसके प्रमुख स्रोत हैं।',
      en: 'Scurvy is caused by Vitamin C deficiency and leads to bleeding gums, skin spots, and weak connective tissues.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-037',
    subject: 'science',
    topic: 'पोषण एवं विटामिन - रतौंधी',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'रतौंधी (Night Blindness) किस विटामिन की कमी के कारण होती है?',
      en: 'Night Blindness is caused by the deficiency of which vitamin?'
    },
    options: {
      hi: ['विटामिन A (रेटिनॉल)', 'विटामिन B12 (कोबालमिन)', 'विटामिन C (एस्कॉर्बिक अम्ल)', 'विटामिन K (फिलोक्विनोन)'],
      en: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin K']
    },
    answer: 0,
    explanation: {
      hi: 'विटामिन A (रेटिनॉल) की कमी से रतौंधी (धीमे प्रकाश में स्पष्ट न दिखना) हो जाती है। गाजर, हरी पत्तेदार सब्जियाँ, दूध और मक्खन इसके अच्छे स्रोत हैं।',
      en: 'Vitamin A deficiency leads to Night Blindness due to impairment in rhodopsin synthesis in the eyes.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-038',
    subject: 'science',
    topic: 'पादप कार्यिकी - प्रकाश संश्लेषण',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'पौधों की पत्तियों में प्रकाश संश्लेषण (Photosynthesis) की क्रिया मुख्य रूप से किस कोशिकांग में होती है?',
      en: 'In which organelle of plant leaf cells does photosynthesis mainly take place?'
    },
    options: {
      hi: ['ल्यूकोप्लास्ट', 'क्लोरोप्लास्ट (हरितलवक)', 'क्रोमोप्लास्ट', 'राइबोसोम'],
      en: ['Leucoplast', 'Chloroplast', 'Chromoplast', 'Ribosome']
    },
    answer: 1,
    explanation: {
      hi: 'क्लोरोप्लास्ट (हरितलवक) में क्लोरोफिल वर्णक पाया जाता है जो सौर ऊर्जा को ग्रहण करके जल और CO₂ से ग्लूकोज तथा O₂ का निर्माण करता है।',
      en: 'Chloroplasts contain chlorophyll pigments that trap solar energy to convert CO2 and water into glucose and oxygen.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-039',
    subject: 'science',
    topic: 'पादप ऊतक - जाइलम और फ्लोएम',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'पौधों में जड़ों द्वारा अवशोषित जल एवं खनिज लवणों का ऊपर पत्तियों तक संवहन किस ऊतक द्वारा होता है?',
      en: 'Which plant tissue transports water and minerals absorbed by roots upwards to the leaves?'
    },
    options: {
      hi: ['जाइलम (Xylem)', 'फ्लोएम (Phloem)', 'पैरेंकाइमा (Parenchyma)', 'स्क्लेरेंकाइमा (Sclerenchyma)'],
      en: ['Xylem', 'Phloem', 'Parenchyma', 'Sclerenchyma']
    },
    answer: 0,
    explanation: {
      hi: 'जाइलम (Xylem) एक जटिल संवहन ऊतक है जो जल और खनिजों का एकदिशीय (नीचे से ऊपर) परिवहन करता है। फ्लोएम (Phloem) पत्तियों में बने भोजन को पौधे के विभिन्न भागों तक पहुँचाता है।',
      en: 'Xylem transports water and dissolved mineral nutrients unidirectional from roots to leaves.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-040',
    subject: 'science',
    topic: 'पादप हार्मोन - फल पकाना',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'फलों को पकाने में सहायक गैसीय पादप हार्मोन कौन-सा है?',
      en: 'Which gaseous plant hormone is responsible for promoting fruit ripening?'
    },
    options: {
      hi: ['ऑक्सिन (Auxin)', 'जिबरेलिन (Gibberellin)', 'एथिलीन (Ethylene)', 'साइटोकाइनिन (Cytokinin)'],
      en: ['Auxin', 'Gibberellin', 'Ethylene', 'Cytokinin']
    },
    answer: 2,
    explanation: {
      hi: 'एथिलीन (Ethylene - C₂H₄) प्राकृतिक रूप से पाया जाने वाला एकमात्र गैसीय पादप हार्मोन है जो फलों के परिपक्व होने और पकने की क्रिया को तेज करता है।',
      en: 'Ethylene is a unique gaseous phytohormone that regulates and stimulates the natural ripening of fruits.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-041',
    subject: 'science',
    topic: 'मानव रोग - जीवाणुजन्य रोग',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'टाइफाइड और क्षय रोग (Tuberculosis/TB) किस प्रकार के सूक्ष्मजीव के संक्रमण से होते हैं?',
      en: 'Typhoid and Tuberculosis (TB) are caused by infection of which type of microorganism?'
    },
    options: {
      hi: ['विषाणु (Virus)', 'जीवाणु (Bacteria)', 'कवक (Fungus)', 'प्रोटोजोआ (Protozoa)'],
      en: ['Virus', 'Bacteria', 'Fungus', 'Protozoa']
    },
    answer: 1,
    explanation: {
      hi: 'टाइफाइड (साल्मोनेला टाइफी) और टीबी (मायकोबैक्टीरियम ट्यूबरकुलोसिस) दोनों जीवाणुजन्य (Bacterial) रोग हैं। पोलियो व डेंगू विषाणुजन्य हैं।',
      en: 'Typhoid and Tuberculosis are bacterial infections caused by Salmonella typhi and Mycobacterium tuberculosis.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-042',
    subject: 'science',
    topic: 'मानव रोग - मलेरिया वाहक',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मलेरिया रोग फैलाने वाला परजीवी प्लाज्मोडियम किस मच्छर के काटने से मानव शरीर में पहुँचता है?',
      en: 'The malaria parasite Plasmodium is transmitted to human body through the bite of which vector?'
    },
    options: {
      hi: ['मादा एडीज मच्छर (Aedes)', 'मादा एनोफेलीज मच्छर (Anopheles)', 'क्यूलेक्स मच्छर (Culex)', 'घरेलू मक्खी (Housefly)'],
      en: ['Female Aedes mosquito', 'Female Anopheles mosquito', 'Culex mosquito', 'Housefly']
    },
    answer: 1,
    explanation: {
      hi: 'मलेरिया प्रोटोजोआ प्लाज्मोडियम से होता है, जिसका वाहक मादा एनोफेलीज मच्छर है। मादा एडीज मच्छर डेंगू और चिकुनगुनिया का वाहक है।',
      en: 'Malaria is caused by Plasmodium protozoa transmitted by infected female Anopheles mosquitoes.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-043',
    subject: 'science',
    topic: 'आनुवंशिकी के जनक',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'मटर के पौधों पर प्रयोग कर आनुवंशिकी के मूलभूत नियमों का प्रतिपादन करने वाले आनुवंशिकी के जनक कौन हैं?',
      en: 'Who is known as the Father of Genetics for formulating the fundamental laws of inheritance using pea plants?'
    },
    options: {
      hi: ['चार्ल्स डार्विन', 'ग्रेगर जॉन मेंडल', 'जीन बैप्टिस्ट लामार्क', 'रॉबर्ट हुक'],
      en: ['Charles Darwin', 'Gregor Johann Mendel', 'Jean-Baptiste Lamarck', 'Robert Hooke']
    },
    answer: 1,
    explanation: {
      hi: 'ग्रेगर जॉन मेंडल (Gregor Johann Mendel) ने उद्यान मटर (Pisum sativum) पर संकरण प्रयोग करके प्रभाविता, पृथक्करण और स्वतंत्र अपव्यूहन के नियम दिए; इसीलिए उन्हें आनुवंशिकी का जनक कहा जाता है।',
      en: 'Gregor Mendel established the fundamental laws of genetics through hybridization experiments on garden pea plants.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-044',
    subject: 'science',
    topic: 'मानव गुणसूत्र',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'सामान्य मानव की कायिक कोशिका (Somatic cell) में कुल कितने गुणसूत्र (Chromosomes) पाए जाते हैं?',
      en: 'How many chromosomes (or pairs) are present in a normal human somatic cell?'
    },
    options: {
      hi: ['44 (22 जोड़े)', '46 (23 जोड़े)', '48 (24 जोड़े)', '50 (25 जोड़े)'],
      en: ['44 (22 pairs)', '46 (23 pairs)', '48 (24 pairs)', '50 (25 pairs)']
    },
    answer: 1,
    explanation: {
      hi: 'मानव कोशिका के केंद्रक में 46 गुणसूत्र होते हैं जो 23 जोड़ों में विभाजित होते हैं (22 जोड़े अलिंगी गुणसूत्र/ऑटोसोम और 1 जोड़ा लिंग गुणसूत्र XX या XY)।',
      en: 'Human body cells contain 46 chromosomes in 23 pairs (22 pairs of autosomes and 1 pair of sex chromosomes).'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-045',
    subject: 'science',
    topic: 'अंतरिक्ष अनुसंधान - इसरो मुख्यालय',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय किस शहर में स्थित है?',
      en: 'Where is the headquarters of Indian Space Research Organisation (ISRO) located?'
    },
    options: {
      hi: ['नई दिल्ली', 'श्रीहरिकोटा', 'बेंगलुरु', 'तिरुवनंतपुरम'],
      en: ['New Delhi', 'Sriharikota', 'Bengaluru', 'Thiruvananthapuram']
    },
    answer: 2,
    explanation: {
      hi: 'इसरो (ISRO) की स्थापना 15 अगस्त 1969 को हुई थी। इसका मुख्यालय बेंगलुरु, कर्नाटक में स्थित है।',
      en: 'ISRO was established on 15 August 1969 and is headquartered in Bengaluru, Karnataka.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-046',
    subject: 'science',
    topic: 'अंतरिक्ष अनुसंधान - चंद्रयान-3',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'चंद्रयान-3 के विक्रम लैंडर ने चंद्रमा के दक्षिणी ध्रुव पर जिस स्थान पर सॉफ्ट लैंडिंग की, उस स्थान का आधिकारिक नाम क्या रखा गया है?',
      en: 'What is the official name given to the Chandrayaan-3 Vikram lander touchdown site on the Moon\'s south pole?'
    },
    options: {
      hi: ['तिरंगा पॉइंट', 'शिव शक्ति पॉइंट', 'जवाहर पॉइंट', 'शक्ति स्थल'],
      en: ['Tiranga Point', 'Shiv Shakti Point', 'Jawahar Point', 'Shakti Sthal']
    },
    answer: 1,
    explanation: {
      hi: '23 अगस्त 2023 को चंद्रयान-3 के लैंडर ने चंद्रमा के दक्षिणी ध्रुव के पास लैंड किया। उस स्थल का नाम शिव शक्ति पॉइंट (Shiv Shakti Point) रखा गया, तथा 23 अगस्त को राष्ट्रीय अंतरिक्ष दिवस घोषित किया गया।',
      en: 'The touchdown site of Chandrayaan-3 lander on August 23, 2023, was named Shiv Shakti Point by PM Narendra Modi.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-047',
    subject: 'science',
    topic: 'भारतीय उपग्रह - आर्यभट्ट',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: '1975 में भारत द्वारा अंतरिक्ष में प्रक्षेपित पहले कृत्रिम उपग्रह का नाम क्या था?',
      en: 'What was the name of India\'s first artificial satellite launched into space in 1975?'
    },
    options: {
      hi: ['भास्कर-1', 'रोहिणी', 'आर्यभट्ट', 'ऐपलब (APPLE)'],
      en: ['Bhaskara-1', 'Rohini', 'Aryabhata', 'APPLE']
    },
    answer: 2,
    explanation: {
      hi: 'भारत का प्रथम उपग्रह आर्यभट्ट था जिसे 19 अप्रैल 1975 को सोवियत संघ के कपुस्टिन यार से कॉसमॉस-3M रॉकेट द्वारा प्रक्षेपित किया गया था।',
      en: 'Aryabhata was India\'s first satellite, built by ISRO and launched by the Soviet Union on 19 April 1975.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-048',
    subject: 'science',
    topic: 'अंतरिक्ष अनुसंधान - मंगलयान',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'भारत के पहले मंगल ऑर्बिटर मिशन (मंगलयान/MOM) को किस प्रक्षेपण यान द्वारा अंतरिक्ष में भेजा गया था?',
      en: 'Which launch vehicle was used by ISRO to launch India\'s Mars Orbiter Mission (Mangalyaan)?'
    },
    options: {
      hi: ['PSLV-C25', 'GSLV Mk III', 'ASLV-D2', 'SSLV-D1'],
      en: ['PSLV-C25', 'GSLV Mk III', 'ASLV-D2', 'SSLV-D1']
    },
    answer: 0,
    explanation: {
      hi: 'इसरो का मंगलयान (MOM) 5 नवंबर 2013 को श्रीहरिकोटा से PSLV-C25 रॉकेट से सफलतापूर्वक प्रक्षेपित किया गया था, जो सितंबर 2014 में प्रथम प्रयास में ही मंगल की कक्षा में पहुँचा।',
      en: 'India\'s Mars Orbiter Mission (Mangalyaan) was launched on 5 November 2013 using the PSLV-C25 rocket.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-049',
    subject: 'science',
    topic: 'अंतरिक्ष अनुसंधान - आदित्य-L1',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'इसरो द्वारा सूर्य का अध्ययन करने के लिए लैग्रेंज बिंदु-1 (L1) पर भेजे गए भारत के पहले सौर मिशन का नाम क्या है?',
      en: 'What is the name of India\'s first space mission dedicated to studying the Sun at Lagrange Point 1 (L1)?'
    },
    options: {
      hi: ['सूर्य-1', 'आदित्य-L1 (Aditya-L1)', 'हेलीयोस-A', 'सोलर-X'],
      en: ['Surya-1', 'Aditya-L1', 'Helios-A', 'Solar-X']
    },
    answer: 1,
    explanation: {
      hi: 'आदित्य-L1 इसरो का पहला सूर्य अध्ययन मिशन है, जिसे 2 सितंबर 2023 को PSLV-C57 द्वारा लॉन्च किया गया और पृथ्वी-सूर्य के लैग्रेंज बिंदु 1 (L1) के पास हेलो कक्षा में स्थापित किया गया।',
      en: 'Aditya-L1 is India\'s solar observatory mission placed in halo orbit around Sun-Earth Lagrange point 1.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  },
  {
    id: 'sci-050',
    subject: 'science',
    topic: 'अंतरिक्ष अनुसंधान - श्रीहरिकोटा केंद्र',
    origin: 'agent_authored',
    verification: 'VERIFIED_DERIVED',
    q: {
      hi: 'भारत का मुख्य उपग्रह प्रक्षेपण केंद्र सतीश धवन अंतरिक्ष केंद्र (SDSC) कहाँ स्थित है?',
      en: 'Where is India\'s primary satellite launch facility, Satish Dhawan Space Centre (SDSC), situated?'
    },
    options: {
      hi: ['थुम्बा (केरल)', 'श्रीहरिकोटा (आंध्र प्रदेश)', 'व्हीलर द्वीप (ओडिशा)', 'पोखरण (राजस्थान)'],
      en: ['Thumba (Kerala)', 'Sriharikota (Andhra Pradesh)', 'Wheeler Island (Odisha)', 'Pokhran (Rajasthan)']
    },
    answer: 1,
    explanation: {
      hi: 'सतीश धवन अंतरिक्ष केंद्र (SDSC) आंध्र प्रदेश राज्य के श्रीहरिकोटा (नेल्लोर/तिरुपति जिला) में स्थित इसरो का मुख्य उपग्रह व रॉकेट प्रक्षेपण केंद्र है।',
      en: 'Satish Dhawan Space Centre (SDSC) is located at Sriharikota in Andhra Pradesh, acting as ISRO\'s main spaceport.'
    },
    provenance: { source: 'NCERT-level standard science', evidence: 'VERIFIED_DERIVED' }
  }
];
