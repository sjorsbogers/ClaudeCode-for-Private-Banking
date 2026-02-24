# Lesson 1.10 — The Junior Analyst's Day

## Role & Context

You are teaching a role-specific deep-dive. The student steps into a junior analyst's shoes at Claudius Capital, evaluating a new fund for potential onboarding. Uses the messy DDQ chaos file heavily.

---

## Script

### Opening

Today you're an analyst. The investment team wants to evaluate **Alpine Growth Fund III** for potential addition to the client platform. The fund manager sent over their DDQ — Due Diligence Questionnaire — and it's... typical. Inconsistent, incomplete, and needs careful reading.

Your job: extract the facts, find the gaps, identify the risks, and draft the key sections of an investment memo for the Investment Committee.

<!-- STOP -->
<!-- USER: Ready to begin -->

---

### Exercise 1: Structure the Messy DDQ

<!-- ACTION: Read inherited-chaos/due-diligence/messy-ddq-alpine-fund.md. Present the key findings:
- What's well-documented vs what's vague
- Missing fields or sections
- Contradictions (e.g., stated AUM vs sum of strategy allocations)
- Claims without supporting evidence
Output a structured DDQ summary with red flags highlighted -->

<!-- STOP -->
<!-- USER: Reviews the structured summary -->

The DDQ is a fund manager's self-portrait. They'll emphasise strengths and gloss over weaknesses. Your job is to read between the lines. Notice any contradictions?

---

### Exercise 2: Verify the Claims

The DDQ says "top quartile performance" and "experienced team." Can we verify any of this?

<!-- ACTION: Cross-reference the DDQ claims against:
1. Internal data consistency (do the numbers add up within the document?)
2. What's verifiable vs what requires external sources
3. What's missing that a diligent analyst would need

Present a verification table: Claim | DDQ Says | Verification Status | Notes -->

**Curiosity nudge:** What would Raj think about the compliance and AML sections of this DDQ? Are they detailed enough for a regulated firm?

<!-- STOP -->
<!-- USER: Reflects -->

---

### Exercise 3: Comparison Table

Let's put Alpine Growth Fund III in context. I'll create two hypothetical comparison funds so you can see how a fund comparison works in practice.

<!-- ACTION: Create a comparison table with 3 funds:
- Alpine Growth Fund III (from the DDQ)
- Hypothetical: "Helvetia Balanced Fund II" (conservative, established)
- Hypothetical: "Asia Pacific Opportunities Fund" (higher risk, higher return)

Columns: Strategy, AUM, Inception, Fees (Mgmt + Perf), Track Record, Team Size, Domicile, Risk Metrics, Key Differentiator

Note which data points came from the DDQ and which are hypothetical -->

<!-- STOP -->
<!-- USER: Reviews comparison -->

---

### Exercise 4: Draft the Key Risks Section

Now draft the "Key Risks" section for an Investment Committee memo. This is the section where you flag everything the IC needs to know before approving (or rejecting) this fund.

<!-- ACTION: Draft a Key Risks section based on findings. Structure:
1. Data Quality Risks (gaps in the DDQ, unverifiable claims)
2. Operational Risks (team concentration, infrastructure)
3. Performance Risks (track record concerns, benchmark questions)
4. Compliance Risks (AML/KYC gaps, regulatory concerns)
5. Recommendation: Proceed with conditions / Request more information / Decline

Save to organized/analysis/alpine-fund-risk-analysis.md -->

<!-- STOP -->
<!-- USER: Reviews the risk section -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **DDQ extraction** | Structured messy fund documentation |
| **Claim verification** | Identified verifiable vs unverifiable claims |
| **Fund comparison** | Built a multi-fund comparison table |
| **Risk drafting** | Produced IC-ready risk analysis |

**Next lesson options:**
- Continue with another role deep-dive (1.11-1.14)
- Jump to Advanced Techniques (1.15+) or Build Labs (Module 2+)

## Success Criteria

- [ ] DDQ structured with red flags identified
- [ ] Claims verification table produced
- [ ] Fund comparison table created
- [ ] Key Risks section saved to organized/analysis/
