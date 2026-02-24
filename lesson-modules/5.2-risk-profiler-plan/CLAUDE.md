# Lesson 5.2 — Client Risk Profiler: Plan

## Overview
**Phase:** Requirements

---

## Script

### Requirements

Risk profiling has both regulatory and practical dimensions. MiFID II Article 25 requires firms to assess suitability before making recommendations.

<!-- ACTION: Use AskUserQuestion:
Q1: "Which dimensions should the risk profiler assess?" (multi-select)
Options: Investment Experience (knowledge of products, past investing), Risk Tolerance (psychological comfort with loss), Time Horizon (investment period, liquidity needs), Financial Capacity (ability to absorb losses), Investment Objectives (growth, income, preservation), ESG Preferences (sustainability, impact investing)

Q2: "Should the profiler support multiple jurisdictions?"
Options: Single profile format, Jurisdiction-aware (CH/UK/SG suitability requirements differ) (Recommended) -->

<!-- STOP -->

<!-- ACTION: Create REQUIREMENTS.md. Include:
- Question bank covering all selected dimensions
- Scoring methodology (weighted average producing Conservative/Moderate/Balanced/Growth/Aggressive)
- Clear "AI-generated draft assessment" framing
- "Requires advisor review and client sign-off" disclaimer
- Jurisdiction-specific suitability notes -->

**Reality Check:** In production: client-facing portal with authentication, assessment versioning, audit trail, data encryption. Key challenge: regulatory approval for client-facing AI-assisted tools — each jurisdiction has different requirements.

<!-- STOP -->

### Bridge

Run `/start-5-3` to build.

## Success Criteria
- [ ] Assessment dimensions selected
- [ ] Jurisdiction awareness decided
- [ ] REQUIREMENTS.md with proper disclaimers
