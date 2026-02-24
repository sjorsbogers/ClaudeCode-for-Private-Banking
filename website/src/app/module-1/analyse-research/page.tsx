import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function AnalyseResearchPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Analyse &amp; Research</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        In regulated finance, every claim needs a traceable source. This lesson teaches you to produce analysis that passes the &quot;where did this come from?&quot; test — looking outward, comparing, cross-referencing, and drawing conclusions with proper attribution.
      </p>

      <LessonCommand numbered="/start-1-3b" branded="/foundations-analyse" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: the extra requirement in regulated finance",
          "Exercise 1: Competitive Analysis with source citations",
          "Exercise 2: Source Attribution Practice — spot the synthesised claim",
          "Exercise 3: Cross-Reference Analysis across multiple source categories",
          "Exercise 4: Competitive Benchmarking Report",
          "Checkpoint: what to do before using a Claude-generated statistic",
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
        Claudius Capital&apos;s NPS dropped from 78 to 62. Marcus wants to know how the firm compares to competitors. This lesson produces a competitive benchmarking analysis he can reference in board discussions — with every data point source-cited and synthesised analysis clearly labelled as such. When Marcus cites a competitor comparison in a board meeting, he needs to know exactly where that number came from.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Competitive analysis produced with source citations",
          "Correctly identified sourced vs synthesised claims",
          "Cross-reference analysis revealed agreements and conflicts",
          "Benchmarking report saved to organized/analysis/",
          "Understand the distinction between data and interpretation",
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
