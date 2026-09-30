import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)[0:230]

hindi_terms = ['संधि', 'समास', 'उपसर्ग', 'प्रत्यय', 'पर्यायवाची', 'विलोम', 'मुहावरा', 'लोकोक्ति', 'तत्सम', 'तद्भव', 'कारक', 'सर्वनाम', 'विशेषण', 'अलंकार', 'छंद', 'रस', 'वाक्य', 'शब्द']

for i, item in enumerate(data):
    q = item.get('q', '')
    for term in hindi_terms:
        if term in q:
            print(f"Index {i}: found '{term}' -> Q: {q[:80]}")

