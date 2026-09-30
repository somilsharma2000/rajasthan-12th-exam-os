import json
import re

questions = []

def add_q(topic, q_text, opt_a, opt_b, opt_c, opt_d, correct, diff, est_time, explanation, verifier_fn=None):
    q = {
        "question_text": q_text,
        "option_a": opt_a,
        "option_b": opt_b,
        "option_c": opt_c,
        "option_d": opt_d,
        "correct_option": correct,
        "explanation": explanation,
        "subject": "Reasoning",
        "topic": topic,
        "difficulty": diff,
        "estimated_time_seconds": est_time
    }
    if verifier_fn:
        verifier_fn(q)
    questions.append(q)

# TOPIC 1: ALPHABET SERIES (10 Questions)

def verify_as_01(q):
    seq = [ord(c) - 64 for c in ["B", "D", "G", "K", "P"]]
    diffs = [seq[i+1] - seq[i] for i in range(len(seq)-1)]
    assert diffs == [2, 3, 4, 5]
    next_pos = seq[-1] + 6
    assert chr(64 + next_pos) == "V"
    assert q["option_a"] == "V" and q["correct_option"] == "A"

add_q(
    topic="Alphabet Series",
    q_text="Find the missing letter in the given series: B, D, G, K, P, ?",
    opt_a="V", opt_b="W", opt_c="U", opt_d="X",
    correct="A", diff="Easy", est_time=30,
    explanation="The letter positions increase by consecutive integers: B(2) + 2 = D(4), D(4) + 3 = G(7), G(7) + 4 = K(11), and K(11) + 5 = P(16). Adding 6 to P(16) gives 22, which corresponds to the letter V. Therefore, V is the correct missing letter.",
    verifier_fn=verify_as_01
)

def verify_as_02(q):
    terms = ["CZ", "FX", "IV", "LT"]
    p1 = [ord(t[0]) - 64 for t in terms]
    p2 = [ord(t[1]) - 64 for t in terms]
    assert [p1[i+1] - p1[i] for i in range(len(p1)-1)] == [3, 3, 3]
    assert [p2[i+1] - p2[i] for i in range(len(p2)-1)] == [-2, -2, -2]
    next_t = chr(64 + p1[-1] + 3) + chr(64 + p2[-1] - 2)
    assert next_t == "OR"
    assert q["option_b"] == "OR" and q["correct_option"] == "B"

add_q(
    topic="Alphabet Series",
    q_text="Which letter pair will complete the given series: CZ, FX, IV, LT, ?",
    opt_a="NR", opt_b="OR", opt_c="OS", opt_d="PR",
    correct="B", diff="Standard", est_time=45,
    explanation="The first letters advance by +3 positions: C(3) -> F(6) -> I(9) -> L(12) -> O(15). The second letters decrease by -2 positions: Z(26) -> X(24) -> V(22) -> T(20) -> R(18). Combining these results gives the pair OR.",
    verifier_fn=verify_as_02
)

def verify_as_03(q):
    terms = ["ABC", "CEG", "EHK", "GKO"]
    p1 = [ord(t[0]) - 64 for t in terms]
    p2 = [ord(t[1]) - 64 for t in terms]
    p3 = [ord(t[2]) - 64 for t in terms]
    assert [p1[i+1] - p1[i] for i in range(len(p1)-1)] == [2, 2, 2]
    assert [p2[i+1] - p2[i] for i in range(len(p2)-1)] == [3, 3, 3]
    assert [p3[i+1] - p3[i] for i in range(len(p3)-1)] == [4, 4, 4]
    next_t = chr(64 + p1[-1] + 2) + chr(64 + p2[-1] + 3) + chr(64 + p3[-1] + 4)
    assert next_t == "INS"
    assert q["option_c"] == "INS" and q["correct_option"] == "C"

add_q(
    topic="Alphabet Series",
    q_text="Select the cluster that continues the series: ABC, CEG, EHK, GKO, ?",
    opt_a="HMR", opt_b="JOT", opt_c="INS", opt_d="INR",
    correct="C", diff="Hard", est_time=60,
    explanation="The first letter increases by 2 positions (A, C, E, G -> I), the second letter increases by 3 positions (B, E, H, K -> N), and the third letter increases by 4 positions (C, G, K, O -> S). Joining the three letters gives INS. Thus, INS is the next term in the series.",
    verifier_fn=verify_as_03
)

def verify_as_04(q):
    pairs = ["AZ", "BY", "CX", "DW"]
    for p in pairs:
        assert (ord(p[0]) - 64) + (ord(p[1]) - 64) == 27
    next_p = chr(64 + 5) + chr(64 + 22)
    assert next_p == "EV"
    assert q["option_d"] == "EV" and q["correct_option"] == "D"

add_q(
    topic="Alphabet Series",
    q_text="Identify the missing term in the series: AZ, BY, CX, DW, ?",
    opt_a="FU", opt_b="EW", opt_c="EX", opt_d="EV",
    correct="D", diff="Easy", est_time=30,
    explanation="Each term consists of opposite letter pairs whose alphabetical position sum equals 27 (A=1 and Z=26, B=2 and Y=25, C=3 and X=24, D=4 and W=23). Following the first letter order (A, B, C, D), the next letter is E(5). Its opposite letter is V(22), forming the pair EV.",
    verifier_fn=verify_as_04
)

