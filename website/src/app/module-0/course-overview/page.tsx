import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function CourseOverviewPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 0: IDE &amp; Course Setup
      </p>
      <h1 className="text-3xl font-bold mb-4">Course Overview</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Setup is complete. Everything is installed, connected, and verified. This lesson is the bridge between &quot;getting ready&quot; and &quot;doing the work&quot; — introducing Claudius Capital, the course structure, and building genuine anticipation for Module 1.
      </p>

      <LessonCommand numbered="/start-0-3" branded="/setup-overview" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: zooming out and seeing the bigger picture",
          "The Narrative: Claudius Capital",
          "The Project Folder structure walkthrough",
          "Course Structure: Modules 0 through 6",
          "How Lessons Work: slash commands and navigation",
          "What You'll Be Able to Do by the end of the course",
          "Expectations and time commitment",
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
        Claudius Capital is an AI-forward family office managing roughly $8.5 billion across 200+ ultra-high-net-worth families, with offices in Zurich, London, and Singapore. Six weeks ago, the Operations Manager resigned without notice, leaving behind a mess of scattered documents and half-finished process maps. You are his replacement, and Marcus has given you a 90-day mandate: fix the client service bottleneck, or he&apos;s bringing in McKinsey.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Describe Claudius Capital and the 90-day mandate in your own words",
          "Explain the course structure (Module 0 setup, Module 1 daily skills, Modules 2–5 Build Labs, Module 6 capstone)",
          "Navigate the project folder structure and know what each top-level folder contains",
          "Run a slash command to start a lesson",
          "Feel genuinely ready and motivated to begin Module 1",
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
