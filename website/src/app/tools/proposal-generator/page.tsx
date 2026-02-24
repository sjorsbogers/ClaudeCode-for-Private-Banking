import Link from "next/link";

export default function ProposalGeneratorPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Proposal Generator</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Customised, branded pitch documents from prospect requirements. Cuts proposal
        turnaround from 5–7 business days to same-day — every proposal consistent,
        compliant, and genuinely tailored to the prospect.
      </p>

      <a
        href="https://proposal-generator-black-psi.vercel.app"
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
        The Proposal Generator produces complete investment proposals — from a concise
        introductory pitch to a full RFP response — using prospect details as input.
        The output is branded Claudius Capital material: navy and gold, professional
        tone, specific to the prospect&apos;s situation rather than generic boilerplate.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        The tool is jurisdiction-aware by design. Proposals automatically reflect the
        correct regulatory context — FINMA for Swiss clients, FCA for UK/EU, MAS for
        Singapore — and include mandatory suitability and fee disclosure sections.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Enter prospect details: name, type, estimated AUM, currency, jurisdiction, risk profile, and any specific requirements or concerns.",
          "Select the proposal type: Full RFP Response (10+ pages), Introductory Pitch (3–5 pages), or Follow-Up/Revised Proposal.",
          "The tool generates all 9 proposal sections, tailored to the prospect's stated needs.",
          "Review and refine — the executive summary, investment approach, and proposed strategy sections are where human judgment matters most.",
          "Export the finished proposal for client delivery.",
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
          "9 proposal sections: executive summary, why Claudius Capital, investment approach, proposed strategy, team, track record, fees, next steps, compliance disclosures",
          "3 proposal types: Full RFP Response, Introductory Pitch, Follow-Up/Revised",
          "Multi-jurisdiction awareness: FINMA, FCA, MAS — correct regulatory language per jurisdiction",
          "Referral acknowledgment when applicable",
          "Fee transparency section with all-in cost disclosure",
          "Suitability documentation integrated throughout",
          "Tone calibrated to the prospect's profile — not generic, not arrogant",
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
          href="https://proposal-generator-black-psi.vercel.app"
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
