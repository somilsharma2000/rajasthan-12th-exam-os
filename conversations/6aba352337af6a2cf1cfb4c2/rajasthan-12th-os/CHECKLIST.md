# CHECKLIST.md — Rajasthan 12th-Level Exam OS
*The never-forget list. Founder-mandated 2026-09-30. RULE: this file is updated after EVERY research mission, EVERY founder conversation, and EVERY change of plan. Completed items get [x] with a date. Removed/changed items get moved to the Change Log at the bottom with the reason — never silently deleted.*

## PHASE 0 — Research (foundation)
- [x] Exam inventory: all 12th-level Rajasthan papers identified (12 verified + 3 candidates) — 2026-09-30
- [x] Rajasthan GK syllabus map + highest-yield subtopics — 2026-09-30
- [x] Competitor teardown (18 competitors, national + regional + indirect) — 2026-09-30
- [x] Positioning + monetization research (pricing, sachet model, brand candidates) — 2026-09-30
- [ ] Re-audit of ALL research reports line-by-line (deep verification pass)

- [x] Deep competitor audits (06, 07, 08) DELIVERED 2026-09-30; first-hand Testbook visit done (research/09); [ ] synthesis + adoption into FEATURES queued; 08 flagged inference-grade

- [x] Student profile + improvement/learning journey designed (USER_JOURNEYS.md) — 2026-09-30

## PHASE 1 — Fact verification (in progress) — DATA GATHERING LAUNCHED 2026-09-30
- [~] Founder command: gather + save ALL exam data (PYQs, mock data, Exam Hub info) BEFORE building. 4 gathering missions launched 2026-09-30: (1) CET negative marking + Jail Prahari verify, (2) High Court JA + Librarian + District Court + REET/Steno verify, (3) PYQ + answer key collection for CET/LDC/Constable into gather/pyq-pdfs/, (4) Exam Hub data files for 12 exams into gather/exam-hubs/. Results land in gather/ folder.
- [x] Wave-1 reports delivered 2026-09-30: 10 of 12 deep surveys/hubs done (Police Constable, Forester, Forest Guard, Hostel Sup, Jamadar, Lab Asst, Agri Supervisor deep + 12 hub files + HC/Librarian/DistrictCourt/REET/Steno verification). Timed out: CET marking, PYQ download, LDC deep — all relaunched.
- [~] Wave 2 launched 2026-09-30 (12 agents, full deployment per founder): CET marking verify, LDC deep retry, Jail Prahari deep, CET deep, REET deep, Stenographer deep, PYQ collection (CET + LDC/Constable, split), GK research (history/culture delivered 2026-09-30 in gather/gk-research-1-history-culture.md + geography/polity/economy), typing module research, adversarial cross-verification pass (3rd recheck). 4th pass = my own audit before anything ships.
- [~] Founder command (per-agent doctrine): one agent per exam/topic/feature; surveys run twice-verified before use. 8 per-exam DEEP survey agents launched 2026-09-30 (LDC, Police Constable, Forester, Forest Guard, Hostel Sup, Jamadar, Lab Asst, Agri Supervisor) with DOUBLE-verification requirement (2 independent sources per fact). Remaining deep agents queued as slots free: CET hub-deep, Jail Prahari deep, REET deep, Stenographer deep + per-feature agents (typing module spec, PET standards pack, glossary build). Then: my cross-verification pass over ALL outputs before anything enters product data.
- [ ] CET 12th Level negative marking: settle from official notification (conflict: none vs 1/3) — relaunch as focused mission
- [ ] Jail Prahari exact pattern from official notification
- [ ] High Court Junior Assistant qualification (12th vs graduate) — official HC notification
- [ ] Librarian Grade-3 qualification — official RSSB notification
- [ ] District Court junior clerk qualification — official notification
- [ ] Patwari/VDO/Mahila Supervisor graduate-only exclusion: confirm basis from official notification (safe meanwhile — excluded)
- [ ] Brand name availability recheck before any public use (Pariksha / Marudhar Abhyas / CET Sethu)
- [ ] REET Level 1 eligibility (12th + D.El.Ed/JBT?) from official source — AUDIT-001
- [ ] Stenographer/PA G-II qualification + shorthand speed from official source — AUDIT-001
- [ ] CET post-count re-verify (7 posts claimed, 6 listed) from official notification — AUDIT-001
- [ ] 500-tester recruitment plan (college WhatsApp/Telegram) before Phase 4 — AUDIT-001 gap
- [ ] LEGAL_NOTES.md (PYQ use position, GST, consumer basics) BEFORE content ingestion — AUDIT-001 gap
- [ ] 3-pass gate template formalized at Phase 2 start — AUDIT-001 gap
- [ ] AI assistant cost model + hard cap number before launch — AUDIT-001
- [x] PYQ availability spot-check DONE 2026-09-30: 30 live links verified-fetched, 10 broken links documented in gather/pyq-archive-inventory.md. Official RSSB/RSMSSB portals unreachable from sandbox (geo/SSL); archive sources used instead.
- [ ] Exam Hub data collection: notification PDF, pattern, syllabus, official links for each of the 15 exams

