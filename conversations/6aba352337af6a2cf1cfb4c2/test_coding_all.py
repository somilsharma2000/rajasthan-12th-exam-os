import json

# Index 105:
# BLISS -> 195377? Wait, let's look at character counts:
# B=2, L=12, I=9, S=19, S=19
# Reverse positions: B=25, L=15, I=18, S=8, S=8
# Digits: B L I S S -> 1 2 5 7 7 ? Or 195377? Wait, 1+9=10? 5? 3? 7?
# Let's check G L O B A L -> 1 2 5 6 9 1 5
# Look at direct letter to digit mapping:
# In BLISS: B, L, I, S, S
# In GLOBAL: G, L, O, B, A, L
# Letters in GLASS: G, L, A, S, S
# From BLISS: S -> 7 (since SS is at end, 77).
# L is in BLISS (2nd letter) and GLOBAL (2nd and 6th letters).
# In BLISS: B L I S S -> 1 2 5 7 7 ? Wait! If 195377 is a typo in question statement for 12577 (or 19577)?
# In GLOBAL: 1 2 5 6 9 1 5 (G=2, L=5, O=6, B=1, A=9, L=5) -> G=2, L=5, A=1, S=7, S=7 -> GLASS = 25177!
# Let's check: G=2, L=5, O=6, B=1, A=9, L=5 -> 2 5 6 1 9 5 -> wait, permuted or direct?
# If G=2, L=5, A=1, S=7, S=7, then GLASS = 25177! (Option 2).

print("=== Index 145 ===")
# RKP : VHS :: UJM : ?
# R(18) -> V(22) (+4)
# K(11) -> H(8) (-3)
# P(16) -> S(19) (+3)
# Let's check UJM:
# U(21) + 4 = 25 -> Y
# J(10) - 3 = 7 -> G
# M(13) + 3 = 16 -> P
# Target: YGP (Option 3).
print("R(+4)->V, K(-3)->H, P(+3)->S")
print("U(+4)->Y, J(-3)->G, M(+3)->P -> YGP (Option 3)")

print("\n=== Index 148 ===")
# JHMI -> LPKM
# J(10) -> L(12) (+2)
# H(8) -> P(16) (+8)
# M(13) -> K(11) (-2)
# I(9) -> M(13) (+4)
# Let's check YGAN:
# Y(25) + 2 = 27 = 1 = A? Or Q? Wait!
# Look at options: [0] QDKA, [1] PDJC, [2] QDJB, [3] PEJB
# Wait, why start with Q or P?
# Let's check reverse or opposite letters, or shift from end?
# Let's test all possible shifts/transformations from JHMI to LPKM:
