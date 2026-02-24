import Link from "next/link";

export default function ClientReportGeneratorPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Client Report Generator</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Quarterly portfolio reports with multi-currency support, performance attribution,
        and branded output — replacing a 7-step, 2-day manual process with a tool that
        produces consistent, institutional-grade results in minutes.
      </p>

      <a
        href="https://claudius-report-generator.vercel.app"
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
        The Client Report Generator takes portfolio data as input and produces a complete,
        branded quarterly investment report. It covers every section a private banking
        client expects — from portfolio overview and performance summary through to
        market commentary, recommendations, and compliance sign-off.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        Built for Claudius Capital&apos;s multi-entity, multi-jurisdiction client base,
        it supports CHF, EUR, GBP, USD, and SGD, and handles complex structures such
        as family trusts with a foundation alongside the main portfolio.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Select a client from the dropdown or enter portfolio data manually.",
          "The tool populates all report sections automatically — portfolio overview, performance vs. benchmark, asset allocation with deviation flags, market commentary, portfolio activity, and outlook.",
          "Review each section and adjust any AI-generated commentary to match your knowledge of the client.",
          "The compliance summary section confirms suitability and KYC review status.",
          "Export or print the finished report, ready for client delivery.",
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
          "7 report sections: portfolio overview, performance summary, asset allocation, market commentary, portfolio activity, outlook & recommendations, compliance summary",
          "Multi-currency support: CHF, EUR, GBP, USD, SGD",
          "Multi-entity client handling (e.g., trust + foundation)",
          "Asset allocation deviation flagging (Rebalance / Monitor / Hold)",
          "Personalised market commentary tied to the specific client's holdings",
          "Compliance disclaimer on every recommendations section",
          "Benchmark comparison with contributor/detractor table",
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
          href="https://claudius-report-generator.vercel.app"
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
