import os

target_dir = "rajasthan-12th-os/gather/exam-hubs"
os.makedirs(target_dir, exist_ok=True)

# Helper function to format sections
def create_exam_file(filename, title, cadre_summary, fields):
    content = f"# Exam Profile: {title}\n\n"
    content += f"> **Exam Hub Data Record — Rajasthan 12th OS**  \n"
    content += f"> **Cadre Scope:** {cadre_summary}  \n"
    content += f"> **File:** `rajasthan-12th-os/gather/exam-hubs/{filename}`  \n"
    content += "\n---\n\n"

    for i, (field_name, field_data) in enumerate(fields, 1):
        content += f"## Field {i}: {field_name}\n"
        content += f"**Evidence Level:** `{field_data['evidence_level']}`  \n"
        content += f"**Source URL:** [{field_data['source_url']}]({field_data['source_url']})  \n\n"
        content += f"{field_data['details']}\n\n"
        content += "---\n\n"
        
    with open(os.path.join(target_dir, filename), "w") as f:
        f.write(content)
    print(f"Saved {filename}")

# --- 01-cet-12th.md ---
create_exam_file(
    "01-cet-12th.md",
    "RSMSSB Common Eligibility Test (CET) 12th Level (Senior Secondary)",
    "Mandatory Screening Gateway Test for 7 Subordinate Cadre Posts",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Gateway screening test for 7 subordinate cadre posts:
  1. Clerk Grade-II / Junior Assistant (LDC) - Secretariat & State Depts
  2. Rajasthan Police Constable
  3. Forester (Vanpal)
  4. Hostel Superintendent (Social Justice & Minority Affairs Depts)
  5. Jamadar Grade-II (Excise / Abkari Dept)
  6. Jail Prahari (Warder)
  7. Assistant Jailor / Sub-Jailor
* **Pay Level:** Serves as the eligibility gateway for posts ranging from Pay Matrix Level **L-5 (GP 2400)** up to **L-8 (GP 2800)**."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Essential Educational Qualification:** Senior Secondary (10+2 / 12th Pass) from Board of Secondary Education Rajasthan (RBSE), CBSE, or any recognized Board.
* **Age Limit:** Minimum 18 years to Maximum 40 years as of January 1 of the recruitment year following notification.
* **Upper Age Relaxations:**
  * SC / ST / OBC / MBC / EWS Male candidates (Rajasthan domicile): 5 years (up to 45 years)
  * General / Unreserved Female candidates: 5 years (up to 45 years)
  * SC / ST / OBC / MBC / EWS Female candidates (Rajasthan domicile): 10 years (up to 50 years)
  * Ex-Servicemen: Upper age limit relaxations as per Rajasthan State Service Rules (up to 50 years max)."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Stage 1:** Common Eligibility Test (Objective OMR Written Screening Paper).
* **Stage 2:** Shortlisting of candidates equal to **15 times** the total advertised vacancies per cadre post for Mains Competitive Exam / PST / PET / Typing tests.
* **Score Validity:** CET Score card valid for **3 years** from the date of score declaration (per 2024 Rajasthan State Government policy update)."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Total Questions:** 150 MCQs
* **Total Marks:** 300 Marks (2 marks per question)
* **Duration:** 3 Hours (180 minutes)
* **Negative Marking:** **NO negative marking** for wrong options chosen in CET screening paper.
* **5th Option Rule (RSMSSB OMR Mandate):** Every candidate must darken one option (A, B, C, D, or E) for all 150 questions. If any question is left unattempted (no option darkened), **1/3rd of the question's mark (0.66 marks)** is deducted per unattempted question. Leaving more than 10% questions unattempted results in disqualification.
* **Minimum Qualifying Marks:** Minimum 40% aggregate marks required for General/OBC/EWS candidates (35% for SC/ST candidates) to qualify for score validity."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/examscheme",
            "details": """1. **Rajasthan History, Art, Culture, Literature, Heritage & Tradition (~30-35 Qs / 60-70 M):** Pre-historic sites, dynasties, freedom movement, integration, folk deities, fairs, festivals, forts, palaces, handicrafts.
2. **Rajasthan Geography, Economy & Administrative System (~30 Qs / 60 M):** Physical features, climate, rivers, vegetation, agriculture, minerals, industries, population, Governor, CM, Assembly, Panchayati Raj.
3. **Everyday Science, Technology & Environment (~20-25 Qs / 40-50 M):** Physical & chemical changes, metals/non-metals, carbon compounds, genetics, human health, blood groups, biotechnology, environmental balance.
4. **General Mental Ability, Reasoning & Basic Mathematics (~20-25 Qs / 40-50 M):** Vedic maths, ratios, percentages, profit/loss, simple/compound interest, mensuration, logical reasoning, series, coding-decoding.
5. **General Hindi (~15 Qs / 30 M):** Sandhi, Samas, Upsarg, Pratyay, Synonyms, Antonyms, Sentence correction, Official terms.
6. **General English (~15 Qs / 30 M):** Tenses, Voice, Direct/Indirect, Articles, Prepositions, Translation, Glossary of technical terms.
7. **Basic Computer Knowledge (~10 Qs / 20 M):** Computer architecture, RAM/ROM, MS Office (Word, Excel, PowerPoint), Internet & Email."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF (2024):** [https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf](https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf)
* **Apply Portal (SSO Single Sign-On):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)
* **Admit Card Portal:** [https://rssb.rajasthan.gov.in/page?name=AdmitCard](https://rssb.rajasthan.gov.in/page?name=AdmitCard)
* **Question Papers & Answer Keys Archive:** [https://rssb.rajasthan.gov.in/page?name=QnA](https://rssb.rajasthan.gov.in/page?name=QnA)
* **Results Page:** [https://rssb.rajasthan.gov.in/page?name=Results](https://rssb.rajasthan.gov.in/page?name=Results)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** August 29, 2024 (Advt. No. 10/2024)
* **Application Window:** September 2, 2024 to October 1, 2024
* **Examination Dates:** October 22, 23, 24, 2024 (Conducted in multiple shifts across Rajasthan)
* **Status:** Examination conducted successfully; master question papers and provisional answer keys released November 2024."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Nature of Cut-Off:** CET is a qualifying screening scorecard test rather than a final recruitment merit list.
* **Qualifying Benchmark:** Minimum 40% (120/300 marks) for General/OBC/EWS and 35% (105/300 marks) for SC/ST. Candidates achieving this benchmark receive a valid scorecard used for 15x shortlisting in individual cadre notifications."""
        })
    ]
)

