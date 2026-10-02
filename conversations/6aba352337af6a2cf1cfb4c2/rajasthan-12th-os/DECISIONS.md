# DECISIONS.md — Rajasthan 12th-Level Exam OS
*Living document. Never silently reverse a decision: preserve history, add a new entry, explain the change.*

---

## D-001 — Build the Rajasthan 12th-level exam app as a GitHub-hosted project
- **Date:** 2026-09-30
- **Founder approval:** Yes (explicit command: "Make the app on github")
- **Context:** Founder initially heard "new repo", then clarified GitHub explicitly after I defaulted to Base44.
- **Options considered:** Base44 app builder (fast, metered credits, platform-owned) vs GitHub repo + static hosting (free forever, fully founder-owned, no credit dependency)
- **Chosen:** GitHub. React + Vite PWA, content as verified JSON, GitHub Pages hosting.
- **Reason:** Zero hosting cost, zero integration-credit dependency, code and content stay in founder-controlled repositories, free hosting forever.
- **Consequences:** No built-in auth/payments in v1 (on-device progress; payments deferred); agent needs founder's GitHub token to push.
- **Reversibility:** Low-medium (content pipeline is portable either way).

## D-002 — Product scope: Rajasthan state 12th-level exams only
- **Date:** 2026-09-30
- **Founder approval:** Yes (asked "which is best", accepted recommendation)
- **Options:** Rajasthan-first vs central-exams-first vs both at launch
- **Chosen:** Rajasthan-first; central exams (SSC GD, CHSL, MTS, RRB Group D) as phase-2 paid module only.
- **Reason:** Differentiation is the verified Rajasthan PYQ depth nobody has; same-student efficiency (shared Rajasthan GK core across 12+ exams); central GK would double verification workload and dilute positioning.
- **Consequences:** Smaller TAM at launch, specialist brand. NTPC UG stays in the separate NTPC Pulse product (never duplicated here).

## D-003 — Exclude graduate-level exams (Patwari, VDO, Mahila Supervisor)
- **Date:** 2026-09-30
- **Founder approval:** Yes (accepted the exclusion when listed)
- **Status caveat:** The graduate-only rule is itself still NOT VERIFIED against the official notification (see PROJECT_STATUS). Exclusion stays safe: including unverified exams would damage trust; exclusion risks nothing.
- **Reversibility:** Easy to add later as a separate graduate-level product if founder wants.

## D-004 — CET 12th Level as the product centerpiece
- **Date:** 2026-09-30
- **Founder approval:** Inferred from scope agreement (research-backed recommendation, founder asked for exam list and endorsed)
- **Reason:** One exam gates 7 posts (LDC, Police Constable, Forester, Jail Prahari, Hostel Sup, Jamadar) = the single largest student pool; content build for CET serves the most paying users first.
- **Consequence:** Content pipeline order starts with CET/LDC/Constable PYQs.

## D-005 — Hindi-first product with English toggle
- **Date:** 2026-09-30
- **Founder approval:** Yes (agreed in planning)
- **Reason:** 92-95% of target aspirants are Hindi-medium (research/02).
- **Consequence:** All content authored Hindi-first, English secondary; UI bilingual toggle.

## D-006 — Verification constitution (standing, founder-mandated)
- **Date:** 2026-09-30
- **Founder approval:** Yes (explicit: "always rechek", "dont chect", "never present unverified info as fact")
- **Rules:** Every load-bearing fact (patterns, eligibility, marking) locked ONLY from official notification PDFs; coaching sites never load-bearing; independent re-solve of every question before it enters the bank; UNVERIFIED never ships; strict REAL_PYQ vs AI-generated firewall with visible labels.
- **Reversibility:** Never reversed. Any future exception requires an explicit founder decision entry.

## D-007 — Monetization model (PROPOSED, not yet approved)
- **Date:** 2026-09-30
- **Founder approval:** PARTIAL — founder command 2026-09-30: stop discussing pricing entirely; final number depends on founder mood. WORKING ASSUMPTION: one-time/entry price ₹99. All pricing talk closed until founder reopens it.
- **Proposal:** Free core + paid access. Working assumption: ₹99. Positioning: "Practice & PYQ Specialist". Exact tiers deferred entirely to founder.
- **Evidence:** Testbook ₹299-351/yr, Utkarsh ₹1,800-3,200 online, offline coaching ₹50,000+/cycle; sachet pricing matches district pocket-money reality (research/04).
- **Brand candidates:** Rajasthan Pariksha / Marudhar Abhyas / CET Sethu — PENDING founder pick.

