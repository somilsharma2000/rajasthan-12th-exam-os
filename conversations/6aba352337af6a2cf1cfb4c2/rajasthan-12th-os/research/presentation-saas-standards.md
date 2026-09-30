# Presentation & Placement Research Standards for Premium Hindi-First Exam Prep Web App

**Target App Framework:** React (Mobile-First, Mobile Web)  
**Primary Brand Color:** Purple `#7C3AED` (Tailwind `violet-600`)  
**Target Language Context:** Hindi-First (Devanagari typography optimized)  
**Document Path:** `/app/conversations/6aba352337af6a2cf1cfb4c2/rajasthan-12th-os/research/presentation-saas-standards.md`

---

## 1. Dark-Mode SaaS Design Standards (Linear, Vercel, Stripe, Radix/shadcn)

### 1.1 Surface Elevation & Background Layering
In modern dark interfaces (Linear, Vercel, Radix UI, shadcn), shadows become almost invisible against dark backgrounds. Elevation is therefore communicated through **surface color lightness shifts** combined with **subtle 1px semi-transparent borders** (`10%–15%` white opacity or neutral border).

#### 4-Tier Surface Elevation Architecture
| Layer / Level | Surface Role | Hex Value | Tailwind Class / CSS Variable | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Level 0 (Root)** | App Canvas / Page Background | `#09090B` | `bg-zinc-950` (`--background`) | Main page backdrop, maximum dark depth |
| **Level 1 (Base Surface)** | Default Cards, Feed Items | `#141417` / `#18181B` | `bg-zinc-900` (`--card`) | Primary card containers, exam chooser cards |
| **Level 2 (Elevated)** | Hover state, Popovers, Dropdowns | `#1F1F23` / `#27272A` | `bg-zinc-850` / `bg-zinc-800` (`--popover`) | Interactive flyouts, hover targets, active choice states |
| **Level 3 (Top Floating)** | Modals, Dialogs, Toast Notifications | `#27272A` / `#3F3F46` | `bg-zinc-800` / `bg-zinc-700` (`--dialog`) | Top overlay components, bottom sheet containers |
| **Border Tokens** | Structural Separation | `rgba(255,255,255,0.08)` to `rgba(255,255,255,0.12)` | `border-zinc-800/80` (`--border`) | 1px border on all cards and containers to replace drop shadows |

---

### 1.2 Contrast Rules & Text Hierarchy
Dark-mode text contrast must adhere to WCAG AAA for primary content (7:1 contrast ratio) and WCAG AA for secondary metadata (4.5:1 ratio).

#### Text Opacity & Scale System
*   **Primary Text (`text-zinc-50` / `#FAFAFA`):** 95%–100% white opacity. Used for headings, Devanagari question text, active option labels.
*   **Secondary Text (`text-zinc-400` / `#A1A1AA`):** 65%–70% white opacity. Used for metadata (subject counts, student stats, section subtitles).
*   **Muted / Disabled Text (`text-zinc-500` / `#71717A`):** 40%–45% white opacity. Used for placeholder text, timestamp footnotes, deactivated navigation icons.

> **Hindi/Devanagari Dark-Mode Rule:** Due to complex ligatures, matras (vowel signs), and top shirorekha lines, pure white text at thin font weights can cause visual halation/bleeding on deep dark backgrounds. Body text in Hindi must use at least **Medium (weight 500)** rather than Light/Regular (300/400) when rendered on dark surfaces.

---

### 1.3 Accent Color Discipline & Brand Adaptation
The primary brand purple `#7C3AED` (`violet-600` in Tailwind) works well in light theme, but pure `#7C3AED` as text or thin icons on dark backgrounds can suffer from poor visual contrast and optical vibration.

