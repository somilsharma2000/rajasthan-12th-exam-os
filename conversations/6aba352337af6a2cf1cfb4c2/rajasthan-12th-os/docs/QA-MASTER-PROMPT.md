# MASTER OPERATING PROTOCOL — rajasthan-12th-exam-os (v3, 2026-10-01)

Not one instruction blob: a modular protocol. Run ONE specialist pass at a time, per this doc's
applicability status. Never regenerate the site to run a pass. Full standard history at bottom.

**Every pass:** INSPECT → REPORT → PRIORITIZE (P0 critical security/data-loss → P4 experimental; never P4 while P0/P1 open) → MODIFY (smallest robust diff) → TEST (`npm run release`) → RECHECK (regression over full journey, HI + EN) → SECOND DISCOVERY PASS (hunt what this pass missed). Update CHECKLIST.md + PROJECT_STATUS.md + DECISIONS.md (decision log prevents future agents from "fixing" deliberate design).

## Module map (invoke by number)

| # | Module | Applicability (2026-10-01) |
|---|---|---|
| 00 | DISCOVERY — inspect + map before touching (see docs/ARCHITECTURE.md dependency map) | ACTIVE, mandatory first |
| 01 | PRODUCT — objectives, personas, journeys, feature purpose (WHY/WHO/WHAT/NEVER/IF FAILS/IF REPEATED/IF CONCURRENT) | ACTIVE |
| 02 | UX — journeys, friction, dead ends, psychology to clarify not trick | ACTIVE |
| 03 | VISUAL — "I don't like it" pass; de-genericize; honest critique | ACTIVE |
| 04 | BRAND — logo→geometry→tokens→components coherence | ACTIVE (token discipline) |
| 05 | MOTION — purpose tiers, reduced-motion | ACTIVE (audited 2026-10-01) |
| 06 | FRONTEND — components, states (default/hover/focus/active/loading/success/error/disabled/empty) | ACTIVE |
| 07 | BACKEND | N/A — static PWA, no backend (becomes ACTIVE at commercialization: coach proxy hardening, payments) |
| 08 | SECURITY — OWASP 2025 basis: broken access control, misconfig, supply chain, insecure design, exceptional-condition handling, resilience; ASVS for depth; never trust frontend-only restrictions | ACTIVE (client surface); secrets scan clean 2026-10-01 |
| 09 | DATA — state-machine audit (State A→Action→State B; impossible/stale/contradictory states), idempotency ("can this action safely happen twice?"), data lifecycle (create→use→modify→archive→delete→recover) | ACTIVE (resume guards + clear-all-data shipped 2026-10-01) |
| 10 | ADMIN/OPS | N/A — no admin, no roles (re-evaluate at launch) |
| 11 | ANALYTICS — product ≠ website ≠ business analytics | EVALUATE at launch; never fake events; local-first option: examos-history IS the user's product analytics |
| 12 | SEO | ACTIVE (head, JSON-LD, robots.txt shipped; monitor: no accidental noindex, chunk-hash live-verify after deploys) |
| 13 | GEO / AI discoverability — entity clarity, machine-readable structure, no keyword stuffing | ACTIVE (WebApplication JSON-LD shipped) |
| 14 | INTEGRATIONS | ACTIVE only: user-supplied coach proxy (https-validated, daily cap, bilingual error handling). Worker-side cap enforcement = launch gate |
| 15 | WEBHOOKS | N/A |
| 16 | PERFORMANCE — initial JS, lazy chunks, layout shifts | ACTIVE (201K main + lazy bank) |
| 17 | ACCESSIBILITY — WCAG 2.2: keyboard, focus traps, aria, contrast, zoom, reduced motion, target size | ACTIVE |
| 18 | PRIVACY — what/why/where/retention/deletion/export; flag for legal review, never invent compliance | ACTIVE: no tracking, no cookies, no third-party scripts; all data local + user-deletable in-app |
| 19 | ABUSE/MISUSE — how could a legit feature be abused; bots, scraping, resource exhaustion | EVALUATE: client-cap is bypassable (honest UI says so); launch gate = server-side caps |
| 20 | TESTING — hierarchy: unit (qa/engine.test.mjs) → build → E2E smoke (qa/smoke.mjs, 9 checks) → manual (visual feel, both languages) | ACTIVE — `npm run release` is the gate |
| 21 | DEPENDENCIES/COST — supply chain, outdated/vulnerable/abandoned pkgs, license, AI/token efficiency (reuse components, don't regenerate working code, small diffs) | ACTIVE (npm audit 0 vulns; 2 runtime deps; token efficiency = standing rule) |
| 22 | DOCUMENTATION — this file + ARCHITECTURE.md + living files | ACTIVE |
| 23 | RELEASE — pre-deploy checks (release gate), rsync --delete, live chunk-hash verify, rollback = previous gh-pages commit | ACTIVE |
| 24 | REGRESSION — full journey recheck + second discovery | ACTIVE, mandatory |
| 25 | CONTINUOUS IMPROVEMENT — next highest-value list, second-order effects ("what else could this change affect?") | ACTIVE |

## Known-fixed baseline (do not regress)

- Resume state machine validated: unknown exam / expired timer / empty ids → silently cleaned, never crash
- Submit idempotent: 10x spam = exactly 1 history record (key-dedupe)
- Browser Back = intercepted; during answered session = confirm modal
- Focus traps: leave-modal, palette, coach; ESC everywhere; toast role=status aria-live=polite; gauge aria-label
- Contrast --tx3 ≥4.5:1; pinch zoom allowed; iconBtn 44px
- Tokens only: no hardcoded hex outside :root (lint: grep src/ *.jsx)
- SVG icon system (no emoji glyphs); palette/dock selectors use aria-label (smoke tests depend on it)
- index.html is gitignored — verify head after snapshot restores (restore via git blob)
- Release gate: npm run release; deploy: rsync --delete; live chunk-hash verify

## History

- v1 (2026-10-01 morning): 41-point / 10-pass checklist, INSPECT→…→RECHECK workflow.
- v2 (2026-10-01): 22-role team, OWASP 2025 + WCAG 2.2 basis, A–X report, second discovery pass.
- v3 (2026-10-01): this — modular 00–25 protocol with per-module applicability, state-machine + idempotency + testing hierarchy + data lifecycle institutionalized; dependency map in docs/ARCHITECTURE.md.
