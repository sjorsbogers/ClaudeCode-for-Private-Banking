import Callout from "@/components/Callout";
import PrevNextNav from "@/components/PrevNextNav";

export default function Introduction() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Getting Started
      </p>
      <h1 className="text-3xl font-bold mb-4">Introduction</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        What Claude Code is, how it differs from other AI tools, and what
        you&apos;ll learn in this course.
      </p>

      <hr className="border-[var(--border)] mb-8" />

      <h2 className="text-xl font-semibold mb-4" id="what-is-claude-code">
        What is Claude Code?
      </h2>
      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
        Claude Code is a command-line AI assistant made by Anthropic. Unlike
        ChatGPT or other chat interfaces, Claude Code runs inside your
        development environment — it can read your files, run commands,
        search the web, and build entire applications.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        Think of it as hiring a highly capable developer who sits in your
        terminal and does exactly what you describe. You act as the product
        manager: you define requirements, review output, and provide
        feedback. Claude Code does the implementation.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-is-this-different">
        How is this different from ChatGPT?
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-[var(--border)] rounded-lg overflow-hidden">
          <thead className="bg-[var(--bg-subtle)]">
            <tr>
              <th className="text-left p-3 font-semibold"></th>
              <th className="text-left p-3 font-semibold">ChatGPT / Claude.ai</th>
              <th className="text-left p-3 font-semibold">Claude Code</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            <tr>
              <td className="p-3 font-medium">Interface</td>
              <td className="p-3 text-[var(--text-muted)]">Web browser</td>
              <td className="p-3 text-[var(--text-muted)]">Terminal / IDE</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">File access</td>
              <td className="p-3 text-[var(--text-muted)]">Upload one at a time</td>
              <td className="p-3 text-[var(--text-muted)]">Reads your entire project</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Commands</td>
              <td className="p-3 text-[var(--text-muted)]">None</td>
              <td className="p-3 text-[var(--text-muted)]">Runs terminal commands directly</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Building apps</td>
              <td className="p-3 text-[var(--text-muted)]">Gives you code to copy</td>
              <td className="p-3 text-[var(--text-muted)]">Creates, edits, and deploys files directly</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Memory</td>
              <td className="p-3 text-[var(--text-muted)]">Per-conversation</td>
              <td className="p-3 text-[var(--text-muted)]">CLAUDE.md project files persist across sessions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-4" id="what-youll-learn">
        What you&apos;ll learn
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Navigate and explore complex file systems",
          "Extract insights from messy, unstructured data",
          "Synthesise information into professional deliverables",
          "Consult AI advisory boards and navigate their disagreements",
          "Build verification workflows for regulated contexts",
          "Direct the creation of deployable web applications",
          "Apply all of this to your daily work in private banking",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-teal flex-shrink-0 mt-1">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4" id="what-you-need">
        What you need
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "A Mac, Windows, or Linux computer",
          "A Claude Pro, Team, or Enterprise subscription",
          "A code editor (VS Code, Windsurf, or Cursor — all free)",
          "Basic comfort with using a computer (no coding experience needed)",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-[var(--text-muted)] flex-shrink-0 mt-1">•</span>
            {item}
          </li>
        ))}
      </ul>

      <Callout type="info" title="No coding required">
        <p>
          This course uses the PM-not-engineer model. You describe what you
          want in plain language. Claude Code writes the code. You review
          the output and provide feedback — just like managing a team
          member.
        </p>
      </Callout>

      <PrevNextNav />
    </article>
  );
}
