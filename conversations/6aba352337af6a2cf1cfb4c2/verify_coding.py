import json

# Index 34
# 'SCHOOL' -> 'ROOM', 'ROOM' -> 'APARTMENT', 'APARTMENT' -> 'CITY', 'CITY' -> 'BUS'
# Education -> SCHOOL -> called 'ROOM'.
# Answer option: 'ROOM' (index 1).
print("--- Index 34 ---")
print("School is called ROOM -> Answer: ROOM (index 1)")

# Index 35
# 'bht bet nst' = 'Delhi Commonwealth Games'
# 'car ber bht bet' = 'Commonwealth games Organizing Committe'
# 'bta les bet bht' = 'history of commonwealth games'
# Intersection of all 3 sentences: 'Commonwealth Games' -> 'bht bet' (in all three).
# Sentence 1 has 'Delhi' -> remaining code is 'nst'.
# So Delhi = nst. Option index 1.
print("\n--- Index 35 ---")
s1 = set('bht bet nst'.split())
s2 = set('car ber bht bet'.split())
s3 = set('bta les bet bht'.split())
comm = s1 & s2 & s3 # {'bht', 'bet'} -> 'Commonwealth Games'
delhi_code = s1 - comm
print("Delhi code:", delhi_code, "-> Option index 1 ('nst')")

# Index 104
# '1437' = 'school is nice'
# '532' = 'class is clean'
# '1942' = 'nice and clean'
# 'is' is in s1 and s2 -> intersection of {1,4,3,7} and {5,3,2} = {3}. So 'is' = 3.
# 'clean' is in s2 and s3 -> intersection of {5,3,2} and {1,9,4,2} = {2}. So 'clean' = 2.
# 'nice' is in s1 and s3 -> intersection of {1,4,3,7} and {1,9,4,2} = {1, 4}? Wait!
# s1 has 1, 4, 3, 7. s3 has 1, 9, 4, 2. So {1, 4} are in both!
# But s3 is 'nice and clean'. We know 'clean' = 2. So {1, 9, 4} remain for 'nice and'.
# Wait, s1 has 'nice' but not 'and'. s1 digits are {1, 4, 3, 7}.
# So 'nice' must be in {1, 4}.
# Then in s3 ('1942'), 'clean'=2, 'nice' in {1,4}. Thus 'and' must be 9!
# Let's verify: 9 is in s3, not in s1 or s2.
# 'and' appears only in s3. Digits of s3: 1, 9, 4, 2.
# 2 is 'clean', 1 & 4 are ('school', 'nice'), so 9 MUST be 'and'!
print("\n--- Index 104 ---")
s1_words, s1_digits = {'school', 'is', 'nice'}, {'1','4','3','7'}
s2_words, s2_digits = {'class', 'is', 'clean'}, {'5','3','2'}
s3_words, s3_digits = {'nice', 'and', 'clean'}, {'1','9','4','2'}
print("Digits in s3 not in s1 or s2:", s3_digits - s1_digits - s2_digits)
# Output should be {'9'}

# Index 105
# BLISS = 195377, GLOBAL = 1256915, GLASS = ?
# Let's map letters:
# B:1, L:9?, wait:
# BLISS: B(2)->1? L(12)->9? I(9)->5? S(19)->3? S(19)->7?
# Wait! Look at digits in BLISS (1,9,5,3,7,7 - wait, 6 digits for 5 letters? No, 19 5 3 7 7?)
# Let's look at character counts:
# BLISS (5 chars) -> 195377 (6 digits) or B=1, L=9, I=5, S=3, S=7? No, SS -> 77!
# G L O B A L -> 1 2 5 6 9 15 (7 digits)?
# Wait! Let's examine:
# G=1? L=2? O=5? B=6? A=9? L=15? Wait, L appeared twice in GLOBAL? G L O B A L has 6 letters. Code: 1 2 5 6 9 1 5 (7 digits) or 12 5 6 9 1 5?
# Let's analyze how G, L, A, S, S maps:
# In BLISS: B L I S S -> code has '77' at end for SS!
# In GLASS: ends with SS -> code must end with '77'!
# Look at options for GLASS:
# [0] 72157
# [1] 21577
# [2] 25177
# [3] 77251
# Only [1] 21577 and [2] 25177 end with '77'!
# Now what about G, L, A?
# In GLOBAL: G, L, O, B, A, L -> digits 1, 2, 5, 6, 9, 15?
# Wait! In BLISS: B=2, L=12, I=9, S=19, S=19? No!
# Look at position of L in BLISS: 2nd letter. In GLOBAL: 2nd letter.
# Let's check G, L, A values:
# If L=5, G=2, A=1 -> G L A S S = 2 5 1 7 7 -> Option [2]!
# If G=2, L=1, A=5 -> G L A S S = 2 1 5 7 7 -> Option [1]!
# Let's check letter position / reverse alphabet position / direct mapping:
# B=2 (code 1? 2-1=1). L=12. I=9. S=19.
# Look at GLOBAL: G=7, L=12, O=15, B=2, A=1, L=12.
# Wait! G(7), L(12), O(15), B(2), A(1), L(12)
# Look at the code '1256915' or '1 2 5 6 9 1 5' vs '2 5 1 7 7'?
# Wait! G(7) -> 2? (7-5=2?), L(12) -> 5? (12-7=5?), A(1) -> 1? (1?), S(19) -> 7? (19-12=7?)
# Wait, let's look at B L I S S: B(2)->1? L(12)->2? I(9)->5? S(19)->7, S(19)->7.
# B L I S S = 1 2 5 7 7! But code is written as '195377'? Wait! Is 19 5 3 7 7?
# Wait, B=1, L=9, I=5, S=3, S=7? No, why 3 and 7?
# Ah! Look at: B L I S S -> digits used: {1, 2, 5, 7, 7} or {1, 9, 5, 3, 7, 7}?
# Wait, in BLISS: 1 2 5 7 7 -> 12577. Wait! If L=2, then G=1?
# Let's check if 25177 vs 21577: Archive answer is 2 (25177). Let's verify why!
print("\n--- Index 105 ---")

