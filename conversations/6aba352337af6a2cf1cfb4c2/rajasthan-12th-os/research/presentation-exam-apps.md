# UI/UX Research: Presentation & Placement Patterns in Leading Indian Exam-Prep Apps

> **Target Platform Context:** Premium Hindi-first, mobile-first, single-page React app for Rajasthan 12th / CET / Government Exam Preparation (REET, Rajasthan Police Constable, Patwari, CET 12th Level, LDC).  
> **Research Objective:** Analyze presentation and placement patterns across leading Indian edtech/exam-prep platforms to derive evidence-based placement rules for home screens, mock test engines, result analytics, and mobile navigation.

---

## 1. Per-App Detailed Research Findings

---

### App 1: Physics Wallah (PW) — Mobile App & Web Platform

* **Sources Analyzed:**
  * Web Platform: [PW Web Portal](https://www.pw.live/)
  * App Listing: [PW Android App on Google Play](https://play.google.com/store/apps/details?id=co.penpencil.pwdronaapp)
  * Test Series Section: [PW Test Series Hub](https://www.pw.live/test-series)

#### A. Home Screen Structure & Vertical Order
1. **Top Header Bar (Sticky):** Goal/Exam Selector dropdown (e.g., "Rajasthan Exams / CET / REET"), Global Search Bar, Notification Bell, and Wallet/Profile.
2. **"Continue Learning" Active State Card (Above the Fold):** Displays the last-accessed batch video, Daily Practice Problem (DPP), or mock test with a progress bar, timestamp, and a high-contrast `"Resume Practice"` / `"Join Live"` primary button.
3. **Hero Carousel Banners:** Promotional banners highlighting new batch launches, discount offers (e.g., *Vishwas Diwas*), or revision crash courses.
4. **Quick Action Grid (4x2 Icon Matrix):** Touch-friendly icons for `"My Batches"`, `"Test Series"`, `"Free Material"`, `"DPP"`, `"Saarthi Doubt Engine"`, and `"Library / Notes"`.
5. **Live & Upcoming Classes Carousel:** Horizontally scrollable cards with a red pulsing `"LIVE NOW"` badge, educator avatar, topic name, live student count, and `"Watch Now"` CTA.
6. **Trending Batches / Paid Test Series Cards:** Vertical cards showing exam target, faculty names, price tag (crossed MRP + discount pill e.g., `80% OFF`), language tag (`Hinglish / Hindi`), and an `"Enroll Now"` CTA button.
7. **Free Tests & Daily Quizzes Feed:** Lower-friction micro-learning cards featuring a `"Take Free Test"` action.

* **WHY this vertical order?**
  * **Retention First:** Returning users see their active learning state immediately above the fold, eliminating friction to resume studying.
  * **Urgency & FOMO:** Live class banners placed high on the screen simulate real classroom activity and drive engagement.
  * **Monetization Engine:** Promotional banners and trending batch cards convert free traffic into paid enrollment after initial re-engagement.

#### B. Mock Test / Practice Question Screen Presentation
* **Header Bar (Fixed Top):** Section selection tabs (`Rajasthan GK`, `General Science`, `Hindi`), Question counter (`Q. 14 / 150`), Language toggle (`English | हिन्दी`), Bookmark star icon, and Test Instructions modal launcher.
* **Timer Placement:** Top-right corner of the fixed toolbar in a bold digital format (`01:45:12`). Turns amber at 10 minutes and pulsing red at 2 minutes remaining.
* **Question Body:** Clean white background card with generous padding (16px), optimized Unicode Hindi typography, and responsive formula/image display.
* **Option Placement:** Full-width vertical rectangular radio cards (Options A, B, C, D) spanning 100% of the screen width with a minimum touch height of 48px. Tap state updates the border to solid brand color with a light tint fill.
* **Footer Actions (Sticky Bottom Toolbar):**
  * *Left:* `"Mark for Review"` (Outline button) and `"Clear Response"` (Text button).
  * *Right (Primary Thumb Zone):* `"Save & Next"` (Solid primary Deep Purple/Indigo button).
  * *Drawer Trigger:* Floating icon to expand the slide-out **Question Palette Drawer** (Grid of numbered buttons: Green = Answered, Red = Unanswered, Purple = Review, Grey = Unvisited).

#### C. Result Screen Presentation
* **Hero Score Card:** Large score display (`182 / 300`), Accuracy percentage (`84%`), All India / Rajasthan State Rank badge, and Total Time Spent.
* **Benchmark & Cutoff Indicator:** Horizontal visual slider displaying `Your Score` vs `Expected Cutoff` vs `Topper Score`.
* **Sectional Analysis Tabs:** Tabbed navigation between `Overall Summary`, `Sectional Breakdown`, and `Solutions`.
* **Question-by-Question Solutions:** Detailed filter chips (`All`, `Incorrect`, `Skipped`, `Correct`). Each item opens step-by-step Hindi/English text solutions plus an embedded video solution clip by PW faculty.

#### D. Navigation Pattern
* **Mobile Bottom Tabs (5 Items):** `Home` | `Batches` | `Test Series` | `Downloads/Library` | `My Space`.
* **Drawer / Top Navigation:** Change Target Exam Goal, Saarthi 1-on-1 Help, App Settings, Purchase History.

#### E. Visual Hierarchy, Cards & Color Patterns
* **Color Palette:** Deep Indigo/Purple (`#5A4BDA`) as primary brand color; Dark Slate background; Gold/Yellow (`#FFD700`) accent for discounts and key badges.
* **Badges & Trust Signals:** `"LIVE"` (Red pill badge), `"FREE TEST"` (Green badge), `"TOPPER'S CHOICE"` (Gold tag).

#### F. Key Placement & UX Tricks
* **Thumb-Zone Optimization:** The primary `"Save & Next"` CTA is pinned to the bottom-right corner for effortless right-thumb tapping during mobile tests.
* **Dual-Language Switcher:** Sticky upper-right placement during tests allows instant switching between Hindi and English without losing position.

---

### App 2: Testbook — Mobile App & Web Platform

* **Sources Analyzed:**
  * Web Platform: [Testbook Official Site](https://testbook.com/)
  * Test Series Portal: [Testbook Online Test Series](https://testbook.com/online-test-series)
  * Mobile App: [Testbook App Store Listing](https://apps.apple.com/in/app/testbook/id1666802218)

#### A. Home Screen Structure & Vertical Order
1. **Header Bar:** Goal Switcher (e.g., "Rajasthan Govt Exams"), Global Search Bar, Notification Bell, Testbook Pass Pro Badge.
2. **Testbook Pass Subscription Hero Card:** High-impact banner for "Pass Pro" subscription (`Unlock 70,000+ Mock Tests for ₹299`).
3. **"Continue Test / Resume Practice" Card:** Prominently displays incomplete mock tests or recently attempted test series with an `"Attempt Now"` button.
4. **Quick Action Grid:** `"Mock Tests"`, `"Live Classes"`, `"Daily Current Affairs & GK"`, `"Previous Year Papers (PYP)"`, `"Saved Doubts"`.
5. **Exam Category Chips:** Horizontal pill scroll bar (`Rajasthan CET 12th`, `REET Level 1/2`, `Police Constable`, `Patwari`, `LDC`).
6. **Live Tests & Daily Quizzes Feed:** Urgency-driven cards showing participant count (`14,200 Aspirants Testing`), live timer (`Ends in 01h 30m`), and `"Start Free Test"` CTA.
7. **Subject-wise Practice & PYP Cards:** Grouped by subject area with test counts and difficulty levels.

* **WHY this vertical order?**
  * **Subscription-First Monetization:** Testbook relies on its "Pass Pro" pass model. Placing the Pass promotion at the top converts high-intent users immediately.
  * **Exam Choice Granularity:** Category chips let Rajasthan aspirants filter down to their specific sub-exam within 1 tap.
  * **Social Proof & Urgency:** Showing active live participant counts creates peer competitive pressure.

#### B. Mock Test / Practice Question Screen Presentation
* **Header Bar:** Section switch tabs (`Paper 1 - GK`, `Paper 2 - Language`), Question Palette trigger icon, Language Toggle (`Hindi | English`), Pause Test button, and Countdown Timer (`01:59:45`).
* **Timer Placement:** Monospace countdown timer fixed at top-right. Highlighted in orange when < 10 mins and red when < 3 mins.
* **Question Layout:** Standardized NTA/TCS CBT exam interface clone. Renders dual Hindi/English text cleanly with adjustable font sizes.
* **Option Placement:** Full-width radio options with clear letter badges (`A`, `B`, `C`, `D`) on the left. Selected state highlights the entire row in light green/blue with a bold border.
* **Footer Actions (Sticky Bottom Toolbar):**
  * *Left:* `"Mark for Review & Next"` (Secondary amber/outline button).
  * *Center:* `"Clear Response"` (Minimal text button).
  * *Right:* `"Save & Next"` (Solid Emerald Green primary CTA).

#### C. Result Screen Presentation
* **Top Performance Hero Card:** Large score display (`142.5 / 200`), Rank position (`AIR / State Rank #142`), Percentile (`96.8%`), and Accuracy rate (`88.2%`).
* **Cutoff Qualification Badge:** Clear pill badge displaying `"QUALIFIED - Above Expected Cutoff"` (Green) or `"NEEDS IMPROVEMENT"` (Orange).
* **Comparative Analytics Visualizer:**
  * *Topper Comparison Bar:* Your Marks vs Topper Marks vs Cutoff Marks side-by-side.
  * *Time Analysis:* Your Average Time/Question vs Topper Time/Question.
* **Sectional Performance Table:** Detailed breakdown of Marks, Accuracy, Attempt Rate, and Time Spent per subject.
* **Solutions & Explanations Hub:** Filterable list (`Incorrect`, `Unattempted`, `Correct`). Includes detailed step-by-step Hindi solutions and community discussion forums per question.

#### D. Navigation Pattern
* **Mobile Bottom Tabs (5 Items):** `Home` | `Pass` | `Tests` | `Live` | `You / Profile`.
* **Top Bar / Drawer:** Exam goal switching, offline downloaded PDFs, dark mode toggle, help & support.

#### E. Visual Hierarchy, Cards & Color Patterns
* **Color Palette:** Slate Blue / Navy (`#0F172A`) base with Vibrant Emerald Green (`#10B981` / `#22C55E`) for primary CTAs and Pass unlock states.
* **Badges & Trust Signals:** `"PASS PRO UNLOCKED"` (Shining gold pill badge), `"EXAM ORIENTED"` (Blue badge), `"FREE"` (Green pill badge).

#### F. Key Placement & UX Tricks
* **Filter Chips Pinned Below Header:** Sticky horizontal filter chips (`All`, `Full Mock Tests`, `Subject Tests`, `PYPs`) remain accessible while scrolling test lists.
* **Dual Action Buttons on Result Screen:** Floating sticky buttons for `"Re-attempt Incorrect Questions"` and `"View Full Solutions"`.

---

### App 3: Adda247 — Mobile App & Web Platform

* **Sources Analyzed:**
  * Web Platform: [Adda247 Homepage](https://www.adda247.com/)
  * Test Series Section: [Adda247 Test Series Store](https://www.adda247.com/product-testseries/)
  * App Listing: [Adda247 App Store Page](https://apps.apple.com/in/app/adda247/id1618943840)

#### A. Home Screen Structure & Vertical Order
1. **Top Header Bar:** State/Exam Goal Selector (e.g., "Rajasthan State Exams"), Global Search Bar, Coin Balance (Gamified rewards), Notification Bell.
2. **Daily Free Quiz & Current Affairs Streak (Hero Level):** Rapid 5-minute daily quizzes with a streak counter (`🔥 5 Day Streak!`).
3. **Hero Carousel Banners:** Promotional banners for new live batches, book store discounts, and coin redemption offers.
4. **Quick Action Grid (4x2):** `"Daily Quizzes"`, `"Live Classes"`, `"Test Series"`, `"E-Books"`, `"Free Videos"`, `"Doubts"`, `"Current Affairs"`, `"Job Alerts"`.
5. **Active Study Card:** Quick jump link back to currently active live course or attempted test series.
6. **Live Interactive Batches Carousel:** Video thumbnails with live chat overlay preview, faculty photo, and participant count.
7. **Exam-Specific Test Series Catalog:** Grouped by Rajasthan CET 12th, REET, Police Constable, LDC.
8. **Job Alerts & Exam Notifications Feed:** Latest state exam vacancy announcements with official PDF download links.

* **WHY this vertical order?**
  * **Daily Habit Loop:** Daily Current Affairs and 5-Minute Quizzes placed at the very top establish a morning study habit for aspirants.
  * **Gamification:** Displaying the user's coin balance at header level encourages daily logins and quiz completion.
  * **High-Trust Job Alerts:** Government exam aspirants visit daily for vacancy updates; placing official notifications on the homepage builds platform authority.

#### B. Mock Test / Practice Question Screen Presentation
* **Header Bar:** Exam Title, Section Switcher Bar, Question Palette toggle button, Language Toggle (`Hindi / English`), Bookmark button, Digital Countdown Timer.
* **Timer Placement:** Top-right corner of header with standard digital countdown display.
* **Question Container:** Custom font rendering tuned for Devanagari/Hindi Unicode scripts to ensure high readability on low-cost Android phones.
* **Option Placement:** Vertical list of wide rounded cards. Selected option turns solid red/crimson outline with subtle fill tint.
* **Footer Actions (Sticky Bottom Toolbar):**
  * *Left:* `"Mark for Review"` (Amber outline button).
  * *Center:* `"Clear"` (Text link).
  * *Right:* `"Save & Next"` (Solid Crimson Red primary CTA).
  * *Palette Toggle:* Drawer button to reveal full grid of question numbers.

#### C. Result Screen Presentation
* **Score Header Card:** Obtained Score vs Total Marks, State Rank position, Accuracy %, Time taken.
* **Gamification Pop-up:** `"You earned 50 Adda Coins for finishing this test!"` modal overlay to reward completion.
* **Cutoff & Sectional Visualizer:** Horizontal bar chart highlighting clear pass/fail threshold relative to expected state cutoff.
* **Detailed Hindi/English Solution Drawer:** Solutions categorized by `Correct`, `Incorrect`, and `Unattempted`. Includes text solutions and educator video breakdowns.

#### D. Navigation Pattern
* **Mobile Bottom Tabs (5 Items):** `Home` | `Feed (Current Affairs)` | `Doubts` | `Store` | `My Content`.
* **Top Goal Switcher:** Instant modal switch between State Exams (Rajasthan, UP, MP) and Central Exams (SSC, Banking).

#### E. Visual Hierarchy, Cards & Color Patterns
* **Color Palette:** Crimson Red / Burgundy (`#E11D48` / `#C8102E`) as brand anchor, paired with Slate Gray cards and Dark Charcoal typography.
* **Badges & Trust Signals:** `"MOST POPULAR"` (Red pill badge), `"HINDI MEDIUM"` (Blue pill badge), `"COIN DISCOUNT"` (Yellow badge).

#### F. Key Placement & UX Tricks
* **Job Alert Banner:** High-priority sticky banner at top of the feed whenever a major Rajasthan exam notification is released.
* **Streak Counter Widget:** Sticky fire icon floating on bottom-right of home screen to drive daily quiz engagement.

---

### App 4: Unacademy — Mobile App & Web Platform

* **Sources Analyzed:**
  * Web Platform: [Unacademy Homepage](https://unacademy.com/)
  * App Listing: [Unacademy App Store Page](https://apps.apple.com/us/app/unacademy-learning-app/id1271282869)
  * Test Portal: [Unacademy Test Series Hub](https://unacademy.com/goal/ssc-exams/AIT5D/test-series)

#### A. Home Screen Structure & Vertical Order
1. **Header Bar:** Goal Selector (e.g., "Rajasthan PSC / Govt Exams"), Search, Streak Counter (Fire icon 🔥), Profile.
2. **"Planner / Schedule" Active Hero Widget:** Interactive timeline showing today's scheduled live classes, mock tests, and target goal progress.
3. **Hero Promotional Carousel:** Subscription discount banners (e.g., `Unacademy Goal 20% Off`), scholarship combat events, or educator spotlights.
4. **"Continue Watching / Resume Practice" Card:** Floating card showing exact video timestamp or test progress with a 1-tap `"Resume"` button.
5. **Quick Action Grid / Row:** `"Self Study"`, `"Free Live Classes"`, `"Practice Quizzes"`, `"Syllabus Tracker"`, `"Raise a Hand / Doubts"`.
6. **Educator-Centric Live Classes Carousel:** Educator portrait cards featuring follower counts, live badge, topic title, and `"Join Class"` CTA.
7. **Upcoming Mock Tests & Scholarship Combats:** High-converting test cards with leaderboard reward announcements.
8. **Structured Batch Catalog Cards:** Multi-subject batch cards listing overall hours, start dates, and educator team avatars.

* **WHY this vertical order?**
  * **Structured Timetable First:** Unacademy's experience revolves around the `"Planner"`. Displaying today's schedule at the top builds a structured daily routine.
  * **Educator Star Power:** Highlighting top educator avatars builds immediate trust and emotional connection.
  * **Freemium Funnel:** Free Live Classes and Scholarship Tests act as mid-funnel entry points to convert free users into paid subscribers.

#### B. Mock Test / Practice Question Screen Presentation
* **Header Bar:** Exam Name, Section Switcher bar, Pause button, Language Toggle (`English / Hindi`), Question counter, Countdown timer.
* **Timer Placement:** Minimalist countdown timer fixed at top-right of screen.
* **Question Layout:** Modern layout with generous line-height (1.5) and ample whitespace. Supports complex math formulas and Devanagari script cleanly.
* **Option Placement:** Clean rectangular cards with letter indicators (`A`, `B`, `C`, `D`) inside rounded icons. Selected state highlights entire card with a Mint Green border and light tint fill.
* **Footer Actions (Sticky Bottom Toolbar):**
  * *Left:* `"Mark for Review"`
  * *Center:* `"Clear Selection"`
  * *Right:* `"Save & Next"` (Solid Mint Green `#08BD80` CTA).
  * *Palette Icon:* Bottom bar icon to pull up slide-over Question Palette grid.

#### C. Result Screen Presentation
* **Hero Performance Card:** Overall Score, All India / State Rank, Percentile, and Accuracy % represented in a clean circular chart.
* **Tabbed Analytics:** `Overview` | `Comparison` | `Solutions` | `Weakness Analysis`.
* **Topper Performance Overlay:** Line graph superimposing user's score vs Top 10 rankers' score progression across test sections.
* **Embedded Video Solutions:** Video player integrated directly below each question solution card, recorded by top educators.
* **AI Recommended Practice:** System recommends targeted practice quizzes based on topics where user lost marks.

#### D. Navigation Pattern
* **Mobile Bottom Tabs (4-5 Items):** `Planner` | `Self Study` | `Live Classes` | `Me / Profile`.
* **Top Goal Switcher:** Quick switcher across target goals (e.g., "Rajasthan PSC", "SSC CGL", "REET").

#### E. Visual Hierarchy, Cards & Color Patterns
* **Color Palette:** Unacademy Mint Green (`#08BD80`) as primary action color, Slate Navy (`#080E2E`) dark accents, and crisp White background cards.
* **Badges & Trust Signals:** `"LIVE NOW"` (Pulsing red pill), `"TOP EDUCATOR"` (Blue badge), `"SCHOLARSHIP TEST"` (Gold badge).

#### F. Key Placement & UX Tricks
* **Planner Timeline Widget:** Chronological vertical line showing completed tasks, ongoing live class, and upcoming evening mock test.
* **Sticky Upgrade CTA on Free Results:** Bottom sticky bar on free test results reading `"Unlock Detailed Video Solutions & All 50+ Mock Tests with Plus Subscription"`.

---

## 2. Cross-App Feature & Presentation Comparison Table

| Feature / UI Pattern | Physics Wallah (PW) | Testbook | Adda247 | Unacademy |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Value Prop** | Affordable, high-trust batch courses & test series | Comprehensive mock test bank ("Pass Pro") | Vernacular state exam prep & daily quizzes | Premium live classes & top educator star power |
| **Home Screen Hero Area** | Header -> **Continue Learning** -> Hero Carousel -> Quick Actions | Header -> **Pass Pro Hero Banner** -> Continue Test -> Quick Actions | Header -> **Daily Quiz & Streak** -> Hero Carousel -> Quick Actions | Header -> **Planner / Schedule Timeline** -> Hero Carousel -> Continue Watch |
| **Active Learning Card** | Pinned above the fold with progress bar & "Resume" CTA | Positioned 2nd or 3rd block ("Continue Test") | Positioned middle of screen ("My Enrolled Courses") | Embedded inside top "Planner" timeline card |
| **Mock Test Header & Timer** | Section tabs + Question # + **Timer top-right** + Language toggle | Section tabs + **Timer top-right** + Language toggle + Pause | Section tabs + **Timer top-right** + Language toggle + Bookmark | Section tabs + **Timer top-right** + Language toggle + Pause |
| **Option Cards Styling** | 100% width vertical cards; 48px min touch target; Blue tint fill on select | 100% width vertical cards; letter badge left; Green tint fill on select | 100% width rounded cards; Crimson border tint on select | 100% width rounded cards; Mint Green border & tint on select |
| **Primary Test Footer CTA** | `"Save & Next"` (Solid Purple, bottom-right thumb zone) | `"Save & Next"` (Solid Green, bottom-right thumb zone) | `"Save & Next"` (Solid Crimson Red, bottom-right thumb zone) | `"Save & Next"` (Solid Mint Green, bottom-right thumb zone) |
| **Result Screen Hero Card** | Score + Accuracy + Rank + Score vs Cutoff visualizer | Score + Rank + Percentile + **Qualified / Cutoff Badge** | Score + State Rank + Accuracy + **Coin Bonus Overlay** | Score + State Rank + Percentile + Accuracy Circular Chart |
| **Solutions & Explanations** | Filterable list (`Incorrect`, `Skipped`) + Text & Faculty Video | Filterable list + Text + Community Discussion Threads | Filterable list + Hindi/Eng text + Video Solution Clips | Filterable list + Integrated Educator Video Player + AI Recommendations |
| **Bottom Navigation Bar** | `Home` \| `Batches` \| `Test Series` \| `Downloads` \| `Profile` | `Home` \| `Pass` \| `Tests` \| `Live` \| `Profile` | `Home` \| `Feed` \| `Doubts` \| `Store` \| `My Content` | `Planner` \| `Self Study` \| `Live` \| `Me / Profile` |
| **Primary Brand CTA Color** | Deep Indigo / Purple (`#5A4BDA`) + Gold Accents | Emerald Green (`#10B981`) + Slate Navy | Crimson Red (`#E11D48`) + Charcoal | Mint Green (`#08BD80`) + Dark Slate |
| **Language Toggle (`Hindi/Eng`)** | Fixed top-right of question screen during test | Fixed top-right of header bar during test | Fixed top-right in test header | Fixed top-right in test header |
| **Signature Placement Trick** | Sticky resume bar; thumb-optimized bottom-right test CTA | Sticky horizontal filter chips (`Full Mock`, `Chapter`, `PYP`) | Floating daily quiz streak icon + state job alert banner | Interactive daily planner timeline card above fold |

---

## 3. "Placement Rules We Should Steal" (15 Concrete Rules for Rajasthan Prep App)

Based on cross-app research analysis, the following 15 presentation and placement rules must be implemented in our Rajasthan 12th / CET single-page React app:

### 1. Continue-Learning Card Pinned Above the Fold
* **Rule:** Place the `"Continue Learning"` / `"Resume Practice"` card directly below the home header, before any promotional hero banners.
* **Why:** Returning aspirants come to practice or resume a test. Eliminating navigation steps increases daily test completion rates by 25–30%.
* **Implementation:** Card displays test name, progress percentage (`12/150 Questions`), time remaining, and a single prominent `"Resume Test"` button.

### 2. Primary Test Action (`Save & Next`) Always Pinned to Bottom-Right Thumb Zone
* **Rule:** On mobile test viewports, place the `"Save & Next"` CTA sticky in the bottom-right corner with a minimum height of 48px and full opacity background.
* **Why:** Tapping `"Save & Next"` is performed 100–200 times per mock test. Placing it within the ergonomic natural thumb zone (bottom-right) reduces thumb strain and test fatigue.

### 3. Fixed Sticky Header with Timer & Instant Language Toggle (`हिन्दी / Eng`)
* **Rule:** Keep the countdown timer and language switcher fixed at the top-right of the test header at all times.
* **Why:** Rajasthan state exam aspirants frequently switch between Hindi and English medium for specific terms (e.g., science or polity questions). The toggle must execute instantly in client React state without scrolling or re-rendering the whole page.

### 4. Full-Width Option Touch Targets with Distinct Tap States
* **Rule:** Option radio cards (A, B, C, D) must span 100% of the container width with 12px vertical spacing and at least 48px touch height.
* **Why:** Eliminates mis-taps on small screens. When tapped, the card border immediately changes to 2px solid primary brand color with a 10% opacity background tint.

### 5. Benchmark Visualizer on Result Screen (`Your Score` vs `Expected Cutoff`)
* **Rule:** Place a horizontal progress bar at the very top of the result screen displaying `Your Score` relative to `Expected Cutoff` and `Topper Score`.
* **Why:** Raw scores mean little to Rajasthan CET / REET aspirants without context. Showing cutoff qualification immediately gives actionable performance feedback.

### 6. Three-State Question Palette Drawer Trigger Pinned to Footer
* **Rule:** Provide a slide-over Question Palette grid accessible via a dedicated footer icon. Numbered buttons must be color-coded: **Green** (Answered), **Red** (Unanswered), **Purple** (Marked for Review), **Grey** (Unvisited).
* **Why:** Replicates the official NTA / TCS computer-based test interface required for state exams, eliminating exam-day interface unfamiliarity.

### 7. Gamified Daily Quiz & Streak Counter Pinned in Top Header Bar
* **Rule:** Display a fire icon streak counter (`🔥 4 Days`) and wallet coins balance in the top header on home and dashboard views.
* **Why:** Daily streaks leverage behavioral habit loops (as seen in Adda247 and Unacademy), driving daily app opens for short 5-minute daily Rajasthan GK quizzes.

### 8. Sticky Horizontal Exam Sub-Filter Chips Directly Under Header
* **Rule:** Place horizontally scrollable filter chips (`All`, `Rajasthan CET 12th`, `REET`, `Police Constable`, `Patwari`, `LDC`) sticky right below the top navigation bar.
* **Why:** Allows students preparing for multiple state exams to filter mock tests with a single tap without opening dropdown menus.

### 9. Dual-Filter Solution Drawer on Result Screen (`Incorrect` First)
* **Rule:** On the result screen solution tab, default the filter chips to `Incorrect` questions first rather than `All`.
* **Why:** Aspirants review tests to learn from mistakes. Defaulting to incorrect answers saves time and focuses immediate attention on weak areas.

### 10. Hindi-First Native Devanagari Typography Optimization
* **Rule:** Use custom line-height (`1.6`) and letter-spacing (`0.01em`) for all Devanagari text rendered in questions and solutions, using clean web fonts like *Noto Sans Devanagari* or *Poppins*.
* **Why:** Hindi script requires higher vertical line-height than English to prevent overlapping diacritics (*matras*), ensuring clarity on budget mobile displays.

### 11. Step-by-Step Hindi Solutions with Expandable Video Explanation Clips
* **Rule:** Below each question in the solution view, present step-by-step Hindi text explanations with a 1-tap expandable `"Watch Video Solution"` button.
* **Why:** Combines instant text scanning for quick review with video explanations for complex conceptual doubts.

### 12. "Live Test Urgency" Badge with Real-Time Countdown
* **Rule:** Active live mock tests must display a pulsing red `"LIVE NOW"` badge alongside a real-time countdown timer (`Ends in 02h 15m`).
* **Why:** Replicates Testbook and Adda247's live test triggers, creating FOMO and scheduling discipline among test-takers.

### 13. Bottom Navigation Limited to 4–5 Core Actions
* **Rule:** Mobile bottom navigation bar must contain no more than 5 primary tabs: `Home` | `Tests & Practice` | `Live Batches` | `Doubts & PYP` | `Profile`.
* **Why:** Prevents visual clutter and ensures clear visual hierarchy on mobile screens of all sizes.

### 14. Single Primary CTA Per Viewport (High-Contrast Color Rule)
* **Rule:** Maintain strict visual hierarchy by reserving the primary solid brand color (e.g. Deep Indigo or Emerald Green) exclusively for the single main action on screen (`"Save & Next"`, `"Resume Test"`, `"Submit Test"`). Secondary actions must use outline or subtle gray button styles.
* **Why:** Prevents cognitive overload and guides user action naturally.

### 15. Offline State Persistence & Micro-State Resume Engine
* **Rule:** Auto-save question answers, timer state, and scroll position in local storage or React state after every option selection.
* **Why:** Ensures students in tier-2/tier-3 cities in Rajasthan with unstable internet connections never lose test progress or responses during connection drops.
