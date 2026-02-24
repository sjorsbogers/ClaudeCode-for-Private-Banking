import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function TroubleshootingPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">When Things Go Wrong</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Files will not be found, commands will fail, output will look wrong, and context will get lost. This is normal. The skill is not avoiding problems — it is diagnosing and fixing them quickly. This reference lesson builds your troubleshooting toolkit.
      </p>

      <LessonCommand numbered="/start-1-19" branded="/reference-troubleshooting" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Common errors in plain English — command not found, file not found, permission denied, context limits",
          "\"Claude is stuck\" scenarios — repeating itself, wrong answers, not finding files, appearing frozen",
          "Context window management — signs you are approaching the limit and best practices",
          "Exercise 1: Diagnose a problem — practise unsticking a stuck scenario",
          "Exercise 2: Fresh start workflow — review CLAUDE.md and saved deliverables before resetting",
          "Quick reference: troubleshooting flowchart saved to project root",
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
        The most important troubleshooting skill is being specific about the problem. &quot;It is not working&quot; is hard to diagnose. &quot;It showed the NPS as 78 but the file says 62&quot; is easy to fix. This lesson walks through the most common failure modes in Claude Code sessions — from file path errors to context window exhaustion — and gives you the diagnostic patterns that resolve them quickly and confidently.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Common error messages understood in plain English",
          "Stuck scenario diagnosed and resolved through specificity",
          "Context window management best practices reviewed",
          "Troubleshooting reference saved to project root as troubleshooting-reference.md",
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
