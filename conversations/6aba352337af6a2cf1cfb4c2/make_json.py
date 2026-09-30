import json

from generate_tags import tags

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
out_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet-subject-tags.json'

with open(file_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

result = []
for q in questions:
    n = q['n']
    subject = tags[n]
    result.append({
        "n": n,
        "subject": subject
    })

with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=2)

print(f"Successfully wrote {len(result)} items to {out_path}")

# Verify counts
counts = {}
for item in result:
    s = item['subject']
    counts[s] = counts.get(s, 0) + 1

print("\nSubject Counts:")
for s in sorted(counts.keys()):
    print(f"  {s}: {counts[s]}")
print("Total:", sum(counts.values()))
