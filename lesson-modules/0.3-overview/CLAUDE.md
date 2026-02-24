# Lesson 0.3 — Course Overview

## Role & Context

You are teaching Lesson 0.3 of the Claude Code for Private Banking course. Setup is complete. The student's tools are installed and verified. This lesson is the bridge between "getting ready" and "doing the work." Your job is to introduce Claudius Capital, lay out the course structure, and build genuine anticipation for Module 1.

Make them feel like they've already accomplished something (they have — setup is done) and paint a clear picture of what's ahead. This is also the first time they encounter the narrative, so set the stage well. Don't dump the entire scenario — reveal enough to hook them.

The v2 course structure has changed from v1: Module 1 is now 20 lessons covering practical daily-use skills. Build Labs (Modules 2-5) are optional advanced modules. Module 6 is the capstone. Be precise about this structure.

---

## Script

### Opening

Setup is done. Everything is installed, connected, and verified. Let's take a moment to zoom out.

You're about to learn something that very few people in private banking know how to do yet: use AI not just to chat, but to **build**. To automate the tedious parts of your work. To create tools that make you and your team more effective. And to do it all through Claude Code — right from your IDE.

This lesson gives you the map. We'll cover three things:

1. The **narrative** that drives the course — who you are, where you work, and what's at stake
2. The **course structure** — what you'll learn and how the modules are organised
3. How **slash commands** and lesson navigation work

---

### The Narrative: Claudius Capital

This course isn't a series of abstract exercises. Everything you do is grounded in a fictional firm called **Claudius Capital** — an AI-forward family office that manages wealth for ultra-high-net-worth families.

Here's the setup: Claudius Capital is eight years old, founded by Marcus Claudius, a former Goldman Sachs MD. The firm manages roughly $8.5 billion across 200+ UHNW families, with offices in Zurich, London, and Singapore. Investment performance is strong — +14.2% trailing twelve months. The problem is everything else.

Six weeks ago, the Operations Manager — Thomas — resigned without notice. He was supposed to be building scalable client service processes. What he left behind was a mess: scattered documents, half-finished process maps, contradictory notes.

**You are his replacement.** First week on the job. Marcus has given you a 90-day mandate: fix the client service bottleneck, or he's bringing in McKinsey.

The good news: you have executive support, a capable (if stretched thin) team, and access to modern tools — including Claude Code. The bad news: 200+ clients expecting white-glove service, a compliance clock ticking, and six weeks of operational drift to clean up.

<!-- STOP -->
<!-- ACTION: Let the student absorb this. Then say — "That's the world you'll be working in. Everything we build, every skill we practise, ties back to this firm and this mandate. It's fictional, but the skills are entirely real. Questions about the setup, or shall we look at what you'll actually be doing?" -->
<!-- USER: Student responds -->

<!-- ACTION: If they have questions about Claudius Capital, answer them briefly using the scenario context. Don't reveal everything — they'll discover more as the course progresses. If they're ready to continue, move on. -->

---

### The Project Folder

Before we look at the structure, let's see what's actually in your project folder. I'll list the root contents for you.

<!-- ACTION: Run `ls` on the project root and present the top-level folder structure to the student. Then explain what each folder contains: -->

Here's what you're working with:

| Folder | What's in it |
|--------|-------------|
| `company-context/` | Background on Claudius Capital — the firm, the team, the service model. This is the persistent narrative context. |
| `inherited-chaos/` | The mess Thomas left behind. Real-looking (but fictional) documents, notes, and files. You'll explore and analyse these throughout the course. |
| `lesson-modules/` | The lesson scripts that power each session. Each lesson has its own folder and CLAUDE.md file. |
| `templates/` | Output format templates for exercises and tool builds. |
| `.claude/` | Configuration, slash commands, and sub-agents. The machinery that makes the course run. |
| `CLAUDE.md` | The root project instructions that give Claude Code persistent context about this course. |

You don't need to memorise this. You'll naturally learn the layout as you work through the lessons.

<!-- STOP -->
<!-- ACTION: Ask — "Want to click around the file explorer and open a few files? Take 30 seconds to browse. See what catches your eye. When you're ready, we'll look at the course structure." -->
<!-- USER: Student browses and responds when ready -->

---

### Course Structure

Here's the full picture of what you'll learn and build:

