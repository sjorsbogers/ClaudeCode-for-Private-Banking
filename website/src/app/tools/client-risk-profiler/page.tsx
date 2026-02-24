import Link from "next/link";

export default function ClientRiskProfilerPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Built Tools
      </p>
      <h1 className="text-3xl font-bold mb-4">Client Risk Profiler</h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Interactive 20-question risk tolerance assessment with weighted scoring, profile
        classification, indicative asset allocation, and MiFID II-compliant suitability
        documentation. Replaces Claudius Capital&apos;s PDF-by-email process with a
        structured, auditable digital workflow.
      </p>

      <a
        href="https://risk-profiler-six.vercel.app"
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
        The Client Risk Profiler guides clients (or RMs) through a structured 20-question
        assessment across five categories: investment time horizon, loss tolerance,
        financial capacity for risk, investment experience, and investment objectives.
        Each answer is weighted and scored to produce a risk profile classification with
        a corresponding indicative asset allocation.
      </p>
      <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
        The tool operates in two modes: client self-service (client receives a link and
        completes independently) and RM-assisted (RM fills in the assessment during a
        client meeting). All outputs include a suitability documentation section
        formatted for compliance records.
      </p>

      <h2 className="text-xl font-semibold mb-4" id="how-it-works">
        How It Works
      </h2>
      <ol className="space-y-3 mb-8">
        {[
          "Select the mode: Client Self-Service or RM-Assisted. RM-assisted mode prompts for the RM name and meeting notes.",
          "Work through 20 questions across 5 categories — each question presents multiple-choice options with clear, plain-language answers.",
          "The tool scores responses in real time using a weighted system, with each category contributing to the overall risk score.",
          "On completion, the tool outputs the risk profile classification (e.g., Moderate Growth), score breakdown by category, and indicative asset allocation ranges.",
          "Download the suitability documentation section, pre-formatted for inclusion in the client file and compliance records.",
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
          "20 questions across 5 categories: time horizon, loss tolerance, financial capacity, experience & knowledge, investment objectives",
          "Dual mode: client self-service or RM-assisted with observational notes field",
          "Weighted scoring with per-category breakdown",
          "Risk profile classification with indicative asset allocation ranges",
          "MiFID II suitability documentation output, pre-formatted for compliance records",
          "Hypothetical scenario questions for loss tolerance (−10%, −20%, −30% portfolio decline)",
          "Audit trail: assessment date, mode, RM name (if applicable), and score history",
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
          href="https://risk-profiler-six.vercel.app"
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
