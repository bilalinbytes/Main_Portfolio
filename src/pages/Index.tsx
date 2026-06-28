import { useMemo } from "react";
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

const submissionData: Record<string, number> = {
  "1781568000": 24, "1781654400": 11, "1781740800": 24, "1781827200": 3,
  "1781913600": 1, "1782000000": 1, "1782086400": 8, "1782172800": 1,
  "1782259200": 7, "1782345600": 6, "1782432000": 14, "1782518400": 2,
  "1782604800": 1, "1754438400": 3, "1754524800": 4, "1754611200": 3,
  "1754697600": 3, "1754784000": 6, "1754870400": 2, "1754956800": 1,
  "1755043200": 1, "1755129600": 2, "1755216000": 2, "1755302400": 3,
  "1755388800": 1, "1755475200": 6, "1755561600": 2, "1755648000": 1,
  "1755734400": 1, "1755820800": 1, "1756166400": 2, "1756252800": 3,
  "1756339200": 3, "1756425600": 1, "1756598400": 1, "1756684800": 1,
  "1757203200": 1, "1757289600": 1,
};

const LeetCodeHeatmap = () => {
  const today = new Date();
  const days = useMemo(() => {
    const result: { date: Date; count: number }[] = [];
    const lookup: Record<string, number> = {};
    for (const [ts, count] of Object.entries(submissionData)) {
      lookup[ts] = count;
    }
    for (let i = 139; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const unix = String(Math.floor(d.getTime() / 1000));
      result.push({ date: d, count: lookup[unix] || 0 });
    }
    return result;
  }, []);

  const weeks: { date: Date; count: number }[][] = [];
  for (let w = 0; w < 20; w++) {
    weeks.push(days.slice(w * 7, w * 7 + 7));
  }

  const color = (count: number) => {
    if (count === 0) return "bg-slate-100 dark:bg-white/[0.03]";
    if (count <= 2) return "bg-teal-200 dark:bg-teal-900/50";
    if (count <= 5) return "bg-teal-400 dark:bg-teal-700";
    if (count <= 10) return "bg-teal-500 dark:bg-teal-500";
    return "bg-teal-600 dark:bg-teal-400";
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0.5" style={{ minWidth: 400 }}>
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((day, di) => (
              <div
                key={di}
                className={`h-3 w-3 rounded-sm ${color(day.count)}`}
                title={`${day.date.toLocaleDateString()}: ${day.count} submissions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

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
              bilalinbytes80 — 17-day streak
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
          <div className="mt-4">
            <LeetCodeHeatmap />
          </div>
          <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
            Active since 2025
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
