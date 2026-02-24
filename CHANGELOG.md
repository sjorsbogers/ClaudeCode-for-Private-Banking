# Changelog — Claude Code for Private Banking

## [2.1.0] — 2026-02-24

### Companion Website — Full Launch

#### Website Architecture
- Built full 3-column docs layout: fixed sidebar (w-64) + content area + sticky OnThisPage TOC (w-48)
- Dark mode: CSS custom properties on `:root` / `.dark`, toggled by ThemeToggle, persisted to localStorage, flash-free via inline `<script>` in `<head>`
- Static export via Next.js 15 + Tailwind CSS 4 (`output: "export"`)

#### New Components
- `ThemeToggle.tsx` — sun/moon toggle, class-based dark mode on `<html>`
- `DocLayout.tsx` — 3-column shell used by all module and tools layouts
- `OnThisPage.tsx` — IntersectionObserver-based sticky TOC, scans `<article>` for h2/h3
- `LessonCommand.tsx` — slash command callout with copy button
- `PrevNextNav.tsx` — automatic prev/next navigation using `lessonNav.ts`
- `src/lib/lessonNav.ts` — flat ordered array of all 54 lesson routes

#### New Pages (63 total)
- 9 module layout files (module-0 through module-6, getting-started, tools)
- 51 lesson pages across all modules, content sourced from each lesson's CLAUDE.md
- 7 tools pages: index + 6 individual tool pages (description, how it works, features, Launch Tool button)

#### Sidebar
- Expanded from 3 links to full 51-lesson nav with sub-group dividers (Core Skills, Role Deep-Dives, Advanced, Reference)
- Added "Built Tools" section linking all 6 live tools

#### Navbar
- Added sticky positioning and ThemeToggle button
- Added "Download Course" button (teal, GitHub icon) linking to `sjorsbogers/ClaudeCode-for-Private-Banking`

#### Installation Page (Step 7)
- Replaced vague "ask your instructor" placeholder with two concrete download options:
  - Option A: GitHub ZIP download (5-step walkthrough, no Git required)
  - Option B: One-line `git clone` command that names the folder correctly
  - Confirmation callout describing expected folder contents

#### Deployment
- Deployed to Vercel: `https://cc-for-private-banking.vercel.app`
- Removed duplicate alias `website-five-sigma-45.vercel.app`
- `cc-for-private-banking.vercel.app` registered as permanent project-level domain

### GitHub Repository
- v2 content (298 files) pushed to `sjorsbogers/ClaudeCode-for-Private-Banking`, replacing v1
- `.gitignore` added (excludes `node_modules/`, `.next/`, `out/`, `.vercel/`, `organized/*`)
- `organized/.gitkeep` added to track the student output directory
- Repo description updated: links to companion website
- Repo homepage URL set to `https://cc-for-private-banking.vercel.app`

### Built Tools — GitHub & Vercel
- Created GitHub repos for all tools not yet on GitHub:
  - `sjorsbogers/claudius-capital` (Claudius Capital Website test)
  - `sjorsbogers/claudius-capital-v2` (Claudius Capital Website test 2)
- All 9 Vercel projects connected to their GitHub repos:
  - `cc-for-private-banking` → `ClaudeCode-for-Private-Banking`
  - `claudius-report-generator` → `claudius-report-generator-test-run`
  - `meeting-prep-engine` → `meeting-prep-engine-test-run`
  - `proposal-generator` → `proposal-generator-black-psi` → `proposal-generator-test-run`
  - `investment-memo-builder` → `investment-memo-builder-test-run`
  - `compliance-analyzer` → `compliance-analyzer-test-run`
  - `risk-profiler` → `risk-profiler-test-run`
  - `claudius-capital` → `claudius-capital`
  - `claudius-capital-v2` → `claudius-capital-v2`

## [2.0.0] — 2026-02-19

### Complete Rebuild (v1 → v2)

Based on full beta test (43 lessons, 6 tools built), 37 logged issues, structured student feedback, and comprehensive Course Improvement Plan.

#### Structural Changes
- Module 0: Trimmed from 4 to 3 lessons (installation moved to companion website)
- Module 1: Expanded from 9 to 20 lessons (8 core + 6 role + 4 advanced + 2 reference)
- Modules 3-4: Merged GitHub + Deploy into single "Ship It" lessons (5→4 per module)
- Module 5: Merged GitHub + Deploy (5→4 lessons)
- Module 6: NEW capstone module (3 lessons)
- Total: 43 → 51 lessons

#### New Content
- 7 new chaos files for role-specific deep-dives
- 6 role deep-dive lessons (RM, Analyst, Marketing, Manager, Operations, Compliance)
- 4 advanced technique lessons (regulatory, prompt engineering, integrations, verification)
- 2 reference lessons (troubleshooting, tips & best practices)
- 3 capstone lessons (portfolio review, workflow design, next steps)
- Companion website (Next.js static site) with pre-IDE setup guide

#### Improvements
- Reality Check sidebars in all build lessons
- Dynamic compliance checkpoints (adapt to actual build output)
- Auto-save exercise outputs to `organized/`
- Scaffolded checkpoint questions (multiple choice, not open-ended)
- Curiosity nudges after every 2-3 exercises
- Agent execution time expectations before multi-agent tasks
- No real slash commands used as examples mid-lesson
- Keyboard layout notes for non-US keyboards
- Source attribution as taught behaviour

#### Technical Fixes
- Force light mode from Step 1 in all builds
- `suppressHydrationWarning` on html/body
- Print CSS: white backgrounds, browser default footers
- `npx next build` as pre-deploy verification step
- Port management teaching in Module 2.1
- GitHub repos always `--private` with teaching moment
- Live URL added to GitHub description as standard step

#### Sub-Agent Updates
- CIO: Added dynamic disagreement scenarios
- Client Advisor: Strengthened practical guidance
- Compliance Officer: Dynamic checkpoint logic, what-if scenarios, cross-border challenges
- Operations Lead: Added process mapping depth, change management focus

## [1.1.0-beta1] — 2026-02-11

Beta 1 Realism Audit: 14-workstream overhaul based on 4-agent industry critique.

## [1.0.0] — 2026-02-10

Initial project creation. Full directory structure, all foundation files, company context, inherited chaos files, sub-agents, lesson scripts (Modules 0–5), slash commands, templates, and README.
