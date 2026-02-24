import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module2SetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 2: Build Lab — Client Report Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 2.1 — Build Lab Setup (Mindset)
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        First lesson of Module 2: Build Lab — Client Report Generator. You completed Module 1 and built your daily skills. Now you build your first tool. This lesson reframes the experience as a Build Lab and establishes the PM-not-engineer model.
      </p>

      <LessonCommand numbered="/start-2-1" branded="/build-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — Welcome to Build Labs and the Client Report Generator",
          "The PM-not-Engineer Model — your role as product manager, not coder",
          "Data Integration Context — where real data comes from and quality principles",
          "Port Management — running development servers without conflicts",
          "Scaffolding the Project — creating the Next.js foundation with correct defaults",
          "Wrap-Up — mindset set, project ready",
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
        You are about to build a Client Report Generator — a web application that takes portfolio data and produces polished, branded quarterly reports for Claudius Capital clients. Before writing a single requirement, you need the right mindset: you are not the engineer. You are the product manager who describes what is needed, reviews the output, and gives feedback until it is right.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Your coding comfort level is assessed",
          "PM-not-engineer model is understood",
          "Next.js project created with light mode and suppressHydrationWarning",
          "Data context and quality principles covered",
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
