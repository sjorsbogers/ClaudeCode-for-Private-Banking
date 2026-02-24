import Step from "@/components/Step";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import PrevNextNav from "@/components/PrevNextNav";

export default function FirstSession() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Getting Started
      </p>
      <h1 className="text-3xl font-bold mb-4">First Session</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Open Claude Code, verify your setup, and launch the first lesson.
      </p>

      <hr className="border-[var(--border)] mb-8" />

      <Step number={1} title="Open your code editor">
        <p>
          Launch VS Code, Windsurf, or Cursor — whichever editor you
          installed.
        </p>
      </Step>

      <Step number={2} title="Open the course folder">
        <p className="mb-3">
          Use <strong>File &rarr; Open Folder</strong> and navigate to the{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            CC for Private Banking v2
          </code>{" "}
          folder on your Desktop.
        </p>
        <Callout type="tip">
          <p>
            Make sure you open the folder itself, not a file inside it. You
            should see the full folder structure in the sidebar.
          </p>
        </Callout>
      </Step>

      <Step number={3} title="Open the terminal">
        <p className="mb-3">
          Open the integrated terminal in your editor:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-3">
          <li>
            <strong>Most keyboards:</strong> Ctrl+` (backtick)
          </li>
          <li>
            <strong>EU keyboards:</strong> Ctrl+Shift+` or use menu
            Terminal &rarr; New Terminal
          </li>
          <li>
            <strong>Mac:</strong> Cmd+` or menu Terminal &rarr; New
            Terminal
          </li>
        </ul>
        <p className="text-sm text-[var(--text-muted)]">
          The terminal should open at the bottom of your editor, already
          pointed at the course folder.
        </p>
      </Step>

      <Step number={4} title="Start Claude Code">
        <p className="mb-3">In the terminal, type:</p>
        <CodeBlock command="claude" />
        <p className="mb-3">
          Claude Code will start up. You should see a welcome message and a
          prompt where you can type.
        </p>
        <Callout type="info" title="First time?">
          <p>
            If this is your first time running Claude Code, it will ask you
            to authenticate. Follow the on-screen instructions to connect
            your Claude account.
          </p>
        </Callout>
      </Step>

      <Step number={5} title="Verify your setup">
        <p className="mb-3">
          Before starting the course, make sure Claude Code can see your
          files. Type this in the Claude Code prompt:
        </p>
        <CodeBlock command="What files and folders do you see in this project?" />
        <p className="mb-3">
          Claude Code should list the course folders:{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            company-context
          </code>
          ,{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            inherited-chaos
          </code>
          ,{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            lesson-modules
          </code>
          ,{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            templates
          </code>
          , and others.
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          If it says it can&apos;t find any files, make sure the terminal is
          pointed at the course folder (check the path shown in the
          terminal prompt).
        </p>
      </Step>

      <Step number={6} title="Launch Lesson 0.1">
        <p className="mb-3">
          You&apos;re ready. Type this slash command to begin the course:
        </p>
        <CodeBlock command="/start-0-1" />
        <p>
          This launches the first lesson — IDE orientation. From here,
          each lesson will tell you which command to run next.
        </p>
      </Step>

      <Callout type="warning" title="Important distinction">
        <p>
          You now have <strong>two</strong> different environments in your
          terminal area:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Claude Code session:</strong> Where you type slash
            commands and have conversations with Claude
          </li>
          <li>
            <strong>Terminal shell:</strong> Where you run system commands
            like{" "}
            <code className="bg-warm-gray px-1 py-0.5 rounded text-xs font-mono">
              node --version
            </code>
          </li>
        </ul>
        <p className="mt-2">
          If a command isn&apos;t working, make sure you&apos;re typing it in the
          right place. Slash commands go in the Claude Code session.
          System commands go in the regular terminal.
        </p>
      </Callout>

      <hr className="border-[var(--border)] my-8" />

      <div className="bg-teal/5 border border-teal/20 rounded-xl p-6 text-center">
        <h3 className="font-semibold mb-2">
          You&apos;re all set!
        </h3>
        <p className="text-[var(--text-muted)] text-sm">
          The course runs entirely inside Claude Code from here. Each
          lesson ends by telling you which slash command starts the next
          one. Enjoy the journey.
        </p>
      </div>

      <PrevNextNav />
    </article>
  );
}
