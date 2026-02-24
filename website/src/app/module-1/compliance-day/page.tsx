import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function ComplianceDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">The Compliance Officer&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Raj has a FINMA regulatory review coming up in six weeks. Today you step into his world — building compliance checklists, auditing existing processes, drafting policy documents, and preparing the regulatory review briefing. Regulators don&apos;t accept &quot;later.&quot;
      </p>

      <LessonCommand numbered="/start-1-14" branded="/role-compliance" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Build a compliance checklist — 12-15 requirements across MiFID II, GDPR, FINMA, and KYC/AML",
          "Exercise 2: Audit existing processes — documented vs. actual compliance, with gap identification",
          "Exercise 3: Draft a policy document — jurisdiction-aware, with FINMA, FCA, and MAS differences noted",
          "Exercise 4: Regulatory review briefing — Raj's presentation of compliance status to team and regulator",
          "Wrap-Up: Checklist building, process auditing, policy drafting, and regulatory briefing",
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
        FINMA wants to see documentation of every client-facing process, data handling procedure, and compliance framework. The last review flagged two issues — both related to inconsistent documentation. There is no room for gaps and no room for vague promises. Today you prepare the compliance team&apos;s materials across multi-jurisdiction requirements, working from the regulatory update bulletin and process documentation to identify what is solid and what must be fixed before the review.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Compliance checklist with 12+ requirements and status (Compliant/Gap/Unknown)",
          "Audit findings table with documented vs. actual compliance and gap identification",
          "Policy document saved to organized/analysis/compliance-policy-draft.md",
          "Regulatory review briefing saved to organized/analysis/regulatory-review-briefing.md",
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
