import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3APlanPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3A: Senior RM Path — Meeting Prep Engine
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3A.2 — Meeting Prep Engine: Plan
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        What does an RM actually need before walking into a client meeting? This lesson answers that question by gathering your requirements — the sections the meeting brief must include and the format that works best at the point of use.
      </p>

      <LessonCommand numbered="/start-3a-2" branded="/rm-meeting-plan" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Requirements — selecting meeting prep sections and output format",
          "Creating REQUIREMENTS.md for the Meeting Prep Engine",
          "Reality Check — what production data integration would require",
          "Bridge — requirements locked, ready to build",
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
        A good meeting brief contains exactly what an RM needs and nothing they don&apos;t. You choose from sections like Client Overview, Portfolio Snapshot, Recent Activity, Market Context, Talking Points, Risk Alerts, and Personal Notes. You also decide whether the output should be a printable one-pager, a tablet-friendly digital dashboard, or both. In production, the talking points would pull from CRM notes, meeting transcription tools, and RM notes in SharePoint — the key challenge being unstructured notes in different formats from different people.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Meeting prep sections selected",
          "Format chosen",
          "REQUIREMENTS.md created",
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
