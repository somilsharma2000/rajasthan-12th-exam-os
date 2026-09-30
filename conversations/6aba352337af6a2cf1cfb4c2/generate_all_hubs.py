import os

target_dir = "rajasthan-12th-os/gather/exam-hubs"
os.makedirs(target_dir, exist_ok=True)

# 00-index.md
index_content = """# Rajasthan 12th-Level Exam Hubs — Master Verification Index

> **Exam Hub Data Foundation — Single Source of Truth**  
> **Target Scope:** 12 Confirmed 12th-Pass Recruitment Exams in Rajasthan  
> **Location:** `rajasthan-12th-os/gather/exam-hubs/`  
> **Status Policy:** Every field is tagged with evidence level (`OFFICIAL_CONFIRMED`, `SECONDARY_CORROBORATED`, or `UNVERIFIED`). Facts marked `UNVERIFIED` are blocked from shipping to students until verified against official board notifications.

---

## 1. Master Verification Matrix Across All 12 Exams

| Exam ID & Code | Exam Name | Recruiting Board | Primary Gateway | Profile Status | Verified Fields | Unverified / Pending Fields |
|---|---|---|---|---|---|---|
| **01-cet-12th** | CET 12th Level (Senior Secondary) | RSMSSB / RSSB | Direct Screening | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7 | 8 (Cut-off is score-based) |
| **02-ldc-junior-assistant** | LDC / Junior Assistant | RSMSSB / RSSB | CET 12th Level | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2018 cut-off verified) |
| **03-police-constable** | Rajasthan Police Constable | PHQ Rajasthan / RSMSSB | CET 12th Level | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | District-specific variations |
| **04-forester** | Forester (Vanpal) | RSMSSB / RSSB | CET 12th Level | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2022 cut-off verified) |
| **05-forest-guard** | Forest Guard (Van Rakshak) | RSMSSB / RSSB | Direct / CET | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2022 cut-off verified) |
| **06-jail-prahari** | Jail Prahari (Warder) | Prisons Dept / RSMSSB | CET 12th Level | **PARTIAL** | 1, 2, 3, 4, 5, 6, 7 | 8 (2024 Mains cut-off pending) |
| **07-hostel-superintendent** | Hostel Superintendent | RSMSSB / RSSB | CET 12th Level | **PARTIAL** | 1, 2, 3, 4, 5, 6, 7 | 8 (2024 Exam cut-off pending) |
| **08-jamadar-grade-2** | Jamadar Grade-II (Excise) | RSMSSB / RSSB | CET 12th Level | **PARTIAL** | 1, 2, 3, 4, 5, 6, 7 | 8 (UNVERIFIED - 1st CET batch) |
| **09-lab-assistant** | Lab Assistant | RSMSSB / RSSB | Direct Entry (Non-CET) | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2022 cut-off verified) |
| **10-agriculture-supervisor** | Agriculture Supervisor | RSMSSB / RSSB | Direct Entry (Non-CET) | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2024 cut-off verified) |
| **11-reet-level-1** | REET Level 1 (Primary Teacher) | RBSE / RSMSSB | Direct Entry (Non-CET) | **VERIFIED** | 1, 2, 3, 4, 5, 6, 7, 8 | None (2023 cut-off verified) |
| **12-stenographer** | Stenographer / PA Grade-II | RSMSSB / RSSB | Direct Entry (Non-CET) | **PARTIAL** | 1, 2, 3, 4, 5, 6, 7, 8 | 2024 Skill test cut-off pending |

---

## 2. Inventory Summary by Framework Category

### A. CET 12th Level Governed Framework (8 Exams)
1. **01-cet-12th.md** — Screening Gateway Test (150 Qs / 300 Marks / 3 Hrs / No Negative Marking)
2. **02-ldc-junior-assistant.md** — Cadre Post #1 (L-5 Pay / 4,197 posts in 2024 / Typing Test 100 Marks)
3. **03-police-constable.md** — Cadre Post #2 (L-5 Pay / 3,578 posts in 2023 / 5km PET + CBT)
4. **04-forester.md** — Cadre Post #3 (L-8 Pay / 25km Walk + 100 Marks Written)
5. **05-forest-guard.md** — Cadre Post #4 (L-4 Pay / 25km Walk + 100 Marks Written)
6. **06-jail-prahari.md** — Cadre Post #5 (L-5 Pay / Written + Physical PET)
7. **07-hostel-superintendent.md** — Cadre Post #6 (L-5 Pay / 447 total posts in 2024)
8. **08-jamadar-grade-2.md** — Cadre Post #7 (L-5 Pay / Excise Subordinate Cadre)

### B. Non-CET Direct Entry Framework (4 Exams)
9. **09-lab-assistant.md** — Direct Recruitment (L-8 Pay / Science, Geography, Home Science streams)
10. **10-agriculture-supervisor.md** — Direct Recruitment (L-5 Pay / 12th Ag / 100 Qs / 300 Marks)
11. **11-reet-level-1.md** — Direct Recruitment (L-10 Pay / 12th + D.El.Ed / Screening + RSMSSB Mains)
12. **12-stenographer.md** — Direct Recruitment (L-10/L-8 Pay / Phase-I Written + Phase-II Shorthand)

---

## 3. Evidence & Governance Principles

1. **Evidence Levels Defined:**
   - `OFFICIAL_CONFIRMED`: Verified directly from official board notification PDFs (RSMSSB, RPSC, PHQ Rajasthan, RBSE).
   - `SECONDARY_CORROBORATED`: Cross-verified across multiple authoritative educational portals when primary PDF is archived.
   - `UNVERIFIED`: Information missing or unreleased. Stated explicitly as UNVERIFIED. Never guessed.
2. **Negative Marking Rules Audit:**
   - **CET 12th Screening:** `NO negative marking` for incorrect MCQ answers. (5th-option blank deduction applies: -1/3rd of Q value if unattempted).
   - **RSMSSB Mains / Direct Exams:** `1/3rd mark (33.33%)` negative marking per wrong answer.
   - **Police Constable CBT:** `1/4th mark (25%)` negative marking per wrong answer.
   - **Agriculture Supervisor:** `1 mark` deducted per wrong answer (1/3 of 3-mark questions).
   - **REET Screening (RBSE):** `NO negative marking` in eligibility screening.
3. **Data Ingestion Readiness:** All 12 exam profiles are structured for direct conversion into JSON configs for the React/Vite exam engine.
"""

with open(f"{target_dir}/00-index.md", "w") as f:
    f.write(index_content)

print("Saved 00-index.md")