def verify_as_05(q):
    terms = ["DFH", "FIL", "HLP", "JOT"]
    p1 = [ord(t[0]) - 64 for t in terms]
    p2 = [ord(t[1]) - 64 for t in terms]
    p3 = [ord(t[2]) - 64 for t in terms]
    assert [p1[i+1] - p1[i] for i in range(3)] == [2, 2, 2]
    assert [p2[i+1] - p2[i] for i in range(3)] == [3, 3, 3]
    assert [p3[i+1] - p3[i] for i in range(3)] == [4, 4, 4]
    next_t = chr(64 + p1[-1] + 2) + chr(64 + p2[-1] + 3) + chr(64 + p3[-1] + 4)
    assert next_t == "LRX"
    assert q["option_a"] == "LRX" and q["correct_option"] == "A"

add_q(
    topic="Alphabet Series",
    q_text="Which triplet comes next in the letter series: DFH, FIL, HLP, JOT, ?",
    opt_a="LRX", opt_b="MSY", opt_c="LQX", opt_d="KRW",
    correct="A", diff="Standard", est_time=50,
    explanation="The first letters move forward by +2 steps (D, F, H, J -> L), the second letters move forward by +3 steps (F, I, L, O -> R), and the third letters move forward by +4 steps (H, L, P, T -> X). Combining these gives LRX. Therefore, LRX is the correct option.",
    verifier_fn=verify_as_05
)

def verify_as_06(q):
    seq = [ord(c) - 64 for c in ["Z", "W", "S", "N", "H"]]
    diffs = [seq[i+1] - seq[i] for i in range(len(seq)-1)]
    assert diffs == [-3, -4, -5, -6]
    next_pos = seq[-1] - 7
    assert next_pos == 1
    assert chr(64 + next_pos) == "A"
    assert q["option_b"] == "A" and q["correct_option"] == "B"

add_q(
    topic="Alphabet Series",
    q_text="Complete the letter series: Z, W, S, N, H, ?",
    opt_a="B", opt_b="A", opt_c="C", opt_d="Z",
    correct="B", diff="Standard", est_time=40,
    explanation="The alphabetical positions decrease by increasing steps: Z(26) - 3 = W(23), W(23) - 4 = S(19), S(19) - 5 = N(14), and N(14) - 6 = H(8). Subtracting 7 from H(8) gives 1, which corresponds to letter A. Hence, A completes the series.",
    verifier_fn=verify_as_06
)

def verify_as_07(q):
    pattern = "mnon" * 4
    given = "m_onmn_nmno__non"
    missing = [p for g, p in zip(given, pattern) if g == '_']
    assert "".join(missing) == "nonm"
    assert q["option_c"] == "n o n m" and q["correct_option"] == "C"

add_q(
    topic="Alphabet Series",
    q_text="Which set of letters, when sequentially placed at the gaps, completes the pattern: m _ o n m n _ n m n o _ _ n o n ?",
    opt_a="n m o n", opt_b="n o m n", opt_c="n o n m", opt_d="o n m n",
    correct="C", diff="Hard", est_time=60,
    explanation="The series repeats the 4-letter block 'm n o n' four times continuously to form a 16-letter sequence. Filling the blank spaces at positions 2, 7, 12, and 13 requires the letters n, o, n, and m respectively. Therefore, the required sequence of missing letters is n o n m.",
    verifier_fn=verify_as_07
)

def verify_as_08(q):
    p1 = [2, 3, 5, 9]
    p2 = [26, 25, 23, 19]
    assert [p1[i+1] - p1[i] for i in range(3)] == [1, 2, 4]
    assert [p2[i+1] - p2[i] for i in range(3)] == [-1, -2, -4]
    assert chr(64 + p1[-1] + 8) + chr(64 + p2[-1] - 8) == "QK"
    assert q["option_d"] == "QK" and q["correct_option"] == "D"

add_q(
    topic="Alphabet Series",
    q_text="Find the missing term in the given series: BZ, CY, EW, IS, ?",
    opt_a="PK", opt_b="QL", opt_c="RJ", opt_d="QK",
    correct="D", diff="Hard", est_time=55,
    explanation="The first letter increases by doubling steps: B(2) + 1 = C(3), C(3) + 2 = E(5), E(5) + 4 = I(9), and I(9) + 8 = Q(17). The second letter decreases by doubling steps: Z(26) - 1 = Y(25), Y(25) - 2 = W(23), W(23) - 4 = S(19), and S(19) - 8 = K(11). Combining Q and K yields QK.",
    verifier_fn=verify_as_08
)

def verify_as_09(q):
    terms = ["ACD", "BDF", "CEH", "DFJ"]
    for t in terms:
        assert (ord(t[0]) - 64) + (ord(t[1]) - 64) == (ord(t[2]) - 64)
    assert (ord("E") - 64) + (ord("G") - 64) == (ord("L") - 64)
    assert q["option_a"] == "EGL" and q["correct_option"] == "A"

