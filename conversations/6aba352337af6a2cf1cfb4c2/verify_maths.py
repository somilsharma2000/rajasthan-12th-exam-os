import json
import re
import sys

filepath = "/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/app/src/data/bank/maths.js"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Extract JSON from "export const MATHS = [...];"
match = re.search(r'export\s+const\s+MATHS\s*=\s*(\[[\s\S]*\])\s*;?\s*$', content)
if not match:
    print("ERROR: Could not match export const MATHS pattern!")
    sys.exit(1)

data_json = match.group(1)
try:
    data = json.loads(data_json)
except Exception as e:
    print(f"ERROR: JSON parse failed: {e}")
    sys.exit(1)

print(f"Parsed JSON successfully. Total records: {len(data)}")

errors = []
deletions = 0
topics_count = {}

for idx, q in enumerate(data):
    expected_id = f"mat-{idx+1:03d}"
    
    # 1. ID check
    if q.get("id") != expected_id:
        errors.append(f"Index {idx}: expected ID {expected_id}, got {q.get('id')}")
        
    # 2. Subject
    if q.get("subject") != "maths":
        errors.append(f"{q.get('id')}: invalid subject {q.get('subject')}")
        
    # 3. Topic tracking
    topic = q.get("topic", "Unknown")
    topics_count[topic] = topics_count.get(topic, 0) + 1
    
    # 4. Origin & Verification
    if q.get("origin") != "agent_authored":
        errors.append(f"{q.get('id')}: invalid origin")
    if q.get("verification") != "VERIFIED_DERIVED":
        errors.append(f"{q.get('id')}: invalid verification")
        
    # 5. Question structure
    question_hi = q.get("q", {}).get("hi", "")
    question_en = q.get("q", {}).get("en", "")
    if not question_hi or not question_en:
        errors.append(f"{q.get('id')}: missing question text")
        
    # 6. Options structure
    opts_hi = q.get("options", {}).get("hi", [])
    opts_en = q.get("options", {}).get("en", [])
    if len(opts_hi) != 4 or len(opts_en) != 4:
        errors.append(f"{q.get('id')}: options length must be 4 (got hi:{len(opts_hi)}, en:{len(opts_en)})")
        
    # Check options uniqueness
    if len(set(opts_hi)) != 4:
        errors.append(f"{q.get('id')}: duplicate options in Hindi: {opts_hi}")
    if len(set(opts_en)) != 4:
        errors.append(f"{q.get('id')}: duplicate options in English: {opts_en}")
        
    # 7. Answer index
    ans = q.get("answer")
    if ans not in [0, 1, 2, 3]:
        errors.append(f"{q.get('id')}: invalid answer index {ans}")
        
    # 8. Explanation
    exp_hi = q.get("explanation", {}).get("hi", "")
    exp_en = q.get("explanation", {}).get("en", "")
    if not exp_hi or not exp_en:
        errors.append(f"{q.get('id')}: missing explanation text")
        
    # 9. Provenance
    prov = q.get("provenance", {})
    if prov.get("evidence") != "VERIFIED_DERIVED":
        errors.append(f"{q.get('id')}: invalid provenance evidence")

if errors:
    print(f"FOUND {len(errors)} ERRORS:")
    for err in errors:
        print(" -", err)
    sys.exit(1)
else:
    print("ALL 70 QUESTIONS PASSED ALL SCHEMA AND INTEGRITY CHECKS!")
    print("\nTopic Breakdown:")
    for t, c in sorted(topics_count.items()):
        print(f"  - {t}: {c} questions")

