import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-navy text-warm-white border-b border-navy-lighter sticky top-0 z-40">
      <div className="max-w-[90rem] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-teal flex items-center justify-center text-white font-bold text-sm">
            CC
          </div>
          <span className="font-semibold text-lg hidden sm:inline">
            Claude Code for Private Banking
          </span>
          <span className="font-semibold text-lg sm:hidden">CC for PB</span>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/getting-started/introduction"
            className="text-text-muted hover:text-warm-white transition-colors hidden md:inline"
          >
            Getting Started
          </Link>
          <a
            href="https://docs.anthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-warm-white transition-colors hidden md:inline"
          >
            Docs
          </a>
          <a
            href="https://github.com/sjorsbogers/ClaudeCode-for-Private-Banking"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-teal text-white text-sm font-medium px-3 py-1.5 rounded-md hover:bg-teal/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Download Course
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
