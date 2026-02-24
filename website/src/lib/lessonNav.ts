export interface LessonNavItem {
  href: string;
  label: string;
  moduleLabel?: string;
}

export const lessons: LessonNavItem[] = [
  // Getting Started
  { href: "/getting-started/introduction", label: "Introduction", moduleLabel: "Getting Started" },
  { href: "/getting-started/installation", label: "Installation", moduleLabel: "Getting Started" },
  { href: "/getting-started/first-session", label: "First Session", moduleLabel: "Getting Started" },

  // Module 0
  { href: "/module-0/ide-orientation", label: "0.1 IDE Orientation", moduleLabel: "Module 0" },
  { href: "/module-0/prerequisites", label: "0.2 Prerequisites", moduleLabel: "Module 0" },
  { href: "/module-0/course-overview", label: "0.3 Course Overview", moduleLabel: "Module 0" },

  // Module 1
  { href: "/module-1/introduction", label: "1.1 Introduction", moduleLabel: "Module 1" },
  { href: "/module-1/file-exploration", label: "1.2 File Exploration", moduleLabel: "Module 1" },
  { href: "/module-1/extract-synthesise", label: "1.3a Extract & Synthesise", moduleLabel: "Module 1" },
  { href: "/module-1/analyse-research", label: "1.3b Analyse & Research", moduleLabel: "Module 1" },
  { href: "/module-1/commands-navigation", label: "1.4 Commands & Navigation", moduleLabel: "Module 1" },
  { href: "/module-1/parallel-processing", label: "1.5 Parallel Processing", moduleLabel: "Module 1" },
  { href: "/module-1/custom-sub-agents", label: "1.6 Custom Sub-Agents", moduleLabel: "Module 1" },
  { href: "/module-1/project-memory", label: "1.7 Project Memory", moduleLabel: "Module 1" },
  { href: "/module-1/power-features", label: "1.8 Power Features", moduleLabel: "Module 1" },
  { href: "/module-1/rm-day", label: "1.9 The RM's Day", moduleLabel: "Module 1" },
  { href: "/module-1/analyst-day", label: "1.10 The Analyst's Day", moduleLabel: "Module 1" },
  { href: "/module-1/marketing-day", label: "1.11 The Marketing Lead's Day", moduleLabel: "Module 1" },
  { href: "/module-1/manager-day", label: "1.12 The Manager's Day", moduleLabel: "Module 1" },
  { href: "/module-1/operations-day", label: "1.13 The Operations Lead's Day", moduleLabel: "Module 1" },
  { href: "/module-1/compliance-day", label: "1.14 The Compliance Officer's Day", moduleLabel: "Module 1" },
  { href: "/module-1/regulatory-awareness", label: "1.15 Regulatory Awareness", moduleLabel: "Module 1" },
  { href: "/module-1/prompt-engineering", label: "1.16 Prompt Engineering", moduleLabel: "Module 1" },
  { href: "/module-1/integrations", label: "1.17 Integrations", moduleLabel: "Module 1" },
  { href: "/module-1/verification", label: "1.18 Verification", moduleLabel: "Module 1" },
  { href: "/module-1/troubleshooting", label: "1.19 Troubleshooting", moduleLabel: "Module 1" },
  { href: "/module-1/tips-best-practices", label: "1.20 Tips & Best Practices", moduleLabel: "Module 1" },

  // Module 2
  { href: "/module-2/setup", label: "2.1 Setup", moduleLabel: "Module 2" },
  { href: "/module-2/plan", label: "2.2 Plan", moduleLabel: "Module 2" },
  { href: "/module-2/build", label: "2.3 Build & Iterate", moduleLabel: "Module 2" },
  { href: "/module-2/github", label: "2.4 GitHub", moduleLabel: "Module 2" },
  { href: "/module-2/go-live", label: "2.5 Go Live", moduleLabel: "Module 2" },

  // Module 3A
  { href: "/module-3a/setup", label: "3A.1 Setup", moduleLabel: "Module 3A" },
  { href: "/module-3a/plan", label: "3A.2 Plan", moduleLabel: "Module 3A" },
  { href: "/module-3a/build", label: "3A.3 Build & Iterate", moduleLabel: "Module 3A" },
  { href: "/module-3a/ship", label: "3A.4 Ship It", moduleLabel: "Module 3A" },

  // Module 3B
  { href: "/module-3b/setup", label: "3B.1 Setup", moduleLabel: "Module 3B" },
  { href: "/module-3b/plan", label: "3B.2 Plan", moduleLabel: "Module 3B" },
  { href: "/module-3b/build", label: "3B.3 Build & Iterate", moduleLabel: "Module 3B" },
  { href: "/module-3b/ship", label: "3B.4 Ship It", moduleLabel: "Module 3B" },

  // Module 4A
  { href: "/module-4a/setup", label: "4A.1 Setup", moduleLabel: "Module 4A" },
  { href: "/module-4a/plan", label: "4A.2 Plan", moduleLabel: "Module 4A" },
  { href: "/module-4a/build", label: "4A.3 Build & Iterate", moduleLabel: "Module 4A" },
  { href: "/module-4a/ship", label: "4A.4 Ship It", moduleLabel: "Module 4A" },

  // Module 4B
  { href: "/module-4b/setup", label: "4B.1 Setup", moduleLabel: "Module 4B" },
  { href: "/module-4b/plan", label: "4B.2 Plan", moduleLabel: "Module 4B" },
  { href: "/module-4b/build", label: "4B.3 Build & Iterate", moduleLabel: "Module 4B" },
  { href: "/module-4b/ship", label: "4B.4 Ship It", moduleLabel: "Module 4B" },

  // Module 5
  { href: "/module-5/setup", label: "5.1 Setup", moduleLabel: "Module 5" },
  { href: "/module-5/plan", label: "5.2 Plan", moduleLabel: "Module 5" },
  { href: "/module-5/build", label: "5.3 Build & Iterate", moduleLabel: "Module 5" },
  { href: "/module-5/ship", label: "5.4 Ship It", moduleLabel: "Module 5" },

  // Module 6
  { href: "/module-6/portfolio-review", label: "6.1 Portfolio Review", moduleLabel: "Module 6" },
  { href: "/module-6/workflow-design", label: "6.2 Workflow Design", moduleLabel: "Module 6" },
  { href: "/module-6/next-steps", label: "6.3 Next Steps", moduleLabel: "Module 6" },
];
