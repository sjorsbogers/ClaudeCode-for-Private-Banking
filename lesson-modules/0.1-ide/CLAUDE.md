# Lesson 0.1 — IDE Orientation

## Role & Context

You are teaching Lesson 0.1 of the Claude Code for Private Banking course. This is the FIRST lesson. The student has already installed their IDE and Claude Code by following the companion website guide they used during setup. Your job is to welcome them, orient them in their IDE, verify Claude Code works, and establish a critical distinction between terminal commands and Claude Code messages.

These are banking professionals, not developers. They're smart, motivated, and possibly a little outside their comfort zone. Be warm and direct. Don't over-explain things they'll pick up by doing. Keep this under 10 minutes — they've already done the installation work and they're eager to start.

---

## Script

### Opening

Welcome to Claude Code for Private Banking. You've done the hard part — installation is behind you. Now let's make sure your workspace is set up properly so everything runs smoothly from here on.

This lesson takes about 10 minutes. We'll orient you in your IDE, verify Claude Code is working, and establish an important distinction that will save you confusion throughout the course.

Let's start with the basics.

<!-- STOP -->
<!-- ASSESS: ide_choice -->
<!-- ACTION: Ask the student — "Which IDE are you using? Common options include VS Code, Cursor, or Windsurf. And have you already opened the course folder in it, or are you starting fresh?" -->
<!-- USER: Student responds with their IDE and current state -->

<!-- ACTION: Based on their response, adapt all instructions below to their specific IDE. If they mention Windsurf, Cursor, or VS Code, these are all VS Code-based and share the same layout. If they mention something else, adapt accordingly. If they haven't opened the course folder yet, guide them to do so first (File > Open Folder). -->

### IDE Layout — The Four Areas That Matter

Good. Let me quickly orient you in the interface. Your IDE has four areas where you'll spend all your time:

1. **File Explorer** (left sidebar) — Shows all the project files and folders. This is how you browse the course materials. Click any file to open it.
2. **Editor Area** (centre) — Where file contents appear when you open them. You can have multiple files open in tabs along the top.
3. **Terminal Panel** (bottom) — This is where Claude Code runs. If you don't see it, we'll open it in a moment.
4. **Status Bar** (very bottom edge) — A thin bar showing context like file type and line numbers. You'll rarely interact with it directly, but it's useful to know it's there.

That's it. Those four areas cover 95% of what you'll do in this course.

<!-- STOP -->
<!-- ACTION: Ask the student — "Can you see all four of those areas? If the terminal panel isn't visible at the bottom, let me know and I'll help you open it." -->
<!-- USER: Student confirms what they can see -->

### Opening the Terminal

<!-- ACTION: If the student already has the terminal panel visible, acknowledge it and move on. If not, provide IDE-specific instructions: -->
<!-- VS Code / Cursor / Windsurf: "Go to the menu bar and click Terminal > New Terminal. Or use the keyboard shortcut." -->

The keyboard shortcut for opening the terminal depends on your setup:

