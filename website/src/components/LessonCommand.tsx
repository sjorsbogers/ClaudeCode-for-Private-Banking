import CodeBlock from "./CodeBlock";

interface LessonCommandProps {
  numbered: string;
  branded?: string;
}

export default function LessonCommand({ numbered, branded }: LessonCommandProps) {
  return (
    <div className="border border-teal/30 bg-teal/5 rounded-lg p-4 my-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
        Run in Claude Code
      </p>
      <CodeBlock command={numbered} />
      {branded && (
        <p className="text-xs text-[var(--text-muted)] mt-1">
          Also available as:{" "}
          <code className="font-mono text-teal">{branded}</code>
        </p>
      )}
    </div>
  );
}