add_q(
    topic="Alphabet Series",
    q_text="What will be the next letter cluster in the series: ACD, BDF, CEH, DFJ, ?",
    opt_a="EGL", opt_b="EHK", opt_c="FGL", opt_d="EGM",
    correct="A", diff="Standard", est_time=45,
    explanation="In each cluster, the positional value of the third letter is the sum of the positional values of the first two letters (for instance, A(1) + C(3) = D(4), B(2) + D(4) = F(6)). The first letters progress as A, B, C, D -> E, and second letters progress as C, D, E, F -> G. E(5) + G(7) = 12, which corresponds to L, giving EGL.",
    verifier_fn=verify_as_09
)

def verify_as_10(q):
    seq = [ord(c) - 64 for c in ["A", "C", "B", "D", "C", "E", "D"]]
    assert [seq[i+1] - seq[i] for i in range(len(seq)-1)] == [2, -1, 2, -1, 2, -1]
    assert chr(64 + seq[-1] + 2) == "F"
    assert q["option_b"] == "F" and q["correct_option"] == "B"

add_q(
    topic="Alphabet Series",
    q_text="Select the letter that correctly completes the series: A, C, B, D, C, E, D, ?",
    opt_a="E", opt_b="F", opt_c="G", opt_d="H",
    correct="B", diff="Easy", est_time=30,
    explanation="The series follows an alternating pattern of adding 2 positions and subtracting 1 position (+2, -1, +2, -1, +2, -1). Following D(4), adding 2 positions gives 6, which corresponds to the letter F. Hence, F is the correct next letter.",
    verifier_fn=verify_as_10
)

print(f"Alphabet Series done: {len(questions)}")

# TOPIC 2: CLASSIFICATION (ODD ONE OUT) (10 Questions)

def verify_cl_01(q):
    nums = [17, 29, 37, 27]
    primes = [n for n in nums if all(n % d != 0 for d in range(2, int(n**0.5)+1))]
    assert primes == [17, 29, 37]
    assert q["option_a"] == "27" and q["correct_option"] == "A"

add_q(
    topic="Classification",
    q_text="Find the odd one out among the given numbers: 27, 17, 29, 37.",
    opt_a="27", opt_b="17", opt_c="29", opt_d="37",
    correct="A", diff="Easy", est_time=30,
    explanation="17, 29, and 37 are prime numbers as they have only two factors (1 and themselves). On the other hand, 27 is a composite number divisible by 1, 3, 9, and 27. Therefore, 27 is the odd one out.",
    verifier_fn=verify_cl_01
)

def verify_cl_02(q):
    opts = ["AEI", "OUA", "EIO", "BCD"]
    vowel_counts = [sum(1 for c in s if c in "AEIOU") for s in opts]
    assert vowel_counts == [3, 3, 3, 0]
    assert q["option_b"] == "BCD" and q["correct_option"] == "B"

add_q(
    topic="Classification",
    q_text="Select the letter group that does NOT belong to the same group: AEI, BCD, OUA, EIO.",
    opt_a="AEI", opt_b="BCD", opt_c="OUA", opt_d="EIO",
    correct="B", diff="Easy", est_time=30,
    explanation="AEI, OUA, and EIO consist entirely of English vowels. In contrast, BCD consists entirely of consonants. Hence, BCD is the odd one out.",
    verifier_fn=verify_cl_02
)

def verify_cl_03(q):
    dims = {"Square meter": 2, "Square feet": 2, "Square yard": 2, "Cubic meter": 3}
    assert dims[q["option_c"]] == 3 and q["correct_option"] == "C"

add_q(
    topic="Classification",
    q_text="Choose the term that is different from the other three: Square meter, Square feet, Cubic meter, Square yard.",
    opt_a="Square meter", opt_b="Square feet", opt_c="Cubic meter", opt_d="Square yard",
    correct="C", diff="Easy", est_time=30,
    explanation="Square meter, Square feet, and Square yard are two-dimensional units used to measure surface area. In contrast, Cubic meter is a three-dimensional unit used to measure volume. Thus, Cubic meter is the odd term.",
    verifier_fn=verify_cl_03
)

def verify_cl_04(q):
    sides = {"Triangle": 3, "Pentagon": 5, "Heptagon": 7, "Hexagon": 6}
    odd_sides = [k for k, v in sides.items() if v % 2 != 0]
    assert len(odd_sides) == 3
    assert q["option_d"] == "Hexagon" and q["correct_option"] == "D"

add_q(
    topic="Classification",
    q_text="Which polygon is the odd one out based on the number of sides: Triangle, Pentagon, Heptagon, Hexagon?",
    opt_a="Triangle", opt_b="Pentagon", opt_c="Heptagon", opt_d="Hexagon",
    correct="D", diff="Standard", est_time=35,
    explanation="Triangle (3 sides), Pentagon (5 sides), and Heptagon (7 sides) all have an odd number of sides. Hexagon has 6 sides, which is an even number. Therefore, Hexagon is the odd polygon out.",
    verifier_fn=verify_cl_04
)

def verify_cl_05(q):
    groups = ["PRT", "LNP", "TVW", "KMO"]
    gaps = []
    for g in groups:
        pos = [ord(c) - 64 for c in g]
        gaps.append((pos[1]-pos[0], pos[2]-pos[1]))
    assert gaps == [(2, 2), (2, 2), (2, 1), (2, 2)]
    assert q["option_a"] == "TVW" and q["correct_option"] == "A"