## D-008 — Three candidate exams pending verification before scope grows
- **Date:** 2026-09-30
- **Founder approval:** Yes (asked for more exams; agreed verification-first)
- **Candidates:** High Court Junior Assistant, Librarian Grade-3, District Court junior clerk.
- **Gate:** Each enters the product ONLY after eligibility confirmed from the official notification PDF. If verified → product becomes 15 exams.

---


## D-009 — Live AI student assistant APPROVED (cost accepted)
- **Date:** 2026-09-30
- **Founder approval:** Yes ("AI live can be the expense of credits, no worries... perfect service for students")
- **Decision:** The live "ask anything" AI assistant moves from phase-2/founder-gate to approved scope. Founder accepts recurring API/credit cost in exchange for a perfect student experience.
- **Architecture constraints (non-negotiable):** API key NEVER in the static app bundle (serverless proxy on a free tier, e.g. Cloudflare Workers — VERIFY provider/limits at build time); per-student rate limits; cost caps + alerts; prompt-injection and abuse protection; fallback to the pre-verified static explanations when limits hit; every answer clearly labeled as AI.
- **Provider choice:** to be verified at build time on cost/quality/Hindi capability (candidates: Gemini free tier, others) — decision entry to follow with numbers.
- **Consequences:** small recurring cost per active student; needs the tiny backend even though the app stays static-hosted. Honesty rule unchanged: no fake AI, and AI answers are labeled (AI-generated, cross-check with teacher/official material for final doubts).

## Decision Log Rules
1. New decisions get the next number; date mandatory.
2. Never delete entries; supersede with a new entry that references the old one.
3. Founder-level domains (brand, pricing, scope changes, spending, legal) always require explicit founder approval before execution.

## D-2026-09-30-05: CET 28-Sep-2024 wave EXCLUDED (Graduate-level, not 12th)
**Date:** 2026-09-30 | **Status:** FINAL

The staged wave `cet-2024-0928-s1-staging.json` (147 questions) is from the CET **Graduation Level** exam of 27-28 September 2024, NOT the 12th-level CET (which was held 22-24 October 2024 and is already shipped as the CET 2024 wave). Confirmed via multiple independent sources (Financial Express, Hindustan Times, JagranJosh: 27-28 Sep 2024 = Graduate CET; Telegraph India / News18 / AajTak Campus: 22-24 Oct 2024 = 12th-level CET). Per scope discipline (graduate exams are OUT of the 12th-level OS), the entire wave is excluded from the bank. Never merge graduate-level PYQ content into this app.
## D-2026-09-30-06: Patwari exclusion CONFIRMED; 17-Aug-2025 Patwari wave (295 records) NOT merged
**Date:** 2026-09-30 | **Status:** FINAL

D-003 (Patwari = graduate-level, excluded from the 12th-level OS) is CONFIRMED for the 2025 recruitment via multiple independent sources: RSSB Patwari 2025 (exam held 17-Aug-2025) requires a Bachelor's degree in any stream + computer certificate (RojgarKiKhoj notification summary, Infoeazy, JagranJosh "CET graduates can apply", Scribd advt table "Patwari — Bachelor's + RS-CIT"). The fully rebuilt 295-record wave (S1 148 + S2 147, raw-sourced, archived in gather/pyq-raw/patwari-2025-*.json) is therefore OUT OF SCOPE and is NOT merged. Data remains archived in the repo as a future graduate-level product asset. Verification agents for the wave were stopped mid-run (2 of 4 ranges had completed: S1 76-150 and S2 1-75, both ~96% AGREE — archive quality was good, scope is the sole blocker). Official notification PDF remains the final basis for D-003 wording refinement.

