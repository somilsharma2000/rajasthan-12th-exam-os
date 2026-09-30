import re

with open("build_b.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace 1.20 with 120/100 or write in a way that combines sentences nicely

# Let's inspect all explanations currently in build_b.py
# First update sentence counting logic in build_b.py
old_check = "sentences = [s.strip() for s in re.split(r'[.!?]+', q[\"explanation\"]) if s.strip()]\n    assert 2 <= len(sentences) <= 4, f\"Q{idx+1} explanation sentence count {len(sentences)}: '{q['explanation']}'\""

new_check = """cleaned = re.sub(r'(\d)\.(\d)', r'\\1_\\2', q['explanation'])
    cleaned = re.sub(r'e\\.g\\.', 'for instance', cleaned)
    cleaned = re.sub(r'i\\.e\\.', 'that is', cleaned)
    sentences = [s.strip() for s in re.split(r'[.!?]+', cleaned) if s.strip()]
    assert 2 <= len(sentences) <= 3, f"Q{idx+1} explanation sentence count {len(sentences)}: '{q['explanation']}'" """

code = code.replace("sentences = [s.strip() for s in re.split(r'[.!?]+', q[\"explanation\"]) if s.strip()]\n    assert 2 <= len(sentences) <= 4, f\"Q{idx+1} explanation sentence count {len(sentences)}: '{q['explanation']}'\"", new_check)

with open("build_b.py", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated check logic in build_b.py")
