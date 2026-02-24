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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
