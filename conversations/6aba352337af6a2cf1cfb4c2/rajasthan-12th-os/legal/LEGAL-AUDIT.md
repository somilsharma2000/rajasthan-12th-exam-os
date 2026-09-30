# LEGAL AUDIT & LAUNCH RISK REGISTER

> **DRAFT — NOT LEGAL ADVICE**  
> *This document is a comprehensive legal risk audit prepared for operational launch readiness. Founder review and formal legal counsel sign-off are required prior to public deployment.*

**Date of Audit:** September 30, 2026  
**Target Product:** Rajasthan 12th OS (₹99 Subscription PWA for Rajasthan 12th-Level Government Exams)  
**Auditor:** Internal Legal Department  

---

## EXECUTIVE SUMMARY

This Legal Audit identifies, evaluates, and provides actionable mitigation strategies for the primary regulatory, intellectual property, tax, and consumer law risks associated with launching **Rajasthan 12th OS**.

While the current software build operates strictly client-side via browser `localStorage` with zero remote tracking or backend servers, commercial launch at ₹99 via payment gateways triggers statutory compliance obligations under Indian law.

---

## RISK MATRIX SUMMARY

| Risk ID | Risk Domain | Severity / Impact | Likelihood | Overall Risk Level | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **RISK-01** | PYQ Copyright & Content Provenance | High | Medium | **MEDIUM-HIGH** | Mitigation Drafted |
| **RISK-02** | GST Registration & OIDAR Tax Obligations | Critical | High | **HIGH (LAUNCH BLOCKER)** | Action Required |
| **RISK-03** | DPDP Act 2023 Compliance (Accounts & Data) | High | Medium | **MEDIUM-HIGH** | Framework Built |
| **RISK-04** | Name & Trademark Risks (RSMSSB Endorsement) | High | Medium | **MEDIUM-HIGH** | Disclaimers Added |
| **RISK-05** | Payment Aggregator Merchant KYC & Website Mandates | Critical | High | **HIGH (LAUNCH BLOCKER)** | Prerequisite Active |

---

## DETAILED RISK ANALYSIS & MITIGATION PLAN

---

### RISK-01: Past Year Question (PYQ) Copyright & Content Provenance

#### 1. Background & Findings
The application incorporates Past Year Questions (PYQs) for Rajasthan CET 12th, LDC, Police Constable, and related state exams. Codebase inspects confirm that transcriptions originate from public educational archives (e.g., `sscportal.in`, public test repositories, and memory-based candidate transcriptions).

#### 2. Legal Analysis
* **Government Exam Questions as Public Records:** Under Section 2(k) and Section 52(1)(q) of the Indian Copyright Act, 1957, the publication or reproduction of any matter published in any Official Gazette or government report/work is generally permitted unless explicitly restricted. Government recruitment exam papers conducted by statutory bodies (RSMSSB/RSSB) serve public selection functions.
* **Coaching-Source & Archive Transcriptions Risk:** While raw government exam questions are in the public domain, third-party coaching institutes or web portals (e.g., `sscportal.in`, Adda247, Prepp) that transcribed, typed, formatted, or authored specific solution explanations may claim independent copyright over their **original formatting, layout, or proprietary explanations**.
* **Educational Fair Dealing:** Section 52(1)(a) & (i) of the Copyright Act provides fair dealing exemptions for educational instruction and private study. However, commercial re-use of verbatim explanations compiled by rival coaching portals poses a potential copyright infringement notice risk.

#### 3. Mitigation & Recommendations
1. **Sanitize Explanations:** Ensure all detailed explanations and solution rationales are independently rewritten by in-house subject experts or AI pipeline agents (`agent_authored` / `verified_derived`). Do not copy verbatim explanations from third-party coaching websites.
2. **Implement Provenance Page in UI:** Expose a dedicated "Question Provenance & Transparency Page" within the PWA interface showing provenance metadata per question (e.g., `official-paper`, `memory-transcription`, `agent-authored`).
3. **Formal Content Takedown Policy:** Include a Notice-and-Takedown mechanism in the Disclaimer document allowing copyright holders to submit claims to `legal@rajasthan12th-os.in`.

---

### RISK-02: GST Obligations & OIDAR Tax Thresholds for Digital Services

#### 1. Background & Findings
The app will sell digital subscriptions at ₹99 per user. Under Indian Goods and Services Tax (GST) law, automated digital exam-prep applications delivered via the internet qualify as **Online Information Database Access and Retrieval (OIDAR) Services**.

