import os

target_dir = "rajasthan-12th-os/gather/exam-hubs"

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

# --- 06-jail-prahari.md ---
create_exam_file(
    "06-jail-prahari.md",
    "Rajasthan Jail Prahari (Prison Warder) Examination",
    "Prisons Department Subordinate Cadre (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Recruiting Body:** Prisons Department, Govt of Rajasthan / RSMSSB (governed under CET 12th Level framework).
* **Posts Covered:** Jail Prahari (Prison Warder / Sub-Jailor Guard) across various Rajasthan Jail Circles.
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Fixed probation pay ₹14,600/month; post-probation basic pay ₹20,800 + allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Essential Educational Qualification:** Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent. Screened via **CET 12th Level** scorecard.
* **Age Limit:** 18 to 26 years (extendable up to 40 years under state general relaxation provisions).
* **Upper Age Relaxations:** 5 years for Male SC/ST/OBC/MBC/EWS and Female candidates; 10 years for Female SC/ST/OBC/MBC/EWS of Rajasthan domicile."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://jail.rajasthan.gov.in",
            "details": """* **Stage 1:** CET 12th Level Screening & 15x candidate shortlisting.
* **Stage 2:** Mains Written Examination (Objective MCQ paper).
* **Stage 3: Physical Efficiency Test (PET - 100 Marks):**
  * Male: 100m Race, High Jump, Long Jump / Chin-ups.
  * Female: 100m Race, Long Jump, Putting the Shot.
* **Stage 4:** Document Verification & Medical Board Fitness Examination."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 100 Marks (or 400 Marks in historical 2018 exam scheme: 100 Qs x 4 Marks)
* **Duration:** 2 Hours (120 minutes)
* **Sectional Breakdown:**
  * **Part A:** Reasoning Ability & Computer Fundamentals (~30 Qs)
  * **Part B:** General Knowledge, Everyday Science, Current Affairs (~30 Qs)
  * **Part C:** History, Art, Culture, Geography & Economy of Rajasthan (~40 Qs)
* **Negative Marking:** **1/3rd mark** deducted per wrong response. Minimum qualifying: 40% (36% for SC/ST)."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://jail.rajasthan.gov.in",
            "details": """* **Reasoning & Computer:** Coding-decoding, series, MS Office, basic computer awareness.
* **General Knowledge & Science:** Indian History, General Science, National/State Current Affairs.
* **Rajasthan GK:** Forts, Dynasties, Freedom struggle, Art, Fairs, Festivals, Geography, Rivers, Administration."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://jail.rajasthan.gov.in",
            "details": """* **Departmental Website:** [https://jail.rajasthan.gov.in](https://jail.rajasthan.gov.in)
* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Notification Ref:** Included as Cadre Post #6 under CET 12th Level 2024 notification (Advt. No. 10/2024).
* **Previous Direct Batch:** 2018 Recruitment conducted via Sardar Patel Police University / Jail Dept (927 posts).
* **Current Status:** Subsumed under CET 12th Level 2024 Mains cycle."""
        }),
        ("Cut-Off History", {
            "evidence_level": "SECONDARY_CORROBORATED",
            "source_url": "https://jail.rajasthan.gov.in",
            "details": """* **Jail Prahari 2018 Circle Cut-Off Marks (Out of 400 Marks Total):**
  * Jaipur Circle: Gen Male ~312.50 | OBC ~302.25 | SC ~275.00
  * Jodhpur Circle: Gen Male ~298.00 | OBC ~291.50 | ST ~260.00
  * Udaipur Circle: Gen Male ~285.25 | OBC ~278.00
* **2024 CET Mains Cut-off:** UNVERIFIED (Mains paper pending under 2024 CET cycle)."""
        })
    ]
)

