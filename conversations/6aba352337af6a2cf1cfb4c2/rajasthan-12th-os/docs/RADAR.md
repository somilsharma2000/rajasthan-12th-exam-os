# EXAM CHANGE RADAR — agent-side scheduled monitoring (v4 cycle 9 pilot)

Purpose: the app's weakest aspirant-journey link was DISCOVERY-NOTIFICATION ("exam discovered"). This radar makes the agent the student's eyes on official sources: weekly sweep for new notices, corrigendum, pattern changes, date announcements affecting tracked exams. Findings flow into exam configs + owner alerts.

## Watched sources (official only)
- RSSB (Rajasthan Staff Selection Board): rssb.rajasthan.gov.in — CET 12th level, LDC/JA, Patwari-family, Forester/Guard, Jail Prahari, Hostel Sup, Jamadar, Lab Asst, Agri Supervisor, Steno, Librarian G-3
- RSMSSB legacy/archive pages (redirects to RSSB since 2024 restructure)
- Rajasthan High Court: hcraj.nic.in + Jaipur/Jodhpur bench sites — Junior Assistant, District Court clerk
- Jail Department, Rajasthan — Jail Prahari corrigendum
- REET (Board of Secondary Education Rajasthan / rajeduboard) — Level 1

## Tracked exams (in-app)
CET 12th Level, LDC/Junior Assistant, Police Constable, Forester, Forest Guard, Jail Prahari, Hostel Superintendent, Jamadar Grade-II, Lab Assistant, Agriculture Supervisor, REET Level-1, Stenographer.

## Watched disputed facts (settle from official notification; research wave 2026-10-02)
1. CET 12th Level negative marking (none vs 1/3)
2. Jail Prahari exact pattern
3. High Court Junior Assistant qualification (12th vs graduate)
4. District Court junior clerk qualification (12th vs graduate)
5. Librarian Grade-3 qualification (12th vs graduate)
Findings land in `gather/radar-settle-*.md`; after 2-source cross-check they move into exam configs with provenance.

## Sweep protocol (every run)
1. Check each watched source for NEW notices/corrigendum/amendments/pattern changes since `Last checked`.
2. New notice found → verify from the official document itself (never a coaching-site claim) → append below → notify owner with a short delta report.
3. Nothing new → update `Last checked` below. NO owner message for a no-change sweep (no fake urgency).
4. Any watched fact still NOT VERIFIED → one focused verification attempt per run.
5. Honesty rule (D-12/D-17/D-18): NOT VERIFIED beats probably-correct; never ship unverified; never invent notice URLs.

## Log
| Date (IST) | Source | Result |
|---|---|---|
| 2026-10-02 | (pilot start) | Radar created; 3 focused research missions launched on the 5 disputed facts |
| 2026-10-02 | RSSB Adv 08/2024, RHCJ 2022, RSSB Adv 17/2024 | PILOT COMPLETE: 5/5 disputed facts settled + shipped live (configs + qa/config.test.mjs locks). HC JA + DC clerk excluded (graduate). Librarian stays (12th + C.Lib.Sc — re-verify exact advt no. next sweep, RSSB PDFs geo-blocked from sandbox). WATCH: CET 2026 cycle rumors of negative-marking introduction — act only on official advt text |

Last checked: 2026-10-02 03:25 IST (pilot settle wave complete; first scheduled sweep = Monday 2026-10-05 10:00 IST)