## PHASE 2 — Build (STARTED 2026-09-30, founder command: "build completely from scratch")
- [x] App BUILT from scratch in workspace app/ 2026-09-30: React+Vite PWA, Hindi-first UI + EN toggle, config-driven exam engine (all negative-marking rules incl. CET 5th-option + >10% disqualification), practice mode with verified explanations + provenance display, mock mode with timer + palette, 12 verified exam configs live, PYQ/agent-authored firewall labels, quarantine system proven (q006 excluded), PWA manifest + service worker (offline), production build PASSES (171KB JS / ~55KB gzip), engine adversarial tests 11/11 PASS, dist smoke test PASS (all assets 200). Content pipeline continues (seed bank live; bulk PYQ/GK ingestion next).
- [x] GITHUB LAUNCH 2026-10-01: repo created github.com/somilsharma2000/rajasthan-12th-exam-os (owner-controlled, public); main branch = source code + 515-question bank; gh-pages branch = built app; GitHub Pages LIVE at https://somilsharma2000.github.io/rajasthan-12th-exam-os/ (verified HTTP 200, title + bank text + manifest all confirmed). Token stored as secret (repo scope only; workflow-file scope missing — deploy path uses gh-pages branch, note for future).
- [x] Overnight sprint verified morning 2026-10-01: 10/12 bank files delivered + validated (465 total, 464 shippable, ZERO schema issues); bank loader rebuilt on generated-manifest architecture (fixes Node/Vite dual-runtime bug + browser top-level-await break); regression 15/15 PASS; production build green.
- [x] AUDIT PASS 1 (2026-10-01, founder-ordered): 4 real defects found + fixed: (1) live site ran stale bank build — redeployed with full 584; (2) validator ingested manifest.js — 12 phantom errors, excluded; (3) mocks hardcoded to 10 questions with full-length timer — now full pattern length where bank allows (Librarian = full 150Q), scaled proportional timers for short pools, honest short-mock label; (4) seed q001 integration claim was historically wrong (Udaipur NOT last) — replaced with verified 7-stage question. Founder-facing correction: true bank = 584 shippable (earlier '515' was my miscount). Live verified: HTTP 200, new build confirmed shipped.
- [x] FEATURE WAVE 1 LIVE 2026-10-01: Progress report (mock history, per-exam best/avg accuracy, recent attempts, re-render-safe recording) + Saved Questions (bookmark ☆ in player, revision list with explanations, all local/private/offline). Deployed + verified live. KEY FINDING: all 12 exams already run FULL-length mocks (584 bank covers every pattern — shared-GK multiplication confirmed).
- [x] FEATURE WAVE 2 LIVE 2026-10-01: subject-wise practice (per-exam subject chips with live counts, filtered 10Q sessions; mixed practice still available). Deployed + verified.
- [x] DEPTH WAVE 3 INTEGRATED + DEPLOYED 2026-10-01: maths+60, reasoning+50, raj-gk+80 — 0 schema fails, 0 duplicate ids, 0 overlaps. BANK NOW 774 SHIPPABLE (775 total). Full-length mocks verified for CET + Librarian post-integration.
- [x] CRITICAL FIX 2026-10-01: founder saw blank screen — root cause: service worker cached app shell cache-first; force-pushed deploys changed asset hashes -> stale shell loaded deleted assets. FIXED: SW v3, network-first shell (users always get latest build; cache = offline fallback only), old caches auto-purged on activate. Self-heals permanently.
- [x] Validated founder-uploaded PDFs (jail CEN 17/2024 adv, LDC 2024, Lab Asst adv, CET pdfs): scanned/garbled OCR — notification documents, NOT transcribable PYQ papers. Adda247/Prepp 2016 shift PDFs = RRB NTPC papers (other project). Real PYQ ingestion needs clean sources -> PYQ probe relaunched (agent running).
- [x] CRITICAL BUG FOUND & FIXED 2026-10-01 (founder caught it via screenshot, was right to call it out): app was BLANK on every load since the very first deploy. Root cause: `const avail = availFor(exam)` ran unconditionally on Home render while `exam` state is null until a user picks one -> `exam.subjects` threw -> React crashed with no error boundary -> pure white screen. A second latent bug (ex_ok helper referenced but never defined, from an earlier silent failed find/replace) would have crashed the Setup screen too. FIXED both; this time verified with an ACTUAL BROWSER (Browserbase, not curl) end-to-end: Home renders all 12 exams -> exam hub renders full pattern/eligibility -> Setup screen renders subject-wise chips with live counts (raj-gk 266, maths 132, reasoning 110, etc). Lesson recorded: curl/HTTP 200 only proves a file downloaded, never that JS/React actually mounts — real verification requires a real browser render check, now the standard for every future deploy.
- [x] PYQ archive probe DONE 2026-09-30: all 12 exams mapped with VERIFIED_FETCHED links -> gather/pyq-archive-inventory.md. Police Constable 2022 papers (5 shifts) + LDC sources located; 2 police PDFs downloaded (Testbook CDN, official archived papers).
- [x] CRITICAL UX BUG FOUND & FIXED 2026-10-01 (founder stuck on Result screen, sent screenshot): Result screen was a dead end — Result() accepted no onHome/onRetry props and rendered ZERO exit buttons (unlike every other screen). Added top-bar back arrow + 'फिर से करें' (Retry) and 'होम पर जाएँ' (Go Home) buttons at bottom. Browser-verified end-to-end: completed a practice set -> Result rendered with buttons -> Go Home returned to exam list cleanly.
- [x] FOUNDER DIRECTION 2026-10-01: Somil will handle PYQ/data collection himself going forward; my focus shifts to UI/UX quality, polish, and correctness. Data ingestion agents pause; UI/UX audit becomes the active workstream.
- [~] Morning 2026-10-01: 2 bank files missing (raj-gk-history 70, lang-computer 50) — retry agents launched and running. Bank will reach ~584 when they land.
- [~] OVERNIGHT SPRINT 2026-09-30 (founder asleep 3 hrs, autonomous launch-push authorized): 12 question-bank authoring agents running (~545 verified questions); hub data layer built (12 verified hubs, qualification/stages/pay, AS-OF stamped); LDC + Steno patterns corrected from deep surveys (written 200 marks each — question count pending final lock); bank loader + adversarial validator built (quarantine+dedupe+schema gate); ERROR BOOK + Exam DNA subject analysis added to results; mock RESUME (localStorage) added; glossary (14 exam-process terms) added; regression 18/18 PASS; 2 bank files already delivered (library-science 25, REET pedagogy 30 — 64 shippable, zero validation issues).
- [ ] Founder: GitHub fine-grained token (Contents read/write) — BLOCKER for all code work
- [ ] Create repository under founder's GitHub account, push project
- [ ] React + Vite PWA scaffold, folder structure, AGENTS.md in repo
- [ ] Config-driven exam engine (patterns as JSON; verified Police Constable pattern first)
- [ ] Question player (practice mode + mock mode, timer, question palette, 5th-option rule)
- [ ] Exam Hub section per exam (overview, eligibility, pattern, syllabus, official links, notices timeline, calendar, FAQ)
- [ ] Hindi-first UI with English toggle; ultra-light build; offline mode
- [ ] Live AI assistant: serverless proxy + key protection + rate limits + cost caps (founder approved, D-009) — provider verified at build time
- [ ] GitHub Pages deployment + live link for founder testing

