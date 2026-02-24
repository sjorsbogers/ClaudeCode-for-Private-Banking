# Lesson 1.2 — File Exploration: Finding What Matters in the Mess

## Role & Context

This is the second lesson of Module 1 Core Skills. The student has been introduced to Claudius Capital and has had a first glance at the chaos files. Now they dig in properly — learning to navigate, search, extract, and compare across a messy file structure. This lesson teaches foundational Claude Code skills (directory browsing, file reading, content search, cross-referencing) through the narrative lens of "your first week, making sense of what Thomas left."

Every exercise produces a saved deliverable in `organized/analysis/`. The student should leave this lesson with 3-4 analysis files and a clear picture of the firm's situation.

---

## Script

Welcome back. In the last lesson, you got oriented at Claudius Capital and glimpsed the chaos Thomas left behind. Now we get practical.

Your job this week is to understand the scope of what you are working with. That means digging into `inherited-chaos/` systematically — not just browsing, but extracting real intelligence from messy files.

This is one of Claude Code's most immediately useful capabilities: making sense of a workspace full of unfamiliar content. Let's put it to work.

<!-- STOP -->
<!-- USER: Confirms they're ready -->

---

### Exercise 1: Map the Territory

Before diving into individual files, let's see the full picture. Ask me to show you everything in the inherited-chaos folder — the complete structure.

Something like: "Show me the full folder structure of inherited-chaos, including all subfolders and files."

<!-- USER: Asks Claude to explore the inherited-chaos/ directory -->

<!-- ACTION: List the contents of inherited-chaos/ recursively, showing the complete tree view. Present it clearly and describe each subfolder:
- client-data/ — portfolio summaries, performance notes, individual client profiles
- client-feedback/ — 4 quarters of feedback plus a client correspondence folder
- competitor-research/ — research on Goldman Sachs PWM, UBS Family Office, boutique competitors
- due-diligence/ — fund notes, compliance checklists, meeting minutes, a weak memo example
- events-sponsorship/ — (empty or sparse — Thomas never got to this)
- fund-docs/ — (empty or sparse)
- meeting-notes/ — (empty or sparse)
- pitches-and-proposals/ — competitor comparison, fee template, old pitch notes
- process-docs/ — Thomas's handoff notes, reporting workflow, onboarding process
- research-notes/ — (empty or sparse)
-->

Notice the pattern: some folders are well-populated, others are nearly empty. That tells you something about Thomas's priorities — he spent time on client data, feedback tracking, and competitor research. He barely touched events, fund documentation, or research notes. Gaps in documentation are data too.

What categories jump out to you as the most important for your 90-day mandate?

<!-- STOP -->
<!-- USER: Identifies which categories matter most -->

---

### Exercise 2: Client Data Deep Dive

Let's start where the money is — literally. The client data folder contains the core metrics that define Claudius Capital's business.

Ask me something like: "Read the client portfolio summary and the quarterly performance notes. What are the key numbers — AUM, client count, performance, anything notable?"

<!-- USER: Asks Claude to explore client data files -->

<!-- ACTION: Read inherited-chaos/client-data/client-portfolio-summary.csv and inherited-chaos/client-data/quarterly-performance-notes.md. Present key findings:
- Total AUM breakdown by client
- Mixed currencies (EUR, USD, CHF) — no standard
- Inconsistent date formats — is 03/04/2025 March 4th or April 3rd?
- Missing fields in some records
- Performance figures and any notable outliers
- Calculate summary stats: average AUM per client, total client count in the CSV, range of portfolio sizes

Save a structured summary to organized/analysis/client-data-overview.md -->

There are the numbers. But notice the data quality issues — mixed currencies, inconsistent dates, blank fields. This is what real data looks like in a growing firm where nobody set standards early. Every one of those inconsistencies is a risk: a report sent with the wrong currency symbol, a date misread across jurisdictions.

<!-- STOP -->
<!-- USER: Reacts to the data quality findings -->

---

### Exercise 3: Process Documentation — Where Are the Bottlenecks?

Now let's look at the process documentation. Thomas wrote handoff notes, a reporting workflow document, and an onboarding process file. These tell us how things actually work (or don't work) at the firm.

Ask me: "Read all the process documentation files and identify the biggest bottlenecks. Where is the most time being wasted?"

<!-- USER: Asks Claude to analyse process docs -->

<!-- ACTION: Read all three files in inherited-chaos/process-docs/. Synthesise findings into a bottleneck analysis:
- Reporting workflow: identify each step, time estimates, manual vs. automated work
- Onboarding process: note the v3-FINAL-v2 naming (a red flag in itself), identify delays
- Handoff notes: extract Thomas's own assessment of what's broken and what he recommended
- Highlight that Thomas identified the same problems we're seeing — he just never solved them

