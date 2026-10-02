# Age Limit Fact Settlement: Jail Prahari & Jamadar Grade-II (Excise)

This document settles the official age limit criteria for two Rajasthan 12th-level government recruitment examinations conducted by the Rajasthan Staff Selection Board (RSMSSB/RSSB), verified against official advertisements issued on government domains.

---

## 1. Jail Prahari (प्रहरी / कारा प्रहरी - Prisons Department)

### Verdict
`OFFICIAL_CONFIRMED`

### Official Advertisement Reference
* **Official Document Name:** प्रहरी सीधी भर्ती - 2024 (Prahari Direct Recruitment 2024)
* **Advertisement Number:** Advt. No. 17/2024 (विज्ञापन संख्या 17/2024, क्रमांक: पं.14(138)RSSB/अर्थना/का.वि./प्रहरी/भर्ती/2024)
* **Issuing Date:** 11.12.2024 (11 December 2024)
* **Issuing Authority:** Rajasthan Staff Selection Board (RSSB / RSMSSB, Jaipur) for Directorate of Prisons / Jail Department, Rajasthan
* **Official Source URL:** [https://rssb.rajasthan.gov.in/storage/advertisement_item/1734001071.pdf](https://rssb.rajasthan.gov.in/storage/advertisement_item/1734001071.pdf)

### Age Limit Parameters
* **Age Calculation Base Date (आयु गणना की तिथि):** `2026-01-01` (01.01.2026 / 1 January 2026)
* **Minimum Age:** 18 Years
* **Maximum Base Age (General Male):** 26 Years
* **Upper Age Relaxations per Category:**
  * **General (Male):** 26 Years
  * **OBC / BC / EWS / SC / ST / MBC (Male - Rajasthan Domicile):** 26 + 5 = 31 Years (5 years relaxation)
  * **General Women (WOMEN - GEN):** 26 + 5 = 31 Years (5 years relaxation)
  * **SC / ST / OBC / MBC / EWS Women (Rajasthan Domicile):** 26 + 10 = 36 Years (10 years relaxation)
  * **Ex-Servicemen / Special Categories:** Relaxations as per Rajasthan Subordinate & Ministerial Services Rules.

### Proposed `ageLimit` JSON
```json
{
  "verification": "OFFICIAL_CONFIRMED",
  "refDate": "2026-01-01",
  "minAge": 18,
  "maxAge": {
    "GEN": 26,
    "OBC": 31,
    "SC": 31,
    "ST": 31,
    "WOMEN": 31
  },
  "source": "Advt. No. 17/2024 (11.12.2024), https://rssb.rajasthan.gov.in/storage/advertisement_item/1734001071.pdf"
}
```

### Official Evidence Quotes (Verbatim Hindi Text)
> **आयु (Age Criteria):**  
> "आवेदक 1 जनवरी 2026 को 18 वर्ष की आयु प्राप्त कर चुका हो तथा 26 वर्ष का नहीं हुआ हो।"  
> "अतः आवेदकों की आयु की गणना 01.01.2026 से की जावेगी ।"  
>   
> **उच्चतम आयु सीमा में छूट (Upper Age Relaxations):**  
> "(क) अनुसूचित जाति / अनुसूचित जनजाति / अन्य पिछड़ा वर्ग / अति पिछड़ा वर्ग / आर्थिक रूप से कमजोर वर्ग के पुरुष अभ्यर्थियों के मामले में 5 वर्ष की छूट दी जावेगी।"  
> "(ख) सामान्य वर्ग की महिला अभ्यर्थियों के मामले में 5 वर्ष की छूट दी जावेगी।"  
> "(ग) अनुसूचित जाति / अनुसूचित जनजाति / अन्य पिछड़ा वर्ग / अति पिछड़ा वर्ग / आर्थिक रूप से कमजोर वर्ग की महिला अभ्यर्थियों के मामले में 10 वर्ष की छूट दी जावेगी।"

### Conflict & Context Notes
* **Why Upper Age is 26 (Uniformed Service Cadre):** Jail Prahari is a uniformed executive post under the Prisons Department, governed by lower maximum age rules (18–26) compared to standard non-uniformed ministerial posts (18–40). Coaching portals often mistakenly list 18–40 years for Jail Prahari by confusing it with standard RSMSSB LDC/Hostel Supt posts. Official Advt 17/2024 strictly mandates **18 to 26 years** as base age.

---

## 2. Jamadar Grade-II Excise Department (जमादार ग्रेड-II - आबकारी विभाग)

### Verdict
`OFFICIAL_CONFIRMED`

### Official Advertisement Reference
* **Official Document Name:** जमादार ग्रेड-II सीधी भर्ती - 2025 / समान पात्रता परीक्षा (सीनियर सेकण्डरी स्तर) (Jamadar Grade-II Recruitment / Rajasthan Excise Subordinate Service - Preventive Branch)
* **Advertisement Number:** Advt. No. 07/2025 (क्रमांक: पं.14(156)RSSB/अर्थना/आ.वि./जमादार/भर्ती/2025) & CET Senior Secondary Gateway Advt. No. 08/2024 (Advt 11/2024)
* **Issuing Authority:** Rajasthan Staff Selection Board (RSSB / RSMSSB, Jaipur) for State Excise Department, Rajasthan (आबकारी विभाग, उदयपुर)
* **Official Source URL:** [https://rssb.rajasthan.gov.in/storage/advertisement_item/1760618283.pdf](https://rssb.rajasthan.gov.in/storage/advertisement_item/1760618283.pdf) (See also CET 12th Level PDF: [https://rsmssb.rajasthan.gov.in/link_to_external_file/Full_Adv_of_CET(Sr._Sec)_2024.pdf](https://rsmssb.rajasthan.gov.in/link_to_external_file/Full_Adv_of_CET(Sr._Sec)_2024.pdf))

### Age Limit Parameters
* **Age Calculation Base Date (आयु गणना की तिथि):** `2026-01-01` (01.01.2026 / 1 January 2026 in direct recruitment notification Advt 07/2025; `2025-01-01` in initial CET 2024 screening advertisement)
* **Minimum Age:** 18 Years
* **Maximum Base Age (General Male):** 40 Years
* **Upper Age Relaxations per Category:**
  * **General (Male):** 40 Years
  * **OBC / BC / EWS / SC / ST / MBC (Male - Rajasthan Domicile):** 40 + 5 = 45 Years (5 years relaxation)
  * **General Women (WOMEN - GEN):** 40 + 5 = 45 Years (5 years relaxation)
  * **SC / ST / OBC / MBC / EWS Women (Rajasthan Domicile):** 40 + 10 = 50 Years (10 years relaxation)

### Proposed `ageLimit` JSON
```json
{
  "verification": "OFFICIAL_CONFIRMED",
  "refDate": "2026-01-01",
  "minAge": 18,
  "maxAge": {
    "GEN": 40,
    "OBC": 45,
    "SC": 45,
    "ST": 45,
    "WOMEN": 45
  },
  "source": "Advt. No. 07/2025 (File No. पं.14(156)RSSB/अर्थना/आ.वि./जमादार/भर्ती/2025), https://rssb.rajasthan.gov.in/storage/advertisement_item/1760618283.pdf"
}
```

### Official Evidence Quotes (Verbatim Hindi Text)
> **आयु (Age Criteria):**  
> "आवेदक दिनांक 01.01.2026 को 18 वर्ष की आयु प्राप्त कर चुका हो तथा 40 वर्ष का नहीं हुआ हो।"  
> "अतः आवेदकों की आयु की गणना 01.01.2026 से की जावेगी।"  
>   
> **उच्चतम आयु सीमा में छूट (Upper Age Relaxations):**  
> "(क) अनुसूचित जाति / अनुसूचित जनजाति / अन्य पिछड़ा वर्ग / अति पिछड़ा वर्ग / आर्थिक रूप से कमजोर वर्ग के पुरुष अभ्यर्थियों के मामले में 5 वर्ष की छूट दी जावेगी।"  
> "(ख) सामान्य वर्ग की महिला अभ्यर्थियों के मामले में 5 वर्ष की छूट दी जावेगी।"  
> "(ग) अनुसूचित जाति / अनुसूचित जनजाति / अन्य पिछड़ा वर्ग / अति पिछड़ा वर्ग / आर्थिक रूप से कमजोर वर्ग की महिला अभ्यर्थियों के मामले में 10 वर्ष की छूट दी जावेगी।"

### Conflict & Context Notes
* **Framework Alignment:** Jamadar Grade-II is classified under Rajasthan Excise Subordinate Service (Preventive Branch) / राजस्थान आबकारी अधीनस्थ सेवा (निवारक शाखा). Unlike Police / Jail uniformed cadres, the state rules for Excise Jamadar Grade-II set the standard non-uniformed subordinate age band of **18 to 40 years**.

---

## 3. Summary & Comparison Table

| Exam | Recruiting Body | Advt No. / Date | Reference Date | Min Age | GEN Max | SC/ST/OBC/EWS Male Max | GEN Female Max | Reserved Female Max | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Jail Prahari** | RSSB / Prisons Dept | Advt 17/2024 (11.12.2024) | `2026-01-01` | **18** | **26** | **31** | **31** | **36** | `OFFICIAL_CONFIRMED` |
| **Jamadar Grade-II** | RSSB / Excise Dept | Advt 07/2025 / CET 2024 | `2026-01-01` | **18** | **40** | **45** | **45** | **50** | `OFFICIAL_CONFIRMED` |

