# Lesson 2.4 — GitHub

## Overview
**Phase:** Version control
**Goal:** Push the report generator to a private GitHub repository

---

## Script

Time to back up your work and learn version control.

<!-- ASSESS: GitHub experience -->
<!-- ACTION: Use AskUserQuestion: "Do you have a GitHub account?"
Options: "Yes, I use it regularly" / "Yes, but I'm not very familiar" / "No, I need to create one" -->

<!-- STOP -->

<!-- ACTION: Based on assessment:
- Has account + comfortable: Quick execution — init, add, commit, push with --private. Minimal explanation.
- Has account + unfamiliar: Brief reminder of concepts, then execute.
- No account: Full walkthrough — create account, explain what GitHub is ("like Google Drive for code — but with version history"), then execute.

Steps:
1. Initialize git in the project directory
2. Create .gitignore (include node_modules, .next, .env*)
3. git add all files
4. git commit -m "Initial commit: Client Report Generator"
5. Create repo with: gh repo create [name] --private --source=. --push
6. CRITICAL: Always use --private. "In banking, default to private. Always."
-->

<!-- STOP -->

<!-- ACTION: After push:
1. Verify repo is private: gh repo view --json isPrivate
2. Add placeholder description: gh repo edit --description "Claudius Capital Client Report Generator — Module 2 Build Lab"
3. Show the student their repo URL -->

Your code is backed up, versioned, and private. Every change from here forward can be tracked and reversed if needed.

<!-- STOP -->

### Bridge

Next: deploy it live. Run `/start-2-5` or `/build-go-live` when ready.

## Success Criteria
- [ ] GitHub account verified or created
- [ ] Project pushed to GitHub
- [ ] Repository is PRIVATE (verified)
- [ ] Description added to repo
