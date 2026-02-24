import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4BBuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4B: Build Lab — Compliance Framework Analyzer
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4B.3 — Compliance Framework Analyzer: Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        This is the course&apos;s &ldquo;Why Raj Said No&rdquo; lesson. You build the Compliance Analyzer, Raj blocks it for a specific compliance reason, you understand why, implement the fixes, and Raj approves. Compliance review is a feature, not an obstacle.
      </p>

      <LessonCommand numbered="/start-4b-3" branded="/analyst-compliance-build" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Build — Regulation text input, process description input, gap identification with traffic light status, and detailed findings",
          "Compliance Checkpoint: Why Raj Said No — Raj blocks the build for using 'COMPLIANT' determination language",
          "Why This Matters — The regulatory liability of AI making compliance determinations",
          "Reality Check — What production deployment would additionally require",
          "Bridge — Preparing to ship the corrected tool",
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
        Raj blocks the initial build because it outputs &ldquo;Compliance status: COMPLIANT&rdquo; — a compliance determination only a qualified human officer can make. FINMA, FCA, and MAS all require human sign-off on compliance determinations. After the fixes — changing &ldquo;COMPLIANT&rdquo; to &ldquo;No gaps identified — requires human verification&rdquo; and adding a mandatory footer — Raj approves the tool as genuine decision support that accelerates his team without replacing their judgment.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Initial build deliberately included compliance determination language for the teaching moment",
          "Raj blocked the build with a specific, educative explanation",
          "Student understood the distinction between flagging gaps and determining compliance",
          "Fixes implemented and Raj approved the corrected tool",
          "Reality Check presented covering live regulation feeds and GRC integration",
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
