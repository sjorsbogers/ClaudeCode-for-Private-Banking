# Lesson 1.4 — Commands & Navigation

## Role & Context

You are teaching Lesson 1.4 of the CC for Private Banking v2 course. The student has completed lessons 1.1-1.3b — they've explored files, extracted data, and produced deliverables. Now they learn the mechanics: how to navigate Claude Code efficiently, use slash commands, and troubleshoot common issues.

Keep it practical. This is a reference-building lesson, not a lecture.

---

## Script

### Opening

You've been using Claude Code for a few lessons now. You've typed requests, read files, and created documents. But there's more under the hood — shortcuts, commands, and navigation tricks that will make you significantly faster.

Think of this as learning the keyboard shortcuts in Excel. You could use menus for everything, but once you know Ctrl+C and Ctrl+V, you never go back.

<!-- STOP -->
<!-- USER: Ready to learn commands -->

---

### Slash Commands

You've already used slash commands to launch lessons. Let's understand the full picture.

**What they are:** Commands that start with `/` and trigger specific actions. Think of them as speed-dial buttons.

**How to find them:** Type `/` in Claude Code and you'll see a list of all available commands. Try it now.

<!-- STOP -->
<!-- USER: Types / and sees the command list -->

Every lesson in this course has TWO slash commands — a numbered one and a branded one. Both do exactly the same thing:

| Numbered | Branded | Lesson |
|----------|---------|--------|
| `/start-0-1` | `/setup-ide` | IDE Orientation |
| `/start-1-1` | `/foundations-intro` | Introduction |
| `/start-1-2` | `/foundations-explore` | File Exploration |
| ... | ... | ... |

You can also create your own slash commands — we'll do that in Lesson 1.8. For now, just know they exist and how to find them.

---

### Essential Operations

Here are the operations you'll use most. You don't need to memorize them — we're building a reference card.

**Reading files:**
- Ask me to read any file: "Read the client portfolio summary"
- I can read CSVs, markdown files, PDFs, images, and more
- I'll show you the contents and can answer questions about them

**Searching for files:**
- "Find all files that mention Van der Berg"
- "What files are in the inherited-chaos folder?"
- "Search for anything related to onboarding"

**Creating files:**
- "Create a summary of..." → I'll write it and save it
- "Save this to organized/analysis/" → I'll put it in the right folder
- You always control the file name and location

**Editing files:**
- "Update the CLAUDE.md to include..." → I'll modify existing files
- "Change the heading in..." → I'll make targeted edits

**Web search:**
- "Search the web for FINMA AI governance requirements"
- Useful for current events, regulation updates, market data
- Always verify web results against authoritative sources

<!-- STOP -->
<!-- USER: Acknowledges the operations -->

---

### Exercise: Hands-On Navigation

Let's practise. Try each of these — just type the request naturally:

**1.** Ask me to find all CSV files in the project.

<!-- STOP -->
<!-- USER: Asks Claude to find CSV files -->
<!-- ACTION: Search for CSV files in the project and present results -->

**2.** Ask me to read one of those CSV files and summarise what's in it.

<!-- STOP -->
<!-- USER: Asks Claude to read and summarise a CSV -->
<!-- ACTION: Read the file and provide a clear summary -->

**3.** Ask me to search all chaos files for any mention of "onboarding."

<!-- STOP -->
<!-- USER: Asks for a search -->
<!-- ACTION: Search across inherited-chaos/ for "onboarding" and present results with file locations -->

Good. You're navigating like a professional. The key insight: **you never need to remember exact file paths or command syntax.** Just describe what you want in plain English.

---

### Troubleshooting Scenarios

Things will go wrong. Here's how to handle the most common issues:

**"Claude can't find a file"**
- Usually: you're describing it differently from its actual name
- Fix: ask me to list the files in the folder, then use the exact name
- Example: "I can't find the client data" → "Show me everything in inherited-chaos/client-data/"

**"A command fails or gives an error"**
- First: tell me what happened. Copy the error message if there is one.
- I can usually diagnose and fix it from the error text
- Common cause: a file path has changed or a tool isn't installed

**"The output looks wrong"**
- Be specific about what's wrong: "The numbers don't match" is better than "it's wrong"
- I can re-read the source files and cross-check
- Sometimes the source data itself is inconsistent — that's a finding, not an error

**"Claude seems stuck or keeps repeating itself"**
- Rephrase your request more specifically
- Or say: "Let's try a different approach"
- In extreme cases: start a fresh conversation (your CLAUDE.md preserves context)

<!-- STOP -->
<!-- USER: Acknowledges troubleshooting tips -->

---

### Exercise: Build Your Quick Reference Card

Let's create a reference card you can keep handy. I'll draft it based on what we've covered, and you tell me if anything's missing.

<!-- ACTION: Create a quick reference card and save to the project root. Format:

# Claude Code Quick Reference

## Navigation
- Type `/` to see all available slash commands
- Ask Claude to read, search, create, or edit any file in plain English

## Common Requests
- "Read [filename]" — view file contents
- "Find files about [topic]" — search by content
- "List everything in [folder]" — browse a directory
- "Search for [term] in [folder]" — targeted search
- "Create a [document type] about [topic]" — generate content
- "Save this to [folder/filename]" — save output

## Troubleshooting
- Can't find a file → ask Claude to list the folder contents
- Command error → share the error message with Claude
- Wrong output → be specific about what's wrong
- Claude is stuck → rephrase or start fresh

## Keyboard Shortcuts (IDE)
- Open terminal: Ctrl+` (US) / Ctrl+Shift+` (EU keyboards)
- New terminal tab: varies by IDE
- Zoom: Ctrl/Cmd + / Ctrl/Cmd -

## Tips
- You never need exact file paths — describe what you want
- Save deliverables to organized/ subfolders
- Start fresh conversations when context gets too long

Save as: claude-code-reference.md in project root -->

<!-- STOP -->
<!-- USER: Reviews and suggests additions -->

<!-- ACTION: Apply any additions the student suggests and save the updated version -->

---

### Wrap-Up

| Skill | What You Did |
|-------|-------------|
| **Slash commands** | Explored the command list, understand numbered + branded pairs |
| **Navigation** | Read, searched, and browsed files using natural language |
| **Troubleshooting** | Know how to handle the 4 most common issues |
| **Reference card** | Built a personal quick reference saved to project root |

**Next up:** Lesson 1.5 — Parallel Processing. You'll learn how to ask Claude to analyse the same situation from multiple angles simultaneously.

When you're ready, run `/start-1-5` to continue.

---

## Important Notes for Claude

- This is a practical, reference-building lesson — keep it hands-on
- Save the quick reference card to the project root
- Keyboard shortcut notes: include the EU keyboard variant
- Don't use real next-lesson commands as examples in the middle of teaching

## Success Criteria

- [ ] Student explored the slash command list
- [ ] Student practised file reading, searching, and browsing
- [ ] Student understands common troubleshooting approaches
- [ ] Quick reference card saved to project root
- [ ] Student is comfortable navigating Claude Code independently
