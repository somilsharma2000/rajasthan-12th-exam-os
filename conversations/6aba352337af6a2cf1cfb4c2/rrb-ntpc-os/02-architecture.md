# RRB NTPC OS — System Architecture (Phase 1 decision record)

## Guiding decisions (with rationale)

1. **Deterministic-first.** Anything that can be computed must be computed: scoring,
   negative marking, accuracy, revision intervals, duplicate detection, mock assembly
   constraints, analytics. AI is reserved for tutoring, explanation drafting, and
   research triage. This maximizes reliability and minimizes cost.
2. **Everything with a source.** Every question, fact, and explanation carries
   provenance + verification_status. UI always shows data coverage honestly.
3. **Config over code for exam rules.** Exam pattern lives in data rows (per CEN,
   per stage) so a new notification never requires re-engineering.
4. **AI abstraction.** One backend module (`aiService`) fronts all AI calls with a
   role split (Tutor / Generator / Analyzer / Researcher). Provider/model lives in
   config. If AI is down, all deterministic features keep working (FAILSAFE).
5. **Single Question entity with a hard `question_type` firewall** (REAL_PYQ,
   AI_GENERATED, AI_VARIATION, PRACTICE, MOCK) instead of parallel tables — simpler
   joins, and the firewall is enforced in UI labels + mock filters + quality gates.

## Modules and data flow

```
            ┌─────────────── RESEARCH/IMPORT ───────────────┐
Sources → Ingestion (PDF/CSV/JSON/manual) → Validation → Review Queue → QUESTION BANK
        (OCR flagged, provenance stored)      (conflicts, OCR unsure,     │
                                                ambiguity land here)      ├→ Trusted set
                                                                          │
Topic Taxonomy (+dependency graph) ─┬→ Diagnostic → Learn flow (AI Tutor)│
                                    │   (3–5 questions: KNOWN/PARTIAL/   │
                                    │    WEAK/UNKNOWN → skip known)      │
Attempt stream ─→ Scoring → Error Analysis (typed causes: CONCEPT,   ←────┘
                 negative   FORMULA, ARITHMETIC, READING, UNIT,
                 marking     CARELESS, TIME, TRAP, GUESS)
                    │            │
                    ├→ Error Book + Mistake DNA (pattern fingerprints)
                    ├→ Revision engine (1/3/7/15/30-day adaptive intervals)
                    ├→ Exam DNA profile (speed, guessing, confidence calibration)
                    └→ Analytics → Daily Mission planner ("what to do now & why")
Mock/test engine ─→ constraint-based assembly (subject mix, difficulty,
                    PYQ-pattern, weakness, adversarial modes)
Exam simulator ─→ CBT-1/CBT-2 config-driven, timer, mark-for-review,
                  auto-submit, post-mock counterfactual analysis
```

## Entity design (Base44 schemas ready to deploy)

1. **Question** — text, options A–D, official_answer, verified_answer, answer_confidence,
   explanation + explanation_status, question_type, exam metadata (CEN, stage, year,
   date, shift, RRB, language), subject/topic/subtopic, difficulty, concept_tested,
   shortcut, common_trap, estimated_time, quality_band (HIGH/MED/LOW/REVIEW),
   verification_status, source chain (source_name, source_url, source_level,
   publication_date, retrieval_date), duplicate_group, image_url (visual questions
   keep the original image — never guessed into text), version history (JSON).
2. **Attempt** — question_id, session_id, selected_option, is_correct, time_taken_s,
   confidence (pre-answer 1–5), changed_answer flag, mode. The raw material for
   everything analytical.
3. **TestSession** — type (PRACTICE/MOCK/SIM/ADVERSARIAL/RETRIEVAL/TEACHBACK...),
   stage, config snapshot, question list, per-question timeline, score, analysis JSON.
4. **Topic** — subject, name, parent, syllabus_ref, depends_on (dependency graph),
   pyq_frequency, mastery fields (accuracy, attempts, last_seen).
5. **RevisionCard** — one-pagers auto-assembled: formulas, rules, traps, personal
   mistakes; SM-2-style next_review_date/interval/ease, retention state.
6. **MistakeEntry** — attempt link, error_type (typed taxonomy), root_cause note,
   topic, resolved flag. Feeds Mistake DNA + Error Book.
7. **ExamFact** — config rows: CEN, stage, questions, duration, marking, dates,
   vacancies, category cutoffs — all with provenance + verification_status.
8. **SourceRecord** — registry of every source with level (1–4), used-by references.
9. **CurrentAffairsFact** — event_date, topic, importance, relevance window/expiry,
   verification_status. Static-vs-current flag.
10. **DailyMission** — date, ordered tasks each with "why this task", status,
    actual time spent. Missed-day recovery recalculates rather than shifts.
11. **ReviewItem** — human review queue: answer conflicts, OCR uncertainty,
    ambiguous wording, source conflicts. Approve/reject actions.

## AI roles (behind aiService abstraction)
- **Tutor**: diagnostic → concept → intuition → worked example → PYQ → trap →
  mini-test → verdict. Modes: LEARN / FAST REVISION / PYQ / ERROR REPAIR.
- **Generator**: practice/AI-variation questions, ALWAYS labeled AI_GENERATED,
  never entering PYQ sets. Adversarial generation from Mistake DNA.
- **Analyzer**: explanation verification (recompute maths, check logic), error
  classification assist (final class is deterministic where possible), report drafts.
- **Researcher**: source discovery + triage; nothing it produces is trusted without
  review or cross-check.

## Cost & reliability controls
- Deterministic paths for scoring/revision/analytics (no AI calls).
- Cache explanations; regenerate only on question edit.
- AI never re-solves what code can compute (maths validation via JS calculation).
- Failsafe: AI outage → practice, mocks, revision, analytics all still work.

## Golden test set (to seed before launch)
20 questions across subjects with known answers + 5 tricky cases: one disputed
answer, one OCR-garbled question, one visual/table question, one duplicate pair,
one off-syllabus question. Tests: scoring, −1/3 marking, duplicate detection,
quality gate, review queue routing, analytics correctness.
