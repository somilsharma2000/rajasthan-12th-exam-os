import json
import re

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/ldc-2024-p1-final.json') as f:
    data = json.load(f)

results = []

for item in data:
    i = item['i']
    n = item['n']
    q = item.get('q', '')
    opts = item.get('opts', [])
    en = item.get('en', '')
    opts_str = " ".join(opts)
    text = f"{q} {opts_str}".lower()
    
    # Let's inspect text to determine classification
    # We will refine each index explicitly after inspecting all of them!
    
    # Helper flags
    subj = ""
    note = ""
    
    results.append({
        "i": i,
        "n": n,
        "q": q,
        "en": en,
        "opts": opts,
        "text": text
    })

print(f"Total items: {len(results)}")
