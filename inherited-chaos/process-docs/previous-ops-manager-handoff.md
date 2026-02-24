# Thomas Reiter — Handoff Notes

*Last updated: January 3, 2026*
*Status: I'M DONE. Good luck to whoever gets this.*

---

## How Things Work (More or Less)

### Daily Stuff
- Market data comes in through Bloomberg at 6am CET. Sometimes the feed breaks. When it does, restart the Bloomberg terminal in the server room (yes, physically — the auto-restart script stopped working 6 months ago and nobody fixed it)
- Sarah's team usually has client requests in by 9am. They come through email, Slack, sometimes phone. There's no ticketing system. I tried to set one up in Q2 but Marcus said it was "too corporate"
- Raj needs compliance checks done by EOD for any trades placed. The checklist is in SharePoint somewhere. I think. Actually I'm not sure which version is current — there are like 4 versions

### Reporting — THE BIG ONE
OK so this is the thing that ate my life for 2 years. Quarterly reporting. Let me explain why it's broken:

1. Portfolio data lives in three places: Bloomberg (market data), Salesforce (client info), and the custom portfolio system that Erik built 4 years ago. None of these systems talk to each other.
2. To create ONE client report, you need to:
   - Pull holdings data from the portfolio system (export to CSV, it's the only option)
   - Pull market/benchmark data from Bloomberg
   - Pull client preferences and risk profile from Salesforce
   - Open the Word template (there are different templates for different client tiers — Platinum, Gold, Standard — but half the time people use the wrong one)
   - Manually type in the performance numbers
   - Create charts in Excel, screenshot them, paste into Word (YES REALLY)
   - Write the commentary section (this is the longest part — each client needs personalized commentary)
   - Send to the RM for review (usually takes 2-3 days to get feedback)
   - Make changes
   - Generate PDF
   - Send to client
3. Total time per report: roughly 2 full days of work
4. We have 200+ clients
5. You do the math

### ------- IMPORTANT THING I NEVER GOT TO BUILD -------

**If I could do one thing differently, I would have built automated, template-driven reporting from day one.**

Here's the thing — 80% of every report is the same structure. The data changes, the commentary changes, but the template is identical. If we had a system that:
- Auto-pulled data from our three systems
- Generated the standard sections automatically
- Let RMs add personalized commentary
- Applied the right template based on client tier
- Generated PDF with one click

...we'd cut report creation from 2 days to maybe 2-3 hours. Maybe less.

I sketched out a plan for this in Q3 2025. Marcus liked it. Sarah loved it. But then we had the FINMA audit and I got pulled into compliance remediation for 3 months. By the time that was done, I was burnt out.

The plan is somewhere in my documents. Or maybe I deleted it. I honestly can't remember.

### -------

## System Passwords & Access
All in 1Password. Talk to Lisa for access. Don't let Raj's team use the portfolio system admin login to check client data — they keep accidentally modifying records.

## Client Tiers
- Platinum: $50M+ AUM. Get white-glove everything. There are about 25 of these.
- Gold: $20-50M. Standard service. About 80 clients.
- Standard: $10-20M. Minimal customization. About 100+ clients.

The tiers are supposed to determine service levels but honestly everyone gets the same overwhelmed treatment right now.

## Things I Started But Didn't Finish

1. **Ticketing system** — Started evaluating Zendesk vs Freshdesk. Marcus shot it down. Maybe try framing it differently — not "ticketing" (sounds corporate) but "client request tracking" (sounds client-focused)
2. **Onboarding automation** — Got halfway through mapping the process. See onboarding-process-v3-FINAL-v2.md. The process has 12 steps and 6 handoffs. It should have 5 steps and 2 handoffs.
3. **Data quality project** — Client data in Salesforce is about 50% complete. Started a cleanup initiative. Got through the Platinum clients before I ran out of time/will.
4. **Dashboard prototype** — Explored Power BI for a client-facing dashboard. Erik said he could build it in 2 weeks. That was 8 months ago. Erik is good but overwhelmed.
5. **Meeting prep template** — Sarah asked for a standard meeting prep template. I made one in Word. Nobody used it because it was too generic. What they actually need is something that auto-populates with client data.

## Things I Wish I'd Done
- Automated the reporting workflow on day one
- Pushed harder for system integration (Bloomberg → Portfolio System → Salesforce)
- Built a knowledge base so all the context in my head wasn't trapped in my head
- Hired a junior ops person to handle the routine stuff
- Said "no" to more things

## People Notes
- **Marcus** — Brilliant investor, not a great operator. He'll support operational improvements if you frame them in terms of client retention and AUM protection. Don't talk about "efficiency" — talk about "client experience."
- **Sarah** — Your best ally. She understands the problems because she hears client complaints daily. Get her on your side first and Marcus will follow.
- **Raj** — Good intentions, slow execution. He'll want everything documented before you start. Push back gently — sometimes you need to build the plane while flying it.
- **Lisa** — Joined recently from McKinsey. Very process-oriented. She'll want to do a full diagnostic before making changes. That's probably right but you might not have time for it.
- **Erik** (developer) — Maintains the custom portfolio system solo. He's a flight risk. If he leaves, we're in serious trouble because nobody else understands the system.

## Vendor Contacts
- Bloomberg: Account rep is Jessica Tang, +41 44 XXX XXXX
- Salesforce: Managed by IT team (2 people), talk to Priya
- AWS: The portfolio system runs on AWS. Erik has the credentials. Nobody else does. (This terrifies me.)
- Office supplies: We use Lyreco. Login is in the shared drive somewhere.

## Random Notes
- The coffee machine on the 3rd floor is better than the one on 5
- Marcus prefers short, visual updates — no more than 1 page, with charts. He doesn't read emails longer than 3 paragraphs
- Client events budget is CHF 50K/year, barely used. Sarah has ideas but no time to execute
- Parking: your badge gets you into P2 but not P1 (P1 is for partners only)

Sorry for the brain dump. I know this is messy. I was planning to organize it but... well, here we are.

Good luck. You'll need it. But also, this place has real potential. The investment team is genuinely excellent. The clients are (mostly) great. The operations just need to catch up with the ambition.

— Thomas
