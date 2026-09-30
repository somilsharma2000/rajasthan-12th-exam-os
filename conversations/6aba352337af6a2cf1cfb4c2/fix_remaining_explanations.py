with open("build_b.py", "r", encoding="utf-8") as f:
    code = f.read()

replaces = [
    (
        "All lions fall completely within the set of predators, and no predator overlaps with herbivores. Consequently, no lion can be a herbivore, making Conclusion I valid. Conclusion II directly contradicts Conclusion I and is false. Hence, only conclusion I follows.",
        "All lions fall completely within the set of predators, and since no predator overlaps with herbivores, no lion can be a herbivore (Conclusion I follows). Conclusion II directly contradicts Conclusion I and is false. Hence, only conclusion I follows."
    ),
    (
        "Statement 1 alone gives P = R + 4, which has multiple age combinations. Statement 2 alone gives P + R = 28, which also has multiple solutions. Combining both statements yields (R + 4) + R = 28, giving R = 12 and Priya's age P = 16. Thus, both statements together are sufficient.",
        "Neither Statement 1 (P = R + 4) nor Statement 2 (P + R = 28) alone is sufficient as each yields multiple age combinations. Combining both statements gives (R + 4) + R = 28, which solves uniquely to R = 12 and Priya's age P = 16. Therefore, both statements together are sufficient."
    ),
    (
        "Statement 1 alone gives only the front rank, which is insufficient to determine total count. Statement 2 alone gives only the back rank, which is also insufficient. Combining both statements allows calculating Total = (Front rank + Back rank) - 1 = 8 + 15 - 1 = 22. Thus, both statements together are sufficient.",
        "Neither Statement 1 (front rank) nor Statement 2 (back rank) alone provides enough information to find the total queue length. Combining both statements allows calculating Total = (Front rank + Back rank) - 1 = 8 + 15 - 1 = 22. Thus, both statements together are sufficient."
    ),
    (
        "Statement 1 alone gives length (200 m) without speed. Statement 2 alone gives speed (72 km/h = 20 m/s) without length. Combining both allows calculating Time = Length / Speed = 200 / 20 = 10 seconds. Thus, both statements together are sufficient.",
        "Statement 1 provides train length (200 m) without speed, while Statement 2 provides speed (72 km/h = 20 m/s) without length. Combining both allows calculating Time = Length / Speed = 200 / 20 = 10 seconds. Thus, both statements together are sufficient."
    ),
    (
        "Statement 1 establishes A > B. Statement 2 establishes C > B. Combining both statements shows B is shorter than both A and C, but gives no information regarding whether A or C is taller. Therefore, even together the statements are not sufficient.",
        "Statement 1 establishes A > B and Statement 2 establishes C > B. Combining both statements shows B is shorter than both A and C, but gives no information regarding whether A or C is taller. Therefore, even together the statements are not sufficient."
    ),
    (
        "Statement 1 alone gives T + U = 9 (possibilities: 18, 27, 36, 45, 54, 63, 72, 81, 90). Statement 2 alone gives T = 2U (possibilities: 21, 42, 63, 84). Combining both gives 2U + U = 9 => 3U = 9 => U = 3 and T = 6, yielding uniquely the number 63. Thus, both statements together are sufficient.",
        "Neither Statement 1 (T + U = 9) nor Statement 2 (T = 2U) alone is sufficient as each yields multiple possible numbers. Combining both gives 2U + U = 9 => 3U = 9 => U = 3 and T = 6, yielding uniquely the number 63. Thus, both statements together are sufficient."
    )
]

for old, new in replaces:
    assert old in code, f"Could not find old string: {old[:30]}..."
    code = code.replace(old, new)

with open("build_b.py", "w", encoding="utf-8") as f:
    f.write(code)

print("Applied 6 remaining explanation fixes.")
