import { Download, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";
import cvFile from "@/assets/Bilal_cv.pdf";
import profileImage from "@/assets/bilal-profile.png";

const stats = ["Final-Year CSE", "SDE Internship", "AI/ML Track", "Backend APIs", "PES University"];

const terminalLines = [
  ["$ whoami", "Mohammed Bilal"],
  ["$ target_roles", "SDE Internship  |  AI/ML Engineer"],
  ["$ tech_stack", "Python  C++  TypeScript  React  FastAPI  Node.js  AWS"],
  ["$ focus", "DSA  Backend APIs  Applied ML  Cloud AI  Healthcare software"],
  ["$ current_work", "CoreStack ModelMatrix capstone + SaansSync AIIMS Delhi collaboration"],
];

const socials = [
  { label: "GitHub", href: "https://github.com/bilalinbytes", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-bilal-23678328a/", icon: Linkedin },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/PES2UG23CS344", text: "HR" },
];

const Hero = () => {
  return (
    <section id="home" className="section-primary relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40 dark:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-in-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-800 dark:text-teal-200">
              <span className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_16px_rgba(20,184,166,0.75)]" />
              Software engineering + applied AI/ML
            </div>
            <h1 className="text-main max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Mohammed Bilal
            </h1>
            <p className="mt-4 text-xl font-medium text-teal-700 dark:text-teal-300 sm:text-2xl">
              Final-year CSE student focused on backend, full-stack, cloud AI, and healthcare software projects.
            </p>
            <p className="text-soft mt-4 max-w-2xl text-base leading-7 sm:text-lg">
              I build practical software with clean UI, REST APIs, data-driven features, and machine learning workflows,
              including a CoreStack capstone and an AIIMS Delhi respiratory care collaboration.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={cvFile} download className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition hover:bg-teal-600">
                <Download size={18} />
                Download Resume
              </a>
              <a href="mailto:mohammedbilal96654@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:border-teal-500/50 hover:bg-teal-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-teal-500/10">
                <Mail size={18} />
                Contact Me
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

          <div className="animate-slide-in-right space-y-4">
            <div className="premium-card overflow-hidden p-5 text-center">
              <img
                src={profileImage}
                alt="Mohammed Bilal"
                className="mx-auto aspect-square w-52 rounded-full border border-slate-200 object-cover shadow-lg dark:border-white/10 sm:w-60"
              />
              <div className="mt-5">
                <p className="text-main text-xl font-semibold">Software Engineering Candidate</p>
                <p className="text-copy-muted mt-2 flex items-center justify-center gap-2 text-sm">
                  <MapPin size={16} />
                  Bengaluru, India
                </p>
              </div>
            </div>

            <div className="premium-card overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Terminal size={16} />
                  placement.ts
                </div>
              </div>
              <div className="terminal-panel space-y-3 p-4 font-mono text-sm">
                {terminalLines.map(([command, response]) => (
                  <div key={command}>
                    <p className="text-teal-300">{command}</p>
                    <p className="mt-1 whitespace-pre-wrap text-slate-100">{response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
