import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function CommandsNavigationPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 1: Daily Skills
      </p>
      <h1 className="text-3xl font-bold mb-4">Commands &amp; Navigation</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        You&apos;ve been using Claude Code for a few lessons now. But there&apos;s more under the hood — shortcuts, commands, and navigation tricks that will make you significantly faster. Think of this as learning the keyboard shortcuts in Excel: once you know them, you never go back.
      </p>

      <LessonCommand numbered="/start-1-4" branded="/foundations-commands" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening: what&apos;s under the hood",
          "Slash Commands — what they are and how to find them",
          "Essential Operations: reading, searching, creating, editing, and web search",
          "Exercise: Hands-On Navigation practice",
          "Troubleshooting Scenarios — the four most common issues",
          "Exercise: Build Your Quick Reference Card",
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
        This is a practical, reference-building lesson — not a lecture. You will explore the slash command list, practise file reading, searching, and browsing, and build a personal quick reference card saved to the project root. The key insight: you never need to remember exact file paths or command syntax; just describe what you want in plain English.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Explore the slash command list and understand numbered + branded pairs",
          "Practise file reading, searching, and browsing using natural language",
          "Understand common troubleshooting approaches for the four main issues",
          "Quick reference card saved to project root",
          "Comfortable navigating Claude Code independently",
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
