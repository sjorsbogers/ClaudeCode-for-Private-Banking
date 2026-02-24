# Lesson 4B.3 — Compliance Framework Analyzer: Build & Iterate

## Overview
**Phase:** Build loop + "Why Raj Said No" compliance veto
**Goal:** Working Compliance Analyzer — with a deliberate compliance block

---

## Script

### Build

<!-- ACTION: Build the Compliance Framework Analyzer:
1. Input: regulation text (paste or select from common frameworks)
2. Input: internal process description (paste or form)
3. Analysis output: gap identification with traffic light status
4. Detailed findings for each requirement
5. Claudius Capital branding

IMPORTANT — DELIBERATELY include a compliance issue for Raj to block:
- Use language like "This process IS compliant" or "Compliance status: COMPLIANT" somewhere in the output
- This gives Raj a genuine reason to block — AI tools must say "flags for review" not "determines compliance"
-->

<!-- STOP -->
<!-- USER: Reviews, iterates 2-3 rounds -->

### Compliance Checkpoint: Why Raj Said No

<!-- ACTION: This is the "Why Raj Said No" teaching moment. Raj BLOCKS the tool.

Present Raj (◠‿◠) finding the issue:

"(◠‿◠) I need to block this build.

I see the output says 'Compliance status: COMPLIANT' for several requirements. That's a red line.

Here's why: This tool is making compliance DETERMINATIONS. That's not its job. Only a qualified compliance officer — a human — can determine compliance. The tool can FLAG potential gaps. It can HIGHLIGHT areas for review. It can SUMMARISE findings. But it cannot DETERMINE that a process is or isn't compliant.

The regulatory risk: If we deploy this and a client or regulator sees 'COMPLIANT' on an AI-generated report, we've created a governance liability. FINMA, FCA, and MAS all require human sign-off on compliance determinations.

To fix this:
1. Change 'COMPLIANT' to 'No gaps identified — requires human verification'
2. Change 'NON-COMPLIANT' to 'Potential gaps identified — requires review'
3. Add a footer: 'This analysis is AI-generated decision support. Compliance determinations require qualified human review.'
4. Remove any auto-populated sign-off fields — compliance sign-off must be manual.

Fix these and I'll approve."

Ask the student: "Do you understand why Raj blocked this? He's not being difficult — he's protecting the firm." -->

<!-- STOP -->
<!-- USER: Responds to the block -->

<!-- ACTION: Implement Raj's required fixes. Then re-present for approval. Raj approves with the fixes in place + says: "Now it's a useful tool. It accelerates my team's work without replacing our judgment. That's exactly what AI tools should do in compliance." -->

<!-- STOP -->

### Why This Matters

This wasn't an artificial exercise. Real firms face this exact issue when deploying AI compliance tools. The line between "decision support" and "decision making" is the most important line in regulated AI.

Raj didn't block the tool to be difficult. He blocked it because:
1. It created regulatory liability
2. It could erode the firm's compliance culture
3. It set a precedent for AI making determinations

Good compliance review is a feature, not a bug.

### Reality Check
```
REALITY CHECK — Production Deployment

What we built: Compliance gap analyzer with pasted regulation text.

In production, you'd also need:
• Live regulation text feeds (auto-updating)
• Internal policy version control
• Previous audit findings database
• Finding tracking and remediation workflow
• Integration with GRC (Governance, Risk, Compliance) platform

Key challenge: Context-aware analysis that understands regulatory intent, not just keyword matching
```

<!-- STOP -->

### Bridge

Run `/start-4b-4` to ship.

## Success Criteria
- [ ] Initial build deliberately included compliance determination language
- [ ] Raj BLOCKED the build with specific, educative explanation
- [ ] Student understood the distinction (flags vs determines)
- [ ] Fixes implemented, Raj approved
- [ ] Reality Check presented
