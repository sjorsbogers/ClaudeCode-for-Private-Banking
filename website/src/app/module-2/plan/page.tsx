import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module2PlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 2: Build Lab — Client Report Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 2.2 — Plan (Requirements)
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Good product managers define requirements before building. Changes now are free — changes later mean rebuilding. In this lesson you lock down exactly what the Client Report Generator should include before a single line of code is written.
      </p>

      <LessonCommand numbered="/start-2-2" branded="/build-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Defining the Report Sections — choosing what the report includes",
          "Visual style and data input method decisions",
          "Creating and approving REQUIREMENTS.md",
          "Bridge — locking requirements before build",
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
        Before Claude writes a line of code, you need to agree on what the Client Report Generator should do. You will choose which sections appear in the quarterly report, the visual style, and how client data gets entered. These choices get captured in a REQUIREMENTS.md file that becomes the build brief. In production, the data would flow from custodian feeds and portfolio systems via API — here you are building the presentation layer first.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Report sections selected",
          "Visual style chosen",
          "Data input method decided",
          "REQUIREMENTS.md created and approved",
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
