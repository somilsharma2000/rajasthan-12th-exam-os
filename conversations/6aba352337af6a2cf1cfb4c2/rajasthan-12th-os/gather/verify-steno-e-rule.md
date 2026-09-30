# Stenographer 2024 — 5th-Option-E Rule: Threshold Verification Note

**Date:** 2026-10-01
**Target fact:** Option-E disqualification threshold for RSSB Stenographer/PA Grade-II 2024 written exam — is it exactly 10% of total questions?

## Verification trail

1. **Official source secured:** RSMSSB Advt No. 07/2024 (Steno/PA Grade-II) full advertisement PDF downloaded and archived at `gather/advt-steno.pdf` (10.8 MB, 19 pages). Server required an OpenSSL `UnsafeLegacyRenegotiation` workaround (`gather/.openssl_legacy.cnf`).
   - URL: `https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf`

2. **Direct read attempt FAILED (tooling limit, not evidence failure):**
   - `pypdf` and `pdfminer.six`: 0 extractable characters on all 19 pages → the PDF is a pure image scan.
   - OCR (`easyocr` Hindi, CPU): output unusable on this scan (bold decorative Hindi fonts; recognition produces symbol garbage). Tesseract binary unavailable in sandbox; apt package fetch blocked (network restriction). Preprocessing (2x upscale, autocontrast, unsharp) did not fix recognition quality.

3. **Evidence the 10% value rests on:**
   - `exam-hubs/deep-12-stenographer.md` (4-pass research chain): Advt 07/2024 §13 quoted as — E option mandatory for unattempted; 1/3-mark penalty per blank-without-E; **disqualification if >10% of total questions left blank**. Marked OFFICIAL_CONFIRMED there, corroborated by SarkariExam & Prepp pattern analyses.
   - `verify-cet-marking.md`: the board-wide OMR E system is **officially confirmed from a readable official PDF** (CET Advt 08/2024) with the **identical 10% clause** (>15 of 150 questions). Same board, same OMR conduct, same rule family.
   - No source of any kind found stating a different threshold for steno.

## Verdict

- **Config value `disqualificationThreshold: 0.10` — RETAINED (correct, unchanged).**
- **Evidence status: CROSS_CHECKED** (multi-source + identical officially-confirmed CET rule), NOT direct-read OFFICIAL_CONFIRMED for the steno ad itself. Downgrading from the research doc's OFFICIAL_CONFIRMED label to CROSS_CHECKED is deliberate: per founder standing rule, a direct machine read of the archived scan was attempted and is not possible with current sandbox tooling.
- **Open item:** if a text-based scheme PDF or exam-day instruction sheet for Steno 2024 surfaces (RSSB publishes candidate instructions separately), read it directly and promote to OFFICIAL_CONFIRMED. The archived scan stays in the repo for future re-verification.

## Practical notes

- The E-rule note shown in-app (noteHi) already states the rule plainly and remains accurate.
- Sandbox OCR learnings: tesseract not installable here (apt blocked), easyocr Hindi insufficient for government-scan fonts — do not re-attempt without new tooling.
