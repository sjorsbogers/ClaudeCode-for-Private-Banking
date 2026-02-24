# Lesson 1.17 — External Tools & Integrations

## Role & Context

ALL NEW lesson. Overview of what Claude Code connects to and when to use different tools. Conceptual understanding, not hands-on setup.

---

## Script

### Opening

Claude Code doesn't work in isolation. It can connect to external tools, search the web, read different file formats, and integrate with development platforms. Understanding what's possible helps you make better decisions about when to use Claude Code and when to use something else.

This is a "know your toolkit" lesson.

<!-- STOP -->
<!-- USER: Ready -->

---

### MCP: Model Context Protocol

MCP is Claude Code's way of connecting to external data sources and tools. Think of it as installing apps on your phone — each MCP server adds a new capability.

**What MCP servers can connect to:**
- Databases (query your portfolio system directly)
- APIs (pull live market data, CRM records)
- File systems (access shared drives, document management)
- Web services (regulatory databases, news feeds)

**Why it matters for banking:**
Right now, you copy data from Bloomberg into a file, then ask Claude to analyse it. With MCP, Claude could read Bloomberg data directly. No copy-paste. No stale data. No transcription errors.

**Current status:** MCP is relatively new. Your firm's IT team would need to set up the servers. You don't need to do this now — but knowing it exists means you can ask the right questions when your firm evaluates AI tools.

<!-- STOP -->
<!-- USER: Acknowledges -->

---

### GitHub Integration

You'll use GitHub in the Build Labs. Here's the concept:

**Version control** means every change to your project is tracked. You can see what changed, when, and why. You can go back to any previous version. You never lose work.

**Why it matters in banking:**
- Audit trail for tool development
- Collaboration with engineering teams
- Always `--private` — never expose internal tools publicly

<!-- STOP -->

---

### Web Search

Claude Code can search the web for current information. Useful for:
- Regulatory updates ("latest FINMA guidance on AI")
- Market intelligence ("Q4 wealth management trends")
- Competitor research ("UBS digital client portal features")

**Limitations:**
- Web results aren't verified — always cross-check important claims
- Not a substitute for paid databases (Bloomberg, PitchBook, Preqin)
- Results may be outdated or biased

---

### File Format Handling

Claude Code can read and work with multiple file formats:

| Format | Capability | Use Case |
|--------|-----------|----------|
| Markdown (.md) | Full read/write | Notes, reports, documentation |
| CSV | Full read/analyse | Data files, exports |
| PDF | Read and extract | Regulatory docs, fund factsheets |
| Images | View and analyse | Screenshots, charts, diagrams |
| JSON | Full read/write | Configuration, structured data |
| Code files | Full read/write/execute | Build Labs |

### Exercise 1: Multi-Format Analysis

Let's test this with different file types from the chaos files.

<!-- ACTION: Read 2-3 different file formats from the chaos files (at least one CSV and one markdown). Show how Claude handles each format differently and what can be extracted from each. -->

<!-- STOP -->
<!-- USER: Sees multi-format handling -->

---

### When to Use What

| Tool | Best For | Not Great For |
|------|----------|--------------|
| **Claude Code** | File-intensive work, building tools, persistent projects, multi-file analysis | Quick one-off questions, brainstorming |
| **Claude.ai** | Quick questions, brainstorming, conversation, exploring ideas | Working with local files, building tools |
| **ChatGPT** | Similar to Claude.ai, different strengths | Same limitations as Claude.ai |
| **Bloomberg/Refinitiv** | Verified market data, real-time pricing | Analysis, synthesis, document creation |
| **Specialised tools** | Their specific domain (CRM, portfolio system, etc.) | General analysis, document generation |

The key insight: **Claude Code is strongest when you need it to work with YOUR files and YOUR context.** That's what makes it different from a chatbot.

---

### Exercise 2: Integration Architecture

Let's think conceptually: if Claudius Capital wanted to connect Claude Code to their existing systems, what would the architecture look like?

<!-- ACTION: Create a conceptual integration architecture diagram (as markdown):
- Which systems would connect (Bloomberg, Salesforce, Portfolio System)
- What data flows where
- Where Claude Code fits in the workflow
- What security controls would be needed at each connection point

Save to organized/analysis/integration-architecture.md -->

<!-- STOP -->
<!-- USER: Reviews architecture -->

---

### Wrap-Up

| Concept | What You Learned |
|---------|-----------------|
| **MCP** | How Claude Code connects to external systems |
| **GitHub** | Version control for tool development |
| **Web search** | Capabilities and limitations |
| **File formats** | What Claude Code can read and process |
| **Tool selection** | When to use Claude Code vs other tools |

Run `/start-1-18` for Building Verification Into Your Workflow.

## Success Criteria

- [ ] Student understands MCP concept and potential
- [ ] GitHub purpose and private repo importance understood
- [ ] File format handling demonstrated
- [ ] Integration architecture saved to organized/analysis/
