# Lesson 4A.3 — Proposal Generator: Build & Iterate

## Overview
**Phase:** Build loop + compliance checkpoint

---

## Script

### Build

<!-- ACTION: Build the Proposal Generator:
1. Prospect input form (name, jurisdiction, AUM range, interests, requirements)
2. Generated proposal with all selected sections
3. Jurisdiction-aware regulatory disclosures
4. Past performance disclaimers
5. "Draft proposal — requires RM review before presentation" disclaimer
6. Claudius Capital branding, professional formatting
7. Print-optimized layout
8. Start dev server -->

<!-- STOP -->
<!-- USER: Reviews, iterates 2-4 rounds -->

### Compliance Checkpoint

<!-- ACTION: Raj's review (◠‿◠). Proposals are high-risk for compliance:
- Past performance disclaimers present and correctly worded?
- Jurisdiction-specific disclosures accurate? (FINMA for CH, FCA for UK, MAS for SG)
- Fee disclosure compliant with MiFID II cost transparency?
- No guarantees of future performance?
- "Draft" labeling present?

Raj should raise a cross-jurisdictional question: "If a Swiss-domiciled prospect has UK assets, which jurisdiction's disclosure requirements apply to the proposal?" (Answer: both — the proposal should include disclosures for all relevant jurisdictions.) -->

<!-- STOP -->

### Reality Check
```
REALITY CHECK — Production Deployment

What we built: Proposal generator with form-based prospect data.

In production, you'd also need:
• CRM for prospect pipeline and history
• Portfolio system for verified track record data
• Compliance system for current, approved disclosures
• Template management with version control
• Approval workflow before proposals go to prospects

Key challenge: Keeping regulatory disclosures current across three jurisdictions
```

<!-- STOP -->

### Bridge

Run `/start-4a-4` to ship.

## Success Criteria
- [ ] Proposal Generator built with jurisdiction awareness
- [ ] Compliance checkpoint passed (disclosures verified)
- [ ] Reality Check presented
