import json
import re

# Temporarily import or run build_b without assert
with open("build_b.py", "r", encoding="utf-8") as f:
    code = f.read()

# Modify assert in code to print instead of raise
test_code = code.replace(
    'assert 2 <= len(sentences) <= 3',
    'if not (2 <= len(sentences) <= 3): print(f"Q{idx+1} ({q[\'topic\']}) sentence count {len(sentences)}: \'{q[\'explanation\']}\'") #'
)

exec(test_code)
