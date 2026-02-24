import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3BBuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3B: Junior Analyst Path — Investment Memo Builder
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3B.3 — Investment Memo Builder: Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Claude builds the Investment Memo Builder based on your requirements. You review the generated IC memo output, iterate on formatting and content structure, and then put the tool through a compliance checkpoint — with a particular focus on how investment recommendations are framed.
      </p>

      <LessonCommand numbered="/start-3b-3" branded="/analyst-memo-build" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Build — Claude generates the initial Investment Memo Builder",
          "Iterate — review and refine through 2-4 feedback rounds",
          "Compliance Checkpoint — Raj reviews recommendation framing, source attribution, and AI disclaimers",
          "Reality Check — what production integration with fund databases would require",
          "Bridge — ready to ship in Lesson 3B.4",
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
        The Memo Builder generates a structured IC memo from raw analyst inputs — each section populated with source attribution so reviewers know where the data came from. The compliance checkpoint with Raj targets a specific risk: if the memo contains a clear &quot;Invest&quot; recommendation without a &quot;draft for IC review&quot; qualifier, Raj flags it. The IC makes the decision, not the tool — and the memo must make that distinction explicit. This lesson teaches that the framing of AI output is as important as its content.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Memo Builder built and reviewed",
          "Compliance checkpoint passed",
          "Reality Check presented",
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
