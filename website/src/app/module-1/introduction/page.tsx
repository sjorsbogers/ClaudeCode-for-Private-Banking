import LessonCommand from "@/components/LessonCommand";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
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

      <div className="mt-8 mb-8 border border-[var(--border)] rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-2" id="skip-permissions">
          Recommended: Run Claude Code without permission prompts
        </h2>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
          By default, Claude Code pauses and asks for your approval every time it wants to create a
          file, edit code, or run a command. During this course that adds up to a lot of
          confirmation clicks. We recommend restarting Claude Code with the{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            --dangerously-skip-permissions
          </code>{" "}
          flag so it can work uninterrupted.
        </p>

        <p className="text-sm font-medium mb-2">Step 1 — Exit your current Claude Code session:</p>
        <CodeBlock command="exit" label="Type in the Claude Code prompt" />
        <p className="text-[var(--text-muted)] text-xs mb-4">
          Alternatively, press <strong>Ctrl+C</strong> twice to force-quit.
        </p>

        <p className="text-sm font-medium mb-2">Step 2 — Reopen Claude Code with the flag:</p>
        <CodeBlock command="claude --dangerously-skip-permissions" label="Type in your terminal" />

        <p className="text-[var(--text-muted)] text-sm mb-4">
          Once it starts up, run the slash command above to resume Lesson 1.1.
        </p>

        <Callout type="warning" title="Understand what this flag does">
          <p className="mb-2">
            This flag removes the confirmation step before every action. That means Claude Code can
            read, create, edit, and delete files — and run terminal commands — without pausing to
            ask you first.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Claude could modify or overwrite files without warning</li>
            <li>Any terminal commands it runs will execute immediately</li>
            <li>
              <strong>Never use this flag outside a safe, contained folder</strong> — not on your
              main projects, not on production systems, not anywhere sensitive
            </li>
            <li>
              The course folder on your Desktop is a safe sandbox — nothing here connects to live
              client data or external systems
            </li>
          </ul>
          <p className="mt-2 text-sm">
            If you prefer to stay in control and approve each action, just use{" "}
            <code className="bg-warm-gray px-1 py-0.5 rounded text-xs font-mono">claude</code>{" "}
            without the flag. The course works either way — it just takes more clicks.
          </p>
        </Callout>
      </div>

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
