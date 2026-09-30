import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/patwari-2025-verify-input.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

s2_a = [r for r in data if r.get('shift') == 's2' and 1 <= r.get('n', 0) <= 75]

for r in s2_a:
    n = r['n']
    key = r['key']
    opts = r['opts']
    q = r['q']
    fig = r['figure_suspect']
    key_opt = opts[key] if 0 <= key < len(opts) else None
    print(f"n={n:02d} | key={key} -> '{key_opt}' | fig={fig}")
