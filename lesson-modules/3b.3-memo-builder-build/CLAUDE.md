# Lesson 3B.3 — Investment Memo Builder: Build & Iterate

## Overview
**Phase:** Build loop + compliance checkpoint
**Goal:** Working Memo Builder reviewed by Raj

---

## Script

### Build

<!-- ACTION: Build the Investment Memo Builder:
1. Input interface (text paste, form fields, or both per requirements)
2. Generated IC memo with all selected sections
3. Professional formatting suitable for IC presentation
4. Source attribution for each section
5. "AI-generated draft — requires analyst review and IC approval" disclaimer
6. Claudius Capital branding
7. Start dev server -->

<!-- STOP -->
<!-- USER: Reviews initial build -->

### Iterate

<!-- STOP -->
<!-- USER: Feedback rounds (2-4 iterations) -->

### Compliance Checkpoint

<!-- ACTION: Raj's review (◠‿◠). Check for:
- Investment recommendation framed as "draft for IC review" not final determination
- Source attribution on performance claims
- Disclaimer on AI-generated content
- Data classification considerations

Dynamic: If student's memo includes a clear "Invest" recommendation without "draft" qualifier, Raj flags it: "This reads as a final recommendation. Reframe as 'Preliminary assessment for IC discussion.' The IC makes the decision, not the tool." -->

<!-- STOP -->

### Reality Check
```
REALITY CHECK — Production Deployment

What we built: Memo builder with manually entered research data.

In production, you'd also need:
• Fund database integration (PitchBook, Preqin)
• Performance data providers for independent verification
• Regulatory filing access (SEC EDGAR, FCA register)
• Internal DD file repository
• Approval workflow integration

Key challenge: Verifying fund-reported data against independent sources
```

<!-- STOP -->

### Bridge

Run `/start-3b-4` to ship.

## Success Criteria
- [ ] Memo Builder built and reviewed
- [ ] Compliance checkpoint passed
- [ ] Reality Check presented
