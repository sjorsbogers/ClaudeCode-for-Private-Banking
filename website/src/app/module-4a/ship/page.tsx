import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4AShipPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4A: Build Lab — RFP / Proposal Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4A.4 — Proposal Generator: Ship It
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        The Proposal Generator is built and compliance-approved. Now you push it to a private GitHub repository, run a production build check, and deploy it live — completing the Senior RM Path.
      </p>

      <LessonCommand numbered="/start-4a-4" branded="/rm-proposal-ship" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub + Deploy — git init, private repo creation, production build check, and Vercel deployment",
          "Module 4A: Complete — reviewing the three-tool Senior RM portfolio",
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
        With three tools now in your portfolio — Client Report Generator, Client Meeting Prep Engine, and RFP / Proposal Generator — the Senior RM Path is complete. Each tool was built using the same loop: describe, build, review, iterate, compliance check, ship. The next module is shared with the Analyst Path.
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
