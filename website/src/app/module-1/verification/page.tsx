import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function VerificationPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">Building Verification Into Your Workflow</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Claude can state invented regulation articles with complete confidence or generate plausible statistics from nothing. This lesson builds a systematic verification workflow for any high-stakes output — client reports, compliance documents, investment memos, and board materials.
      </p>

      <LessonCommand numbered="/start-1-18" branded="/advanced-verification" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "The verification spectrum — different levels for internal brainstorming vs. regulatory filings",
          "The 70/30 rule — Claude gets you 70% of the way; your judgment is the critical last 30%",
          "Exercise 1: The hallucination hunt — find fabricated claims in a generated analysis",
          "Exercise 2: Multi-pass verification workflow — Generate, Self-Verify, Human Review",
          "Exercise 3: Build an enhanced /verify command for your project",
          "Checkpoint: When is it acceptable to send AI-generated content without review?",
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
        Fabricated claims sound just as confident as real ones — that is the danger. In regulated wealth management, your name goes on the output, and &quot;the AI wrote it&quot; is not a defence. This lesson builds the three-pass verification habit: generate output with source citations, ask Claude to check its own work against source documents, then apply your professional judgment to the flagged items. Verification is not paranoia — it is professionalism.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Verification levels understood for different output types (internal vs. client-facing vs. regulatory)",
          "Hallucinations successfully identified in generated content",
          "Multi-pass verification workflow (Generate, Self-Verify, Human Review) demonstrated",
          "Enhanced /verify command created in .claude/commands/",
          "Checkpoint answered correctly: AI-generated regulatory correspondence always requires human review",
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
