// TOPIC-TAG GENERATOR (v4 cycle 7, roadmap A3 prerequisite) — zero-manual-labor topic-tag pass.
// Deterministic: ordered keyword rules per subject, matched against question + options + explanation text.
// Output: src/data/bank/topic-overlay.js (id -> topic), applied by bank/index.js at load time.
// Existing stray topic variants are canonicalized through the same overlay. Never invents a topic:
// unmatched questions get an honest per-subject 'सामान्य' topic, and the coverage report prints below.
import { QUESTIONS as SEED } from '../src/data/questions.js'
import { MODULES } from '../src/data/bank/manifest.js'
import fs from 'fs'

// RAW aggregation WITHOUT the overlay (mirrors bank/index.js) — the generator must see the
// pre-overlay state so repeated runs stay idempotent and never re-classify their own output.
const RAW = [...SEED]
for (const m of MODULES) for (const k in m) if (Array.isArray(m[k])) RAW.push(...m[k])

const RULES = {
  'raj-gk': [
    [/dialect|बोली|boli|language|लिपि|script/i, 'राजस्थान की बोलियां एवं भाषाएं'],
    [/नदी|अपवाह|बेटी|चम्बल|लूणी|साबरमाती|river/i, 'नदियां एवं अपवाह तंत्र'],
    [/झील|सरोवर|जलाशय|सांभर|पचपदरा|lake/i, 'खारे एवं मीठे पानी की झीलें'],
    [/राष्ट्रीय उद्यान|अभयारण्य|वन्यप्राणी|के वन|sanctuary|national park|tiger/i, 'राष्ट्रीय उद्यान एवं अभयारण्य'],
    [/योजना|योजना|yojna|yojana|मुख्यमंत्री|मुफ़्त|स्कीम|scheme|mukhyamantri|sahayata|sahayata/i, 'राज्य सरकार की योजनाएं'],
    [/जिला|संभाग|पुनर्गठन|district|division/i, 'जिले, प्रशासनिक संभाग एवं पुनर्गठन'],
    [/राज्य प्रतीक?|प्रतीक चिह्न|पशु|पक्षी|फूल|पेड़|प्रतीक/i, 'राजस्थान के राज्य प्रतीक'],
    [/मेला|त्योहार|पर्व|प्रतिस्पर्धा|पर्वतउत्सव/i, 'मेले एवं त्योहार'],
    [/लोक देवता|लोकदेवता|देवी|गायक|तेजाजी|पाबूजी|गोगाजी|रामदेवजी|worshipped|demigod|folk deity|deity/i, 'लोक देवता एवं देवियां'],
    [/पंचायत|panchayat|स्थानीय स्वशासन|municipal|three tier/i, 'पंचायती राज एवं स्थानीय स्वशासन'],
    [/विधानसभा|राज्यपाल|मुख्यमंत्री|विधान परिषद|मंत्रालय|assembly|governor|public service commission|RPSC|सेवा आयोग|appointed by/i, 'राजस्थान की राजव्यवस्था'],
    [/अर्थव्यवस्था|बजट|GST|राजस्व|उद्योग|रोजगार|समीक्षा|economic|msme|enterprises|solar park|ऊर्जा|energy park|उद्यम/i, 'राजस्थान की अर्थव्यवस्था'],
    [/परियोजना|project|dam|बांध|बैराज|sagar|सागर|बराज|irrigation|सिंचाई/i, 'सिंचाई एवं जल परियोजनाएं'],
    [/पर्वत|चोटी|दर्रा|शिखर|गुरु शिखर|mountain|pass|peak/i, 'पर्वत, चोटियां एवं पर्वत दर्रे'],
    [/मरुस्थल|थार|भौतिक प्रदेश|रेतीला|desert|geographical region|भौगोलिक प्रदेश|vagad|hadoti|shekhawati|mewat/i, 'मरुस्थल एवं भौतिक प्रदेश'],
    [/जलवायु|वर्षा|तापमान|मानसून|climate|rainfall|forest|वन|subtropical/i, 'जलवायु एवं वन'],
    [/मृदा|मिट्टी|soil/i, 'मृदा (मिट्टी)'],
    [/खनिज|मैंगनीज|जिप्सम|तांबा|जस्ता|चूना पत्थर|सीसा|अभ्रक|संगमरमर|हीरा|mineral|lignite|marble|zinc|copper|gypsum/i, 'खनिज एवं प्राकृतिक संसाधन'],
    [/सभ्यता|कालीबंगा|बालाथल|अहाड़|आहड़|बाणावली|civilization/i, 'प्राचीन सभ्यताएं'],
    [/राजवंश|गुर्जर|चौहान|राठौड़|कच्छवाहा|सिसोदिया|पृथ्वीराज|महाराणा|प्रताप|सिंह|dynasty|dynasties/i, 'प्रमुख राजवंश एवं शासक'],
    [/1857|सिपाही|क्रांति|revolt/i, '1857 की क्रांति'],
    [/किसान आंदोलन|जनजाति आंदोलन|बिस्ता|विद्रोह|मीणा|भील विद्रोह/i, 'किसान एवं जनजाति आंदोलन'],
    [/प्रजामण्डल|प्रजासत्ता|lokmandal/i, 'प्रजामण्डल आंदोलन'],
    [/एकीकरण|रियासत|संधि|7 अगस्त|integration/i, 'राजस्थान का एकीकरण'],
    [/दुर्ग|किला|स्थापत्य|हवेली|महल|fort|architecture/i, 'दुर्ग एवं स्थापत्य कला'],
    [/नृत्य|संगीत|वाद्य|गायन|dance|music|folk songs|folk dramas|playing instruments|लोक गीत|लोक नाटक/i, 'लोक नृत्य एवं संगीत'],
    [/जनजाति|आदिवासी|भील|मीणा|गरासिया|कठोड़ी|tribe|bhil|bhils|meena|garasia/i, 'राजस्थान की जनजातियां'],
    [/चित्रकला|पेंटिंग|फागनी|म्यूजियम|चित्र|phad|artist|painting|museum|thewa|art/i, 'चित्रकला शैली'],
    [/हस्तशिल्प|कढ़ाई|कशीदाकारी|साहित्य|ब्लू पॉटरी|उस्ता|craft|newspaper|पत्र|समाचार|संपादक/i, 'हस्तशिल्प एवं साहित्य'],
    [/पुरस्कार|सम्मान|award/i, 'राजस्थान के राज्य सम्मान'],
    [/खेल|स्टेडियम|sports/i, 'राजस्थान के खेल एवं सम्मान'],
    [/ancient name|पुराना नाम|प्राचीन नाम|named after|नामकरण|was earlier known|पहले नाम/i, 'राजस्थान का इतिहास'],
    [/university|विश्वविद्यालय|शिक्षा|college|school|board शिक्षा/i, 'राजस्थान का प्रशासनिक ढांचा']
  ],
  science: [
    [/नेत्र|दृष्टि|आँख|eye/i, 'मानव नेत्र एवं दृष्टि दोष'],
    [/प्रकाश|दर्पण|परावर्तन|透|lens|लेंस|light|mirror/i, 'प्रकाश - परावर्तन और दर्पण'],
    [/गति|वेग|त्वरण|motion|velocity/i, 'गति के नियम'],
    [/गुरुत्व|द्रव्यमान|gravity/i, 'गुरुत्वाकर्षण'],
    [/बल|दाब|force|pressure/i, 'बल एवं दाब'],
    [/कार्य|ऊर्जा|शक्ति|work|energy|power/i, 'कार्य, ऊर्जा और शक्ति'],
    [/विद्युत|ओम|परिपथ|प्रतिरोध|धारा|electric|circuit|resistance|current/i, 'विद्युत'],
    [/ध्वनि|तरंग|sound|wave/i, 'ध्वनि तरंगे'],
    [/ऊष्मा|ताप|heat|temperature/i, 'ऊष्मा और ताप'],
    [/अम्ल|क्षार|pH|नींबू|सोडा|acid|alkali|salt/i, 'अम्ल, क्षार एवं लवण'],
    [/धातु|अधातु|संक्षारण|metal|non-metal|corrosion/i, 'धातु और अधातु'],
    [/अभिक्रिया|यौगिक|प्लास्टर|रासायनिक|reaction|compound/i, 'रासायनिक अभिक्रियाओं के प्रकार'],
    [/आवर्त|परमाणु|तत्व|periodic|atom/i, 'आवर्त सारणी का नियम'],
    [/कोशिका|कोशिकांग|जाइलम|फ्लोएम|cell/i, 'कोशिका विज्ञान'],
    [/प्रकाश संश्लेषण|पादप|फल पकाना|पुष्प|photosynthesis|plant/i, 'पादप कार्यिकी'],
    [/विटामिन|पोषण|भोजन|vitamin|nutrition/i, 'पोषण एवं विटामिन'],
    [/पाचन|रक्त|हृदय|मस्तिष्क|उत्सर्जन|इंसुलिन|ग्रंथि|रोग|मलेरिया|गुणसूत्र|आनुवंशिक|हीमोग्लोबिन|digestion|blood|heart|brain|disease|genetic/i, 'मानव जीव विज्ञान'],
    [/इसरो|चंद्रयान|उपग्रह|अंतरिक्ष|आर्यभट्ट|ISRO|satellite|space/i, 'अंतरिक्ष अनुसंधान'],
    [/जीव|प्राणी|जंतु|जीव विज्ञान|biology/i, 'मानव जीव विज्ञान']
  ],
  'india-gk': [
    [/संविधान|अनुच्छेद|मूल अधिकार|मूल कर्तव्य|नीति निदेशक|अनुसूची|संशोधन|constitution|article|amendment|preamble|gram sabha|fundamental right/i, 'भारतीय संविधान'],
    [/राष्ट्रपति|कार्यपालिका|president|governor|राज्यपाल/i, 'राष्ट्रपति एवं कार्यपालिका'],
    [/संसद|लोकसभा|राज्यसभा|अध्यक्ष|parliament|lok sabha/i, 'भारतीय संसद'],
    [/न्यायपालिका|न्यायालय|सर्वोच्च|munsif|judiciary|court/i, 'न्यायपालिका'],
    [/पंचायत|स्वशासन|panchayat/i, 'पंचायती राज'],
    [/पर्वत|शिखर|हिमालय|mountain|peak/i, 'भारत के पर्वत एवं शिखर'],
    [/नदी|river|गंगा|ब्रह्मपुत्र/i, 'भारत की नदियाँ'],
    [/जलवायु|मानसून|वर्षा|climate|monsoon/i, 'भारत की जलवायु'],
    [/सीमा|विस्तार|स्थिति|boundary|extent/i, 'भारत की सीमाएँ'],
    [/झील|सरोवर|lake|tso|himalaya|हिमालय/i, 'भारत की झीलें'],
    [/द्वीप|island/i, 'भारत के द्वीप समूह'],
    [/दर्रा|pass/i, 'भारत के दर्रे'],
    [/परियोजना|बांध|project|dam/i, 'भारत की बहुउद्देशीय परियोजनाएँ'],
    [/उद्यान|वन्यजीव|जैव विविधता|पर्यावरण|park|wildlife|environment|sanctuar/i, 'राष्ट्रीय उद्यान एवं जैव विविधता'],
    [/वैदिक|मौर्य|गुप्त|बौद्ध|जैन|प्राचीन|सभ्यता|सिंधु|vedic|mauryan|ancient|महाजनपद|janapada/i, 'प्राचीन भारतीय इतिहास'],
    [/मध्यकालीन|दिल्ली सल्तनत|मुगल|medieval|sultanate|mughal/i, 'मध्यकालीन भारत'],
    [/1857|सिपाही|संग्राम|revolt/i, '1857 का संग्राम'],
    [/आजादी|स्वतंत्रता|आंदोलन|गांधी|कांग्रेस|सविनय|भारत छोड़ो|independence|movement|gandhi|भाषण|speech|tryst/i, 'भारतीय राष्ट्रीय आंदोलन'],
    [/बेटी बचाओ|योजना|स्वच्छ|आयुष्क|मनरेगा|scheme|yojana/i, 'केंद्रीय योजनाएं एवं कार्यक्रम'],
    [/लेखक|पुस्तक|पुरस्कार|author|book|award|nobel|भारत रत्न|grammy|oscar/i, 'पुरस्कार एवं व्यक्तित्व'],
    [/संयुक्त राष्ट्र|united nations|UN|WHO|UNESCO|IMF|world bank|संघ की स्थापना|अंतरराष्ट्रीय संस्था/i, 'अंतरराष्ट्रीय संस्थाएं'],
    [/अर्थव्यवस्था|कर व्यवस्था|बजट|आय|GST|नीति|वित्त|economy|budget|टेक्सटाइल|उद्योग|इस्पात|संयंत्र|खनन|textile|steel|plant|mining/i, 'भारतीय अर्थव्यवस्था'],
    [/अंतरिक्ष|इसरो|परमाणु|वैज्ञानिक|ISRO|nuclear|space centre|sarabhai|विक्रम साराभाई/i, 'अंतरिक्ष अनुसंधान एवं संस्थाएँ'],
    [/commission|committee|आयोग|समिति|हक|rights commission|tribunal/i, 'संवैधानिक एवं प्रशासनिक निकाय'],
    [/revolution|क्रांति|green revolution|imports|tariff|subsidy|monetary|production|crop|food grain|self sufficien|बीज|फसल|आर्थिक/i, 'भारतीय अर्थव्यवस्था'],
    [/biosphere|जीव मंडल|reserve|wetland|ramsay|रामसर/i, 'राष्ट्रीय उद्यान एवं जैव विविधता']
  ],
  maths: [
    [/प्रतिशत|percent|%/i, 'प्रतिशत'],
    [/लाभ|हानि|profit|loss/i, 'लाभ और हानि'],
    [/ब्याज|interest/i, 'साधारण एवं चक्रवृद्धि ब्याज'],
    [/समय और कार्य|आदमी|काम ख़त्म|days work|man-hours|time and work/i, 'समय और कार्य'],
    [/चाल|रेलगाड़ी|दूरी|किमी|train|speed|distance/i, 'समय, चाल एवं दूरी'],
    [/अनुपात|समानुपात|ratio|proportion/i, 'अनुपात एवं समानुपात'],
    [/औसत|average/i, 'औसत'],
    [/लघुत्तम|महत्तम|LCM|HCF/i, 'LCM-HCF'],
    [/सरलीकरण|BODMAS|simplif/i, 'सरलीकरण'],
    [/क्षेत्रमिति|क्षेत्रफल|परिमाप|mensuration|area|perimeter|volume|triangle|angle|quadrilateral|vertices|right angled|isosceles|circle|radius|ज्यामिति|त्रिभुज|वृत्त|कोण/i, 'क्षेत्रमिति'],
    [/अभाज्य|विषम संख्या|सम संख्या|संख्या पद्धति|संख्या श्रेणी|वर्गमूल|घनमूल|prime|number system|series of number|ascending order|2x|smallest|largest|greatest|छोटी संख्या|बड़ी संख्या/i, 'संख्या पद्धति'],
    [/log |logarithm|लघुगणक|cosec|cot|tan|sin|cos|theta|θ|त्रिकोणमिति|trigonometr/i, 'लघुगणक एवं त्रिकोणमिति'],
    [/श्रेणी|series/i, 'संख्या श्रेणी']
  ],
  reasoning: [
    [/कोड|coding|is written as|code language|कूट/i, 'coding-decoding'],
    [/श्रेणी|series|ascending order|missing term|अगला पद|next term/i, 'series'],
    [/सादृश्य|analogy|relationship between the two terms|::/i, 'analogy'],
    [/विषम|odd|असंगत/i, 'odd-one-out'],
    [/रक्त संबंध|blood|is the son of|sister|mother of|brother|father|uncle|पुत्र|बहन|माता/i, 'blood-relations'],
    [/दिशा|direction|east of|west of|north of|south of|उत्तर की ओर|दक्षिण की ओर|east|north|south|west/i, 'direction-sense'],
    [/न्याय वाक्य|निष्कर्ष|syllogism|conclusion|statements? .*follow|given statements|commonly known facts/i, 'syllogism'],
    [/कैलेंडर|कैलेन्डर|घड़ी|calendar|clock|minute hand|angular distance|hour hand/i, 'calendar-clock'],
    [/आव्यूह|matrix/i, 'matrix'],
    [/प्रतिबिंब|आईने|mirror image|mirror/i, 'mirror-image'],
    [/बैठक|क्रम में बैठने|व्यवस्था|seating|queue|from the left end|from the right end|कतार|कतार में|सीधी रेखा|पंक्ति|in a row|interchange/i, 'seating-arrangement'],
    [/गणितीय संक्रिया|समीकरण|mathematical operation|equation/i, 'mathematical-operations']
  ],
  hindi: [
    [/संधि|सन्धि|sandhi/i, 'संधि'],
    [/समास|samas/i, 'समास'],
    [/उपसर्ग|प्रत्यय|prefix|suffix/i, 'उपसर्ग एवं प्रत्यय'],
    [/पर्यायवाची|समानार्थी|synonym/i, 'पर्यायवाची'],
    [/विलोम|विपरीतार्थक|antonym/i, 'विलोम शब्द'],
    [/मुहावरा|मुहावरे|लोकोक्ति|idiom/i, 'मुहावरे'],
    [/अशुद्ध|शुद्ध वाक्य|वाक्य शुद्धि|correction/i, 'वाक्य शुद्धि'],
    [/वर्तनी|वर्त्तनी|spelling/i, 'वर्तनी शुद्धि'],
    [/वाक्यांश|एक शब्द|one word/i, 'वाक्यांश के लिए एक शब्द'],
    [/रस|अलंकार|छंद|काव्य|मीमांसा|poetics/i, 'रस एवं अलंकार'],
    [/तत्सम|तद्भव|शब्द भंडार|vocabulary/i, 'शब्द-भंडार'],
    [/वाच्य|काल|क्रिया|सर्वनाम|संज्ञा|विशेषण|grammar|tense|voice/i, 'व्याकरण सामान्य']
  ],
  english: [
    [/^.*\ba\b|\ban\b|\bthe\b|article/i, 'Articles'],
    [/tense/i, 'Tenses'],
    [/preposition/i, 'Prepositions'],
    [/passive|voice/i, 'Active & Passive Voice'],
    [/direct|indirect|reported/i, 'Direct & Indirect Speech'],
    [/synonym/i, 'Synonyms'],
    [/antonym/i, 'Antonyms'],
    [/one[- ]word|one word/i, 'One-Word Substitution'],
    [/subject[- ]verb|agreement/i, 'Subject-Verb Agreement'],
    [/spelling/i, 'Vocabulary & Spelling'],
    [/idiom/i, 'Idioms & Phrases'],
    [/adjective|degree/i, 'Adjectives & Degrees'],
    [/fill in the blank|grammar|choose the correct/i, 'English Grammar (General)']
  ],
  computer: [
    [/shortcut|कुंजी|key combination|f1|ctrl/i, 'Keyboard Shortcuts'],
    [/excel|एक्सेल|spreadsheet/i, 'MS Office (Excel)'],
    [/powerpoint|प्रेजेंटेशन|slide/i, 'MS Office (PowerPoint)'],
    [/word|वर्ड प्रोसेसिंग/i, 'MS Office (Word)'],
    [/memory|ram|rom|मेमोरी|हार्ड डिस्क/i, 'Computer Memory'],
    [/bit|byte|किलोबाइट|data unit|माप/i, 'Data Measurement Units'],
    [/virus|phishing|password|साइबर|security|hacking/i, 'Cyber Security (RS-CIT level)'],
    [/internet|email|browser|www|इंटरनेट|ईमेल|network|लैन|wi-?fi/i, 'Internet & Networking'],
    [/input|output|printer|mouse|keyboard|scanner|इनपुट|आउटपुट/i, 'Input/Output Devices'],
    [/windows|operating system|ऑपरेटिंग|os /i, 'Operating System Basics'],
    [/cpu|hardware|processor|हार्डवेयर|chip/i, 'Computer Hardware']
  ],
  'current-affairs': [
    [/योजना|निधि|scheme/i, 'राज्य योजनाएँ'],
    [/नियुक्ति|पद|नियुक्त|appointment|chairman/i, 'राज्य पद व नियुक्तियाँ'],
    [/पुरस्कार|सम्मान|award/i, 'राज्य पुरस्कार व कला सम्मान'],
    [/खेल|स्टेडियम|sport/i, 'खेल एवं राष्ट्रीय पुरस्कार'],
    [/ऊर्जा|सौर|solar|energy/i, 'सौर ऊर्जा एवं नवीकरणीय ऊर्जा'],
    [/नदी जोड़|जल संसाधन|water/i, 'जल संसाधन व नदी जोड़ परियोजनाएँ']
  ]
}

