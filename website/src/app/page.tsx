import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy text-warm-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-4">
            Interactive Course
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Claude Code for
            <br />
            <span className="text-teal">Private Banking</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn to direct AI as a product manager — from daily workflows to
            deploying production tools. No coding required. Built for
            professionals in private banking and wealth management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/getting-started/introduction"
              className="bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <a
              href="#course-structure"
              className="border border-navy-lighter hover:border-teal text-warm-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Course
            </a>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-warm-white dark:bg-navy-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-warm-white">
                PM, Not Engineer
              </h3>
              <p className="text-navy-lighter dark:text-text-muted text-sm leading-relaxed">
                You describe requirements and review output. Claude Code writes
                the code. You never touch a line of JavaScript.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-warm-white">
                Built for Finance
              </h3>
              <p className="text-navy-lighter dark:text-text-muted text-sm leading-relaxed">
                Every exercise uses realistic private banking scenarios —
                client reports, compliance reviews, regulatory analysis
                across FINMA, FCA, and MAS.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-warm-white">
                Real Deployable Tools
              </h3>
              <p className="text-navy-lighter dark:text-text-muted text-sm leading-relaxed">
                Build and deploy up to 4 production web applications —
                report generators, meeting prep engines, proposal builders,
                and risk profilers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section id="course-structure" className="py-20 bg-warm-gray dark:bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 dark:text-warm-white">
            Course Structure
          </h2>
          <p className="text-navy-lighter dark:text-text-muted text-center mb-12 max-w-xl mx-auto">
            51 lessons across 7 modules. Start with fundamentals, then
            build real tools for your daily work.
          </p>

          <div className="space-y-6">
            <ModuleCard
              number={0}
              title="Setup"
              lessons={3}
              description="IDE orientation, prerequisites check, and course overview."
              color="bg-navy-lighter"
            />
            <ModuleCard
              number={1}
              title="Daily Work"
              lessons={20}
              description="Core skills (explore, extract, analyse, synthesise), role-specific deep-dives, advanced techniques, and reference materials."
              color="bg-teal"
            />
            <ModuleCard
              number={2}
              title="Build Lab: Client Report Generator"
              lessons={5}
              description="Your first build — a branded client portfolio report tool with compliance review."
              color="bg-teal-dark"
            />
            <div className="grid md:grid-cols-2 gap-6">
              <ModuleCard
                number={3}
                title="Build Lab: Path Choice"
                lessons={4}
                description="Senior RM: Meeting Prep Engine. Junior Analyst: Investment Memo Builder."
                color="bg-navy-light"
              />
              <ModuleCard
                number={4}
                title="Build Lab: Path Choice"
                lessons={4}
                description="Senior RM: Proposal Generator. Junior Analyst: Compliance Analyzer."
                color="bg-navy-light"
              />
            </div>
            <ModuleCard
              number={5}
              title="Build Lab: Client Risk Profiler"
              lessons={4}
              description="Multi-jurisdiction risk assessment tool with cross-border compliance scenarios."
              color="bg-teal"
            />
            <ModuleCard
              number={6}
              title="Capstone"
              lessons={3}
              description="Portfolio review, personal workflow design, and next steps."
              color="bg-navy"
            />
          </div>
        </div>
      </section>

      {/* The 70/30 Rule */}
      <section className="py-20 bg-warm-white dark:bg-navy-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-warm-white">The 70/30 Rule</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-teal/5 border border-teal/20 rounded-xl p-6">
              <p className="text-4xl font-bold text-teal mb-2">70%</p>
              <p className="font-semibold mb-2 dark:text-warm-white">AI Does the Work</p>
              <p className="text-sm text-navy-lighter dark:text-text-muted">
                Research, drafting, analysis, formatting, data extraction,
                comparison, and code generation.
              </p>
            </div>
            <div className="bg-navy/5 dark:bg-navy-lighter/20 border border-navy/20 dark:border-navy-lighter rounded-xl p-6">
              <p className="text-4xl font-bold text-navy dark:text-warm-white mb-2">30%</p>
              <p className="font-semibold mb-2 dark:text-warm-white">You Own the Judgment</p>
              <p className="text-sm text-navy-lighter dark:text-text-muted">
                Verification, context, tone, regulatory compliance,
                client relationships, and accountability.
              </p>
            </div>
          </div>
          <p className="text-navy-lighter dark:text-text-muted mt-8 text-sm">
            In regulated finance, that 30% is non-negotiable. Your name
            goes on the output. This course teaches you to own it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-warm-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-text-muted mb-8">
            Follow the getting started guide to set up your environment,
            then launch the course from your terminal.
          </p>
          <Link
            href="/getting-started/introduction"
            className="inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Begin Setup
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-light text-text-muted py-8 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Claude Code for Private Banking</p>
          <p>
            Powered by{" "}
            <a
              href="https://docs.anthropic.com"
              className="text-teal hover:text-teal-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

function ModuleCard({
  number,
  title,
  lessons,
  description,
  color,
}: {
  number: number;
  title: string;
  lessons: number;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white dark:bg-navy-light rounded-xl p-6 shadow-sm border border-warm-gray dark:border-navy-lighter flex items-start gap-4">
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-lg ${color} text-white flex items-center justify-center font-bold text-sm`}
      >
        {number}
      </div>
      <div>
        <div className="flex items-baseline gap-3 mb-1">
          <h3 className="font-semibold text-navy dark:text-warm-white">{title}</h3>
          <span className="text-xs text-text-muted">
            {lessons} {lessons === 1 ? "lesson" : "lessons"}
          </span>
        </div>
        <p className="text-sm text-navy-lighter dark:text-text-muted">{description}</p>
      </div>
    </div>
  );
}