# --- 02-ldc-junior-assistant.md ---
create_exam_file(
    "02-ldc-junior-assistant.md",
    "RSMSSB LDC / Junior Assistant (Clerk Grade-II & Kanishth Sahayak)",
    "Subordinate Ministerial Service Direct Recruitment (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Clerk Grade-II (Govt Secretariat & RPSC) and Junior Assistant (State Subordinate Departments & Offices).
* **Total Vacancies (2024):** 4,197 Posts (Secretariat Clerk: 584, RPSC Clerk: 61, Junior Assistant Subordinate Depts: 3,552).
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Initial fixed probation stipend ₹14,600/month for 2 years; post-probation basic pay ₹20,800 + state DA/HRA allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf",
            "details": """* **Essential Educational Qualification:**
  1. Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent.
  2. RS-CIT Diploma (DOACC/RKCL) OR O-Level / COPA / Diploma or Degree in Computer Science / CS Engineering.
  3. Prerequisite: Qualified **CET 12th Level** screening.
* **Age Limit:** 18 to 40 years as of January 1, 2025.
* **Upper Age Relaxations:** Male SC/ST/OBC/MBC/EWS: 5 years; General Female: 5 years; Female SC/ST/OBC/MBC/EWS: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf",
            "details": """* **Stage 1:** Shortlisting of candidates via CET 12th Level Scorecard (15x total advertised posts).
* **Stage 2: Phase-I Written Examination:** 2 Papers held on the same day (Paper 1: GK/Science/Maths; Paper 2: Hindi/English). Total 200 Marks.
* **Stage 3: Phase-II Computer Typing Speed & Efficiency Test:** Shortlisted candidates (3x vacancies) appear for Hindi & English typing + efficiency test (100 Marks total).
* **Stage 4:** Document Verification (DV) & Final Merit Recommendation."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf",
            "details": """* **Phase-I Written Examination Scheme:**
  * **Paper 1 (General Knowledge, Everyday Science, Mathematics):**
    * 150 Questions | 100 Marks | 3 Hours Duration
    * Breakdown: Rajasthan GK (50 Qs), Everyday Science (50 Qs), Mathematics (50 Qs)
  * **Paper 2 (General Hindi & General English):**
    * 150 Questions | 100 Marks | 3 Hours Duration
    * Breakdown: General Hindi (75 Qs / 50 Marks), General English (75 Qs / 50 Marks)
  * Total Phase-I: 300 Questions | 200 Marks | 6 Hours.
* **Negative Marking:** **1/3rd mark (0.33)** deducted per wrong answer. Minimum qualifying: 40% marks in each paper individually.
* **Phase-II Typing Test Scheme (100 Marks):**
  * Hindi Typing Speed (10 min, 25 M) + Efficiency Test (10 min, 25 M) = 50 Marks
  * English Typing Speed (10 min, 25 M) + Efficiency Test (10 min, 25 M) = 50 Marks"""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf",
            "details": """* **Paper 1:**
  * *Rajasthan GK:* History, Art, Forts, Festivals, Geography, Agriculture, Economy, Wildlife.
  * *Everyday Science:* Physical & Chemical changes, Metals, Carbon, Reflection, Electricity, Biotechnology, Ecology, Human Health.
  * *Mathematics:* Vedic Maths, Factorization, Linear Equations, Ratios, Percentages, Profit/Loss, Interest, Trigonometry, Mensuration, Statistics.
* **Paper 2:**
  * *General Hindi:* Sandhi, Samas, Pratyay, Upsarg, Synonyms, Antonyms, Sentence & Word Correction, Official Terminology.
  * *General English:* Tenses, Voice (Active/Passive), Direct/Indirect Narration, Articles, Prepositions, Translation (Hindi-English), Official Glossary, Comprehension."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF (Advt 01/2024):** [https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Adv_LDC_1_2024.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)
* **Admit Card & Question Papers:** [https://rssb.rajasthan.gov.in/page?name=QnA](https://rssb.rajasthan.gov.in/page?name=QnA)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** February 13, 2024 (Advt. No. 01/2024)
* **Phase-I Exam Date:** August 11, 2024
* **Provisional Answer Key Released:** September 2024
* **Current Status:** Phase-I results and Phase-II Typing Test scheduling in progress."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **LDC 2018 Final Cut-Off (Combined Phase-I + Phase-II / 300 Marks Total):**
  * General Male: 192.82 | General Female: 161.88
  * OBC Male: 184.42 | OBC Female: 147.28
  * SC Male: 158.20 | SC Female: 114.62
  * ST Male: 136.62 | ST Female: 115.11
  * EWS Male: 178.50 | EWS Female: 138.20
* **2024 Phase-I Cut-Off:** Pending official release following typing test evaluation."""
        })
    ]
)