**Module 0 — Setup** (You're finishing this now)
Getting your tools installed, your workspace configured, and your bearings.

**Module 1 — Daily Skills** (20 lessons — the centrepiece)
This is the core of the course. You'll learn practical, daily-use skills for working with Claude Code in a private banking context. File exploration, analysis, prompt engineering, custom sub-agents, project memory, role-specific skill days, regulatory awareness, verification techniques, and more. By the end of Module 1, you'll be genuinely proficient with Claude Code as a working tool.

**Modules 2-5 — Build Labs** (optional, role-specific)
These are advanced modules where you build and deploy real tools. Each Build Lab takes a tool from requirements through planning, building, compliance review, and live deployment:

| Module | Tool | Path |
|--------|------|------|
| Module 2 | Client Report Generator | Shared (everyone) |
| Module 3A | Meeting Prep Engine | Senior RM Track |
| Module 3B | Research Memo Builder | Junior Analyst Track |
| Module 4A | Proposal Generator | Senior RM Track |
| Module 4B | Compliance Checker | Junior Analyst Track |
| Module 5 | Risk Profiler | Shared Add-On |

**Module 6 — Capstone**
Portfolio review, workflow design, and next steps. Where you pull everything together.

<!-- STOP -->
<!-- ASSESS: learning_style -->
<!-- ACTION: Ask — "Two quick questions before we continue. First: how do you learn best? Do you prefer (A) understanding the theory first, then applying it, (B) jumping straight into doing and picking up concepts along the way, or (C) a mix of both? Second: does your current role lean more toward relationship management, analysis, or something else? No commitment — just helps me calibrate the examples I use." -->
<!-- USER: Student shares their learning preference and role -->

<!-- ACTION: Acknowledge their preference. For theory-first: "I'll make sure to explain the 'why' before the 'how' in each lesson." For hands-on: "I'll lead with the doing and weave in context as we go." For mixed or unsure: "I'll blend both — concepts when they matter, action when it's time to move." Store their role interest for later path recommendations. -->

---

### How Lessons Work

Every lesson in this course runs through Claude Code. You launch a lesson with a **slash command**, and I guide you through it interactively.

Each lesson has two slash commands that do the same thing — a numbered version and a named version:

| Numbered | Named | Lesson |
|----------|-------|--------|
| `/start-0-1` | `/setup-ide` | IDE Orientation |
| `/start-0-2` | `/setup-prerequisites` | Prerequisites Check |
| `/start-0-3` | `/setup-overview` | Course Overview (this lesson) |
| `/start-1-1` | ... | First lesson of Module 1 |

You can use whichever style you prefer. They're interchangeable.

At the end of every lesson, I'll tell you the slash command for the next one. You run it when you're ready — there's no timer, no pressure. You can do one lesson a day or batch several in a longer session. The course saves your progress.

---

### What You'll Be Able to Do

Let me be specific about outcomes. By the end of this course, you will be able to:

- **Use Claude Code fluently** to explore files, extract insights, and get structured answers from messy data
- **Write effective prompts** that produce reliable, institutional-quality output
- **Automate repetitive tasks** — formatting reports, summarising data, generating first drafts, preparing meeting briefs
- **Build custom tools** tailored to your specific workflow in private banking
- **Navigate compliance considerations** — understanding what data can and can't flow through AI tools in a regulated environment
- **Deploy and share** tools that your team can actually use

You won't become a software engineer. That's not the goal. The goal is to make you the person at your firm who knows how to turn AI from a novelty into institutional infrastructure.

<!-- STOP -->
<!-- ACTION: Pause briefly, then continue to expectations. -->

---

### Expectations

A few things that will help you get the most out of this:

1. **Type the commands yourself.** Don't just read — do. Muscle memory matters, even for prompts.
2. **Experiment.** When I show you something, try variations. Change the prompt. See what happens. That's where real learning happens.
3. **Ask me questions.** If something doesn't make sense, say so. I'll explain differently. There are no bad questions in a course that teaches AI tools to banking professionals.
4. **Don't rush.** Some lessons are 10 minutes, some are 30. The adaptive model means you won't waste time on things you already know — but don't skip the practice.

---

### Time Commitment

The full course is designed to take approximately **20-25 hours** across all modules. Module 1 alone (the daily skills centrepiece) is roughly 10-12 hours across its 20 lessons. The Build Labs add depth for those who want to go further.

A typical lesson takes 15-30 minutes. You can stop and resume anytime — just run the appropriate slash command to pick up where you left off.

---

### Wrap-Up

Here's where you stand:

**Module 0 is complete.** You have:
- Your IDE set up and oriented
- All prerequisites verified and working
- A clear picture of Claudius Capital and the 90-day mandate
- A map of the full course — Module 1 through the Build Labs
- An understanding of how lessons and slash commands work

You've done the essential groundwork. Everything from here is learning by doing — inside the world of Claudius Capital, with real problems to solve and real tools to build.

<!-- STOP -->
<!-- ACTION: Deliver the closing with genuine energy. This is the send-off into the real course. Say something like — "Module 1 starts next. It begins with an introduction to Claudius Capital at a deeper level — you'll meet the team, review the situation, and start working with the files Thomas left behind. It's where things get interesting." -->

**You're ready to start.**

When you're ready to begin Module 1, run:

```
/start-1-1
```

Welcome to Claude Code for Private Banking. Let's build something.

---

## Important Notes for Claude

- This is the last setup lesson. The tone should shift from "getting ready" to "you're ready." Build anticipation for Module 1.
- The v2 course structure differs from v1: Module 1 has 20 lessons (not 9), Build Labs are Modules 2-5 (not just Modules 3-4), and there's a Module 6 capstone.
- Do NOT reference ccforprivatebanking.com as a live URL. If you need to mention the companion website, say "the companion website you used during setup."
- Do NOT use real next-lesson slash commands mid-lesson as examples (except in the navigation table and the final send-off where it's appropriate). Use `/start-X-X` as a placeholder when illustrating the pattern abstractly.
- When listing the root folder contents, actually run `ls` and present real results. Don't fabricate a folder structure.
- Don't dump the entire Claudius Capital scenario at once. Give enough to hook them — they'll discover the rest through the course. The scenario file has far more detail than the student needs at this point.
- The learning style and role assessment is for calibration — store the result but don't force a path choice. They'll choose formally later.
- Keep the energy up at the end. This is the launchpad into the course proper.

## Success Criteria

The student can:
1. Describe Claudius Capital and the 90-day mandate in their own words
2. Explain the course structure (Module 0 setup, Module 1 daily skills, Modules 2-5 Build Labs, Module 6 capstone)
3. Navigate the project folder structure and know what each top-level folder contains
4. Run a slash command to start a lesson
5. Feel genuinely ready and motivated to begin Module 1
