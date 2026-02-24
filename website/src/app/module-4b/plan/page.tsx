import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4BPlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4B: Build Lab — Compliance Framework Analyzer
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4B.2 — Compliance Framework Analyzer: Plan
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You define the scope of the Compliance Framework Analyzer — which regulatory frameworks it checks, how findings are presented, and crucially, how the tool frames its output. The framing decision made here is exactly what Raj will test in the next lesson.
      </p>

      <LessonCommand numbered="/start-4b-2" branded="/analyst-compliance-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Requirements — Selecting regulatory frameworks and output format (traffic light dashboard, detailed report, or both)",
          "Bridge — Creating REQUIREMENTS.md with the critical 'flags not determines' framing note",
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
        The REQUIREMENTS.md you create here must frame the tool as one that &ldquo;flags potential gaps for review&rdquo; — not one that &ldquo;determines compliance.&rdquo; This distinction is not semantic; it is the line between decision-support and decision-making that regulators and compliance officers enforce. In production, this tool would connect to live regulation text feeds and a GRC platform.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Analysis scope selected (MiFID II, GDPR, KYC/AML, best execution, record keeping, etc.)",
          "Output format chosen (traffic light dashboard, detailed findings, or both)",
          "REQUIREMENTS.md created with correct 'flags, not determines' framing",
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