add_q(
    topic="Classification",
    q_text="Identify the letter group that does NOT follow the common pattern: TVW, PRT, LNP, KMO.",
    opt_a="TVW", opt_b="PRT", opt_c="LNP", opt_d="KMO",
    correct="A", diff="Standard", est_time=40,
    explanation="In PRT, LNP, and KMO, the consecutive letters have a uniform step difference of +2 positions (P+2=R, R+2=T; L+2=N, N+2=P; K+2=M, M+2=O). In TVW, T+2=V, but V+1=W, violating the +2 pattern. Thus, TVW is the odd one out.",
    verifier_fn=verify_cl_05
)

def verify_cl_06(q):
    types = {"Femur": "Bone", "Biceps": "Muscle", "Tibia": "Bone", "Humerus": "Bone"}
    assert types[q["option_b"]] == "Muscle" and q["correct_option"] == "B"

add_q(
    topic="Classification",
    q_text="Four body structures are listed below. Three are alike in a certain way. Which one is the odd one out: Femur, Biceps, Tibia, Humerus?",
    opt_a="Femur", opt_b="Biceps", opt_c="Tibia", opt_d="Humerus",
    correct="B", diff="Easy", est_time=30,
    explanation="Femur, Tibia, and Humerus are all major bones of the human skeleton. Biceps, however, is a skeletal muscle. Therefore, Biceps is the odd one out.",
    verifier_fn=verify_cl_06
)

def verify_cl_07(q):
    types = {"Condensation": "Phase Change", "Density": "Property", "Freezing": "Phase Change", "Evaporation": "Phase Change"}
    assert types[q["option_c"]] == "Property" and q["correct_option"] == "C"

add_q(
    topic="Classification",
    q_text="Find the odd term out from the following scientific terms: Condensation, Freezing, Density, Evaporation.",
    opt_a="Condensation", opt_b="Freezing", opt_c="Density", opt_d="Evaporation",
    correct="C", diff="Standard", est_time=35,
    explanation="Condensation, Freezing, and Evaporation are physical process terms describing phase transitions of matter. Density, on the other hand, is an intensive physical property representing mass per unit volume. Hence, Density is the odd term.",
    verifier_fn=verify_cl_07
)

def verify_cl_08(q):
    nums = [27, 64, 100, 125]
    cubes = [n for n in nums if round(n**(1/3))**3 == n]
    assert cubes == [27, 64, 125]
    assert q["option_d"] == "100" and q["correct_option"] == "D"

add_q(
    topic="Classification",
    q_text="Select the number that is different from the rest: 27, 64, 125, 100.",
    opt_a="27", opt_b="64", opt_c="125", opt_d="100",
    correct="D", diff="Easy", est_time=30,
    explanation="27 (3³), 64 (4³), and 125 (5³) are all perfect cubes of integers. 100 is a perfect square (10²) but not a perfect cube. Therefore, 100 is the odd number out.",
    verifier_fn=verify_cl_08
)

def verify_cl_09(q):
    bodies = {"Mars": "Planet", "Titan": "Moon", "Jupiter": "Planet", "Venus": "Planet"}
    assert bodies[q["option_a"]] == "Moon" and q["correct_option"] == "A"

add_q(
    topic="Classification",
    q_text="Identify the celestial body that does NOT belong to the same group: Titan, Mars, Jupiter, Venus.",
    opt_a="Titan", opt_b="Mars", opt_c="Jupiter", opt_d="Venus",
    correct="A", diff="Easy", est_time=30,
    explanation="Mars, Jupiter, and Venus are primary planets orbiting the Sun in our Solar System. Titan is a natural satellite (moon) orbiting Saturn. Hence, Titan is the odd celestial body.",
    verifier_fn=verify_cl_09
)

def verify_cl_10(q):
    elems = {"Helium": "Noble Gas", "Neon": "Noble Gas", "Sodium": "Alkali Metal", "Argon": "Noble Gas"}
    assert elems[q["option_b"]] == "Alkali Metal" and q["correct_option"] == "B"

add_q(
    topic="Classification",
    q_text="Which chemical element is the odd one out: Helium, Sodium, Neon, Argon?",
    opt_a="Helium", opt_b="Sodium", opt_c="Neon", opt_d="Argon",
    correct="B", diff="Standard", est_time=35,
    explanation="Helium, Neon, and Argon are noble gases belonging to Group 18 of the periodic table. Sodium is an alkali metal belonging to Group 1. Therefore, Sodium is the odd element out.",
    verifier_fn=verify_cl_10
)

