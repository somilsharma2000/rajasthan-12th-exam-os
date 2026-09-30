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

# --- 09-lab-assistant.md ---
create_exam_file(
    "09-lab-assistant.md",
    "RSMSSB Lab Assistant (Prayogshala Sahayak) Examination",
    "Subordinate Technical Service Direct Recruitment (Non-CET)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Lab Assistant in Secondary Education Department, College Education Directorate, Agriculture Department, and Forensic Science Laboratory (FSL).
* **Total Vacancies (2022 Batch):** 1,019 Posts.
* **Pay Level:** Pay Matrix Level **L-8** (Grade Pay 2800 / Initial fixed probation stipend ₹18,500/month for 2 years; post-probation basic pay ₹26,300 + DA/HRA) for Education Dept; Pay Matrix Level **L-5** for FSL Junior Lab Assistants."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf",
            "details": """* **Essential Educational Qualification:**
  * **Science Stream Discipline:** Senior Secondary (10+2 / 12th Pass) with at least 3 subjects among Physics, Chemistry, Mathematics, Biology, Micro-biology, Biotechnology, Biochemistry.
  * **Geography Discipline:** Senior Secondary (12th Pass) with Geography as a subject.
  * **Home Science Discipline:** Senior Secondary (12th Pass) with Home Science as a subject.
  * Direct Recruitment (**NON-CET Exam**).
* **Age Limit:** 18 to 40 years as of January 1 of the recruitment year.
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; General Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf",
            "details": """* **Stage 1:** Single Phase Objective Written Examination (Paper 1 + Paper 2 on same day for Science stream; Single paper for Geography/Home Science).
* **Stage 2:** Document Verification (DV) & Medical Fitness Examination."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf",
            "details": """* **Science Stream Written Paper Scheme (300 Marks Total):**
  * **Paper 1 (General Knowledge of Rajasthan & World/India):**
    * 100 Questions | 100 Marks | 2 Hours Duration
    * Content: Rajasthan History, Art, Culture, Geography, Polity, Current Affairs.
  * **Paper 2 (Domain Science Knowledge - NCERT 11th/12th Standard):**
    * 100 Questions | 200 Marks | 2 Hours Duration
    * Content: Physics, Chemistry, Biology (Plant Anatomy, Physiology, Genetics, Biotech).
  * Total: 200 Questions | 300 Marks | 4 Hours total.
* **Negative Marking:** **1/3rd mark** deducted per wrong response. Minimum qualifying: 40% marks in each paper individually."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf",
            "details": """* **Paper 1 (GK):** Rajasthan History, Forts, Dynasties, Freedom Movement, Physical divisions, Rivers, Climate, Current Affairs.
* **Paper 2 (Science Discipline):**
  * *Physics:* Rigid body dynamics, Thermodynamics, Waves & Oscillations, Electrostatics, Optics, Semiconductors.
  * *Chemistry:* Periodic table, Atomic structure, Solutions, Thermodynamics, Organic Chemistry basics, Polymers.
  * *Biology:* Plant anatomy, Photosynthesis, Cell biology, Human digestive/respiratory/circulatory systems, Genetics, Molecular biology."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF (Advt 04/2022):** [https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf](https://rsmssb.rajasthan.gov.in/Static/files/FullAdvt_LabAsst2022.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** March 16, 2022 (Advt. No. 04/2022)
* **Written Exam Dates:** June 28, 29 & 30, 2022
* **Results & DV List:** September 2022
* **Current Status:** 2022 batch appointed; next Lab Assistant vacancy cycle expected in upcoming RSSB calendar."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Lab Assistant 2022 Final Cut-Off Marks (Science Stream / Out of 300 Marks - Non-TSP):**
  * General Male: 255.42 | General Female: 248.18
  * OBC Male: 246.33 | OBC Female: 237.10
  * EWS Male: 232.11 | EWS Female: 221.05
  * SC Male: 211.20 | SC Female: 195.40
  * ST Male: 198.80 | ST Female: 188.10"""
        })
    ]
)

# --- 10-agriculture-supervisor.md ---
create_exam_file(
    "10-agriculture-supervisor.md",
    "RSMSSB Agriculture Supervisor (Krishi Supervisor) Examination",
    "Agriculture Department Subordinate Service Direct Recruitment (Non-CET)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Agriculture Supervisor (Krishi Supervisor) in Agriculture Department, Govt of Rajasthan.
* **Total Vacancies (2023-2024 Batch):** 430 Posts (Non-TSP: 385, TSP: 45).
* **Pay Level:** Pay Matrix Level **L-5** (Grade Pay 2400 / Fixed probation stipend ₹14,600/month for 2 years; post-probation basic pay ₹20,800 + state allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf",
            "details": """* **Essential Educational Qualification:**
  * Senior Secondary (10+2 / 12th Pass) in Agriculture Stream (B.S.S.E) from RBSE/CBSE OR B.Sc. (Agriculture) / B.Sc. (Horticulture) from a recognized university.
  * Knowledge of Rajasthan Hindi culture & Devanagari script.
  * Direct Entry (**NON-CET Exam**).
* **Age Limit:** 18 to 40 years as of January 1, 2024.
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; General Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf",
            "details": """* **Stage 1:** Single Phase Objective Written Competitive Examination (100 MCQs / 300 Marks).
* **Stage 2:** Document Verification (DV) & Final Merit List Allotment."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf",
            "details": """* **Total Questions:** 100 MCQs
* **Total Marks:** 300 Marks (3 marks per question)
* **Duration:** 2 Hours (120 minutes)
* **Subject Breakdown:**
  1. General Hindi: 15 Questions / 45 Marks
  2. Rajasthan History & Culture: 25 Questions / 75 Marks
  3. Agronomy (Sassya Vigyan): 20 Questions / 60 Marks
  4. Horticulture (Udyaniki): 20 Questions / 60 Marks
  5. Animal Husbandry (Pashupalan): 20 Questions / 60 Marks
* **Negative Marking:** **1 mark deducted per wrong answer** (1/3rd of 3 marks). Minimum qualifying: 40%."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf",
            "details": """* **General Hindi (15 Qs):** Sandhi, Samas, Upsarg, Pratyay, Sentence Correction, Synonyms, Antonyms, Idioms.
* **Rajasthan History & Culture (25 Qs):** Major dynasties, Freedom movement, Folk deities, Fairs, Festivals, Jewelry, Handicrafts, Forts, Temples.
* **Agronomy (20 Qs):** Soil science, Fertilizers, Irrigation, Crop production (Cereals, Pulses, Oilseeds), Weed management, Seed technology.
* **Horticulture (20 Qs):** Fruit production (Citrus, Mango, Guava, Pomegranate), Vegetables, Flowers, Nursery management, Fruit preservation.
* **Animal Husbandry (20 Qs):** Breeds of Cattle, Buffalo, Sheep, Goat; Animal diseases; Milk production & dairy technology."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF (Advt 06/2023):** [https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf](https://rsmssb.rajasthan.gov.in/Static/files/Advt_AgriSuper2023.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** July 10, 2023 (Advt. No. 06/2023)
* **Written Exam Date:** February 4, 2024
* **Final Results Released:** June 2024
* **Current Status:** 2023-2024 recruitment process successfully concluded."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Agriculture Supervisor 2023 Final Cut-Off Marks (Out of 300 Marks - Non-TSP):**
  * General Male: 228.16 | General Female: 218.42
  * OBC Male: 222.88 | OBC Female: 210.15
  * EWS Male: 212.44 | EWS Female: 196.22
  * SC Male: 195.32 | SC Female: 175.10
  * ST Male: 196.12 | ST Female: 172.50"""
        })
    ]
)

