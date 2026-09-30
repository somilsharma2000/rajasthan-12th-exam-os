import json, re

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json') as f:
    data = json.load(f)

from auto_classify import classify_item

classified = []
unclear = []

for i in range(450, 632):
    item = data[i]
    best_cat, best_score, second_cat, second_score, scores = classify_item(item, i)
    q = item.get('q', '')
    opts = item.get('opts', [])
    orig = item.get('subject', '')
    hint = item.get('subject_new', '')
    
    classified.append((i, best_cat, orig, hint, q, opts, best_score, second_cat, second_score))
    if best_score == 0 or (best_score == second_score and best_score > 0):
        unclear.append((i, best_cat, second_cat, q, opts))

print(f"Total processed: {len(classified)}")
print(f"Unclear / low score count: {len(unclear)}")