Save the bottleneck analysis to organized/analysis/process-bottleneck-review.md -->

The reporting workflow alone tells the story: manual data pulls from three systems, copy-paste into Word, manual chart creation, a review cycle that adds days. Thomas documented the problem meticulously. He just never got to the solution.

**Curiosity nudge:** What would you ask about these processes that Thomas apparently never thought to ask? What's the question behind the question?

<!-- STOP -->
<!-- USER: Responds with their own questions about the processes -->

Good instinct. The best analyses come from asking questions that the data doesn't answer directly — the gaps are as informative as the content.

---

### Exercise 4: Competitive Landscape

The last major area is competitor research. Thomas tracked three categories: a major US bank (Goldman Sachs PWM), a major Swiss bank (UBS Family Office), and boutique competitors. This is different from the process analysis — this is about external positioning.

Ask me: "Read the competitor research files and give me a competitive landscape summary. Where does Claudius Capital stand relative to its competitors — strengths, weaknesses, threats?"

<!-- USER: Asks Claude to analyse competitor research files -->

<!-- ACTION: Read all three files in inherited-chaos/competitor-research/ plus inherited-chaos/pitches-and-proposals/competitor-comparison.md (the comparison table). Synthesise a competitive landscape analysis:
- Where Claudius Capital wins: investment performance, personal service, niche capabilities (Sharia)
- Where Claudius Capital loses: digital/reporting, client portal, onboarding speed, scale
- Key threats: Alpine Wealth Partners (already won a client), Goldman/UBS digital transformation
- Thomas's own notes about competitive pressure
- The competitor comparison table's self-assessment: "WEAK" on digital/reporting

Save the competitive landscape analysis to organized/analysis/competitive-landscape.md -->

The picture that emerges is clear: Claudius Capital is winning on investment performance and losing on everything around it. The boutique competitors — especially Alpine Wealth Partners — are smaller but faster. They have automated reporting, digital onboarding, and client portals. One of them already won a client away from Claudius Capital.

This is why Marcus is worried. Performance alone is not enough when the service experience is falling behind.

<!-- STOP -->
<!-- USER: Reacts to the competitive landscape -->

---

### What You Learned

Let's recap what you just did — and what it means for your work.

| Skill | What You Did | Claude Code Capability |
|-------|-------------|----------------------|
| **Map** | Surveyed the full inherited-chaos structure | Recursive directory listing |
| **Extract** | Pulled key metrics from client data | File reading and data analysis |
| **Analyse** | Identified bottlenecks in process docs | Multi-file synthesis |
| **Benchmark** | Assessed competitive positioning | Cross-file comparison |

You now have three analysis files saved in `organized/analysis/`:
1. Client data overview
2. Process bottleneck review
3. Competitive landscape

These are not throwaway exercises — they form the evidence base you will reference throughout the course. When you build tools in Module 2 and beyond, these analyses tell you what to build and why.

---

### Wrap-Up

You can now navigate and make sense of a messy workspace. But finding and analysing files is just the start — the real value is in what you create from them.

In the next lesson, you will learn to **extract, synthesise, and create** — pulling insights from multiple chaos files, combining them into a coherent narrative, and producing your first leadership deliverable for Marcus.

Run `/start-1-3a` when you are ready.

---

## Important Notes for Claude

- **Auto-save all outputs**: Every exercise that produces an analysis must be saved to `organized/analysis/`. Do not leave deliverables only in conversation.
- **Let the student lead Exercise 1**: When they identify important categories, validate their instinct and build on it — do not just move on.
- **Data quality matters**: When showing client data, emphasise the real-world implications of inconsistencies (wrong currency in a report, date confusion across jurisdictions). This is not an abstract problem.
- **Curiosity nudge**: The prompt after Exercise 3 is intentional. Give the student space to think before moving on.
- **Competitor analysis is distinct**: Exercise 4 is about external positioning, NOT internal process review. Keep it distinct from Exercise 3.
- **Do NOT use real slash commands as examples mid-lesson**: Use `/start-X-X` as a placeholder format.
- **Tone**: First-week energy — the student is making discoveries, building confidence, forming opinions about the firm.

## Success Criteria

The lesson is complete when:
- [ ] Student has mapped the full inherited-chaos folder structure
- [ ] Student has extracted key metrics from client data (AUM, client count, data quality issues)
- [ ] Student has identified process bottlenecks from Thomas's documentation
- [ ] Student has assessed the competitive landscape
- [ ] Three analysis files are saved in organized/analysis/
- [ ] Student has responded to at least one curiosity nudge
- [ ] Student is ready to proceed to 1.3a
