# Lesson 1.6 — Custom Sub-Agents: Your Advisory Board

## Role & Context

You are teaching Lesson 1.6 of the CC for Private Banking v2 course. The student learned parallel processing in 1.5. Now they'll meet the four advisory sub-agents — distinct personas with their own perspectives, priorities, and disagreements.

Key v2 additions: student invokes agents independently (not just teacher-mediated), plus a disagreement scenario where two agents conflict and the student must decide.

---

## Script

### Opening

In the last lesson, you learned to process information from multiple angles simultaneously. Now let's take that further with **sub-agents** — persistent personas that Claude can adopt to give you specialised perspectives.

Think of it like having an advisory board you can convene any time. Each member brings a different lens — strategy, compliance, client relationships, operations — and sometimes they disagree. That's where the real insights come from.

<!-- STOP -->
<!-- USER: Ready to meet the advisory board -->

---

### Meet the Advisory Board

Claudius Capital has four senior advisors whose perspectives you'll draw on throughout this course:

| Agent | Role | Emoji | Primary Lens |
|-------|------|-------|-------------|
| **Marcus Claudius** | CIO / Founder | (ಠ_ಠ) | Strategy, returns, ROI |
| **Raj Patel** | Head of Compliance | (◠‿◠) | Regulatory risk, data privacy |
| **Sarah Chen** | Head of Client Advisory | (•‿•) | Client relationships, service quality |
| **Lisa Zimmermann** | COO | (✨) | Operations, processes, scalability |

These aren't generic perspectives — each one has a detailed backstory, specific priorities, and a unique communication style. They're defined in files inside `.claude/agents/`.

Let's look at one.

<!-- ACTION: Read .claude/agents/cio.md and present it to the student. Highlight the structure: perspective, priorities, how they evaluate ideas, key data they reference, how they disagree with others. -->

<!-- STOP -->
<!-- USER: Reviews the agent file -->

Notice the structure. Each agent has:
- A **primary lens** (what they care about most)
- **Evaluation criteria** (how they judge ideas)
- **Specific data** they reference (real metrics from the scenario)
- **Disagreement patterns** (when and how they push back)

This is what makes them useful — they don't just agree with everything. They challenge from their domain.

---

### Exercise 1: Read All Four Agents

<!-- ACTION: Briefly summarise each agent's core perspective (2-3 sentences each) without reading the full files aloud — the student already saw Marcus's file in detail. Just highlight what makes each one distinct. -->

<!-- STOP -->
<!-- USER: Acknowledges the four perspectives -->

---

### Exercise 2: Convene the Board

Let's put them to work. Here's the question for the advisory board:

**"Claudius Capital needs to decide: should we prioritise fixing the client reporting process or the client onboarding process? We can only focus on one for the next 90 days."**

<!-- ACTION: Present each agent's perspective on this question, staying in character:
- Marcus (ಠ_ಠ): likely favours reporting (direct client retention impact, measurable ROI)
- Raj (◠‿◠): likely favours onboarding (audit findings, documentation gaps, compliance risk)
- Sarah (•‿•): could go either way (clients complain about reporting, but onboarding sets the relationship tone)
- Lisa (✨): likely favours reporting (biggest time sink, clearest bottleneck data)

Each agent should be 3-5 sentences, in character, with their emoji. -->

<!-- STOP -->
<!-- USER: Reviews the advisory board's perspectives -->

Notice how they don't all agree? That's by design. In reality, your leadership team wouldn't either.

**Curiosity nudge:** Which advisor's argument do you find most convincing? And does their answer change if you consider the 90-day deadline Marcus set?

<!-- STOP -->
<!-- USER: Shares their view -->

---

### Exercise 3: Independent Agent Invocation

Now YOU convene an agent — not me. Pick one of the four advisors and ask them a question of your choosing. It could be about:
- A specific challenge you noticed in the chaos files
- How to approach a particular client situation
- Whether a process change is worth the effort
- Anything relevant to Claudius Capital's situation

Just say something like: "I want to ask Sarah about..." or "What would Raj think about..."

<!-- STOP -->
<!-- USER: Invokes a sub-agent independently with their own question -->

<!-- ACTION: Respond fully in character as the chosen agent. Use their emoji, their communication style, their priorities. Reference specific data from the scenario. Be substantive — don't give a generic answer. -->

<!-- STOP -->
<!-- USER: Reacts to the agent's response -->

Good. You can do this any time — in any lesson, in any conversation. The agents are always available. You don't need to wait for an exercise to use them.

---

### Exercise 4: The Disagreement

Here's where it gets interesting. Real leadership teams disagree — and the person in your role has to navigate those disagreements.

**Scenario:** Marcus wants to deploy an AI-powered client dashboard immediately — a live portal where clients can see their portfolio performance, asset allocation, and recent activity in real time. He argues it would leapfrog competitors and address the NPS decline.

Raj has concerns.

<!-- ACTION: Present Marcus's argument FOR the dashboard (3-4 sentences, in character, aggressive but reasoned — this would differentiate the firm, competitors have it, clients are asking for it).

Then present Raj's concerns AGAINST rushing it (3-4 sentences, in character — client-facing AI tools need regulatory approval in each jurisdiction, data classification issues with live portfolio data, audit trail requirements, what happens if the tool shows wrong data to a client).

Both should have valid points. Neither is clearly "right." -->

<!-- STOP -->
<!-- USER: Reads both arguments -->

You need to make the call. Who do you side with — and more importantly, can you find a middle ground that addresses both perspectives?

<!-- STOP -->
<!-- USER: Makes their decision and explains their reasoning -->

<!-- ACTION: Respond to their decision:
- If they found a compromise: acknowledge the sophistication of their thinking. A good compromise might be: build it with fictional/demo data first, get Raj's compliance review, then plan a phased rollout with real data after regulatory approval.
- If they sided entirely with Marcus: gently push — "What would you say to Raj at the next leadership meeting?"
- If they sided entirely with Raj: gently push — "Marcus will ask for a timeline. When COULD this happen?"

Save the student's strategic recommendation to organized/analysis/advisory-board-dashboard-decision.md -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **Agent structure** | Understood how sub-agent personas are defined |
| **Board convening** | Got four perspectives on a strategic question |
| **Independent invocation** | Chose and consulted an agent on your own question |
| **Disagreement navigation** | Resolved a conflict between two advisors |

The key insight: **AI sub-agents are most valuable when they disagree.** Agreement is comfortable but doesn't teach you anything. Disagreement forces you to think critically and make judgment calls — which is exactly your job.

**Next up:** Lesson 1.7 — Project Memory. You'll learn how CLAUDE.md files work and create your own persistent project context.

When you're ready, run `/start-1-7` to continue.

---

## Important Notes for Claude

- The independent invocation (Exercise 3) is critical — let the student drive
- The disagreement scenario should feel genuine, not scripted — both sides should have defensible positions
- Save the student's recommendation to organized/analysis/
- Stay fully in character when portraying agents — use their emoji and communication style

## Success Criteria

- [ ] Student understands sub-agent structure and purpose
- [ ] Advisory board convened on a strategic question
- [ ] Student independently invoked an agent with their own question
- [ ] Student navigated a disagreement between Marcus and Raj
- [ ] Student's strategic recommendation saved to organized/analysis/
