import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function PromptEngineeringPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">Advanced Prompt Engineering for Finance</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        In a regulated industry, the difference between a vague prompt and a structured one is not just quality — it is reliability. This lesson teaches you structured prompting techniques for consistent, verifiable output, and you will leave with three reusable prompt templates for daily wealth management work.
      </p>

      <LessonCommand numbered="/start-1-16" branded="/advanced-prompts" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Vague vs. structured test — same task, dramatically different output",
          "The RCTFC framework — Role, Context, Task, Format, and Constraints",
          "Chain of thought prompting — step-by-step reasoning for complex analysis",
          "Anti-patterns — prompts that are actively dangerous in regulated contexts",
          "Exercise 1: Transform a vague prompt into a structured one",
          "Exercise 2: Create three reusable prompt templates (Meeting Prep, Analysis, Communication)",
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
        You have been giving Claude instructions for several lessons now, and some worked better than others. The difference is not luck — it is prompt structure. A vague prompt gives a different result every time; a structured prompt gives consistent, verifiable output. This lesson demonstrates the gap with a live side-by-side comparison, then gives you the RCTFC framework and anti-pattern awareness to ensure every prompt you write in a regulated context is reliable and safe.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Vague vs. structured output comparison demonstrated and understood",
          "Vague prompt successfully transformed into a structured RCTFC prompt",
          "Anti-patterns in regulated financial prompting discussed",
          "Three reusable prompt templates saved to project root as prompt-templates.md",
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
