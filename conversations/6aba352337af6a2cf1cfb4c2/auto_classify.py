import json, re

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json') as f:
    data = json.load(f)

slice_data = data[450:632]

def classify_item(item, idx):
    q = item.get('q', '')
    opts = item.get('opts', [])
    full = f"{q} {' '.join(opts)}"
    
    # Check reasoning patterns
    reasoning_regexes = [
        r'अक्षर समूह', r'शृंखला', r'श्रृंखला', r'असंगत', r'भिन्न अक्षर', r'विषम अक्षर',
        r'सादृश्यता', r'कूटबद्ध', r'कोडिंग', r'कोडित', r'रक्त संबंध', r'कथन और निष्कर्ष',
        r'कथन और तर्क', r'वेन आरेख', r'दर्पण', r'प्रतिबिम्ब', r'प्रतिबिंब', r'कागज',
        r'त्रिभुजों की संख्या', r'त्रिभुज हैं', r'वर्गों की संख्या', r'बैठक व्यवस्था',
        r'पंक्ति में', r'दाएँ', r'बाएँ', r'प्रश्नचिह्न', r'प्रश्न चिह्न', r'लुप्त पद',
        r'गणितीय चिह्नों', r'चिह्नों को परस्पर', r'गणितीय चिन्ह', r'दिशा', r'उत्तर की ओर',
        r'दक्षिण की ओर', r'पूर्व की ओर', r'पश्चिम की ओर', r'समान संबंध', r'वही संबंध',
        r'अनुक्रम', r'पैटर्न', r'आकृति'
    ]
    
    # Check computer patterns
    computer_regexes = [
        r'ms[\s\-_]?word', r'ms[\s\-_]?excel', r'powerpoint', r'ms[\s\-_]?office',
        r'ctrl', r'shift', r'alt', r'shortcut', r'कंप्यूटर', r'कम्प्यूटर',
        r'ऑपरेटिंग सिस्टम', r'सॉफ्टवेयर', r'हार्डवेयर', r'इंटरनेट', r'इन्टरनेट',
        r'ब्राउज़र', r'ब्राउजर', r'कीबोर्ड', r'माउस', r'प्रिंटर', r'मॉनिटर',
        r'इनपुट', r'आउटपुट', r'सीपीयू', r'\bcpu\b', r'\bram\b', r'\brom\b',
        r'जीयूआई', r'\bgui\b', r'ip\s*address', r'url', r'http', r'\bf[1-9]\b', r'\bf1[0-2]\b',
        r'विंडोज', r'windows', r'फ़ाइल', r'फाइल', r'स्टोरेज', r'मेमोरी', r'बाईट', r'बाइट',
        r'केबी', r'एमबी', r'जीबी', r'टीबी', r'प्रोंप्ट', r'कमांड', r'फ़ोल्डर', r'फोल्डर',
        r'ई-मेल', r'ईमेल', r'इमेल', r'वेब'
    ]
    
    # Check maths patterns
    maths_regexes = [
        r'प्रतिशत', r'लाभ', r'हानि', r'औसत', r'साधारण ब्याज', r'चक्रवृद्धि ब्याज',
        r'अनुपात', r'समानुपात', r'क्रय मूल्य', r'विक्रय मूल्य', r'क्षेत्रफल', r'परिमाप',
        r'आयतन', r'त्रिज्या', r'व्यास', r'द्विघात समीकरण', r'वर्गमूल', r'घनमूल',
        r'लघुत्तम', r'महत्तम'
    ]
    
    # Check hindi patterns
    hindi_regexes = [
        r'पर्यायवाची', r'विलोम', r'उपसर्ग', r'प्रत्यय', r'संधि', r'समास', r'मुहावरा',
        r'लोकोक्ति', r'तत्सम', r'तद्भव', r'शुद्ध शब्द', r'अशुद्ध', r'वाक्यांश', r'व्याकरण',
        r'समानार्थी', r'विपरितार्थी', r'अनेक शब्द'
    ]
    
    # Check science patterns
    science_regexes = [
        r'प्रकाश', r'ध्वनि', r'विद्युत', r'चुम्बक', r'न्यूटन', r'अम्ल', r'क्षार', r'लवण',
        r'आवर्त सारणी', r'कोशिका', r'डीएनए', r'आरएनए', r'विटामिन', r'रोग', r'जीवाणु',
        r'विषाणु', r'हार्मोन', r'पाचन', r'श्वसन', r'उत्सर्जन', r'हृदय', r'पारिस्थितिकी',
        r'ओजोन', r'प्रकाश संश्लेषण', r'रसायन', r'भौतिक', r'परमाणु', r'इलेक्ट्रॉन',
        r'प्रोटॉन', r'न्यूट्रॉन', r'गैस', r'तापमान', r'ऊष्मा', r'तरंग'
    ]
    
    # Check Rajasthan GK patterns
    raj_regexes = [
        r'राजस्थान', r'जयपुर', r'जोधपुर', r'उदयपुर', r'बीकानेर', r'अजमेर', r'कोटा',
        r'मेवाड़', r'मेवाड', r'मारवाड़', r'मारवाड', r'आमेर', r'रणथम्भौर', r'रणथंभौर',
        r'अरावली', r'थार', r'सांबर', r'सांभर', r'बनास', r'लूणी', r'कालीसिंध', r'बाणगंगा',
        r'कुंभा', r'सांगा', r'प्रताप', r'मानसिंह', r'बिजोलिया', r'बेगूं', r'प्रजामंडल',
        r'एकीकरण', r'शेखावाटी', r'हाड़ौती', r'जैसलमेर', r'बाड़मेर', r'सिरोही', r'झालावाड़',
        r'चित्तौड़', r'अलवर', r'भरतपुर', r'दौसा', r'पाली', r'नागौर', r'चूरू', r'झुंझुनूं',
        r'सीकर', r'भीलवाड़ा', r'बांसवाड़ा', r'डूंगरपुर', r'प्रतापगढ़', r'राजसमंद', r'करौली',
        r'धौलपुर', r'सवाई माधोपुर', r'हनुमानगढ़', r'श्रीगंगानगर', r'टोंक', r'बूंदी',
        r'बारां', r'जालौर', r'खेड़', r'मंडोर', r'तराइन', r'हल्दीघाटी', r'खानवा',
        r'सरिस्का', r'केवलादेव', r'मुकुंदरा', r'राष्ट्रीय मरू उद्यान', r'तेजाजी',
        r'पाबूजी', r'रामदेवजी', r'गोगाजी', r'मल्लीनाथ', r'घूमर', r'कालबेलिया',
        r'अग्नि नृत्य', r'गीदड़', r'गैर', r'चरी', r'ढोल नृत्य', r'फड़', r'ऊंट', r'राजस्थानी'
    ]
    
    # Check India GK patterns
    india_regexes = [
        r'संविधान', r'अनुच्छेद', r'राष्ट्रपति', r'प्रधानमंत्री', r'लोकसभा', r'राज्यसभा',
        r'उच्चतम न्यायालय', r'सर्वोच्च न्यायालय', r'मौलिक अधिकार', r'नीति निदेशक',
        r'मौर्य', r'गुप्त', r'मुगल', r'मुग़ल', r'अकबर', r'बाबर', r'शाहजहाँ', r'हुमायूँ',
        r'शेरशाह', r'हड़प्पा', r'सिंधु घाटी', r'सत्याग्रह', r'गांधी', r'कांग्रेस',
        r'गवर्नर जनरल', r'वायसराय', r'हिमालय', r'गंगा', r'यमुना', r'ब्रह्मपुत्र',
        r'गोदावरी', r'कृष्णा', r'कावेरी', r'नर्मदा', r'ताप्ती', r'मानसून', r'जनगणना',
        r'नीति आयोग', r'रिजर्व बैंक', r'इलाहाबाद', r'दिल्ली', r'बंगाल', r'मराठा',
        r'विजयनगर', r'चोल', r'पल्लव', r'सुल्तान', r'सल्तनत', r'भक्ति आंदोलन'
    ]
    
    scores = {
        'reasoning': 0,
        'computer': 0,
        'maths': 0,
        'hindi': 0,
        'science': 0,
        'raj-gk': 0,
        'india-gk': 0
    }
    
    for pat in reasoning_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['reasoning'] += 2
    for pat in computer_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['computer'] += 2
    for pat in maths_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['maths'] += 2
    for pat in hindi_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['hindi'] += 2
    for pat in science_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['science'] += 2
    for pat in raj_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['raj-gk'] += 2
    for pat in india_regexes:
        if re.search(pat, full, re.IGNORECASE):
            scores['india-gk'] += 2

    # Special logic overrides based on strict patterns
    # e.g. mathematical equation balancing like 20 - 4 x 3 / 8 = 12 is reasoning in competitive exams (mathematical operations / BODMAS symbol swapping)
    if 'चिह्नों को परस्पर बदलने' in full or 'गणितीय चिह्नों' in full or ('+' in full and '-' in full and '×' in full and '÷' in full and 'बराबर' not in full):
        scores['reasoning'] += 5
        
    sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    best_cat, best_score = sorted_scores[0]
    second_cat, second_score = sorted_scores[1]
    
    return best_cat, best_score, second_cat, second_score, scores

print("Classifier script ready.")
