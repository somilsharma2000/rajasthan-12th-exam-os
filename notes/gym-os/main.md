---
title: Gym OS
summary: Living overview of Somil’s gym-management software, its reported v3 releases,
  feature set, commercial model, and recent build and deployment problems.
---

# Gym OS

Gym OS is Somil’s gym-management software work under the [Beyond Pixels](../beyond-pixels/main.md) business context. The product is positioned as a joined-up system for gym websites, owner operations, member self-service, lead handling, and revenue visibility rather than as a standalone brochure site. A related stream of [client website previews](../beyond-pixels/client-websites.md) demonstrated similar gym-specific concepts, but previews and sample data are not evidence of production customers or results.

## Current state

A Somil-authored August 29, 2026 launch update reported Gym OS v3.0.0 live, with the frontend on GitHub Pages and backend functions managed by Base44. That update described a broad feature release and listed the frontend repository as `somilsharma2000/gym-os-frontend`. Later, GitHub notifications on September 26–28 report repeated failures in CI for a separate `somilsharma2000/gym-os-v3` repository; a Vercel notification also reported a failed production deployment on September 28. The evidence does not include the failure annotations or establish the root cause, so the v3.0.0 launch report and the later v3 build/deployment problems should be tracked as separate points in the project history, not assumed to describe one identical deployment.

## Product scope and reported v3.0.0 features

The August release update listed modules for social-media content planning and engagement analytics; follow-up tracking with priority and due dates; lead-source, conversion, and revenue analytics; trainer task assignment, QR attendance, and performance tracking; and a context-aware assistant. The launch update also described bulk member upload, member contact actions, trainer milestone notifications, revenue and expense views, and a demo mode using sample data.

The same update reported fixes to a JWT token-format mismatch that had caused 403 errors, a workaround for an SDK filtering limitation, removal of a demo-mode link in favor of a sample-gym experience, and service-worker/cache changes intended to address stale pages. A separate August 8 report for the [Bloomwire project](../bloomwire/main.md) describes another backend-sync fix; that is not evidence of a Gym OS change.

## Engineering and deployment record

- **August 29, 2026:** Somil’s release email described v3.0.0 as live on GitHub Pages with Base44-managed backend functions and named `gym-os-frontend` as the repository.
- **September 26–28, 2026:** Automated GitHub notices repeatedly reported failed CI runs for `gym-os-v3`; a Vercel notice reported a failed production deployment on September 28. Root cause and current resolution are not present in the supplied evidence.
- **Operational caution:** Treat third-party preview or sample records as demo content unless verified against real gym data. The available status emails report deployment outcomes, not independent validation of all modules in production.

## Commercial context

A sales-partner package described a Gym OS bundle for clients that could include a custom website, dashboard, QR check-in, CRM, and lead tracking. It also specified partner onboarding, lead registration, daily reporting, and commission terms; see the [Beyond Pixels overview](../beyond-pixels/main.md). These materials describe the offer and process, not confirmed sales, partner performance, or client adoption.
