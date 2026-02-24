import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3ABuildPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3A: Senior RM Path — Meeting Prep Engine
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3A.3 — Meeting Prep Engine: Build &amp; Iterate
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Claude builds the Meeting Prep Engine based on your requirements. You review it at localhost, give feedback, and iterate until the brief is exactly what you would want to read before a client meeting. A compliance checkpoint with Raj closes the lesson before the tool ships.
      </p>

      <LessonCommand numbered="/start-3a-3" branded="/rm-meeting-build" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Build — Claude generates the initial Meeting Prep Engine",
          "Iterate — review in browser, refine through 2-4 feedback rounds",
          "Compliance Checkpoint — Raj reviews for client data handling, disclaimers, and data freshness",
          "Reality Check — what production deployment would need (CRM, calendar, transcription integrations)",
          "Bridge — ready to push to GitHub and deploy",
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
        The Meeting Prep Engine generates a branded one-pager from manually entered client data — portfolio snapshot, talking points, risk alerts, and personal notes. You review the initial version in your browser and iterate until the layout works in both print and digital modes. Raj then evaluates a critical compliance question: if an RM uses this brief as the sole basis for a meeting without checking the source data, and that brief contains a stale portfolio figure, what is the liability? The lesson reinforces that AI-generated briefs are decision-support tools, not ground truth.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Meeting Prep Engine built and reviewed",
          "Multiple iteration rounds completed",
          "Compliance checkpoint passed",
          "Reality Check presented",
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