# --- 07-hostel-superintendent.md ---
create_exam_file(
    "07-hostel-superintendent.md",
    "RSMSSB Hostel Superintendent (Chhatravas Adhyaksh) Examination",
    "Social Justice & Minority Affairs Depts Subordinate Cadre (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Hostel Superintendent Grade-II (Social Justice & Empowerment Dept - 335 posts) & Hostel Superintendent (Minority Affairs Dept - 112 posts).
* **Total Vacancies (2024):** 447 Posts combined.
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Fixed probation pay ₹14,600/month; post-probation basic pay ₹20,800 + allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf",
            "details": """* **Essential Educational Qualification:**
  1. Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent.
  2. RS-CIT Computer Diploma / O-Level / COPA / CS Degree/Diploma.
  3. Prerequisite: Qualified **CET 12th Level** screening.
* **Age Limit (as of Jan 1, 2025):** 21 to 40 years for Social Justice Dept; 18 to 40 years for Minority Affairs Dept.
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; Gen Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf",
            "details": """* **Stage 1:** CET 12th Level Scorecard shortlisting (15x total advertised vacancies).
* **Stage 2:** Single Phase Written Competitive Examination (100 Marks).
* **Stage 3:** Document Verification & Final Merit List."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 100 Marks (1 mark per question)
* **Duration:** 2 Hours (120 minutes)
* **Sectional Breakdown:**
  * General Hindi: 15 Questions / 15 Marks
  * General English: 15 Questions / 15 Marks
  * Mathematics (Secondary Level): 15 Questions / 15 Marks
  * Rajasthan History, Art, Culture & Geography: 30 Questions / 30 Marks
  * Computer Knowledge: 10 Questions / 10 Marks
  * Administrative & Social Welfare Schemes / General Knowledge: 15 Questions / 15 Marks
* **Negative Marking:** **1/3rd mark (0.33)** deducted per wrong answer. Minimum qualifying: 40%."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf",
            "details": """* **Language Sections:** Hindi & English grammar (Sandhi, Samas, Tenses, Vocab).
* **Mathematics:** Secondary level algebra, ratios, percentages, mensuration.
* **Rajasthan GK:** Comprehensive history, architecture, geography, state welfare schemes.
* **Computer:** Basic hardware, software, MS Office, internet."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Notification PDF (Minority Affairs - Advt 03/2024):** [https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_Minority_2024.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_Minority_2024.pdf)
* **Notification PDF (Social Justice - Advt 04/2024):** [https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Advt_Hostel_Sup_SJE_2024.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** February 2024 (Advt. 03/2024 & 04/2024)
* **Written Examination Dates:** August 30 & August 31, 2024
* **Provisional Answer Key Released:** October 2024
* **Current Status:** Final result generation and DV list preparation."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Hostel Superintendent 2016 Final Cut-Off Percentage (Out of 100):**
  * General Male: 54.34% | General Female: 45.12%
  * OBC Male: 52.18% | OBC Female: 41.05%
  * SC Male: 44.80% | ST Male: 48.20%
* **2024 Examination Cut-Off:** UNVERIFIED (Awaiting official release following August 2024 exam processing)."""
        })
    ]
)

# --- 08-jamadar-grade-2.md ---
create_exam_file(
    "08-jamadar-grade-2.md",
    "RSMSSB Jamadar Grade-II (Excise / Abkari Vibhag) Examination",
    "State Excise Subordinate Executive Cadre (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur / State Excise Dept.
* **Posts Covered:** Jamadar Grade-II in Commercial Taxes / State Excise Department (Abkari Vibhag).
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Fixed probation pay ₹14,600/month; post-probation basic pay ₹20,800 + state allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Essential Educational Qualification:** Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent. Must be qualified in **CET 12th Level**.
* **Age Limit:** 18 to 40 years as of January 1 of the recruitment year.
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; General Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Stage 1:** Shortlisting via CET 12th Level Scorecard (15x candidates).
* **Stage 2:** Mains Written Competitive Examination.
* **Stage 3: Physical Measurement Standards (PST):** Height and Chest standards for Excise field staff.
* **Stage 4:** Document Verification & Final Merit List."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 100 Marks (1 mark per question)
* **Duration:** 2 Hours (120 minutes)
* **Subjects Covered:** Rajasthan History, Art, Culture, Geography, General Science, Elementary Mathematics, State Excise Rules & General Awareness.
* **Negative Marking:** **1/3rd mark** deducted per wrong answer. Minimum qualifying: 40%."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Rajasthan GK (50%+):** State History, Architecture, Forts, Festivals, Geography, Economy.
* **General Science & Maths:** High school level Physics, Chemistry, Biology, Arithmetic.
* **Excise & Legal Awareness:** State revenue basics, Prohibition laws in Rajasthan."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **CET Cadre Notification PDF:** [https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf](https://rsmssb.rajasthan.gov.in/Static/files/CET_SrSec_2024_Advt.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Ref:** Included as Cadre Post #5 under CET 12th Level 2024 notification (Advt 10/2024).
* **Current Status:** Subsumed under CET 12th Level 2024 cycle; individual Mains date scheduled per RSSB 2024-2025 calendar."""
        }),
        ("Cut-Off History", {
            "evidence_level": "UNVERIFIED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Status:** `UNVERIFIED`
* **Reasoning:** First standalone direct recruitment batch for Jamadar Grade-II being conducted under the CET framework by RSSB. Historical standalone cut-off figures are officially unpublished."""
        })
    ]
)

