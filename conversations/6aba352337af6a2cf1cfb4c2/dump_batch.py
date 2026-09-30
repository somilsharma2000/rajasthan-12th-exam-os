import json
import sys

start_idx = int(sys.argv[1])
end_idx = int(sys.argv[2])

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for i in range(start_idx, min(end_idx, 230)):
    item = data[i]
    q = item.get('q', '').replace('\n', ' ')
    opts = " | ".join(item.get('opts', []))
    orig = item.get('subject', '')
    subj_new = item.get('subject_new', '')
    print(f"=== INDEX {i} ===")
    print(f"Orig: {orig} | New: {subj_new}")
    print(f"Q: {q}")
    print(f"Opts: {opts}")
    print()

