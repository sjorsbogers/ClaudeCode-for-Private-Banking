import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function ManagerDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">The Manager&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Marcus has a board meeting in two weeks and needs clear, data-driven materials that tell the truth about where Claudius Capital stands operationally. Today you prepare those materials — specific numbers, honest assessment, and actionable recommendations.
      </p>

      <LessonCommand numbered="/start-1-12" branded="/role-manager" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Extract performance metrics — KPIs across operational, client, team, and financial dimensions",
          "Exercise 2: Management dashboard — traffic-light status summary ready to project on screen",
          "Exercise 3: Board-ready executive summary — 1-page with achievements, challenges, and 90-day priorities",
          "Exercise 4: Operational risk register — top 3 risks with evidence, likelihood, impact, and mitigations",
          "Wrap-Up: KPI extraction, dashboard design, executive writing, and risk identification",
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
        Marcus needs board materials that reflect reality, not spin. The chaos files contain scattered operational data — client feedback, meeting notes, process documents — and some of the most important KPIs are not being tracked at all. Your job is to surface what exists, flag what is missing, and translate it all into a format Marcus can walk into the boardroom with. No vague promises; specific numbers and honest assessment only.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Performance metrics extracted with sources and trend direction",
          "Management dashboard with traffic-light status (Green/Amber/Red) for 4-6 KPIs",
          "Executive summary saved to organized/leadership-updates/board-executive-summary.md",
          "Risk register saved to organized/leadership-updates/risk-register.md",
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
