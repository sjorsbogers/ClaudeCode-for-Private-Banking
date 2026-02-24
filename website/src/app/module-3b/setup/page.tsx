import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module3BSetupPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 3B: Junior Analyst Path — Investment Memo Builder
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 3B.1 — Investment Memo Builder: Setup
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Analysts at Claudius Capital spend hours transforming research notes, fund documents, and meeting minutes into structured Investment Committee memos. The format is specific. The bar is high. And the process is entirely manual. The Investment Memo Builder changes that.
      </p>

      <LessonCommand numbered="/start-3b-1" branded="/analyst-memo-setup" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Opening — the IC memo problem and the tool&apos;s value proposition",
          "Scaffold — creating the Next.js project with correct defaults",
          "Bridge — ready to define requirements in Lesson 3B.2",
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
        Investment Committee memos at Claudius Capital follow a precise structure — fund overview, performance analysis, risk assessment, operational due diligence, fee analysis, investment thesis, key concerns, and recommendation. Every word is scrutinised by senior investment professionals before allocation decisions are made. The Investment Memo Builder takes messy inputs — raw research notes, DDQ documents, fund marketing materials — and produces structured, IC-ready memos, saving analysts hours per fund evaluation.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Project scaffolded",
          "Student understands the tool&apos;s purpose",
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
