import json
import os

all_questions = []
for b in [1, 2, 3, 4, 5]:
    filename = f"batch{b}.json"
    with open(filename, "r", encoding="utf-8") as f:
        data = json.load(f)
        all_questions.extend(data)

print(f"Total merged questions: {len(all_questions)}")

# Check count
assert len(all_questions) == 80, f"Expected 80 questions, got {len(all_questions)}"

# Validate IDs
for i, q in enumerate(all_questions):
    expected_id = f"rgd-{i+1:03d}"
    assert q["id"] == expected_id, f"ID mismatch at index {i}: expected {expected_id}, got {q['id']}"
    
    # Check schema
    assert q["subject"] == "raj-gk", f"Invalid subject at {q['id']}"
    assert q["origin"] == "agent_authored", f"Invalid origin at {q['id']}"
    assert q["verification"] == "VERIFIED_DERIVED", f"Invalid verification at {q['id']}"
    
    assert "hi" in q["q"] and q["q"]["hi"].strip(), f"Missing hi question at {q['id']}"
    assert "en" in q["q"] and q["q"]["en"].strip(), f"Missing en question at {q['id']}"
    
    assert len(q["options"]["hi"]) == 4, f"Invalid hi options count at {q['id']}"
    assert len(q["options"]["en"]) == 4, f"Invalid en options count at {q['id']}"
    
    assert len(set(q["options"]["hi"])) == 4, f"Duplicate hi option at {q['id']}"
    assert len(set(q["options"]["en"])) == 4, f"Duplicate en option at {q['id']}"
    
    assert isinstance(q["answer"], int) and 0 <= q["answer"] <= 3, f"Invalid answer index at {q['id']}"
    
    assert "hi" in q["explanation"] and q["explanation"]["hi"].strip(), f"Missing hi explanation at {q['id']}"
    assert "en" in q["explanation"] and q["explanation"]["en"].strip(), f"Missing en explanation at {q['id']}"
    
    assert "source" in q["provenance"] and q["provenance"]["source"].strip(), f"Missing provenance source at {q['id']}"
    assert q["provenance"]["evidence"] == "VERIFIED_DERIVED", f"Invalid provenance evidence at {q['id']}"

print("All 80 questions passed internal schema and option uniqueness checks!")

# Create JS file
js_content = "// Question Bank: Rajasthan GK Depth (80 Questions)\n"
js_content += "// Schema strictly compliant with 12th-level exam prep app specs\n\n"
js_content += "export const RAJ_GK_DEPTH = " + json.dumps(all_questions, ensure_ascii=False, indent=2) + ";\n"

target_path = "/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/app/src/data/bank/raj-gk-depth.js"
with open(target_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"File successfully written to {target_path}")

