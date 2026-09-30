import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json') as f:
    data = json.load(f)

for item in data:
    n = item['n']
    q = item['q']
    opts = item['opts']
    ans = item['ans']
    ans_text = opts[ans] if 0 <= ans < len(opts) else "INVALID"
    print(f"[{n:3d}] Ans:{ans} ({ans_text[:20]}) | Q: {q[:100]}")
