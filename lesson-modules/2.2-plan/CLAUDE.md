# Lesson 2.2 — Plan (Requirements)

## Overview
**Phase:** Requirements gathering
**Goal:** Define what the Client Report Generator should do before building it

---

## Script

Good product managers define requirements before building. Changes now are free — changes later mean rebuilding.

<!-- STOP -->

### Defining the Report Sections

<!-- ACTION: Read templates/client-report-template.md. Present sections to student. -->

<!-- ASSESS: report preferences -->
<!-- ACTION: Use AskUserQuestion:
Q1: "Which sections should the report include?" (multi-select)
Options: Portfolio Overview, Performance Summary, Asset Allocation, Market Commentary, Portfolio Activity, Outlook & Recommendations, Advisory Team & Contact, Compliance Disclosures

Q2: "What visual style?"
Options: Clean & Modern, Professional & Traditional, Claudius Capital Branded (Recommended)

Q3: "How should users input client data?"
Options: Simple form, Paste CSV data, Both options (Recommended) -->

<!-- STOP -->

<!-- ACTION: Create REQUIREMENTS.md in the project directory with:
- Purpose, selected sections, data input method, visual design
- Branding: Navy (#1B2A4A), Gold (#C9A96E), professional sans-serif
- Output: web page, print-to-PDF via browser
- Sample data from inherited-chaos/client-data/ -->

<!-- STOP -->
<!-- USER: Reviews requirements -->

Does this capture everything? Last chance to adjust before we build.

<!-- ACTION: Make any changes. When approved: "Requirements locked. Let's build." -->

**Reality Check note:** These requirements use form input. In production, the data would come from custodian feeds and the portfolio system via API integration. We're building the presentation layer — the data pipeline would be an engineering project.

<!-- STOP -->

### Bridge

Requirements locked. Next: Claude builds it. You review and iterate.

Run `/start-2-3` or `/build-iterate` when ready.

## Success Criteria
- [ ] Report sections selected
- [ ] Visual style chosen
- [ ] Data input method decided
- [ ] REQUIREMENTS.md created and approved
