import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3ASetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3A: Senior RM Path — Meeting Prep Engine
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3A.1 — Meeting Prep Engine: Setup
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Module 2 taught you the build loop. Now you use it again — faster this time, because you know the process. The Client Meeting Prep Engine solves one of Claudius Capital&apos;s biggest time sinks: RMs currently spend two to three hours preparing for each client meeting. This tool cuts that to fifteen minutes.
      </p>

      <LessonCommand numbered="/start-3a-1" branded="/rm-meeting-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — the meeting prep problem and the tool&apos;s value proposition",
          "Scaffold — creating the Next.js project with light mode defaults",
          "Bridge — ready to define requirements in Lesson 3A.2",
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
        Senior Relationship Managers at Claudius Capital juggle dozens of client meetings each quarter. Before every meeting they pull data from Bloomberg, check the CRM for relationship notes, review portfolio performance, and draft talking points — all manually, from multiple systems. The Meeting Prep Engine consolidates this into a single, generated one-pager that an RM can review in minutes and carry into the meeting, printed or on a tablet.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Project scaffolded with light mode defaults",
          "Student understands the tool&apos;s purpose and value",
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
