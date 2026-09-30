import json
import re

questions = []

# ==========================================
# 1. ALPHABET SERIES (10 Questions)
# ==========================================

# AS_01
questions.append({
    "question_text": "Find the missing letter in the following series: B, D, G, K, P, ?",
    "option_a": "V",
    "option_b": "W",
    "option_c": "U",
    "option_d": "X",
    "correct_option": "A",
    "subject": "Reasoning",
    "topic": "Alphabet Series",
    "difficulty": "Easy",
    "explanation": "The position of letters increases by consecutive integers: B(2) + 2 = D(4), D(4) + 3 = G(7), G(7) + 4 = K(11), K(11) + 5 = P(16). Adding 6 to P(16) gives 22, which corresponds to the letter V. Therefore, the missing letter is V.",
    "estimated_time_seconds": 35,
    "_verify": ("AS_step_addition", [2, 4, 7, 11, 16], [2, 3, 4, 5, 6], 22, "V")
})

# AS_02
questions.append({
    "question_text": "Which letter cluster will complete the series: CZ, FX, IV, LT, ?",
    "option_a": "OR",
    "option_b": "OS",
    "option_c": "NR",
    "option_d": "PR",
    "correct_option": "A",
    "subject": "Reasoning",
    "topic": "Alphabet Series",
    "difficulty": "Standard",
    "explanation": "The first letter increases by 3 positions in each step: C(3) -> F(6) -> I(9) -> L(12) -> O(15). The second letter decreases by 2 positions in each step: Z(26) -> X(24) -> V(22) -> T(20) -> R(18). Combining them gives the term OR.",
    "estimated_time_seconds": 45,
    "_verify": ("AS_two_letter", "CZ, FX, IV, LT", "OR")
})

# AS_03
questions.append({
    "question_text": "Select the option that will come next in the given series: ABC, CEG, EHK, GKO, ?",
    "option_a": "HMR",
    "option_b": "INS",
    "option_c": "JOT",
    "option_d": "INR",
    "correct_option": "B",
    "subject": "Reasoning",
    "topic": "Alphabet Series",
    "difficulty": "Hard",
    "explanation": "The first letters follow +2 progression: A(1), C(3), E(5), G(7) -> I(9). The second letters follow +3 progression: B(2), E(5), H(8), K(11) -> N(14). The third letters follow +4 progression: C(3), G(7), K(11), O(15) -> S(19). Hence, the next cluster is INS.",
    "estimated_time_seconds": 60,
    "_verify": ("AS_three_letter", ["ABC", "CEG", "EHK", "GKO"], "INS")
})

# AS_04
questions.append({
    "question_text": "Identify the missing pair in the letter series: AZ, BY, CX, DW, ?",
    "option_a": "FU",
    "option_b": "EV",
    "option_c": "EW",
    "option_d": "EX",
    "correct_option": "B",
    "subject": "Reasoning",
    "topic": "Alphabet Series",
    "difficulty": "Easy",
    "explanation": "Each pair consists of opposite letters from the alphabet where the sum of their positions is 27 (A=1 and Z=26, B=2 and Y=25, C=3 and X=24, D=4 and W=23). Following the first letter sequence (A, B, C, D), the next letter is E(5), whose opposite pair is V(22). Thus, the missing pair is EV.",
    "estimated_time_seconds": 30,
    "_verify": ("AS_opposite_pairs", ["AZ", "BY", "CX", "DW"], "EV")
})

# AS_05
questions.append({
    "question_text": "What is the next cluster in the series: DFH, EHJ, FJL, GLN, ?",
    "option_a": "HNT",
    "option_b": "HOU",
    "option_c": "INT",
    "option_d": "HMS",
    "correct_option": "A",
    "subject": "Reasoning",
    "topic": "Alphabet Series",
    "difficulty": "Standard",
    "explanation": "The first letter increases by 1 step: D -> E -> F -> G -> H. The second letter increases by 2 steps: F -> H -> J -> L -> N. The third letter increases by 3 steps: H -> K? Wait, H(8)->J(10)->L(12)->N(14) in DFH, EHJ, FJL, GLN: H(8)->J(10)->L(12)->N(14)->P(16)? Let's check: DFH (4,6,8), EHJ (5,8,10)? Wait, let's verify exact positions: D(4) F(6) H(8), E(5) H(8) J(10)... wait, let's fix the step definition precisely.",
    "estimated_time_seconds": 45,
    "_verify": ("AS_pattern_check", "DFH")
})