## D-010 — AI Coach architecture: key behind serverless proxy, never in client
- **Date:** 2026-10-01
- **Founder approval:** Yes (D-009 approved live AI; security model is implementation of that approval)
- **Chosen:** Cloudflare Worker proxy (serverless/ai-coach-worker.js) holding GEMINI_API_KEY as Worker secret; static client (GitHub Pages) only sends question context + history. Per-IP daily cap (15) enforced server-side (KV), mirrored client-side as UX.
- **Reason:** Static hosting cannot custody secrets; client-side keys are extractable and abusable. Honest setup state (no fake replies) until founder deploys the Worker.
- **Consequences:** Coach works only after founder runs `wrangler deploy` + sets GEMINI_API_KEY. No key = no coach, by design.

## D-011 — Steno E-rule threshold: 0.10 retained, evidence status CROSS_CHECKED (not direct-read)
- **Date:** 2026-10-01
- **Founder approval:** N/A (verification discipline; per standing rule founder must be told evidence grade)
- **Context:** Official Advt 07/2024 PDF archived; it is an image-only scan (pypdf/pdfminer extract 0 chars; easyocr Hindi fails on its fonts). Direct machine re-read is impossible with current sandbox tooling.
- **Chosen:** Keep `disqualificationThreshold: 0.10`. Evidence: deep-research chain quoting Advt §13 + the identical, officially-confirmed CET rule (readable official PDF) + multi-source corroboration, zero contrary sources.
- **Reason:** Founder rule "NOT VERIFIED over PROBABLY CORRECT" — honest grade is CROSS_CHECKED, so we label it CROSS_CHECKED rather than the research doc's OFFICIAL_CONFIRMED. Trail: gather/verify-steno-e-rule.md.
- **Consequences:** If a text-based scheme PDF or exam-day instruction sheet surfaces, promote to OFFICIAL_CONFIRMED.

