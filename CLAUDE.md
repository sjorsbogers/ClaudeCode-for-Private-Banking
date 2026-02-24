# Claude Code for Private Banking — Framework (v2)

## What This Is
This is an interactive course that teaches non-technical professionals in private banking and family offices to use Claude Code through a narrative-driven experience. The entire course runs inside Claude Code itself — lessons are slash commands, context is maintained via CLAUDE.md files, and students build real deployable tools.

**Origin:** Modeled after "Claude Code for Everyone" (CC4E), a 13-lesson coffee shop course by Carl Vellotti. CC for PB escalates significantly in complexity: 3 jurisdictions, multi-asset portfolios, regulatory frameworks (MiFID II, GDPR, FINMA, FCA, MAS), data sensitivity (portfolio values, net worth, tax structures), and institutional deployment requirements (auth, audit logging, jurisdiction awareness).

**v2 redesign:** Based on a full beta test (43 lessons, 6 tools built), 37 logged issues, structured post-course feedback, and a comprehensive improvement plan. Key changes: Module 1 expanded from 9 to 20 lessons (practical daily-use skills), build modules repositioned as "Build Labs," companion website for pre-IDE setup, Reality Check sidebars in all builds, strengthened compliance checkpoints, 7 new chaos files, capstone module added.

## How This Framework Works (For Course Creators)

### Template Architecture
This repo is a **golden template**. To create a course for a new industry:
1. Duplicate this folder
2. Update this root CLAUDE.md with new framework notes
3. Replace `company-context/` with industry-specific scenario
4. Replace `inherited-chaos/` with industry-appropriate messy files
5. Rewrite lesson scripts in `lesson-modules/` for the new domain
6. Update `.claude/agents/` with industry-relevant advisory perspectives
7. Update `course-structure.json` with new module/lesson mapping
8. Update the companion website content

### Key Conventions
- **Lesson scripts** live in `lesson-modules/<id>/CLAUDE.md` — one CLAUDE.md per lesson
- **Slash commands** live in `.claude/commands/` — two per lesson (numbered + branded)
- **Sub-agents** live in `.claude/agents/` — 4 advisory perspectives with distinct personalities
- **Teaching rules** live in `.claude/SCRIPT_INSTRUCTIONS.md` — tone, pacing, adaptive logic, finance-specific rules
- **Company context** lives in `company-context/` — scenario, service details, brand voice
- **Chaos files** live in `inherited-chaos/` — realistic messy content students explore and analyze
- **Templates** live in `templates/` — output format templates for exercises
- **Companion website** lives in `website/` — pre-IDE setup guide (Module 0.0)

### Regulatory & Data Privacy Framework
This course teaches responsible AI tool development in a regulated financial services context:
- **Data Classification:** RED (never send to AI) / AMBER (requires review) / GREEN (safe) — taught in Lesson 1.15
- **Pre-Build Compliance Checklist:** Required before every tool build (template in `templates/pre-build-compliance-checklist.md`)
- **Compliance Checkpoints:** Every build lesson (X.3) includes a compliance review with Raj (compliance agent)
- **Output Disclaimers:** AI-generated content labeled as decision-support, not decision-making
- **Multi-Jurisdiction Awareness:** Tools must account for FINMA, FCA, MAS, GDPR requirements

### Compliance Integration Pattern
Every "build" lesson follows this enhanced flow:
1. Requirements confirmed → Build → Iterate → **Compliance Checkpoint** → Finalize
2. The compliance agent (Raj) reviews each tool and either approves, conditionally approves, or blocks
3. At least one build module includes a "Why Raj Said No" veto scenario (Lesson 4B.3) to teach students that compliance review is a feature, not an obstacle
4. Suitability tools (5.x) and compliance tools (4b.x) include mandatory disclaimers
5. Compliance checkpoints are dynamic — based on what was actually built, not scripted

