import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4ASetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4A: Build Lab — RFP / Proposal Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4A.1 — Proposal Generator: Setup
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Proposals are the revenue engine. When a prospect asks &ldquo;why should I move my assets to Claudius Capital?&rdquo; the answer needs to be personalised, compliant, and compelling. Currently the turnaround is 5–7 days with a 28% revision rate.
      </p>

      <LessonCommand numbered="/start-4a-1" branded="/rm-proposal-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — The business case for a Proposal Generator and the current 5–7 day turnaround problem",
          "Scaffold — Creating the Next.js project foundation for the Proposal Generator",
          "Bridge — Preparing to define requirements in the next lesson",
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
        The Proposal Generator takes prospect requirements and generates customised pitch documents — with the right disclosures, track record data, and team information for each prospect&apos;s jurisdiction and needs. This is the Senior RM Path capstone build, addressing the proposal bottleneck that costs Claudius Capital new business every quarter.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Project scaffolded and development environment ready",
          "Student understands the tool purpose and business value",
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
