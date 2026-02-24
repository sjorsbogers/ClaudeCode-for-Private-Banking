import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function FileExplorationPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">File Exploration: Finding What Matters in the Mess</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        In the last lesson, you got oriented at Claudius Capital and glimpsed the chaos Thomas left behind. Now we get practical — learning to navigate, search, extract, and compare across a messy file structure. This is one of Claude Code&apos;s most immediately useful capabilities.
      </p>

      <LessonCommand numbered="/start-1-2" branded="/foundations-explore" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Exercise 1: Map the Territory — survey the full inherited-chaos structure",
          "Exercise 2: Client Data Deep Dive — extract key metrics and identify data quality issues",
          "Exercise 3: Process Documentation — where are the bottlenecks?",
          "Exercise 4: Competitive Landscape — assess Claudius Capital&apos;s market position",
          "What You Learned — skills recap and saved deliverables",
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
        Your first week at Claudius Capital. Your job is to understand the scope of what you are working with — digging into the inherited-chaos folder systematically, not just browsing but extracting real intelligence from messy files. Every exercise produces a saved deliverable in organized/analysis/, forming the evidence base you will reference throughout the course.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Map the full inherited-chaos folder structure",
          "Extract key metrics from client data (AUM, client count, data quality issues)",
          "Identify process bottlenecks from Thomas&apos;s documentation",
          "Assess the competitive landscape",
          "Three analysis files saved in organized/analysis/",
          "Respond to at least one curiosity nudge",
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
