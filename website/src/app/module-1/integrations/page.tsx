import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function IntegrationsPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">External Tools &amp; Integrations</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Claude Code does not work in isolation — it can connect to external tools, search the web, read different file formats, and integrate with development platforms. Understanding what is possible helps you make better decisions about when to use Claude Code and when to use something else.
      </p>

      <LessonCommand numbered="/start-1-17" branded="/advanced-integrations" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "MCP (Model Context Protocol) — how Claude Code connects to databases, APIs, and external systems",
          "GitHub integration — version control, audit trails, and why private repos matter in banking",
          "Web search — capabilities, limitations, and when not to rely on it",
          "File format handling — Markdown, CSV, PDF, images, JSON, and code files",
          "Exercise 1: Multi-format analysis — live demonstration across different chaos file types",
          "Exercise 2: Integration architecture — conceptual design for connecting Claudius Capital's systems",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-teal flex-shrink-0 mt-0.5">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="scenario-context">
        Scenario Context
      </h2>
      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
        Right now you copy data from Bloomberg into a file, then ask Claude to analyse it. With MCP, Claude could read Bloomberg data directly — no copy-paste, no stale data, no transcription errors. This &quot;know your toolkit&quot; lesson is conceptual, not hands-on setup. Understanding what is possible means you can ask the right questions when your firm evaluates AI tools, and knowing when Claude Code is stronger than a chatbot is the key insight for sustained daily productivity.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "MCP concept and potential for banking workflows understood",
          "GitHub purpose and private repo requirement understood",
          "File format handling demonstrated across multiple formats",
          "Integration architecture saved to organized/analysis/integration-architecture.md",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-teal flex-shrink-0 mt-0.5">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <PrevNextNav />
    </article>
  );
}
