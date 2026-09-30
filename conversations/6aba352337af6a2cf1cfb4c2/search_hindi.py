import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)[0:230]

for idx, item in enumerate(data):
    q = item.get('q', '')
    opts = item.get('opts', [])
    orig = item.get('subject', '')
    
    # Check if any original subject was 'hindi'
    if orig == 'hindi' or 'हिंदी' in q or 'व्याकरण' in q or 'पर्यायवाची' in q or 'संधि' in q or 'समास' in q:
        print(f"Index {idx} | ORIG: {orig}")
        print("Q:", q)
        print("OPTS:", opts)
        print("-" * 50)