## D-012 — Payments: Razorpay via Worker, DESIGN_APPROVED, not built
- **Date:** 2026-10-01
- **Founder approval:** Design yes; pricing target ₹99 already set (D-007); go-live decision pending
- **Chosen:** Razorpay (UPI-first) order->checkout->signature-verify flow in a Cloudflare Worker; HMAC-signed license keys stored in Worker KV; client unlocks PRO locally. Doc: docs/payments-plan.md.
- **Reason:** Static host cannot custody Razorpay secrets or handle webhooks; Razorpay is the India-standard UPI checkout.
- **Consequences:** Blocked on founder Razorpay account + keys. ~1 day build + adversarial tests once keys exist.
- D-2026-10-01-07: Modular QA protocol v3 (00-25 modules with applicability status) adopted as the master operating standard; single-blob prompts retired.
- D-2026-10-01-08: app/index.html un-gitignored and committed — build-entry + SEO head must never again depend on snapshot restore; deploy = rsync --delete + live chunk-hash verify; npm run release (unit→build→smoke) is the mandatory pre-deploy gate.
- D-2026-10-01-09: Founder's 55-section 'Autonomous Product Transformation Engine' adopted as the governing QA/UX standard (docs/MASTER-PROMPT-V4.md); QA-MASTER-PROMPT.md modules remain the in-repo execution mapping. Cycle 1 product changes: result screen primary CTA = error-review when wrongs exist (retention loop), else retry; home shows a dismissible 3-step method strip to true first-timers only (rjx-onboard flag; returning users never see it).
- D-2026-10-01-10: Coach proxy hardened and launch-ready. Cost gate (per-IP daily cap) runs BEFORE the upstream LLM call — a capped request can never burn tokens. KV is the durable counter; a KV-less fallback (per-isolate Map) enforces a best-effort cap so the worker is NEVER unlimited. Inputs bounded (question 2000 / explanation 3000 / options 400 chars, history last 8 @ 1000 chars), 20s upstream timeout. Client endpoint resolution: localStorage override > VITE_COACH_URL (build-time) > honest setup state. Owner deploy steps in OPERATIONS.md (~2 min, wrangler).
- D-2026-10-01-11: Founder mandate: backend/admin configuration must NEVER appear in student-facing UI (he saw the coach setup form in the student panel). Architectural rule adopted: the student app is zero-config; ALL backend operations live in the hidden Owner Console (footer 5-tap entry) backed by server-verified admin API (Bearer ADMIN_TOKEN on the worker — client-side gating alone is never sufficient). Admin routes return 401 for wrong/missing token; with ADMIN_TOKEN unset they stay fully closed. Token stored sessionStorage-only (never on disk). Same session also: student Coach panel now shows only a plain unavailable state when the coach isn't deployed.
- D-2026-10-01-12: Speed analytics is deliberately own-data + exam-config based. Testbook shows 'topper average time' but we have no real topper dataset for RSMSSB exams — inventing one would break the no-fake-data rule. Insights compare the student to themselves (correct vs wrong avg time) and to the exam's own budget (pattern durationMin / question count). Practice mode shows no budget at all (no invented benchmark). Sub-300ms question visits are excluded as palette-jump noise.
- D-2026-10-01-13: Revision ladder semantics: wrongCount is a lifetime stat (never reset by success); rung is the spaced-repetition state. Correct attempt of an error-book item advances the rung (1→3→7→15→30d); wrong resets rung to 0 (1d); correct past the 30-day rung deletes the record (mastered — the question earned its exit). Skipped counts as wrong (revisiting without answering is not retention). Correct answers in ANY session count as a review event — a question can be mastered via normal practice, not only via the error session. Also fixed: startErrSession read a nonexistent e.id field (records are keyed by qid) — the Practice-errors button had silently no-oped since launch; E2E smoke now locks this path.
- D-2026-10-01-14: STRATEGIC AMBITION ELEVATED (founder-issued master layer, docs/STRATEGY-MASTER-LAYER.md): the project is NOT merely a mock/PYQ/coaching-replacement app — the target is a Rajasthan-first exam preparation + exam-intelligence ECOSYSTEM across 15 strategic layers (trust, content, practice, learning, exam intelligence, personalization, distribution, community, teacher enablement, conversion, retention, automation, revenue, data, operations). All future evaluation follows §41-46: out-of-the-box idea generation per domain, blue-ocean test, evidence scorecard, NOW/TEST/LATER/REJECT triage, zero-to-scale phases. Non-obligations preserved: verification gates, honesty rules, no fake data, no manipulative growth, no feature bloat. Phase assessment: Phase 0-1 shipped; weakest layers = DISTRIBUTION (no loops live) and EXAM INTELLIGENCE automation (radar unscheduled). First NOW set: today-plan engine (command centre), WhatsApp share card, agent-side Exam Change Radar (pilot on the 5 disputed facts), free utility calculators.
- D-2026-10-01-15: Today-plan discipline (master layer §3/§5/§8 applied): the home plan card is an action list, not a dashboard — max 3 items, priority order fixed in engine (resume > due revision > mock cadence > error practice > new practice), and every label carries its measured reason (counts, days) computed from on-device signals only. No invented urgency: a mock nudge appears only after 7+ real days without a mock; 'no mock yet' is a baseline suggestion, not a streak. Exam selection persists (examos-last-exam) because the plan is meaningless without the student's exam context across sessions; wipe-all clears it. Plan labels must never be evaluated eagerly for items absent from today's plan (crash found pre-deploy by smoke).
- D-2026-10-01-16: PRODUCT SPINE LOCKED (founder): ruthlessness against feature bloat — the goal is NEVER 'the biggest Rajasthan project with 100 features'. The one path to optimize is the aspirant journey: EXAM DISCOVERED → AM I ELIGIBLE? → HOW DO I PREPARE? → WHAT SHOULD I DO TODAY? → WHERE AM I WEAK? → HOW AM I IMPROVING? → WHAT SHOULD I DO NEXT? Every future feature proposal must name which spine link it strengthens and by how much; features that don't sit on the spine wait regardless of how 'creative' they are. This lens governs the master layer's NOW/TEST/LATER/REJECT triage (§45).
- D-2026-10-01-17: Weakness measurement honesty rule (master layer §44 applied to heatmap): a topic enters the कमज़ोर टॉपिक list only after 5+ REAL attempted answers (skipped questions do not inflate or deflate topic accuracy — accuracy = correct/attempted, exam convention). Small samples mislead; below threshold the UI shows an honest 'not enough data' state, never invented bars. Topic tags are deterministic keyword classification (qa/tag-topics.mjs, generated overlay, 4 adversarial refinement rounds); questions the classifier cannot place land in honest per-subject सामान्य buckets, never guessed topics. Heatmap colors encode measured accuracy only: ≥70% green, 40-69% amber, <40% red.
- D-2026-10-02-18: Share card honesty rule (extends D-12/D-18 to distribution surfaces): the shareable result card carries ONLY measured numbers (score, correct/wrong/skipped, accuracy, date) + real app URL. Never invented percentile, rank, 'topper' badge, or motivational claims on any shareable asset — a marketing surface must not become a marketing fantasy. Canvas colors hardcoded to mirror styles.css :root tokens (canvas cannot read CSS vars); any palette change must be mirrored in src/shareCard.js.

