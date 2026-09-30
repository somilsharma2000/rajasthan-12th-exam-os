# Full-Marks Readiness Engine (target: 100/100 CBT-1, 120/120 CBT-2)

Target framing: this is a TRAINING target. The system tracks it, works toward it,
and never claims it guarantees exam performance.

## Readiness score per stage (0–100%), computed from real data only

readiness = weighted mean of:
1. CONCEPT MASTERY — per Topic: last-10 attempts accuracy, with mastery = accuracy
   >= 95% at RRB_Level difficulty AND retention check passed. Topics without enough
   attempts count as 0% (honest, not assumed).
2. PYQ COVERAGE — fraction of available verified PYQs (by topic) attempted at least
   once, weighted by topic pyq_frequency.
3. ACCURACY — rolling last-500 attempts accuracy; target 100% means negative marking
   damage = 0 (wrong + guessed-wrong both count against).
4. SPEED — median time per topic vs estimated_time_seconds; target band = at or
   under estimate with >= 95% accuracy (never reward speed that drops accuracy).
5. RETENTION — % of RevisionCards passing their scheduled retrieval checks
   (1/3/7/15/30-day ladder).
6. MOCK PERFORMANCE — best full-sim score vs 100/120 target; also "clean score" =
   score + marks lost to negative marking + silly-mistake questions.
7. ERROR RATE — open (unresolved) MistakeEntries, weighted by repeat frequency
   (Mistake DNA). Same root cause repeated = heavier penalty.

Weights (config-as-data, tunable from ExamFact-style rows):
mastery 25%, coverage 15%, accuracy 20%, speed 10%, retention 15%, mock 10%, errors 5%.

## The 100% rule in practice
readiness = 100% requires ALL of: every syllabus topic mastered at RRB_Level,
all available verified PYQs attempted, zero negative-marking damage in last sims,
all revision checks passing, zero repeated-unresolved error patterns.
Anything else shows the exact gap: "You are at 74%. The 26% breaks down as:
Polity retention (8%), Trains speed (5%)." — evidence, never vague percentages.

## Anti-illusion guards
- "I studied it" does not raise readiness — only attempts/tests do.
- One-time solves decay: mastery requires passing the retention ladder.
- Confidence calibration: confident-wrong answers penalize mastery harder.

## Implementation notes (deterministic, zero AI cost)
All computed from Attempt/TestSession/MistakeEntry/RevisionCard aggregates in one
backend function `computeReadiness()`; cached, recomputed after each session.
Displayed on Home as the honest answer to "How am I performing?" alongside the
per-subject gap list. No invented baseline — starts at 0% until real attempts exist.
