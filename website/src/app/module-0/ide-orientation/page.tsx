import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function IdeOrientationPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 0: IDE &amp; Course Setup
      </p>
      <h1 className="text-3xl font-bold mb-4">IDE Orientation</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Welcome to Claude Code for Private Banking. You&apos;ve done the hard part — installation is behind you. Now let&apos;s make sure your workspace is set up properly and establish the critical distinction that will save you confusion throughout the course.
      </p>

      <LessonCommand numbered="/start-0-1" branded="/setup-ide" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: welcoming you to the course and setting the scene",
          "IDE Layout — The Four Areas That Matter",
          "Opening the Terminal",
          "The Most Important Distinction in This Course",
          "Verify Claude Code Is Working",
          "Open the Course Folder",
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
        This is the very first lesson of the course. Your IDE and Claude Code are already installed — this session focuses on orienting you in the workspace and verifying everything is connected. You&apos;ll learn the difference between typing in a Claude Code session versus a regular terminal, which is the single most important distinction in the course.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Identify the four main areas of your IDE (file explorer, editor, terminal, status bar)",
          "Open the terminal panel using either a keyboard shortcut or the menu",
          "Articulate the difference between typing in Claude Code vs a regular terminal",
          "Confirm that Claude Code can read files in your project",
          "See the course folder structure in your IDE&apos;s file explorer",
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
