import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function MarketingDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">The Marketing Lead&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Claudius Capital&apos;s investment performance is strong, but client engagement is slipping. Today you step into the marketing lead&apos;s role: deepening relationships through events, thought leadership, and personalised outreach for 200+ UHNW families across three offices.
      </p>

      <LessonCommand numbered="/start-1-11" branded="/role-marketing" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Event research — map industry events with competitor intelligence",
          "Exercise 2: Client-event matching — connect client interests to specific events",
          "Exercise 3: Personalised invitation — draft a genuine, targeted invitation for a specific family",
          "Exercise 4: Content calendar — build a structured quarterly content plan",
          "Wrap-Up: Event research, client matching, personalised outreach, and content planning",
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
        With 200+ UHNW families across three offices and diverse interests, one-size-fits-all marketing does not work. These clients expect exclusivity and relevance. You will research industry events, match clients to the right opportunities, draft an invitation that feels personal rather than mass-produced, and create a quarterly content calendar that mixes market commentary, thought leadership, and event coverage.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Event research with competitor analysis saved to organized/analysis/",
          "Client-event matching matrix produced for 5-6 client families",
          "Personalised invitation drafted (150-200 words, warm and exclusive tone)",
          "Content calendar saved to organized/analysis/content-calendar-q1.md",
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
