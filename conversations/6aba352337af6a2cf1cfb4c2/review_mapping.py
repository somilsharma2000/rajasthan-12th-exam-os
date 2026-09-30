import json
from generate_subjects import mapping

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json') as f:
    data = json.load(f)

overrides = []
distribution = {}

for idx in range(450, 632):
    item = data[idx]
    orig_sub = item.get('subject', '')
    assigned_sub = mapping[idx]
    q = item.get('q', '')
    
    distribution[assigned_sub] = distribution.get(assigned_sub, 0) + 1
    
    if orig_sub != assigned_sub:
        overrides.append((idx, orig_sub, assigned_sub, q))

print("Category Distribution:")
for cat, count in sorted(distribution.items()):
    print(f"  {cat}: {count}")

print(f"\nTotal Overrides: {len(overrides)}")
print("\nSample 10 Overrides:")
for idx, orig, new, q in overrides[:10]:
    print(f"  [{idx}] {orig} -> {new}: {q[:70]}...")

