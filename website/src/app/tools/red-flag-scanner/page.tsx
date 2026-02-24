import Link from "next/link";

export default function RedFlagScannerPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Red Flag Scanner</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Identifies potential compliance gaps across MiFID II, KYC/AML, GDPR, FINMA, FCA,
        and MAS frameworks — before issues reach the compliance team. The tool flags;
        the compliance team validates. AI identifies, humans adjudicate.
      </p>

      <a
        href="https://compliance-analyzer-topaz.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors mb-10"
      >
        Launch Tool →
      </a>

      <hr className="border-[var(--border)] mb-8" />

      <h2 className="text-xl font-semibold mb-4" id="what-it-does">
        What This Tool Does
      </h2>
      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
        The Red Flag Scanner analyses fund documents, process descriptions, and deal
        materials for potential regulatory and operational issues. It covers three scan
        types — process compliance, fund document scanning, and manager red flags — and
        checks against six regulatory frameworks simultaneously.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        Findings are presented in a RAG (Red/Amber/Green) dashboard, with a structured
        analyst-to-compliance handoff report ready to send. This is a pre-flight check,
        not a compliance sign-off — findings go to the compliance team for validation.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Paste in the document to be scanned — fund prospectus, DDQ, internal process description, or deal materials.",
          "Select scan types: Process Compliance, Fund Document Scanning, Manager Red Flags — or run all three.",
          "Select the applicable regulatory frameworks: MiFID II, KYC/AML, GDPR, FINMA, FCA, MAS.",
          "The tool scans the content and surfaces potential gaps, flagged as Red (critical), Amber (review needed), or Green (clear).",
          "Export the findings as a structured handoff report for the compliance team, with each flag referenced to the relevant regulatory article.",
        ].map((step, i) => (
          <li key={i} className="flex gap-4 text-[var(--text-muted)]">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/10 text-teal text-xs font-semibold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="text-xl font-semibold mb-4" id="key-features">
        Key Features
      </h2>
      <ul className="space-y-2 mb-8">
        {[
          "3 scan types: process compliance, fund document scanning, manager red flags",
          "6 regulatory frameworks: MiFID II, KYC/AML, GDPR, FINMA, FCA, MAS",
          "RAG (Red/Amber/Green) findings dashboard",
          "Process compliance: sequence violations, missing documentation steps, single-point-of-failure risks",
          "Fund document scanning: missing mandatory disclosures, fee transparency gaps, jurisdiction compliance",
          "Manager red flags: compliance officer turnover, concentration risk, fee anomalies, regulatory history",
          "Structured analyst-to-compliance handoff report with regulatory article references",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)] text-sm">
            <span className="text-teal flex-shrink-0 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <hr className="border-[var(--border)] mb-8" />

      <div className="flex items-center justify-between">
        <Link href="/tools" className="text-sm text-[var(--text-muted)] hover:text-teal transition-colors">
          ← All Tools
        </Link>
        <a
          href="https://compliance-analyzer-topaz.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
        >
          Launch Tool →
        </a>
      </div>
    </article>
  );
}