# TOPIC 3: STATEMENT AND CONCLUSION (10 Questions)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. All teachers are researchers.\n2. All researchers are writers.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: All teachers are writers.\nConclusion II: All writers are teachers.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="A", diff="Easy", est_time=45,
    explanation="Since Teachers are a subset of Researchers, and Researchers are a subset of Writers, all Teachers are inherently Writers (Conclusion I follows). However, the converse that all Writers are Teachers does not necessarily hold true (Conclusion II does not follow). Thus, only conclusion I follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. Some engineers are coders.\n2. All coders are logical thinkers.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: All engineers are logical thinkers.\nConclusion II: Some engineers are logical thinkers.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="B", diff="Easy", est_time=45,
    explanation="The engineers who are coders must also be logical thinkers because all coders are logical thinkers, so 'Some engineers are logical thinkers' definitely follows (Conclusion II). However, it cannot be asserted that ALL engineers are logical thinkers, meaning only conclusion II follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. All apples are fruits.\n2. All fruits are organic products.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: Some organic products are fruits.\nConclusion II: All apples are organic products.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="C", diff="Standard", est_time=50,
    explanation="Since all fruits are organic products, by conversion some organic products are fruits (Conclusion I follows). Furthermore, since Apples are a subset of Fruits, and Fruits are a subset of Organic products, all apples are organic products (Conclusion II follows). Therefore, both conclusions I and II follow."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. Some doctors are surgeons.\n2. Some surgeons are musicians.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: All doctors are musicians.\nConclusion II: Some doctors are musicians.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="D", diff="Standard", est_time=50,
    explanation="Two particular premises ('Some') do not yield a definite relationship between the subject of the first statement (doctors) and the predicate of the second statement (musicians). There is no guaranteed overlap between doctors and musicians from the given facts. Hence, neither conclusion I nor II follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. Some roses are red flowers.\n2. No red flower is a synthetic item.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: Some roses are synthetic items.\nConclusion II: No rose is a synthetic item.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Either conclusion I or II follows",
    opt_d="Neither conclusion I nor II follows",
    correct="C", diff="Hard", est_time=60,
    explanation="The statements do not clarify whether roses outside the 'red flower' category overlap with synthetic items. Conclusions I and II form a complementary pair (particular affirmative and universal negative) sharing the same terms. Thus, either Conclusion I must be true or Conclusion II must be true."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. All lions are predators.\n2. No predator is a herbivore.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: No lion is a herbivore.\nConclusion II: Some herbivores are lions.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="A", diff="Standard", est_time=45,
    explanation="All lions fall completely within the set of predators, and since no predator overlaps with herbivores, no lion can be a herbivore (Conclusion I follows). Conclusion II directly contradicts Conclusion I and is false. Hence, only conclusion I follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. Regular physical exercise improves cardiovascular health.\n2. Rohan exercises for 45 minutes every morning.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: Rohan engages in an activity that supports cardiovascular health.\nConclusion II: Daily morning workouts can contribute positively to physical well-being.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="C", diff="Standard", est_time=50,
    explanation="Because Rohan exercises every morning, he participates in regular physical exercise which supports cardiovascular health (Conclusion I follows). Furthermore, Rohan's morning routine exemplifies how regular exercise contributes positively to physical health (Conclusion II follows). Therefore, both conclusions follow."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. Some smartphones are handheld consoles.\n2. Some handheld consoles are portable laptops.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: All smartphones are portable laptops.\nConclusion II: Some smartphones are portable laptops.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="D", diff="Easy", est_time=40,
    explanation="From two particular statements ('Some'), no valid conclusion connecting smartphones and portable laptops can be derived. There is no definite link requiring smartphones to be portable laptops. Thus, neither conclusion I nor II follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. All solar panels generate renewable energy.\n2. All renewable energy sources reduce carbon emissions.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: Some solar panels do not reduce carbon emissions.\nConclusion II: All solar panels reduce carbon emissions.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="B", diff="Standard", est_time=45,
    explanation="Since Solar Panels are a subset of Renewable Energy, and Renewable Energy is a subset of Carbon Emission Reducers, all solar panels reduce carbon emissions (Conclusion II follows). Conclusion I asserts that some solar panels do not reduce emissions, which directly contradicts the statement. Thus, only conclusion II follows."
)

add_q(
    topic="Statement and Conclusion",
    q_text="Given Statements:\n1. All planets are celestial bodies.\n2. No celestial body is a man-made satellite.\n\nWhich of the following conclusions logically follow(s)?\nConclusion I: No planet is a man-made satellite.\nConclusion II: Some man-made satellites are planets.",
    opt_a="Only conclusion I follows",
    opt_b="Only conclusion II follows",
    opt_c="Both conclusions I and II follow",
    opt_d="Neither conclusion I nor II follows",
    correct="A", diff="Standard", est_time=45,
    explanation="Because all planets are entirely contained within celestial bodies, and no celestial body overlaps with man-made satellites, no planet can be a man-made satellite (Conclusion I follows). Conclusion II suggests an overlap that is impossible under the given premise. Therefore, only conclusion I follows."
)

print(f"Classification and Statement&Conclusion done: total {len(questions)}")

# TOPIC 4: VENN DIAGRAMS (10 Questions)

def verify_vd_01(q):
    total = 80
    e = 50
    h = 40
    both = 15
    union = e + h - both
    neither = total - union
    assert union == 75 and neither == 5
    assert q["option_a"] == "5" and q["correct_option"] == "A"

