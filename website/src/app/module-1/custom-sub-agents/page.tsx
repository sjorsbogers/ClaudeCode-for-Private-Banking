import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function CustomSubAgentsPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Custom Sub-Agents: Your Advisory Board</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        In the last lesson, you learned to process information from multiple angles simultaneously. Now let&apos;s take that further with sub-agents — persistent personas that Claude can adopt to give you specialised perspectives. Think of it like having an advisory board you can convene any time.
      </p>

      <LessonCommand numbered="/start-1-6" branded="/foundations-agents" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: from ad hoc perspectives to permanent advisory board",
          "Meet the Advisory Board: Marcus, Raj, Sarah, and Lisa",
          "Exercise 1: Read All Four Agents and their distinct perspectives",
          "Exercise 2: Convene the Board on a strategic question",
          "Exercise 3: Independent Agent Invocation — you choose the agent and question",
          "Exercise 4: The Disagreement — navigate a conflict between Marcus and Raj",
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
        Claudius Capital has four senior advisors whose perspectives you&apos;ll draw on throughout this course: Marcus Claudius (CIO / Founder, strategy lens), Raj Patel (Head of Compliance, regulatory lens), Sarah Chen (Head of Client Advisory, relationship lens), and Lisa Zimmermann (COO, operations lens). Each has a detailed backstory, specific priorities, and distinct communication style. Sub-agents are most valuable when they disagree — that&apos;s where real insights come from.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Understand sub-agent structure and purpose",
          "Advisory board convened on a strategic question",
          "Independently invoke an agent with your own question",
          "Navigate a disagreement between Marcus and Raj",
          "Your strategic recommendation saved to organized/analysis/",
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
