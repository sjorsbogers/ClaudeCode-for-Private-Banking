# Claudius Capital Partners AG
# Client Service Operations Manual
### Version 3.2 — January 2023
### Prepared by: Thomas Keller, Head of Operations
### Approved by: Marcus Richter, Managing Director

---

**CONFIDENTIAL — INTERNAL USE ONLY**

*This document describes standard operating procedures for client service delivery across all three Claudius Capital offices. All staff are expected to familiarize themselves with relevant sections during onboarding.*

*For questions, contact Thomas Keller (t.keller@claudius-capital.ch) or Sarah Chen (s.chen@claudius-capital.ch).*

---

## TABLE OF CONTENTS

1. Client Onboarding
2. KYC/AML Procedures
3. Portfolio Reporting
4. Client Communication Standards
5. Meeting Protocols
6. Fee Administration
7. Compliance Escalation
8. Technology Systems
9. Cross-Office Coordination
10. Document Management
11. Business Continuity
12. Staff Onboarding

---

## 1. CLIENT ONBOARDING

### 1.1 New Client Process (Estimated timeline: 4-6 weeks)

Step 1: Initial Discovery Meeting
- RM conducts introductory meeting using standard Discovery Template (saved in SharePoint > Templates > Client > Discovery_v2.docx)
- Minimum information gathered: client profile, asset overview, investment objectives, risk tolerance, jurisdiction of tax residency, source of wealth narrative

Step 2: Compliance Pre-Check
- RM submits preliminary client details to Compliance team via the CRM system (Salesforce)
- Compliance conducts PEP screening, sanctions check, and adverse media review
- Turnaround: 3 business days (5 for complex structures)

Step 3: KYC Documentation
- Client completes KYC pack (see Section 2)
- Thomas reviews for completeness before submission to Compliance
- Incomplete packs are returned to RM with checklist of missing items

Step 4: Investment Proposal
- RM prepares Investment Policy Statement (IPS) based on discovery meeting
- IPS reviewed by CIO (or delegate) for suitability
- Client reviews and signs IPS

Step 5: Account Opening
- Operations team opens accounts with custodian (currently: UBS for Swiss, HSBC for Singapore, Barclays for UK)
- Typical timeline: 5-10 business days after all documentation received
- FX accounts opened in parallel if multi-currency

Step 6: Welcome Pack
- Welcome letter from Marcus
- Portal access credentials (see Section 8)
- Assigned RM and backup RM contact details
- First-year meeting schedule

**Known Issues (as of Jan 2023):**
- Onboarding for multi-jurisdiction families often takes 8-12 weeks due to duplicative KYC across offices. Thomas is working with Raj on a unified KYC framework. TARGET: Q2 2023.
- The Discovery Template hasn't been updated since 2021. Thomas to revise by March 2023.

---

## 2. KYC/AML PROCEDURES

Standard KYC documentation requirements per client type:

**Individual Clients:**
- Certified passport copy
- Proof of address (utility bill or bank statement, <3 months old)
- Source of Wealth declaration + supporting documentation
- Tax residency self-certification (CRS/FATCA W-forms)
- Signed client agreement

**Corporate/Trust Structures:**
- All of the above for beneficial owners (>25% threshold)
- Certificate of incorporation / trust deed
- Register of directors/trustees
- Organizational chart
- Board resolution authorizing account opening

**Enhanced Due Diligence (EDD) triggers:**
- PEP status (client or close associate)
- High-risk jurisdictions (per FATF grey/blacklist)
- Complex multi-layered structures
- Source of Wealth concerns
- AUM above CHF 50M (internal threshold)

KYC Refresh Cycle: Every 3 years (standard) / annually (EDD clients)

*Note: The refresh cycle is currently behind schedule. As of January 2023, approximately 15% of files are overdue. Thomas has flagged this to Marcus and a remediation plan is in progress.*

---

## 3. PORTFOLIO REPORTING

### 3.1 Standard Reporting Calendar

| Report | Frequency | Delivery Target | Owner |
|--------|-----------|----------------|-------|
| Portfolio Valuation | Monthly | T+10 business days | Operations |
| Performance Report | Quarterly | T+20 business days | Operations + CIO |
| Consolidated Statement | Quarterly | T+25 business days | Operations |
| Tax Reporting Pack | Annual | By 31 March | Operations + Tax |
| Fee Statement | Quarterly | With performance report | Finance |

### 3.2 Report Generation Process

1. Custodian data feeds imported into Advent APX (portfolio management system)
2. Thomas reconciles positions and cash (daily for major accounts, weekly for others)
3. Performance calculated using time-weighted return methodology
4. Reports generated from APX and formatted in Excel templates
5. RM reviews report for client-specific commentary
6. Final report sent to client via secure portal or encrypted email

**Current challenges (Jan 2023):**
- APX often has data gaps for alternative investments (PE, hedge funds). These are manually updated from GP statements. Lag can be 30-60 days.
- The Excel templates are fragile — Thomas is the only one who fully understands the macros. Need to document or migrate to a proper reporting tool.
- Consolidated reporting across custodians is largely manual. Target: evaluate new reporting platform by Q3 2023.

---

## 4. CLIENT COMMUNICATION STANDARDS

### Response Time Targets
- Client email: acknowledge within 4 hours, substantive response within 1 business day
- Client phone call: return within 2 hours during business hours
- Urgent matters (market events, >5% portfolio movement): proactive outreach same day