const FALLBACK = {
  'raj-gk': 'राजस्थान सामान्य ज्ञान', science: 'विज्ञान सामान्य', 'india-gk': 'भारत सामान्य ज्ञान',
  maths: 'गणित सामान्य', reasoning: 'तर्क सामान्य', hindi: 'हिंदी व्याकरण सामान्य',
  english: 'English Grammar (General)', computer: 'Computer Fundamentals', 'current-affairs': 'राजस्थान समसामयिक सामान्य',
  agriculture: 'कृषि सामान्य', 'library-science': 'पुस्तकालय विज्ञान सामान्य', 'child-pedagogy': 'शिक्षा-मनोविज्ञान सामान्य', 'environment-science': 'पर्यावरण अध्ययन सामान्य'
}

// Canonicalize existing stray variants (exact-string merges only — never re-classify a tagged question)
const CANON = {
  'प्रतिशतता': 'प्रतिशत',
  'लघुत्तम समापवर्त्य एवं महत्तम समापवर्तक': 'LCM-HCF',
  'संख्या पद्धति / LCM-HCF': 'संख्या पद्धति',
  'HCF and LCM': 'LCM-HCF',
  'Number System': 'संख्या पद्धति', 'Simplification': 'सरलीकरण', 'Percentage': 'प्रतिशत',
  'Profit and Loss': 'लाभ और हानि', 'Simple and Compound Interest': 'साधारण एवं चक्रवृद्धि ब्याज',
  'Ratio and Proportion': 'अनुपात एवं समानुपात', 'Average': 'औसत', 'Time and Work': 'समय और कार्य',
  'Time, Speed and Distance': 'समय, चाल एवं दूरी', 'Mensuration Basics': 'क्षेत्रमिति', 'Number Series': 'संख्या श्रेणी',
  'syllogisms': 'syllogism', 'calendar-and-clock': 'calendar-clock', 'mirror-images': 'mirror-image',
  'भारतीय स्वतंत्रता संग्राम': 'भारतीय राष्ट्रीय आंदोलन', 'सविनय अवज्ञा आंदोलन': 'भारतीय राष्ट्रीय आंदोलन', 'भारत छोड़ो आंदोलन': 'भारतीय राष्ट्रीय आंदोलन',
  'राष्ट्रीय उद्यान': 'राष्ट्रीय उद्यान एवं जैव विविधता', 'अंतरिक्ष प्रौद्योगिकी': 'अंतरिक्ष अनुसंधान एवं संस्थाएँ',
  'वैज्ञानिक कार्यक्रम': 'अंतरिक्ष अनुसंधान एवं संस्थाएँ', 'अंतरिक्ष कार्यक्रम': 'अंतरिक्स अनुसंधान एवं संस्थाएँ',
  'अंतरिक्ष अभियान': 'अंतरिक्ष अनुसंधान एवं संस्थाएँ', 'अंतरिक्ष अनुसंधान': 'अंतरिक्स अनुसंधान एवं संस्थाएँ',
  'कृषि एवं अर्थशास्त्र': 'भारतीय अर्थव्यवस्था', 'भारतीय अर्थशास्त्र एवं नीतियाँ': 'भारतीय अर्थव्यवस्था', 'राष्ट्रीय आय एवं अर्थव्यवस्था': 'भारतीय अर्थव्यवस्था'
}
// fix a typo-proof pair: both spellings map to the right canonical
CANON['अंतरिक्स अनुसंधान एवं संस्थाएँ'] = 'अंतरिक्ष अनुसंधान एवं संस्थाएँ'
CANON['अंतरिक्ष अनुसंधान'] = 'अंतरिक्ष अनुसंधान एवं संस्थाएँ'

