import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module5ShipPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 5: Build Lab — Client Risk Profiler
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 5.4 — Client Risk Profiler: Ship It
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        The last tool. You deploy the Client Risk Profiler, review your complete tool portfolio and the time savings each tool delivers, and prepare for the Capstone in Module 6.
      </p>

      <LessonCommand numbered="/start-5-4" branded="/shared-risk-ship" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub + Deploy — git init, private repo creation, production build check (catching type errors), and Vercel deployment",
          "Build Lab Journey: Complete — reviewing the full tool portfolio with estimated ROI per tool",
          "Bridge — Moving to the Capstone in Module 6",
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
        Every tool in your portfolio was built using the same loop: describe, build, review, iterate, compliance check, ship. You directed the entire process as product manager without writing a single line of code. The Build Labs are complete — Module 6 is the Capstone where you review your portfolio, design your personal workflow, and plan next steps.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Private GitHub repository created and verified",
          "Production build check passed",
          "Tool deployed to Vercel with live URL in repository description",
          "Complete tool portfolio summarized with estimated time savings",
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