#### 2. Legal Analysis
* **Standard GST Threshold (Section 22, CGST Act):** For standard service providers operating within a single state (Rajasthan), the mandatory GST registration threshold is **₹20 Lakhs aggregate turnover** per financial year.
* **Inter-State Supply Rules (Section 24, CGST Act):** Under Section 24(i) of the CGST Act, 2017, any person making **inter-state taxable supplies** of services is required to obtain mandatory GST registration regardless of turnover threshold. If students outside Rajasthan (e.g., candidates residing in Delhi, UP, or Haryana preparing for Rajasthan exams) purchase subscriptions, this constitutes inter-state supply.
* **OIDAR Services Nuance:** Under Notification No. 10/2017-Integrated Tax, small service providers making inter-state supplies are granted an exemption up to ₹20 Lakhs aggregate turnover, *provided* the supply is not channeled through an e-commerce operator required to collect tax at source under Section 52.
* **Payment Gateway Requirement:** Even if turnover is below ₹20 Lakhs, major payment aggregators (Razorpay, Stripe) frequently require a valid GSTIN or a formal Declaration of Exemption during merchant onboarding for digital goods.

#### 3. Mitigation & Recommendations
1. **Pre-Launch Turnover Tracking:** If launching as a Sole Proprietorship with turnover under ₹20 Lakhs, file an official GST Exemption Undertaking with the payment aggregator if permitted, or register voluntarily under GST to obtain a GSTIN.
2. **Voluntary GST Registration (Recommended):** Register for GST voluntarily prior to scale. A ₹99 subscription will collect 18% GST (₹15.10 GST + ₹83.90 net revenue), establishing full compliance for nationwide transactions and seamless payment gateway approval.
3. **Automated Invoicing:** Issue automated GST e-invoices/receipts showing HSN/SAC code `998431` (Online portal content) or `999293` (Commercial training and coaching services).

---

### RISK-03: DPDP Act 2023 Compliance for User Accounts & Telemetry

#### 1. Background & Findings
The current PWA stores user history strictly in client-side `localStorage`. However, introducing ₹99 paid subscriptions requires user authentication (phone/email login) and payment reference tracking, bringing the platform under the jurisdiction of the **Digital Personal Data Protection Act, 2023 (DPDP Act 2023)**.

#### 2. Legal Analysis
* **Data Fiduciary Duties:** The operating company becomes a **Data Fiduciary** responsible for processing Digital Personal Data lawfully, fairly, and transparently.
* **Notice & Consent Requirements (Section 5, DPDP Act):** Prior to collecting phone numbers, names, or emails, the app must present a clear, itemized notice in plain language available in **English and Hindi** (scheduled language under 8th Schedule).
* **Penalties under DPDP Act:** Non-compliance with Data Fiduciary obligations or failure to implement reasonable security safeguards can attract administrative penalties up to **₹250 Crore** under the Schedule to the DPDP Act.

#### 3. Mitigation & Recommendations
1. **Publish Compliant Privacy Policy:** Deploy the drafted [PRIVACY-POLICY.md](./PRIVACY-POLICY.md) before accounts go live.
2. **Explicit Opt-In Checkbox:** Add an explicit, un-prechecked consent checkbox during user sign-up: *"I agree to the Terms of Service and Privacy Policy, and consent to the processing of my contact details for account access."*
3. **Appoint Grievance Officer:** Formally designate a Grievance Officer and publish contact details (`legal@rajasthan12th-os.in`) with a statutory 15-day resolution SLA.
4. **Data Localization:** Host all future backend databases (PostgreSQL/MongoDB) on Indian data centers (e.g., AWS Mumbai / GCP Delhi).

---

### RISK-04: Project Name & Trademark Risks (RSMSSB / Government Endorsement)

#### 1. Background & Findings
The app project name is **Rajasthan 12th OS**. Marketing copy references official exam names including "RSMSSB CET 12th Level", "Patwari", "LDC", and "RSSB".

#### 2. Legal Analysis
* **Trademark Infringement / Passing Off:** Under the Trade Marks Act, 1999, using registered acronyms like "RSMSSB" or "RSSB" as the *primary brand title* (e.g., "Official RSMSSB App") creates significant liability for passing off and deceptive similarity.
* **Emblems and Names Act, 1950 & State Emblem Act, 2005:** Prohibits the unauthorized commercial use of government coats of arms, state seals, official crests, or words implying official government patronage.
* **Nominative Fair Use:** Using the terms "Rajasthan 12th Level Exams" or referencing "RSMSSB CET" in a descriptive context to inform users about exam coverage is legal under **nominative fair use** (Section 30(2)(a) of the Trade Marks Act, 1999), provided no official logo or government seal is used.

