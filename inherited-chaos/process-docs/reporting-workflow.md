# Current Quarterly Reporting Workflow

*Documented by: Thomas Reiter, August 2025*
*Status: This is how we actually do it. Not how we should do it.*

---

## The Process (7 Steps, ~2 Days Per Client)

### Step 1: Data Pull from Portfolio System (30 min)
- Log into custom portfolio system
- Navigate to client account
- Export holdings as CSV (only export option)
- Export transaction history as CSV
- Calculate performance manually if the system hasn't updated (happens ~20% of the time)
- Save CSVs to the client folder on SharePoint

**Tools:** Custom portfolio system (Erik's creation), SharePoint
**Pain points:** Export only works in CSV. System crashes about once a week during quarter-end. Performance calculation sometimes lags by 48 hours.

### Step 2: Data Pull from Bloomberg (20 min)
- Pull benchmark data for client's strategy
- Pull market index data for commentary section
- Pull sector performance data
- Export to Excel
- Save to client folder

**Tools:** Bloomberg Terminal, Excel
**Pain points:** Bloomberg exports are weirdly formatted. Someone has to clean the data every time. We've asked for API access but it's expensive.

### Step 3: Data Pull from Salesforce (15 min)
- Look up client profile
- Check risk profile and strategy assignment
- Note any special preferences (ESG exclusions, Sharia compliance, specific sector interests)
- Check last meeting notes for anything to reference in commentary
- Copy relevant info into the report draft

**Tools:** Salesforce
**Pain points:** Salesforce data is often outdated. RMs are supposed to update after each client interaction but about 40% of entries are stale.

### Step 4: Assemble in Word Template (45 min)
- Open the correct template (Platinum/Gold/Standard — see client tier list)
- Copy-paste holdings data from CSV
- Format the holdings table (this takes forever because CSV formatting doesn't match Word)
- Enter performance numbers manually
- Copy benchmark comparison data
- Update the date, client name, account numbers
- Update the advisory team contact information

**Tools:** Microsoft Word
**Pain points:** Template versions are confusing. I found 7 different templates on SharePoint last month. Only 3 were current. The "final" template had a typo in the legal disclaimer for 6 months before someone noticed.

### Step 5: Create Charts (30 min)
- Open Excel
- Create asset allocation pie chart from holdings data
- Create performance bar chart (fund vs benchmark)
- Create YTD performance line chart
- Format charts to match brand guidelines (navy + gold)
- Screenshot charts from Excel
- Paste into Word document
- Resize and position charts

**Tools:** Excel, Word, screenshots
**Pain points:** This is the most embarrassing part. We literally screenshot Excel charts and paste them into Word. In 2026. The charts never quite align properly. The resolution is mediocre. I've wanted to fix this for 2 years.

### Step 6: Write Commentary (60 min)
- Write portfolio overview paragraph (what happened this quarter)
- Write performance attribution (what drove returns)
- Write market commentary (relevant macro events)
- Write outlook section (forward-looking view)
- Personalize to client — reference their specific concerns, goals, interests
- Add recommended actions if applicable
- Include compliance disclosures (different for EU vs Swiss vs Singapore clients)

**Tools:** Word, brain, coffee
**Pain points:** This is the most valuable step AND the most time-consuming. Each client needs genuinely personalized commentary. You can't just copy-paste — UHNW clients notice. For Platinum clients, Marcus sometimes writes the commentary himself, which adds another day of waiting.

### Step 7: Review, Finalize, Send (45 min)
- Send draft to RM for review
- Wait for RM feedback (often 1-2 days)
- Incorporate changes
- Final proofread
- Generate PDF
- Email to client with personalized cover note
- Save final version to SharePoint
- Update Salesforce with "report sent" date

**Tools:** Email, Word, SharePoint, Salesforce
**Pain points:** The review cycle is where everything stalls. RMs are busy with clients and deprioritize report reviews. Some reports sit in their inbox for 3-4 days. By then the market data is stale and we have to update the charts.

---

## Time Summary

| Step | Time | % of Total |
|------|------|-----------|
| 1. Portfolio data pull | 30 min | 10% |
| 2. Bloomberg data pull | 20 min | 7% |
| 3. Salesforce data pull | 15 min | 5% |
| 4. Word template assembly | 45 min | 15% |
| 5. Chart creation | 30 min | 10% |
| 6. Commentary writing | 60 min | 20% |
| 7. Review & finalize | 45 min + wait | 15% |
| **Wait time (RM review)** | **~8 hours** | **~35%** |
| **Total active work** | **~4 hours** | |
| **Total elapsed time** | **~2 days** | |

## Quarterly Impact

- 200+ clients × 2 days per report = 400+ person-days per quarter
- Reporting team: 3 people dedicated, plus RM time
- Cost: approximately CHF 200K per quarter in labor (my rough estimate)
- Quarter-end is a nightmare. The team works weekends for 3-4 weeks.
- By the time the last reports go out, the first reports are already 3 weeks old.

## What Automation Could Fix

Steps 1-5 (data pull, assembly, charts) are 47% of the active work and 100% automatable. That's 2 hours per report that nobody should be doing manually.

Step 6 (commentary) is the human-value step. But even here, AI could draft initial commentary that an RM reviews and personalizes. That could cut the time from 60 minutes to 15 minutes.

Step 7 (review) needs a better workflow, not automation. A proper approval system instead of email back-and-forth.

**If we automated steps 1-5 and assisted step 6, we could cut total time from 2 days to about 2-3 hours per client.** That's a 75-85% reduction.

Thomas out.
