import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/patwari-2025-verify-input.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

s2_a = [r for r in data if r.get('shift') == 's2' and 1 <= r.get('n', 0) <= 75]

print("Total count:", len(s2_a))

# Let's inspect missing numbers in 1..75
present_n = set(r['n'] for r in s2_a)
expected_n = set(range(1, 76))
missing = sorted(list(expected_n - present_n))
print("Missing n in 1..75:", missing)

