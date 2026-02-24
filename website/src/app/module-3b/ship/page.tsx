import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3BShipPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3B: Junior Analyst Path — Investment Memo Builder
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3B.4 — Investment Memo Builder: Ship It
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        The Investment Memo Builder is built, iterated, and compliance-approved. This lesson merges GitHub and deployment into one session — pace-adapted to your comfort level — and closes Module 3B. Next up: the Compliance Framework Analyzer in Module 4B.
      </p>

      <LessonCommand numbered="/start-3b-4" branded="/analyst-memo-ship" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub — pace-adapted private repo creation and commit",
          "Deploy — pre-deploy build check, Vercel deployment, and live URL verification",
          "Module 3B Complete — two tools shipped, path to Module 4B opens",
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
        Shipping follows the same pattern as every other Build Lab: git initialise, commit, push to a private repo, run a pre-deploy build check, and deploy to Vercel. The lesson opens with a quick comfort assessment — students who felt confident in Module 2 move at speed, while those who want a refresher get one. With the Memo Builder live, you have shipped two tools: the Client Report Generator from Module 2 and the Investment Memo Builder from Module 3B. The Compliance Framework Analyzer in Module 4B is the logical next step.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Private GitHub repo created",
          "Build check passed",
          "Deployed to Vercel",
          "Live URL in GitHub description",
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
