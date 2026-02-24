# Changelog — Claude Code for Private Banking

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
