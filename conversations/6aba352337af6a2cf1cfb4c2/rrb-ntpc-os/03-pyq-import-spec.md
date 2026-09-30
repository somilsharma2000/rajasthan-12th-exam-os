# PYQ Import & Verification Pipeline (spec for implementation)

## Acquisition rules (hard)
- Official RRB candidate portals release question papers, response sheets and
  tentative/final answer keys per shift. These are LEVEL 1 when captured via the
  user's own login session — the user downloads them (their right as a candidate)
  and uploads to this system. The system never bypasses logins, CAPTCHA, or paywalls.
- User-provided PDFs (coaching compilations, memory-based papers) are accepted but
  start as SINGLE_SOURCE with source_level recorded as given.
- Everything from discovery channels (blogs/Telegram/YouTube) is entry material only.

## Ingestion stages
1. **Extract** — PDF text layer first; OCR (Tesseract via backend function or
   sandbox preprocessing) only for scans, with `ocr_derived: true` flag.
2. **Parse** — question boundaries, options A–D, answer key mapping, exam metadata
   (CEN/stage/date/shift/RRB) from header/context or user-supplied metadata form.
3. **Flag uncertainty** — low OCR confidence, truncated options, missing answer,
   image-dependent question (store image, never transcribe its content).
4. **Validate** — schema check; option sanity (4 distinct options); duplicate check
   (normalized-text hash + fuzzy match → duplicate_group classification:
   EXACT / NEAR / TRANSLATED / SAME-PATTERN-NUMBERS-CHANGED / SAME-CONCEPT).
   Duplicates are classified, never auto-deleted.
5. **Answer verification engine**:
   - Numerical: independently solve in code where possible (deterministic check).
   - AI cross-solve for reasoning/factual: result is evidence, not authority.
   - Compare supplied key vs independent result: agree → SINGLE_SOURCE (or
     upgrade if official key), disagree → CONFLICTING → ReviewItem.
6. **Quality gate** — band = f(source level, answer verification, text clarity,
   option validity, duplicate confidence). Only HIGH/MEDIUM+OFFICIAL-confirmed
   PYQs enter mocks; LOW/REVIEW excluded from high-stakes practice automatically.

## Verification states (stored, shown, never hidden)
UNVERIFIED → SINGLE_SOURCE → CROSS_CHECKED → OFFICIAL_CONFIRMED
side states: CONFLICTING, REJECTED. Each transition records who/what/when.

## Conflict handling
Conflicting answers/sources surface in a Review Dashboard (ReviewItem entity):
question, source A, source B, conflict type, official reference, resolution, status.
Nothing ambiguous silently enters the trusted dataset.

## Import formats
CSV / JSON / structured text / PDF / manual entry form. Every import reports:
accepted / rejected (with reasons) / needs review. No silent drops.

## Data quality report (always visible in-app)
DATA COVERAGE: X verified PYQs · Y under review · Z rejected · per-subject and
per-year counts. The app must never claim completeness it cannot show.
