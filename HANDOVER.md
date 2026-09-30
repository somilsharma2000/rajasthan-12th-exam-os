# HANDOVER.md — Rajasthan 12th-Level Exam OS (Agent Handover)

*2026-10-01. For any engineer/agent taking over this project. Read this top to bottom before touching anything. This doc summarizes the living spec set — the repo files remain the single source of truth.*

## 1. What we are making

**Live product:** https://somilsharma2000.github.io/rajasthan-12th-exam-os/
**Repo:** https://github.com/somilsharma2000/rajasthan-12th-exam-os (private; owner: Somil Sharma)
**Code dir:** `app/` (React + Vite PWA, static build, GitHub Pages, zero hosting cost, zero vendor lock-in)

One premium app for **every Rajasthan government exam that accepts 12th-pass candidates** — CET 12th (gateway to 7 posts), LDC/Junior Assistant, Police Constable, Forest Guard, Forester, Jail Prahari, Stenographer/PA, Lab Assistant, REET L1, and more (15-exam inventory). Config-driven exam engine: each exam is a JSON pattern (questions, marks, duration, negative marking, RSMSSB 5th-option OMR rule) — one engine, every paper.

**Vision:** a coaching-institute replacement for district-level Hindi-medium students — verified PYQs, full-pattern mocks, error analysis, spaced revision, speed analytics — honest to the last fact, fast on 2G, Hindi-first. Positioning: **"Practice & PYQ Specialist — the app that adds what YouTube can't give."** Not video courses, not generic SaaS.

**Founder rules (non-negotiable):** zero manual labor for the founder; agents do ALL research, verification, content, code. Every load-bearing fact independently verified against official notifications. "NOT VERIFIED" always beats "probably correct". Never present unverified info as fact. Never half-finish. Never report "done" without end-to-end verification.

## 2. Why this product (rationale)

- Lakhs of aspirants per cycle face: machine-translated shallow content (Testbook), bloated crashy video apps (Utkarsh), error-filled answer keys, zero timed practice for YouTube learners, ₹50,000+ offline coaching.
- Competitors' #1 weaknesses we exploit (evidence in `research/03,06,07,08,09`): no time-per-question analytics, broken Rajasthan deep links, fake urgency popups, unverified content. Our wedge: **verified depth + analytics competitors don't have.**
- Graduate-level exams (Patwari, VDO, CET-graduate) are **excluded by decision** — never merge their content (D-2026-09-30-05/06). Central exams = phase-2 module, not launch scope. RRB NTPC is a SEPARATE product (NTPC Pulse) — never duplicated here.

## 3. Data integrity (the moat)

1. No question enters `/data` without independent agent verification — real PYQs and AI-generated practice questions are **separate datasets, labeled in UI** (firewall).
2. UNVERIFIED never ships to students. Every PYQ carries year/shift/board/source provenance + verification_status.
3. Official notification PDFs are the ONLY load-bearing source for patterns/eligibility/marking. Coaching sites are never load-bearing.
4. 4-pass pipeline: Gather (2-source rule) → Provenance → Adversarial attack (independent agent) → Final audit. Full manual: `OPERATIONS.md`.

## 4. Current state (2026-10-01)

- **Bank:** 1,794 questions / 1,019 real PYQs. Waves shipped: Stenographer 2024 P-1 (128 PYQs), Police 2022 (632 staged), more in flight toward 2,000+ launch gate.
- **App (v4, live-verified):** 4-exam cards → hub (pattern/eligibility/pay, all verified) → practice (instant explanations + provenance) & mock (full pattern, timer, negative marking, 5th-option rule) → result (gauge, speed & accuracy analytics, momentum CTA) → error book with **spaced revision ladder** (1-3-7-15-30d; wrong resets rung, correct advances, mastered past 30d deletes record; wrongCount lifetime). Home "आज का रिवीजन" card when due. Typing module, glossary, progress, saved, bookmarks. Hindi-first, EN toggle. Hidden Owner Console (footer 5-tap) — students never see backend config (D-11).
- **Honesty gates:** no invented benchmarks (speed analytics = own data + exam budget only), no fake buttons, no fake data, streaks/percentiles deferred until real data exists.
- **AI Coach:** serverless proxy worker is launch-ready (28 unit tests, per-IP cap, KV, cost caps) but NOT deployed — **BLOCKED on founder's 2-minute wrangler deploy** (steps in `OPERATIONS.md`); agent bakes `VITE_COACH_URL` after owner sends the URL.
- **Payments:** deferred. A static app cannot gate paid content — needs accounts/gating architecture first (AUDIT-001 C-2). Working price assumption ₹99, founder's final call.

