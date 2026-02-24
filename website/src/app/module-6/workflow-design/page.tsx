import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function WorkflowDesignPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 6: Capstone
      </p>
      <h1 className="text-3xl font-bold mb-4">Workflow Design</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You know how to use Claude Code and you have built tools. Now let&apos;s design how you will actually use this in your daily work — not in a course scenario, but in your real role. This lesson bridges course learning to real-world application.
      </p>

      <LessonCommand numbered="/start-6-2" branded="/capstone-workflow" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Role identification — RM, Analyst, Operations, Compliance, Management, or Marketing",
          "Daily pain points — which tasks take the most time and which benefit most from Claude Code",
          "Personalised workflow map — morning, midday, and afternoon tasks with time-saved estimates",
          "Real-world CLAUDE.md template — a starter for your actual work context, not the course",
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
        The course scenario is Claudius Capital. Your real scenario is your actual firm, role, and daily workload. This lesson maps the course techniques — RCTFC prompting, the 70/30 rule, data classification, verification workflows — onto the specific tasks you spend the most time on. The output is a personalised workflow map and a CLAUDE.md template you can adapt immediately when you return to your desk.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Role and daily tasks identified with specific pain points",
          "Personalised workflow map created with time-saved estimates per task",
          "Real-world CLAUDE.md template saved to organized/analysis/real-world-claude-md-template.md",
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
