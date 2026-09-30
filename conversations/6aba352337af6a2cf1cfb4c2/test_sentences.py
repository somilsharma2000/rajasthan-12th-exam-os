import re

def count_sentences(text):
    # Remove decimal points like 1.20 or 0.5
    cleaned = re.sub(r'(\d)\.(\d)', r'\1_\2', text)
    # Remove abbreviations like e.g. or i.e.
    cleaned = re.sub(r'e\.g\.', 'for instance', cleaned)
    cleaned = re.sub(r'i\.e\.', 'that is', cleaned)
    # Split by sentence end markers
    sentences = [s.strip() for s in re.split(r'[.!?]+', cleaned) if s.strip()]
    return len(sentences), sentences

# Let's test on Q49 explanation:
q49_exp = "Statement 1 gives selling price (₹480) without profit percentage. Statement 2 gives profit percentage (20%) without selling price. Combining both allows calculating Cost Price = Selling Price / (1 + Profit/100) = 480 / 1.20 = ₹400. Thus, both statements together are sufficient."

print("Q49 sentence count:", count_sentences(q49_exp))
