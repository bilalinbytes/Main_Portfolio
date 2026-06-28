import { Award, ExternalLink, Shield, Star, Brain, Cloud, Server, Code2, BookOpen, BarChart3 } from "lucide-react";

type Certification = {
  title: string;
  subtitle?: string;
  description: string;
  badges: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
  icon: React.ElementType;
  date?: string;
};

const certifications: Certification[] = [
  {
    title: "AIIMS Delhi Industry Collaboration",
    subtitle: "Department of Pulmonary, Critical Care & Sleep Medicine",
    description:
      "Contributed to an AI-powered respiratory healthcare platform under Dr. Irfan Sheikh. Developed patient and clinician workflows, AI-assisted risk assessment, AQI integration, symptom monitoring, and healthcare dashboards.",
    badges: ["Healthcare AI", "React", "Node.js", "FastAPI", "AIIMS Delhi", "Clinical Collaboration", "Production Project"],
    link: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
    linkLabel: "View Certificate",
    featured: true,
    icon: Award,
    date: "2025",
  },
  {
    title: "AWS Educate — Machine Learning Foundations",
    subtitle: "Amazon Web Services",
    description: "Foundational understanding of machine learning concepts, AWS ML services, and cloud-based ML workflows.",
    badges: ["AWS", "Machine Learning", "Cloud Computing"],
    icon: Cloud,
    date: "2024",
  },
  {
    title: "Introducing Generative AI with AWS",
    subtitle: "Amazon Web Services",
    description: "Generative AI fundamentals, LLM architectures, and hands-on experience with AWS Bedrock for building AI applications.",
    badges: ["Generative AI", "LLMs", "AWS Bedrock"],
    icon: Brain,
    date: "2024",
  },
  {
    title: "AWS APAC Solutions Architecture Job Simulation",
    subtitle: "Amazon Web Services — Forage",
    description: "Practical cloud architecture simulation: designed scalable solutions, applied AWS Well-Architected Framework, and presented technical recommendations.",
    badges: ["Cloud Architecture", "AWS", "System Design"],
    icon: Server,
    date: "2024",
  },
  {
    title: "Career Essentials in Software Development",
    subtitle: "Microsoft & LinkedIn",
    description: "Core software development fundamentals including version control, agile methodologies, and professional development workflows.",
    badges: ["Software Engineering", "Git", "Agile", "Web Development"],
    icon: Code2,
    date: "2024",
  },
  {
    title: "HackerRank Developer Certifications",
    subtitle: "Python · React · Problem Solving",
    description: "Validated proficiency in Python programming, React frontend development, and algorithmic problem solving across multiple skill levels.",
    badges: ["Python", "React", "DSA", "Algorithms"],
    icon: Shield,
    date: "2024",
  },
  {
    title: "LeetCode — bilalinbytes80",
    subtitle: "59 problems solved · 31 Easy · 27 Medium · 1 Hard",
    description:
      "Active problem-solving practice across data structures, algorithms, and system design fundamentals. Global rank #2,322,252 with consistent submissions.",
    badges: ["Data Structures", "Algorithms", "Problem Solving", "DSA"],
    icon: BarChart3,
    link: "https://leetcode.com/bilalinbytes80/",
    linkLabel: "View Profile",
    date: "Active",
  },
];

const CertCard = ({ cert }: { cert: Certification }) => {
  const Icon = cert.icon;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        cert.featured
          ? "border-teal-400/30 dark:border-teal-500/30 md:col-span-2"
          : "border-slate-200/60 dark:border-white/[0.06]"
      } ${cert.featured ? "dark:bg-slate-900/80" : "dark:bg-slate-900/60"} dark:hover:border-teal-500/20`}
    >
      {cert.featured && (
        <>
          <div className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-1 ring-teal-500/20" />
          <div className="pointer-events-none absolute -inset-px z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/8 via-transparent to-indigo-500/8" />
          </div>
        </>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            cert.featured
              ? "bg-teal-500/15 text-teal-600 ring-1 ring-teal-500/25 dark:text-teal-300"
              : "bg-slate-100 text-slate-600 ring-1 ring-slate-200 dark:bg-white/[0.05] dark:text-slate-400 dark:ring-white/10"
          }`}>
            <Icon className="h-5 w-5" />
          </div>
          {cert.featured && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-400">
              <Star className="h-3 w-3" />
              Featured
            </span>
          )}
          {cert.date && (
            <span className="ml-auto text-[11px] font-medium text-slate-400 dark:text-slate-500">{cert.date}</span>
          )}
        </div>

        <div className="mt-4">
          <h3 className={`font-semibold leading-snug ${
            cert.featured ? "text-lg text-teal-800 dark:text-teal-200" : "text-base text-slate-800 dark:text-slate-200"
          }`}>
            {cert.title}
          </h3>
          {cert.subtitle && (
            <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{cert.subtitle}</p>
          )}
        </div>

        <p className="text-copy-muted mt-2 text-xs leading-relaxed sm:text-sm">{cert.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {cert.badges.map((badge) => (
            <span
              key={badge}
              className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium transition-colors ${
                cert.featured
                  ? "border-teal-500/25 bg-teal-500/[0.08] text-teal-700 hover:border-teal-500/40 dark:text-teal-300"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {cert.link && (
          <div className="mt-auto pt-4">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all hover:scale-105 active:scale-100 ${
                cert.featured
                  ? "bg-teal-700 text-white hover:bg-teal-600"
                  : "border border-slate-200 text-slate-700 hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:text-slate-300 dark:hover:text-teal-300"
              }`}
            >
              {cert.linkLabel || "View"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" aria-labelledby="certs-heading" className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Credentials</span>
          <h2 id="certs-heading">Certifications & Achievements</h2>
          <p>
            Industry collaborations, cloud certifications, and validated technical skills.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
