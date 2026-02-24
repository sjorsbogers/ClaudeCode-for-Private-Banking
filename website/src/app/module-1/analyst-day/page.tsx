import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function AnalystDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">The Junior Analyst&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Today you step into a junior analyst&apos;s shoes at Claudius Capital, evaluating Alpine Growth Fund III for potential addition to the client platform. The fund manager sent over their DDQ — and it&apos;s typical: inconsistent, incomplete, and requiring careful reading.
      </p>

      <LessonCommand numbered="/start-1-10" branded="/role-analyst" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Structure the messy DDQ — extract findings, red flags, and contradictions",
          "Exercise 2: Verify the claims — build a verification table with sourcing status",
          "Exercise 3: Comparison table — Alpine Fund III against two hypothetical peer funds",
          "Exercise 4: Draft the Key Risks section for the Investment Committee memo",
          "Wrap-Up: DDQ extraction, claim verification, fund comparison, and IC-ready risk analysis",
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
        The investment team wants to evaluate Alpine Growth Fund III for potential addition to the client platform. The fund manager sent over their DDQ — a self-portrait that emphasises strengths and glosses over weaknesses. Your job: extract the facts, find the gaps, identify the risks, and draft the key sections of an investment memo for the Investment Committee. A DDQ is only as good as the analyst reading it.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "DDQ structured with red flags and contradictions identified",
          "Claims verification table produced (Claim | DDQ Says | Status | Notes)",
          "Fund comparison table created across three funds",
          "Key Risks section saved to organized/analysis/alpine-fund-risk-analysis.md",
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
