import Link from "next/link";

const tools = [
  {
    number: "01",
    title: "Client Report Generator",
    href: "/tools/client-report-generator",
    description:
      "Quarterly portfolio reports with multi-currency support, performance attribution, and branded output. Replaces a 7-step, 2-day manual process.",
    tag: "Reporting",
  },
  {
    number: "02",
    title: "Meeting Prep Engine",
    href: "/tools/meeting-prep-engine",
    description:
      "Auto-generates structured meeting one-pagers from client data. Select a client, choose the meeting type, click Generate — polished prep doc in seconds.",
    tag: "Relationship Management",
  },
  {
    number: "03",
    title: "Proposal Generator",
    href: "/tools/proposal-generator",
    description:
      "Customised, branded pitch documents from prospect requirements. Cut proposal turnaround from 5–7 business days to same-day.",
    tag: "Business Development",
  },
  {
    number: "04",
    title: "Investment Memo Builder",
    href: "/tools/investment-memo-builder",
    description:
      "Transforms research notes and fund documents into structured Investment Committee memos with 5-level conviction scoring and due diligence checklists.",
    tag: "Investment Research",
  },
  {
    number: "05",
    title: "Red Flag Scanner",
    href: "/tools/red-flag-scanner",
    description:
      "Identifies compliance gaps across MiFID II, KYC/AML, GDPR, FINMA, FCA, and MAS frameworks — before issues reach the compliance team.",
    tag: "Compliance",
  },
  {
    number: "06",
    title: "Client Risk Profiler",
    href: "/tools/client-risk-profiler",
    description:
      "Interactive 20-question risk tolerance assessment with weighted scoring, profile classification, indicative asset allocation, and suitability documentation.",
    tag: "Suitability",
  },
];

export default function ToolsIndex() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">The Claudius Capital Tool Suite</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Six institutional-grade tools built during the course — each one a real,
        deployable application for private banking and family office operations. AI-assisted
        with compliance guardrails, multi-jurisdiction awareness, and branded output.
      </p>

      <hr className="border-[var(--border)] mb-8" />

      <div className="space-y-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block border border-[var(--border)] rounded-xl p-6 hover:border-teal/50 hover:bg-[var(--sidebar-active-bg)] transition-colors group"
          >
            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-[var(--text-muted)] mt-1 w-6 flex-shrink-0">
                {tool.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-semibold text-lg group-hover:text-teal transition-colors">
                    {tool.title}
                  </h2>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal/10 text-teal font-medium">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
              <span className="text-[var(--text-muted)] group-hover:text-teal transition-colors flex-shrink-0 mt-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <hr className="border-[var(--border)] my-8" />

      <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
        <h3 className="font-semibold mb-2">Design Principles</h3>
        <ul className="space-y-2 text-sm text-[var(--text-muted)]">
          <li className="flex gap-2">
            <span className="text-teal flex-shrink-0">→</span>
            <span><strong className="text-[var(--text)]">AI as decision-support</strong> — Every tool identifies, drafts, and assists. Humans decide, approve, and own.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal flex-shrink-0">→</span>
            <span><strong className="text-[var(--text)]">Compliance-first</strong> — All outputs include disclaimers, audit trails, and manual sign-off sections.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal flex-shrink-0">→</span>
            <span><strong className="text-[var(--text)]">Multi-jurisdiction</strong> — Built for FINMA (Switzerland), FCA (United Kingdom), and MAS (Singapore).</span>
          </li>
          <li className="flex gap-2">
            <span className="text-teal flex-shrink-0">→</span>
            <span><strong className="text-[var(--text)]">Institutional-grade output</strong> — Branded, print-ready, and formatted for client-facing use.</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
