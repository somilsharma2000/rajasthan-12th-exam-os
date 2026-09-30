---
title: RRB NTPC UG Preparation OS
summary: 'Somil’s evidence-first Base44 exam-preparation system: PYQ provenance, strict
  PYQ/AI separation, configurable simulators, diagnostics, and adaptive revision.'
---

# RRB NTPC UG Preparation OS

Somil is designing a personal RRB NTPC Undergraduate preparation system as an evidence-driven Base44 app. Its goal is to reduce the student’s planning overhead: the home screen should answer what to do next, why it matters, and which weaknesses need attention. The project’s governing rule is that uncertain exam data must be shown as **not verified**, not presented as probably correct.

## Product principles

- Preserve question provenance, source, exam level, and verification state. The planned evidence progression is `UNVERIFIED` → `CROSS_CHECKED` → `OFFICIAL_CONFIRMED`.
- Maintain a hard firewall between actual previous-year questions (PYQs) and AI-generated questions; never let an AI item be presented as a PYQ.
- Never silently invent a question, answer, exam rule, or correction to an official answer key. Keep conflicts visible for review.
- Show dataset coverage honestly, including verified, in-review, and unavailable material. Do not claim full PYQ coverage without evidence.
- Keep scoring, revision scheduling, duplicate detection, and analytics deterministic where possible; use AI for clearly labeled tutoring, generation, and explanation support rather than as the authority for exam facts.

## Planned learning and practice system

The specification calls for provenance-aware PYQ import and review, a config-driven exam simulator, diagnostics, an error book, root-cause analysis, adaptive revision, mock analysis, and a conflict-review queue. The intended revision intervals are 1, 3, 7, 15, and 30 days. Topic dependencies are intended to help connect errors to prerequisite concepts—for example, Percentage to Profit and Loss and Simple/Compound Interest, and Ratio to Partnership. The home screen should turn those signals into an actionable daily mission rather than a generic dashboard.

The architecture research proposed one `Question` entity with a `question_type` field and strict application-level separation, rather than parallel PYQ and AI tables. Exam rules were designed as data rows so that a new notification cycle need not require a code change. The research package also described 11 planned entities and a golden-test-set plan; no implementation evidence for those pieces is included here.

## Exam-pattern evidence and uncertainty

A September 28, 2026 research summary reported that secondary sources agreed on the broad pattern of CBT-1 at 100 questions in 90 minutes, CBT-2 at 120 questions in 90 minutes, and one-third negative marking for wrong answers. Those figures remained **CROSS_CHECKED**, not officially confirmed, because official RRB sites could not be reached from the research environment. The same research noted conflicting secondary-source claims about the Undergraduate section split. Do not treat these figures or any disputed split as official rules until checked against the relevant CEN notification.

The target cycle recorded in the research is **CEN 07/2025 (UG)**. The research summary mentioned reported 2025 application timing and 2026 CBT dates, but those dates were not confirmed from an official document in the supplied evidence. Their present accuracy and relevance should be rechecked rather than assumed.

## Current blockers and next validation inputs

The latest durable project record says that implementation is blocked until Somil creates the app at `app.base44.com`; the agent cannot create a new Base44 app from chat. Official RRB sites were unreachable from the sandbox, so Somil must supply the official CEN/notification PDFs and, when available, relevant official answer-key or response-sheet files. No uploaded assets were supplied in this operation.

The research-and-architecture package was reported complete on September 28, 2026, with five deliverables in the workspace’s `rrb-ntpc-os/` directory: exam configuration and provenance, architecture and entities, PYQ import specification, topic taxonomy and dependency graph, and a build roadmap. The source update also warned that integration credits were above the available limit; confirm current credit status before planning substantial builds.
