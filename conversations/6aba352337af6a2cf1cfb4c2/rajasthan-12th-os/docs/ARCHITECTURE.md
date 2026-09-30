# ARCHITECTURE + DEPENDENCY MAP — rajasthan-12th-exam-os

Static single-page PWA. No backend, no auth, no admin. All user data lives in browser localStorage; the only optional server is the user-supplied AI-coach proxy (serverless/ai-coach-worker.js). Question bank is a build-time lazy chunk.

## Screen → component → state → storage dependency map

```
home ──── <App> screen state ──── resumable ← examos-active-mock (validated: exam exists, ids exist, timer not expired)
  ├→ hub (exam) ── <PatternCard> ── BANK_META (static, in main bundle)
  ├→ setup ──── <SetupScreen> startSession()/resumeMock() ── bank chunk (lazy: ensureBank()) → session state
  ├→ player ─── <Player> session, idx, answers, bms, coachCtx, showPal, confirmExit
  │              examos-active-mock (mock only, 1s interval; answers saved on change)
  │              examos-bookmarks (toggleBookmark)
  │              ← popstate sentinel + 'examos-back' event (Back = confirm, never silent exit)
  │              ← window 'error' handler → toast + examos-errlog (observability)
  ├→ result ─── <Result> session → scoreSession(engine) → recordAttempt()
  │              examos-history (dedupe by key; idempotent against finish spam)
  │              examos-error-book (wrong Qs → 1/3/7/15/30-day revision ladder)
  ├→ progress ─ <Progress> history + errorbook aggregation → stats
  │              DATA LIFECYCLE: "clear all data" (confirm modal) wipes history/bookmarks/error-book/active-mock/typing/coach-usage/errlog; preserves lang + coach endpoint (config, not data)
  ├→ saved ──── <Saved> bookmarks ∩ bank
  ├→ errorbook ─ <ErrorBook> examos-error-book + revision due-dates
  ├→ glossary ─ static glossary chunk
  └→ typing ── <TypingTest> phase machine (select→test→done), examos-typing-history (last 30)
```

## If I change X, what breaks?

- `engine.js scoreSession()` → Result screen, history records, error book entries, Progress aggregates. Unit-tested (qa/engine.test.mjs) — run `npm test` after ANY engine change.
- `LS_KEY` shapes (`examos-*`) → resume flow, wipe list in Progress, smoke test ghost-state check. Changing a key = migration or silent orphan (orphans are harmless: JSON.parse guarded).
- `.dock` / `.pal` DOM → qa/smoke.mjs selectors. Run `npm run qa` after player UI changes.
- `:root` tokens → every screen. Token rule: colors only via :root vars; `--danger`, `--violet-bg` are the only sanctioned semantic additions (2026-10-01 audit).
- `index.html` → gitignored! After any workspace snapshot restore, verify it still contains viewport-fit + SEO head + JSON-LD (restore via git blob if wiped).
- EXAMS pattern config (`negative.wrong`, `fifthOptionRule`) → both engine scoring and player E-button render. Same source, no duplication.

## Storage contract (all reads JSON.parse-guarded, all writes try/catch-guarded)

| key | writer | reader | wipe-on-clear |
|---|---|---|---|
| examos-active-mock | Player (mock, 1s) | home resume (validated) | yes |
| examos-history | recordAttempt (Result) | Progress, Result | yes |
| examos-bookmarks | toggleBookmark | Saved, Player, hub counts | yes |
| examos-error-book | updateErrorBook (Result) | ErrorBook, Progress, home due badge | yes |
| examos-typing-history | TypingTest finish | TypingTest stats | yes |
| examos-coach-usage | Coach send | Coach cap | yes |
| examos-errlog | global error handler | debugging only | yes |
| rjx-lang | toggleLang | App boot | no (preference) |
| examos-coach-endpoint | Coach save | Coach fetch | no (config) |

## Release gate (never ship without)

`npm run release` = `npm test` (engine unit) → `npm run build` → `npm run qa` (browser smoke, 9 checks). Deploy = rsync dist → gh-pages WITH `--delete` (stale hashed chunks accumulate otherwise). Live-verify: chunk hash in served index.html matches dist.
