# Payments & Monetization Plan — Design + Implementation Path

**Date:** 2026-10-01
**Status:** DESIGN_APPROVED / NOT BUILT (blocked on payment account, not on code)

## Product decision (founder-set)

- Price: **₹99 per subscription** (target; final call at launch).
- Model: one-time/period access subscription for the full OS. No ads, no fake paywalls.

## Architecture constraint

The app is a static build on GitHub Pages. Payments need three server-side pieces
that a static host cannot provide: secret-key custody, order/verify APIs, and
webhook handling. Same pattern as the AI coach: a Cloudflare Worker holds the
secrets; the client only talks to the Worker.

```
Student -> App (GitHub Pages)
         ├─ POST /create-order   -> Worker (Razorpay key_id only)
         ├─ Razorpay Checkout (UPI/card) -> success
         └─ POST /verify-payment -> Worker: signature check (secret),
            license issue (KV: license key -> device/user, TTL),
            -> app unlocks PRO features locally (localStorage license token,
            HMAC-signed by Worker so it can't be forged client-side)
```

## Why Razorpay (decision rationale)

- India-first: UPI (dominant for this audience), cards, netbanking, wallets in one checkout.
- Simple order->payment->signature-verification flow; webhooks for settlement.
- Test-mode API keys allow full end-to-end verification before go-live.
- Stripe remains an alternative if founder prefers; flow is identical.

## Cost control / abuse guards

- Razorpay has no fixed monthly for UPI-only flows at this volume (per-transaction fee ~2%).
- Worker: rate-limit order creation per IP (e.g. 5/hour), KV-stored.
- License: single active device, re-issuable; refund revokes license.
- No PII stored beyond Razorpay's own records — the Worker keeps only payment IDs and license keys.

## What PRO unlocks (honest scope)

Everything already in the repo works free until launch. At launch the paywall
gates: full mock-test history/analytics beyond N sessions, AI Coach (has its own
cap), and future premium waves. Exact split is a launch-day founder decision —
recorded here so nobody invents it silently.

## Build sequence when unblocked

1. Founder creates Razorpay account, provides test keys as Worker secrets.
2. `serverless/payments-worker.js` (order, verify, webhook, license HMAC) — ~1 day build + adversarial tests (forged signature, replayed order, tampered amount, webhook spoofing).
3. App: Pricing screen (₹99), checkout open, license check.
4. End-to-end test on test-mode keys; then go-live.

## Blockers (not code)

- Razorpay account + keys (founder action, 10 minutes).
- Worker deploy (wrangler, founder account).
- Final pricing/launch-date confirmation.