### Reality Check Pattern
Every build lesson includes a **Reality Check** sidebar that bridges mock data to production:
- What we built (with fictional data)
- What production would require (real data sources, infrastructure, security)
- Engineering handoff notes (what IT/engineering needs to build this for real)
- This prevents students from conflating course tools with production-ready solutions

### Adaptive Learning System
This course uses a two-layer adaptive system:
1. **Pre-module assessment** — AskUserQuestion at the start of each module gauges student's existing knowledge
2. **Smart script instructions** — Claude adjusts depth, pace, and guidance based on assessment results
- Never skip content — always adapt depth instead
- Students with existing accounts get fast-track config, not full signup walkthroughs
- Students new to everything get full guided walkthroughs with encouragement

### CLAUDE.md Hierarchy
```
Root CLAUDE.md (this file)     → Framework conventions, reuse instructions, recent changelog
.claude/SCRIPT_INSTRUCTIONS.md → Teaching rules, tone, patterns, finance-specific rules
lesson-modules/*/CLAUDE.md     → Individual lesson teaching scripts
company-context/*.md           → Persistent scenario context
```

### Navigation Pattern
Every lesson has two slash commands that both work:
- Numbered: `/start-0-1`, `/start-1-1`, `/start-2-1`, etc.
- Branded: `/setup-ide`, `/foundations-intro`, `/build-setup`, etc.

### Student Paths
```
Website Module 0.0 (Pre-IDE Setup) → Module 0 (IDE & Course Setup) → Module 1 (Daily Skills)
                                                                            ↓
                                                              ┌─────────────┼─────────────┐
                                                              ↓             ↓             ↓
                                                        Build Labs    Build Labs    Build Labs
                                                        (Module 2)    (3A/3B+4A/4B) (Module 5)
                                                              ↓             ↓             ↓
                                                              └─────────────┼─────────────┘
                                                                            ↓
                                                                   Module 6 (Capstone)

Module 1 Structure:
├── Core Skills (1.1–1.8)         — mandatory for all students
├── Role Deep-Dives (1.9–1.14)   — recommended, focus on your role
├── Advanced Techniques (1.15–1.18) — optional deep-dives
└── Reference (1.19–1.20)         — troubleshooting & best practices

Build Lab Paths:
├── Senior RM:      Module 2 → 3A → 4A → 5 → 6
├── Junior Analyst:  Module 2 → 3B → 4B → 5 → 6
└── Mixed:          Module 2 → pick from 3A/3B → pick from 4A/4B → 5 → 6
```

## Course Design Principles
These principles were validated through a 4-agent industry critique and a full beta test:

1. **PM-not-engineer model** — Students describe requirements, review output, iterate. They never write code.
2. **Narrative-driven learning** — Everything ties back to Claudius Capital's 90-day mandate. No abstract exercises.
3. **Compliance-first tool design** — Every tool goes through a compliance checkpoint before deployment.
4. **AI as decision-support** — Tools flag, draft, and assist. Humans decide, approve, and own.
5. **Multi-jurisdiction by default** — Tools must work across FINMA, FCA, and MAS regulatory environments.
6. **Institutional-grade output** — Templates, tools, and processes must meet the bar that a regulated firm would actually use.
7. **Daily skills over builds** — Module 1 (practical skills) is the course centrepiece; builds are advanced "Build Labs."
8. **Every exercise produces a deliverable** — Saved to `organized/`, not just discussed in conversation.
9. **Reality bridges mock to real** — Every build lesson connects fictional data to production requirements.

## Quality Assurance
The 4-agent critique methodology is a reusable QA gate for every course built from this template:
1. **Senior practitioner** (e.g., Senior RM) — evaluates practical relevance and workflow realism
2. **Compliance/regulatory** (e.g., CCO) — evaluates regulatory rigor and data handling
3. **Junior professional** (e.g., Analyst) — evaluates learning depth and analytical value
4. **Executive** (e.g., CEO with multi-hat perspective) — evaluates strategic value, deployment readiness, ROI

