import Step from "@/components/Step";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import PrevNextNav from "@/components/PrevNextNav";

export default function Installation() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Getting Started
      </p>
      <h1 className="text-3xl font-bold mb-4">Installation</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Set up everything you need to run Claude Code. This takes about 15
        minutes.
      </p>

      <hr className="border-[var(--border)] mb-8" />

      <h2 className="text-xl font-semibold mb-6" id="prerequisites">
        Prerequisites
      </h2>

      <Step number={1} title="Get a Claude subscription">
        <p className="mb-3">
          Claude Code requires a Claude Pro, Team, or Enterprise
          subscription. If you don&apos;t have one yet:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>
            Go to{" "}
            <a
              href="https://claude.ai"
              className="text-teal hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              claude.ai
            </a>
          </li>
          <li>Create an account or sign in</li>
          <li>Subscribe to Claude Pro ($20/month) or higher</li>
        </ol>
      </Step>

      <Step number={2} title="Install Node.js">
        <p className="mb-3">
          Claude Code needs Node.js version 18 or later. Check if
          you already have it:
        </p>
        <CodeBlock command="node --version" label="Check Node.js version" />
        <p className="mb-3">
          If you see a version number (v18 or higher), you&apos;re good. If
          not, download it from{" "}
          <a
            href="https://nodejs.org"
            className="text-teal hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            nodejs.org
          </a>{" "}
          — choose the LTS (Long Term Support) version.
        </p>
        <Callout type="tip">
          <p>
            On Mac, you can also install Node.js via Homebrew:{" "}
            <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
              brew install node
            </code>
          </p>
        </Callout>
      </Step>

      <Step number={3} title="Install a code editor">
        <p className="mb-3">
          You need a code editor (IDE) to run Claude Code. Choose one:
        </p>
        <div className="space-y-3 mb-3">
          <div className="border border-[var(--border)] rounded-lg p-4">
            <p className="font-medium text-sm">
              VS Code{" "}
              <span className="text-[var(--text-muted)] font-normal">(Recommended)</span>
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Free, widely used, excellent terminal integration.{" "}
              <a
                href="https://code.visualstudio.com"
                className="text-teal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>
          <div className="border border-[var(--border)] rounded-lg p-4">
            <p className="font-medium text-sm">Windsurf</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              AI-focused editor built on VS Code.{" "}
              <a
                href="https://codeium.com/windsurf"
                className="text-teal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>
          <div className="border border-[var(--border)] rounded-lg p-4">
            <p className="font-medium text-sm">Cursor</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              AI-native code editor.{" "}
              <a
                href="https://cursor.com"
                className="text-teal hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>
        </div>
      </Step>

      <h2 className="text-xl font-semibold mb-6 mt-12" id="install-claude-code">
        Install Claude Code
      </h2>

      <Step number={4} title="Install the Claude Code CLI">
        <p className="mb-3">
          Open your terminal (or the terminal inside your code editor) and
          run:
        </p>
        <CodeBlock command="npm install -g @anthropic-ai/claude-code" />
        <p className="text-sm text-[var(--text-muted)]">
          This installs Claude Code globally so you can use it from any
          folder.
        </p>
      </Step>

      <Step number={5} title="Verify the installation">
        <p className="mb-3">Run this command to confirm it installed correctly:</p>
        <CodeBlock command="claude --version" />
        <p>You should see a version number. If you see an error, try closing and reopening your terminal.</p>
      </Step>

      <Step number={6} title="Authenticate">
        <p className="mb-3">
          Start Claude Code for the first time to connect it to your Claude
          account:
        </p>
        <CodeBlock command="claude" />
        <p>
          Follow the on-screen prompts to authenticate with your Anthropic
          account. This only needs to be done once.
        </p>
      </Step>

      <Callout type="keyboard" title="Opening the terminal">
        <p>
          <strong>VS Code:</strong> Ctrl+` (backtick) on most keyboards.
          <br />
          <strong>EU keyboard layouts:</strong> If that doesn&apos;t work, try
          Ctrl+Shift+` or use the menu: Terminal &rarr; New Terminal.
          <br />
          <strong>Mac:</strong> You can also use the built-in Terminal app
          (Applications &rarr; Utilities &rarr; Terminal).
        </p>
      </Callout>

      <h2 className="text-xl font-semibold mb-6 mt-12" id="download-course">
        Download the Course
      </h2>

      <Step number={7} title="Get the course files">
        <p className="mb-3">
          Download the course folder and place it on your Desktop. You
          should have a folder called{" "}
          <code className="bg-[var(--bg-subtle)] px-1.5 py-0.5 rounded text-xs font-mono">
            CC for Private Banking v2
          </code>{" "}
          on your Desktop.
        </p>
        <Callout type="info">
          <p>
            Your course instructor will provide the course files. If you
            don&apos;t have them yet, ask your instructor for the download
            link.
          </p>
        </Callout>
      </Step>

      <PrevNextNav />
    </article>
  );
}
