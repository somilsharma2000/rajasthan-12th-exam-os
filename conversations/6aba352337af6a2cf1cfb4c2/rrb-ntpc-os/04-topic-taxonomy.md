# Topic Taxonomy & Dependency Graph (CBT-1/CBT-2 NTPC UG)

Subjects: Mathematics, Reasoning & General Intelligence, General Awareness
(includes General Science). Exact section split/weightage: pending official CEN PDF
(see 01-exam-config-verified.md).

## Mathematics
Foundations: Number System → HCF/LCM → **Percentage** → Ratio & Proportion
- Percentage → Profit & Loss → Discount | → SI/CI | → Mixture & Alligation
- Ratio → Partnership | → Ages | → Average
- Mixture & Alligation depends on Ratio + Percentage
- Average → Data Interpretation
- Number System → Simplification → Approximation
- Time & Work ← Ratio; Time Speed Distance ← Ratio (speed); Trains ← TSD
- Mensuration (2D/3D); Geometry basics → Mensuration
- Algebra basics, Trigonometry basics (CBT-2 level), Statistics (DI)

## Reasoning
- Coding-Decoding, Series (number/alpha), Analogy, Classification/Odd-one-out
- Syllogism (Venn method), Statement-Conclusion, Assumption (CR)
- Blood Relations → Coded Blood Relations; Direction Sense; Ranking/Order
- Puzzle (seating: linear/circular, scheduling) ← Direction + Ranking
- Venn Diagrams; Mathematical Operations; Mirror/Water images; Paper folding
- Calendar; Clock; Dice; Counting Figures; Data Sufficiency
- Cross-cutting skill: question classification → shortest valid method

## General Awareness
- Static: History (ancient→modern, freedom struggle high-weight), Geography
  (India physical, world basics), Polity (Constitution, Parliament, schemes'
  machinery), Economy (basics, banking, budget), Art & Culture
- Science: Physics / Chemistry / Biology (NCERT 6–10 scope, PYQ-driven selection)
- Government Schemes (with launch year/ministry — high trap area)
- Computers & IT basics, Environment, Sports, Books/Persons/Awards/Days
- Current Affairs: last ~12 months, relevance-window filtered, decay into static

## Dependency engine rules
1. If foundational topic accuracy < 60%, block/defer dependent-topic advanced work.
2. Weakness in a parent propagates a "downstream risk" note to dependents.
3. Revision scheduling of a parent triggers quick-recall check of dependents.
4. Graph stored as data (Topic.depends_on) — extendable, not hardcoded.
