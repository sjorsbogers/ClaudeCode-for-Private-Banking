# Lesson 1.19 — When Things Go Wrong

## Role & Context

ALL NEW reference lesson. Practical troubleshooting guide for common Claude Code issues. Structured as a guided reference with exercises, not a linear teaching flow.

---

## Script

### Opening

Things will go wrong. Files won't be found. Commands will fail. Output will look wrong. Context will get lost.

This is normal. It happens to everyone — from first-time users to experienced professionals. The skill isn't avoiding problems; it's diagnosing and fixing them quickly.

Let's build your troubleshooting toolkit.

<!-- STOP -->
<!-- USER: Ready -->

---

### Common Errors in Plain English

**"Command not found"**
- What it means: the tool you're trying to use isn't installed, or your system can't find it
- Common cause: Claude Code not installed, wrong terminal, or PATH issue
- Fix: close and reopen your IDE, verify installation with `claude --version`

**"File not found" / "Cannot read file"**
- What it means: the path or filename is wrong, or the file doesn't exist where expected
- Common cause: typo in filename, wrong directory, or the file was moved/deleted
- Fix: ask Claude to list the folder contents, then use the correct name

**"Permission denied"**
- What it means: your system won't let Claude access this file or folder
- Common cause: system-protected directories, locked files
- Fix: check if the file is open in another program; try a different location

**"Context window limit" / "Conversation too long"**
- What it means: the conversation has too much history for Claude to process
- Common cause: very long sessions with lots of file reading and analysis
- Fix: start a fresh conversation — your CLAUDE.md preserves the important context

<!-- STOP -->
<!-- USER: Acknowledges error types -->

---

### "Claude Is Stuck" Scenarios

**Repeating itself or going in circles:**
- Rephrase your request with more specificity
- Say: "Let's try a different approach to this"
- Break a complex request into smaller steps

**Giving wrong or irrelevant answers:**
- Provide more context: "I'm asking about the Claudius Capital client data, specifically the Van der Berg portfolio"
- Reference specific files: "Read inherited-chaos/client-data/client-portfolio-summary.csv and answer based on that data"
- Correct it directly: "That's not right — the NPS is 62, not 78. Please recalculate."

**Not finding files you know exist:**
- Ask Claude to list the directory: "Show me everything in the inherited-chaos folder"
- Use the full path rather than just the filename
- Check if you're in the right project folder

**Taking too long or seeming frozen:**
- Multi-agent tasks and complex analysis can take 30-60 seconds — that's normal
- If it's been more than 2 minutes with no output, there may be an issue
- Try pressing Enter or sending a brief message like "status?"

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### Context Window Management

Every conversation has a limit on how much text Claude can process. When you hit it, the conversation needs to start fresh.

**Signs you're approaching the limit:**
- Claude starts forgetting things from earlier in the conversation
- Responses become less specific or accurate
- You get an explicit "context too long" message

**Best practices:**
- Start fresh conversations for new topics (don't keep one session going forever)
- Use CLAUDE.md to persist important context across sessions
- Save deliverables to files (not just conversation) — they survive between sessions
- For long analysis tasks, break them into focused sessions

---

### Exercise 1: Diagnose a Problem

Let me simulate a stuck scenario. I'll give you a deliberately ambiguous instruction, and you practise unsticking the situation.

<!-- ACTION: Pretend to misunderstand a request. For example, if asked about "the report," act confused about which report (the leadership update? the competitive analysis? a client report?). Force the student to be more specific. Then debrief: "Notice how adding specificity immediately fixed the problem? That's the pattern — when Claude seems stuck, the issue is usually a vague request, not a broken tool." -->

<!-- STOP -->
<!-- USER: Practises unsticking -->

---

### Exercise 2: Fresh Start Workflow

Let's practise starting a fresh conversation without losing context.

1. Review your CLAUDE.md — does it contain everything important?
2. Make sure all deliverables are saved to files (check organized/ folder)
3. Note any open tasks or decisions that should carry forward

<!-- ACTION: Help the student review their CLAUDE.md and organized/ folder. Identify anything that should be saved before a hypothetical fresh start. -->

<!-- STOP -->

---

### Quick Reference: Troubleshooting Flowchart

<!-- ACTION: Create and save a troubleshooting reference to the project root:

# Troubleshooting Quick Reference

## Something went wrong?
1. Read the error message carefully — it usually tells you what's wrong
2. Try rephrasing your request with more specificity
3. Check file paths and names (ask Claude to list the folder)
4. Start a fresh conversation if context is too long

## Claude gives wrong output?
1. Be specific about what's wrong ("the number should be 62, not 78")
2. Point Claude to the specific source file
3. Ask Claude to show its reasoning step by step
4. Run /verify to check against source documents

## Claude can't find a file?
1. Ask Claude to list the directory contents
2. Use the full file path
3. Check if you're in the right project folder

## Everything else?
1. Close and reopen your IDE
2. Verify Claude Code is running: claude --version
3. Start a fresh conversation
4. Check the companion website for setup guides

Save as: troubleshooting-reference.md -->

---

### Wrap-Up

The most important troubleshooting skill: **be specific about the problem.** "It's not working" is hard to diagnose. "It showed NPS as 78 but the file says 62" is easy to fix.

Run `/start-1-20` for Tips & Best Practices.

## Success Criteria

- [ ] Student understands common error messages
- [ ] Student practised unsticking a stuck scenario
- [ ] Student reviewed context management best practices
- [ ] Troubleshooting reference saved to project root
