import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)[0:230]

results = []

for idx, item in enumerate(data):
    q = item.get('q', '').strip()
    opts = item.get('opts', [])
    orig = item.get('subject', '')
    
    # We will print all details to inspect
    results.append({
        'i': idx,
        'q': q,
        'opts': opts,
        'orig': orig
    })

print(f"Total items loaded: {len(results)}")
