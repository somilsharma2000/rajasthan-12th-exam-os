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

# --- 03-police-constable.md ---
create_exam_file(
    "03-police-constable.md",
    "Rajasthan Police Constable Recruitment Examination",
    "Police Department Executive Cadre (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf",
            "details": """* **Recruiting Body:** Director General of Police, Police Headquarters (PHQ), Jaipur, Rajasthan.
* **Posts Covered:** Constable (General), Constable (Driver), Constable (Telecommunication), Constable (Band), Constable (Mounted/Cavalry).
* **Total Vacancies (2023-2024):** 3,578 Posts across districts and battalions.
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Fixed monthly stipend of ₹14,600 during 2-year probation; post-probation basic pay ₹20,800 + allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf",
            "details": """* **Essential Educational Qualification:**
  * Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent recognized board.
  * For Police Telecommunication Branch: 12th Pass with Physics and Mathematics as compulsory subjects.
  * Prerequisite: Must possess valid **CET 12th Level** scorecard.
* **Age Limit (as of Jan 1, 2024):**
  * Male Candidates (Constable General): 18 to 23 years (born between 02/01/2001 and 01/01/2006).
  * Male Candidates (Constable Driver): Upper age limit extended to 26 years.
* **Upper Age Relaxations:** SC / ST / OBC / MBC / EWS / Female Candidates: 5 years relaxation (up to 28 years for Gen Female, up to 33 years for reserved categories/females). Ex-servicemen: up to 42 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf",
            "details": """* **Stage 1:** Shortlisting via CET 12th Level Scorecard (15 times district/battalion category-wise vacancies).
* **Stage 2: Physical Efficiency Test (PET) & Physical Measurement Test (PMT):**
  * PET: 5 km Run (Male: 25 minutes; Female: 35 minutes; Ex-servicemen: 30 minutes) — Qualifying nature.
  * PMT: Height (Male: 168 cm, Female: 152 cm); Chest (Male: 81-86 cm).
* **Stage 3: Written Examination (CBT - Computer Based Test):** 150 Marks.
* **Stage 4: Proficiency Test (30 Marks):** For Driver, Band, and Mounted posts only.
* **Stage 5:** Document Verification & Medical Examination."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf",
            "details": """* **Total Questions:** 150 MCQs
* **Total Marks:** 150 Marks (1 mark per question)
* **Duration:** 2 Hours (120 minutes)
* **Sectional Breakdown:**
  * **Part A:** Reasoning, Logic & Computer Fundamentals -> 60 Qs / 60 Marks
  * **Part B:** General Knowledge, General Science, Social Science, Current Affairs & Laws against Women/Children (POCSO, Domestic Violence, Safety Rights) -> 45 Qs / 45 Marks
  * **Part C:** Rajasthan History, Art, Culture, Geography, Polity & Economy -> 45 Qs / 45 Marks
* **Negative Marking:** **1/4th mark (0.25 = 25%)** deducted per wrong answer.
* **Minimum Qualifying Marks:** 40% aggregate for General/OBC/EWS (60/150); 36% for SC/ST (54/150)."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf",
            "details": """* **Part A (Reasoning & Computer):** Coding-decoding, Venn diagrams, blood relations, non-verbal logic, MS Office, Hardware/Software, OS, Internet safety.
* **Part B (GK, Science, Laws):** Indian History, Indian Constitution, Physical Geography, General Science (Physics/Chemistry/Biology), National Current Events, Legal Rights of Women & Children (POCSO Act, Dowry Act, IT Act provisions).
* **Part C (Rajasthan GK):** Dynasty history, major battles, 1857 movement, Prajamandal, Rajasthan Art, Architecture, Forts, Fairs, Festivals, Physical divisions, Rivers, Climate, State Government schemes."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in",
            "details": """* **Official Police Portal:** [https://police.rajasthan.gov.in](https://police.rajasthan.gov.in)
* **Recruitment Portal:** [https://recruitment2.rajasthan.gov.in](https://recruitment2.rajasthan.gov.in)
* **Official Notification PDF (2023):** [https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf](https://police.rajasthan.gov.in/old/PoliceUser/UploadUtility/RecruitmentFiles/Recruitment22082023113244.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in",
            "details": """* **Notification Date:** August 3, 2023 (Amended Aug 21, 2023)
* **PET / PST Dates:** December 27, 2023 to December 30, 2023
* **CBT Written Exam Dates:** June 13 & June 14, 2024
* **Current Status:** Final merit lists and district-wise allotment completed mid-2024."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://police.rajasthan.gov.in",
            "details": """* **Nature of Cut-Offs:** Published separately per district / battalion.
* **2021-2022 Written Cut-Off Range (Out of 150 Marks for General Male):**
  * Jaipur Commissionerate: ~108.75 | Jodhpur Commissionerate: ~105.50
  * Udaipur District: ~101.25 | Kota City: ~107.00 | RAC 5th Battalion: ~112.50
  * SC/ST candidates: ~85.00 - 98.00 depending on district unit."""
        })
    ]
)

# --- 04-forester.md ---
create_exam_file(
    "04-forester.md",
    "RSMSSB Forester (Vanpal) Examination",
    "Forest Department Subordinate Cadre (CET 12th Level Governed)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Forester (Vanpal) in Rajasthan Forest Department.
* **Pay Level:** Pay Matrix Level **L-8** (Grade Pay 2800 / Basic initial probation pay ₹18,500/month; post-probation basic pay ₹26,300 + DA/HRA allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Essential Educational Qualification:** Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent. Screened through **CET 12th Level**.
* **Age Limit:** Minimum 18 years to Maximum 40 years as of January 1 of the recruitment year.
* **Upper Age Relaxations:** Male SC/ST/OBC/MBC/EWS: 5 years; General Female: 5 years; Female SC/ST/OBC/MBC/EWS: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Stage 1:** Shortlisting via CET 12th Level Scorecard (15x candidates).
* **Stage 2:** Written Competitive Examination (100 Marks).
* **Stage 3: Physical Standard Test (PST) & Physical Efficiency Test (PET):**
  * Walking Test (Endurance): Male - 25 km in 4 hours; Female - 16 km in 4 hours.
  * Male Physical Events: Sit-ups (25 in 1 min), Cricket Ball Throw (55 meters).
  * Female Physical Events: Shot Put 4 kg (4.5 meters), Standing Broad Jump (1.35 meters).
* **Stage 4:** Document Verification & Final Medical Board Fitness Test."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 100 Marks (1 mark per question)
* **Duration:** 2 Hours (120 minutes)
* **Subjects Covered:** Rajasthan History, Culture, Geography, Forestry & Wildlife, Everyday Science, General Mathematics, Current Affairs.
* **Negative Marking:** **1/3rd mark (0.33)** deducted per wrong answer. Minimum qualifying: 40%."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Rajasthan GK & Forestry (50%+):** Rajasthan History, Architecture, Forts, Fairs, Festivals, Physical Divisions, Soils, Rivers, Forest Types, National Parks, Wildlife Sanctuaries, Bio-diversity conservation.
* **Everyday Science (20%):** Physics, Chemistry, Biology up to 10th/12th secondary level.
* **Elementary Mathematics & Reasoning (20%):** Number systems, Ratios, Percentages, Profit & Loss, Averages, Time & Work, Mensuration.
* **Current Affairs (10%):** Major state environmental initiatives, sports, awards."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF:** [https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Ref:** Advt. No. 04/2020 (Amended 2022)
* **Written Exam Date:** November 6, 2022
* **Physical Tests (PET):** February - March 2023
* **Current Status:** 2020 cycle recruitment completed; future Forester vacancy cycles are subsumed under CET 12th Level framework."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Forester 2022 Written Exam Cut-Off (Out of 100 Marks - Non-TSP):**
  * General Male: 77.78 | General Female: 69.69
  * OBC Male: 77.10 | OBC Female: 67.68
  * EWS Male: 72.05 | EWS Female: 60.27
  * SC Male: 64.65 | SC Female: 50.51
  * ST Male: 69.02 | ST Female: 54.55"""
        })
    ]
)

