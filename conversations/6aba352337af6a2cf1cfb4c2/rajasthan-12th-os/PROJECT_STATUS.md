# PROJECT_STATUS.md — Rajasthan 12th-Level Exam OS
*Living document. Honest status only. Never report planned work as completed.*

**Last updated:** 2026-10-01 03:20 IST (Master v2 audit cycle shipped)
**Current phase:** Phase 2 — BUILD + CONTENT (app LIVE on GitHub Pages; bank 1794 shippable; real-PYQ waves live: CET 2024 (149) + Police 2022 (608) + LDC 2024 P1 (142) + Stenographer 2024 (128); graduate waves EXCLUDED: Patwari 2025, CET 28-Sep — D-2026-09-30-05/06)

## Snapshot (verified 2026-09-30)
- Live URL: https://somilsharma2000.github.io/rajasthan-12th-exam-os/ (deploy hash verified each release)
- Bank: 1666 shippable / 1666 total (validate-bank: ZERO ISSUES) — real PYQ: CET 149 + Police 608 + LDC 142 (validate-bank: ZERO ISSUES) — real PYQ: CET 2024 S1 149 + Police 2022 608; rest agent-authored, firewall-labeled
- Engine: Practice / full-length Mock / Error Book (persistent, 1-3-7-15-30 revision ladder) / Exam DNA / Exam Hubs (12) / Progress report / Saved questions / glossary
- Workflow audit (2026-09-30): fixed full-bank reachability (Fisher-Yates sampling), timer resume on background, persistent Error Book, Agriculture Supervisor pattern fix (100Q × 3 marks, 2 hr, 1/3 negative — CROSS_CHECKED, official PDF pending)


## Completed (verified)
- 2026-10-01 Master Prompt v2 audit cycle: adversarial security/edge battery clean, SVG icon system, result→error-review retention CTA, JSON-LD+robots.txt, second discovery pass. QA standard upgraded to v2 (OWASP 2025 + WCAG 2.2). Deployed + live-verified.
- 2026-10-01 10-PASS WEBSITE AUDIT: 9 findings fixed (contrast, zoom, focus traps, back-button, SEO, aria, legacy vars, manifest, tap targets), all re-tested in real browser both languages; permanent QA standard at docs/QA-MASTER-PROMPT.md. Deployed + live-verified.
- 2026-10-01 MOTION & POLISH LAYER: full animation system (entrance/hover/feedback), player keyboard shortcuts, ESC handling, toast, gauge sweep, a11y (focus-visible, reduced-motion). Deployed + live-verified.
- 2026-10-01 ENGLISH UI COMPLETE: full audit + fixes (Source label, EN icons, lang persistence); EN-mode QA all screens clean. Deployed + live-verified.
- 2026-10-01 PERFORMANCE WAVE: bank lazy-loaded per exam — first load 439KB->62KB gzip (7x); subject counts from build-time meta. Deployed + live-verified.
- 2026-10-01 TYPING MODULE (Module A): exact RSSB scoring (20/8000 x netKDPH, 9-marks qualifying, -5/word), 8+8 hi/en passages, exam-real split-pane, word-level review, history. Unit + real-browser QA. Deployed + live-verified.
- 2026-10-01 AI COACH (client side): panel from explanation view, question-context injection, honest setup state, 15/day cap; proxy Worker code shipped (serverless/ai-coach-worker.js, Gemini, per-IP KV cap). Deployed + live-verified (client). Worker deploy = founder action. D-010.
- 2026-10-01 STENO E-RULE SETTLED: official Advt 07/2024 archived; image-only scan (direct read impossible in sandbox). Threshold 0.10 retained at CROSS_CHECKED. D-011; gather/verify-steno-e-rule.md.
- 2026-10-01 PAYMENTS DESIGN: docs/payments-plan.md — Razorpay + Worker license architecture, blockers on founder Razorpay account. D-012.
- 2026-10-01 BUILD GUARD: scripts/ensure-index.js auto-restores vanishing index.html.
0. 2026-09-30 LDC WAVE SHIPPED: 142 verified real PYQs (LDC/Junior Assistant 2024 P1, 11 Aug 2024) merged live. Dual-archive cross-check (TEP Hindi × StudyFry English): 125 dual-agree, 13 adjudicated, 3 solo-verified (mean/median 5.75, 2×median−mode=11, sodium→kerosene), 1 dual-text-match (Q24/Q68 dedupe). Q71 archive key corrected by independent solve (200√3/3, option 0). Excluded per zero-fake-data: Q9/Q26/Q70/Q95/Q96/Q141/Q142 (figure/formula/unsolvable). Content-based subject tagging 143→142 (india-gk 48, science 40, maths 33, raj-gk 22, ~1 lost in dedupe). Bank 1524→1666, validator ZERO ISSUES, live hash verified.
0. 2026-09-30 POLICE WAVE SHIPPED: 608 verified real PYQs (Rajasthan Police Constable 2022, 5 shifts, 13-16 May) merged into live bank. 4-pass audit: 632 staged → 10 wrong archive answers corrected → 19 excluded (13 UNSURE, 4 BROKEN, 1 unfixable, 1 duplicate-options). Content-based subject re-tagging: broken archive section split fully overridden (632/632 re-tagged). Duplicate vs existing bank: 0. Commit + deploy + live hash verified.
0. 2026-09-30 LDC 2024 P1 (11 Aug 2024) VERIFIED: 153/150-solvable questions — 141 double-archive agreement (TEP Hindi × StudyFry English, 90% match), 14 disputes adjudicated (TEP 0 right, SF 12 right, both wrong: Q32 trig 100√3 fixed, Q141 unsolvable excluded), Q24 recovered from StudyFry. 4 figure-dependent excluded.
0. 2026-09-30 NEW PYQ SOURCES STAGED (verification pending): Patwari 17-Aug-2025 S1+S2 (197), CET 28-Sep-2024 S1 (147), Stenographer 5-Oct-2024 S1 (128, bonus source)
1. Market research: exam inventory (research/01), Rajasthan GK + PYQ strategy (research/02), competitor teardown (research/03), positioning + monetization (research/04) — all delivered with source URLs
2. Exam inventory: 12 exams profiled, 3 candidates identified for verification
3. Independent recheck of my own research (found 2 load-bearing conflicts — see below) — verification discipline is active, not just claimed
4. Project skeleton created (app/ React+Vite structure, README with architecture)
5. Founder decisions recorded in DECISIONS.md
6. Scope confirmed with founder: Rajasthan-first, 12th-level only, CET as centerpiece

