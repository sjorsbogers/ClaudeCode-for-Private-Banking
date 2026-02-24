import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module5BuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 5: Build Lab — Client Risk Profiler
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 5.3 — Client Risk Profiler: Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You build the Client Risk Profiler, test it against two contrasting client profiles, and then face Raj&apos;s compliance checkpoint — which includes a cross-border suitability scenario that exposes the complexity of advising clients with assets across multiple jurisdictions.
      </p>

      <LessonCommand numbered="/start-5-3" branded="/shared-risk-build" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Build — Multi-step questionnaire with progress indicator, scoring engine, and five profile categories from Conservative to Aggressive",
          "Test Data Exercise — Generating two contrasting profiles to validate the scoring logic",
          "Compliance Checkpoint — Raj's standard review plus a cross-border suitability challenge",
          "Reality Check — Production requirements including client portal, audit trail, and regulatory approval",
          "Bridge — Preparing to ship the final tool in the course",
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
        Raj&apos;s cross-border challenge: a client is Swiss-domiciled, holds a UK pension, and has assets in a Singapore trust. Which jurisdiction&apos;s suitability requirements apply? All three — FINMA for Swiss domicile, FCA for the UK pension, MAS for the Singapore trust vehicle. The risk profile must document that suitability requirements differ across these jurisdictions and that each asset pool may need separate suitability documentation.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Risk profiler built with multi-step questionnaire and five profile categories",
          "Two test profiles generated and validated (conservative retiree vs. aggressive entrepreneur)",
          "Cross-border compliance scenario discussed and documented",
          "Reality Check presented covering authentication, versioning, audit trail, and regulatory approval",
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
