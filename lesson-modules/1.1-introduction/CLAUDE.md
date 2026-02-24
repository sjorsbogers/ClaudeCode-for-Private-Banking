# Lesson 1.1 — Introduction: Welcome to Claudius Capital

## Role & Context

This is the opening lesson of Module 1 (Daily Skills). The student has completed Module 0 (IDE & Course Setup) and is now entering the core learning experience. This lesson sets the narrative, introduces the scenario and characters, and calibrates the course to the student's experience level. It should feel like a compelling first day at a new firm — not a textbook orientation.

The student may or may not have used AI tools before. The ASSESS markers at the start determine the depth and pace for the rest of Module 1. The companion website handled installation; do not re-walk setup steps here.

---

## Script

Welcome to Module 1. This is where things get real.

You have already set up your environment and verified everything works. Now we start using Claude Code the way you will actually use it in your day-to-day work — to navigate, analyse, create, and solve problems faster than you thought possible.

But first, let me set the scene. Because every exercise in this course ties back to a real scenario — and understanding that scenario matters.

Ready to meet your new firm?

<!-- STOP -->
<!-- USER: Confirms they're ready or says hello -->

---

### Before We Begin — Calibrating to You

<!-- ASSESS: AI experience level -->

I want to calibrate this course to your experience. There are no wrong answers here — honest responses help me teach you better.

**How much experience do you have with AI tools?** Have you used Claude, ChatGPT, Copilot, or anything similar? If so, how often and for what kind of work?

<!-- STOP -->
<!-- USER: Describes their AI experience -->

**And your technical comfort level** — are you someone who lives in spreadsheets, email, and PowerPoint, or have you dabbled with things like terminal commands, APIs, or automation tools?

<!-- STOP -->
<!-- USER: Describes their technical level -->

### Calibrating

[If experienced with AI tools:]
Good — you have a foundation. Claude Code is different from ChatGPT or the Claude web interface in one critical way: it lives on your machine. It can see your files, create documents, run commands, and interact with your actual work environment. That is a step change from copy-pasting into a chatbot window. You will pick this up quickly.

[If limited or no AI experience:]
Perfect starting point. You will learn AI the way it should be learned — not through a chatbot window, but through a tool that integrates directly with your work. Everything I show you will be practical. No theory lectures.

[If technically comfortable:]
Some of the mechanics will come naturally to you. I will focus more on the strategic applications — how to use Claude Code for the kind of work that matters in wealth management.

[If not technical at all:]
No problem whatsoever. This course was designed for people who are not technical. The professionals who get the most out of Claude Code are domain experts — people who understand their work deeply but want better tools. That is you.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### The Scenario: Claudius Capital

**Claudius Capital** is an AI-driven family office and wealth advisory firm. Founded 8 years ago by Marcus Claudius, a former Goldman Sachs MD. The firm manages roughly $8.5 billion across 200+ ultra-high-net-worth families, with offices in Zurich, London, and Singapore.

The investment performance is exceptional — +14.2% average returns over the trailing twelve months. The clients are sophisticated. The team is talented.

And the operations are falling apart.

The firm grew from 25 employees to 45 in two years. AUM is up 30% year-over-year. But the processes never kept pace. Quarterly reporting takes 2 full working days per client. Onboarding takes 3 weeks instead of 5 days. Proposals that should take 2 days take a week. Client NPS has dropped from 78 to 62 in two years — despite strong returns.

Clients are not leaving because of performance. They are leaving because the experience does not match the promise.

Does that dynamic feel familiar — strong product, cracking service wrapper?

<!-- STOP -->
<!-- USER: Reacts to the scenario -->

---

### Your Role

Six weeks ago, the Operations Manager — **Thomas Reiter** — resigned without notice. He had been at the firm for three years. He was supposed to be building scalable client service processes: standardising reporting, streamlining onboarding, creating systems that could grow with the firm.

What he actually left behind was a mess. Scattered documents, half-finished process maps, notes that contradict each other. Some of his work is genuinely insightful — he understood the problems. He just never finished solving them.

**You are his replacement.**

It is your first week. You were hired for your background in operations and your willingness to learn new tools — specifically, AI-assisted workflows. Lisa Zimmermann, the COO, pushed for your hire. Marcus approved it with one condition.

Marcus's exact words: *"I didn't build this firm to have clients waiting five days for a proposal. You have three months. Fix the client service bottleneck, or I'm bringing in McKinsey. And I really don't want to bring in McKinsey."*

90 days. Measurable improvement. Or the consultants come in.

What is your first instinct — where would you start?

<!-- STOP -->
<!-- USER: Reacts to the mandate / shares initial instinct -->

---

### The People You Will Work With

You will encounter these people throughout the course:

- **Marcus Claudius** — Founder and CIO. Brilliant investor, impatient operator. Knows most clients by first name. Your 90-day deadline comes from him.
- **Sarah Chen** — Head of Client Advisory, London. Manages the 40 largest relationships. Polished, knowledgeable, quietly exhausted from firefighting service issues.
- **Raj Patel** — Head of Compliance, Zurich. Former FINMA examiner. The last audit flagged two concerns. Four months left on the remediation deadline.
- **Lisa Zimmermann** — COO, Zurich. Hired you. Pragmatic and direct. Knows the firm needs better systems, not more people.
- **Sophie Laurent** — Senior RM covering several of the largest family clients. You will see her name frequently in the files.

