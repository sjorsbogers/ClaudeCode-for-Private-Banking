import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module5PlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 5: Build Lab — Client Risk Profiler
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 5.2 — Client Risk Profiler: Plan
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Risk profiling has both regulatory and practical dimensions. MiFID II Article 25 requires firms to assess suitability before making recommendations. In this lesson you define the assessment dimensions and decide how the profiler handles the three Claudius Capital jurisdictions.
      </p>

      <LessonCommand numbered="/start-5-2" branded="/shared-risk-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Requirements — Selecting assessment dimensions: investment experience, risk tolerance, time horizon, financial capacity, objectives, and ESG preferences",
          "Bridge — Creating REQUIREMENTS.md with scoring methodology, profile categories, and jurisdiction-specific suitability notes",
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
        The REQUIREMENTS.md must include clear &ldquo;AI-generated draft assessment&rdquo; framing and &ldquo;requires advisor review and client sign-off&rdquo; disclaimers. In production, this tool would require a client-facing portal with authentication, assessment versioning, and regulatory approval — each jurisdiction has different requirements for client-facing AI-assisted tools.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Assessment dimensions selected (investment experience, risk tolerance, time horizon, financial capacity, etc.)",
          "Jurisdiction-aware approach decided (single format or CH/UK/SG-aware)",
          "REQUIREMENTS.md created with proper disclaimers and scoring methodology",
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
