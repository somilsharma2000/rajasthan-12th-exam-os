import json

file_path = '/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/gather/pyq-raw/cet2024-s1-final.json'
with open(file_path, 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Rule mapping helper
def classify_q(q):
    n = q['n']
    text = q['q']
    opts = q['opts']
    
    # Specific manually checked rules or keyword logic
    # Let's inspect each question systematically
    return None

