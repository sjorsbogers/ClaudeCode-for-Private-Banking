# Lesson 2.3 — Build & Iterate

## Overview
**Phase:** Build loop — Claude builds, student reviews and iterates
**Goal:** Working Client Report Generator with compliance checkpoint

---

## Script

### The Build

Let's build. I'll create the report generator based on your requirements. This will take a moment.

<!-- ACTION: Build the initial version of the Client Report Generator:
1. Create the main page with form inputs for client data
2. Create the report display with all selected sections
3. Apply Claudius Capital branding (Navy #1B2A4A, Gold #C9A96E)
4. Ensure light mode: color-scheme: light in :root
5. Add suppressHydrationWarning to html/body in layout.tsx
6. Print CSS: white header backgrounds (not dark navy), browser default footers
7. Include "Data as of: [date]" display
8. Include "AI-generated draft — requires advisor review" disclaimer
9. Start dev server: npm run dev -->

Open your browser to localhost:3000. Let's see what we've got.

<!-- STOP -->
<!-- USER: Reviews the initial build in browser -->

### Iteration Loop

What do you think? Tell me what needs to change — layout, colours, spacing, content, anything. We'll iterate until it's right.

<!-- STOP -->
<!-- USER: Provides feedback -->
<!-- ACTION: Implement feedback, refresh, ask for more -->

<!-- STOP -->
<!-- USER: More feedback or approval -->
<!-- ACTION: Continue iterating until student is satisfied. Typically 3-5 rounds. -->

### Compliance Checkpoint

Before we finalise, let's get Raj's review.

<!-- ACTION: Present Raj's compliance review in character (◠‿◠). Check for:
- "Data as of" date displayed? If yes, acknowledge. If no, require it.
- Past performance disclaimer present?
- "Decision-support only" label present?
- Data classification: is all data GREEN? (fictional = yes)

Dynamic based on what was actually built:
- If all guardrails present: Raj approves + asks: "What date is this data from? If the portfolio changed yesterday, would the report reflect it? Think about data freshness in production."
- If guardrails missing: Raj blocks with specific fixes required.
- If partially present: Conditional approval with enhancement list. -->

<!-- STOP -->
<!-- USER: Responds to Raj's review -->
<!-- ACTION: Implement any required fixes from compliance review -->

### Reality Check

```
REALITY CHECK — Production Deployment

What we built: Report generator with fictional portfolio data entered via form.

In production, you'd also need:
• Custodian feeds (API) for live portfolio data
• Portfolio management system for holdings and returns
• CRM integration for client preferences
• Market data provider for benchmarks and commentary

Infrastructure: Internal server with SSO authentication, audit logging
Engineering handoff: API integration layer, auth system, data refresh pipeline
Timeline estimate: 3-6 months with a dedicated developer
Key challenge: Reconciling data across custodians with different formats
```

<!-- STOP -->

### Wrap-Up

Your Client Report Generator is working. You directed the entire build — requirements, review, feedback, compliance — without writing a single line of code.

**Next:** Lesson 2.4 — push to GitHub. Run `/start-2-4` when ready.

## Success Criteria
- [ ] Initial build reviewed in browser
- [ ] Multiple iteration rounds completed
- [ ] Compliance checkpoint passed (Raj reviewed)
- [ ] Light mode, print CSS, and disclaimers all working
- [ ] Reality Check sidebar presented
