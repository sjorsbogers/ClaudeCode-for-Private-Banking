# Client Onboarding Process v3 — FINAL (v2)

*Originally created: March 2025*
*Last updated: September 2025 (Thomas)*
*Status: Current process — but needs major overhaul*

~~Note: v1 and v2 are in the archive folder. Or maybe I deleted them. This is the current version regardless.~~

---

## Overview

Average onboarding time: **3 weeks** (target: 1 week)
Client satisfaction with onboarding: **6.2/10** (target: 8.5/10)
Document re-submission rate: **34%** (target: <5%)

---

## The 12-Step Process

### Step 1: Initial Contact (Day 1)
**Owner:** Relationship Manager
- Receive referral or inbound inquiry
- Initial phone call / meeting
- Collect basic information: name, estimated AUM, source of wealth (rough)
- Send welcome email with firm overview brochure
- ~~Create record in Salesforce~~ *Usually forgotten until Step 4*

**Handoff → Step 2**

### Step 2: KYC Document Collection (Days 1-5)
**Owner:** Compliance Team
- Send KYC document request list to prospect
  - Passport / ID copies
  - Proof of address (not older than 3 months)
  - Source of wealth documentation
  - Tax residency certificates
  - ~~Beneficial ownership declaration~~ (added after FINMA audit, sometimes forgotten)
  - Trust deed / corporate documents (if applicable)
- Follow up if documents not received within 3 business days
- **PROBLEM:** Clients often send incomplete documents. We reject and re-request. Average 2.3 rounds of back-and-forth per client.
- *Raj wants us to reject anything that's not perfect. Sarah says we're losing clients in the process. They argue about this regularly.*

**Handoff → Step 3**

### Step 3: KYC Review (Days 5-8)
**Owner:** Compliance Team
- Review all submitted documents
- Run sanctions screening (World-Check)
- Run PEP screening
- Verify source of wealth documentation
- Flag any concerns to Raj for escalation
- **BOTTLENECK:** Raj personally reviews every high-risk or PEP case. He's meticulous but slow. Average 3-day turnaround for his reviews.

**Handoff → Step 4**

### Step 4: CRM Setup (Day 8-9)
**Owner:** Operations (me... well, whoever replaces me)
- Create full Salesforce record
- Enter all KYC data
- Enter client preferences (communication frequency, language, reporting format)
- Set up client in portfolio management system
- **PROBLEM:** This is where the data duplication starts. Same info entered in Salesforce AND the portfolio system. They don't sync.
- *I tried to fix this. See: "data quality project" in my handoff notes. Got 50% done.*

**Handoff → Step 5**

### Step 5: Risk Profiling (Days 9-10)
**Owner:** Relationship Manager + Compliance
- Conduct risk profiling questionnaire with client
- Currently done via PDF form sent by email (yes, in 2026)
- Score and document risk tolerance
- Map to investment strategy options
- Get client signature on risk profile
- **NOTE:** MiFID II requires this before any investment recommendation. No exceptions.

**Handoff → Step 6**

### Step 6: Investment Proposal (Days 10-12)
**Owner:** Investment Team
- Based on risk profile, prepare investment proposal
- Include: recommended strategy, expected returns, fee structure, benchmark comparison
- Marcus personally reviews all proposals over $25M AUM (which is half our clients)
- **BOTTLENECK:** Marcus reviews take 1-2 days. He's thorough but it creates a queue.

**Handoff → Step 7**

### Step 7: Client Presentation (Day 12-13)
**Owner:** Relationship Manager
- Present investment proposal to client
- Walk through strategy, fees, risk/return expectations
- Answer questions
- Collect feedback / modifications

**Handoff → Step 8**

### Step 8: Proposal Revision (Days 13-15)
**Owner:** Investment Team
- Incorporate client feedback
- Revise proposal
- Second review if significant changes
- This step sometimes loops 2-3 times with picky clients

**Handoff → Step 9**

### Step 9: Legal Documentation (Days 15-17)
**Owner:** Legal (outsourced to Baker McKenzie)
- Prepare IMA (Investment Management Agreement)
- Prepare fee agreement
- Prepare custody account documentation
- Power of attorney if needed
- **PROBLEM:** Legal drafts take 2-3 business days. Then client reviews take another 2-3 days. Then changes take another day. This whole step is a black hole.

**Handoff → Step 10**

### Step 10: Account Opening (Days 17-18)
**Owner:** Operations + Custody Bank
- Open custody account with our prime broker
- Set up reporting feeds
- Configure portfolio system for new client
- Test data feeds
- *Erik needs to manually configure each new client in the portfolio system. There's no self-service setup.*

**Handoff → Step 11**

### Step 11: Initial Funding (Days 18-19)
**Owner:** Client + Operations
- Client transfers funds to custody account
- Verify receipt
- Confirm with client
- Document funding source for AML purposes

**Handoff → Step 12**

### Step 12: Welcome & Portfolio Setup (Days 19-21)
**Owner:** Relationship Manager + Investment Team
- Send welcome package
- Execute initial trades per agreed strategy
- Set up scheduled reporting
- Schedule first quarterly review
- Introduce client to advisory team
- ~~Send client satisfaction survey~~ *We stopped doing this because the results were bad*

---

## Known Issues

1. **Too many handoffs** — 6 different teams touch the process. Each handoff introduces delay and information loss.
2. **Document collection nightmare** — 34% re-submission rate means most clients go through KYC 2-3 times.
3. **Manual data entry** — Client info entered in 3 different systems manually.
4. **Raj bottleneck** — Personal review of complex cases adds 2-3 days.
5. **Legal black hole** — Outsourced legal takes too long and charges per hour.
6. **No automation** — Everything is email, PDF, and phone calls. No client portal. No digital signatures. No automated workflows.
7. **No tracking** — We can't tell a client "you're on step 7 of 12." We don't even track what step we're on internally.

## What It Should Look Like (Dream State)

A client signs up, submits documents through a secure portal, gets risk-profiled digitally, receives a proposal within 48 hours, signs electronically, and is fully onboarded in 5 business days. Total handoffs: 2 (compliance review, investment proposal).

That's the dream anyway. I ran out of time.

— T.R.