#### Dark Mode Primary Brand Rules
1.  **Solid Buttons / CTAs:** Use `#7C3AED` (`violet-600`) or `#6D28D9` (`violet-700`) fill with crisp `#FFFFFF` text. Add subtle purple ring glow (`shadow-[0_0_16px_rgba(124,58,237,0.25)]`) to elevate primary actions.
2.  **Text / Icons / Active Indicators:** Shift text and icon accents to `#A78BFA` (`violet-400`) or `#8B5CF6` (`violet-500`). This ensures high contrast against zinc-900 surfaces.
3.  **10% Accent Rule:** Accent color must occupy **no more than 10%** of any single screen's total area — restricted to primary CTA buttons, active tab border indicators, active card selection borders, and score gauge highlights.
4.  **Semantic Feedback desaturation:**
    *   **Success (Correct Answer):** `#22C55E` (light) $\rightarrow$ `#4ADE80` (`emerald-400` dark)
    *   **Error (Incorrect Answer):** `#EF4444` (light) $\rightarrow$ `#F87171` (`red-400` dark)
    *   **Warning / Pending:** `#F59E0B` (light) $\rightarrow$ `#FBBF24` (`amber-400` dark)

*Sources:*
*   [Radix UI Colors - Dark Mode Scales](https://www.radix-ui.com/colors)
*   [shadcn/ui Dark Mode Tokens](https://v3.shadcn.com/docs/dark-mode)
*   [Vercel Geist & Design Tokens Guidelines](https://github.com/boundlessdigital/claude-code-skills/blob/main/skills/design-principles/SKILL.md)

---

## 2. Typography & Visual Hierarchy Rules for Mobile Web Apps

### 2.1 Mobile Type Scale (Modular Scale ~1.2x)
Mobile screens demand tight type scales to preserve vertical spatial budget while keeping touch targets readable.

| Token | Font Size | Line Height | Recommended Font Weight | Primary Usage |
| :--- | :--- | :--- | :--- | :--- |
| `text-xs` | 12px (0.75rem) | 16px (1.33x) | Medium (500) | Micro badges, timer labels, footnote disclaimers |
| `text-sm` | 14px (0.875rem) | 20px (1.43x) | Regular / Medium | Card metadata, subject counts, secondary actions |
| `text-base` | 16px (1.00rem) | 26px (1.625x) | Medium (500) | **Core Body Text, Devanagari questions**, options, form inputs |
| `text-lg` | 18px (1.125rem) | 26px (1.44x) | SemiBold (600) | Card titles, subsection headers, dialog titles |
| `text-xl` | 20px (1.25rem) | 28px (1.40x) | SemiBold (600) | Screen section titles, practice setup headers |
| `text-2xl` | 24px (1.50rem) | 32px (1.33x) | Bold (700) | Top screen title, exam hub hero header |
| `text-3xl` | 30px (1.875rem) | 36px (1.20x) | Bold (700) | Score percentage hero display |

---

### 2.2 Devanagari / Hindi-First Typography Rules
1.  **Line Height Extension:** Devanagari text requires **1.60x to 1.75x line-height** (compared to standard 1.4x–1.5x for English). Without adequate line height, matras from adjacent lines collide.
2.  **Minimum Font Size:** Never drop below **14px** for Hindi text. Body question text should strictly be **16px (`1rem`)**.
3.  **Font Family Pairing:** Noto Sans Devanagari or Google Sans Devanagari paired with Inter/Roboto for alphanumeric content.

---

### 2.3 Visual Hierarchy via Size, Color, Spacing
Refactoring UI design principle: Hierarchy should be established primarily via **color contrast opacity** and **whitespace spacing**, rather than escalating font sizes.

*   **Size vs. Color:** A 16px SemiBold heading in `#FAFAFA` paired with a 14px Regular subtitle in `#A1A1AA` provides cleaner visual hierarchy than a 22px heading with a 16px subtitle.
*   **Spacing Ratio:** Use a **3:1 top-to-bottom margin ratio** for group headings. Place 16px–24px spacing *above* a heading to detach it from previous content, and 4px–8px spacing *below* it to bind it to its subsection.

*Sources:*
*   [Refactoring UI Design Principles](https://refactoringui.com)
*   [Typeset Skill - Typography & Reading Rhythm](https://mcpmarket.com/tools/skills/typography-reading-rhythm)

---

## 3. Layout & Placement Principles

### 3.1 Reading Patterns: F-Pattern vs. Z-Pattern
*   **F-Pattern (Content Reading):** Used for **Question Player**, **Solution Breakdown**, and **Glossary Term List**. The user scans horizontally across the top question header, then sweeps vertically down the left edge across option keys (A, B, C, D) or Hindi question numbers.
*   **Z-Pattern (Landing & Selection):** Used for **Home Exam Launcher Grid** and **Result Screen Hero**. Top-left logo/title $\rightarrow$ top-right profile/search $\rightarrow$ diagonal sweep across featured cards $\rightarrow$ bottom primary action button.

---

### 3.2 8-Point Spacing Grid & Card Padding Norms
All margins, gaps, and paddings align with the 8-point grid system (with 4px half-steps for micro adjustments):

*   **Grid Scale:** `4px` (`space-1`), `8px` (`space-2`), `12px` (`space-3`), `16px` (`space-4`), `24px` (`space-6`), `32px` (`space-8`), `48px` (`space-12`).
*   **Card Padding Guidelines:**
    *   *Compact Cards (Glossary list, stat pills):* `12px` (`p-3`).
    *   *Standard Cards (12-Exam chooser grid, question options):* `16px` (`p-4`).
    *   *Featured Hero Cards (Exam Hub banner, Result Hero):* `20px–24px` (`p-5` or `p-6`).

---

### 3.3 Mobile Thumb Zone & Action Ergonomics (Steven Hoober Research)
Research by Steven Hoober reveals that **49% of users operate smartphones with a single thumb**, and the **bottom 40% of the screen** represents the natural, comfortable thumb reach zone.

```
+-----------------------------------+  [ Hard-to-Reach Zone ]
|  [Back]           [Share/Settings]|  Header / secondary controls
+-----------------------------------+
|                                   |  [ Natural Reading Zone ]
|       Content / Question /        |  Main display, Hindi text,
|       Option Selection Cards      |  scaffold elements
|                                   |
+-----------------------------------+  [ Natural Thumb Reach Zone ]
|  [  Sticky Primary Action Bar  ]  |  Bottom 60px - 72px pinned CTA
+-----------------------------------+  Min touch target: 48px x 48px
```

*   **Primary Actions ("Submit Answer", "Start Test", "Continue"):** Must sit in a **sticky bottom bar** pinned to the lower viewport edge. Target height: **48px–52px minimum**.
*   **Secondary / Destructive Actions ("Cancel", "Report", "Filter"):** Placed in the top header or upper corners (harder to tap accidentally).

---

### 3.4 Sticky Elements Rules
1.  **Top Sticky App Bar:** Fixed height `52px`, `z-40`, translucent backdrop blur (`backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80`).
2.  **Bottom Sticky Action Dock:** Fixed height `72px` (including safe-area bottom padding), `z-50`, elevated background (`bg-zinc-900/95 border-t border-zinc-800 shadow-[0_-4px_16px_rgba(0,0,0,0.4)]`).

---

### 3.5 Empty-State Presentation Standards
Empty states must follow a structured 4-part stack:
1.  **Icon:** Centered 48px $\times$ 48px container with monochrome/tinted icon (`bg-zinc-800/60 text-violet-400 border border-zinc-700/50 rounded-full flex items-center justify-center`).
2.  **Title:** Concise 16px SemiBold text (`text-zinc-100 mt-3`).
3.  **Description:** 14px Muted text (`text-zinc-400 max-w-[280px] text-center mt-1`).
4.  **Action CTA:** Single button (14px Medium `bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg px-4 py-2 mt-4`).

*Sources:*
*   [Mobile Navigation Ergonomics & Thumb Zone](https://webeta.site/blog/mobile-navigation-ergonomics-bottom-sheets)
*   [Nielsen Norman Group - Mobile Layout Guidelines](https://www.nngroup.com/articles/design-pattern-guidelines/)

---

## 4. Dashboard / Launcher Grid Patterns (12-Exam Chooser)

### 4.1 Card Sizing & Geometry
*   **Mobile Layout:** 2-column responsive grid (`grid grid-cols-2 gap-3.5`). Minimum column width: `150px`.
*   **Card Aspect Ratio / Height:** Aspect ratio ~ `4:3.5` or fixed min-height `128px–140px`.
*   **Border Radius:** `12px` (`rounded-xl` in Tailwind).

---

### 4.2 Element Placement Inside Exam Grid Cards
```
+-----------------------------------------+
| [32x32 Badge]             [Verified Dot]|  Top Row: Icon + Status
|                                         |
|  कक्षा 12वीं विज्ञान                       |  Middle: Hindi Title
|  (12th Science)                         |  (15px SemiBold, 2 lines)
|                                         |
|  6 विषय  •  120+ टेस्ट                    |  Bottom Meta: Sub Count
+-----------------------------------------+
```

1.  **Top Header Row:**
    *   *Top-Left:* 32px $\times$ 32px state board or subject icon avatar (`bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center`).
    *   *Top-Right:* Official verification badge or green dot ("RBSE").
2.  **Middle Body:**
    *   Hindi Exam Title (15px SemiBold `text-zinc-50`, line-height 20px, `line-clamp-2`).
3.  **Bottom Footer Row:**
    *   Subject / Test count meta text in 12px Muted text (`text-zinc-400`). Separated from card body by subtle top border or 8px vertical margin.

---

### 4.3 Selection & Interactive States
*   **Default State:** Level 1 background (`bg-zinc-900 border border-zinc-800/80`).
*   **Active Touch/Press State:** Level 2 surface (`bg-zinc-850 scale-[0.98] transition-transform duration-150`).
*   **Selected State:** 2px solid primary border (`border-2 border-violet-500 bg-violet-500/10 shadow-[0_0_16px_rgba(124,58,237,0.2)]`). Placed checkmark icon in top-right corner inside a 20px violet solid circle.

*Sources:*
*   [Raycast & S-Tier App Dashboard Card Patterns](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/raycast/DESIGN.md)
*   [Mobbin Mobile Grid Selection UI](https://mobbin.com)

---

## 5. Trust & Verification Badge Presentation

### 5.1 Verification Badges vs. Informational Labels

```
[ Primary Title / Screen Header ]  [ Verified Badge ] -> Immediate Proximity
─────────────────────────────────────────────────────
[ Subtitle / Meta Description ]

[ Section Content / Cards ]
└─ [ Category Pill ]  [ Stream Tag ]                -> Card Level / Footnote
```

1.  **Verified / Official Syllabus Badges (High Authority):**
    *   *Styling:* Emerald tint (`bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`) or Violet badge (`bg-violet-500/15 text-violet-300`).
    *   *Placement:* **Immediately adjacent to the entity title** (inline right after H1/H2 header or top-right corner of card header). This reduces cognitive doubt before a student starts a practice session.
2.  **Informational / Category Labels (Low Authority):**
    *   *Styling:* Neutral dark tint (`bg-zinc-800 text-zinc-300 border border-zinc-700/50`).
    *   *Placement:* Footnotes, bottom row of cards, or secondary collapsible filter drawers.

---

### 5.2 Trust Hierarchy Rules (NNgroup Pyramid of Trust)
*   **Level 1 Trust Anchor (Board Verification):** Official Syllabus tag ("RBSE 2026 Board Verified") placed directly under or beside the Exam Title.
*   **Level 2 Activity Social Proof:** Aggregate student activity ("25,000+ छात्र अभ्यास कर रहे हैं") presented inside a secondary stats bar in the Exam Hub.

*Sources:*
*   [Nielsen Norman Group - Indicators & Trust Patterns](https://www.nngroup.com/articles/indicators-validations-notifications/)
*   [Nielsen Norman Group - Pyramid of Trust](https://www.nngroup.com/videos/pyramid-trust/)

---

## 6. Our App: Concrete Placement Spec

Below is the screen-by-screen architectural spec mapping all research standards directly to our 6 web app screens.

---

### Screen 1: Home Exam-Grid (12-Exam Chooser)

#### Layout Architecture & Grid
*   **Page Background:** `#09090B` (`bg-zinc-950`).
*   **Top Sticky App Header (52px):** `bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 px-4 flex items-center justify-between z-40`.
    *   Left: App Brand "परीक्षा Prep" (18px SemiBold `#FAFAFA`).
    *   Right: Search icon trigger + Theme toggle (`w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center`).
*   **Hero Section Header (`px-4 pt-4 pb-3`):**
    *   Title: "अपनी कक्षा या परीक्षा चुनें" (20px Bold `#FAFAFA`, line-height 28px).
    *   Subtitle: "राजस्थान बोर्ड परीक्षा 2026 के अनुसार" (14px Regular `#A1A1AA`, `mt-1`).
*   **Exam Chooser Grid:** `grid grid-cols-2 gap-3.5 px-4 pb-24`.

#### Card Component Specification
*   **Surface Base:** `bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex flex-col justify-between relative min-h-[136px] transition-all duration-150`.
*   **Card Top Row:**
    *   Left: 32x32px Icon Box (`bg-violet-500/10 text-violet-400 rounded-lg flex items-center justify-center text-16px`).
    *   Right: Verification Tag `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1` ("✓ RBSE").
*   **Card Body:**
    *   Hindi Exam Title: `text-15px font-semibold text-zinc-50 leading-snug mt-2.5 line-clamp-2` (e.g. "कक्षा 12वीं विज्ञान").
*   **Card Footer Meta:**
    *   `flex items-center justify-between mt-3 pt-2 border-t border-zinc-800/60 text-12px text-zinc-400`.
    *   Left: "6 विषय" | Right: "120+ टेस्ट".
*   **Selected State Class:** `border-2 border-violet-500 bg-violet-500/10 shadow-[0_0_16px_rgba(124,58,237,0.2)]`. Top-right 20px circle check badge in violet.

#### Sticky Bottom Dock (Thumb Zone)
*   **Container:** `fixed bottom-0 inset-x-0 h-[72px] bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 z-50 flex items-center`.
*   **Primary CTA Button:**
    *   Text: "आगे बढ़ें (Continue)"
    *   Style: `w-full h-[48px] bg-violet-600 hover:bg-violet-500 active:scale-[0.99] text-white font-semibold text-16px rounded-xl shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2`.

---

### Screen 2: Exam Hub

#### Layout & Hierarchy
*   **Header (52px):** Left arrow back button, Title "राजस्थान 12वीं बोर्ड" (18px SemiBold), Right share icon.
*   **Featured Board Surface (Level 1 Card - `mx-4 mt-3 p-5 bg-zinc-900 border border-zinc-800 rounded-2xl`):**
    *   Header Row: H1 Title "12th Board Hub" (22px Bold `#FAFAFA`).
    *   Inline Trust Badge: `ml-2 inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-12px font-medium` ("सत्यापित पाठ्यक्रम 2026").
    *   Description: "RBSE नवीनतम सिलेबस पर आधारित सम्पूर्ण अध्ययन सामग्री।" (14px `#A1A1AA` `mt-1.5`).
    *   **Quick Stats Row (`grid grid-cols-3 gap-2 mt-4`):**
        *   Box 1: `bg-zinc-950 p-2.5 rounded-xl border border-zinc-800/80 text-center` $\rightarrow$ "6" (18px Bold `#FAFAFA`) + "विषय" (12px Muted).
        *   Box 2: `bg-zinc-950 p-2.5 rounded-xl border border-zinc-800/80 text-center` $\rightarrow$ "1,200+" (18px Bold `#FAFAFA`) + "प्रश्न" (12px Muted).
        *   Box 3: `bg-zinc-950 p-2.5 rounded-xl border border-zinc-800/80 text-center` $\rightarrow$ "94%" (18px Bold `#4ADE80`) + "सफलता" (12px Muted).

#### Subject Selector List
*   **Section Title (`px-4 mt-6 mb-3`):** "विषय चुनें (Select Subject)" (18px SemiBold `#FAFAFA`).
*   **Subject List (`space-y-3 px-4 pb-20`):**
    *   Card Container: `h-[68px] bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex items-center justify-between hover:border-zinc-700 active:bg-zinc-850 transition-all`.
    *   Left Group: 40x40px rounded avatar with subject icon + Hindi Title (16px Medium `#FAFAFA`) + Meta ("24 अध्याय" 13px Muted `#A1A1AA`).
    *   Right Action: "अभ्यास करें" pill button (`text-13px font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-lg`).

---

### Screen 3: Practice Setup

#### Form Group Placement (Level 1 Cards)
*   **Screen Header:** "अभ्यास सेटअप (Practice Setup)" (18px SemiBold `#FAFAFA`).
*   **Form Stack (`space-y-4 px-4 pt-3 pb-28`):**

1.  **Subject & Chapter Multi-Select:**
    *   Label: "विषय और अध्याय चुनें" (15px Medium `#FAFAFA`).
    *   Input Box: `h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 flex items-center justify-between text-15px text-zinc-200 cursor-pointer`.
2.  **Question Count Selector:**
    *   Label: "प्रश्नों की संख्या" (15px Medium `#FAFAFA`).
    *   Segmented Control Bar: `h-[48px] bg-zinc-950 p-1 rounded-xl grid grid-cols-4 gap-1 border border-zinc-800/80`.
    *   Segment Option: `h-full rounded-lg flex items-center justify-center text-14px font-medium text-zinc-400 transition-all`.
    *   Active Segment: `bg-violet-600 text-white font-semibold shadow-md`. (Options: `10`, `20`, `30`, `50`).
3.  **Mode Toggle Cards (2-Column Choice):**
    *   Option A (Exam Mode): `p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl` $\rightarrow$ Title "परीक्षा मोड" (15px SemiBold) + Subtitle "समय सीमा के साथ" (12px Muted).
    *   Option B (Study Mode): `p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl` $\rightarrow$ Title "अध्ययन मोड" (15px SemiBold) + Subtitle "तुरंत उत्तर व्याख्या" (12px Muted).

#### Sticky Bottom CTA
*   **Button:** `fixed bottom-0 inset-x-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50`.
*   **Action:** "टेस्ट शुरू करें (Start Test)" — `w-full h-[52px] bg-violet-600 text-white font-semibold text-16px rounded-xl shadow-lg shadow-violet-600/25 flex items-center justify-center`.

---

### Screen 4: Question Player (Hindi-First Core Screen)

#### Top Sticky Progress Header (48px)
*   **Container:** `sticky top-0 h-[48px] bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 flex items-center justify-between z-40`.
*   **Left Component:** "प्रश्न 4 / 20" (14px Medium `#A1A1AA`).
*   **Center Component:** Countdown Timer Pill `bg-amber-500/10 text-amber-400 border border-amber-500/20 text-13px font-mono font-medium px-3 py-1 rounded-full flex items-center gap-1.5` ("⏱ 14:25").
*   **Right Component:** Bookmark & Report icons (`w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400`).
*   **Bottom Progress Track:** `absolute bottom-0 inset-x-0 h-[3px] bg-zinc-800` with inner bar `bg-violet-500 h-full transition-all duration-300 w-[20%]`.

#### Question Display Area
*   **Container:** `mx-4 my-3 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-sm`.
*   **Meta Bar:** `flex items-center justify-between mb-3`.
    *   Left Tag: "भौतिक विज्ञान • 1 अंक" (12px Muted `#A1A1AA`).
    *   Right Toggle: Hindi / English translation switch pill (`bg-zinc-950 p-0.5 rounded-lg border border-zinc-800 text-12px`).
*   **Question Body (Devanagari):**
    *   Text: `text-17px font-medium text-zinc-50 leading-[1.70] tracking-normal mb-4`.
    *   Sample: "विद्युत क्षेत्र की तीव्रता का SI मात्रक क्या होता है?"

#### Option Choice List (F-Pattern Alignment)
*   **List Container:** `space-y-3 px-4 pb-28`.
*   **Option Item Component:** `min-h-[52px] p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5`.
*   **Unselected Style:** `bg-zinc-950 border-zinc-800/90 text-zinc-200 hover:border-zinc-700 active:bg-zinc-900`.
*   **Selected Style:** `bg-violet-500/10 border-2 border-violet-500 text-zinc-50 shadow-[0_0_12px_rgba(124,58,237,0.15)]`.
*   **Option Key Circle:**
    *   `w-7 h-7 rounded-full bg-zinc-800 text-zinc-300 text-14px font-medium flex items-center justify-center flex-shrink-0`.
    *   When Selected: `bg-violet-600 text-white`.
*   **Option Text:** `text-16px font-medium text-zinc-100 leading-snug`.

#### Sticky Bottom Action Bar (Thumb Zone - 72px)
*   **Container:** `fixed bottom-0 inset-x-0 h-[72px] bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-4 py-3 z-50 flex items-center gap-3`.
*   **Secondary Left Button:** "पिछला (Prev)" — `h-[48px] px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-15px rounded-xl flex items-center justify-center`.
*   **Primary Right Button:** "अगला प्रश्न (Next)" / "उत्तर जमा करें" — `h-[48px] flex-1 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-16px rounded-xl shadow-md shadow-violet-600/20 flex items-center justify-center gap-2`.

---

### Screen 5: Result Screen

#### Layout & Score Hero
*   **Header:** Title "परीक्षण परिणाम (Result Summary)" (18px SemiBold `#FAFAFA`).
*   **Score Hero Surface (`mx-4 mt-3 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl text-center relative overflow-hidden`):**
    *   Radial Score Ring (120px $\times$ 120px centered): "85%" (`text-32px font-bold text-zinc-50`).
    *   Performance Pill: `mt-3 inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-14px font-medium` ("उत्कृष्ट प्रदर्शन!").
    *   **3-Metric Breakdown Bar (`grid grid-cols-3 gap-2 mt-5 p-3 bg-zinc-950 rounded-xl border border-zinc-800`):**
        *   Correct: "17" (`text-emerald-400 text-18px font-bold`) + "सही" (12px Muted).
        *   Incorrect: "2" (`text-red-400 text-18px font-bold`) + "गलत" (12px Muted).
        *   Skipped: "1" (`text-zinc-400 text-18px font-bold`) + "छोड़े" (12px Muted).

#### Solution Breakdown Drawer
*   **Segment Filter Bar (`px-4 mt-6 mb-3 flex gap-2 overflow-x-auto`):** Tabs for "सभी (All)", "गलत उत्तर (Incorrect)", "व्याख्या (Solutions)".
*   **Solution Accordion Card (`mx-4 mb-3 p-4 bg-zinc-900 border border-zinc-800 rounded-xl`):**
    *   Question Title (15px Medium `#FAFAFA`).
    *   User Answer: `text-red-400 text-14px mt-2` ("आपका उत्तर: N/m²").
    *   Correct Answer: `text-emerald-400 text-14px font-medium` ("सही उत्तर: N/C").
    *   **Hindi Explanation Callout Box:** `mt-3 p-3 bg-violet-950/20 border-l-4 border-violet-500 rounded-r-lg text-14px text-zinc-300 leading-relaxed`.

#### Bottom Action Bar (Thumb Zone)
*   **Container:** `fixed bottom-0 inset-x-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50 flex gap-3`.
*   **Left Button:** "पुनः प्रयास करें" — `h-[48px] flex-1 bg-zinc-800 text-zinc-200 font-medium text-15px rounded-xl flex items-center justify-center`.
*   **Right Button:** "अगला टेस्ट" — `h-[48px] flex-1 bg-violet-600 text-white font-semibold text-15px rounded-xl flex items-center justify-center`.

---

### Screen 6: Glossary (शब्दावली)

#### Header & Search Bar
*   **Sticky Search Header (`sticky top-0 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 p-4 z-40`):**
    *   Title: "महत्वपूर्ण शब्दावली (Glossary)" (18px SemiBold `#FAFAFA`).
    *   Search Input Box (`mt-3 relative`):
        *   Input Element: `w-full h-[48px] bg-zinc-900 border border-zinc-800 rounded-xl pl-11 pr-4 text-15px text-zinc-100 placeholder-zinc-500 focus:border-violet-500 focus:outline-none`.
        *   Icon: Left-aligned search glass icon (`text-zinc-500 absolute left-3.5 top-3.5`).
*   **Alphabet / Category Filter Scroller (`px-4 py-2.5 flex gap-2 overflow-x-auto no-scrollbar`):**
    *   Pill Items: `px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-13px font-medium text-zinc-300 whitespace-nowrap active:bg-violet-600 active:text-white`.

#### Term Cards Feed
*   **Container Stack:** `space-y-3 px-4 pt-2 pb-20`.
*   **Glossary Term Card Component:**
    *   Surface: `p-4 bg-zinc-900 border border-zinc-800 rounded-xl`.
    *   Top Title Row:
        *   Hindi Term: "विद्युत धारा (Electric Current)" (17px SemiBold `#FAFAFA`).
        *   Subject Pill: `text-11px text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20` ("भौतिकी").
    *   Definition Body:
        *   Hindi Text: `text-15px text-zinc-300 leading-[1.65] mt-2`.
        *   Sample: "आवेश के प्रवाह की दर को विद्युत धारा कहते हैं। इसका SI मात्रक एम्पियर (A) होता है।"

#### Empty-State Specification (Zero Search Results)
*   **Container:** `py-16 px-4 text-center flex flex-col items-center justify-center`.
*   **Icon Box:** `w-12 h-12 rounded-full bg-zinc-800/80 text-violet-400 border border-zinc-700/50 flex items-center justify-center text-20px mb-3`.
*   **Title:** "कोई शब्दावली नहीं मिली" (16px SemiBold `#FAFAFA`).
*   **Subtitle:** "कृपया दूसरा शब्द खोजें या फ़िल्टर रीसेट करें।" (14px Regular `#A1A1AA` `max-w-[260px] mt-1`).
*   **CTA Button:** "फ़िल्टर रीसेट करें" (`mt-4 h-[40px] px-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-14px font-medium rounded-lg border border-zinc-700/60`).

---

## 7. Summary Table of Concrete Tokens & Specs

| Token Name | Light Mode Value | Dark Mode Value | Usage Context |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `#FFFFFF` | `#09090B` (`zinc-950`) | Page background backdrop |
| **Card Surface** | `#F4F4F5` | `#141417` (`zinc-900`) | Standard cards, option choices, chooser grid |
| **Elevated Surface** | `#E4E4E7` | `#1F1F23` (`zinc-850`) | Hover state, popovers, active options |
| **Card Border** | `#E4E4E7` | `rgba(255,255,255,0.08)` / `#27272A` | 1px border on all containers |
| **Primary Accent Fill** | `#7C3AED` (`violet-600`) | `#7C3AED` (`violet-600`) | Primary CTA buttons fill |
| **Accent Text / Icon** | `#7C3AED` | `#A78BFA` (`violet-400`) | Text accents, icons, active tab indicators |
| **Primary Text** | `#09090B` | `#FAFAFA` (`zinc-50`) | Headings, Devanagari question text |
| **Secondary Text** | `#71717A` | `#A1A1AA` (`zinc-400`) | Metadata, sub-headings, subject counts |
| **Devanagari Line Height** | `1.50x` | `1.65x` - `1.70x` | Hindi question & solution body text |
| **Thumb Zone Dock Height** | `72px` | `72px` | Bottom sticky action bar |
| **Primary Button Height** | `48px` - `52px` | `48px` - `52px` | Minimum touch target for CTAs |
