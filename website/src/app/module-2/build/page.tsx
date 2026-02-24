import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module2BuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 2: Build Lab — Client Report Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 2.3 — Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Requirements are locked. Now Claude builds the Client Report Generator and you review it in your browser. You give feedback, Claude iterates — typically three to five rounds — until the tool is exactly what you envisioned. The lesson closes with a mandatory compliance checkpoint from Raj before you finalise anything.
      </p>

      <LessonCommand numbered="/start-2-3" branded="/build-iterate" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "The Build — Claude generates the initial Client Report Generator",
          "Iteration Loop — review in browser, give feedback, repeat until satisfied",
          "Compliance Checkpoint — Raj reviews the tool for disclaimers, data freshness, and guardrails",
          "Reality Check — what production deployment would actually require",
          "Wrap-Up — tool complete, compliance passed",
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
        Claude builds the first version of your report generator based on the requirements you locked in Lesson 2.2. You open localhost:3000 in your browser and start reviewing — layout, colours, spacing, content — giving plain-English feedback each round. Before the tool is considered done, Raj (your compliance sub-agent) must sign off. If any guardrails are missing, Raj blocks and lists required fixes before approval is granted.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Initial build reviewed in browser",
          "Multiple iteration rounds completed",
          "Compliance checkpoint passed (Raj reviewed)",
          "Light mode, print CSS, and disclaimers all working",
          "Reality Check sidebar presented",
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
