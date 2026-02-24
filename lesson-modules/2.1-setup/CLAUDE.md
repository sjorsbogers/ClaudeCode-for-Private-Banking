# Lesson 2.1 — Build Lab Setup (Mindset)

## Role & Context

First lesson of Module 2: Build Lab — Client Report Generator. The student completed Module 1 (daily skills). Now they build their first tool. Reframe as Build Lab — optional advanced module. Establish PM-not-engineer model.

v2 fixes: Force light mode from start, port management teaching, private repos default.

---

## Script

### Opening

Welcome to the Build Labs. This is optional — Module 1 gave you everything you need for daily work. But if you want to see what Claude Code can create when you direct a full tool build, this is where it happens.

You're about to build a **Client Report Generator** — a web application that takes portfolio data and produces polished, branded quarterly reports.

Before we start: you are NOT the engineer. You are the product manager.

<!-- STOP -->
<!-- ASSESS: coding_experience -->
<!-- ACTION: Use AskUserQuestion: "How comfortable are you with the idea of building a web application? 1 = 'Never done anything like this,' 3 = 'I've seen it done,' 5 = 'I've built things before'" -->

<!-- STOP -->

### The PM-not-Engineer Model

Here's the workflow you'll use for every Build Lab:

1. **You describe** what you want — in plain English
2. **Claude builds it** — writes the code, creates the files
3. **You review** — look at the result in your browser
4. **You give feedback** — "Make the header navy blue," "Add more spacing"
5. **Claude iterates** — implements your changes
6. **Repeat** until it's right

You will never open a code file and type JavaScript. You look at results and say what needs to change. That's your job.

<!-- STOP -->
<!-- USER: Acknowledges the build loop -->

### Data Integration Context

The report generator needs data. In the real world:

| System | What It Holds | In This Course |
|--------|--------------|----------------|
| Bloomberg | Market data, benchmarks | We use fictional data |
| Salesforce CRM | Client details | We use chaos file data |
| Portfolio System | Holdings, returns | We use form input + CSV paste |

<!-- ACTION: Read a client data file from inherited-chaos/client-data/ and show data quality issues to the student. -->

**Key data principles for every tool:**
1. Validate inputs — check required fields
2. Handle gaps gracefully — "Data not available" not blank
3. Show data freshness — "Data as of: [date]"
4. Flag inconsistencies rather than hiding them

### Port Management

When we run the development server, it uses port 3000 on your computer. If you build multiple tools, each needs its own port. We'll manage this as we go — just know that if you see "port already in use," we close the previous server first.

<!-- STOP -->

### Scaffolding the Project

Time to set up the foundation.

<!-- ACTION: Create a Next.js app:
npx create-next-app@latest claudius-report-generator --typescript --tailwind --eslint --app --src-dir --no-import-alias

After creation, immediately:
1. In src/app/globals.css, add: :root { color-scheme: light; }
2. In src/app/layout.tsx, add suppressHydrationWarning to <html> and <body> tags
3. Note to student: "I've set light mode and suppressed browser extension warnings from the start — these prevent common visual issues." -->

<!-- STOP -->
<!-- USER: Approves project creation -->

Here's what was created. The key parts:
- `src/app/page.tsx` — your main page (the report generator)
- `src/app/layout.tsx` — overall page structure
- `src/app/globals.css` — global styles

**Important:** All GitHub repos for this course will be private. In banking, default to private. Always.

<!-- STOP -->

### Wrap-Up

- Mindset set: you're the PM, Claude is the engineer
- Build loop understood: describe → build → review → feedback → iterate
- Project scaffolded with light mode and clean defaults
- Port management introduced

**Next:** Lesson 2.2 — we define exactly what the report should include. Run `/start-2-2` when ready.

## Success Criteria

- [ ] Student's coding comfort assessed
- [ ] PM-not-engineer model understood
- [ ] Next.js project created with light mode and suppressHydrationWarning
- [ ] Data context and quality principles covered
