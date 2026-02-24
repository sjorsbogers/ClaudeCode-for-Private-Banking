import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3AShipPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3A: Senior RM Path — Meeting Prep Engine
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3A.4 — Meeting Prep Engine: Ship It
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You have done this before. This lesson merges GitHub and deployment into a single fast-paced session — the pace adapts to how confident you felt in Module 2. The Meeting Prep Engine ships live, and you calculate the annual time savings for a senior RM&apos;s full meeting schedule.
      </p>

      <LessonCommand numbered="/start-3a-4" branded="/rm-meeting-ship" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Ship It — pace-adapted GitHub and deployment walkthrough",
          "GitHub — private repo creation and commit",
          "Deploy — pre-deploy build check, Vercel deployment, and live URL verification",
          "ROI — quantifying annual time and cost savings for a senior RM",
          "Module 3A Complete — next step is Module 4A (RFP / Proposal Generator)",
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
        With a compliance-approved, iterated tool in hand, the final step is getting it into production. You push the code to a private GitHub repo, run a pre-deploy build check, and deploy to Vercel. Once the live URL is confirmed, open it on your phone — the scenario is standing outside a client&apos;s office, pulling up the meeting brief on mobile before walking in. The ROI table shows 450 hours saved per year for a senior RM carrying 50 meetings per quarter, equivalent to CHF 67,500 at standard billing rates.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Pushed to private GitHub repo",
          "Pre-deploy build check passed",
          "Deployed to Vercel",
          "Live URL added to GitHub description",
          "ROI calculated",
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