## Verified facts (rechecked independently)
- Police Constable: 150 Qs, 2 hrs, 1/4 negative marking (two independent sources)
- CET 12th Level structure: 150 Qs, 300 marks, 3 hours (corroborated)
- SSC CHSL/GD/MTS/RRB Group D eligibility levels (central — phase 2 only)

## NOT VERIFIED (hard gates before entering product)
1. CET 12th Level negative marking — sources conflict (report says none, one source says 1/3). Needs official RSMSSB notification PDF. BLOCKS the CET exam config.
2. Patwari/VDO/Mahila Supervisor graduate-only exclusion basis — needs official RSSB notification confirmation (exclusion stands meanwhile; exclusion is safe, inclusion would not be)
3. Jail Prahari pattern — medium confidence only; needs official notification
4. High Court Junior Assistant eligibility — conflicting sources (12th vs graduate); BLOCKS exam #13
5. Librarian Grade-3 eligibility — needs official notification; BLOCKS exam #14
6. District Court junior clerk eligibility — needs official notification; BLOCKS exam #15
7. All PYQ content — collection not started (blocked on config lock + repo); volume estimates (~3,500 PYQs, 1,500 GK) are UNVERIFIED ESTIMATES until archive spot-check
8. REET Level 1 eligibility basis (12th + D.El.Ed/JBT) — AUDIT-001 addition
9. Stenographer/PA G-II qualification + shorthand speed — AUDIT-001 addition
8. Brand name availability — researched as unclaimed, but recheck needed before any public use

## Blocked / Pending founder actions
1. GitHub personal access token (fine-grained, Contents read/write) — BLOCKS repo creation, all code work, deployment. Owner: Founder.
2. Brand pick (Rajasthan Pariksha / Marudhar Abhyas / CET Sethu) — founder-level decision, needed before any public-facing build

## Known technical debt
None yet (no code written beyond skeleton)

## Next actions (ordered)
1. Pull official notification PDFs for: CET 12th (negative marking), Jail Prahari, High Court JA, Librarian G-3, District Court clerk → lock all 15 exam configs (patterns from PDFs only)
2. Founder: send GitHub token → repo created, skeleton pushed, CI/CD + Pages deploy set up
3. Build Phase 2: exam engine + question player + pattern config loader
4. Phase 3 content pipeline: CET/LDC/Constable PYQ ingestion with verification pipeline

## Metrics
Not yet applicable (pre-launch). First targets set at Phase 4 stress test.

## Latest audit
**AUDIT-001 (2026-09-30, full adversarial audit):** verdict = foundation STRONG, product NOT LAUNCH READY (correct). Found 2 critical (workspace single-point-of-failure — backup awaiting founder word; static-app paid-content gating loophole — features 48-49 re-architected), 7 issues fixed in-session, 6 gaps logged (legal notes, tester recruitment plan, AI cost cap, gate template, 08-report sourcing discipline, zero verified progress on 5 disputed facts). Full record: AUDIT-001.md.

