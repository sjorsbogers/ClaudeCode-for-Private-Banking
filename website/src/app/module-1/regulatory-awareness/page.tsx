import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function RegulatoryAwarenessPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Work
      </p>
      <h1 className="text-3xl font-bold mb-4">Data, Privacy &amp; Regulatory Awareness</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Before you build any tool that touches client data, you need to understand the rules — not as an obstacle, but as a design principle. In wealth management, trust is the product, and this lesson teaches you to classify data, assess tools, and think about AI governance the way Raj does.
      </p>

      <LessonCommand numbered="/start-1-15" branded="/advanced-regulatory" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "The RED / AMBER / GREEN data classification framework",
          "Exercise 1: Classify data items — four realistic scenarios with discussion of grey areas and re-identification risk",
          "Exercise 2: Pre-build compliance checklist — walk-through and live application to a hypothetical tool",
          "Exercise 3: The ethical dimension — AI pre-screening of prospects and fiduciary obligations",
          "Exercise 4: Vendor assessment questionnaire — 8-10 questions Raj would ask any external AI vendor",
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
        If a client&apos;s portfolio data leaks because an AI tool was not properly governed, the regulatory fine is the least of the problems — the relationship is gone forever. This lesson introduces the RED/AMBER/GREEN framework that governs what data can be sent to external AI, walks through the pre-build compliance checklist that every Build Lab requires, and surfaces the ethical questions that sit above the regulatory floor. The fictional Claudius Capital data used throughout this course is all GREEN by design.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Data items classified correctly with nuance (including re-identification risk discussion)",
          "Pre-build compliance checklist completed for a hypothetical tool",
          "Ethical scenario discussed thoughtfully (AI prospect screening and fiduciary duty)",
          "Vendor assessment template saved to organized/analysis/vendor-assessment-template.md",
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
