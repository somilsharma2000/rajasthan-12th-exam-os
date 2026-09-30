# PROJECT_MASTER_SPEC.md — Rajasthan 12th-Level Exam OS
*Living document. Single source of truth. Updated every session. Never report planned work as completed.*

## Mission
One premium app for EVERY Rajasthan government exam that accepts 12th-pass candidates — exam patterns, real PYQs, mocks, error analysis and learning content, in one place. Hindi-first, verified to the last fact, built for district-level students with slow networks and small budgets.

## Founder & Authority
- Founder: Somil Sharma (non-technical, final authority on founder-level decisions)
- Operating model: Founder OS multi-agent standard (this document set)
- Founder's standing rules: zero manual labor for the founder; agent does all research, verification, content, code; every load-bearing fact independently rechecked against official sources; "NOT VERIFIED" always beats "probably correct"; never present unverified info as fact; keep looking for better approaches; never half-finish.

## Problem
Rajasthan 12th-pass aspirants (lakhs per recruitment cycle) face: machine-translated shallow content from national apps (Testbook), bloated 300-hour video courses with DRM and crashy apps (Utkarsh), error-filled answer keys, zero timed practice for YouTube-only learners, and ₹50,000+ offline coaching.

## Target Customer
- Primary: 18-27 year old Hindi-medium students in Rajasthan districts/towns preparing for RSMSSB/RSSB exams; Android phone, 2G/3G-tolerant, UPI pocket-money spender (₹29-49 micro purchases).
- Secondary: students also writing central 12th-level exams (phase 2).

## Product Scope — Exams (15)
**CET family (CET 12th Level is the gateway to 7 posts):**
1. CET 12th Level (Senior Secondary) — centerpiece
2. LDC / Junior Assistant (Clerk Grade-II)
3. Police Constable
4. Forester (Vanpal)
5. Forest Guard (Van Rakshak)
6. Jail Prahari
7. Hostel Superintendent
8. Jamadar Grade-II (Excise)
**Direct-entry exams:**
9. Lab Assistant
10. Agriculture Supervisor
11. REET Level 1
12. Stenographer / PA Grade-II
**Also queued for eligibility verification (AUDIT-001):** REET Level 1 (12th + D.El.Ed/JBT basis — confirm from official), Stenographer/PA Grade-II (qualification + shorthand speed — confirm).
**Pending eligibility verification before inclusion:**
13. Rajasthan High Court Junior Assistant (sources conflict: 12th vs graduate)
14. RSMSSB Librarian Grade-3 (12th + library science certificate — unconfirmed)
15. District Court junior clerk (unconfirmed)

## Non-Goals (explicit)
- Patwari, VDO, Mahila Supervisor (graduate-level — excluded; separate product if ever)
- Central exams (SSC GD, SSC CHSL, RRB Group D, MTS): phase-2 paid module only, not launch scope
- RRB NTPC UG: covered by founder's separate product (NTPC Pulse) — never duplicated here
- Live video courses: not our positioning; we are the Practice & PYQ Specialist

## Core Features (v1)
*Full inventory: FEATURES.md (76 items incl. Exam Hub, AI assistant D-009, gap-analysis proposals pending founder pick).*
1. Config-driven exam engine: each exam is a JSON pattern (sections, questions, marks, duration, negative marking, OMR with the RSMSSB 5th-option rule) — one engine, every paper
2. Verified PYQ bank: official RSSB papers 2016-2024 with full provenance (year, shift, board, source URL); strictly firewalled from AI-generated practice content; every question independently solved and re-verified before entering the bank
3. Rajasthan GK core: shared syllabus (history, geography, art & culture, polity, economy, schemes) serving all exams; 15 highest-yield subtopics first
4. Timed mocks + topic tests + free practice, error book with root-cause analysis, revision spaced 1/3/7/15/30 days, student progress ("Exam DNA": performance, timing, guessing)
5. Terminology/glossary section (exam-process terms explained for first-generation aspirants)
6. PWA: installable, offline-tolerant, super-light for rural networks
7. Hindi-first UI/content with English toggle

## Business Model (D-007: pricing CLOSED for discussion; final = founder)
- Free core at launch. Paid access: WORKING ASSUMPTION ₹99 (founder's final call deferred entirely to founder mood). No ads positioning (clean-UI constitution)
- Positioning: "Practice & PYQ Specialist — the app that adds what YouTube can't give"
- WARNING (AUDIT-001 C-2): a static app cannot gate paid content; any payment activation REQUIRES an accounts/gating architecture decision first
- Brand candidates: Rajasthan Pariksha / Marudhar Abhyas / CET Sethu — PENDING founder pick

## Architecture
- React + Vite PWA, static build, hosted free on GitHub Pages (zero hosting cost, zero vendor lock-in, code fully founder-owned)
- Content: verified JSON in /data (questions, patterns, topic sheets, glossary) — every record carries verification_status + source + provenance
- Live AI student assistant APPROVED (D-009): serverless proxy (key never in bundle), rate limits, cost caps, labeled AI, fallback to verified static explanations
- v1 student progress: on-device (localStorage). Cloud sync = future decision if/when accounts are needed
- Payments: deferred to post-validation; UPI-first when activated (India-specific; Razorpay/UPI gateway — founder-level cost decision at that time)

## Data Integrity Rules (non-negotiable)
1. No question enters /data without independent verification by the agent
2. UNVERIFIED never ships to students
3. Real PYQs and AI-generated practice questions are separate datasets, clearly labeled in UI
4. Every PYQ carries source URL and exam provenance
5. Official notification PDFs are the ONLY accepted source for exam patterns, eligibility, and marking schemes — coaching sites are never load-bearing sources
6. Any fact that cannot be verified is stored marked VERIFY and is excluded from student-facing content

## Success Metrics (launch gate + beyond)
- Zero answer-key errors (absolute gate)
- 500-user stress test passing
- D7 retention, mock completion rate, questions/day, conversion free→paid
- Exam calendar resilience plan (usage between notification cycles)

## Launch Requirements (from Launch Gate)
Core flow works end-to-end on a low-end Android over slow network; no fake data; no secret committed; monitoring minimal (static app: error reporting via simple beacon or none in v1 — documented honestly); refund/support policy written; GST invoicing understood (flag for professional advice where needed).

## Roadmap (phases)
- Phase 0 (done): market research, competitor teardown, exam inventory, GK strategy, positioning/monetization research
- Phase 1 (current): re-audit all research; verify 3 candidate exams; lock every exam config against official notification PDFs
- Phase 2: app skeleton + exam engine + question player; repo pushed to GitHub
- Phase 3: content build — CET/LDC/Constable PYQs first (volume ~3,500 = ESTIMATE, VERIFY via archive spot-check), then Rajasthan GK bank (1,500 = target, not verified), then remaining exams
- Phase 4: internal QA, adversarial testing, 500-user stress test
- Phase 5: launch, sachet pricing activation, growth loops

## Risks (top, live)
1. Exam calendar unpredictability (RSMSSB notifications irregular) — mitigation: evergreen PYQ bank + multi-exam coverage
2. Content piracy (Telegram PDFs) — mitigation: continuous fresh mocks, device-tied value, low price point
3. Single-state dependency — mitigation: phase-2 central module
4. Verification bottleneck (quality = slow) — mitigation: sub-agent pipelines + automated math re-check scripts
5. Legal: use of official government question papers for self-testing (Copyright Act S.52 position documented) + provenance labeling; GST/consumer law basics flagged for professional review before charging money
