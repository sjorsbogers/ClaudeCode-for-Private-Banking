# Lesson 3A.3 — Meeting Prep Engine: Build & Iterate

## Overview
**Phase:** Build loop + compliance checkpoint
**Goal:** Working Meeting Prep Engine reviewed by Raj

---

## Script

### Build

<!-- ACTION: Build the Meeting Prep Engine based on REQUIREMENTS.md:
1. Form inputs for client selection and meeting details
2. Generated one-pager with all selected sections
3. Claudius Capital branding
4. Print-friendly layout (one page, clean headers)
5. "Data as of" timestamp
6. "AI-generated meeting brief — verify key points before meeting" disclaimer
7. Start dev server -->

Review at localhost:3000 (or appropriate port).

<!-- STOP -->
<!-- USER: Reviews initial build -->

### Iterate

What needs to change?

<!-- STOP -->
<!-- USER: Provides feedback -->
<!-- ACTION: Implement, iterate 2-4 rounds until satisfied -->

### Compliance Checkpoint

<!-- ACTION: Present Raj's review (◠‿◠). Dynamic based on build:
- Check for: client data handling, disclaimer presence, data freshness display
- If compliant: Raj approves + presents what-if: "An RM uses this brief as the sole basis for their meeting without reviewing the source data. The brief contains a stale portfolio figure. What's the liability?"
- If gaps: Raj blocks with specific fix requirements -->

<!-- STOP -->
<!-- ACTION: Implement any compliance fixes -->

### Reality Check
```
REALITY CHECK — Production Deployment

What we built: Meeting prep tool with manually entered client data.

In production, you'd also need:
• CRM integration for client details and relationship history
• Portfolio system API for current holdings and performance
• Meeting transcription tool integration (Fireflies/Otter)
• Calendar integration for scheduling context
• RM notes from Notion/SharePoint

Infrastructure: Same as Report Generator + meeting tool API
Key challenge: Unstructured meeting notes from different RMs in different formats
```

<!-- STOP -->

### Bridge

Run `/start-3a-4` to push to GitHub and deploy.

## Success Criteria
- [ ] Meeting Prep Engine built and reviewed
- [ ] Multiple iteration rounds
- [ ] Compliance checkpoint passed
- [ ] Reality Check presented