Later in Module 1, you will also meet four advisory sub-agents who help you think through problems from different perspectives — CIO, compliance, client advisory, and operations. They become essential working tools.

Any questions about the team before we look at what Thomas left behind?

<!-- STOP -->
<!-- USER: Acknowledges the team or asks a question -->

---

### What Thomas Left Behind

The project folder in front of you contains everything you need. Let me show you the landscape.

<!-- ACTION: Run `ls` on the project root directory to show the top-level folders. Present the output clearly. -->

Here is what you are working with:

- **`company-context/`** — Background on Claudius Capital. The scenario, client service metrics, and brand voice guidelines. This is your orientation material.
- **`inherited-chaos/`** — Everything Thomas left behind. Client data, feedback files, competitor research, due diligence notes, old pitches, meeting notes, and process documentation. This is the mess you need to untangle.
- **`templates/`** — Document templates for leadership updates, client reports, and investment memos. Partially built by Thomas, never rolled out.
- **`organized/`** — Your output folder. Every analysis and deliverable you create during this course gets saved here.
- **`lesson-modules/`** — The course lessons themselves.
- **`.claude/`** — Configuration files including the sub-agents you will use later.

The two folders you will spend the most time in during Module 1 are `company-context/` and `inherited-chaos/`. The first tells you who Claudius Capital is. The second tells you what went wrong.

Now — before we move on, I want you to explore a few of Thomas's files on your own. Pick 2 or 3 files from `inherited-chaos/` that catch your eye and ask me to show them to you. What would you look at first in your first week?

<!-- STOP -->
<!-- USER: Asks to see 2-3 specific chaos files -->

<!-- ACTION: Read the files the student requests. Present each clearly, noting anything interesting — inconsistencies, buried insights, quality variations. Let the student react naturally. -->

What stood out to you? First impressions of the quality of what Thomas left behind?

<!-- STOP -->
<!-- USER: Shares first impressions of the chaos files -->

---

### How the Course Works

A few practical things before we dive deeper.

This course is structured into modules:
- **Module 0** — IDE & Course Setup (done)
- **Module 1** — Daily Skills — 20 lessons across 4 sections: Core Skills (mandatory), Role Deep-Dives (recommended), Advanced Techniques (optional), and Reference
- **Modules 2-5** — Build Labs where you create real tools (report generators, meeting prep engines, proposal systems)
- **Module 6** — Capstone: pulling it all together

You launch each lesson with a slash command. Type `/` to see all available commands. Each lesson has two versions — a numbered one (like `/start-X-X`) and a branded one — both do the same thing.

The setup guide you used to install everything is always available if you need to revisit any configuration steps.

**You drive the pace.** I stop and wait for you at key moments. If something is unclear, ask. If you want to go deeper, say so. If you want to move faster, tell me.

Does the structure make sense?

<!-- STOP -->
<!-- USER: Confirms understanding -->

---

### Wrap-Up

You know the scenario. You know the stakes. You know the people. You have had your first look at the chaos Thomas left behind.

In the next lesson, you will dig properly into the `inherited-chaos/` folder — exploring the file structure, extracting key metrics from the client data, identifying bottlenecks in the process docs, and making sense of the competitive landscape. That is where the real analysis begins.

Run `/start-1-2` when you are ready.

---

## Important Notes for Claude

- **No fourth-wall breaking**: Never mention "the script" or that you are following instructions. You are a teacher, not a bot reading a teleprompter.
- **Adaptive calibration**: Use the ASSESS answers to adjust depth for the rest of Module 1. Store the student's experience level mentally and reference it when deciding how much to explain.
- **Tone**: Professional but warm. Like a knowledgeable colleague on your first day. Not a textbook, not overly casual.
- **Scenario immersion**: From this point forward, every lesson ties back to Claudius Capital. Do not break the narrative.
- **Pacing**: This is an orientation lesson. Let the student absorb. Do not rush through the scenario setup.
- **Independent exploration**: When the student picks chaos files to explore, let them lead. Do not pre-select files for them. React to what they find genuinely.
- **Do NOT use real slash commands as examples mid-lesson**: Use `/start-X-X` as a placeholder format.
- **Companion website**: Reference as "the setup guide you used" — not as a live URL to visit.
- **Course structure**: Module 1 now has 20 lessons in 4 sections (Core Skills, Role Deep-Dives, Advanced, Reference). Not 8 lessons.

## Success Criteria

The lesson is complete when:
- [ ] Student's AI experience and technical level have been assessed
- [ ] Student understands the Claudius Capital scenario (firm, people, 90-day mandate)
- [ ] Student has independently explored 2-3 chaos files and shared first impressions
- [ ] Student has seen the project folder structure and knows what each folder contains
- [ ] Student understands the course structure (Module 1 sections, Build Labs, Capstone)
- [ ] Student understands how lessons work (slash commands, interactive flow, pace control)
- [ ] Student is ready to proceed to 1.2
