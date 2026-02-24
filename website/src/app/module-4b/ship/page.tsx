import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4BShipPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4B: Build Lab — Compliance Framework Analyzer
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4B.4 — Compliance Framework Analyzer: Ship It
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        The Compliance Framework Analyzer has passed Raj&apos;s review. Now you push it to a private GitHub repository, run a production build check, and deploy — completing the Junior Analyst Path.
      </p>

      <LessonCommand numbered="/start-4b-4" branded="/analyst-compliance-ship" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub + Deploy — git init, private repo creation, production build check, and Vercel deployment",
          "Module 4B: Complete — reviewing the two-tool Junior Analyst portfolio",
          "Bridge — Moving to the shared Client Risk Profiler in Module 5",
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
        With two tools in your portfolio — Client Report Generator and Compliance Framework Analyzer — the Junior Analyst Path is complete. The Compliance Analyzer is a particularly important tool because it went through a genuine compliance veto and came out better for it. Module 5 is shared across both paths.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Private GitHub repository created and verified",
          "Production build check passed",
          "Tool deployed to Vercel with live URL in repository description",
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
