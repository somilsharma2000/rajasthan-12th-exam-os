import json
import os
from generate_subjects import mapping

output_file = "/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/subjects-c.json"

out_data = []
for idx in range(450, 632):
    out_data.append({
        "i": idx,
        "subject": mapping[idx]
    })

# Validate array length and keys
assert len(out_data) == 182, f"Length must be 182, got {len(out_data)}"
for entry in out_data:
    assert "i" in entry and "subject" in entry
    assert 450 <= entry["i"] <= 631
    assert entry["subject"] in ["raj-gk", "india-gk", "maths", "reasoning", "computer", "science", "hindi"]

# Ensure directory exists if needed
os.makedirs(os.path.dirname(output_file), exist_ok=True)

with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(out_data, f, ensure_ascii=False, indent=2)

print(f"Successfully written {len(out_data)} entries to {output_file}")