## 5. How work is done (the machine)

- QA standard: `docs/QA-MASTER-PROMPT.md` (modular 10-pass protocol, applicability-checked per change). Operating flow: **INSPECT → REPORT → PRIORITIZE → MODIFY → TEST → RECHECK** — never bulk-redesign, preserve what works.
- Release gate (never skip): `npm run release` = `qa/engine.test.mjs` (9 unit groups) → `vite build` → `qa/smoke.mjs` (19 real-browser checks incl. revision E2E, submit-idempotency, coach-config-hiding, owner-console).
- Deploy: build → rsync `dist/` → `gh-pages` branch → push → verify live chunk-hash matches → `qa/live-accept.mjs` (7) + `qa/viewport-audit.mjs` (32 checks, 320-1920px sweep).
- Living files, updated EVERY session: `PROJECT_MASTER_SPEC.md` (spec), `PROJECT_STATUS.md` (state), `DECISIONS.md` (D-YYYY-MM-DD-NN log), `CHECKLIST.md` (never-forget list, [x] with date, change log, never silently delete), `OPERATIONS.md` (pipeline manual), `LAUNCH_PLAN.md`, `FEATURES.md`, `research/` (01-10 evidence reports incl. `10-competitive-gap-roadmap.md`).

## 6. Gotchas (build/deploy traps — will bite you)

- `app/index.html` IS git-tracked now (was the snapshot-wipe bug); if missing: needs the module script entry + SEO head; recoverable from gh-pages commit b2f6784.
- LFS push broken-pipe → `GIT_LFS_SKIP_PUSH=1`.
- `vite preview` must run in tmux (backgrounded subshell dies with the bash call).
- Error-book records are **keyed by qid** (no `id` field on legacy records) — `startErrSession` uses `Object.entries` now; don't regress to `e.id` (D-13).
- TEP archives mark dropped questions "(*)" — exclude them; parse by Show Answer markers.
- Palette buttons are SVG — smoke clicks via aria-label.
- Smallest real path: one focused cycle = audit → implement → `npm run release` → deploy → live-accept → docs update → commit.

## 7. Roadmap (research/10-competitive-gap-roadmap.md)

**Next:** A4 WhatsApp share card → A3 weak-topic heatmap (needs topic-tag pass on bank) → A5 verified short-tricks section.
**Then:** Phase B content moat (PYQ waves to 2,000+, cutoff/vacancy pages, daily Rajasthan current affairs).
**Backend-blocked (Phase C):** coach live (owner deploy), percentile/leaderboards (needs REAL cohort — never fake), streaks, referrals (post-500-tester validation).
**Avoid forever:** fake scale/urgency, invented benchmarks, video infra, bulk redesigns.

## 8. Open items / risks

- Founder's GitHub token needed for repo pushes (current agent has it via env).
- 5 disputed exam facts pending official-PDF settlement (CET negative marking detail, Jail Prahari pattern, High Court JA / Librarian G-3 / District Court qualifications) — see CHECKLIST.md blockers.
- Legal (Copyright Act S.52 position on PYQ use, GST/consumer law) flagged for professional review BEFORE charging money.
- Exam calendar unpredictability — mitigation: evergreen multi-exam bank.

*Hand an agent this file + repo access and it can continue safely. The living files govern; when in doubt, read `docs/ARCHITECTURE.md` and `DECISIONS.md` before changing anything.*
