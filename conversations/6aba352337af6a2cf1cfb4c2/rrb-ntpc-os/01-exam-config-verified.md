# RRB NTPC (UG) — Verified Exam Configuration
Retrieval date: 2026-09-28 (Asia/Calcutta). All facts below carry provenance.

## Source levels used
- L1 attempts: rrbapply.gov.in, rrbcdg.gov.in, rrbsecunderabad.gov.in — **UNREACHABLE from this sandbox** (network/TLS blocked; Browserbase also failed with ERR_TUNNEL_CONNECTION_FAILED). Official confirmation must come from the CEN PDF uploaded by the user.
- L3 secondary: India Today, PW, Daily Jagran, RRB Chandigarh notices quoted via Google snippets, exam-prep aggregators.
- Multiple independent L3 sources quote the same official CEN text consistently.

## Exam pattern (target exam: NTPC Undergraduate, CEN 07/2025)

| Fact | Value | Verification |
|---|---|---|
| CBT-1 questions | 100 | CROSS_CHECKED (5+ independent sources quoting CEN) |
| CBT-1 duration | 90 min (120 for PwBD) | CROSS_CHECKED |
| CBT-1 marking | +1 correct, −1/3 wrong, 0 unattempted | CROSS_CHECKED |
| CBT-2 questions | 120 | CROSS_CHECKED |
| CBT-2 duration | 90 min | CROSS_CHECKED |
| CBT-2 marking | +1 / −1/3 | CROSS_CHECKED |
| CEN 07/2025 apply window | 28-10-2025 to 27-11-2025 | SINGLE_SOURCE (RRB Chandigarh notice, quoted) |
| CEN 07/2025 CBT-1 exam | revised schedule ~May–June 2026 (multi-day window) | SINGLE_SOURCE (official RRB notice quoted by third parties) |
| CEN 07/2025 CBT-2 date | 17-09-2026 | SINGLE_SOURCE (coaching pages citing official notice) |
| CBT-1 sections | Maths, Reasoning, General Awareness (+General Science per some sources) | CONFLICTING — exact split must come from official CEN PDF |
| CBT-2 sections | ~50 GA, 35 Maths, 35 Reasoning (graduate-level reports) | UNVERIFIED for UG — confirm from CEN |

## Status of this file
Nothing here is OFFICIAL_CONFIRMED yet. The system will start with these values as
`CROSS_CHECKED` config, show "not officially verified" on screen, and upgrade to
OFFICIAL_CONFIRMED only when the user uploads the official CEN 07/2025 (or later CEN)
notification PDF, which the ingestion pipeline will parse and match against this config.

## Other active/upcoming cycles (context only, not training targets)
- CEN 06/2025 (Graduate): CBT-1 held 16–27 Mar 2026, tentative answer key 06 Apr 2026, ~5810 vacancies (L3, single source).
- Reported upcoming cycle (Oct–Nov 2026 applications, both levels): UNVERIFIED — treat as discovery only.

## Design decision
Exam config is DATA, not code: stored in an `ExamFact`/config entity with provenance
fields. When a new CEN appears, we add config rows — never edit history. The simulator,
planner, and scorer read config rows, so exam-rule changes require zero code changes.
