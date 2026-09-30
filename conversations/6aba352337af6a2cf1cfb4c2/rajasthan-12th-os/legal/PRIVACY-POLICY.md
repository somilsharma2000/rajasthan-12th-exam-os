# PRIVACY POLICY

> **DRAFT — NOT LEGAL ADVICE**  
> *This document is a draft prepared for operational launch readiness. Founder review and formal legal counsel sign-off are required prior to public deployment.*

**Last Updated:** September 30, 2026  
**Effective Date:** September 30, 2026  
**App Name:** Rajasthan 12th OS (Rajasthan 12th Level Exam Prep PWA)

---

## 1. INTRODUCTION AND OVERVIEW

Welcome to **Rajasthan 12th OS** ("we," "our," or "us"). We provide a Progressive Web Application (PWA) designed to assist students preparing for Rajasthan 12th-level competitive government examinations conducted by the Rajasthan Subordinate and Ministerial Services Selection Board (RSMSSB / RSSB), including CET 12th Level, LDC / Junior Assistant, Police Constable, Lab Assistant, Hostel Superintendent, Forest Guard, and related exams.

We are strongly committed to protecting user privacy and maintaining compliance with applicable Indian privacy laws, including the **Digital Personal Data Protection Act, 2023 (DPDP Act 2023)** and the **Information Technology Act, 2000** (and rules framed thereunder).

This Privacy Policy explains how our application currently operates, what data is processed, how data is stored, and what changes will occur when user accounts and payment systems are introduced in future releases.

---

## 2. CURRENT TECHNICAL ARCHITECTURE & DATA COLLECTION (CLIENT-SIDE ONLY)

### 2.1 Technical Audit & Storage Verification
Our application is designed as a **Static Progressive Web Application (PWA)** that runs entirely inside your web browser. A technical code audit of the current software build confirms the following core operational facts:

1. **No Backend Servers:** The app does not transmit user data to any central server or remote database.
2. **No User Accounts:** There is currently no registration, sign-up, or user authentication system.
3. **No Third-Party Analytics or Tracking:** The application code contains **zero** third-party tracking scripts, advertising trackers, or telemetry SDKs (such as Google Analytics, Mixpanel, PostHog, Sentry, or Firebase).
4. **No External Network Calls:** The app makes no external API requests to record user activity or gather device identifiers.

### 2.2 Local Storage (localStorage) Usage
To provide progress tracking, bookmarking, and offline functionality, the app stores data exclusively within your web browser's `localStorage`. The exact data items stored on your local device are:

| Local Storage Key | Purpose & Contents | Personal Identifiers Collected |
| :--- | :--- | :--- |
| `examos-active-mock` | Stores active mock test session state (exam ID, mode, question IDs, selected answers, current index, start timestamp) to enable session resumption. | **None** |
| `examos-history` | Stores up to 50 recent test results (test name, date timestamp, numerical score, accuracy %, correct/wrong counts) for your personal score history display. | **None** |
| `examos-bookmarks` | Stores an array of question ID strings that you explicitly choose to bookmark for revision. | **None** |

**Crucial Privacy Note:** This data is stored strictly on your local device. We cannot access, view, aggregate, or restore your `localStorage` data. If you clear your browser cache/storage or uninstall/reset your browser, this local progress data will be permanently erased.

---

## 3. FUTURE PAYMENT INTEGRATION & ACCOUNT REGISTRATION (UPCOMING TRANSITION)

To access premium features or paid subscription tiers (e.g., ₹99 subscription plans), future updates will introduce account creation and payment gateway integration. At that stage, this Privacy Policy will be updated, and explicit consent will be requested prior to processing personal data.

### 3.1 Anticipated Data Collection Upon Account/Payment Launch
When user accounts and payment gateways (such as Razorpay or Stripe) are implemented, we will collect:

