import json
import os
from collections import Counter

ALLOWED_SUBJECTS = {
    "raj-gk", "india-gk", "maths", "reasoning", "computer", "science", "hindi", "english"
}

from generate_subjects import mapping

output_data = []
for i in range(143):
    if i not in mapping:
        raise ValueError(f"Missing index {i}")
    subj, note = mapping[i]
    if subj not in ALLOWED_SUBJECTS:
        raise ValueError(f"Invalid subject '{subj}' at index {i}")
    output_data.append({
        "i": i,
        "subject": subj,
        "note": note
    })

# Validate constraints
indices = [entry["i"] for entry in output_data]
assert len(output_data) == 143, f"Expected 143 entries, got {len(output_data)}"
assert sorted(indices) == list(range(143)), "Indices do not match 0..142 exactly!"
assert len(set(indices)) == 143, "Duplicate indices found!"

out_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/subjects-ldc.json'
os.makedirs(os.path.dirname(out_path), exist_ok=True)

with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print("SUCCESS: File saved and validated successfully!")

# Calculate distribution
counts = Counter([entry["subject"] for entry in output_data])
print("Subject Distribution:")
for subj in sorted(ALLOWED_SUBJECTS):
    print(f"  {subj}: {counts[subj]}")
print(f"Total: {sum(counts.values())}")
