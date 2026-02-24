import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4APlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4A: Build Lab — RFP / Proposal Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4A.2 — Proposal Generator: Plan
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Before building, you define exactly what the Proposal Generator needs to include and how it should adapt to the prospect&apos;s jurisdiction. Requirements decisions made here shape compliance obligations in the next lesson.
      </p>

      <LessonCommand numbered="/start-4a-2" branded="/rm-proposal-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Requirements — Selecting proposal sections and deciding on jurisdiction-aware formatting",
          "Bridge — Capturing decisions in REQUIREMENTS.md before the build",
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
        Proposals must include past-performance disclaimers and jurisdiction-specific regulatory disclosures — different requirements apply for Switzerland (FINMA), the UK (FCA), and Singapore (MAS). The key challenge in production is keeping regulatory disclosures current across all three jurisdictions. In this lesson you make those scope decisions before any code is written.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Proposal sections selected (firm overview, track record, fees, disclosures, etc.)",
          "Jurisdiction awareness approach decided",
          "REQUIREMENTS.md created with multi-jurisdiction notes",
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
