# EXPENSES.md — Rajasthan 12th-Level Exam OS: Launch, Sell & Operate Costs
*Finance department, 2026-09-30. Founder asked for the full honest expense picture (pricing excluded per command). Architecture = GitHub-hosted static PWA, zero paid SaaS. All amounts in INR. Estimates labeled ESTIMATE; facts labeled FACT; items needing later confirmation labeled VERIFY.*

## A. One-time launch expenses
| Item | Cost | Status |
|---|---|---|
| Domain name (.com or .in) | ₹500-1,000/yr (first year) | FACT (registrar rates); .in cheaper than .com |
| GitHub account + repo + hosting (GitHub Pages) | ₹0 | FACT |
| SSL/HTTPS | ₹0 (automatic with Pages) | FACT |
| App development | ₹0 (agent-built, zero manual labor) | FACT |
| Content + PYQ verification | ₹0 (agent-built) | FACT |
| Google Play Store developer account (only if we later publish a native app; NOT needed for PWA) | ~₹2,100 one-time ($25) | FACT — deferred, optional |
| Terms/Privacy policy drafting | ₹0 (open-source templates, self-audited) | FACT; professional legal review optional: ₹5,000-20,000 ESTIMATE — flagged, only before charging real money at scale |

**Mandatory cash to launch: ₹500-1,000 (domain only). Everything else is ₹0.**

## B. Selling expenses (when monetization activates — phase 5)
| Item | Cost | Status |
|---|---|---|
| Payment gateway setup (Razorpay/UPI-first) | ₹0 setup | FACT |
| Transaction fee per payment | ~2% + GST | VERIFY at activation — exact UPI/card/netbanking percentages must be confirmed from gateway pricing page before launch |
| Payout/settlement charges | Usually ₹0 | VERIFY same |
| GST registration | ₹0 to register; returns may need CA ~₹1,000-5,000/yr | ESTIMATE — professional confirmation flagged |
| Refunds processing | Reverse of payment; gateway fee sometimes not returned | VERIFY |

## C. Monthly operating expenses (v1)
| Item | Cost | Status |
|---|---|---|
| Hosting | ₹0 (static PWA on Pages) | FACT |
| Monitoring/uptime | ₹0 (free tiers) | FACT |
| Support channel (WhatsApp/Telegram) | ₹0 | FACT |
| Content updates | ₹0 (agent-maintained) | FACT |
| Domain amortized | ~₹45-85/month | FACT |
| Founder's existing Base44 plan (agent credits) | Already paying — not a new cost, but honest accounting | FACT |

**Realistic total without AI usage: under ₹100/month. With live AI assistant (D-009): variable per-student API cost — model + cap to be verified before launch (AUDIT-001).**

## C-2. AI assistant runtime cost (D-009 approved — recurring)
| Item | Cost | Status |
|---|---|---|
| Live AI coach per active student | provider-dependent; free tiers possible (e.g. Gemini free tier) | VERIFY at build — cost model + hard cap number required before launch |
| Serverless proxy hosting | ₹0 (free tier, e.g. Cloudflare Workers) | VERIFY limits |
| Abuse/rate-limit overruns | controlled by caps + alerts | design requirement |

## D. Future costs IF we outgrow the static design (decision triggers, not current expenses)
1. Accounts + cloud sync for students → needs backend: free tiers first, else VPS ~₹300-800/month ESTIMATE
2. Payment webhooks/server-side verification → same backend trigger
3. Push notifications at scale → free tiers first
4. Video hosting → never (out of scope; we are the practice specialist)
5. Team (only if revenue justifies) → deferred entirely

## E. Hidden/non-cash costs (honest)
1. Verification time: the biggest real cost is MY time+credits per question batch (quality is the moat)
2. Exam-calendar risk: long gaps between notifications = revenue gaps, not expense gaps
3. Chargeback/fraud on small UPI payments: low value, low risk, but refund policy must exist

## Bottom line
Launch barrier: ₹500-1,000. Operate: under ₹100/month. The system earns money inside itself (sachet passes) with only percentage costs at the point of sale. No outside paid SaaS dependency in the launch plan.
