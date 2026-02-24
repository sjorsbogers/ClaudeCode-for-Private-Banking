import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4BSetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4B: Build Lab — Compliance Framework Analyzer
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4B.1 — Compliance Framework Analyzer: Setup
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Compliance reviews at Claudius Capital are manual: Raj&apos;s team reads regulation text, compares it against internal processes, and writes findings reports by hand. A single regulatory review takes weeks. This tool changes that — while keeping humans firmly in the decision seat.
      </p>

      <LessonCommand numbered="/start-4b-1" branded="/analyst-compliance-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — The compliance review bottleneck and how a Compliance Framework Analyzer addresses it",
          "Scaffold — Creating the Next.js project foundation for the Compliance Analyzer",
          "Bridge — Preview of the 'Why Raj Said No' scenario coming in Lesson 4B.3",
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
        The Compliance Framework Analyzer ingests regulatory frameworks and checks processes against them — flagging gaps, inconsistencies, and areas needing attention. It does not make compliance determinations; that is always a human responsibility. This lesson also introduces the course&apos;s &ldquo;Why Raj Said No&rdquo; scenario, which teaches that compliance review is constructive, not obstructive.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Project scaffolded and development environment ready",
          "Student understands the tool purpose and its boundaries",
          "Student is aware the 'Why Raj Said No' veto scenario is coming in Lesson 4B.3",
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
