# Build Roadmap (phases → concrete builder prompts)

Phase 1 (research + architecture + verified config) — DONE 2026-09-28 (this package).
Blocked on: app creation by user at https://app.base44.com (agent cannot create apps).

## Phase order & what each delivers
P2 Schema deploy — all 11 entities (see 02-architecture.md), RLS on, seeded topics
   + dependency graph + exam config rows + golden test set (20+5 questions).
P3 Review+Import — import UI (CSV/JSON/PDF/manual), validation report, duplicate
   classifier, review queue, conflict dashboard, data-coverage widget.
P4 Practice core — question player (timer, confidence, solution view with source
   labels + PYQ/AI firewall badges), attempt logging, error-type capture.
P5 Simulator — CBT-1/2 exam modes from config rows, mark-for-review, auto-submit,
   −1/3 scoring, post-mock analysis + counterfactual scenarios.
P6 Learning engine — diagnostic → tutor flow, revision cards (1/3/7/15/30 adaptive),
   retrieval mode, teach-back mode, error book, interweaving drills.
P7 Analytics & planning — Exam DNA, Mistake DNA, forgetting radar, ROI priors,
   Daily Mission home screen ("what to do now / why / what's weak / what changed"),
   time-optimizer ("I have 2 hours" → best plan), honest coach reports.
P8 Hardening — golden-set regression page, performance pass (pagination, indexed
   filters), red-team fixes, backup/export (CSV/JSON of all personal data).

## Known constraints (honest)
- Official RRB sites unreachable from sandbox network: user must supply CEN PDFs
  and official answer-key downloads via their own login.
- AI tutoring is an abstraction over whatever model the app's builder provides;
  deterministic engines are the reliability backbone.
- Integration credits currently exhausted: builder messaging may be throttled until
  topped up; Phase 2 begins the moment the app exists and credits allow.
