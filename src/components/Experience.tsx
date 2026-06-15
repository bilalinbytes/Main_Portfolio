import { BriefcaseBusiness, CheckCircle2, ExternalLink, Github } from "lucide-react";

const experiences = [
  {
    role: "Freelance Software Developer",
    organization: "Self-employed",
    period: "Jan 2025 - Present",
    project: "SaansSync - AIIMS Delhi Collaboration",
    links: [
      { label: "Code", href: "https://github.com/bilalinbytes/webversionSS", icon: Github },
      { label: "Live Demo", href: "https://webversion10.vercel.app/login", icon: ExternalLink },
      {
        label: "AIIMS Certificate",
        href: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
        icon: ExternalLink,
      },
    ],
    bullets: [
      "Developed a respiratory care platform under the guidance of Dr. Irfan Sheikh, Pulmonary Specialist, AIIMS Delhi",
      "Built patient and clinician workflows for symptom tracking, medication monitoring, and appointment management",
      "Implemented secure role-based access, multilingual support, and risk signals using SpO2, AQI, and symptom trends",
      "Delivered a working deployed version and earned a certificate from AIIMS Delhi for the collaboration",
    ],
  },
  {
    role: "Industry Capstone Project",
    organization: "CoreStack",
    period: "Sep 2025 - Present",
    project: "ModelMatrix - AI Model Benchmarking & Recommendation Platform",
    links: [{ label: "Repository", href: "https://github.com/Capstone-82", icon: Github }],
    bullets: [
      "Developing ModelMatrix, an AI model benchmarking and recommendation platform using AWS Bedrock and Google Vertex AI",
      "Building FastAPI microservices for automated benchmarking, prompt analysis, and model recommendation workflows",
      "Designing dashboards for benchmark analytics, governance insights, and enterprise model evaluation support",
      "Connecting cloud AI services with practical evaluation workflows for model selection and comparison",
    ],
  },
  {
    role: "Head of Web Development",
    organization: "Mahil AI Club, PES University",
    period: "Feb 2025 - Aug 2025",
    project: "Club web development and technical events",
    links: [],
    bullets: [
      "Led frontend development work for Mahil AI Club initiatives at PES University",
      "Built and maintained React-based interfaces for events, hackathons, and club workflows",
      "Created coding and API-oriented problem statements for technical events",
      "Practiced product-company interview stories around ownership, tradeoffs, and debugging",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-shell section-primary">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Software Engineering Experience</span>
          <h2 id="experience-heading">Mohammed Bilal – Software Engineering Experience</h2>
          <p>Real-world engineering responsibilities and leadership practice for SDE internships and AI/ML roles.</p>
        </div>

        <div className="relative space-y-5 sm:pl-6">
          <div className="absolute bottom-0 left-2 top-0 hidden w-px bg-slate-200 dark:bg-white/10 sm:block" />
          {experiences.map((experience) => (
            <div key={`${experience.role}-${experience.organization}`} className="premium-card relative p-4 sm:p-6">
              <span className="absolute -left-[1.9rem] top-7 hidden h-4 w-4 rounded-full border-4 border-slate-50 bg-teal-500 dark:border-[#0B1220] sm:block" />
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div className="min-w-0">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-700 dark:text-teal-300">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <h3 className="text-main text-xl font-semibold sm:text-2xl">{experience.role}</h3>
                  <p className="text-copy-muted mt-2">{experience.organization}</p>
                  <p className="mt-3 break-words text-sm font-medium text-teal-700 dark:text-teal-300 sm:text-base">{experience.project}</p>
                </div>
                <span className="self-start rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-800 dark:text-teal-200">
                  {experience.period}
                </span>
              </div>

              {experience.links.length > 0 && (
                <div className="mt-5 flex flex-col gap-2 min-[420px]:flex-row min-[420px]:flex-wrap">
                  {experience.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-200 dark:hover:text-white min-[420px]:flex-1 sm:w-auto sm:flex-none"
                    >
                      <link.icon size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <div className="mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2">
                {experience.bullets.map((item) => (
                  <div key={item} className="subtle-panel flex items-start gap-3 p-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                    <span className="text-soft text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