## Pre-audit record (kept)
Pre-flight self-audit 2026-09-30: research claims spot-checked independently; 2 conflicts found and quarantined as NOT VERIFIED (would have shipped as facts otherwise). Status: research phase PASSES honesty gate; product NOT LAUNCH READY (no build exists).
## Update 2026-09-30 (late): REAL PYQ LAYER — WAVE 1 LIVE
- Bank: 774 -> 880 questions (879 shippable; 1 quarantined seed item retained for provenance). First REAL exam-paper questions in the product.
- Source: RSSB CET (Senior Secondary) 2024, Shift-1 (22 Oct 2024) — archived solved-paper transcription (shikshanagari.com), independently re-verified in 4 passes (parse audit, GK web cross-check, maths/science full re-solve, language grammar pass in progress).
- Quality catches: archive's own answer key had 3 wrong answers (Q31, Q107 corrected; Q138 dropped — broken options); 4 unusable questions (figure-dependent/corrupt) excluded — never-shipped rule held.
- 105 verified PYQs shipped live with origin=real_pyq + provenance; 40 Hindi/English/passage items in final verification batch (deploy follows verdicts).
- Bug fixes same session: Result screen dead-end (zero exit buttons) — fixed + browser-verified; white-screen-at-first-deploy class of bugs now covered by real-browser verification standard.
- Sources secured for next waves: Police Constable 2022 (5 shifts, official archived PDFs downloaded — needs Devanagari normalization), LDC sources mapped.

## Update 2026-10-01 (00:40 IST): PREMIUM DARK-MODE UI/UX SHIPPED — research-driven redesign
- Founder directive: research presentations & placement → applied as full visual overhaul.
- Research: 2 missions completed — (1) exam-app teardown (Physics Wallah, Testbook, Adda247, Unacademy: home order, question/result screens, nav, placement tricks), (2) SaaS dark-mode standards (Linear/Vercel/Radix surface elevation, Devanagari typography, 8pt grid, thumb-zone, trust-badge hierarchy). Files: research/presentation-exam-apps.md, research/presentation-saas-standards.md.
- Shipped in app/src (styles.css fully rewritten + App.jsx presentation layer rebuilt; engine/logic untouched):
  * 4-tier dark surfaces (#09090B canvas / #141417 cards / elevated / modal), 1px borders instead of shadows; violet accent ≤10% area discipline (#7C3AED fills, #A78BFA text accents).
  * Devanagari-first: 16px body floor, 1.7x line-height, weights 400-600.
  * Home: sticky 52px blurred header, resume-mock card above fold, 4 quick-nav tiles, 2-col exam launcher grid (icon avatar + honest per-paper PYQ tag — only CET/LDC/Police/Steno whose own paper PYQs exist in bank).
  * Hub: featured card + 3-stat grid + inline verified badge; sticky bottom dock CTA (thumb zone).
  * Player: thin progress bar, 50px option cards with letter key badges, instant explanation with provenance, palette slide-over sheet, exit-CONFIRM modal (fixes accidental session-loss audit bug), timer with <5min red state.
  * Result: conic-gradient score gauge hero, 4-stat grid, DNA bars (ok/mid/weak coloring), error book with correct-answer highlight.
- QA (adversarial, real-browser): 7 headless-Chrome flow screenshots + computed-style assertions (surfaces/dock/typography/palette states all PASS) + pixel checks (dark 85-91%, accent discipline) + EN toggle, mock timer 2:59:59, palette states D/C correct, exit-confirm logic both branches correct, bank validation 1794/1794 ZERO issues, vite build green (1,924KB / 439KB gzip; code-splitting flagged as future optimization).
- Fixes found during QA: exam-id mismatches in icon/PYQ maps (ldc-clerk-g2 → ldc-junior-assistant, steno-pa-g2 → stenographer); my own double-write patch bug caught by dist-bundle inspection.
- Repo notes: nested repo (re-init during rebuild) has unrelated history vs platform origin (s3://base44-app-repositories) — platform auto-commit snapshots the workspace; do NOT push nested repo (merge attempt aborted cleanly). app/index.html is gitignored — restore via blob 79a07fbfba43b5f248c0d840e8db2f7dead94ba3 when missing.
- 2026-10-01 00:56: DEPLOYED LIVE — main c7636a6..bcd5fae, gh-pages d382df3..6d0e48e. Live verified end-to-end (HTTP 200, new bundle hashes, design tokens + PYQ map in served assets, SW v3, production screenshot matches local QA). Deploy recipe: push main; clone gh-pages; rsync app/dist/ with --exclude .git (NEVER --delete without exclude — it eats .git); commit + push.