- D-2026-10-02-19: EXAM CHANGE RADAR PILOT SHIPPED (cycle 9). (a) 5 disputed facts SETTLED from official documents (4-pass verified; evidence in gather/radar-settle-*.md): CET 12th has NO negative marking for wrong answers but the 5th-option E rule charges 1/3 on un-darkened unattempted; Jail Prahari pattern = 100Q x 4 marks / 2 hours / -1 per wrong (Adv 17/2024); HC Junior Assistant AND District Court clerk = GRADUATE mandatory (RHCJ 2022 advt, rules amended after 2017) → both EXCLUDED from 12th-level scope like Patwari/CET-grad before; Librarian Grade-3 = 12th + Certificate in Library Science qualifies → STAYS. (b) ADVERSARIAL AUDIT CAUGHT LIVE CONFIG BUG: app's Jail Prahari config (200Q/2M/3h/-1/3, tagged OFFICIAL_CONFIRMED) contradicted the real notification — fixed and now regression-locked by qa/config.test.mjs (wired into npm test + release). Lesson: an OFFICIAL_CONFIRMED tag without a settled-fact lock is not verification. (c) Radar runs as a scheduled agent workflow (Mon 10:00 IST, Asia/Calcutta): sweep official sources, log to docs/RADAR.md, notify owner ONLY on real change, one focused verification attempt per still-NOT-VERIFIED fact; no-change sweeps stay silent (no fake urgency, per D-12). (d) CET 2026 cycle watch: rumors of negative marking introduction — config stays on the last OFFICIAL advertisement until the new advt text is verified; radar will catch it.

- D-2026-10-02-20: TOOLS TAB (cycle 10) honesty rules: (a) age verdicts compute ONLY from OFFICIAL_CONFIRMED ageLimit blocks (refDate from config, category-aware maxAge); exams without verified limits show 'सत्यापित नहीं' — never invented limits. (b) negative-marks calculator pre-fills from the verified exam pattern but allows overrides (student may sim what-ifs); config notes render verbatim from exams.js (CET 5th-option, jail -1). (c) countdown date is the STUDENT'S estimate, labelled as such in the UI — never shown as an official date. (d) calculator engine functions live in engine.js as pure functions with test group 13; the adversarial test pass caught 3 real bugs before ship (attempted count could fall below correct+wrong, 1-mark-per-wrong + custom-fraction edge cases, NaN guards) — pure-function-first continues to pay. Age limits remain a live data debt: 9 of 15 exams lack verified ageLimit blocks (radar to settle).

- D-2026-10-02-21: TRICKS TAB (cycle 11) rules: (a) every trick carries a verif source from the audited drafts — BANK_VERIFIED (question exists in our own bank), BANK_PLUS_WEB, or WEB_VERIFIED — rendered as a visible badge on each card; no untagged trick ships. (b) tricks content is read-only knowledge (no score/progress state) — it links the HOW DO I PREPARE spine link without inventing engagement metrics. (c) 2023 50-district reorg remains time-sensitive (possible post-2023 rollback flagged in A5 pass 2); radar to re-check before any district-count-dependent claim gets promoted. (d) DEPLOY PATH CHANGE: the platform strips .git dirs created inside the workspace by clone/worktree, which caused an accidental commit of deploy files onto main (force-repaired same day, main = 819aea0 verified). All future gh-pages deploys use the plumbing path: temp GIT_INDEX_FILE + read-tree github/gh-pages + commit-tree + direct ref push. Main pushes must be preceded by git status check against /app super-repo. Standing audit rule held again: no worker bank-citations were trusted — all 55 tricks re-grepped against the bank by coordinator before commit.
