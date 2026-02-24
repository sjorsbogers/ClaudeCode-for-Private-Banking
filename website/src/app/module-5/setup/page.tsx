import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module5SetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 5: Build Lab — Client Risk Profiler
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 5.1 — Client Risk Profiler: Setup
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Every investment recommendation at Claudius Capital must be suitable for the client. Suitability starts with understanding risk tolerance — and right now, that assessment is an inconsistent conversation, not a structured process.
      </p>

      <LessonCommand numbered="/start-5-1" branded="/shared-risk-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — The suitability requirement and why inconsistent risk profiling creates regulatory exposure",
          "Scaffold — Creating the Next.js project foundation for the Client Risk Profiler",
          "Bridge — Establishing the 'draft not determine' principle before requirements begin",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-teal flex-shrink-0 mt-0.5">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="scenario-context">
        Scenario Context
      </h2>
      <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
        The Client Risk Profiler walks a client (or an RM on behalf of a client) through structured questions about investment experience, risk tolerance, time horizon, and financial capacity — producing a documented risk profile that feeds into suitability decisions. This tool is shared across both the Senior RM Path and the Junior Analyst Path, reflecting how suitability is a firm-wide obligation.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Project scaffolded and development environment ready",
          "Student understands the suitability context and MiFID II Article 25 requirement",
          "'Draft not determine' principle established before any code is written",
        ].map((item) => (
          <li key={item} className="flex gap-3 text-[var(--text-muted)]">
            <span className="text-teal flex-shrink-0 mt-0.5">&#10003;</span>
            {item}
          </li>
        ))}
      </ul>

      <PrevNextNav />
    </article>
  );
}
