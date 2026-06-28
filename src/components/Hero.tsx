import { Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import profileImage from "@/assets/bilal-profile.png";

const stats = ["Final-Year CSE", "SDE Internship", "AI/ML Track", "Backend APIs", "PES University"];

const terminalLines = [
  ["$ whoami", "Mohammed Bilal"],
  ["$ target_roles", "SDE Internship  |  AI/ML Engineer"],
  ["$ tech_stack", "Python  C++  TypeScript  React  FastAPI  Node.js  AWS"],
  ["$ focus", "DSA  Backend APIs  Applied ML  Cloud AI  Healthcare software"],
  ["$ current_work", "CoreStack ModelMatrix capstone + O2Plus AIIMS Delhi collaboration"],
];

const socials = [
  { label: "GitHub – Mohammed Bilal", href: "https://github.com/bilalinbytes", icon: Github },
  { label: "LinkedIn – Mohammed Bilal", href: "https://www.linkedin.com/in/mohammed-bilal-23678328a/", icon: Linkedin },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/PES2UG23CS344", text: "HR" },
];

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Mohammed Bilal – Software Engineer and AI/ML Developer"
      className="section-primary relative overflow-hidden px-3 pb-9 pt-20 min-[380px]:px-4 sm:px-6 sm:pb-12 sm:pt-24 lg:px-8 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="min-w-0 animate-fade-in-up">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-2 text-xs font-medium text-teal-800 dark:text-teal-200 sm:px-4 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_16px_rgba(20,184,166,0.75)]" />
              <span className="min-w-0 truncate">Software Engineering · AI/ML · PES University</span>
            </div>

            {/* Primary SEO H1 – exact match for name-based search queries */}
            <h1 className="text-main max-w-4xl text-[2.35rem] font-semibold leading-[1.05] tracking-tight min-[380px]:text-4xl sm:text-6xl">
              Mohammed Bilal – Software Engineer &amp; AI/ML Developer
            </h1>

            <p className="mt-4 text-base font-medium leading-7 text-teal-700 dark:text-teal-300 min-[380px]:text-lg sm:text-2xl sm:leading-9">
              Full Stack Developer · Machine Learning Engineer · Cloud Enthusiast · PES University, Bengaluru
            </p>
            <p className="text-soft mt-4 max-w-2xl text-sm leading-6 sm:text-lg sm:leading-8">
              Mohammed Bilal builds practical software with clean REST APIs, data-driven features, and machine learning
              workflows — including a CoreStack industry capstone and an AIIMS Delhi respiratory care collaboration.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:mohammedbilal96654@gmail.com"
                aria-label="Contact Mohammed Bilal via email"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-teal-500/50 hover:bg-teal-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-teal-500/10 sm:w-auto"
              >
                <Mail size={18} />
                Contact Mohammed Bilal
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 min-w-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-white"
                >
                  {"icon" in social ? <social.icon size={18} /> : social.text}
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0 animate-slide-in-right space-y-4">
            <div className="premium-card overflow-hidden p-4 text-center sm:p-5">
              <img
                src={profileImage}
                alt="Mohammed Bilal – Software Engineer and AI/ML Developer from PES University Bengaluru"
                width={240}
                height={240}
                loading="eager"
                decoding="async"
                className="mx-auto aspect-square w-32 rounded-full border border-slate-200 object-cover shadow-lg dark:border-white/10 min-[380px]:w-40 sm:w-60"
              />
              <div className="mt-5">
                <p className="text-main text-lg font-semibold sm:text-xl">Mohammed Bilal</p>
                <p className="text-copy-muted mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">Software Engineer · AI/ML Developer</p>
                <p className="text-copy-muted mt-2 flex items-center justify-center gap-2 text-sm">
                  <MapPin size={16} aria-hidden="true" />
                  Bengaluru, India · PES University
                </p>
              </div>
            </div>

            <div className="premium-card overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-3 py-3 dark:border-white/10 dark:bg-white/[0.03] sm:px-5 sm:py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Terminal size={16} aria-hidden="true" />
                  <span>placement.ts</span>
                </div>
              </div>
              <div className="terminal-panel space-y-3 p-3 font-mono text-xs sm:p-4 sm:text-sm" role="region" aria-label="Mohammed Bilal technical profile">
                {terminalLines.map(([command, response]) => (
                  <div key={command} className="min-w-0">
                    <p className="text-teal-300">{command}</p>
                    <p className="mt-1 whitespace-pre-wrap break-words text-slate-100">{response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat} className="premium-card p-4 text-center">
              <p className="text-main text-sm font-semibold">{stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
