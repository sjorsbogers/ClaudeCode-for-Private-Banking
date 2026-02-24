# Lesson 3A.4 — Meeting Prep Engine: Ship It

## Overview
**Phase:** GitHub + Deploy (merged)
**Goal:** Push to GitHub and deploy in one lesson

---

## Script

### Ship It

You've done this before. Let's move fast.

<!-- ASSESS: GitHub comfort -->
<!-- ACTION: Use AskUserQuestion: "How did GitHub and deployment feel in Module 2?"
Options: "Comfortable — let's move fast" / "I remember the basics" / "Full walkthrough please" -->

<!-- STOP -->

### GitHub

<!-- ACTION: Based on assessment, adjust pace:
1. Initialize git, create .gitignore
2. git add, commit: "Initial commit: Meeting Prep Engine"
3. gh repo create [name] --private --source=. --push
4. Verify private: gh repo view --json isPrivate -->

<!-- STOP -->

### Deploy

<!-- ACTION:
1. Pre-deploy check: npx next build
2. Deploy: npx vercel --prod (or GitHub integration)
3. Share deployment URL
4. Update GitHub description with live URL
5. Verify repo still private -->

Open it on your phone. Imagine standing outside a client's office, pulling up their meeting prep on mobile before walking in.

<!-- STOP -->

### ROI

| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| Prep time per meeting | 2-3 hours | 15 minutes | ~2 hours |
| Meetings per quarter | 50 | 50 | — |
| Annual savings | 500 hours | 50 hours | **450 hours** |
| At CHF 150/hour | — | — | **CHF 67,500/year** |

### Module 3A: Complete

Two tools built:
1. Client Report Generator (Module 2)
2. Client Meeting Prep Engine (Module 3A)

**Next:** RFP / Proposal Generator — the revenue driver. Run `/start-4a-1` when ready.

## Success Criteria
- [ ] Pushed to private GitHub repo
- [ ] Pre-deploy build check passed
- [ ] Deployed to Vercel
- [ ] Live URL added to GitHub description
- [ ] ROI calculated
