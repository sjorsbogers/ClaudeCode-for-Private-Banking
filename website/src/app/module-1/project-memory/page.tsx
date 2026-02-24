import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function ProjectMemoryPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Project Memory: CLAUDE.md</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Every time you start a new Claude Code conversation, Claude starts fresh. Except — it reads the CLAUDE.md file. Every time. Automatically. This is your project&apos;s memory, and it&apos;s one of the most powerful features of Claude Code — especially in regulated finance where continuity and institutional knowledge matter.
      </p>

      <LessonCommand numbered="/start-1-7" branded="/foundations-memory" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: what CLAUDE.md is and how it works",
          "How CLAUDE.md Works — the read-on-startup mechanic",
          "The CLAUDE.md Hierarchy — root and subfolder files that cascade",
          "Exercise 1: Create Your Own CLAUDE.md with role, decisions, and preferences",
          "Exercise 2: Mermaid Diagrams in markdown",
          "Exercise 3: Test Your Memory — verify context persists across sessions",
          "What Belongs in CLAUDE.md (and What Doesn&apos;t)",
          "Wrap-Up",
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
        In a firm like Claudius Capital, where the previous ops manager left without proper documentation, persistent context is invaluable. CLAUDE.md is like leaving a note for a colleague who works the next shift — whatever you write there, Claude knows at the start of every conversation. This is also where you learn about the CLAUDE.md hierarchy: firm-wide policies at the top, department-specific procedures below.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Understand CLAUDE.md purpose and mechanics",
          "Understand the hierarchy (root + subfolder files cascade)",
          "Personal CLAUDE.md created with role, decisions, and preferences",
          "Mermaid diagram concept demonstrated",
          "Understand what belongs (and doesn&apos;t belong) in CLAUDE.md",
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
