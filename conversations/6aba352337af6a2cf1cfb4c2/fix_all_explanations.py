import re

# Let's read build_b.py, parse all add_q calls or modify explanations directly in code.
with open("build_b.py", "r", encoding="utf-8") as f:
    code = f.read()

# Fix Q22:
old_q22 = "The engineers who are coders must also be logical thinkers because all coders are logical thinkers. Therefore, 'Some engineers are logical thinkers' definitely follows (Conclusion II). It cannot be asserted that ALL engineers are logical thinkers. Hence, only conclusion II follows."
new_q22 = "The engineers who are coders must also be logical thinkers because all coders are logical thinkers, so 'Some engineers are logical thinkers' definitely follows (Conclusion II). However, it cannot be asserted that ALL engineers are logical thinkers, meaning only conclusion II follows."
code = code.replace(old_q22, new_q22)

# Fix Q49:
old_q49 = "Statement 1 gives selling price (₹480) without profit percentage. Statement 2 gives profit percentage (20%) without selling price. Combining both allows calculating Cost Price = Selling Price / (1 + Profit/100) = 480 / 1.20 = ₹400. Thus, both statements together are sufficient."
new_q49 = "Statement 1 gives selling price (₹480) without profit percentage, while Statement 2 gives profit percentage (20%) without selling price. Combining both allows calculating Cost Price = 480 / 1.20 = ₹400, so both statements together are sufficient."
code = code.replace(old_q49, new_q49)

with open("build_b.py", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated Q22 and Q49 explanations")
