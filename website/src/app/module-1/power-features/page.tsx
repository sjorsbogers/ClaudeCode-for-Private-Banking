import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function PowerFeaturesPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Power Features &amp; AI Verification</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        This is the last lesson in the Core Skills section. You&apos;ve built a solid foundation. Now let&apos;s cover the power features that take Claude Code from useful to essential — and the verification practices that make it safe to use in a regulated environment.
      </p>

      <LessonCommand numbered="/start-1-8" branded="/foundations-power" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: the reality of powerful-but-imperfect AI in regulated contexts",
          "Power Features Overview: web search, extended thinking, file format handling",
          "The Verification Problem — a live hallucination demonstration",
          "Exercise 1: Build Verification Rules into CLAUDE.md",
          "Exercise 2: Create a /verify Slash Command",
          "MCP: A Brief Overview — connecting Claude to external systems",
          "Wrap-Up: Core Skills Complete and path choices",
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
        Claude is powerful but imperfect. In a coffee shop business, a plausible-sounding fabrication is an inconvenience. In wealth management, it&apos;s a liability. This lesson builds verification into your workflow from the start — with a live demonstration of how Claude can state invented regulation articles with complete confidence. By the end of Core Skills, you will have verification rules in your CLAUDE.md and a custom /verify slash command to use on any high-stakes output.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Experience web search, extended thinking, and file format capabilities",
          "Experience a hallucination demonstration and understand the risk",
          "Verification rules added to CLAUDE.md",
          "/verify slash command created and tested",
          "Understand MCP concept at a high level",
          "Choose your next path (role deep-dive, advanced, or build labs)",
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
