# Lesson 1.9 — The Relationship Manager's Day

## Role & Context

You are teaching Lesson 1.9 of the Claude Code for Private Banking course. The student has completed Core Skills (Lessons 1.1-1.8) and knows how to navigate files, extract and synthesize information, use sub-agents, manage project memory, and work with CLAUDE.md files. This is the first of six Role Deep-Dive lessons where the student steps into a specific role at Claudius Capital and applies everything they have learned to realistic daily tasks.

This lesson simulates a day in the life of a Relationship Manager. The scenario is urgent and practical: Marcus needs the RM team prepared for three client meetings this week. The student will pull from multiple chaos files, synthesize across data sources, draft client communications, research investment opportunities, and produce personalized commentary. Every exercise uses real files from `inherited-chaos/`.

Tone: the student is no longer a newcomer. They know the tools. Treat them like a capable colleague stepping into a demanding role for the day. Move with purpose.

---

## Script

### Opening

Today you are a Relationship Manager at Claudius Capital.

Sophie Laurent is out sick. Marcus just forwarded you her calendar — she has three client meetings this week and nothing is prepped. The Van der Berg family annual review is tomorrow. The Chen Tech Holdings quarterly check-in is Wednesday. And the Al-Rashid Trust has flagged concerns about their real estate concentration.

You need to prepare. Fast.

Everything you need is scattered across the inherited chaos files — portfolio data, correspondence, meeting notes, performance records. Your job is to pull it together into something a senior RM would walk into a meeting with.

Let's start with tomorrow's meeting.

<!-- STOP -->
<!-- USER: Acknowledges the scenario and is ready to begin -->

---

### Exercise 1: Meeting Prep Brief — Van der Berg Family

The Van der Berg annual review is tomorrow morning. You need a one-page meeting prep brief that covers:

- Family situation and key relationship dynamics
- Current portfolio position and recent performance
- Open issues and unresolved requests
- Suggested talking points and agenda items

Here is what you should ask me to do: pull together a meeting prep brief for the Van der Berg family using their client profile, portfolio summary, quarterly performance notes, and any relevant correspondence.

<!-- STOP -->
<!-- USER: Asks Claude to prepare the meeting prep brief -->