#### 3. Mitigation & Recommendations
1. **Maintain Name "Rajasthan 12th OS":** Keep the primary brand name as "Rajasthan 12th OS" or "ExamOS Rajasthan". Do **NOT** rename the app to "RSMSSB Official App" or "RSSB Prep OS".
2. **Prohibit Official Logos:** Ensure no government crests, Rajasthan State emblems, or official RSSB logos appear anywhere in the PWA graphics or favicon.
3. **Prominent Non-Affiliation Banner:** Maintain the header disclaimer in the application footer and launch screen: *"Rajasthan 12th OS is an independent private educational tool and is NOT affiliated with RSMSSB/RSSB or the Government of Rajasthan."*

---

### RISK-05: Payment Aggregator Requirements & Merchant Onboarding

#### 1. Background & Findings
Selling ₹99 subscriptions requires onboarding with a RBI-regulated Payment Aggregator (Razorpay, Stripe, Cashfree, or Paytm Payment Gateway).

#### 2. Legal Analysis
* **RBI Payment Aggregator Guidelines (RBI/2019-20/174):** Directs payment aggregators to conduct strict merchant background checks, website audits, and KYC verification before enabling live payment processing.
* **Mandatory Website Disclosures:** Payment aggregators will automatically reject merchant applications if the web application lacks live, accessible links to:
  1. Privacy Policy
  2. Terms & Conditions
  3. Refund & Cancellation Policy
  4. Contact Us / Support Page with physical contact address and email
  5. Clear Pricing and Subscription Terms disclosure
* **KYC Documentation:** Merchant verification requires legal entity documents (PAN, Aadhaar of proprietor/directors, Bank Account Cancelled Cheque, Business Registration/GSTIN).

#### 3. Mitigation & Recommendations
1. **Link Legal Documents in App Footer:** Add live footer links in the React PWA rendering all 4 drafted policy documents (`PRIVACY-POLICY.md`, `TERMS-OF-SERVICE.md`, `REFUND-POLICY.md`, `DISCLAIMER.md`).
2. **Prepare Merchant KYC Dossier:** Compile founder PAN, Aadhaar, bank account details, and business entity registration prior to submitting the Razorpay/Stripe application.
3. **Setup Contact Us Page:** Ensure a dedicated "Contact Us" screen exists in the app listing a valid customer support email (`support@rajasthan12th-os.in`) and physical business location in Rajasthan.

---

## TOP 3 LEGAL RISKS THAT COULD BLOCK LAUNCH

Of the five audited domains, the following **top 3 legal risks** pose immediate compliance or operational blockers that must be resolved prior to public commercial launch:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ TOP 3 LAUNCH-BLOCKING LEGAL RISKS                                                │
├──────────────────────────────────────────────────────────────────────────────────┤
│ 1. GST OIDAR REGISTRATION & INTER-STATE TAX COMPLIANCE (RISK-02)                 │
│    • Impact: Payment gateways will withhold payouts or reject merchant           │
│      onboarding without GSTIN / tax status declaration. Selling inter-state      │
│      digital services without tax compliance risks CGST penalties.               │
│                                                                                  │
│ 2. PAYMENT AGGREGATOR MERCHANT MANDATES & POLICY INTEGRATION (RISK-05)           │
│    • Impact: Razorpay/Stripe underwriting automated crawlers will instantly      │
│      reject live payment key activation if Terms, Privacy, Refund, and           │
│      Contact policies are missing from the public PWA footer links.              │
│                                                                                  │
│ 3. DPDP ACT 2023 CONSENT & MANDATORY GRIEVANCE OFFICERS FOR ACCOUNTS (RISK-03)   │
│    • Impact: Launching user sign-ups / payment registration without a            │
│      bilingual DPDP notice and Grievance Officer disclosure exposes the          │
│      founder to severe statutory penalties under Indian data protection law.      │
└──────────────────────────────────────────────────────────────────────────────────┘
```

---

## ACTIONABLE LAUNCH CHECKLIST FOR FOUNDER

- [x] **Step 1:** Draft Launch-Legal Package (Privacy Policy, Terms of Service, Refund Policy, Disclaimer, Legal Audit) — *COMPLETED*.
- [ ] **Step 2:** Review legal drafts with practicing Advocate / Corporate Counsel in Jaipur/Rajasthan for final sign-off.
- [ ] **Step 3:** Mount markdown policies into PWA footer/settings drawer with dedicated URLs or modal views.
- [ ] **Step 4:** Submit business entity KYC and published policy links to Razorpay/Stripe for merchant gateway approval.
- [ ] **Step 5:** Finalize GSTIN registration or formal tax declaration for ₹99 subscription billing.
