# Lesson 1.18 — Building Verification Into Your Workflow

## Role & Context

ALL NEW lesson. Critical for regulated contexts — how to verify AI output systematically. Builds on the verification introduction in 1.8 with deeper, more structured workflows.

---

## Script

### Opening

In Lesson 1.8, we demonstrated that Claude can hallucinate — state invented regulation articles with complete confidence, or generate plausible statistics from nothing. You created basic verification rules for your CLAUDE.md.

Now let's go deeper. This lesson builds a systematic verification workflow that you can use for any high-stakes output — client reports, compliance documents, investment memos, board materials.

The goal: make verification a habit, not an afterthought.

<!-- STOP -->
<!-- USER: Ready -->

---

### The Verification Spectrum

Not everything needs the same level of verification:

| Output Type | Verification Level | Examples |
|------------|-------------------|---------|
| **Internal brainstorming** | Low — spot-check key facts | Meeting agenda ideas, draft outlines |
| **Internal analysis** | Medium — verify data points and sources | Team dashboards, process reviews |
| **Client-facing output** | High — every claim must be sourced | Reports, proposals, communications |
| **Regulatory/compliance** | Maximum — independent verification required | Policy documents, audit responses, filings |

The 70/30 rule applies: Claude gets you 70% of the way. Your professional judgment — the verification, the context, the "does this make sense?" check — is the critical last 30%.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### Exercise 1: The Hallucination Hunt

Let me generate an analysis that contains deliberate errors. Your job: find them.

<!-- ACTION: Generate a 200-word analysis of Claudius Capital's competitive position. Deliberately include:
1. One correct claim sourced from chaos files
2. One plausible-sounding but fabricated statistic ("According to a 2025 Deloitte study, 73% of UHNW families...")
3. One incorrect regulatory reference ("FINMA Circular 2024/3 on AI governance requires...")
4. One correct observation

Don't flag which are which. Present it as a normal analysis. Then ask: "This analysis contains at least one fabricated claim. Can you spot it?" -->

<!-- STOP -->
<!-- USER: Attempts to identify the hallucinations -->

<!-- ACTION: Reveal all errors. Explain:
- The fabricated statistic: Claude invented this. There may be a real Deloitte study, but this specific number was generated.
- The incorrect regulation reference: FINMA circular numbers and titles should always be verified against FINMA's actual circular list.
- The correct claims: these came from the chaos files and can be traced back.

Key teaching: "The fabricated claims sounded just as confident as the real ones. That's the danger." -->

<!-- STOP -->
<!-- USER: Discusses -->

---

### Exercise 2: Multi-Pass Verification Workflow

Here's a systematic approach. Every high-stakes output goes through three passes:

**Pass 1: Generate** — Create the output with specific instructions to cite sources.

**Pass 2: Self-Verify** — Ask Claude to check its own work against the source documents.

**Pass 3: Human Review** — You review the flagged items and make final judgment calls.

Let's practise this workflow.

<!-- ACTION:
1. Generate a brief client briefing using chaos file data (Pass 1)
2. Immediately run verification: "Now check every claim in this briefing against the source files. For each claim, state: Claim | Source File | Verified (Yes/No/Partially)" (Pass 2)
3. Present the verification table to the student for their review (Pass 3)

Show the student the full workflow in action. -->

<!-- STOP -->
<!-- USER: Reviews the verified output -->

---

### Exercise 3: Build a /verify Command

Let's enhance the `/verify` command you created in 1.8. This version should be more thorough.

<!-- ACTION: Create or update .claude/commands/verify.md:

```markdown
Verify the most recent output against source documents. Follow this protocol:

1. CLAIMS CHECK: For every factual claim, identify the source file and section. If no source exists, label as "AI-synthesised."

2. REGULATION CHECK: For every regulatory reference, verify:
   - Is the regulation name correct?
   - Is the article/section number plausible?
   - Flag for manual verification against official regulatory text.

3. DATA CHECK: For every number or statistic:
   - Trace to source file
   - Check for calculation errors
   - Note data freshness ("as of" date)

4. CONSISTENCY CHECK: Does the output contradict anything in the project's CLAUDE.md or previous verified outputs?

5. RELIABILITY RATING:
   - HIGH: All claims sourced, no regulatory references to verify
   - MEDIUM: Mostly sourced, some synthesis, regulatory references flagged
   - LOW: Significant synthesis, unverifiable claims present

Output format: Verification table + overall rating + items requiring human review.
$ARGUMENTS
```
-->

<!-- STOP -->
<!-- USER: Reviews the enhanced verify command -->

---

### Checkpoint

<!-- ACTION: Use AskUserQuestion:
Question: "Your team asks you to send a Claude-generated compliance update to FINMA without review because 'the AI is really good and we're in a hurry.' What do you do?"
Options:
- "Send it — Claude is usually accurate and we're short on time"
- "Quick skim and send — the structure looks right"
- "Full verification against source documents before sending"
- "Explain that AI-generated regulatory correspondence requires human review, full stop"
-->

<!-- STOP -->
<!-- USER: Answers -->

<!-- ACTION: The correct answer is the last option. Regulatory correspondence must ALWAYS be human-reviewed. This isn't about how good the AI is — it's about accountability and professional obligation. If the output contains an error, "the AI wrote it" is not a defense. -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **Verification spectrum** | Understand different verification levels for different outputs |
| **Hallucination hunting** | Practised spotting fabricated claims in plausible analysis |
| **Multi-pass workflow** | Used Generate → Self-Verify → Human Review |
| **/verify command** | Built a thorough verification slash command |

Verification isn't paranoia — it's professionalism. In wealth management, your name goes on the output. Make sure it's right.

Run `/start-1-19` for Troubleshooting, `/start-1-20` for Tips & Best Practices, or `/start-2-1` for Build Labs.

## Success Criteria

- [ ] Student understands verification levels for different output types
- [ ] Successfully identified hallucinations in generated content
- [ ] Multi-pass verification workflow demonstrated
- [ ] Enhanced /verify command created
- [ ] Checkpoint answered correctly (human review always required)
