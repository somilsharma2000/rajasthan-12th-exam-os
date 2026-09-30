import json

with open('/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json') as f:
    data = json.load(f)

# Rule categories:
hindi = {1, 2, 3, 11, 12, 13, 14, 15, 27, 28, 29, 36, 37, 38, 45, 58, 147, 148, 149, 150}
english = {33, 34, 35, 80, 81, 82, 83, 94, 95, 96, 97, 98, 120, 121, 122, 123, 124, 133, 134, 135}
maths = {5, 18, 19, 20, 21, 30, 32, 72, 89, 90, 114, 116, 141, 142, 143, 144}
reasoning = {4, 6, 7, 44, 67, 115, 139, 140}

skip_set = hindi | english | maths | reasoning

for item in data:
    if item['n'] not in skip_set:
        print(f"Q{item['n']:3d}: {item['q'][:120]}")
