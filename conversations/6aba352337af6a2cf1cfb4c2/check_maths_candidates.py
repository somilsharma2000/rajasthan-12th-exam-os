import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    raw_data = json.load(f)[0:230]

for i, item in enumerate(raw_data):
    orig = item.get('subject', '')
    if orig == 'maths':
        q = item.get('q', '')
        opts = item.get('opts', [])
        print(f"Index {i} (ORIG maths) -> Q: {q[:100]} | OPTS: {opts}")

