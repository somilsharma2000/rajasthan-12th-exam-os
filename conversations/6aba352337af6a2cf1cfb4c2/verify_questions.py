import json
import re

with open('authored-ga-b.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total questions loaded: {len(data)}")

# 1. Total count check
assert len(data) == 50, f"Expected 50 questions, found {len(data)}"

# 2. Topic counts check
expected_topics = {
    "Ancient Indian History": 10,
    "Medieval Indian History": 10,
    "Indian Economy and Banking": 10,
    "Computers and IT": 10,
    "Environment and Ecology": 10
}

topic_counts = {}
for q in data:
    t = q.get('topic')
    topic_counts[t] = topic_counts.get(t, 0) + 1

print("\nPer-topic counts:")
for t, count in topic_counts.items():
    print(f"  - {t}: {count}")

assert topic_counts == expected_topics, f"Topic count mismatch! Expected {expected_topics}, got {topic_counts}"

# 3. Schema & Field Validation
correct_option_dist = {'A': 0, 'B': 0, 'C': 0, 'D': 0}

forbidden_keywords = [
    # Risky facts
    "longest river", "amazon", "nile",
    "highest peak", "k2", "kanchenjunga",
    "classical language", "classical languages",
    "number of states", "number of union territories", "how many states", "how many ut",
    "first woman inc president", "first woman president of inc", "annie besant",
    # Already-banked questions
    "arya samaj", "dayanand saraswati",
    "symbol of gold", "chemical symbol of gold",
    "barometer",
    "vitamin d",
    "kabaddi",
    "article 17", "untouchability",
    "drafting committee", "ambedkar drafting",
    "42nd amendment", "mini constitution", "mini-constitution",
    "vice-president rajya sabha", "vice president rajya sabha",
    "1885", "founded in 1885", "founding of inc",
    "home rule", "tilak home rule",
    "curzon", "partition of bengal", "bengal partition",
    "jallianwala", "1919",
    "non-cooperation", "non cooperation",
    "forward bloc", "subhas chandra bose",
    "dandi", "salt march",
    "canning", "1857",
    "quit india"
]

errors = []

for idx, q in enumerate(data, 1):
    # Required keys
    required_keys = [
        "question_text", "option_a", "option_b", "option_c", "option_d",
        "correct_option", "explanation", "subject", "topic", "difficulty",
        "estimated_time_seconds"
    ]
    for k in required_keys:
        if k not in q:
            errors.append(f"Q{idx}: missing key '{k}'")
    
    # Subject check
    if q.get('subject') != 'General Awareness':
        errors.append(f"Q{idx}: invalid subject '{q.get('subject')}'")
        
    # Correct option check
    c_opt = q.get('correct_option')
    if c_opt not in ['A', 'B', 'C', 'D']:
        errors.append(f"Q{idx}: invalid correct_option '{c_opt}'")
    else:
        correct_option_dist[c_opt] += 1
        
    # Difficulty check
    if q.get('difficulty') not in ['Easy', 'Standard']:
        errors.append(f"Q{idx}: invalid difficulty '{q.get('difficulty')}'")
        
    # Estimated time seconds check
    time_sec = q.get('estimated_time_seconds')
    if not isinstance(time_sec, int) or time_sec < 20 or time_sec > 40:
        errors.append(f"Q{idx}: invalid estimated_time_seconds '{time_sec}'")
        
    # Sentence count check in explanation (2-3 sentences)
    exp = q.get('explanation', '')
    # sentence split by . ! ?
    sentences = [s.strip() for s in re.split(r'[.!?]+', exp) if s.strip()]
    if len(sentences) < 2 or len(sentences) > 3:
        errors.append(f"Q{idx}: explanation sentence count is {len(sentences)} (expected 2-3). Text: '{exp}'")
        
    # Forbidden keywords check in question and options and explanation
    full_text = f"{q.get('question_text')} {q.get('option_a')} {q.get('option_b')} {q.get('option_c')} {q.get('option_d')} {q.get('explanation')}".lower()
    for kw in forbidden_keywords:
        if kw in full_text:
            errors.append(f"Q{idx}: contains forbidden keyword/phrase '{kw}'")

print("\nOption Distribution:")
for k, v in correct_option_dist.items():
    print(f"  - Option {k}: {v}")

if errors:
    print("\nERRORS FOUND:")
    for e in errors:
        print(" -", e)
    exit(1)
else:
    print("\nALL CHECKS PASSED SUCCESSFULLY!")
