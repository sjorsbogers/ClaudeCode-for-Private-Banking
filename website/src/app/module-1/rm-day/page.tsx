import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function RmDayPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">The Relationship Manager&apos;s Day</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Today you are a Relationship Manager at Claudius Capital. This lesson simulates a day in the life of an RM — pulling from multiple chaos files, synthesising across data sources, drafting client communications, researching investment opportunities, and producing personalised commentary. Every exercise uses real files from inherited-chaos/.
      </p>

      <LessonCommand numbered="/start-1-9" branded="/role-rm" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: Sophie is out sick, three meetings need preparing",
          "Exercise 1: Meeting Prep Brief — Van der Berg Family annual review",
          "Exercise 2: Client Follow-Up Email — a difficult conversation with Friedrich",
          "Exercise 3: Investment Research Summary — the unanswered crypto allocation request",
          "Exercise 4: Personalised Portfolio Commentary for three client families",
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
        Sophie Laurent is out sick. Marcus just forwarded her calendar — she has three client meetings this week and nothing is prepped. The Van der Berg family annual review is tomorrow, the Chen Tech Holdings quarterly check-in is Wednesday, and the Al-Rashid Trust has flagged concerns about real estate concentration. Everything needed is scattered across the inherited chaos files. This is a full morning of RM work compressed into one lesson.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Produce a multi-source meeting prep brief for the Van der Berg family",
          "Draft a professional follow-up email addressing specific client concerns",
          "Produce an investment research summary with appropriate suitability disclaimers",
          "Create personalised commentary for three distinct client families",
          "All four deliverables saved to organized/analysis/",
          "Engage with at least one review/iteration cycle on a deliverable",
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
