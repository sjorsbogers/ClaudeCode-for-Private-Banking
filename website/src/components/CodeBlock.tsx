"use client";

import { useState } from "react";

interface CodeBlockProps {
  command: string;
  label?: string;
}

export default function CodeBlock({ command, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4">
      {label && (
        <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide mb-1">
          {label}
        </p>
      )}
      <div className="code-block-wrapper">
        <pre
          className="p-4 rounded-lg overflow-x-auto text-sm font-mono"
          style={{ background: "var(--code-bg)", color: "var(--code-text)" }}
        >
          <code>{command}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="copy-button bg-navy-lighter text-warm-white text-xs px-2 py-1 rounded hover:bg-navy-light transition-colors cursor-pointer"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
