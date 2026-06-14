
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Brain, BriefcaseBusiness, Cloud, Code2, ExternalLink, GitBranch, Server } from "lucide-react";

const RoleTargets = () => {
  const targets = [
    {
      icon: Code2,
      title: "SDE Internship",
      text: "Backend-heavy roles where I can build APIs, dashboards, auth flows, and production features with clean ownership.",
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      text: "Applied AI roles where Python, data pipelines, model evaluation, and product thinking matter.",
    },
    {
      icon: Cloud,
      title: "Cloud & Systems",
      text: "Cloud-aware engineering around AWS basics, deployment, networking, and reliable developer workflows.",
    },
  ];

  return (
    <section id="roles" className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Target Roles</span>
          <h2>Target roles</h2>
          <p>Focused on software engineering internships, applied AI/ML work, and backend/cloud-oriented projects.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {targets.map((target) => (
            <div key={target.title} className="premium-card p-7">
              <target.icon className="mb-7 h-8 w-8 text-teal-600 dark:text-teal-300" />
              <h3 className="text-main text-xl font-semibold">{target.title}</h3>
              <p className="text-copy-muted mt-4 text-base leading-7">{target.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GitHubSection = () => {
  const stats = [
    ["GitHub Handle", "@bilalinbytes"],
    ["Project Focus", "AI, DBMS, SE, Networking"],
    ["Recent Additions", "5 academic projects"],
    ["Next Profile", "LeetCode coming soon"],
  ];
  const projectSignals = [
    "CoreStack ModelMatrix capstone",
    "SaansSync AIIMS collaboration",
    "Perishables SE project with Jira, Git, CI/CD, and APIs",
    "Hangman AI Solver: HMM + DQN, 94.40% success rate",
    "CareerSphere DBMS portal with procedures, triggers, and transactions",
    "Coding Fingerprint ML project on Codeforces samples",
    "Classroom networking simulation with DHCP, VLAN, VPN, and firewall",
  ];

  return (
    <section className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Open Source Signal</span>
          <h2>GitHub Dashboard</h2>
          <p>A compact profile snapshot for GitHub now, with LeetCode and more coding profiles ready to plug in later.</p>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
            <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={label} className="subtle-panel p-4">
                  <p className="text-copy-muted text-sm">{label}</p>
                  <p className="text-main mt-2 text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/bilalinbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <ExternalLink size={17} />
              Open Profile
            </a>
          </div>

          <div className="terminal-panel mt-6 rounded-lg p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-300">Profile signals</p>
              <GitBranch className="h-4 w-4 text-teal-300" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {projectSignals.map((signal) => (
                <div key={signal} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                  <p className="text-sm text-slate-200">{signal}</p>
                </div>
              ))}
              <div className="rounded-md border border-dashed border-teal-400/40 bg-teal-400/10 px-3 py-2">
                <p className="text-sm text-teal-100">LeetCode, HackerRank, and more coding profiles can be added here later.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurrentlyLearning = () => {
  const items = [
    { icon: Server, title: "System Design", text: "Designing scalable services, APIs, and data flows." },
    { icon: BriefcaseBusiness, title: "Interview Readiness", text: "Practicing CS fundamentals, resume stories, and project explanations." },
    { icon: Cloud, title: "AWS Cloud", text: "Learning practical cloud services and deployment workflows." },
    { icon: Brain, title: "Applied AI/ML", text: "Working on Python, data processing, model evaluation, and ML workflows." },
  ];

  return (
    <section className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="premium-card p-5">
              <item.icon className="mb-5 h-6 w-6 text-teal-600 dark:text-teal-300" />
              <h3 className="text-main text-lg font-semibold">{item.title}</h3>
              <p className="text-copy-muted mt-2 text-sm leading-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <RoleTargets />
        <Projects />
        <Experience />
        <Education />
        <GitHubSection />
        <CurrentlyLearning />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