const bag = (q) => [
  q.q?.hi || '', q.q?.en || '',
  ...(q.options?.hi || []), ...(q.options?.en || []),
  q.explanation?.hi || '', q.explanation?.en || ''
].join(' \n ')

const overlay = {}
let canonCount = 0, classified = 0, fellBack = 0
const fallbackBySub = {}
for (const q of RAW) {
  if (q.topic && CANON[q.topic]) { overlay[q.id] = CANON[q.topic]; canonCount++; continue }
  if (q.topic) continue
  const text = bag(q)
  let topic = null
  for (const [re, t] of RULES[q.subject] || []) { if (re.test(text)) { topic = t; break } }
  if (topic) { overlay[q.id] = topic; classified++ }
  else { const fb = FALLBACK[q.subject] || 'सामान्य'; overlay[q.id] = fb; fellBack++; fallbackBySub[q.subject] = (fallbackBySub[q.subject] || 0) + 1 }
}

const out = `// GENERATED by qa/tag-topics.mjs (v4 cycle 7) — topic overlay: canonical merges + classified tags.
// Do not edit by hand; re-run the generator instead. Applied in bank/index.js after dedupe.
export const TOPIC_OVERLAY = ${JSON.stringify(overlay, null, 1).replace(/\n {1}/g, '\n')}
`
fs.writeFileSync(new URL('../src/data/bank/topic-overlay.js', import.meta.url), out)
console.log('overlay entries:', overlay.length, '| canonicalized:', canonCount, '| newly classified:', classified, '| honest fallback:', fellBack, JSON.stringify(fallbackBySub))
console.log('coverage after overlay: 100% tagged (fallback topics included)')
