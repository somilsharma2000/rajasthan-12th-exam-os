import re

def count_sentences(text):
    # Protect 'Rs.' and decimals like 7.5
    clean = re.sub(r'Rs\.', 'Rs', text)
    clean = re.sub(r'(\d+)\.(\d+)', r'\1_\2', clean)
    sentences = [s.strip() for s in re.split(r'[.!?]+', clean) if s.strip()]
    return len(sentences), sentences

text = "The total number of ratio parts is 2 + 3 + 5 = 10 parts, so each part equals Rs. 3,500 divided by 10, which is Rs. 350. Person C receives 5 parts (Rs. 1,750) and person A receives 2 parts (Rs. 700). The difference between C and A is Rs. 1,750 minus Rs. 700, which equals Rs. 1,050."
count, s = count_sentences(text)
print("Count:", count)
for idx, st in enumerate(s, 1):
    print(f" {idx}: {st}")
