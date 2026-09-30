import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(file_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

indices = [30, 34, 35, 66, 83, 102, 103, 104, 105, 108, 145, 148, 151, 154, 156, 242, 289, 291, 292, 293, 296, 297, 301, 302, 306, 307, 308, 309, 434, 436, 437, 439, 441, 442, 445, 584, 585]

for idx in indices:
    item = data[idx]
    print(f"================ INDEX {idx} ================")
    print("Q:", item.get('q'))
    print("Opts:")
    for opt_idx, opt in enumerate(item.get('opts', [])):
        print(f"  [{opt_idx}] {opt}")
    print("Archive Ans Index:", item.get('ans'))
    if item.get('ans') is not None and item.get('ans') < len(item.get('opts', [])):
        print("Archive Ans Text:", item['opts'][item['ans']])
    print("Subject:", item.get('subject'))
    print()
