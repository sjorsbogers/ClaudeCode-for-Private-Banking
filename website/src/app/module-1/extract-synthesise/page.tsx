import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function ExtractSynthesisePage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Extract, Synthesise &amp; Create</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You&apos;ve explored the chaos Thomas left behind. You know the landscape. Now let&apos;s do something with it — learning the core skill of extracting data from messy files, synthesising it into structured insights, and creating a polished deliverable for a senior audience.
      </p>

      <LessonCommand numbered="/start-1-3a" branded="/foundations-extract" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: the three skills you&apos;ll use constantly",
          "Exercise 1: Extract Key Data Points from multiple chaos files",
          "Exercise 2: Synthesise Into a Narrative for Marcus",
          "Exercise 3: Critique and Improve — making Claude self-assess its work",
          "Exercise 4: Create the Final Deliverable",
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
        Marcus is a data-driven leader — he wants specific metrics, not vague observations. The deliverable for this lesson is a leadership update for Marcus: a concise briefing on the state of operations that he can read in 5 minutes and act on. The key v2 addition is a structured &quot;critique and improve&quot; step where Claude identifies weaknesses in its own output and you decide what to fix.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Extract data from multiple chaos files",
          "Draft leadership update created with proper structure",
          "Claude self-critiqued the draft with specific, genuine weaknesses",
          "You decided which fixes to apply (exercised judgment)",
          "Final deliverable saved to organized/leadership-updates/",
          "Reflected on real-world application via the curiosity nudge",
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
