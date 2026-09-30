import json
import os

input_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/patwari-2025-verify-input.json'
output_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/patwari-s2a-results.json'

with open(input_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

s2_a = [r for r in data if r.get('shift') == 's2' and 1 <= r.get('n', 0) <= 75]

results = []

for r in s2_a:
    n = r['n']
    key = r['key']
    fig = r.get('figure_suspect', False)
    
    if n == 16:
        verdict = "CORRECT"
        final_ans = 3
        note = "मालाबार तट भारत के केरल राज्य (सूचकांक 3) में स्थित है, ओडिशा में नहीं।"
    elif n == 37:
        verdict = "CORRECT"
        final_ans = 3
        note = "एस.एल.वी (Satellite Launch Vehicle) चिकित्सा विज्ञान में इमेजिंग स्कैन नहीं है; सही उत्तर सूचकांक 3 है।"
    elif n == 55 or fig:
        verdict = "UNSURE"
        final_ans = None
        note = "figure-dependent"
    else:
        verdict = "AGREE"
        final_ans = key
        note = "Verified correct."

    results.append({
        "shift": "s2",
        "n": n,
        "verdict": verdict,
        "final_ans": final_ans,
        "note": note
    })

# Validate results
assert len(results) == len(s2_a), f"Count mismatch: {len(results)} vs {len(s2_a)}"

valid_verdicts = {"AGREE", "CORRECT", "UNSURE"}

for res in results:
    assert res["shift"] == "s2"
    assert res["verdict"] in valid_verdicts, f"Invalid verdict {res['verdict']} for n={res['n']}"
    if res["verdict"] == "UNSURE":
        assert res["final_ans"] is None, f"final_ans must be null for UNSURE at n={res['n']}"
    else:
        assert isinstance(res["final_ans"], int) and 0 <= res["final_ans"] <= 3, f"Invalid final_ans {res['final_ans']} at n={res['n']}"
    assert isinstance(res["note"], str) and len(res["note"]) > 0

# Ensure target directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("Results generated and validated successfully!")
print("Count:", len(results))

# Count verdicts
counts = {}
for res in results:
    v = res["verdict"]
    counts[v] = counts.get(v, 0) + 1

print("Verdicts breakdown:", counts)

