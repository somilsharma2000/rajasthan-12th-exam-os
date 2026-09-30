# End-to-End User Journey & Business Logic Audit Report

**Product:** Rajasthan 12th Level Exam OS (React PWA)  
**Target Path:** `/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/app`  
**Date:** September 30, 2026  
**Auditor:** Logic & Workflow Department  
**Deliverable File:** `rajasthan-12th-os/WORKFLOW-AUDIT.md`  

---

## Executive Summary & Journey Verdicts

| # | Journey / Domain | Verdict | Primary Issue / Risk |
|---|---|---|---|
| 1 | First-Run & Exam Hub Discovery | **FIX** | Language choice lost on refresh; Exam Hub links bounce users before practice. |
| 2 | Practice Mode & Selection Logic | **REBUILD** | Static `slice(0, 10)` serves exact same 10 Qs every time; 900+ Qs unreachable; no topic selection. |
| 3 | Mock Exam Engine & Scoring | **FIX** | Agriculture Supervisor pattern wrong; timer auto-submits on tab/app reopen; Option-E state bug. |
| 4 | Error Book & Revision Loop | **REBUILD** | Claimed 1/3/7/15/30-day adaptive revision engine is **100% missing** from codebase. |
| 5 | Exam DNA & Analytics | **FIX** | Analytics run on single active session; practice sessions not recorded; no topic-level weak spot tracking. |
| 6 | Data Pipeline & Bank Reachability | **REBUILD** | Bank contains 916 valid Qs, but missing array shuffling leaves >85% of bank unserved in UI. |
| 7 | Offline & PWA Infrastructure | **FIX** | SW missing precache manifest; first-run offline without prior fetch breaks shell loading. |
| Bank | Current Question Bank Audit | **FIX** | 916 records confirmed; 13 clean subject keys; 141 CET 2024 PYQs missing `topic`; near-duplicate topic keys. |

---

## Detailed Journey Audits & Findings

### Journey 1: First-Run → Language Choice → Exam Hub Discovery

#### 1. Tap Count Trace
* **Path:** `Home` screen → Select Exam Card (Tap 1) → `Exam Hub` screen (`screen === 'hub'`), click "Start" (Tap 2) → `Setup` screen (`screen === 'setup'`), click "Practice" / "मिश्रित अभ्यास" (Tap 3) → `Player` screen (`screen === 'player'`).
* **Tap Count:** Exactly **3 taps** to reach a practice session.
* **Verdict:** **PASS on tap count target (<= 3 taps)**, but **FIX required on UX & state persistence**.

#### 2. Bounce Locations & Friction Points
* **Bounce Point 1 — Language State Loss (High Severity):**
  * *Evidence:* `App.jsx` line 21: `const [lang, setLang] = useState('hi')`.
  * *Finding:* Language selection is held strictly in ephemeral React component state. It is not saved to `localStorage`. If an English-medium student toggles to `'en'` and refreshes or reopens the PWA, it resets to Hindi default (`'hi'`).
* **Bounce Point 2 — Exam Hub Friction & External Drop-off (Medium Severity):**
  * *Evidence:* `App.jsx` line 67-80 (`screen === 'hub'`).
  * *Finding:* When a user taps an exam from Home, they land on `Hub` (showing Qualification, Process, Pay, and external Official Portal link) rather than entering practice setup directly. The CTA "Start" (`t.start`) is rendered below external links (`<a href={hub.official} target="_blank">`), allowing users to bounce to an external browser tab before starting practice.
* **Bounce Point 3 — Redundant intermediate screens (Low Severity):**
  * *Finding:* Having both `Hub` and `Setup` as separate full screens creates unnecessary navigation depth between selecting an exam and answering questions.

#### 3. Code Evidence & Proposed Fixes
```javascript
// App.jsx proposed fix: Persist language selection
const [lang, setLang] = useState(() => localStorage.getItem('examos-lang') || 'hi')
const toggleLang = () => setLang(l => {
  const next = l === 'hi' ? 'en' : 'hi'
  localStorage.setItem('examos-lang', next)
  return next
})
```

---

