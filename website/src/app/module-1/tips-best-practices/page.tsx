import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function TipsBestPracticesPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">Tips, Tricks &amp; Best Practices</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You have completed Module 1. Before moving to the Build Labs, this final lesson consolidates the efficiency tips and best practices that will make you faster and more effective — including the single most important mental model for AI-assisted work in a regulated industry.
      </p>

      <LessonCommand numbered="/start-1-20" branded="/reference-tips" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Efficiency tips — conversation management, file organisation, getting better output, keyboard shortcuts",
          "The 70/30 rule — AI does the research and drafting; you own verification, judgment, and accountability",
          "Exercise 1: Portfolio review — survey everything produced across Module 1",
          "Exercise 2: Personal workflow guide — a reference document for future you",
          "Module 1 complete — skill map and path choice (Build Labs or real-world application)",
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
        Think of this as the cheat sheet lesson. The 70/30 rule is the most important mental model to leave Module 1 with: AI gets you 70% of the way, covering research, drafting, analysis, and formatting. The last 30% — verification, context, tone, judgment, and accountability — is yours and non-negotiable. The AI does not have a licence; you do. The AI does not face regulatory consequences; you do. Use AI for the 70% and own the 30%.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Efficiency tips reviewed and keyboard shortcuts noted",
          "70/30 rule understood and acknowledged",
          "Portfolio of Module 1 deliverables reviewed and organised",
          "Personal workflow guide saved to project root as my-workflow-guide.md",
          "Next path chosen — Build Labs (Module 2+) or Capstone (Module 6)",
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
