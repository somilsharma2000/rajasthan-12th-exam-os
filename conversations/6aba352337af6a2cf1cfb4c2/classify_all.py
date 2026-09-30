import json

path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/police-staging.json'
with open(path, 'r', encoding='utf-8') as f:
    raw_data = json.load(f)[0:230]

# Mapping array for 0..229
classified = []

# We will create an explicit rule-based and index-verified classifier
for i, item in enumerate(raw_data):
    q = item.get('q', '').strip()
    opts = item.get('opts', [])
    orig = item.get('subject', '')
    
    # We will write specific classification for each item and log overrides
    # Let's inspect each item logic carefully:
    cat = None

    # Specific index rules based on thorough review:
    if i in [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 76, 77, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197]:
        cat = 'computer'

    elif i in [21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 66, 83, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168]:
        cat = 'reasoning'

    elif i in [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 60, 61, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 133, 134]:
        cat = 'raj-gk'

    elif i in [0, 1, 2, 3, 4, 7, 57, 59, 62, 63, 64, 65, 67, 68, 70, 71, 72, 73, 74, 78, 79, 80, 81, 82, 128, 129, 130, 131, 132, 135, 136, 137, 138, 139, 140, 141, 142, 143, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 224, 225, 226, 227, 228, 229]:
        cat = 'india-gk'

    elif i in [5, 6, 69, 75, 211, 222, 223]:
        cat = 'science'

    classified.append({
        'i': i,
        'subject': cat,
        'orig': orig,
        'q': q
    })

print(f"Total classified: {len(classified)}")

# Check counts
from collections import Counter
counts = Counter([c['subject'] for c in classified])
print("Distribution counts:")
for cat, cnt in counts.items():
    print(f"  {cat}: {cnt}")

