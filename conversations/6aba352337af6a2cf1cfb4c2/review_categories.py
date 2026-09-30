import json
from generate_tags import tags

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(file_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

by_cat = {}
for q in questions:
    n = q['n']
    cat = tags[n]
    if cat not in by_cat:
        by_cat[cat] = []
    by_cat[cat].append(q)

for cat in sorted(by_cat.keys()):
    print(f"==================== {cat.upper()} ({len(by_cat[cat])} questions) ====================")
    for q in by_cat[cat]:
        print(f"Q{q['n']}: {q['q']}")
    print()
