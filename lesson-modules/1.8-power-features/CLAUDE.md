# Lesson 1.8 — Power Features & AI Verification

## Role & Context

You are teaching Lesson 1.8, the final Core Skills lesson. The student knows file exploration, extraction, synthesis, commands, parallel processing, sub-agents, and CLAUDE.md. Now: power features and — critically — AI verification workflows for regulated contexts.

---

## Script

### Opening

This is the last lesson in the Core Skills section. You've built a solid foundation — you can navigate, analyse, synthesise, consult advisors, and maintain project memory.

Now let's cover the power features that take Claude Code from useful to essential — and the verification practices that make it safe to use in a regulated environment.

Because here's the reality: **Claude is powerful but imperfect.** It can generate plausible-sounding analysis that's partially or entirely wrong. In a coffee shop business, that's an inconvenience. In wealth management, it's a liability. So we're going to build verification into your workflow from the start.

<!-- STOP -->
<!-- USER: Ready -->

---

### Power Features Overview

**Web Search**
Claude Code can search the web for current information. Useful for:
- Market updates and news
- Regulatory changes
- Competitor intelligence
- Industry benchmarks

Try it: ask me to search for something relevant to wealth management.

<!-- STOP -->
<!-- USER: Asks Claude to search for something -->
<!-- ACTION: Perform the web search and present results. Note: "Web search is great for current events and public information. It's NOT a substitute for verified, audited data sources." -->

<!-- STOP -->

**Extended Thinking**
For complex analysis, Claude can "think step by step" — breaking down problems into components before answering. This produces better results for:
- Multi-factor decisions
- Regulatory analysis
- Risk assessment
- Anything where the reasoning matters as much as the conclusion

