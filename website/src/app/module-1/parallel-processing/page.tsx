import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function ParallelProcessingPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Parallel Processing: Multiple Perspectives at Once</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        What if you could ask Claude to analyse a situation from multiple angles at the same time — and get all the perspectives back together, ready to compare? That&apos;s parallel processing. And it changes how you approach analysis.
      </p>

      <LessonCommand numbered="/start-1-5" branded="/foundations-parallel" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: why single-perspective analysis isn&apos;t enough",
          "Concept: How Parallel Processing Works — sequential vs parallel analysis",
          "Exercise 1: Thomas&apos;s Handover — Three Lenses at Once (operational, client, compliance)",
          "Exercise 2: Layer in Your Own Work — auditing your own deliverables",
          "Checkpoint: when to use parallel vs sequential analysis",
          "Curiosity Nudge: applying this to your real work",
          "Exercise 3: Cross-Reference and Conflict — strategic priorities by convergence",
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
        You&apos;ve built a solid foundation. Now it&apos;s time to elevate your analysis. Instead of asking serial questions — operational gaps, then client impact, then compliance risks — parallel processing dispatches all three simultaneously and returns a unified picture. The convergence point across perspectives is usually where the real priority sits. Three analyses running in parallel in the time it would normally take for one.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Understand parallel vs sequential analysis and when each is appropriate",
          "Three saved analyses in organized/analysis/",
          "Articulate the convergence point across multiple perspectives",
          "Recognise parallel processing as a quality control mechanism (auditing own work)",
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