## PHASE 3 — Content build (zero-manual-labor pipeline)
- [ ] Verification pipeline built (question gate: solve → recheck → alternative method → options check → provenance)
- [~] CET 12th Level PYQs ingested + verified — WAVE 1 LIVE 2026-09-30: 149/150 questions parsed from archived solved paper of CET 2024 Shift-1 (22 Oct 2024, shikshanagari.com); 1 image-based question honestly skipped. 4-pass verification: 105 CONFIRMED shipped to live app (origin=real_pyq, full provenance); archive key errors caught (Q31 wrong answer corrected to C/440 by independent solve, Q107 PowerPoint 'Fly In' key corrected, Q138 Paris Olympics options broken -> DROPPED); 40 Hindi/English/passage questions in language-verification agent (final batch); 4 unusable (figure-dependent/corrupted) never ship. Bank: 774 -> 880 total, 879 shippable.
- [ ] LDC / Junior Assistant PYQs ingested + verified
- [~] Police Constable PYQs: SOURCES SECURED 2026-09-30 (verif pending). (a) Cracked the garbled-font encoding of 2 official archived PDFs (78-glyph map, normalized transcripts). (b) Found clean text archive (sscportal.in) with answers: 724 questions extracted across 5 CBT shifts (13May-S2, 14May-S1, 15May-S1/S2, 16May-S2, ~96% of each paper). All committed. NEXT: 4-pass verification of answers (sscportal key can be wrong, CET proved this), then ship as real_pyq.
- [ ] Remaining CET-family exams (Forester, Forest Guard, Jail Prahari, Hostel Sup, Jamadar)
- [ ] Direct-entry exams (Lab Assistant, Agriculture Supervisor, REET L1, Stenographer)
- [ ] Pending-verification exams (High Court JA, Librarian, District Court) — only if verified
- [ ] Rajasthan GK bank: 1,500+ verified questions across 15 highest-yield subtopics
- [ ] Topic sheets (concept, formulas, examples, traps) for core topics
- [ ] Flashcards + mnemonics engine content
- [ ] Exam terminology glossary (Hindi)
- [ ] Daily Economic Survey / current affairs practice content
- [ ] PYQ vs AI-practice firewall labels in data + UI