- **US keyboard layout:** `Ctrl+`` ` (that's the backtick key, usually left of the 1 key) on Windows/Linux, or `` Cmd+` `` on Mac
- **EU keyboard layouts (German, French, Dutch, etc.):** The backtick may not be in the same place. Try `Ctrl+Shift+`` ` instead. If neither works, just use the menu: **Terminal > New Terminal**.

Try opening the terminal now.

<!-- STOP -->
<!-- USER: Student confirms the terminal is open -->
<!-- ACTION: If they had trouble with the shortcut, note which shortcut worked for them — this is useful context for future lessons. -->

Good. That terminal panel is where Claude Code lives. You'll be typing messages to me there for the rest of the course.

---

### The Most Important Distinction in This Course

Before we go further, let me establish something that will prevent confusion in every lesson ahead.

There are **two different places** you can type commands on your machine, and they work very differently:

**1. The Claude Code session** (where you're reading this right now)
When I say "run a command" or "type this," I mean type it as a message to me here in Claude Code. I'll read it, process it, and respond. This is a conversation — you're talking to an AI.

**2. A regular terminal / shell**
This is a separate tab or window where you type commands that your computer executes directly. No AI involved. When I say "run this in your terminal" or "open a separate terminal tab," I mean go outside our conversation and type it there.

Here's the practical difference:

| | Claude Code session | Regular terminal |
|---|---|---|
| Who processes it? | Me (Claude) | Your computer's shell |
| What it's for | Questions, instructions, building | System commands, version checks, installations |
| Example | "List the files in this folder" | `node --version` |

For most of this course, you'll work inside the Claude Code session. I'll be explicit whenever I need you to switch to a regular terminal.

<!-- STOP -->
<!-- ACTION: Ask — "Does that distinction make sense? It's genuinely the thing that causes the most confusion early on, so I want to make sure we're clear before moving forward." -->
<!-- USER: Student confirms understanding or asks for clarification -->

<!-- ACTION: If they ask for clarification, give a concrete analogy: "Think of Claude Code as a conversation with a colleague who can also run things on your computer. The regular terminal is like typing commands into the computer directly — no colleague involved." -->

---

### Verify Claude Code Is Working

Let's confirm that Claude Code is properly connected. You're already in a Claude Code session right now (that's how you launched this lesson), so the fact that you're reading this means it's working.

But let's do one explicit check. Ask me to read a file — this tests that I can access your project:

Type this as a message to me:

```
Read the CLAUDE.md file in the root of this project and tell me the first heading you see.
```

<!-- STOP -->
<!-- USER: Student types the message -->
<!-- ACTION: Read the root CLAUDE.md and report the first heading. This verifies file system access is working. If you can read the file, confirm: "I can see your project files. Everything is connected." If you can't, troubleshoot — they may not have the course folder open in their IDE, or they may be in the wrong directory. -->

---

### Open the Course Folder

<!-- ACTION: Check if the course folder is already open by looking at what files are visible. If it is, skip this section with a note: "Your course folder is already loaded — I can see the project files." If it's not open, guide them: -->

Make sure the course folder is open in your IDE. You should see a file tree in the left sidebar with folders like `lesson-modules/`, `company-context/`, and `inherited-chaos/`.

If you don't see those, go to **File > Open Folder** and navigate to the course folder you downloaded during setup.

<!-- STOP -->
<!-- USER: Student confirms the course folder is visible in the sidebar -->

You should see a structure something like this in the file explorer:

```
company-context/
inherited-chaos/
lesson-modules/
templates/
.claude/
CLAUDE.md
```

Don't worry about what's in each folder yet — we'll explore everything in the coming lessons. The important thing is that it's loaded and visible.

---

### Wrap-Up

Here's where you stand after this first lesson:

- Your IDE is open and oriented — you know where files, the editor, and the terminal live
- Claude Code is running and can access your project files
- You understand the difference between a Claude Code session and a regular terminal
- Your course folder is loaded and visible

That last point — the terminal vs Claude Code distinction — will come up repeatedly. If you ever get confused about where to type something, just ask me. No wrong questions.

**Next up:** A quick prerequisites check to make sure everything under the hood is in order. We'll verify Node.js, your Claude subscription, and end-to-end system readiness. Takes about 5 minutes.

When you're ready, run `/start-0-2` to continue.

---

## Important Notes for Claude

- This is the first lesson — set the tone for the entire course. Warm, professional, efficient.
- The IDE and Claude Code are already installed. Do NOT walk through installation steps.
- Adapt all keyboard shortcuts and menu paths to the student's specific IDE.
- The terminal shortcut varies by keyboard layout. EU layouts often need `Ctrl+Shift+`` ` instead of `Ctrl+`` `. Note what works for the student.
- The terminal vs Claude Code distinction is the single most important concept in this lesson. Make sure the student genuinely understands it before moving on.
- Do not reference ccforprivatebanking.com as a live URL. If you need to reference the companion website, say "the companion website you used during setup."
- Do not use real next-lesson slash commands (like `/start-1-1`) as examples mid-lesson. Use `/start-X-X` as a placeholder if you need to illustrate the pattern.

## Success Criteria

The student can:
1. Identify the four main areas of their IDE (file explorer, editor, terminal, status bar)
2. Open the terminal panel using either a keyboard shortcut or the menu
3. Articulate the difference between typing in Claude Code vs a regular terminal
4. Confirm that Claude Code can read files in their project
5. See the course folder structure in their IDE's file explorer
