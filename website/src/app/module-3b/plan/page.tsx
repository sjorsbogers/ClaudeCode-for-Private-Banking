import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3BPlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3B: Junior Analyst Path — Investment Memo Builder
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3B.2 — Investment Memo Builder: Plan
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        What goes into an Investment Committee memo? This lesson walks through the standard IC memo structure and locks down which sections your Memo Builder will generate — along with how raw research data gets entered into the tool.
      </p>

      <LessonCommand numbered="/start-3b-2" branded="/analyst-memo-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Requirements — selecting IC memo sections and data input methods",
          "Creating REQUIREMENTS.md with the IC memo template structure",
          "Reality Check — fund database integration and independent data verification",
          "Bridge — requirements locked, ready to build",
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
        You choose from eight standard IC memo sections — Fund Overview, Performance Analysis, Risk Assessment, Operational Due Diligence, Fee Analysis, Investment Thesis, Key Concerns, and Recommendation — and decide how analysts will feed data in: pasting raw notes, using structured form fields, or uploading a DDQ document. In production, the tool would connect to fund databases like PitchBook and Preqin, regulatory filings from the SEC and FCA, and internal DD file repositories. The key challenge is verifying fund-reported performance data against independent sources.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "IC memo sections selected",
          "Input method chosen",
          "REQUIREMENTS.md created",
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
