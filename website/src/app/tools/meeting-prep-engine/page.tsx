import Link from "next/link";

export default function MeetingPrepEnginePage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Meeting Prep Engine</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Auto-generates structured meeting one-pagers from client data. Select a client,
        choose the meeting type, pick attendees, click Generate — and get a polished,
        print-ready prep document in seconds instead of 1–2 hours.
      </p>

      <a
        href="https://meeting-prep-engine.vercel.app"
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
        The Meeting Prep Engine produces a complete, structured one-pager for any client
        meeting — quarterly reviews, ad-hoc check-ins, or prospect pitch meetings.
        The document is designed to be printed and carried into the meeting, covering
        everything an RM needs: compliance flags, client snapshot, portfolio data,
        agenda, and suggested talking points.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        Compliance flags always appear first — overdue KYC or suitability reviews are
        surfaced prominently before the RM walks in, not discovered in the meeting itself.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Select a client from the pre-loaded profiles or paste in prospect data manually.",
          "Choose the meeting type: Quarterly Review, Ad-Hoc, or Prospect/Pitch Meeting.",
          "Select meeting attendees — the tool tailors talking points to each person's known priorities.",
          "Click Generate. The tool builds the full one-pager across 8 sections.",
          "Review, adjust any commentary, and print or export for the meeting.",
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
          "8 one-pager sections: compliance flags, client snapshot, attendee brief, portfolio summary, agenda, talking points, questions to ask, and next actions",
          "Compliance flags with RAG (Red/Amber/Green) status for KYC and suitability — always shown first",
          "3 meeting types: Quarterly Review, Ad-Hoc, Prospect/Pitch",
          "Attendee-aware talking points tailored to each person's priorities",
          "Jurisdiction indicator (FINMA / FCA / MAS) on every document",
          "Pre-loaded with Claudius Capital client profiles (Van der Berg, Hoffmann, Chen families)",
          "Manual paste mode for new prospects and custom data",
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
          href="https://meeting-prep-engine.vercel.app"
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