# --- 05-forest-guard.md ---
create_exam_file(
    "05-forest-guard.md",
    "RSMSSB Forest Guard (Van Rakshak) Examination",
    "Forest Department Executive Cadre Direct Recruitment",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Forest Guard (Van Rakshak) in Rajasthan Forest Department.
* **Total Vacancies (2020-2022 Batch):** 2,300+ Posts (Non-TSP: 1,821, TSP: 479).
* **Pay Level:** Pay Matrix Level **L-4** (Grade Pay 1900 / Basic probation stipend ₹13,500/month; post-probation basic pay ₹19,200 + allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Essential Educational Qualification:** Secondary (10th Pass) or Senior Secondary (12th Pass) from RBSE/CBSE or recognized board.
* **Age Limit:** Minimum 18 years to Maximum 24 years (extended to 40 years as a special one-time relaxation in the 2020-2022 recruitment notification).
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; General Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Stage 1:** Written Competitive Examination (100 Marks / 100 Qs).
* **Stage 2: Physical Standard Test (PST) & Physical Efficiency Test (PET):**
  * Walking Test: Male - 25 km in 4 hours; Female - 16 km in 4 hours.
  * Male PET: Sit-ups (25 in 1 minute), Cricket Ball Throw (55 meters).
  * Female PET: Shot Put 4 kg (4.5 meters), Standing Broad Jump (1.35 meters).
* **Stage 3:** Document Verification & Medical Examination."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 100 Marks (1 mark per question)
* **Duration:** 2 Hours (120 minutes)
* **Subjects Covered:** Rajasthan History, Art, Culture, Geography, General Science, Elementary Mathematics, Current Events.
* **Negative Marking:** **1/3rd mark (0.33)** deducted per wrong answer. Minimum qualifying mark: 40%."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf",
            "details": """* **Rajasthan GK & Forestry:** History, Forts, Temples, Geography, Forests, Wildlife conservation, Soil types, Rivers.
* **General Science:** Basic 10th standard Physics, Chemistry, Biology, Environmental science.
* **Elementary Mathematics:** Numbers, Fractions, Percentages, Profit/Loss, Simple Interest, Geometry basics.
* **Current Affairs:** State & national news of importance."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Notification PDF:** [https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Forester&fg_2020_full_adv.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Ref:** Advt No. 04/2020
* **Written Exam Held:** November 12, 13 & December 11, 2022
* **PET Physical Tests Held:** April 2023
* **Current Status:** Final recommendation lists published 2023; new batch queued for future notifications."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Forest Guard 2022 Written Cut-Off (Out of 100 Marks - Non-TSP):**
  * General Male: 70.74 | General Female: 59.60
  * OBC Male: 70.74 | OBC Female: 57.58
  * EWS Male: 65.22 | EWS Female: 50.17
  * SC Male: 59.60 | SC Female: 46.46
  * ST Male: 57.58 | ST Female: 44.44"""
        })
    ]
)