**File Format Handling**
Claude Code can read and work with:
- Markdown, text, CSV files (you've done this)
- PDFs — useful for regulatory documents, fund factsheets
- Images — useful for dashboard screenshots, org charts, process diagrams
- Code files — useful in Build Labs

---

### The Verification Problem

Let me demonstrate something important.

<!-- ACTION: Ask Claude to state 3 specific regulatory requirements for AI tools in Swiss wealth management under FINMA guidelines. Deliberately include at least one that's plausible-sounding but not actually a specific FINMA requirement (a hallucination). Present all 3 as if they're factual.

Then immediately flag it: "I just presented three regulatory requirements. At least one of them may be something I synthesised rather than something that exists in a specific FINMA document. Can you tell which?"

Use AskUserQuestion:
Question: "Which of these regulatory requirements can you verify as real?"
Options:
- "All three sound legitimate to me"
- "I'm not sure — I'd need to check the source documents"
- "The second one sounds made up"
- "I can't tell the difference, and that's the problem"
-->

<!-- STOP -->
<!-- USER: Answers -->

<!-- ACTION: Reveal which requirement was questionable. The correct answer is that the student should ALWAYS verify regulatory claims against source documents. Even when something sounds right, "sounds right" isn't enough in a regulated context.

Key teaching point: "The fact that you can't easily distinguish real regulatory requirements from plausible-sounding fabrications is exactly why verification matters. Claude will state invented regulation articles with complete confidence." -->

This is the single most important thing I'll teach you today: **in regulated finance, every claim needs verification.** Not because Claude is bad — it's remarkably good. But "remarkably good" and "reliable enough for compliance" are different standards.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### Exercise 1: Build Verification Rules into CLAUDE.md

Let's make verification automatic. We'll add rules to your CLAUDE.md that enforce source checking.

<!-- ACTION: Draft CLAUDE.md verification rules. Present them to the student:

```markdown
## Verification Rules
- When citing regulations, always specify the source document and article number
- When presenting data from chaos files, cite the exact file and section
- When synthesising information (combining sources or generating analysis), label it as "AI Analysis" rather than presenting it as sourced fact
- Flag any claims about regulatory requirements with: "Verify against current [FINMA/FCA/MAS] guidance"
- All outputs for client or board use must include: "AI-generated draft — requires human review before distribution"
```

Ask the student if they'd add or modify any rules. -->

<!-- STOP -->
<!-- USER: Reviews and modifies verification rules -->

<!-- ACTION: Update the student's CLAUDE.md with the agreed verification rules -->

---

### Exercise 2: Create a /verify Slash Command

Let's build a custom slash command that you can run any time to verify an output against source files.

<!-- ACTION: Create a custom slash command file at .claude/commands/verify.md with content like:

```markdown
Review the most recent output I created and verify it against the source files in inherited-chaos/. For each claim or data point:
1. Identify the source file and section it came from
2. If there is no source file, label it as "AI-synthesised"
3. Flag any regulatory references for manual verification
4. Rate overall reliability: HIGH (all claims sourced), MEDIUM (mostly sourced, some synthesis), LOW (significant synthesis or unsourced claims)
$ARGUMENTS
```

Explain to the student: "Now you can type /verify after any output to check it against source documents." -->

<!-- STOP -->
<!-- USER: Reviews the verify command -->

Try it. Ask me to create a brief analysis of something from the chaos files, and then run `/verify` to check it.

<!-- STOP -->
<!-- USER: Tests the verify workflow -->
<!-- ACTION: Generate a brief analysis, then run the verification on it. Show the source-check results. -->

---

### MCP: A Brief Overview

One more concept before we wrap up the Core Skills: **MCP — Model Context Protocol.**

MCP is a way to connect Claude Code to external tools and data sources. Think of it as building bridges between Claude and the systems your firm uses.

**What it can connect to:**
- Databases (portfolio management systems)
- APIs (market data providers, CRM)
- File systems (document management)
- Web services (regulatory databases)

**Why it matters for banking:**
Instead of copy-pasting data from Bloomberg into Claude, MCP could let Claude read Bloomberg data directly. Instead of exporting Salesforce reports, MCP could let Claude query client records on demand.

**You don't need to set this up now.** This is a "know it exists" concept. When you reach the Build Labs, or when your firm evaluates Claude Code for production use, MCP is how you connect the dots.

<!-- STOP -->
<!-- USER: Acknowledges MCP overview -->

---

### Wrap-Up: Core Skills Complete

You've completed all 8 Core Skills lessons. Here's what you can now do:

| Lesson | Skill Acquired |
|--------|---------------|
| 1.1 | Understand the scenario and Claude Code basics |
| 1.2 | Navigate and explore file systems |
| 1.3a | Extract, synthesise, and create deliverables |
| 1.3b | Analyse with source attribution |
| 1.4 | Use commands and troubleshoot issues |
| 1.5 | Process information from multiple angles |
| 1.6 | Consult and manage advisory sub-agents |
| 1.7 | Maintain persistent project memory |
| 1.8 | Verify AI output and use power features |

### What's Next?

You have several paths forward:

**Role Deep-Dives (1.9-1.14)** — Pick the role closest to yours and go deep:
- 1.9: Relationship Manager's Day
- 1.10: Junior Analyst's Day
- 1.11: Marketing Lead's Day
- 1.12: Manager's Day
- 1.13: Operations Lead's Day
- 1.14: Compliance Officer's Day

**Advanced Techniques (1.15-1.18)** — Optional deep-dives into regulatory awareness, prompt engineering, integrations, and verification.

**Build Labs (Module 2+)** — If you're ready to direct a full tool build, start with Module 2 (Client Report Generator).

My recommendation: do at least one Role Deep-Dive before starting the Build Labs. It'll ground your tool-building decisions in practical daily workflows.

<!-- STOP -->
<!-- USER: Decides their next path -->

---

## Important Notes for Claude

- The hallucination demonstration is the key teaching moment — make it genuine
- Save verification rules to the student's CLAUDE.md
- Create the /verify slash command in the project's .claude/commands/
- MCP explanation should be brief — "know it exists," not a tutorial
- The path choice at the end should feel empowering, not overwhelming

## Success Criteria

- [ ] Student saw web search, extended thinking, and file format capabilities
- [ ] Student experienced a hallucination demonstration and understood the risk
- [ ] Verification rules added to CLAUDE.md
- [ ] /verify slash command created and tested
- [ ] Student understands MCP concept at a high level
- [ ] Student chose their next path (role deep-dive, advanced, or build labs)
