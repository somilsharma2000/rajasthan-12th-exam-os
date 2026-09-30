# LAUNCH_PLAN.md — Marudhar Abhyas (Rajasthan 12th-Level Exam OS)

Founder mandate (2026-09-30): list ALL remaining work to go live/sell, then execute step by
step with parallel sub-agent teams (QA hunters, competitive watch, legal, logic/workflow),
plus the content pipeline already running.

## STATE (as of 2026-09-30)

LIVE: v1.0 PWA at https://somilsharma2000.github.io/rajasthan-12th-exam-os/
- 916 verified questions (bank validator: ZERO ISSUES)
- 12 Exam Hubs (CET 2024 marking incl. 1/3 negative + Option-E rule, verified)
- Features: Practice, Mock, PYQ set, Error Book, Exam DNA, Glossary
- 141 real CET 2024 PYQs live; 4-pass verified
- ~75KB gzipped, offline-ready PWA

IN FLIGHT:
- Police Constable 2022: 632 unique questions staged; 4 verification agents running
- LDC 2024: source hunt active (RSSB answer-key PDF fetch blocked once — retrying)

## PHASE 1 — CONTENT (highest priority)
1. [~] Police wave: merge verification verdicts -> correct/exclude -> build JS -> deploy
2. [ ] LDC 2024 paper + official answer key -> verify -> ship
3. [ ] CET 2024 dropped-8 recovery (passage x4, figure x2, corrupt x2) — relaunch recovery agent
4. [ ] Real PYQ waves for remaining exams: Patwari, VDO, Forest Guard, REET-L1, Lab
   Assistant, Jail Prahari, Librarian G-3 (currently derived/agent-authored coverage only)
5. [ ] Bank depth: target 2000+ verified questions before paid launch

## PHASE 2 — PRODUCT (pre-sale)
6. [ ] Dark-mode SaaS aesthetic pass (approved direction; not yet applied)
7. [ ] Hindi/English typing module (promised Tier-1; build + verify)
8. [ ] Live AI assistant via serverless proxy + daily cap (BLOCKED: needs owner API key
   + hosting decision; static gh-pages cannot host secrets)
9. [ ] Auth + paid-content gating (ARCHITECTURE DECISION: current app is a static
   client-side site — content is extractable; owner must choose backend approach)
10. [ ] Payments ₹99: Razorpay/Stripe account (owner), checkout, subscription mgmt
11. [ ] In-app support/feedback channel

## PHASE 3 — LEGAL (drafted in parallel, owner+counsel sign-off)
12. [~] Privacy Policy, Terms of Service, Refund Policy, exam-board disclaimer,
     PYQ-provenance stance, GST readiness note (legal team drafting now)

## PHASE 4 — LAUNCH & SELL
13. [ ] Landing/pricing page + transparency (provenance) page — our differentiator
14. [ ] Privacy-friendly analytics
15. [ ] Soft-launch beta with real students -> feedback -> public launch
16. [ ] Ops: monitoring, backups, content-update pipeline for new notifications

## STANDING TEAMS (parallel, continuous)
- CONTENT VERIFICATION: 4 agents live (raj-gk 158, india-gk 156, maths+reasoning 200,
  comp+sci+hindi 118)
- QA HUNTERS: launched — code + data bug hunt across app
- COMPETITIVE WATCH: launched — benchmark vs Utkarsh/Testbook/Adda247/PW, gap report
- LEGAL: launched — drafts + audit
- LOGIC/WORKFLOW: launched — end-to-end journey audit incl. scoring math

## HARD BLOCKERS (owner decisions/credentials)
- GitHub token: working
- AI proxy: API key + backend hosting choice
- Gating/auth: architecture decision (static vs backend)
- Payments: Razorpay/Stripe signup
- Legal sign-off by founder (agent drafts are not legal advice)

## CREDIT REALITY (2026-09-30)
Integration credits exhausted this cycle — sub-agents run knowledge/computation-only
missions; web research is rationed. Message credits ~192/month remaining: teams are
instructed to deliver file-based reports in single passes.
