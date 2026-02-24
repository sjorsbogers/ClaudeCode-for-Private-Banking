# Lesson 1.15 — Data, Privacy & Regulatory Awareness

## Role & Context

This is the regulatory guardrails lesson — critical before Build Labs. Teaches the RED/AMBER/GREEN data classification, pre-build compliance checklist, ethical dimension, and vendor assessment. Moved from v1's 1.9 and expanded.

---

## Script

### Opening

Before you build any tool that touches client data, you need to understand the rules. Not because compliance is an obstacle — but because in wealth management, trust is the product. If a client's portfolio data leaks because an AI tool wasn't properly governed, the regulatory fine is the least of your problems. The relationship is gone forever.

This lesson teaches you to classify data, assess tools, and think about AI governance the way Raj does — not as a checkbox, but as a design principle.

<!-- STOP -->
<!-- USER: Ready -->

---

### The RED / AMBER / GREEN Framework

Every piece of data at Claudius Capital falls into one of three categories:

**RED — Never Send to External AI**
- Client passport scans, tax IDs, social security numbers
- Raw compliance investigation files
- Login credentials, API keys, encryption keys
- Unredacted legal proceedings

**AMBER — Requires Review and Safeguards**
- Named client data with financial information (e.g., "Van der Berg family, CHF 45M portfolio")
- Internal performance data linked to specific clients
- Draft compliance reports before finalization
- Employee performance evaluations

**GREEN — Safe for AI Processing**
- Anonymised data ("Client A, balanced portfolio, CHF 40-50M range")
- Templates and process documents
- Public market data and research
- The course's fictional Claudius Capital data (all GREEN by design)

<!-- STOP -->
<!-- USER: Acknowledges framework -->

---

### Exercise 1: Classify Data Items

Let me test your judgment. I'll present data items — you classify them.

<!-- ACTION: Use AskUserQuestion to present 4 scenarios, one at a time:

Q1: "A CSV file containing client names, account numbers, and portfolio values"
Options: RED / AMBER / GREEN
Correct: AMBER (named financial data)

Q2: "A process document describing how quarterly reports are generated (no client names)"
Options: RED / AMBER / GREEN
Correct: GREEN (no PII, process documentation)

Q3: "An email thread between Raj and FINMA about a specific compliance investigation"
Options: RED / AMBER / GREEN
Correct: RED (raw compliance investigation, regulatory correspondence)

Q4: "A summary showing 'Top 10 clients by AUM' with anonymised labels (Client A, B, C) and portfolio sizes"
Options: RED / AMBER / GREEN
Correct: GREEN (anonymised) — but discuss: what if someone can figure out Client A is Van der Berg from the AUM size? That's re-identification risk. -->

<!-- STOP -->
<!-- USER: Completes classification exercise -->

The grey areas are where it gets interesting. "Anonymised" data isn't always truly anonymous. If your firm has only one client with CHF 200M+ AUM, even "Client A, CHF 200M" identifies them.

---

### Exercise 2: Pre-Build Compliance Checklist

Before every tool build in this course, you'll reference the compliance checklist. Let's walk through it now so it becomes second nature.

<!-- ACTION: Read templates/pre-build-compliance-checklist.md and walk the student through it. Then have them fill it out for a hypothetical tool: "A dashboard that shows RM team performance metrics and client satisfaction scores."

The student should decide:
- What data classification applies?
- What disclaimers are needed?
- What access controls would production need?
- What regulatory considerations apply? -->

<!-- STOP -->
<!-- USER: Completes checklist -->

---

### Exercise 3: The Ethical Dimension

Regulatory compliance is the floor, not the ceiling. Let's talk about the ethical dimension.

**Scenario:** You build a client risk profiler that uses AI to assess a client's risk tolerance. The tool works well — it matches advisor assessments 85% of the time. A senior RM suggests using it to pre-screen prospects before the first meeting, to decide how much time to invest in the relationship.

<!-- ACTION: Use AskUserQuestion:
Question: "Is pre-screening prospects with AI before meeting them appropriate?"
Options:
- "Yes — it's efficient resource allocation"
- "No — every prospect deserves equal treatment"
- "It depends on how the AI makes the assessment"
- "It's technically legal but ethically questionable"

After the student answers, discuss: The regulatory question is whether this creates a discriminatory screening process. The ethical question is whether clients who look less profitable deserve less attention. The fiduciary question is whether the firm's obligation to treat clients fairly extends to prospects. There's no simple answer — but asking the question is the important part. -->

<!-- STOP -->
<!-- USER: Discusses -->

---

### Exercise 4: Vendor Assessment

If Claudius Capital wanted to use an external AI vendor for client-facing tools, what questions should Raj ask?

<!-- ACTION: Draft a vendor assessment questionnaire (8-10 questions):
- Where is data processed and stored? (Jurisdiction matters)
- Who has access to the data? (Employees, subprocessors)
- How is data encrypted? (In transit and at rest)
- What's the data retention policy? (Can we delete on demand?)
- Is the vendor SOC 2 / ISO 27001 certified?
- How does the vendor handle regulatory requests? (GDPR subject access, FINMA inquiries)
- What happens to our data if the vendor goes bankrupt?
- Can we audit the vendor's data handling practices?

Save to organized/analysis/vendor-assessment-template.md -->

<!-- STOP -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **Data classification** | Applied RED/AMBER/GREEN to realistic scenarios |
| **Compliance checklist** | Completed a pre-build compliance assessment |
| **Ethical reasoning** | Discussed AI ethics beyond regulatory compliance |
| **Vendor assessment** | Built a vendor evaluation framework |

This framework will be referenced before every Build Lab. It should become automatic — like locking the office door. You don't think about it; you just do it.

Run `/start-1-16` for Advanced Prompt Engineering, or `/start-2-1` for Build Labs.

## Success Criteria

- [ ] Student classified data items correctly with nuance
- [ ] Pre-build compliance checklist completed
- [ ] Ethical scenario discussed thoughtfully
- [ ] Vendor assessment template saved to organized/analysis/
