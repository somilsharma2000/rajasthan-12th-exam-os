# Index 289: AIMPK : LRPMF :: BIHPS : ?
# Let's check letter positions:
# A(1), I(9), M(13), P(16), K(11)
# L(12), R(18), P(16), M(13), F(6)
# Look at reverse of AIMPK: K P M I A
# K(11)+1 = L(12)
# P(16)+2 = R(18)
# M(13)+3 = P(16)
# I(9)+4 = M(13)
# A(1)+5 = F(6)
# WOW! Reverse the word, then add +1, +2, +3, +4, +5!
# Let's check:
# K(+1)->L, P(+2)->R, M(+3)->P, I(+4)->M, A(+5)->F -> LRPMF! EXACT MATCH!

# Now apply to BIHPS:
# Reverse BIHPS: S P H I B
# S(19) + 1 = 20 = T
# P(16) + 2 = 18 = R
# H(8) + 3 = 11 = K
# I(9) + 4 = 13 = M
# B(2) + 5 = 7 = G
# Result: T R K M G!
# Let's check options for 289:
# [0] TSKMH, [1] TKRMG, [2] TRKMG, [3] TTKMH
# Option [2] is TRKMG!
# Archive answer index is 2! CONFIRMED!
print("Index 289 -> TRKMG (Option 2)")

# Index 291:
# INFORMATION -> TROONNMIIFA
# Let's check letters of INFORMATION (11 letters):
# I N F O R M A T I O N
# Output: T R O O N N M I I F A
# Let's check sorted order or reverse alphabetical order?
# Letters in INFORMATION: A, F, I, I, M, N, N, O, O, R, T
# Reversed sorted order: T, R, O, O, N, N, M, I, I, F, A
# EXACT MATCH! The letters are arranged in REVERSE ALPHABETICAL ORDER (descending order)!
# Now let's apply to SUBLIMATION:
# Letters in SUBLIMATION: S, U, B, L, I, M, A, T, I, O, N
# Let's sort in descending order:
letters = sorted(list("SUBLIMATION"), reverse=True)
ans_291 = "".join(letters)
print(f"Index 291 -> SUBLIMATION sorted desc: {ans_291}")
# Options for 291:
# [0] JTSONMLIIBA
# [1] UTSONMLIIAA
# [2] UTSONMLIJBA
# [3] TUSONMLIIBA
# Wait! Let's check options for 291:
# Let's print sorted desc: U, T, S, O, N, M, L, I, I, B, A -> UTSONMLIIBA!
# Wait! Look at Option [1]: UTSONMLIIAA (has two A's instead of B)
# Option [0]: JTSONMLIIBA (has J instead of U?)
# Option [2]: UTSONMLIJBA (has J instead of I)
# Option [3]: TUSONMLIIBA (starts T U S instead of U T S)
# Wait! Is there an exact match UTSONMLIIBA among the options?
# Let's check options of Index 291 in detail!

