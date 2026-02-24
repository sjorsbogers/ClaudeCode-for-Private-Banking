import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function IntroductionPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Introduction: Welcome to Claudius Capital</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        This is the opening lesson of Module 1. You have already set up your environment and verified everything works. Now we start using Claude Code the way you will actually use it in your day-to-day work — to navigate, analyse, create, and solve problems faster than you thought possible.
      </p>

      <LessonCommand numbered="/start-1-1" branded="/foundations-intro" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Before We Begin — Calibrating to You",
          "Calibrating based on your AI experience and technical level",
          "The Scenario: Claudius Capital",
          "Your Role as Operations Manager replacement",
          "The People You Will Work With",
          "What Thomas Left Behind",
          "How the Course Works",
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
        Claudius Capital is an AI-driven family office managing $8.5 billion across 200+ UHNW families. Investment performance is exceptional at +14.2% trailing twelve months — but the operations are falling apart. Client NPS has dropped from 78 to 62 despite strong returns, because the service experience no longer matches the promise. You are the new Operations Manager, stepping in on your first week with a 90-day mandate from founder Marcus Claudius.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Your AI experience and technical level have been assessed",
          "You understand the Claudius Capital scenario (firm, people, 90-day mandate)",
          "You have independently explored 2–3 chaos files and shared first impressions",
          "You have seen the project folder structure and know what each folder contains",
          "You understand the course structure (Module 1 sections, Build Labs, Capstone)",
          "You understand how lessons work (slash commands, interactive flow, pace control)",
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