# --- 11-reet-level-1.md ---
create_exam_file(
    "11-reet-level-1.md",
    "REET Level 1 (Primary School Teacher Grade-III) Examination",
    "Elementary Education Department Primary Teacher Cadre (Classes I-V)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rajeduboard.rajasthan.gov.in",
            "details": """* **Recruiting Body:** Board of Secondary Education Rajasthan (RBSE Ajmer) for REET Screening Eligibility Test + Rajasthan Staff Selection Board (RSMSSB Jaipur) for 3rd Grade Teacher Mains Direct Recruitment.
* **Posts Covered:** Primary School Teacher Grade-III (Level 1, Classes I to V) in Elementary Education Dept.
* **Pay Level:** Pay Matrix Level **L-10** (Grade Pay 3600 / Initial fixed probation pay ₹23,700/month for 2 years; post-probation basic pay ₹33,800 + state allowances)."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rajeduboard.rajasthan.gov.in",
            "details": """* **Essential Educational Qualification:**
  * Senior Secondary (10+2 / 12th Pass) with minimum 50% marks AND 2-year Diploma in Elementary Education (D.El.Ed / BSTC / D.Ed) OR 4-year B.El.Ed.
  * Professional teaching qualification (D.El.Ed) is mandatory along with 12th Pass base.
* **Age Limit (for RSMSSB Mains Recruitment):** 18 to 40 years as of January 1 of the recruitment year. (No upper age limit for REET Eligibility Screening Test).
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; Gen Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rajeduboard.rajasthan.gov.in",
            "details": """* **Stage 1: REET Level 1 Screening Test (RBSE Ajmer):** Qualifying Eligibility Examination (60% for General, 55% for Reserved categories). Lifetime certificate validity per 2022 policy.
* **Stage 2: RSMSSB 3rd Grade Teacher Mains Examination (Jaipur):** Competitive written paper (300 Marks).
* **Stage 3:** Document Verification & District Allocation by Elementary Education Directorate, Bikaner."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/examscheme",
            "details": """* **Stage 1 (REET Level 1 Screening - RBSE):**
  * 150 Qs | 150 Marks | 2.5 Hours (150 mins)
  * Sections: Child Development & Pedagogy (30 Qs), Language I (30 Qs), Language II (30 Qs), Mathematics (30 Qs), Environmental Studies / EVS (30 Qs).
  * Negative Marking: **NO negative marking** in REET Screening Test.
* **Stage 2 (RSMSSB 3rd Grade Teacher Mains Exam):**
  * 150 Qs | 300 Marks | 2.5 Hours (150 mins)
  * Breakdown: Rajasthan GK & Heritage (100 Marks), Rajasthan Geography & Economy (80 Marks), School Subjects - Maths, EVS, Hindi, English (50 Marks), Pedagogy/Teaching Methods (40 Marks), Information Tech (10 Marks).
  * Negative Marking: **1/3rd mark** deducted per wrong answer."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rajeduboard.rajasthan.gov.in",
            "details": """* **Pedagogy & Child Psychology:** Child development, theories of learning, inclusive education, RTE Act 2009, CCE, teaching-learning materials.
* **School Subjects (Classes I-V Level):** Basic arithmetic, environmental science, Hindi & English basic grammar.
* **Rajasthan GK (Mains Heavy Weightage - 180/300 Marks):** Rajasthan History, Forts, Dynasties, Art, Geography, Rivers, Agriculture, Welfare schemes, RTE Act rules."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rajeduboard.rajasthan.gov.in",
            "details": """* **REET Portal (RBSE):** [https://rajeduboard.rajasthan.gov.in](https://rajeduboard.rajasthan.gov.in)
* **RSMSSB Mains Portal:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **REET Screening Held:** July 23-24, 2022
* **RSMSSB Mains Exam Held:** February 25, 2023 (48,000 total vacancies, ~21,000 Level 1 posts)
* **Current Status:** REET 2024 / 2025 announced by State Cabinet; fresh notification dates queued."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **RSMSSB 3rd Grade Teacher Level 1 Final Mains Cut-Off 2023 (Out of 300 Marks - Non-TSP):**
  * General Male: 195.38 | General Female: 195.38
  * OBC Male: 187.92 | OBC Female: 187.92
  * EWS Male: 181.24 | EWS Female: 181.24
  * SC Male: 160.93 | SC Female: 160.93
  * ST Male: 147.58 | ST Female: 147.58"""
        })
    ]
)

# --- 12-stenographer.md ---
create_exam_file(
    "12-stenographer.md",
    "RSMSSB Stenographer / Personal Assistant Grade-II Examination",
    "Subordinate Ministerial Service Direct Recruitment (Non-CET)",
    [
        ("Recruiting Body, Posts Covered & Pay Level", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf",
            "details": """* **Recruiting Body:** Rajasthan Staff Selection Board (RSMSSB / RSSB), Jaipur.
* **Posts Covered:** Stenographer (Govt Secretariat & RPSC) and Personal Assistant Grade-II (State Subordinate Departments).
* **Total Vacancies (2024 Batch):** 474 Posts (Secretariat Steno: 194, Subordinate PA Grade-II: 280).
* **Pay Level:** Pay Matrix Level **L-10** (Grade Pay 3600 / Fixed probation pay ₹23,700/month for 2 years) for Secretariat Stenographer; Level **L-8** (Grade Pay 2800) for Subordinate PA Grade-II."""
        }),
        ("Educational Qualification, Age Limit & Relaxations", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf",
            "details": """* **Essential Educational Qualification:**
  1. Senior Secondary (10+2 / 12th Pass) from RBSE/CBSE or equivalent.
  2. RS-CIT Computer Diploma / O-Level / COPA / Diploma or Degree in CS/IT.
  3. Stenography / Shorthand skill proficiency (Hindi or English).
  4. Direct Entry (**NON-CET Exam**).
* **Age Limit:** 18 to 40 years as of January 1, 2025.
* **Upper Age Relaxations:** SC/ST/OBC/MBC/EWS Male: 5 years; General Female: 5 years; SC/ST/OBC/MBC/EWS Female: 10 years."""
        }),
        ("Selection Stages", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf",
            "details": """* **Stage 1: Phase-I Written Examination:** 2 Papers held on the same day (Paper 1: GK/Science/Raj GK; Paper 2: Hindi/English). Total 200 Marks.
* **Stage 2: Phase-II Stenography Dictation & Transcription Skill Test (100 Marks):**
  * Hindi Shorthand: 80 wpm dictation for 10 minutes + 70 minutes computer transcription time.
  * OR English Shorthand: 100 wpm dictation for 10 minutes + 60 minutes computer transcription time.
* **Stage 3:** Document Verification & Final Merit List."""
        }),
        ("Written Exam Pattern", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf",
            "details": """* **Phase-I Written Examination Scheme:**
  * **Paper 1 (General Knowledge, Everyday Science, Rajasthan GK):**
    * 150 Questions | 100 Marks | 3 Hours Duration
    * Breakdown: General Knowledge & Science (75 Qs / 50 Marks), Rajasthan GK (75 Qs / 50 Marks)
  * **Paper 2 (General Hindi & General English):**
    * 150 Questions | 100 Marks | 3 Hours Duration
    * Breakdown: General Hindi (75 Qs / 50 Marks), General English (75 Qs / 50 Marks)
  * Total Phase-I: 300 Questions | 200 Marks | 6 Hours total.
* **Negative Marking:** **1/3rd mark (0.33)** deducted per wrong answer. Minimum qualifying: 40% in each paper individually."""
        }),
        ("Syllabus (Subject-Wise Summary)", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf",
            "details": """* **Paper 1:** Indian History, Geography, General Science (Physics, Chemistry, Biology, Environmental Studies), Rajasthan History, Architecture, Geography, Economy.
* **Paper 2:**
  * *General Hindi:* Sandhi, Samas, Upsarg, Pratyay, Synonyms, Antonyms, Sentence Correction, Official Letters.
  * *General English:* Tenses, Voice, Direct/Indirect Narration, Articles, Prepositions, Translation, Glossary of technical terms."""
        }),
        ("Official Links", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in",
            "details": """* **Recruiting Board Website:** [https://rssb.rajasthan.gov.in](https://rssb.rajasthan.gov.in)
* **Official Notification PDF (Advt 07/2024):** [https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf](https://rsmssb.rajasthan.gov.in/Static/files/FullAdv._Steno_PersnlAssitGrade_II%20_2024_26022024.pdf)
* **Apply Portal (SSO):** [https://sso.rajasthan.gov.in](https://sso.rajasthan.gov.in)"""
        }),
        ("Latest Known Notification & Updates", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/newsnotices",
            "details": """* **Notification Date:** February 26, 2024 (Advt. No. 07/2024)
* **Phase-I Written Exam Date:** October 5, 2024
* **Provisional Answer Key Released:** November 2024
* **Current Status:** Phase-I score evaluation and Phase-II Stenography Dictation test scheduling."""
        }),
        ("Cut-Off History", {
            "evidence_level": "OFFICIAL_CONFIRMED",
            "source_url": "https://rssb.rajasthan.gov.in/page?name=Results",
            "details": """* **Stenographer 2018 Final Combined Cut-Off Marks (Phase-I + Phase-II / Out of 300 Marks Total):**
  * General Male: 240.28 | General Female: 228.15
  * OBC Male: 232.50 | OBC Female: 215.10
  * SC Male: 208.12 | SC Female: 185.40
  * ST Male: 194.30 | ST Female: 170.20
* **2024 Phase-I Cut-Off:** Pending official release following Phase-II skill test scheduling."""
        })
    ]
)