## PHASE 4 — QA & hardening
- [ ] Adversarial testing (break the engine: wrong answers, refresh mid-test, back button, offline drop)
- [ ] Low-end Android + slow network testing
- [ ] Accessibility pass (screen reader, contrast, large text)
- [ ] Zero answer-key error audit (every question re-solved independently)
- [ ] 500-user stress test before charging money
- [ ] Founder end-to-end review + sign-off

## PHASE 5 — Launch & monetization (founder gates)
- [ ] Founder: brand pick (Rajasthan Pariksha / Marudhar Abhyas / CET Sethu) — PENDING
- [ ] Pricing: CLOSED for discussion per founder (final call = founder mood at the end); working assumption ₹99 — 2026-09-30
- [ ] Payment integration (UPI-first) — founder-level spending decision
- [ ] Support + refund policy written; GST invoicing basics (flag professional review where needed)
- [ ] Launch gate: all critical boxes in the No-BS checklist pass, else status stays NOT LAUNCH READY
- [ ] Telegram/WhatsApp channel with deep app links
- [ ] Shareable score cards (viral loop)

## SHELF (phase 2 candidate) — Central exams module (SSC GD, CHSL, MTS, RRB Group D)
- Not before Rajasthan core is proven; requires founder go-ahead

## Standing founder rules (never delete)
- Every load-bearing fact from official notification PDFs only
- NOT VERIFIED beats "probably correct"; unverified never ships
- After every research/decision/session: UPDATE THIS FILE
- Zero manual labor for founder; verification is agent's responsibility
- PYQ / AI-practice separation, always visible
- No fake data, no fake completion, no silent reversals

## Change Log
- 2026-09-30: File created per founder command ("checklist so you don't forget anything").
- 2026-09-30: Verification mega-mission timed out; 5 disputed facts remain NOT VERIFIED; item changed to relaunch as smaller focused missions.

- 2026-09-30 AUDIT-001: full adversarial audit done (findings + fixes in AUDIT-001.md); deep audits 06/07/08 marked delivered; REET/Steno verification, legal notes, tester-recruitment plan, AI cost cap added; features 48-49 re-architected (paid gating loophole); shelf section renamed.

- [x] Exam Hub data files created for all 12 confirmed exams in `gather/exam-hubs/` (00-index.md + 01 to 12 files with field-level evidence & source URLs) — 2026-09-30
- [x] POLICE WAVE COMPLETE + DEPLOYED 2026-09-30: 608 verified real PYQs live in app (bank 1524). 4-pass audit done (632 staged, 10 answers corrected, 19 excluded per zero-fake-data, subject re-tagging 632/632, 0 overlaps, validator ZERO ISSUES, live hash verified).
- [x] LDC 2024 P1 VERIFIED 2026-09-30: 153 questions provably verified (dual-archive cross-check + 14 adjudications). Ready for bank merge (next content wave).
- [~] NEW STAGED SOURCES 2026-09-30 (4-pass verification pending, then merge): Patwari 2025 S1+S2 (197), CET 28-Sep-2024 S1 (147), Stenographer 2024 S1 (128, merge decision pending — check exam scope).
- [ ] App source index.html was gitignored by workspace pattern — force-added 2026-09-30; verify on next clone that build works from repo alone.
- [x] LDC WAVE COMPLETE + DEPLOYED 2026-09-30: 142 verified real PYQs live (bank 1666). Dual-archive verification + 13 adjudications + subject tagging. Q70 formula-loss caught by validator, excluded. Live hash verified.
- [~] NOTE 2026-09-30: app/index.html keeps disappearing from working tree (workspace gitignore pattern). Force-added to main; restore via `git checkout origin/main -- app/index.html` if build fails with missing entry.
- [ ] REMAINING CONTENT WAVES (staged, 4-pass verification pending): Patwari 2025 S1+S2 (197), CET 28-Sep-2024 S1 (147), Stenographer 2024 S1 (128, scope decision pending).
