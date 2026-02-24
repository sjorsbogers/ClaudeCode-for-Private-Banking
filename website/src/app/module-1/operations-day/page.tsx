import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function OperationsDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">The Operations Lead&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Today you step into Lisa Zimmermann&apos;s world: process mapping, gap analysis, data quality assessment, and process improvement proposals. Thomas left behind an operations manual that describes what should happen — your job is to find the gaps between documentation and reality.
      </p>

      <LessonCommand numbered="/start-1-13" branded="/role-operations" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Map the actual onboarding process — documented steps vs. what actually happens",
          "Exercise 2: Gap analysis — 6-8 specific discrepancies between manual and reality",
          "Exercise 3: Data quality assessment — completeness, consistency, duplication, and staleness",
          "Exercise 4: Process improvement proposal — structured proposal for the single biggest bottleneck",
          "Wrap-Up: Process mapping, gap analysis, data quality auditing, and improvement proposals",
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
        Lisa has a saying: &quot;If you can&apos;t document the process, you don&apos;t have a process — you have folklore.&quot; Thomas left behind an operations manual, but the chaos files show what actually happens in practice. Every undocumented step is a point of failure when someone leaves — which is exactly what happened with Thomas. Your task is to close the gap between what should happen and what does.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Actual onboarding process mapped with evidence from chaos files",
          "Gap analysis with 6+ specific gaps (Manual Says | Reality Shows | Evidence | Impact | Priority)",
          "Data quality report saved to organized/analysis/data-quality-report.md",
          "Process improvement proposal saved to organized/analysis/process-improvement-proposal.md",
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