* **Identity & Contact Data:** Name, email address, mobile phone number, state/city of residence.
* **Payment & Transaction Data:** Subscription plan selected, transaction reference ID, payment timestamp, payment status, GST billing details (if applicable). *Note: Full credit card/debit card numbers or UPI PINs are processed directly by PCI-DSS compliant payment aggregators and are never stored on our systems.*
* **Account Credentials:** Encrypted passwords or One-Time Passwords (OTPs) for authentication.
* **Usage & Device Data:** Technical logs required for platform security, fraud prevention, and session management (IP address, device type, browser version).

---

## 4. ALIGNMENT WITH THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023 (DPDP ACT 2023)

Although our current version collects no personal data on external servers, we adhere to the foundational principles of the DPDP Act 2023 in preparation for full platform operations:

### 4.1 Data Fiduciary & Contact Details
When personal data processing commences, the operating company behind Rajasthan 12th OS will act as the **Data Fiduciary**.

* **Grievance Officer Name:** Legal & Compliance Department
* **Grievance Contact Email:** `legal@rajasthan12th-os.in` (Placeholder — update upon entity registration)
* **Postal Address:** Rajasthan, India (Update upon legal entity confirmation)

### 4.2 Notice and Consent
* **Notice in Clear Language:** Future data collection will be preceded by an explicit, plain-language notice in both **Hindi** and **English**.
* **Consent:** Personal data will be processed strictly on the basis of free, specific, informed, unconditional, and unambiguous consent given by the Data Principal (user) through an affirmative action.

### 4.3 Rights of Data Principals (Users)
Under the DPDP Act 2023, you hold the following rights regarding your personal data:
1. **Right to Access:** Right to request a summary of personal data being processed and the processing activities.
2. **Right to Correction and Erasure:** Right to request correction of inaccurate data or complete erasure of personal data ("Right to be Forgotten").
3. **Right of Grievance Redressal:** Right to readily available grievance redressal mechanisms regarding any act or omission of the Data Fiduciary.
4. **Right to Withdraw Consent:** Right to withdraw consent at any time with ease equal to the process of giving consent.

*To exercise any of these rights regarding current local data, you can clear your browser's local storage directly. For future account-based data, requests can be emailed to our Grievance Officer.*

### 4.4 Data Localization & Storage
All future user databases and transaction logs will be hosted on secure servers located within the territorial jurisdiction of India, in full compliance with Indian data sovereignty and localization laws.

---

## 5. CHILDREN'S PRIVACY

Our application is designed for candidates preparing for 12th-level state recruitment examinations (typically individuals aged 17 and older). We do not knowingly collect personal data from minors under the age of 18 without verifiable parental/guardian consent. If we learn that personal data of a child has been collected without proper consent, we will take immediate steps to delete such information.

---

## 6. DATA SECURITY

While current user data remains entirely on your local device, we implement industry-standard technical measures for our application code (including HTTPS delivery, subresource integrity, and code sanitization) to prevent malicious cross-site scripting (XSS) or unauthorized local storage tampering.

---

## 7. THIRD-PARTY LINKS & EXTERNAL SERVICES

Our application may contain references or links to public examination portals (e.g., `rssb.rajasthan.gov.in`). We are not responsible for the privacy practices, content, or security of third-party websites. We encourage users to review the privacy policies of any third-party websites they visit.

---

## 8. CHANGES TO THIS PRIVACY POLICY

We reserve the right to update or modify this Privacy Policy as our service evolves. Any changes will be published on this page with an updated "Last Updated" date. In the event of material changes involving personal data collection or backend integration, prominent notice will be provided within the app.

---

## 9. CONTACT US & GRIEVANCE OFFICER

If you have questions, feedback, or grievances regarding this Privacy Policy or our privacy practices, please contact:

**Grievance Officer — Rajasthan 12th OS**  
Email: `legal@rajasthan12th-os.in`  
Location: Jaipur, Rajasthan, India  
Response Timeline: Grievances will be acknowledged within 48 hours and resolved within 15 business days as required under Indian law.
