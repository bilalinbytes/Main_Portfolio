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
      text: "Backend-heavy roles where Mohammed Bilal can build APIs, dashboards, auth flows, and production features with clean ownership.",
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
    <section id="roles" aria-labelledby="roles-heading" className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Target Roles</span>
          <h2 id="roles-heading">Mohammed Bilal – Target Roles</h2>
          <p>
            Mohammed Bilal is focused on software engineering internships, applied AI/ML work, and
            backend/cloud-oriented projects.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {targets.map((target) => (
            <div key={target.title} className="premium-card p-4 sm:p-6 lg:p-7">
              <target.icon className="mb-5 h-8 w-8 text-teal-600 dark:text-teal-300 sm:mb-7" aria-hidden="true" />
              <h3 className="text-main text-xl font-semibold">{target.title}</h3>
              <p className="text-copy-muted mt-3 text-sm leading-6 sm:mt-4 sm:text-base sm:leading-7">{target.text}</p>
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
    <section aria-labelledby="github-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Open Source Signal</span>
          <h2 id="github-heading">Mohammed Bilal – GitHub Dashboard</h2>
          <p>
            Mohammed Bilal's open-source signal on GitHub — academic and industry projects in AI/ML, DBMS, SE, and
            networking.
          </p>
        </div>

        <div className="premium-card p-4 sm:p-6">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
            <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([label, value]) => (
                <div key={label} className="subtle-panel p-4">
                  <p className="text-copy-muted text-sm">{label}</p>
                  <p className="text-main mt-2 break-words text-lg font-semibold sm:text-xl">{value}</p>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/bilalinbytes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mohammed Bilal's GitHub profile"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 sm:w-auto"
            >
              <ExternalLink size={17} aria-hidden="true" />
              Open Profile
            </a>
          </div>

          <div className="terminal-panel mt-6 rounded-lg p-3 sm:p-4" role="region" aria-label="Mohammed Bilal GitHub project signals">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-300">Mohammed Bilal – Project signals</p>
              <GitBranch className="h-4 w-4 text-teal-300" aria-hidden="true" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {projectSignals.map((signal) => (
                <div key={signal} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
                  <p className="break-words text-sm text-slate-200">{signal}</p>
                </div>
              ))}
              <div className="rounded-md border border-dashed border-teal-400/40 bg-teal-400/10 px-3 py-2">
                <p className="break-words text-sm text-teal-100">
                  LeetCode, HackerRank, and more coding profiles can be added here later.
                </p>
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
    {
      icon: BriefcaseBusiness,
      title: "Interview Readiness",
      text: "Practicing CS fundamentals, resume stories, and project explanations.",
    },
    { icon: Cloud, title: "AWS Cloud", text: "Learning practical cloud services and deployment workflows." },
    {
      icon: Brain,
      title: "Applied AI/ML",
      text: "Working on Python, data processing, model evaluation, and ML workflows.",
    },
  ];

  return (
    <section aria-label="Mohammed Bilal – Currently Learning" className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="premium-card p-4 sm:p-5">
              <item.icon className="mb-5 h-6 w-6 text-teal-600 dark:text-teal-300" aria-hidden="true" />
              <h3 className="text-main text-lg font-semibold">{item.title}</h3>
              <p className="text-copy-muted mt-2 text-sm leading-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   BLOG SECTION — SEO-ready architecture, content coming soon
   ========================================================= */
const BlogTeaser = () => {
  const posts = [
    {
      title: "My DSA Journey",
      category: "Competitive Programming",
      description:
        "Mohammed Bilal's journey through Data Structures and Algorithms — problems, patterns, and placement preparation notes.",
      comingSoon: true,
    },
    {
      title: "Building AI Projects with AWS Bedrock",
      category: "Machine Learning Projects",
      description:
        "How Mohammed Bilal built ModelMatrix — an AI model benchmarking platform using AWS Bedrock and Google Vertex AI.",
      comingSoon: true,
    },
    {
      title: "Learning Machine Learning",
      category: "AI/ML Engineering",
      description:
        "Mohammed Bilal's path through applied ML: Scikit-learn, PyTorch, HMMs, DQNs, and real project deployment.",
      comingSoon: true,
    },
    {
      title: "Software Engineering Notes",
      category: "Software Engineering",
      description:
        "Notes from Mohammed Bilal on full-stack architecture, REST APIs, DBMS design, and clean code practices.",
      comingSoon: true,
    },
    {
      title: "Placement Preparation Journey",
      category: "Interview Preparation",
      description:
        "Mohammed Bilal's structured approach to cracking SDE internship interviews at top product-based companies.",
      comingSoon: true,
    },
  ];

  return (
    <section id="blog" aria-labelledby="blog-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Blog</span>
          <h2 id="blog-heading">Mohammed Bilal – Writing &amp; Notes</h2>
          <p>
            Mohammed Bilal writes about DSA, Machine Learning, Software Engineering, and placement preparation.
            Articles coming soon.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="premium-card flex flex-col p-5 opacity-80"
              aria-label={`Blog post: ${post.title} by Mohammed Bilal`}
            >
              <span className="inline-block rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-800 dark:text-teal-100">
                {post.category}
              </span>
              <h3 className="text-main mt-3 text-base font-semibold">{post.title}</h3>
              <p className="text-copy-muted mt-2 flex-1 text-sm leading-6">{post.description}</p>
              {post.comingSoon && (
                <span className="mt-4 inline-block rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
                  Coming Soon
                </span>
              )}
            </article>
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
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <RoleTargets />
          <Projects />
          <Experience />
          <Education />
          <GitHubSection />
          <CurrentlyLearning />
          <BlogTeaser />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