add_q(
    topic="Venn Diagrams",
    q_text="In a group of 80 students, 50 speak English, 40 speak Hindi, and 15 speak both English and Hindi. How many students speak neither English nor Hindi?",
    opt_a="5", opt_b="10", opt_c="15", opt_d="20",
    correct="A", diff="Standard", est_time=45,
    explanation="Using inclusion-exclusion, the total number of students speaking at least one language is 50 + 40 - 15 = 75. Subtracting this from the total group size (80 - 75) leaves 5 students who speak neither language. Therefore, 5 is the correct answer.",
    verifier_fn=verify_vd_01
)

def verify_vd_02(q):
    total = 100
    b = 65
    t = 45
    both = b + t - total
    only_b = b - both
    assert both == 10 and only_b == 55
    assert q["option_b"] == "55" and q["correct_option"] == "B"

add_q(
    topic="Venn Diagrams",
    q_text="In a sports club of 100 members, 65 members play badminton and 45 play tennis. If every member plays at least one of the two games, how many members play ONLY badminton?",
    opt_a="10", opt_b="55", opt_c="45", opt_d="35",
    correct="B", diff="Standard", est_time=50,
    explanation="The number of members playing both games is 65 + 45 - 100 = 10. The number of members playing only badminton is obtained by subtracting those who play both from the total badminton players: 65 - 10 = 55. Thus, 55 members play only badminton.",
    verifier_fn=verify_vd_02
)

def verify_vd_03(q):
    total = 120
    a = 70
    b = 60
    both = 20
    only_b = b - both
    assert only_b == 40
    assert q["option_c"] == "40" and q["correct_option"] == "C"

add_q(
    topic="Venn Diagrams",
    q_text="In a survey of 120 people, 70 read Newspaper A, 60 read Newspaper B, and 20 read both Newspaper A and Newspaper B. How many people read ONLY Newspaper B?",
    opt_a="50", opt_b="30", opt_c="40", opt_d="20",
    correct="C", diff="Easy", est_time=35,
    explanation="The set of people reading Newspaper B includes those who read only B and those who read both newspapers. Subtracting the 20 people who read both from the 60 total readers of Newspaper B gives 60 - 20 = 40. Thus, 40 people read only Newspaper B.",
    verifier_fn=verify_vd_03
)

add_q(
    topic="Venn Diagrams",
    q_text="Which Venn diagram representation best describes the relationship between 'Reptiles', 'Snakes', and 'Cobras'?",
    opt_a="Three mutually intersecting circles",
    opt_b="Two disjoint circles inside a larger circle",
    opt_c="Three separate non-overlapping circles",
    opt_d="Three concentric circles with Cobras inside Snakes, and Snakes inside Reptiles",
    correct="D", diff="Easy", est_time=30,
    explanation="All Cobras are Snakes, and all Snakes are Reptiles. This forms a complete subset nesting structure where Cobras is entirely contained inside Snakes, which is entirely contained inside Reptiles. This is represented by three concentric circles."
)

add_q(
    topic="Venn Diagrams",
    q_text="Which Venn diagram best depicts the relationship among 'Engineers', 'Musicians', and 'Table Tennis Players'?",
    opt_a="Three mutually overlapping circles",
    opt_b="Three separate non-overlapping circles",
    opt_c="One circle containing two non-overlapping circles",
    opt_d="Three concentric circles",
    correct="A", diff="Easy", est_time=30,
    explanation="A person can be an engineer, a musician, and a table tennis player simultaneously or in any combination of two. Therefore, the three categories partially overlap with each other in all regions, represented by three mutually intersecting circles."
)

def verify_vd_06(q):
    dr_ath_only = 7
    assert dr_ath_only == 7
    assert q["option_b"] == "7" and q["correct_option"] == "B"

add_q(
    topic="Venn Diagrams",
    q_text="In a Venn diagram where Triangle represents 'Doctors', Circle represents 'Athletes', and Rectangle represents 'Artists', the numbers are: Doctors only = 12, Athletes only = 18, Artists only = 15, Doctors and Athletes only (not Artists) = 7, Athletes and Artists only (not Doctors) = 9, Doctors and Artists only (not Athletes) = 5, and All three = 4. How many individuals are BOTH Doctors and Athletes, but NOT Artists?",
    opt_a="4", opt_b="7", opt_c="11", opt_d="9",
    correct="B", diff="Standard", est_time=45,
    explanation="The region corresponding to both Doctors (Triangle) and Athletes (Circle) excluding Artists (Rectangle) is explicitly given as the intersection of Triangle and Circle only. Reading from the diagram data, this region contains 7 individuals. Hence, the correct answer is 7.",
    verifier_fn=verify_vd_06
)

def verify_vd_07(q):
    t_only = 25
    t_a_only = 8
    t_s_only = 10
    all_three = 5
    total_teachers = t_only + t_a_only + t_s_only + all_three
    assert total_teachers == 48
    assert q["option_c"] == "48" and q["correct_option"] == "C"

add_q(
    topic="Venn Diagrams",
    q_text="In a survey represented by a Venn diagram: Square represents 'Teachers', Circle represents 'Authors', and Triangle represents 'Swimmers'. The region counts are: Teachers only = 25, Authors only = 20, Swimmers only = 15, Teachers & Authors only = 8, Authors & Swimmers only = 6, Teachers & Swimmers only = 10, and All three = 5. What is the total number of Teachers?",
    opt_a="43", opt_b="38", opt_c="48", opt_d="53",
    correct="C", diff="Standard", est_time=50,
    explanation="To find the total number of teachers, sum all regions within the Square: Teachers only (25) + Teachers & Authors only (8) + Teachers & Swimmers only (10) + All three (5). 25 + 8 + 10 + 5 = 48. Thus, there are 48 teachers in total.",
    verifier_fn=verify_vd_07
)