### Communication Log
All client communications must be logged in Salesforce within 24 hours. This includes:
- Emails (auto-captured via Salesforce plugin — check it's working)
- Phone calls (manual entry, use Quick Log template)
- Meetings (full minutes using Meeting Notes template)
- Ad hoc conversations (brief summary is sufficient)

*Thomas note: Compliance is pushing hard on this. I know it's tedious but we need 100% logging for regulatory purposes. If you're behind, catch up on Fridays. Don't leave it longer than a week.*

---

## 5. MEETING PROTOCOLS

### Annual Review Meetings
- Required: minimum 2x per year for all active clients
- Preferred: quarterly for top 20 clients (by AUM)
- Standard agenda template available in SharePoint

### Meeting Preparation
- RM to prepare client brief 3 business days before meeting
- Brief includes: portfolio summary, performance vs benchmark, recent market commentary relevant to client's holdings, any outstanding action items from previous meeting
- For meetings with Marcus: brief must be circulated 5 business days in advance

### Post-Meeting
- Minutes circulated to client within 3 business days
- Action items assigned in Salesforce with due dates
- Follow-up items tracked in weekly RM pipeline meeting (Mondays 9:00 Zurich / 10:00 London / 16:00 Singapore)

---

## 6. FEE ADMINISTRATION

TBD — Thomas to complete by Q1 2023.

*Interim note: Fees are calculated quarterly by Finance team. Advisory fees per client agreement. Performance fees where applicable calculated by Operations. Any fee disputes escalated to Sarah, then Marcus if unresolved.*

---

## 7. COMPLIANCE ESCALATION

### Escalation Levels

Level 1: RM identifies potential issue → logs in Salesforce, flags to Compliance Analyst
Level 2: Compliance Analyst reviews → resolves or escalates to Raj (Head of Compliance)
Level 3: Raj reviews → resolves or escalates to Marcus / external counsel
Level 4: Board notification (material regulatory matters, potential enforcement actions)

### Mandatory Reporting Triggers
- Suspected market abuse or insider trading
- Unusual transaction patterns (per AML policy thresholds)
- Client complaint involving regulatory matter
- Data breach (immediate escalation — see Section 11)
- Sanctions match (true positive)

Whistleblowing: Anonymous channel available via external provider. Details on intranet.

---

## 8. TECHNOLOGY SYSTEMS

### Core Systems (as of January 2023)

| System | Purpose | Owner |
|--------|---------|-------|
| Advent APX | Portfolio management, reporting | Thomas |
| Salesforce | CRM, communication logging | Thomas / Sarah |
| SharePoint | Document management | IT (outsourced to Nexus IT) |
| Bloomberg Terminal | Market data, research (Zurich + London) | CIO office |
| Refinitiv Eikon | Market data (Singapore) | CIO office |
| Swiss Post SecureMail | Encrypted client email | All |
| Microsoft Teams | Internal communication | All |
| DocuSign | Digital signatures | Thomas |

### Portal Access
Client portal is a custom-built solution hosted by Nexus IT. Login credentials set up during onboarding. Portal provides:
- Portfolio valuations (delayed by 1 business day)
- Downloadable reports
- Secure messaging with RM
- Document vault (tax documents, statements, agreements)

*Known issue: Portal has not been updated since 2021. Mobile experience is poor. Several clients have complained. Thomas raised budget request in Nov 2022 — pending approval.*

---

## 9. CROSS-OFFICE COORDINATION

Claudius Capital operates across three time zones. Key coordination rules:

- Weekly all-hands pipeline call: Monday 9:00 CET / 16:00 SGT
- Client assignments: Primary RM is in the client's home office. Secondary RM (backup) in another office where relevant.
- Document sharing: All client documents must be in SharePoint, NOT local drives. (Thomas has found client documents on personal laptops — this is a compliance violation.)
- Handover protocol for traveling clients: If a client visits another office, the visiting RM briefs the local team at least 48 hours in advance.

---

## 10. DOCUMENT MANAGEMENT

TBD — Thomas to complete. Interim rule: everything goes in SharePoint under the correct client folder. Use the naming convention: [ClientName]_[DocType]_[Date YYYYMMDD].

---

## 11. BUSINESS CONTINUITY

High-level overview only. Full BCP document held by Sarah Chen.

- Primary data center: Zurich (managed by Nexus IT)
- Backup: Cloud failover (Azure, West Europe region)
- Recovery Time Objective: 4 hours for critical systems
- Recovery Point Objective: 1 hour (near-real-time replication)
- BCP test: conducted annually (last test: October 2022 — some issues identified, remediation in progress)
- Pandemic protocol: All staff can work remotely. VPN access via Cisco AnyConnect. Sensitive client calls should use approved secure lines only.

---

## 12. STAFF ONBOARDING

New staff onboarding checklist:

- [ ] IT setup (laptop, accounts, VPN, Bloomberg/Eikon access as needed)
- [ ] Salesforce training (Thomas delivers — 2 hour session)
- [ ] Compliance training (Raj delivers — mandatory, half day)
- [ ] APX overview (Thomas delivers — 1 hour for RMs, 4 hours for Ops)
- [ ] Introduction to key clients (RM-specific, arranged by Sarah)
- [ ] Read this manual (you're reading it now)
- [ ] Sign code of conduct and confidentiality agreement
- [ ] Access to SharePoint client folders (request via IT ticket to Nexus)

*All staff complete annual compliance refresher training by 31 January each year.*

---

**END OF DOCUMENT**

*Next revision scheduled: July 2023 (Thomas to coordinate)*

*Version history:*
- *v1.0 — March 2020 (initial version, Thomas Keller)*
- *v2.0 — January 2021 (post-COVID updates)*
- *v3.0 — June 2022 (Singapore office added)*
- *v3.1 — September 2022 (minor updates)*
- *v3.2 — January 2023 (current)*
