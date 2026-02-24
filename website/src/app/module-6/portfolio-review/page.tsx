import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function PortfolioReviewPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 6: Capstone
      </p>
      <h1 className="text-3xl font-bold mb-4">Portfolio Review</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You have completed the Build Labs. Before wrapping up, step back and look at the full picture — every tool built, every analysis produced, and every process improved. Think of this as a portfolio review with Marcus: he gave you 90 days; let&apos;s show him what you accomplished.
      </p>

      <LessonCommand numbered="/start-6-1" branded="/capstone-review" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Tool portfolio — every tool built, its purpose, and deployment status",
          "Analysis portfolio — all deliverables saved to organized/ across Module 1",
          "Improvement opportunities — 2-3 specific quality enhancements per tool",
          "The Marcus presentation — a 1-page 90-day summary with tools, findings, and ROI",
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
        Marcus gave you 90 days to demonstrate what AI-assisted work looks like in a regulated private bank. The capstone review is your opportunity to present the full picture — not just the tools, but the analysis completed, the processes documented, and the ROI generated. This is a reflective session, not an instructional one: you assess what you built, what could be improved, and what you would recommend as next steps.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Tool portfolio reviewed with deployment links and estimated ROI per tool",
          "Analysis deliverables reviewed and organised/ folder assessed",
          "Improvement opportunities identified for each built tool",
          "90-day summary for Marcus saved to organized/leadership-updates/90-day-summary.md",
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
