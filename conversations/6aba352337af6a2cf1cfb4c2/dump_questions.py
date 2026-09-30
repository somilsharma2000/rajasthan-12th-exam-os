import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

filtered = [(i, r) for i, r in enumerate(data) if r.get('subject') in ['maths', 'reasoning']]

with open('all_200_questions.txt', 'w', encoding='utf-8') as f_out:
    for idx, (i, r) in enumerate(filtered):
        f_out.write(f"=== ITEM {idx+1}/200 | STAGING INDEX: {i} | SUBJECT: {r.get('subject')} ===\n")
        f_out.write(f"Q: {r.get('q')}\n")
        f_out.write(f"Opts: {r.get('opts')}\n")
        f_out.write(f"Given Ans Index: {r.get('ans')} -> {r.get('opts')[r.get('ans')] if (r.get('opts') and 0 <= r.get('ans', -1) < len(r.get('opts'))) else 'INVALID'}\n")
        f_out.write("\n")

print("Dumped 200 questions to all_200_questions.txt")
