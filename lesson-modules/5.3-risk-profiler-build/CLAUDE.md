# Lesson 5.3 — Client Risk Profiler: Build & Iterate

## Overview
**Phase:** Build loop + compliance checkpoint with cross-border scenario

---

## Script

### Build

<!-- ACTION: Build the Client Risk Profiler:
1. Multi-step questionnaire (progress indicator)
2. Questions for each selected dimension
3. Scoring engine (weighted calculation)
4. Generated risk profile document
5. Profile categories: Conservative / Moderate / Balanced / Growth / Aggressive
6. "AI-GENERATED DRAFT — Requires advisor review and client sign-off" prominent disclaimer
7. Claudius Capital branding
8. Test with sample profiles
9. Start dev server -->

<!-- STOP -->
<!-- USER: Reviews, iterates -->

### Test Data Exercise

Try generating two profiles with different inputs:
1. A conservative retiree (low experience, capital preservation, short horizon)
2. An aggressive entrepreneur (high experience, growth-focused, long horizon)

Do the profiles feel right? Do the scores make sense?

<!-- STOP -->
<!-- USER: Tests and provides feedback -->

### Compliance Checkpoint

<!-- ACTION: Raj's review (◠‿◠). This checkpoint includes a cross-border challenge:

Standard review: disclaimers, "draft not determine" language, ESG score documentation.

Cross-border scenario: "(◠‿◠) One more thing. Consider this client: Swiss-domiciled, with a UK pension and assets held through a Singapore trust. Which jurisdiction's suitability requirements apply when profiling their risk tolerance?"

Answer: All three apply differently. FINMA governs the Swiss domicile. FCA governs the UK pension (UK suitability requirements for pension assets). MAS governs the Singapore trust vehicle. The risk profile needs to note that suitability requirements may differ across these jurisdictions, and each set of assets may need separate suitability documentation.

This teaches multi-jurisdiction complexity. -->

<!-- STOP -->

### Reality Check
```
REALITY CHECK — Production Deployment

What we built: Risk profiler with form-based questionnaire, advisor-only access.

In production, you'd also need:
• Client-facing portal with authentication
• Assessment versioning (track changes over time)
• Complete audit trail (who assessed, when, what changed)
• Data encryption for client responses
• Integration with portfolio system for suitability checks
• Regulatory approval for client-facing AI-assisted tools

Key challenge: Each jurisdiction (FINMA, FCA, MAS) has different requirements for client-facing AI tools
```

<!-- STOP -->

### Bridge

Run `/start-5-4` to ship.

## Success Criteria
- [ ] Risk profiler built with multiple profile categories
- [ ] Test profiles generated and validated
- [ ] Cross-border compliance scenario discussed
- [ ] Reality Check presented