def verify_vd_08(q):
    sci = 70
    math = 75
    fail_both = 10
    pass_at_least_one = 100 - fail_both
    both = sci + math - pass_at_least_one
    assert pass_at_least_one == 90 and both == 55
    assert q["option_d"] == "55%" and q["correct_option"] == "D"

add_q(
    topic="Venn Diagrams",
    q_text="In an examination, 70% of the candidates passed in Science and 75% passed in Mathematics. If 10% failed in both subjects, what percentage of candidates passed in BOTH subjects?",
    opt_a="45%", opt_b="50%", opt_c="60%", opt_d="55%",
    correct="D", diff="Hard", est_time=60,
    explanation="Since 10% failed both subjects, 100% - 10% = 90% of candidates passed in at least one subject. Using inclusion-exclusion: Percentage passing both = (70% + 75%) - 90% = 145% - 90% = 55%. Therefore, 55% passed both subjects.",
    verifier_fn=verify_vd_08
)

add_q(
    topic="Venn Diagrams",
    q_text="Which Venn diagram accurately represents the relation between 'Furniture', 'Chairs', and 'Laptops'?",
    opt_a="A large circle containing a smaller circle, with a third separate circle outside",
    opt_b="Three concentric circles",
    opt_c="Three mutually intersecting circles",
    opt_d="Three separate non-overlapping circles",
    correct="A", diff="Easy", est_time=30,
    explanation="Chairs are a subset of Furniture, so the circle for Chairs lies entirely inside the Furniture circle. Laptops are electronic items completely unrelated to furniture, so the circle for Laptops is separate and disjoint. This matches option A."
)

def verify_vd_10(q):
    total = 200
    rice = 110
    wheat = 90
    both = 30
    only_rice = rice - both
    only_wheat = wheat - both
    exactly_one = only_rice + only_wheat
    assert only_rice == 80 and only_wheat == 60 and exactly_one == 140
    assert q["option_b"] == "140" and q["correct_option"] == "B"

add_q(
    topic="Venn Diagrams",
    q_text="In a village of 200 residents, 110 cultivate Rice, 90 cultivate Wheat, and 30 cultivate BOTH Rice and Wheat. How many residents cultivate EXACTLY ONE crop?",
    opt_a="110", opt_b="140", opt_c="170", opt_d="120",
    correct="B", diff="Standard", est_time=45,
    explanation="The number of residents cultivating only Rice is 110 - 30 = 80. The number cultivating only Wheat is 90 - 30 = 60. Adding these together gives 80 + 60 = 140 residents who cultivate exactly one crop.",
    verifier_fn=verify_vd_10
)


# TOPIC 5: DATA SUFFICIENCY (10 Questions)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the current age of Priya?\n\nStatement (1): Priya is 4 years older than her brother Rahul.\nStatement (2): The sum of the current ages of Priya and Rahul is 28 years.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="C", diff="Standard", est_time=50,
    explanation="Neither Statement 1 (P = R + 4) nor Statement 2 (P + R = 28) alone is sufficient as each yields multiple age combinations. Combining both statements gives (R + 4) + R = 28, which solves uniquely to R = 12 and Priya's age P = 16. Therefore, both statements together are sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: Is the positive integer x an even number?\n\nStatement (1): x is a multiple of 6.\nStatement (2): x is greater than 15.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="A", diff="Easy", est_time=35,
    explanation="Statement 1 states that x is a multiple of 6, meaning x = 6k = 2(3k), which is guaranteed to be an even integer. Statement 2 only states x > 15, which could be even (16) or odd (17). Therefore, Statement 1 alone is sufficient, while Statement 2 alone is not."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the total number of students in a single-file queue?\n\nStatement (1): Kavya is 8th from the front of the queue.\nStatement (2): Kavya is 15th from the back of the same queue.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="C", diff="Standard", est_time=45,
    explanation="Neither Statement 1 (front rank) nor Statement 2 (back rank) alone provides enough information to find the total queue length. Combining both statements allows calculating Total = (Front rank + Back rank) - 1 = 8 + 15 - 1 = 22. Thus, both statements together are sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: How many total marbles are inside the box?\n\nStatement (1): The box contains only red and blue marbles in equal proportion.\nStatement (2): The box contains 25 blue marbles and 25 red marbles, with no other items.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="B", diff="Easy", est_time=35,
    explanation="Statement 1 states equal proportions but gives no exact numerical count. Statement 2 directly states there are 25 blue marbles and 25 red marbles with no other items, giving Total = 25 + 25 = 50. Hence, Statement 2 alone is sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: How many seconds does a train take to pass a stationary lamp post?\n\nStatement (1): The length of the train is 200 meters.\nStatement (2): The train travels at a uniform speed of 72 km/h.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="C", diff="Standard", est_time=50,
    explanation="Statement 1 provides train length (200 m) without speed, while Statement 2 provides speed (72 km/h = 20 m/s) without length. Combining both allows calculating Time = Length / Speed = 200 / 20 = 10 seconds. Thus, both statements together are sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the area of a circle?\n\nStatement (1): The radius of the circle is 7 cm.\nStatement (2): The perimeter of the circle is equal to the perimeter of a square with side length 11 cm.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="EITHER statement (1) ALONE or statement (2) ALONE is sufficient.",
    correct="D", diff="Hard", est_time=60,
    explanation="Statement 1 directly gives radius = 7 cm, yielding Area = (22/7) * 7² = 154 cm². Statement 2 gives circumference = 4 * 11 = 44 cm, from which 2 * (22/7) * r = 44 gives r = 7 cm and Area = 154 cm². Since each statement independently determines the exact area, either statement alone is sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: Who among A, B, and C is the tallest?\n\nStatement (1): A is taller than B.\nStatement (2): B is shorter than C.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="D", diff="Standard", est_time=45,
    explanation="Statement 1 establishes A > B and Statement 2 establishes C > B. Combining both statements shows B is shorter than both A and C, but gives no information regarding whether A or C is taller. Therefore, even together the statements are not sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the simple interest earned on a sum of money over 2 years?\n\nStatement (1): The annual rate of simple interest is 10% per annum.\nStatement (2): The principal sum invested is ₹5,000 and the annual interest rate is 10% per annum.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="B", diff="Easy", est_time=40,
    explanation="Statement 1 provides only the rate of interest without the principal amount, making it insufficient. Statement 2 provides the principal (₹5,000), rate (10%), and time (2 years given in the question), allowing direct calculation SI = (5000 * 10 * 2) / 100 = ₹1,000. Hence, Statement 2 alone is sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the cost price of an article?\n\nStatement (1): The selling price of the article is ₹480.\nStatement (2): Selling the article yields a profit percentage of 20%.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="C", diff="Standard", est_time=45,
    explanation="Statement 1 gives selling price (₹480) without profit percentage, while Statement 2 gives profit percentage (20%) without selling price. Combining both allows calculating Cost Price = 480 / 1.20 = ₹400, so both statements together are sufficient."
)

