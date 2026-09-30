# Competitive Gap Roadmap — v4 (2026-10-01)

Evidence base: research/03 (competitor teardown), 06 (Testbook/Adda247 deep audit), 07
(regional players), 08 (marketing audit), 09 (first-hand Testbook visit). Prioritization
rule: value-to-Rajasthan-12th-students first, honesty constraints second (no fake data,
no invented benchmarks), effort third. `SHIPPED` items are live-verified.

## Phase A — static-app capable, ship next (no backend needed)

| # | Feature | Evidence | Effort | Status |
|---|---------|----------|--------|--------|
| A1 | **Speed & accuracy analytics** — per-question time bars, own-avg vs exam budget, slow-meant-wrong / rushed answers insights | Testbook's top adopt-list item (06 §adopt #4); #1 complaint vs Dhurina/regional players ("no time-per-question analytics", 07); Physics Wallah "question-by-question time distribution" (03) | M | **SHIPPED 2026-10-01** (cycle 4, live-verified 7/7) |
| A2 | **Spaced revision engine (1/3/7/15/30d)** — error-book items auto-resurface; "आज का revision" home card | No regional player offers scheduled error revision (07: "basic scorecard only"); core of our coaching-replacement promise | M | queued |
| A3 | **Weak-topic heatmap + micro-practice CTA** — topic-level accuracy tags, "Practice 20Q on this topic" | Testbook's strongest diagnostic (06 §analytics: Strong/Weak/Unattempted); turns analytics into action | M | queued (needs topic tags on bank questions) |
| A4 | **WhatsApp share card** — formatted score image + wa.me link | Students already screenshot scores; 09 adopt-list: "WhatsApp as support channel"; zero-backend viral loop | S | queued |
| A5 | **Verified short-tricks / mnemonics section (Rajasthan GK)** | Dhurina's most-praised feature (Subhash Sir शॉर्ट ट्रिक्स, 07 §5) — we beat it with source-tagged verified content | M (research wave) | queued |

## Phase B — content moat (research pipeline, zero-manual-labor)

| # | Feature | Evidence | Effort | Status |
|---|---------|----------|--------|--------|
| B1 | Real PYQ waves: Police 2022 (632 staged), LDC 2024, Forest Guard, REET-L1, Lab Assistant, Jail Prahari, Librarian G-3 | "PYQ specialist" positioning vs generic players (04); Testbook's broken Rajasthan deep links are our opening (09) | L, running | in flight |
| B2 | Cutoff + vacancy pages per exam hub | Rajasthan-specialist trust signal; SEO entry pages (08) | S each | queued |
| B3 | Daily Rajasthan current-affairs card (offline-capable) | Testbook/Adda247 daily feeds; static-PWA can cache daily | S | queued |
| B4 | Bank depth to 2000+ verified questions | LAUNCH_PLAN phase-1 gate for paid launch | L, running | 1794 / 2000 |

## Phase C — post-backend-deploy (BLOCKED: owner wrangler deploy, OPERATIONS.md)

| # | Feature | Evidence | Constraint |
|---|---------|----------|------------|
| C1 | **AI Coach live** | Adda247 doubt engine parity | Worker is launch-ready (28 tests); blocked on owner deploy only |
| C2 | Percentile / All-India rank | Testbook "percentile rankings" (03) | HONESTY GATE: percentiles need a real user cohort; with few users this would be a fabricated number — ship only with enough real attempts, never invent |
| C3 | Streaks / reminders | Testbook streaks (06 §adopt #6) | Needs backend or is localStorage-only approximation — decide with real usage data |
| C4 | Referral tracking | 09 adopt-list: "referral mechanic (post-validation)" | only after 500-tester validation |

## Avoid (deliberate — recorded so future agents don't "fix" this)

- Fake scale counters, dark-pattern urgency popups (09 avoid-list)
- Invented "topper average time" benchmarks (no dataset exists — speed analytics uses own data + exam budget only)
- Video/live-class infra: heavy, and competitors' #1 complaint is exactly this infra lagging (07: Dhurina server congestion during sales)
- Bulk redesigns: controlled INSPECT → REPORT → PRIORITIZE → MODIFY → TEST → RECHECK passes only

## Next 3 (recommended order)

1. A2 spaced revision (highest retention value, pure static)
2. A4 share card (smallest effort, growth)
3. A3 weak-topic heatmap (builds on A1's session data + needs topic-tag pass on the bank)
