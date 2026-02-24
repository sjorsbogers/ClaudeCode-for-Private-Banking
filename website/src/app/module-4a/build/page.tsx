import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module4ABuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 4A: Build Lab — RFP / Proposal Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 4A.3 — Proposal Generator: Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        With requirements locked, you build and iterate on the Proposal Generator — then run it through a compliance checkpoint with Raj, who will raise a cross-jurisdictional disclosure question that tests your multi-jurisdiction thinking.
      </p>

      <LessonCommand numbered="/start-4a-3" branded="/rm-proposal-build" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Build — Prospect input form, generated proposal, and jurisdiction-aware regulatory disclosures",
          "Compliance Checkpoint — Raj reviews past-performance disclaimers, fee transparency, and a cross-jurisdictional disclosure scenario",
          "Reality Check — What production deployment would additionally require",
          "Bridge — Preparing to ship",
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
        Raj&apos;s compliance checkpoint on proposals is thorough — proposals are high-risk documents that go directly to prospects. His cross-jurisdictional challenge: if a Swiss-domiciled prospect has UK assets, which jurisdiction&apos;s disclosure requirements apply? The answer is both. All relevant jurisdictions must be represented in the proposal.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Proposal Generator built with jurisdiction-aware disclosures and prospect input form",
          "Compliance checkpoint passed — disclaimers verified as correctly worded",
          "Reality Check presented covering CRM, portfolio system, and approval workflow needs",
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
