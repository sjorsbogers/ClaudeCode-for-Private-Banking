# Lesson 1.3a — Extract, Synthesise & Create

## Role & Context

You are teaching Lesson 1.3a of the CC for Private Banking v2 course. The student has completed 1.1 (Introduction) and 1.2 (File Exploration). They know the Claudius Capital scenario and have explored the chaos files.

This lesson teaches the core skill of extracting data from messy files, synthesising it into structured insights, and creating a polished deliverable — a leadership update for Marcus. This is the first half of the old Lesson 1.3, now split for better pacing.

The key v2 addition: a structured "critique and improve" step where Claude identifies weaknesses in its own output and the student decides what to fix.

---

## Script

### Opening

You've explored the chaos Thomas left behind. You know the landscape. Now let's do something with it.

Today you'll learn three skills that you'll use constantly:
1. **Extract** — pull specific data points from messy, unstructured files
2. **Synthesise** — combine findings from multiple sources into a coherent narrative
3. **Create** — produce a polished deliverable ready for a senior audience

The deliverable: a **leadership update for Marcus** — a concise briefing on the state of operations that he can read in 5 minutes and act on.

<!-- STOP -->
<!-- USER: Confirms ready -->

---

### Exercise 1: Extract Key Data Points

Let's start by pulling the numbers Marcus cares about. He's a data-driven leader — he wants specific metrics, not vague observations.

<!-- ACTION: Read the following chaos files and extract key operational metrics:
- inherited-chaos/client-data/client-portfolio-summary.csv (or similar data file)
- inherited-chaos/client-feedback/ (NPS data, satisfaction scores)
- inherited-chaos/process-docs/ (process timing, bottleneck data)

Present the extracted data in a structured table: Metric | Current Value | Source File | Notes -->

Here's what I found across the files. Let me show you the raw extraction:

<!-- STOP -->
<!-- USER: Reviews the extracted data -->

Notice how the data is scattered across multiple files, in different formats, with some inconsistencies. That's typical of what you inherit when someone leaves without a proper handover. The skill is knowing what to extract and from where.

---

### Exercise 2: Synthesise Into a Narrative

Raw data isn't useful to Marcus. He doesn't want a spreadsheet — he wants a story. "Here's where we stand, here's what's at risk, here's what needs to happen."

Let me synthesise those data points into a draft leadership update.

<!-- ACTION: Create a leadership update draft for Marcus. Structure:
1. Executive Summary (3-4 sentences)
2. Key Metrics Dashboard (table: metric, current, target, gap)
3. Critical Issues (top 3, ranked by urgency)
4. Quick Wins (2-3 things that can be fixed in 30 days)
5. Recommendation (what to prioritise)

Use data from the chaos files. Be specific — reference actual numbers. The tone should be direct and actionable, matching Marcus's communication style. -->

<!-- STOP -->
<!-- USER: Reviews the draft -->

What do you think? Does this read like something Marcus would find useful? Anything missing or off?

<!-- STOP -->
<!-- USER: Provides feedback -->

---

### Exercise 3: Critique and Improve

Here's a skill that separates good AI users from great ones: **making Claude critique its own work.**

Let me look at this draft with fresh eyes and identify its weaknesses.

<!-- ACTION: Analyse the draft leadership update and identify 3-5 specific weaknesses. Be honest and specific:
- Is any claim unsupported by the source data?
- Are the recommendations too vague?
- Is anything missing that Marcus would ask about?
- Does the tone match what a CIO expects?
- Are there data quality caveats that should be noted?

Present each weakness with: What's wrong | Why it matters | Suggested fix -->

<!-- STOP -->
<!-- USER: Reviews the critique and decides which fixes to implement -->

You get to decide which of these to fix. Not every critique needs action — sometimes the draft is fine for the audience and purpose. The point is that you reviewed it critically before sending it.

Which fixes do you want me to implement?

<!-- STOP -->
<!-- USER: Selects which fixes to apply -->

<!-- ACTION: Implement the selected fixes and present the revised leadership update -->

**Curiosity nudge:** If you were actually sending this to your own leadership, what would you change? What does your firm's internal communication look like compared to this?

<!-- STOP -->
<!-- USER: Reflects on the question -->

---

### Exercise 4: Create the Final Deliverable

Let's finalise this and save it properly.

<!-- ACTION: Save the polished leadership update to organized/leadership-updates/marcus-briefing-operations-status.md -->

Your first professional deliverable is saved. Marcus has his briefing.

<!-- STOP -->

---

### Wrap-Up

Here's what you learned:

| Skill | What You Did |
|-------|-------------|
| **Extract** | Pulled specific metrics from scattered, messy files |
| **Synthesise** | Combined data into a coherent narrative with structure |
| **Critique** | Made Claude identify weaknesses in its own work |
| **Create** | Produced a polished leadership update ready for a CIO |

The critique-and-improve step is one of the most powerful patterns in AI-assisted work. You'll use it constantly — in reports, proposals, memos, anything that matters.

**Next up:** Lesson 1.3b — Analyse & Research. You'll learn to cross-reference sources, verify claims, and produce analysis with proper source attribution.

When you're ready, run `/start-1-3b` to continue.

---

## Important Notes for Claude

- Save the leadership update to `organized/leadership-updates/` — never leave deliverables only in conversation
- The critique step is the key teaching moment — make the weaknesses specific and genuine, not token criticisms
- Match Marcus's communication style: direct, data-driven, no fluff
- If the student pushes back on a critique point, respect their judgment — they may be right

## Success Criteria

- [ ] Student extracted data from multiple chaos files
- [ ] Draft leadership update created with proper structure
- [ ] Claude self-critiqued the draft with specific, genuine weaknesses
- [ ] Student decided which fixes to apply (exercised judgment)
- [ ] Final deliverable saved to organized/leadership-updates/
- [ ] Student reflected on real-world application (curiosity nudge)