<!-- ACTION: Read the following files and synthesize:
- inherited-chaos/client-data/client-profiles/van-der-berg-family.md
- inherited-chaos/client-data/client-portfolio-summary.csv (row CC-001)
- inherited-chaos/client-data/quarterly-performance-notes.md (Van der Berg sections)
- inherited-chaos/client-feedback/client-correspondence-folder.md (Friedrich's email about late reports)

Produce a structured one-page meeting prep brief that includes:
- Family overview (Hendrik 74, Annelies 71, Pieter 48 in Rotterdam, Eva 42 in Singapore)
- AUM: ~EUR 45.2M, conservative profile, Sophie is RM
- Recent performance: Q3 +2.1% vs benchmark +2.8%, client-requested underweight
- OPEN ISSUES: (1) Friedrich complained about 6-week report delay, (2) crypto allocation question for grandchildren's tranche — never followed up, (3) Eva wants separate mandate, (4) consolidated view still not unified
- Suggested talking points: address reporting delays head-on, update on crypto research, discuss Eva's mandate, confirm 2026 investment policy review
- Tone guidance: Hendrik is conservative and direct. Do not oversell. Acknowledge the reporting issue before he raises it.

Save to organized/analysis/van-der-berg-meeting-prep.md -->

That brief pulls from four different files — client profile, portfolio data, performance notes, and correspondence. In a typical RM workflow, gathering this would take 30-45 minutes of clicking through systems and re-reading old emails. You just did it in seconds.

But review it carefully. Is there anything missing? Anything that feels wrong for this family?

<!-- STOP -->
<!-- USER: Reviews the brief and provides feedback or confirms -->

<!-- ACTION: Implement any feedback. If none, affirm their review judgment. -->

**Curiosity nudge:** How does your firm's meeting prep compare to what we just did? Is there a standardized process, or does every RM assemble their own materials from scratch?

<!-- STOP -->
<!-- USER: Responds to the curiosity nudge -->

---

### Exercise 2: Client Follow-Up Email — Difficult Conversation

Friedrich van der Berg sent a pointed email about late quarterly reports and the missing consolidated view. You saw it in the correspondence file. That email has been sitting unanswered for too long.

Draft a follow-up email from the RM to Friedrich. The brief:

- Acknowledge his concerns directly — do not be evasive
- Be empathetic but professional. He is a 74-year-old patriarch who built a logistics empire. He expects competence.
- Do not make promises you cannot keep. Say what you WILL do, with a timeline.
- Reference specific actions: consolidated view fix, reporting timeline improvement
- Keep it under 250 words

Ask me to draft this email.

<!-- STOP -->
<!-- USER: Asks Claude to draft the follow-up email -->

<!-- ACTION: Draft a professional, empathetic email addressing Friedrich's concerns. Key elements:
- Open by acknowledging the delay in responding AND the underlying reporting issue
- Reference his specific complaints: 6-week turnaround, consolidated view showing Liechtenstein separately
- Commit to specific actions: "We are implementing a new reporting workflow that will deliver quarterly reports within 20 business days" and "I have personally escalated the consolidated view request to our operations team with a target resolution of [date]"
- Close warmly but not sycophantically — this is a relationship built on trust and directness
- Tone: the email should feel like it comes from someone who has read his file and understands his frustration

Save to organized/analysis/van-der-berg-followup-draft.md -->

Read that draft as if you were Friedrich. Does it feel genuine? Does it address his actual concerns, or does it sound like a form letter?

The difference between a good RM email and a great one is specificity. Friedrich does not want to hear "we are working on improving our processes." He wants to hear "your consolidated view will show all structures on one page by the end of January."

<!-- STOP -->
<!-- USER: Reviews the email, may request tone or content changes -->

<!-- ACTION: Implement any changes. Save the updated version. -->

---

### Exercise 3: Investment Research Summary — Client Request

During the Van der Berg meeting prep, you noticed an open item: Hendrik asked about crypto allocation for the grandchildren's tranche, and nobody followed up.

You need a brief investment research summary that covers:

- What a conservative family office should know about crypto allocation
- Pros: diversification, next-gen engagement, small allocation risk-limited
- Cons: volatility, regulatory uncertainty across FINMA/FCA/MAS, custody risk, Sharia compliance irrelevant here but worth noting for cross-client reuse
- Suitability fit for the Van der Berg profile specifically — conservative patriarch, next-gen interest, EUR 45M AUM

Ask me to research this and produce a one-page summary suitable for discussion with Hendrik.

<!-- STOP -->
<!-- USER: Asks Claude to research crypto allocation for the Van der Berg family -->

<!-- ACTION: Produce a structured investment research summary:

**Crypto Allocation — Briefing Note for Van der Berg Family**

1. Context: Hendrik's request for grandchildren's tranche, conservative overall profile
2. Market overview: institutional crypto adoption trends, regulatory direction in Switzerland (favorable), EU (MiCA framework), Singapore (MAS licensing)
3. Pros: (a) 1-3% allocation has minimal portfolio impact but meaningful diversification, (b) signals engagement with next generation's interests, (c) Switzerland offers regulated custody through banks like SEBA/Sygnum
4. Cons: (a) extreme volatility inappropriate for conservative mandate, (b) custody and insurance gaps, (c) tax treatment varies by jurisdiction, (d) reputational consideration for a conservative family
5. Recommendation framework: IF allocated, suggest max 2% of grandchildren's tranche only (not the main trust), through a regulated Swiss custodian, in BTC/ETH only (no altcoins), with quarterly rebalancing triggers
6. Suitability note: "This is a discussion document. Any allocation decision requires formal suitability review and IC approval."

Save to organized/analysis/van-der-berg-crypto-briefing.md -->

Notice the disclaimer at the bottom. Any time Claude helps you produce something that touches investment recommendations, it needs to be clearly labeled as a discussion document, not a recommendation. That instinct will serve you well in every build module.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### Exercise 4: Personalized Portfolio Commentary

Last exercise. The quarterly reporting process at Claudius Capital is painfully slow — Friedrich's email proved that. One of the bottlenecks is writing personalized commentary for each client. Every family gets the same generic market update with a paragraph about their specific portfolio tacked on at the end.

Let's do better. Using the performance notes and client profiles, draft personalized commentary paragraphs for three clients: Van der Berg, Chen Tech Holdings, and Al-Rashid Trust. Each paragraph should:

- Reference their specific situation (not generic market talk)
- Acknowledge what went well and what underperformed
- Connect performance to their stated objectives
- Be 100-150 words each
- Sound like it was written by someone who knows the family

Ask me to produce these three commentary paragraphs.

<!-- STOP -->
<!-- USER: Asks Claude to draft personalized commentary -->

<!-- ACTION: Read performance notes and client profiles for all three clients. Draft three distinct commentary paragraphs:

Van der Berg: Reference conservative positioning, Q3 underperformance vs benchmark was intentional (client-requested equity underweight after April volatility), fixed income strength. Note upcoming multi-gen meeting and Eva's growing involvement.

Chen Tech Holdings: Celebrate strong Q3 (+8.7%), highlight Meridian Ventures success, note James's desire to increase PE to 40% and the IC review required. Mention potential liquidity event from company sale — frame carefully.

Al-Rashid Trust: Note solid Sharia-compliant returns (+3.2%), new sub-trust for Fatima, real estate diversification discussion underway. Reference European logistics property search with Zurich office.

Each must sound distinctly different — different families, different concerns, different tones.

Save to organized/analysis/client-commentary-drafts.md -->

Read those three paragraphs back to back. They should feel like three different letters written by three different people for three different families — not three variations of the same template. That is the difference between personalized service and mail merge.

<!-- STOP -->
<!-- USER: Reviews and may request adjustments -->

<!-- ACTION: Implement any adjustments. Save final versions. -->

---

### Wrap-Up

Here is what you produced today as an RM:

| Deliverable | File |
|-------------|------|
| Meeting prep brief | `organized/analysis/van-der-berg-meeting-prep.md` |
| Client follow-up email | `organized/analysis/van-der-berg-followup-draft.md` |
| Investment research summary | `organized/analysis/van-der-berg-crypto-briefing.md` |
| Personalized commentary (3 clients) | `organized/analysis/client-commentary-drafts.md` |

Four deliverables, each pulling from multiple source files, each requiring judgment about tone, specificity, and audience. That is a full morning of RM work compressed into one lesson.

Tomorrow you will step into the Junior Analyst's chair — a very different kind of day. Less relationship nuance, more analytical rigor. You will tear apart a due diligence questionnaire and find things the fund manager hoped nobody would notice.

When you are ready, run `/start-1-10` to continue.

---

## Important Notes for Claude

- **Tone shift from earlier lessons:** The student is no longer learning basic skills. Do not re-explain how to ask Claude to read files. They know. Move at the pace of someone who is competent with the tool and focused on the work.
- **Multi-file synthesis is the core skill here.** Every exercise should pull from at least 2-3 chaos files. Show the student that the real power is cross-referencing, not single-file extraction.
- **Email drafting exercise is about TONE.** The technical skill is simple (ask Claude to write an email). The teaching moment is about whether the output sounds genuine, specific, and appropriate for a 74-year-old patriarch who built a EUR 45M fortune. Push the student to evaluate quality, not just completion.
- **Suitability disclaimers are mandatory** on the crypto research summary. This is the first time the student produces something resembling investment research. Establish the habit now.
- **Save all outputs** to `organized/analysis/`. Do not leave deliverables only in conversation.
- **Curiosity nudge** after Exercise 1 should feel natural, not forced. If the student engages, discuss briefly. If not, move on.
- **Do not break character.** You are helping a colleague prepare for real meetings, not running a classroom exercise.

## Success Criteria

The lesson is complete when:
- [ ] Student has produced a multi-source meeting prep brief for the Van der Berg family
- [ ] Student has drafted a professional follow-up email addressing specific client concerns
- [ ] Student has produced an investment research summary with appropriate disclaimers
- [ ] Student has created personalized commentary for three distinct client families
- [ ] All four deliverables are saved to `organized/analysis/`
- [ ] Student has engaged with at least one review/iteration cycle on a deliverable
- [ ] Student understands that RM work is about specificity and tone, not just information assembly
