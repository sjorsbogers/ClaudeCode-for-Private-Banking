# Pre-Build Compliance Checklist

**Tool Name:** [Name of the tool you're about to build]
**Builder:** [Your name]
**Date:** [Date]
**Reviewed by Compliance:** [Pending / Approved / Flagged]

---

## 1. Data Classification

| Data Type | Classification | Justification |
|-----------|---------------|---------------|
| [e.g., Client names] | RED / AMBER / GREEN | [Why this classification] |
| [e.g., Portfolio values] | RED / AMBER / GREEN | [Why] |
| [e.g., Market data] | RED / AMBER / GREEN | [Why] |
| [Add rows as needed] | | |

**Classification Summary:**
- [ ] All data is GREEN — proceed with standard build
- [ ] Some data is AMBER — anonymization or safeguards required (detail below)
- [ ] RED data identified — STOP. This tool cannot process this data through external AI.

**AMBER Safeguards (if applicable):**
[Describe anonymization steps, data masking, or enterprise deployment requirements]

---

## 2. Regulatory Scope

### Jurisdictions Affected
- [ ] Switzerland (FINMA, Swiss DPA / nDSG)
- [ ] EU/UK (GDPR, FCA, MiFID II)
- [ ] Singapore (MAS, PDPA)
- [ ] Other: [Specify]

### Regulatory Considerations
- [ ] Cross-border data transfer implications assessed
- [ ] Tool does NOT generate output interpretable as investment advice — OR — appropriate disclaimers included
- [ ] Tool does NOT touch suitability assessments — OR — "decision-support only" disclaimers included
- [ ] Tool does NOT process KYC/AML data — OR — appropriate data handling controls in place
- [ ] MiFID II cost/charges disclosure requirements addressed (if applicable)

---

## 3. Output Disclaimers

### Required Disclaimers (check all that apply)
- [ ] "This output was generated with AI assistance and requires human review before use"
- [ ] "AI can DRAFT, not DETERMINE suitability assessments" (if touching risk/suitability)
- [ ] "All regulatory citations must be independently verified" (if referencing regulations)
- [ ] "Data protection review required before real client data enters this tool" (if using sample data)
- [ ] "Past performance is not indicative of future results" (if showing returns data)
- [ ] Standard firm compliance disclosures included in output

### Disclaimer Placement
[Where in the tool output do disclaimers appear? Header, footer, inline?]

---

## 4. Audit Trail

- [ ] Tool logs who used it, when, and with what inputs
- [ ] Output is traceable back to source data
- [ ] Documentation would satisfy a regulatory audit
- [ ] Version control in place (changes to tool are tracked)

**Audit Trail Method:**
[Describe how usage is tracked — database logs, file output, manual record, etc.]

---

## 5. Compliance Sign-Off

- [ ] Compliance team has reviewed the tool concept and data handling approach
- [ ] Periodic review schedule established (quarterly / annually / at regulation change)
- [ ] Escalation path defined if compliance issues are discovered post-deployment

**Compliance Officer:** [Name]
**Review Date:** [Date]
**Status:** [Pending / Approved / Conditionally Approved / Rejected]
**Conditions (if any):** [List any conditions for approval]

---

## Summary

| Category | Status |
|----------|--------|
| Data Classification | [PASS / NEEDS WORK / BLOCKED] |
| Regulatory Scope | [PASS / NEEDS WORK / BLOCKED] |
| Output Disclaimers | [PASS / NEEDS WORK / BLOCKED] |
| Audit Trail | [PASS / NEEDS WORK / BLOCKED] |
| Compliance Sign-Off | [PASS / NEEDS WORK / BLOCKED] |

**Overall Status:** [CLEAR TO BUILD / NEEDS REMEDIATION / BLOCKED]

---

*Claudius Capital — Pre-Build Compliance Checklist v1.0*
*This checklist must be completed before any tool handling client data enters production.*
