import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function NextStepsPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 6: Capstone
      </p>
      <h1 className="text-3xl font-bold mb-4">Next Steps</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        This is the final lesson of the course. You walked in as someone who had never used Claude Code. You are leaving as someone who can navigate complexity, extract insights, build tools, and apply professional judgment to AI output in a regulated financial services context.
      </p>

      <LessonCommand numbered="/start-6-3" branded="/capstone-next" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "What you have learned — a module-by-module review of the full course journey",
          "The 70/30 rule — one final reinforcement of the most important mental model",
          "Resources for continued learning — Claude Code docs, regulatory AI guidance, and daily practice",
          "Building on what you learned — slash commands, CLAUDE.md files, and proposing pilots to leadership",
          "Course complete — confident and empowered to apply everything to your real work",
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
        Marcus gave you 90 days. You delivered. The tools you built are yours. The skills you developed are yours. AI governance in financial services is evolving rapidly — monitor FINMA, FCA, and MAS guidance on AI tools, and watch for regulatory sandboxes that may open new possibilities. The technology will keep improving; your ability to direct it effectively is the durable skill.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Full course journey acknowledged with specifics from your own path",
          "70/30 rule reinforced one final time — AI does 70%, you own the 30%",
          "Resources provided for continued learning and staying current on AI regulation",
          "Course complete — student leaves confident and empowered to apply skills immediately",
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
