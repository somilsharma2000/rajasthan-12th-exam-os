# Rajasthan 12th-Level Government Exam OS

The verified, Hindi-first preparation app for ALL Rajasthan 12th-level government exams
(RSMSSB/RSSB CET, LDC/Junior Assistant, Police Constable, Forester, Jail Prahari,
Hostel Superintendent, Jamadar Excise, Lab Assistant, Agriculture Supervisor,
REET Level-1, Stenographer, Librarian Grade-3).

## What makes this different
- **Verified data only.** Every exam pattern, negative-marking rule and fact is verified
  against official notifications. Unverified data never ships. Every question carries
  its provenance (source + evidence level).
- **The RSMSSB 5th-option (E) rule, implemented for real.** Unattempted questions must
  bubble Option E; >10% blank without E = disqualification. The engine warns you like
  the real exam does.
- **Config-driven engine.** One engine, every paper: CET 1/3 negative (from 2024),
  Constable 1/4, Agriculture Supervisor flat -1, REET screening none.
- **Hindi-first.** Native Hindi authoring with English toggle — not machine translation.
- **PYQ firewall.** Real PYQs and agent-authored practice questions are always labeled.
  Never mixed. Never faked.
- **Light + offline.** ~75KB gzipped PWA. Works on 2G, installs on the phone.

## Stack
React + Vite PWA. No backend needed for the student app.

## Data snapshot
- 515+ verified questions (growing nightly via the authoring + verification pipeline)
- 12 exam configurations, all OFFICIAL_CONFIRMED
- Verified Exam Hubs: qualification, selection stages, pay levels, official portals

## Dev
```
npm install
npm run build     # regenerates bank manifest + production build
npm run preview
```

Deployed via GitHub Pages from `/dist`.

## Repository note
Code and content remain under the owner's control. Data snapshot as of: October 2026.
