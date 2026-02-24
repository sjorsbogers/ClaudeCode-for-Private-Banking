import LessonCommand from "@/components/LessonCommand";
import PrevNextNav from "@/components/PrevNextNav";

export default function Module2GithubPage() {
  return (
    <article>
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
        Module 2: Build Lab — Client Report Generator
      </p>
      <h1 className="text-3xl font-bold mb-4">
        Lesson 2.4 — GitHub
      </h1>
      <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-8">
        Your tool is working and compliance-approved. Now back it up with version control. This lesson walks you through pushing the Client Report Generator to a private GitHub repository — private by default, always, in banking.
      </p>

      <LessonCommand numbered="/start-2-4" branded="/build-github" />

      <h2 className="text-xl font-semibold mb-4 mt-8" id="what-youll-cover">
        What You&apos;ll Cover
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub account setup (or verification if you already have one)",
          "Initialising git and creating a .gitignore for Node projects",
          "Committing and pushing to a private GitHub repository",
          "Verifying the repository is private and adding a description",
          "Bridge — ready to deploy live",
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
        Every tool built at Claudius Capital must be version-controlled and stored privately. GitHub gives you a full history of every change — so if something breaks after an update, you can roll back. The lesson adapts to your experience level: seasoned GitHub users move fast, while first-timers get a full guided walkthrough. Regardless of experience, the non-negotiable rule is the same: always use a private repository.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-8" id="success-criteria">
        Success Criteria
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "GitHub account verified or created",
          "Project pushed to GitHub",
          "Repository is PRIVATE (verified)",
          "Description added to repo",
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
