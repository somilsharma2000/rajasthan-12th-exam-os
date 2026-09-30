# MASTER QA / UI-UX ENGINEER PROMPT — rajasthan-12th-exam-os

> Paste-use standard for every UI task on this project. Not a random redesign tool.
> Workflow is always: **INSPECT → REPORT → PRIORITIZE → MODIFY → TEST → RECHECK.**
> Never bulk-redesign. Preserve what works. Change only what the audit proves broken.

## Operating rules (hard)

1. **INSPECT first**: run real-browser QA (puppeteer script pattern in this repo) before touching code. Read the actual component code before editing it.
2. **REPORT**: list findings with evidence (screenshot/computed style/test output), severity, and file:line.
3. **PRIORITIZE**: a11y violations > functional bugs > visual polish > nice-to-have. Fix top-down, batch by file.
4. **MODIFY**: smallest diff that fixes the finding. No drive-by refactors. No new dependencies.
5. **TEST**: rebuild + re-run the exact check that failed. Both languages (HI default, EN toggle). Both a11y modes where relevant.
6. **RECHECK**: verify nothing else broke — quick pass over home → hub → setup → player → result + typing/glossary/progress.
7. Never report "done" without the recheck. Update CHECKLIST.md + PROJECT_STATUS.md after the wave.

## Product-specific audit baseline (verified 2026-10-01)

- **App shape**: single-page PWA, no auth, no backend, all data local (localStorage) except optional AI-Coach proxy. Static bank chunks lazy-loaded via `ensureBank()`.
- **Security model**: no secrets in bundle (verified), no dangerouslySetInnerHTML, coach key lives in the serverless worker (serverless/ai-coach-worker.js), never client-side.
- **Design system**: tokens in `src/styles.css` :root (dark SaaS). Motion layer: ≤400ms, GPU-friendly (transform/opacity), `prefers-reduced-motion` respected.
- **Dual data language**: every user-facing string ships hi+en. QA both.
- **Exam-accuracy rule**: UI changes must never weaken provenance display (Source: + evidence level on every explanation).

## The 10 passes (run in this order, skip N/A honestly)

1. PRODUCT — journey, CTA, dead ends, duplicate sections
2. UI — typography, color tokens, spacing, component consistency
3. UX — every clickable: feedback, double-click safety, state on failure
4. MOTION — purpose, timing tiers, no decorative-only animation
5. RESPONSIVE — 320/375/390/430/768/820/1024/1280/1440/1920, overflow + tap targets
6. ACCESSIBILITY — keyboard-only, focus trap in overlays, aria-live, contrast ≥4.5, zoom allowed, reduced motion
7. PERFORMANCE — initial JS, lazy chunks, no constant layout animation
8. SECURITY — secrets, XSS, client-side-only restrictions (N/A for this app's scope; verify anyway)
9. QA — multi-click, empty/error states, offline SW, refresh, back button
10. POLISH — alignment, stray pixels, legacy variable names, dead code

## Known-fixed baseline (do not regress)

- Contrast: `--tx3` ≥4.5:1 on card and bg (lightened 2026-10-01)
- Viewport allows pinch zoom (no user-scalable=no)
- Overlays (leave-confirm, palette, coach): ESC closes + focus trapped
- Toast: role="status" aria-live="polite"; gauge: aria-label
- Browser Back intercepted via history sentinel; Back during answered session → confirm modal
- Manifest bg matches dark canvas; head has description + OG + favicon
- History dedupe by key (`pushHist`), coach daily cap, typing module honest about mobile limits

## Browser QA recipe (from repo memory)

Headless google-chrome + puppeteer-core (`npm i puppeteer-core --no-save`), `setCacheEnabled(false)`, unregister service workers first (sw.js serves stale JS from localhost previews). Click helpers must match BOTH languages (e.g. `Stenographer|स्टेनोग्राफर`). Default language is HI — QA scripts that assume EN must toggle first.
