# Lesson 2.5 — Go Live

## Overview
**Phase:** Deployment
**Goal:** Deploy to Vercel, verify, calculate ROI

---

## Script

### Pre-Deploy Check

Before deploying, let's catch any issues locally.

<!-- ACTION: Run `npx next build` in the project directory. This catches TypeScript errors and build issues before Vercel sees them. If errors: fix them. If clean: proceed. -->

<!-- STOP -->

### Deploy

<!-- ACTION: Deploy to Vercel:
1. npx vercel --prod (or connect via GitHub integration)
2. Wait for build
3. Share deployment URL -->

Open the live URL. Try it on your phone too — check if it's responsive.

<!-- STOP -->
<!-- USER: Reviews the live deployment -->

### Post-Deploy Checklist

<!-- ACTION:
1. Update GitHub description with live URL: gh repo edit --description "Claudius Capital Client Report Generator | Live: [URL]"
2. Verify repo is still private: gh repo view --json isPrivate
3. Test the live version: enter sample data, generate a report, try printing to PDF -->

**Security reminder:** This deployment uses fictional data on a public URL. In production:
- Authentication (SSO) — only authorized users access the tool
- Audit logging — who generated what, when
- Data encryption — in transit and at rest
- VPN or internal-only access

For the course, the public URL with fictional data is fine.

<!-- STOP -->

### ROI Calculation

Let's quantify what you built.

| Metric | Before | After | Savings |
|--------|--------|-------|---------|
| Report creation time | 2 days/client | 30 minutes | 93% reduction |
| Quarterly reports (200 clients) | 400 person-days | 100 hours | 350+ person-days |
| Consistency | Variable by RM | Standardised | Eliminate inconsistency |
| Data freshness display | None | "As of" date | Transparency |

### Module 2: Complete

You've built your first tool — a working Client Report Generator. You directed the entire process as PM: requirements → build → iterate → compliance review → GitHub → deploy.

The build loop works. And it works the same way for every tool.

### What's Next

<!-- ACTION: Use AskUserQuestion:
Question: "Which path interests you for the next Build Lab?"
Options:
- "Senior RM Path — Meeting Prep Engine (Module 3A)" (Recommended for RM roles)
- "Junior Analyst Path — Investment Memo Builder (Module 3B)" (Recommended for analyst roles)
- "I'd like to explore both before deciding"
-->

<!-- STOP -->

Run `/start-3a-1` for RM Path or `/start-3b-1` for Analyst Path.

## Success Criteria
- [ ] Pre-deploy build check passed
- [ ] Deployed to Vercel
- [ ] Live URL added to GitHub description
- [ ] Repo verified as private
- [ ] ROI calculated
- [ ] Path chosen for next module
