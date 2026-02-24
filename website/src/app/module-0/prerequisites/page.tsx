import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function PrerequisitesPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 0: IDE &amp; Course Setup
      </p>
      <h1 className="text-3xl font-bold mb-4">Prerequisites Verification</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Your IDE is set up and you know your way around the workspace. Before going further, let&apos;s run a systems check — a pre-flight checklist to confirm that Node.js, Claude Code, and your Claude subscription are all connected and working.
      </p>

      <LessonCommand numbered="/start-0-2" branded="/setup-prerequisites" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: the pre-flight checklist approach",
          "Check 1 — Node.js version verification",
          "Check 2 — Claude Code installation check",
          "Check 3 — Claude Subscription confirmation",
          "Check 4 — File System Access test",
          "Status Summary",
          "Quick Troubleshooting Reference",
          "Wrap-Up",
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
        This lesson is a systems check — think of it as the pre-flight checklist before takeoff. Everything was installed during setup via the companion website, and now we verify three things are in order: Node.js is installed and up to date, Claude Code is accessible and current, and your Claude subscription is active and connected. If everything is in order, this takes about 5 minutes.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Run node --version in a regular terminal and see v18+",
          "Run claude --version in a regular terminal and see a version number",
          "Confirm your Claude subscription is active through a live Claude Code interaction",
          "Confirm that Claude Code can read and list files in your project directory",
          "Distinguish between commands that run in a regular terminal vs messages sent in Claude Code",
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
