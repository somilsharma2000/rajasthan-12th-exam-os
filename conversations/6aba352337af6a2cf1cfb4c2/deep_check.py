import json

with open('authored-ga-b.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

for i, q in enumerate(questions, 1):
    opt_key = f"option_{q['correct_option'].lower()}"
    selected_val = q[opt_key]
    print(f"Q{i:02d} [{q['topic']}] [{q['difficulty']}] [{q['estimated_time_seconds']}s] ({q['correct_option']}: {selected_val})")
    print(f"    Q: {q['question_text']}")
    print(f"    A: {q['option_a']} | B: {q['option_b']} | C: {q['option_c']} | D: {q['option_d']}")
    print(f"    Exp: {q['explanation']}\n")

