import Link from "next/link";

export default function InvestmentMemoBuilderPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Investment Memo Builder</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Transforms raw research notes, fund documents, and meeting minutes into structured
        Investment Committee memos — with 5-level conviction scoring, manager assessment
        scorecards, and due diligence checklists. The tool structures analysis; it does
        not replace it.
      </p>

      <a
        href="https://investment-memo-builder.vercel.app"
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
        Analysts paste their research notes, fund prospectus excerpts, and meeting minutes
        into the tool, select the investment type, and receive a fully structured IC memo.
        The tool extracts and organises relevant data into the standard memo format —
        ensuring consistency, completeness, and that nothing is missed before the memo
        reaches the Investment Committee.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        Every memo includes a conviction level rating (1–5, colour-coded) and a
        recommendation: Approve, Reject, or Further Review. The analyst&apos;s judgment
        drives the input; the tool ensures the output meets IC standards.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Paste raw research notes into the large text area — the tool handles messy, unstructured content from real sources.",
          "Optionally fill structured fields directly for key data points: fund name, manager, strategy, AUM, fees, performance figures, and risk factors.",
          "Select the investment type: Fund Allocation, Direct Investment, or Exit Review.",
          "The tool generates all 8 memo sections, extracting and organising the analyst's research into IC-ready format.",
          "Review, refine the Key Risks and Recommendation sections, then export for IC submission.",
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
          "8 memo sections: executive summary & recommendation, investment thesis, manager assessment, performance analysis, risk analysis, due diligence status, terms & structure, IC recommendation",
          "5-level conviction scoring with colour coding (1 = Red / 5 = Solid Green)",
          "3 investment types: Fund Allocation, Direct Investment, Exit Review",
          "Dual input: paste unstructured notes or fill structured fields (structured fields override where both exist)",
          "Manager assessment scorecard with dynamic rows for multiple factors",
          "DD checklist with completion status tracking",
          "Peer comparison table for benchmarking against comparable funds",
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
          href="https://investment-memo-builder.vercel.app"
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
