import json
import re

with open("authored-reasoning-b.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Loaded {len(data)} questions from authored-reasoning-b.json")
assert len(data) == 50, "Must be exactly 50 questions"

topic_counts = {}
diff_counts = {}
correct_counts = {}
banned_terms = [
    "cricket", "football", "class of 60", "dice prime",
    "clock 6:00", "aman 12th", "dogs-mammals", "pens-pencils"
]

for idx, item in enumerate(data):
    # Schema check
    req_fields = [
        "question_text", "option_a", "option_b", "option_c", "option_d",
        "correct_option", "explanation", "subject", "topic",
        "difficulty", "estimated_time_seconds"
    ]
    for k in req_fields:
        assert k in item, f"Q{idx+1} missing key {k}"
        assert item[k] is not None, f"Q{idx+1} key {k} is None"

    assert item["subject"] == "Reasoning", f"Q{idx+1} subject must be Reasoning"
    
    # Topic
    t = item["topic"]
    topic_counts[t] = topic_counts.get(t, 0) + 1
    
    # Difficulty
    d = item["difficulty"]
    assert d in ["Easy", "Standard", "Hard"], f"Q{idx+1} difficulty {d} invalid"
    diff_counts[d] = diff_counts.get(d, 0) + 1
    
    # Time seconds
    ts = item["estimated_time_seconds"]
    assert isinstance(ts, int) and 30 <= ts <= 90, f"Q{idx+1} estimated_time_seconds {ts} invalid"
    
    # Correct option
    c = item["correct_option"]
    assert c in ["A", "B", "C", "D"], f"Q{idx+1} correct_option {c} invalid"
    correct_counts[c] = correct_counts.get(c, 0) + 1
    
    # Options uniqueness
    opts = [item["option_a"], item["option_b"], item["option_c"], item["option_d"]]
    assert len(set(opts)) == 4, f"Q{idx+1} duplicate options: {opts}"
    
    # Explanation sentence count
    exp = item["explanation"]
    cleaned_exp = re.sub(r'(\d)\.(\d)', r'\1_\2', exp)
    cleaned_exp = re.sub(r'e\.g\.', 'for instance', cleaned_exp)
    cleaned_exp = re.sub(r'i\.e\.', 'that is', cleaned_exp)
    sentences = [s.strip() for s in re.split(r'[.!?]+', cleaned_exp) if s.strip()]
    assert 2 <= len(sentences) <= 3, f"Q{idx+1} explanation sentence count {len(sentences)} not 2-3: '{exp}'"

    # Banned terms check
    full_text = (item["question_text"] + " " + exp).lower()
    for bt in banned_terms:
        assert bt not in full_text, f"Q{idx+1} contains banned term '{bt}'"

# Check topic breakdown
expected_topics = {
    "Alphabet Series": 10,
    "Classification": 10,
    "Statement and Conclusion": 10,
    "Venn Diagrams": 10,
    "Data Sufficiency": 10
}
assert topic_counts == expected_topics, f"Topic counts mismatch: {topic_counts}"

print("\n--- ALL VERIFICATION CHECKS PASSED ---")
print("Total questions:", len(data))
print("Topic counts:", json.dumps(topic_counts, indent=2))
print("Difficulty counts:", json.dumps(diff_counts, indent=2))
print("Correct option distribution:", json.dumps(correct_counts, indent=2))
