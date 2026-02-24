import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module2GoLivePage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 2: Build Lab — Client Report Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 2.5 — Go Live
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        The final step: deploy the Client Report Generator to Vercel, verify it on a live URL, and calculate the ROI of what you built. Module 2 closes with a path choice — which Build Lab do you tackle next?
      </p>

      <LessonCommand numbered="/start-2-5" branded="/build-go-live" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Pre-Deploy Check — running a local build to catch errors before Vercel sees them",
          "Deploy — pushing to Vercel and reviewing the live URL on desktop and mobile",
          "Post-Deploy Checklist — updating GitHub description, verifying privacy, testing print-to-PDF",
          "ROI Calculation — quantifying the time savings against manual report production",
          "Module 2 Complete — choosing your next path (Module 3A or 3B)",
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
        Deployment makes the tool real — accessible from any device with a URL. You run a pre-deploy build check locally to catch TypeScript errors before they reach Vercel, then push the tool live. Once deployed, you verify the experience on mobile (imagine standing outside a client&apos;s office) and test the print-to-PDF flow. The ROI table makes the value tangible: report creation time drops from two days per client to thirty minutes — a 93% reduction across a 200-client book.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Pre-deploy build check passed",
          "Deployed to Vercel",
          "Live URL added to GitHub description",
          "Repo verified as private",
          "ROI calculated",
          "Path chosen for next module",
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