Each agent reviews the full course independently, then findings are synthesized into a prioritized action plan.

## Development Workflow — Local / GitHub / Vercel

This project follows a **GitHub-first deploy model**. Vercel auto-deploys on every push to `main` — no manual `vercel deploy` needed.

### Setup (one-time, already done)
- GitHub repo: `sjorsbogers/ClaudeCode-for-Private-Banking`
- Vercel project: `cc-for-private-banking` — connected to GitHub, root directory set to `website/`
- Vercel auto-deploys the `website/` Next.js app on every push to `main`

### Every session — start here
```bash
cd "/Users/sjorsbogers/Desktop/CC for Private Banking v2"
git pull origin main          # always sync before working
```

### Making and shipping changes
```bash
# 1. Make changes to files in website/src/ or lesson-modules/ etc.

# 2. Verify the website builds before committing
cd website && npm run build   # must pass with zero errors

# 3. Stage ONLY the files you changed (never git add -A or git add .)
git add website/src/app/path/to/changed-file.tsx
git add website/src/components/ChangedComponent.tsx

# 4. Commit with a clear message
git commit -m "Short description of what changed and why"

# 5. Push — this automatically triggers Vercel to deploy
git push origin main
# Vercel picks up the push and rebuilds website/ → live at:
# https://cc-for-private-banking.vercel.app (usually live in ~1 min)
```

### What NOT to do
- **Don't run `vercel deploy --prod --yes`** — GitHub push handles this automatically now
- **Don't `git add -A` or `git add .`** — stage specific files to avoid committing `.DS_Store`, `.env`, or build artifacts
- **Don't push without building first** — a failed build on Vercel is harder to debug than catching it locally
- **Don't commit `website/.next/`, `website/out/`, or `node_modules/`** — already in `.gitignore`

### On Gemini's recommended practices — what applies here
| Practice | Verdict | Notes |
|----------|---------|-------|
| Commit often | ✅ Yes | After every logical change, not just big features |
| Selective staging | ✅ Yes | Always `git add [specific files]`, never `git add -A` |
| Sync before starting (`git pull`) | ✅ Yes | First command of every session |
| Maintain CLAUDE.md | ✅ Yes | Already done — this file |
| Branching / PRs | ⚠️ Optional | Solo project: main branch is fine for content updates. Use a branch only for large structural changes where you want a rollback point |
| `/install-github-app` (Claude GitHub Actions) | ❌ Not needed | That feature lets Claude work on GitHub issues via CI. Overkill for a course content project — we work locally and push |

## Recent Changes
<!-- Keep last ~5 entries here for quick Claude context. Full history in CHANGELOG.md -->
- **2026-02-24** — v2.1.0: Full website launch (66 pages, all 51 lessons), dark mode, 3-column layout, Tools section, Download button, Installation Step 7 rewritten, `--dangerously-skip-permissions` added to First Session + Module 1.1, Vercel root dir fixed to `website/` (GitHub auto-deploy now works), all Vercel projects connected to GitHub repos.
- **2026-02-19** — v2 complete rebuild. Module 1 expanded (9→20 lessons), companion website added, 7 new chaos files, Reality Check pattern, merged Ship It lessons, capstone module, dynamic compliance checkpoints, 102 slash commands, strengthened sub-agents.
- **2026-02-11** — v1 Beta 1 Realism Audit: 14-workstream overhaul based on 4-agent industry critique.
- **2026-02-10** — v1 Initial project creation.

## File Counts
| Category | Count |
|----------|-------|
| Lesson scripts | 52 (51 lessons, 1.3 split into 1.3a + 1.3b) |
| Slash commands | 104 |
| Sub-agents | 4 |
| Company context | 3 |
| Chaos files | 28 |
| Templates | 5 |
| Framework files | 5 |
| Website files | 12 |
| **Total** | **~213** |
