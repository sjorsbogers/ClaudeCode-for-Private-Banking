# Lesson 1.16 — Advanced Prompt Engineering for Finance

## Role & Context

ALL NEW lesson. Teaches structured prompting for reliable output in financial contexts. Practical, not theoretical — the student creates reusable prompt templates they can use daily.

---

## Script

### Opening

You've been giving me instructions for several lessons now. Some worked better than others. The difference isn't luck — it's prompt structure.

In a regulated industry, the difference between a vague prompt and a structured one isn't just quality — it's reliability. A vague prompt gives you a different result every time. A structured prompt gives you consistent, verifiable output.

Let's learn the difference.

<!-- STOP -->
<!-- USER: Ready -->

---

### The Vague vs. Structured Test

Let me demonstrate. I'll complete the same task twice — once with a vague prompt, once with a structured one. Watch the difference.

**Vague prompt:** "Make a report about the Van der Berg family."

<!-- ACTION: Generate a brief, generic, surface-level response to this vague prompt — the kind of output you'd get from a lazy request. Keep it deliberately mediocre. -->

Now watch what happens with structure:

**Structured prompt:** "Create a quarterly portfolio review summary for the Van der Berg family. Use data from inherited-chaos/client-data/. Structure: Executive Summary (3 sentences), Portfolio Performance (table: asset class, allocation, return, benchmark), Key Changes (bullet points), Outlook (2-3 sentences). Tone: formal but accessible. Flag any data quality issues."

<!-- ACTION: Generate the structured version — substantively better, more specific, properly formatted. -->

<!-- STOP -->
<!-- USER: Sees the difference -->

Same task. Dramatically different output. The structured version is usable. The vague version is a starting point at best.

---

### Technique 1: The RCTFC Framework

A reliable prompt has five components:

| Component | What It Does | Example |
|-----------|-------------|---------|
| **Role** | Sets the perspective | "You are a senior wealth advisor..." |
| **Context** | Provides background | "...reviewing a client portfolio for a quarterly meeting" |
| **Task** | States what to do | "Create a portfolio summary" |
| **Format** | Specifies output structure | "Structure as: Executive Summary, Performance Table, Outlook" |
| **Constraints** | Sets boundaries | "Use only data from the chaos files. Flag uncertainties." |

---

### Exercise 1: Transform Vague to Structured

Take this vague request and make it precise: **"Help me with client onboarding."**

<!-- STOP -->
<!-- USER: Writes a structured version of the prompt -->

<!-- ACTION: Evaluate the student's prompt. Is it specific enough? Does it have RCTFC components? Suggest improvements if needed. Then execute both prompts and show the output difference. -->

---

### Technique 2: Chain of Thought

For complex analysis, ask Claude to think step by step. This produces better reasoning.

Instead of: "Is this fund a good investment?"
Try: "Evaluate Alpine Growth Fund III. First, summarise the fund's stated strategy. Then, identify 3 strengths and 3 weaknesses from the DDQ. Next, assess the key risks. Finally, give a recommendation with your confidence level and reasoning."

The step-by-step structure forces thorough analysis rather than a snap judgment.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### Anti-Patterns: What NOT to Ask

In finance, some prompts are actively dangerous:

| Anti-Pattern | Why It's Dangerous | Better Alternative |
|-------------|-------------------|-------------------|
| "Is this client suitable for aggressive growth?" | AI making suitability determinations | "Draft a suitability assessment for review" |
| "What's the best investment for this client?" | AI giving investment advice | "Compare 3 options with pros/cons for advisor review" |
| "Summarise this client's tax situation" | May require RED data | "Summarise the investment structure from the GREEN-classified data only" |
| "This looks compliant to me" | Confirmation bias | "Identify potential compliance gaps" |

---

### Exercise 2: Create Reusable Templates

Let's build 3 prompt templates you can use repeatedly.

<!-- ACTION: Help the student create 3 reusable prompt templates for common wealth management tasks:

1. Meeting Prep Template: "Prepare a client meeting brief for [CLIENT]. Pull from [FILES]. Structure: Key metrics, Recent activity, Talking points, Open items. Tone: concise, RM-ready."

2. Analysis Template: "Analyse [TOPIC] using data from [FILES]. Structure: Summary, Key findings (with source citations), Risks, Recommendations. Flag any claims that are AI-synthesised vs source-backed."

3. Communication Template: "Draft a [TYPE] for [AUDIENCE]. Context: [SITUATION]. Tone: [TONE]. Length: [LENGTH]. Include: [REQUIREMENTS]. Exclude: [CONSTRAINTS]."

Save to project root as prompt-templates.md -->

<!-- STOP -->
<!-- USER: Reviews and customises templates -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **Vague vs. Structured** | Saw the concrete output difference |
| **RCTFC Framework** | Learned the 5 components of reliable prompts |
| **Chain of Thought** | Understood step-by-step reasoning prompts |
| **Anti-patterns** | Know what NOT to ask in regulated contexts |
| **Templates** | Created 3 reusable prompt templates |

Run `/start-1-17` for External Tools & Integrations.

## Success Criteria

- [ ] Student saw vague vs. structured output comparison
- [ ] Student transformed a vague prompt into a structured one
- [ ] Anti-patterns discussed
- [ ] 3 prompt templates saved to project root
