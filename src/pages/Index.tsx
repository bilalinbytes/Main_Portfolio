import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ExternalLink, GitBranch, BarChart3 } from "lucide-react";

const GitHubSection = () => {
  return (
    <section aria-labelledby="github-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Open Source</span>
          <h2 id="github-heading">GitHub Activity</h2>
          <p>Contribution graph and repositories — live from GitHub.</p>
        </div>

        <div className="premium-card overflow-hidden p-4 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              <GitBranch className="-mt-0.5 mr-1.5 inline h-4 w-4 text-teal-500" />
              bilalinbytes — 2026 contributions
            </p>
            <a
              href="https://github.com/bilalinbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <ExternalLink size={16} />
              View Profile
            </a>
          </div>
          <div className="mt-4 overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/bilalinbytes"
              alt="GitHub contribution chart for bilalinbytes"
              className="min-w-[720px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="premium-card mt-5 overflow-hidden p-4 sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              <BarChart3 className="-mt-0.5 mr-1.5 inline h-4 w-4 text-teal-500" />
              bilalinbytes80 — 59 problems solved · 17-day streak
            </p>
            <a
              href="https://leetcode.com/bilalinbytes80/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
            >
              <ExternalLink size={16} />
              View Profile
            </a>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-3 text-center dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-2xl font-semibold text-slate-800 dark:text-slate-200">31</p>
              <p className="mt-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">Easy</p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-3 text-center dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-2xl font-semibold text-amber-600 dark:text-amber-400">27</p>
              <p className="mt-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">Medium</p>
            </div>
            <div className="rounded-lg border border-slate-200/60 bg-slate-50/50 p-3 text-center dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-2xl font-semibold text-red-600 dark:text-red-400">1</p>
              <p className="mt-0.5 text-xs font-medium text-red-600 dark:text-red-400">Hard</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
            Global rank #{new Intl.NumberFormat().format(2322252)} · Active since 2025
          </p>
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
          <Projects />
          <Certifications />
          <Experience />
          <Education />
          <GitHubSection />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
