# FEATURES.md — Rajasthan 12th-Level Exam OS
*Full feature inventory. v1 = launch scope, v2 = post-launch. Every feature ships only after the three-pass gate (requirements / failure / business). No feature ships mocked or half-built.*

## A. Exam Engine & Practice (the core)
1. Config-driven exam simulation — each exam is a JSON pattern (sections, questions, marks, duration, negative marking); one engine, every paper (v1)
2. Native RSMSSB 5th-option "question unattempted" OMR rule — exactly like the real CBT (v1) [competitor gap #3]
3. Full-length mocks per exam with live timer, question palette, mark-for-review, submit confirmation (v1)
4. Topic-wise timed tests with negative marking (v1)
5. Free practice mode: answer-then-explain, unlimited (v1)
6. Section-wise sectional tests (v1)
7. Real exam-feel settings: same question count, same time pressure, same marking (v1)
8. Custom test builder (pick subject/topic/difficulty/count) (v1)

## B. Verified PYQ Bank (the moat)
9. Official PYQs 2016-2024 from RSSB answer keys, per exam, per year/shift (v1)
10. Every question independently solved + re-verified before entering the bank (v1)
11. Full provenance on every question: exam, year, shift, source URL, verification status (v1)
12. PYQ vs practice question firewall — visually labeled, never mixed (v1)
13. Step-by-step explanations + shortcuts + common traps (v1) [Testbook's #1 weakness]
14. Micro-topic tagging (subject → topic → subtopic → concept) (v1)
15. PYQ trend analytics: what repeated, what's hot per exam (v1)
16. Report-a-problem button on every question (v1)

## C. Rajasthan GK Core (the specialist depth)
17. Complete Rajasthan GK syllabus map serving all 15 exams (v1)
18. 15 highest-yield subtopics built first with PYQ evidence (v1)
19. Flashcards + mnemonic engine for facts (folk deities, dances, integration stages) (v1) [gap #7]
20. Daily Rajasthan Economic Survey + current affairs practice (v1) [gap #4]
21. Rajasthan GK audio revision clips (walk-time learning) (v2)
22. District-wise GK facts map (v2)

## D. Learning System
23. Topic sheets: concept, intuition, formulas, worked examples, traps (Hindi-first) (v1)
24. AI doubt solver: "explain this question step by step" on every question (v1)
25. AI topic coach: "teach me like a beginner" per topic (v1)
26. Diagnostic 3-5 question assessments before teaching any topic (v1)
27. Daily study plan: "What should I do now?" one concrete recommendation with reasoning (v1)
28. On-screen scratchpad for rough work (v2)

## E. Error Intelligence & Personalization
29. Personal error book: every wrong answer logged with your answer vs correct (v1)
30. Root-cause error types (concept / calculation / misread / time pressure / guess) (v1)
31. Auto-generated recovery drills from your actual mistakes (v1)
32. Adaptive engine: calculation errors → calculation-control drills; slow-but-accurate → speed drills; fast-but-wrong → accuracy drills (v1)
33. Weakness-targeted question generation (v2, large scale)

## F. Retention & Revision
34. Spaced repetition: 1/3/7/15/30-day revision cycles (v1)
35. Retention questions — correct-once is not mastered; re-tested over time (v1)
36. Daily revision queue with due dates (v1)

## G. Exam DNA & Analytics
37. Per-exam readiness score (v1)
38. Accuracy, speed, guessing-behavior analysis per topic (v1)
39. Strong/weak subject bars, attempt history, streaks (v1)
40. Mock result deep-analysis: negative-mark impact, weakest topics, time-per-question (v1)

## H. Product Experience (trust + reach)
41. Hindi-first UI with English toggle (v1)
42. Ultra-light PWA under ~15MB, works on 2G/3G, installable like a real app (v1) [gap #2]
43. Offline mode: downloaded tests/PYQs work without network (v1)
44. Apple-grade clean design: no clutter, no pop-ups, no dark patterns (v1)
45. Dark/light mode, large-text support (v1)
46. Exam terminology glossary for first-generation aspirants (v1)
47. Exam calendar + notification alerts (v1)

## I. Growth & Money
48. Paid passes via UPI — ARCHITECTURE BLOCKED (AUDIT-001 C-2): static app cannot gate paid content; needs accounts/server-side gating decision before activation; price = founder's call (working assumption ₹99, D-007)
49. Annual all-access — same gating requirement (v2, post-500-user test)
50. Shareable score cards / rank cards (viral loop) (v1)
51. Telegram/WhatsApp channel with deep app links (v1) [gap #5]
52. Referral rewards (v2)
53. Phase-2 central exams module (SSC GD, CHSL, MTS, RRB Group D) (v2)

## Non-features (explicit)
- No live video courses (not our positioning)
- No fake data, no fake streaks, no engagement-dark-patterns
- No graduate-level exams in this product
- No RRB NTPC (separate product: NTPC Pulse)

## J. Exam Hub (per-exam complete information section) — founder-mandated 2026-09-30
Every exam gets a complete information section. A student should never need to leave the app to know anything about their exam.
54. Exam overview: name, recruiting body, posts, pay level (v1)
55. Eligibility: education, age limit, relaxations — locked from official notification only (v1)
56. Complete exam pattern: stages, sections, questions, marks, duration, negative marking (v1)
57. Full syllabus: subject-wise and topic-wise, exactly as per official notification (v1)
58. Selection process: all stages (written / PET / typing / DV / medical) with details (v1)
59. Official links: notification PDF, apply page, admit card, answer keys, results — straight to official portals (v1)
60. Notices & updates timeline: dated, official-only, with source link; unverified rumors never posted (v1)
61. Exam calendar: notification date, application window, exam dates when announced (v1)
62. PYQ availability listing + cut-off history where officially published (v1)
63. Preparation hub link-out: that exam's topic sheets, tests, mocks, PYQs (v1)
64. Exam FAQ in plain Hindi (v1)

Maintenance rule: exam info is data (JSON) checked against official sources on a recurring schedule by the agent; every update carries date + source. Stale info is flagged internally, never shown as current.

## K. AI Student Assistant (founder question 2026-09-30 — honest phased answer)
65. v1 "Coach-in-the-content": every question carries an AI-authored step-by-step explanation, and every topic has an AI-authored coach that anticipates doubts (pre-generated, verified by me, costs nothing at runtime, works offline) (v1)
66. v1 daily "what should I do now" engine: deterministic recommendation logic, feels personal, no runtime AI needed (v1)
67. LIVE AI chat ("ask anything" assistant) — FOUNDER APPROVED 2026-09-30 (cost accepted): LLM API via serverless proxy (key never in static bundle), per-student rate limits, cost caps, abuse/prompt-injection protection, labeled AI answers, graceful fallback to verified static explanations (v1 scope, ships with the backend)
68. Rule: no fake chat button ships in v1. If a student sees an assistant, it actually works (honest-UI constitution).

## L. Gap analysis — proposed additions awaiting founder pick (2026-09-30, not yet approved)
69. TYPING TEST module — LDC/Junior Assistant has a real Hindi/English typing exam stage; in-app typing practice with speed/accuracy tracking (HIGH VALUE — real exam stage, nobody's list had it)
70. Application Assistant — per-exam document checklist (photo size, caste/EWS/domicile certs), fee steps, common rejection mistakes (students fail at applying, not just exams)
71. PET readiness pack — Police Constable/Forest Guard physical test standards, training plan, official standards from notification (content feature)
72. Post-preference analyzer — CET score → which posts you realistically qualify for (uses official cut-offs)
73. Progress backup/restore — export code so progress survives phone change (rural reality: phones break/get replaced)
74. Bookmarks + search across questions, notes, GK
75. Last-day revision pack — formula sheet, one-page micro-cards, exam-day checklist per exam
76. Post-selection guide — pay level, career path, DV/documents after result (completes the trust loop)
REJECTED (not adding, reasons logged): live video courses, social feed/chat rooms (moderation cost, off-focus), PDF piracy-style content dumps
