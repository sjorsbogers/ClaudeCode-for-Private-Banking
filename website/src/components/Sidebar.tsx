"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };
type SubGroup = { divider: string };
type NavEntry = NavItem | SubGroup;

function isDivider(entry: NavEntry): entry is SubGroup {
  return "divider" in entry;
}

const sections: Array<{
  title: string;
  items: NavEntry[];
}> = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/getting-started/introduction" },
      { label: "Installation", href: "/getting-started/installation" },
      { label: "First Session", href: "/getting-started/first-session" },
    ],
  },
  {
    title: "Module 0: Setup",
    items: [
      { label: "0.1  IDE Orientation", href: "/module-0/ide-orientation" },
      { label: "0.2  Prerequisites", href: "/module-0/prerequisites" },
      { label: "0.3  Course Overview", href: "/module-0/course-overview" },
    ],
  },
  {
    title: "Module 1: Daily Work",
    items: [
      { divider: "Core Skills" },
      { label: "1.1  Introduction", href: "/module-1/introduction" },
      { label: "1.2  File Exploration", href: "/module-1/file-exploration" },
      { label: "1.3a Extract & Synthesise", href: "/module-1/extract-synthesise" },
      { label: "1.3b Analyse & Research", href: "/module-1/analyse-research" },
      { label: "1.4  Commands & Navigation", href: "/module-1/commands-navigation" },
      { label: "1.5  Parallel Processing", href: "/module-1/parallel-processing" },
      { label: "1.6  Custom Sub-Agents", href: "/module-1/custom-sub-agents" },
      { label: "1.7  Project Memory", href: "/module-1/project-memory" },
      { label: "1.8  Power Features", href: "/module-1/power-features" },
      { divider: "Role Deep-Dives" },
      { label: "1.9  The RM's Day", href: "/module-1/rm-day" },
      { label: "1.10 The Analyst's Day", href: "/module-1/analyst-day" },
      { label: "1.11 The Marketing Lead's Day", href: "/module-1/marketing-day" },
      { label: "1.12 The Manager's Day", href: "/module-1/manager-day" },
      { label: "1.13 The Operations Lead's Day", href: "/module-1/operations-day" },
      { label: "1.14 The Compliance Officer's Day", href: "/module-1/compliance-day" },
      { divider: "Advanced" },
      { label: "1.15 Regulatory Awareness", href: "/module-1/regulatory-awareness" },
      { label: "1.16 Prompt Engineering", href: "/module-1/prompt-engineering" },
      { label: "1.17 Integrations", href: "/module-1/integrations" },
      { label: "1.18 Verification", href: "/module-1/verification" },
      { divider: "Reference" },
      { label: "1.19 Troubleshooting", href: "/module-1/troubleshooting" },
      { label: "1.20 Tips & Best Practices", href: "/module-1/tips-best-practices" },
    ],
  },
  {
    title: "Module 2: Client Report Generator",
    items: [
      { label: "2.1  Setup", href: "/module-2/setup" },
      { label: "2.2  Plan", href: "/module-2/plan" },
      { label: "2.3  Build & Iterate", href: "/module-2/build" },
      { label: "2.4  GitHub", href: "/module-2/github" },
      { label: "2.5  Go Live", href: "/module-2/go-live" },
    ],
  },
  {
    title: "Module 3A: Meeting Prep Engine",
    items: [
      { label: "3A.1 Setup", href: "/module-3a/setup" },
      { label: "3A.2 Plan", href: "/module-3a/plan" },
      { label: "3A.3 Build & Iterate", href: "/module-3a/build" },
      { label: "3A.4 Ship It", href: "/module-3a/ship" },
    ],
  },
  {
    title: "Module 3B: Investment Memo Builder",
    items: [
      { label: "3B.1 Setup", href: "/module-3b/setup" },
      { label: "3B.2 Plan", href: "/module-3b/plan" },
      { label: "3B.3 Build & Iterate", href: "/module-3b/build" },
      { label: "3B.4 Ship It", href: "/module-3b/ship" },
    ],
  },
  {
    title: "Module 4A: Proposal Generator",
    items: [
      { label: "4A.1 Setup", href: "/module-4a/setup" },
      { label: "4A.2 Plan", href: "/module-4a/plan" },
      { label: "4A.3 Build & Iterate", href: "/module-4a/build" },
      { label: "4A.4 Ship It", href: "/module-4a/ship" },
    ],
  },
  {
    title: "Module 4B: Compliance Analyzer",
    items: [
      { label: "4B.1 Setup", href: "/module-4b/setup" },
      { label: "4B.2 Plan", href: "/module-4b/plan" },
      { label: "4B.3 Build & Iterate", href: "/module-4b/build" },
      { label: "4B.4 Ship It", href: "/module-4b/ship" },
    ],
  },
  {
    title: "Module 5: Client Risk Profiler",
    items: [
      { label: "5.1  Setup", href: "/module-5/setup" },
      { label: "5.2  Plan", href: "/module-5/plan" },
      { label: "5.3  Build & Iterate", href: "/module-5/build" },
      { label: "5.4  Ship It", href: "/module-5/ship" },
    ],
  },
  {
    title: "Module 6: Capstone",
    items: [
      { label: "6.1  Portfolio Review", href: "/module-6/portfolio-review" },
      { label: "6.2  Workflow Design", href: "/module-6/workflow-design" },
      { label: "6.3  Next Steps", href: "/module-6/next-steps" },
    ],
  },
  {
    title: "Built Tools",
    items: [
      { label: "All Tools", href: "/tools" },
      { label: "Client Report Generator", href: "/tools/client-report-generator" },
      { label: "Meeting Prep Engine", href: "/tools/meeting-prep-engine" },
      { label: "Proposal Generator", href: "/tools/proposal-generator" },
      { label: "Investment Memo Builder", href: "/tools/investment-memo-builder" },
      { label: "Red Flag Scanner", href: "/tools/red-flag-scanner" },
      { label: "Client Risk Profiler", href: "/tools/client-risk-profiler" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="py-6 px-4 space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-2 px-2">
            {section.title}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((entry, i) => {
              if (isDivider(entry)) {
                return (
                  <li key={`divider-${i}`} className="pt-3 pb-1 px-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)] opacity-60">
                      {entry.divider}
                    </span>
                  </li>
                );
              }
              const active = pathname === entry.href;
              return (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className={`block px-2 py-1.5 rounded text-sm transition-colors font-mono leading-snug ${
                      active
                        ? "bg-[var(--sidebar-active-bg)] text-[var(--sidebar-active-text)] font-medium border-l-2 border-teal pl-2"
                        : "text-[var(--text-muted)] hover:bg-[var(--bg)] hover:text-[var(--text)]"
                    }`}
                  >
                    {entry.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