### Journey 2: Practice Mode: Question Selection, Feedback & Error Capture

#### 1. Question Selection Logic Tracing
* **Per-Subject / Per-Topic Selection:**
  * *Evidence:* `App.jsx` line 44: `const startSession = (mode, subject) => { ... }` and `engine.js` line 16: `export function availableQuestions(bank, exam) { ... }`.
  * *Finding:* Question selection supports subject filtering (`startSession('practice', subject)`), but **ZERO topic-level selection logic exists**. Students cannot choose specific topics (e.g. "Percentages" or "1857 Revolution").
* **Static Array Slicing Bug (Critical Severity):**
  * *Evidence:* `engine.js` lines 25-27:
    ```javascript
    const pool = availableQuestions(bank, exam)
    const target = count || exam.pattern.totalQuestions
    const questions = pool.slice(0, Math.min(target, pool.length))
    ```
  * *Finding:* `pool` is ordered statically based on `[...SEED, ...MODULES]`. `pool.slice(0, 10)` takes the **exact same first 10 questions** every single time practice is started. There is no array shuffling (`Math.random()`), no rotation, and no repetition tracking.

#### 2. Verified & Real-PYQ Filters
* *Evidence:* `App.jsx` line 42: `const ex_ok = q => q.verification !== 'UNVERIFIED' && !(q.provenance && q.provenance.evidence && String(q.provenance.evidence).includes('QUARANTINED'))`.
* *Finding:* Verification filtering works for suppressing `UNVERIFIED` and `QUARANTINED` items. However, **there is no UI toggle or filter for Real PYQs (`origin === 'real_pyq'`) vs AI-authored questions (`origin === 'agent_authored')**. Students cannot practice PYQs exclusively.

#### 3. TypeError Crash Risk in `engine.js`
* *Evidence:* `engine.js` line 18: `!q.provenance.evidence.includes('QUARANTINED')`.
* *Finding:* If any question object in the bank lacks `provenance` or `provenance.evidence`, `availableQuestions` will throw a runtime `TypeError` (`Cannot read properties of undefined`). `App.jsx` guards this with `String(q.provenance?.evidence)`, but `engine.js` lacks safety checks.

#### 4. Error Book Capture Tracing
* *Evidence:* `App.jsx` lines 136-139:
  ```javascript
  const wrongQs = session.questions.filter(q => {
    const a = session.answers[q.id]
    return a && a.choice !== null && a.choice !== undefined && a.choice !== q.answer
  })
  ```
* *Findings:*
  1. Wrong questions are displayed **only on the Result screen of that active session**. They are never saved to `localStorage` or persistent storage. Tapping "Go Home" or "Retry" permanently wipes all wrong answer records.
  2. **Unattempted / skipped questions are completely omitted** from the error summary because `a.choice !== null` filters them out.
  3. Every wrong/skipped answer is **NOT captured consistently**.

#### 5. Code Evidence & Proposed Fixes
```javascript
// engine.js proposed fix: Safe filtering & Fisher-Yates random sampling
export function availableQuestions(bank, exam) {
  return bank.filter(q => 
    q && q.verification !== 'UNVERIFIED' &&
    !(q.provenance?.evidence && String(q.provenance.evidence).includes('QUARANTINED')) &&
    exam.subjects.includes(q.subject)
  )
}

export function buildSession(exam, bank, mode, lang, count, subject) {
  let pool = availableQuestions(bank, exam)
  if (subject) pool = pool.filter(q => q.subject === subject)
  
  // Fisher-Yates shuffle to ensure whole bank reachability
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  const target = count || exam.pattern.totalQuestions
  const questions = shuffled.slice(0, Math.min(target, shuffled.length))
  ...
}
```

---

### Journey 3: Mock Exam Engine: Timers, Marking & Exam Configs

#### 1. Timer Accuracy (Pause/Resume, Tab-Switch)
* *Evidence:* `App.jsx` lines 86-98:
  ```javascript
  const endAt = session.startedAt + (session.durationMin || session.config.pattern.durationMin) * 60000
  useEffect(() => {
    if (session.mode !== 'mock') return
    const iv = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(iv)
  }, [session.mode])
  useEffect(() => {
    if (session.mode === 'mock' && Date.now() >= endAt) finish()
  })
  ```
* *Findings:*
  1. **No Pause/Resume Control:** The timer runs continuously relative to `startedAt`.
  2. **Tab-Switch & App Reopen Auto-Submit Bug (High Severity):** If a student switches tabs or locks their phone screen for 2 hours, `Date.now() >= endAt` evaluates to `true` immediately upon returning, automatically submitting the exam.
  3. **Resumed Mock Auto-Submit Bug (High Severity):** Tapping "Resume" on a saved unfinished mock (`resumeMock`) restores original `startedAt`. If more than `durationMin` has elapsed since starting, the test auto-submits instantly on mount without allowing the student to complete it.

#### 2. Exam Config Verification (`src/data/exams.js`) vs Official Evidence

| Exam ID | Parameter | Config in `exams.js` | Official Verified Scheme | Status |
|---|---|---|---|---|
| `cet-12th` | Qs / Marks / Time / Negative | 150 Qs / 300 M / 180 min / -1/3 + Option-E | 150 Qs / 300 M / 180 min / -1/3 + Option-E | **VERIFIED PASS** |
| `police-constable` | Qs / Marks / Time / Negative | 150 Qs / 150 M / 120 min / -1/4 | 150 Qs / 150 M / 120 min / -1/4 | **VERIFIED PASS** |
| `agriculture-supervisor` | Qs / Marks / Time / Negative | 150 Qs / 300 M (2/Q) / 150 min / -1 mark | **100 Qs / 300 M (3/Q) / 120 min / -1 mark** | **CRITICAL DISCREPANCY** |
| `agriculture-supervisor` | Subjects | `agriculture`, `raj-gk`, `india-gk`, `maths`, `science`, `hindi` | **`agriculture`, `raj-gk`, `hindi` only** | **CRITICAL DISCREPANCY** |
| `ldc-junior-assistant` | Qs / Marks | 100 Qs / 200 M / `PENDING_FINAL_LOCK` | Phase-I: 2 Papers × 150 Qs = 300 Qs / 200 M | **PASS (Flagged via Badge)** |

#### 3. Unanswered Question Scoring & Option-E State Bug
* *Evidence:* `engine.js` lines 47-54 (`scoreSession`):
  ```javascript
  if (fifthOptionRule && fifthOptionRule.enabled) {
    if (a && a.markedE) { /* safe */ }
    else { blankWithoutE++; score -= marksPerQuestion / 3 }
  }
  ```
* *Finding on Scoring Logic:* Math in `scoreSession` correctly handles negative fractions (`1/3`, `1/4`, `1-mark-per-wrong`, `none`) and calculates Option-E penalties and disqualification threshold (`>10% blank without E`).
* *Finding on UI State Bug in `Player.jsx`:* In `Player.jsx`, `setAnswer` preserves `markedE` when selecting options A-D. If a student taps Option E (`markE()`) and later taps Option B (`setAnswer(1)`), the state retains `{ choice: 1, markedE: true }`. While `scoreSession` evaluates `choice !== null` first, state pollution occurs in local storage.

---

### Journey 4: Error Book → Adaptive Revision Loop

#### 1. Code Audit for Adaptive Revision Engine
* **Claimed Feature:** "Adaptive revision (1/3/7/15/30-day) logic in `engine.js` schedules and resurfaces items correctly."
* **Code Search Execution:** Searched `engine.js`, `App.jsx`, and all data files for spaced repetition functions, interval calculators, or schedule queues.
* **Finding:** **THE CLAIMED REVISION ENGINE IS 100% MISSING FROM THE CODEBASE.**
* `engine.js` contains only 5 basic utility/session functions:
  1. `SUBJECT_LABELS`
  2. `availableQuestions`
  3. `buildSession`
  4. `scoreSession`
  5. `fmtTime`
* There are zero functions for spaced repetition intervals (1, 3, 7, 15, 30 days), zero review timestamps, zero mastery levels, and zero scheduling queues.
* **Verdict:** **REBUILD**.

---

### Journey 5: Exam DNA & Analytics

#### 1. Analytics Inputs & Scope
* *Result Screen Exam DNA:* Calculates per-subject accuracy using only `session.questions` and `session.answers` for the single session just completed.
* *Progress Screen:* Reads `loadHist()` (`examos-history` in `localStorage`), which stores summary records for completed Mock tests (up to 50 records).

#### 2. Mathematical Soundness & Division by Zero Checks
* *Result Screen:* `{st.total ? Math.round(st.correct / st.total * 100) : 0}%` — **Guarded against division by zero**.
* *Progress Screen:* `const avgAcc = mocks ? Math.round(hist.reduce(...) / mocks) : 0` — **Guarded against division by zero**.
* *`scoreSession`:* `blankWithoutE / Math.max(total, 1)` and `attempted ? Math.round(...) : 0` — **Guarded against division by zero**.

#### 3. Core Analytics Flaws
1. **Practice Sessions Not Recorded:** Tapping "Practice" and completing 100 questions records **zero data** to `examos-history`. The Progress screen and Exam DNA show 0 progress unless Mock tests are submitted.
2. **No Subject / Topic Breakdown in History:** `pushHist` records only `{ key, examId, examName, date, score, max, accuracy, correct, wrong, total }`. It does not store per-subject or per-topic performance, making historical weak-spot tracking impossible.

---

### Journey 6: Data Pipeline & Question Reachability

#### 1. Manifest Architecture
* *Evidence:* `scripts/gen-bank-manifest.mjs`, `src/data/bank/manifest.js`, `src/data/bank/index.js`.
* *Audit Result:* `gen-bank-manifest.mjs` scans `src/data/bank/*.js` and exports all 16 module files into `manifest.js`. `index.js` concatenates seed questions (`questions.js`) with all 16 modules.
* *Total Loaded:* **916 questions loaded successfully**. Zero import or syntax errors.

#### 2. Reachability Analysis (Critical Flaw)
* While all 916 questions exist in `ALL_QUESTIONS`, **they are NOT all reachable in the user interface**:
  * Practice mode requests 10 questions. `buildSession` calls `pool.slice(0, 10)` on an unshuffled static array.
  * Subject practice for Mathematics takes `pool.slice(0, 10)` out of 146 math questions. Questions #11 through #146 in Mathematics can **NEVER be reached or answered by any user**.
  * Mock mode for CET 12th takes `pool.slice(0, 150)` out of 831 available CET questions. Questions #151 through #831 are **permanently unreachable**.
* **Verdict:** **REBUILD required in session builder (`engine.js`).**

---

### Journey 7: Offline / PWA Infrastructure

#### 1. Self-Containment Audit
* All application code, question bank modules, exam configurations, icons, and styling are bundled into client-side JS (`dist/assets/*.js`).
* No external REST APIs, backend databases, or external media dependencies are required for quiz playback.

#### 2. Service Worker (`public/sw.js`) Vulnerabilities
* *Runtime Caching Only:* `sw.js` `install` listener executes `self.skipWaiting()` without precaching shell assets (`index.html`, `main.jsx`, `styles.css`).
* *First-Run Offline Risk:* If a user installs the PWA and immediately loses connectivity before navigating through the app, uncached bundle files will fail to load.
* *Cache Key Mismatch:* The fallback `caches.match('./index.html')` in `sw.js` can return `undefined` if the root URL key was cached as `/rajasthan-12th-os/app/` rather than `./index.html`.

---

## Current Question Bank Verification (916 Questions Claimed)

### 1. Quantitative Record Audit
* **Claimed:** 916 Questions
* **Actual Records Counted:** **916 Questions** (Verified via Node script execution).
* **Breakdown across 17 source files:**
  * `questions.js` (Seed): 10
  * `pyq-cet-2024.js`: 141 (Real PYQs)
  * `raj-gk-depth.js`: 80 | `raj-gk-history.js`: 70 | `raj-gk-geo.js`: 60 | `raj-gk-polity.js`: 50
  * `maths.js`: 70 | `maths-depth.js`: 60
  * `reasoning.js`: 60 | `reasoning-depth.js`: 50
  * `science.js`: 50 | `india-gk.js`: 50 | `lang-computer.js`: 50
  * `current-affairs.js`: 30 | `agriculture.js`: 30 | `reet-pedagogy.js`: 30
  * `library-science.js`: 25

### 2. Subject Key Consistency Audit
* **Result:** **PASS**. All 13 subjects use uniform kebab-case string identifiers across all 916 records.
* **Subject Keys & Counts:**
  `raj-gk` (289), `maths` (146), `reasoning` (119), `india-gk` (70), `science` (72), `hindi` (40), `current-affairs` (39), `english` (31), `agriculture` (30), `computer` (25), `library-science` (25), `child-pedagogy` (20), `environment-science` (10).
* **Earlier Bug Verification:** No English/Hindi key duplications (such as `'Mathematics'` vs `'गणित'`) exist in the `subject` field.

### 3. Topic Key Inconsistencies & Schema Deficits
1. **Missing Topics (141 Questions):**
   * All 141 questions in `pyq-cet-2024.js` (`cet24-001` through `cet24-141`) have `topic: undefined`.
2. **Near-Duplicate / Synonymous Topic Strings:**
   * `'1857 का संग्राम'` vs `'1857 की क्रांति'`
   * `'calendar-and-clock'` vs `'calendar-clock'`
   * `'mirror-image'` vs `'mirror-images'`
   * `'syllogism'` vs `'syllogisms'`
   * `'Assessment & Diagnostic Testing'` vs `'Assessment & Evaluation'`
   * `'Inclusive Education'` vs `'Inclusive Education & Dysgraphia'`
3. **Bilingual Mixed Strings:**
   * Topic keys inconsistently mix English (`'Active & Passive Voice'`, `'HCF and LCM'`) and Hindi (`'अनुपात एवं समानुपात'`) without a structured `{hi, en}` translation object.

---

## Deliverable Summary & Top 3 Most Urgent Fixes

### Journeys Audited & Overall Verdicts
1. **First-Run → Language Choice → Exam Hub:** **FIX**
2. **Practice Mode & Question Selection:** **REBUILD**
3. **Mock Exam Engine & Scoring:** **FIX**
4. **Error Book → Adaptive Revision Loop:** **REBUILD**
5. **Exam DNA & Analytics:** **FIX**
6. **Data Pipeline & Bank Reachability:** **REBUILD**
7. **Offline / PWA Infrastructure:** **FIX**
8. **Question Bank Verification (916 Qs):** **FIX**

---

### Top 3 Most Urgent Fixes

1. **Fix Unreachable Question Bank (Randomization in `engine.js`):**
   * *Issue:* `buildSession` executes `pool.slice(0, target)` on a static array, locking out >85% of the 916 bank questions from ever appearing in practice or mock sessions.
   * *Fix:* Implement Fisher-Yates array shuffling in `buildSession` / `startSession` to sample randomly from the full question pool.

2. **Build Missing Adaptive Revision Scheduler & Persist Error Book:**
   * *Issue:* Spaced repetition (1/3/7/15/30-day) logic is missing from `engine.js`, and wrong/skipped practice/mock questions are lost immediately upon exiting the result screen.
   * *Fix:* Implement `scheduleRevision(questionId, performance)` and persist wrong/skipped items in `localStorage` (`examos-error-book`) with review timestamps.

3. **Correct Agriculture Supervisor Exam Config & Fix Mock Timer Auto-Submit:**
   * *Issue:* `agriculture-supervisor` config in `exams.js` has wrong question count (150 vs 100), wrong marks per question (2 vs 3), wrong duration (150 min vs 120 min), and irrelevant subjects (`india-gk`, `maths`, `science`). Mock timer auto-submits instantly when resuming or returning after screen sleep.
   * *Fix:* Update `agriculture-supervisor` config in `exams.js` to match official RSMSSB specifications (100 Qs / 300 M / 120 min / correct subjects); update timer logic in `Player.jsx` to track active elapsed time instead of raw `startedAt` wall clock comparison.
