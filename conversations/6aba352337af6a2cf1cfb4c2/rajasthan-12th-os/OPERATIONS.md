# OPERATIONS.md — How the Machine Runs: Gathering, Verification, Updating
*2026-09-30. Founder asked: how do the agents operate, how is information gathered, how does the question bank and app stay up-to-date. This is the operating manual.*

## 1. THE BUILD-TIME PIPELINE (now)
1. One specialized agent per exam/topic (12+ running): each surveys its exam, GK area, PYQs or feature with a TWO-source rule — every load-bearing fact needs 2 independent sources, official preferred
2. Every fact gets stamped: OFFICIAL_CONFIRMED / SECONDARY_CORROBORATED / SINGLE_SOURCE / UNVERIFIED
3. Adversarial cross-verification agent (3rd pass): independently re-attacks delivered reports with its OWN sources; marks CONFIRMED / CONFLICT / UNVERIFIABLE
4. My final audit (4th pass): line-by-line before anything enters product data; UNVERIFIED never ships
5. Verified data becomes versioned JSON in the repo (questions, exam configs, hub content, GK facts) — every record carries provenance + verification status

## 2. THE UPDATE LOOP (post-launch, how the app stays current)
The app is a static PWA: updates = new data pushed to the repo + republish. Students get it on next app load (no store approval delays).

Triggers for updates:
1. New official notification drops (exam announced, pattern change, vacancy list, admit card, result, cut-off) — detected by scheduled monitoring missions I run on the exam calendar
2. New PYQ + official answer key released after each exam cycle → goes through the SAME 4-pass verification → enters the bank with year/shift provenance
3. Current affairs / Rajasthan GK: time-sensitive facts refreshed on a schedule (as-of dates enforced); old facts expire rather than mislead
4. Error reports: students report a bad question → it enters quarantine instantly, re-verified, fixed or removed in the next data release

Update mechanics:
1. Data releases are versioned (date-stamped); app shows "data updated on" honestly
2. Nothing enters a release without the verification gate — a rushed update that ships a wrong answer is worse than no update
3. Update cadence: hot fixes (error reports) within a cycle; scheduled refresh aligned to the exam calendar

## 3. WHO DOES WHAT (roles)
1. Monitoring/scheduled workflows: watch official portals + exam calendar, wake the agents
2. Research agents: gather (2-source rule)
3. Cross-verification agent: attack the research
4. Me (coordinator): final audit, data releases, repo pushes (after founder token), QA gates
5. Founder: token, brand, launch decisions — zero manual labor otherwise

## 4. HONEST LIMITS
1. I cannot subscribe to paid notification services; official portals are checked via public access
2. Frequency of monitoring is bounded by plan credits — priority goes to exam-calendar critical windows
3. Between data releases the app runs on the last verified snapshot — offline-first means the student always has SOMETHING, even if it's one release old

## Coach proxy deploy (OWNER, one-time ~2 min; agent cannot deploy Cloudflare)

Worker is production-ready: `serverless/ai-coach-worker.js` (hardened + 14 unit tests pass: `node serverless/worker.test.mjs`), config `serverless/wrangler.toml`.

1. `cd serverless && wrangler login`
2. `wrangler kv namespace create COACH_KV` → paste the printed id into wrangler.toml (uncomment the `[[kv_namespaces]]` block)
3. `wrangler secret put GEMINI_API_KEY` (Google AI Studio key)
4. `wrangler deploy` → note the workers.dev URL
5. Tell the agent the URL → agent sets `VITE_COACH_URL` in `app/.env.production`, rebuilds, redeploys gh-pages. Until then the Coach panel shows the honest setup state (paste URL or hidden) — never fake replies.

Security model: LLM key lives ONLY in Worker secrets. Per-IP daily cap (KV, 15/day default) enforced BEFORE upstream call — a capped request cannot burn tokens. History bounded to last 8 messages, inputs sliced, 20s upstream timeout. Foreign origins 403.