add_q(
    topic="Data Sufficiency",
    q_text="Question: What is the value of a two-digit positive number?\n\nStatement (1): The sum of the tens digit and units digit is 9.\nStatement (2): The tens digit is exactly twice the units digit.\n\nWhich statement(s) is/are sufficient to answer the question?",
    opt_a="Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.",
    opt_b="Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.",
    opt_c="BOTH statements (1) and (2) TOGETHER are sufficient, but NEITHER statement alone is sufficient.",
    opt_d="Statements (1) and (2) TOGETHER are NOT sufficient.",
    correct="C", diff="Hard", est_time=55,
    explanation="Neither Statement 1 (T + U = 9) nor Statement 2 (T = 2U) alone is sufficient as each yields multiple possible numbers. Combining both gives 2U + U = 9 => 3U = 9 => U = 3 and T = 6, yielding uniquely the number 63. Thus, both statements together are sufficient."
)

# Checks
print(f"Total questions: {len(questions)}")
assert len(questions) == 50

topic_counts = {}
for q in questions:
    t = q["topic"]
    topic_counts[t] = topic_counts.get(t, 0) + 1

print("Topic breakdown:", topic_counts)

banned_phrases = [
    "class of 60", "cricket", "football", "dice prime", "clock 6:00",
    "aman 12th", "dogs-mammals", "pens-pencils-erasers"
]

correct_dist = {}
for idx, q in enumerate(questions):
    req_keys = ["question_text", "option_a", "option_b", "option_c", "option_d", "correct_option", "explanation", "subject", "topic", "difficulty", "estimated_time_seconds"]
    for k in req_keys:
        assert k in q, f"Q{idx+1} missing key {k}"
    assert q["subject"] == "Reasoning"
    assert q["difficulty"] in ["Easy", "Standard", "Hard"]
    assert 30 <= q["estimated_time_seconds"] <= 90
    assert q["correct_option"] in ["A", "B", "C", "D"]
    correct_dist[q["correct_option"]] = correct_dist.get(q["correct_option"], 0) + 1
    opts = [q["option_a"], q["option_b"], q["option_c"], q["option_d"]]
    assert len(set(opts)) == 4, f"Q{idx+1} duplicate options: {opts}"
    cleaned = re.sub(r'(\d)\.(\d)', r'\1_\2', q['explanation'])
    cleaned = re.sub(r'e\.g\.', 'for instance', cleaned)
    cleaned = re.sub(r'i\.e\.', 'that is', cleaned)
    sentences = [s.strip() for s in re.split(r'[.!?]+', cleaned) if s.strip()]
    assert 2 <= len(sentences) <= 3, f"Q{idx+1} explanation sentence count {len(sentences)}: '{q['explanation']}'" 
    q_str_lower = (q["question_text"] + " " + q["explanation"]).lower()
    for bp in banned_phrases:
        assert bp not in q_str_lower, f"Q{idx+1} contains banned phrase '{bp}'"

print("Correct option distribution:", correct_dist)

with open("authored-reasoning-b.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print("SUCCESSFULLY WRITTEN authored-reasoning-b.json")
