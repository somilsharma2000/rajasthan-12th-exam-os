import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(file_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

for q in questions:
    n = q['n']
    text = q['q']
    opts = q['opts']
    print(f"--- Q{n} ---")
    print(f"Q: {text}")
    print(f"Opts: {opts}")
    print()
