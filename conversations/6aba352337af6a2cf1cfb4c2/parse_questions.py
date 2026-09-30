import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(path) as f:
    data = json.load(f)

for item in data:
    n = item['n']
    q = item['q']
    ans = item['ans']
    opts = item['opts']
    print(f"Q{n}: {q} | Ans: {ans} ({opts[ans] if 0 <= ans < len(opts) else 'INVALID'})")

