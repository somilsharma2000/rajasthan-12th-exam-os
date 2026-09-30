import json
import re

with open("build_b.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace e.g. with for instance in build_b.py
code = code.replace("e.g., ", "for instance, ")
code = code.replace("e.g.", "for instance")

with open("build_b.py", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated build_b.py")
