import { Award, ExternalLink, Github } from "lucide-react";

type TechGroups = Record<string, string[]>;

type ProjectData = {
  title: string;
  rating: number;
  description: string;
  techGroups: TechGroups;
  github: string;
  demo?: string;
  certificate?: string;
};

const StarBadge = ({ rating }: { rating: number }) => (
  <span className="inline-flex items-center gap-0.5 text-[11px] tracking-tight text-amber-500/90 dark:text-amber-400/80" aria-label={`${rating} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </span>
);

const projects: ProjectData[] = [
  {
    title: "Quantara",
    rating: 5,
    description:
      "Institutional investment intelligence platform unifying 17 live market APIs, SEC filing RAG, and multi-agent AI research into a single streaming architecture for financial analysts.",
    techGroups: {
      Core: ["Next.js", "React", "TypeScript", "FastAPI", "Python"],
      AI: ["Groq", "RAG", "Prompt Engineering", "AI Agents", "Vector Search", "Semantic Search", "Qdrant"],
      Infrastructure: ["Docker", "Redis", "PostgreSQL", "Celery", "JWT"],
      Engineering: ["REST APIs", "SSE Streaming", "Caching", "Background Workers", "Financial APIs", "SEC EDGAR"],
    },
    github: "https://github.com/bilalinbytes/quantara",
  },
  {
    title: "ModelMatrix — CoreStack Capstone",
    rating: 5,
    description:
      "Cross-cloud AI model benchmarking platform enabling enterprises to evaluate, compare, and govern foundation models across AWS Bedrock and Google Vertex AI before production deployment.",
    techGroups: {
      Core: ["React", "TypeScript", "FastAPI", "Python"],
      AI: ["Prompt Engineering", "Model Evaluation", "Benchmark Pipelines", "Governance Rules"],
      Cloud: ["AWS Bedrock", "Google Vertex AI", "Cloud Governance", "Cross-cloud Strategy"],
      Engineering: ["REST APIs", "Containerization", "CI/CD", "Policy Engines"],
    },
    github: "https://github.com/Capstone-82",
  },
  {
    title: "O2Plus — AIIMS Delhi Collaboration",
    rating: 5,
    description:
      "Clinical respiratory monitoring platform built with AIIMS Delhi — enabling pulmonologists to track patient vitals, symptoms, and risk signals in real time with multilingual clinical workflows.",
    techGroups: {
      Core: ["React", "TypeScript", "Node.js", "FastAPI", "Python"],
      Infrastructure: ["PostgreSQL", "RBAC", "JWT Auth", "REST APIs"],
      Healthcare: ["HIPAA Compliance", "Clinical Workflows", "Real-time Analytics", "SpO2/AQI Monitoring"],
      Engineering: ["Multi-language Support", "Responsive Design", "Patient Management", "Appointment Systems"],
    },
    github: "https://github.com/bilalinbytes/webversionSS",
    demo: "https://webversion10.vercel.app/login",
    certificate: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
  },
  {
    title: "Distributed API Gateway",
    rating: 4,
    description:
      "Production-grade API gateway providing rate-limited ingress with JWT authentication, Redis-backed throttling, and Prometheus observability for microservice architectures.",
    techGroups: {
      Core: ["FastAPI", "Python"],
      Infrastructure: ["Redis", "Prometheus", "Docker"],
      Engineering: ["Rate Limiting", "JWT Auth", "Middleware", "Metrics Export", "Distributed Systems"],
    },
    github: "https://github.com/bilalinbytes",
  },
  {
    title: "Perishables Management System",
    rating: 4,
    description:
      "Retail inventory system automating expiry tracking and alerting across locations, delivered through formal Scrum ceremonies with CI/CD pipelines and full audit trails.",
    techGroups: {
      Core: ["Python", "REST API"],
      Infrastructure: ["SQL", "CI/CD Pipeline", "Git Workflow"],
      Engineering: ["Inventory State Machines", "Alert Thresholds", "API Design", "Scrum/Agile", "Jira"],
    },
    github: "https://github.com/bilalinbytes/Perishable-Management-System",
  },
  {
    title: "CodeMentor AI",
    rating: 4,
    description:
      "AI code review assistant that parses multi-language source code, classifies anti-patterns at scale, and generates actionable remediation using the Gemini API.",
    techGroups: {
      Core: ["React", "TypeScript", "Node.js"],
      AI: ["Gemini API", "Prompt Engineering", "Code Analysis"],
      Engineering: ["Multi-language Parsing", "Anti-pattern Detection", "Fix Generation", "REST APIs"],
    },
    github: "https://github.com/Mohammedbilal12345/CodeMentorAI-",
  },
  {
    title: "Credit Card Fraud Detection",
    rating: 4,
    description:
      "Real-time fraud scoring pipeline handling extreme class imbalance through multi-algorithm ensemble learning with an interactive Streamlit interface for operator review.",
    techGroups: {
      Core: ["Python", "Scikit-Learn", "Streamlit"],
      ML: ["Imbalanced Learning", "Ensemble Methods", "Anomaly Detection", "Model Evaluation"],
      Engineering: ["Data Pipelines", "Real-time Scoring", "Feature Engineering", "Resampling Strategies"],
    },
    github: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection",
  },
  {
    title: "Coding Fingerprint",
    rating: 4,
    description:
      "Programmer identification system analyzing code style, tokens, and structural patterns to predict competitive programming rank and country of origin across 25,000+ Codeforces submissions.",
    techGroups: {
      Core: ["Python", "Scikit-Learn", "TF-IDF"],
      ML: ["Feature Extraction", "Ensemble Models", "Text Classification", "Supervised Learning"],
      Engineering: ["Data Pipelines", "Statistical Analysis", "Model Evaluation", "25K+ Sample Pipeline"],
    },
    github: "https://github.com/bilalinbytes/Coding-Fingerprint",
  },
  {
    title: "Hangman AI Solver",
    rating: 3,
    description:
      "Reinforcement learning agent combining Hidden Markov Model letter priors with Deep Q-Network policy optimization, achieving 94.4% accuracy across 2,000 test games.",
    techGroups: {
      Core: ["Python", "PyTorch"],
      ML: ["Deep Q-Networks", "Hidden Markov Models", "Reinforcement Learning", "Probabilistic Modeling"],
      Engineering: ["Policy Optimization", "Sequential Decision Making", "Game Theory"],
    },
    github: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman",
  },
  {
    title: "SecureIT",
    rating: 3,
    description:
      "Full-stack e-commerce platform with Stripe payment integration, JWT-authenticated user sessions, and admin operations dashboard built on the MERN stack.",
    techGroups: {
      Core: ["React", "Node.js", "Express", "MongoDB"],
      Infrastructure: ["JWT Auth", "Stripe API", "REST APIs"],
      Engineering: ["Payment Webhooks", "Session Management", "Admin Dashboard", "CRUD Operations"],
    },
    github: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
    demo: "https://ecommerce-website-mern-five.vercel.app/",
  },
  {
    title: "CareerSphere — Campus Placement Portal",
    rating: 3,
    description:
      "Multi-role campus placement portal with ACID-compliant transaction handling, stored procedures, and role-based access for Admin, Student, and Recruiter workflows.",
    techGroups: {
      Core: ["Python", "MySQL", "Streamlit"],
      Engineering: ["RBAC", "ACID Transactions", "Stored Procedures", "Database Triggers", "Analytics Dashboards"],
    },
    github: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347",
  },
  {
    title: "CV Sensei",
    rating: 3,
    description:
      "NLP-powered resume evaluator using transformer models for multi-dimensional scoring, PDF extraction, and role-specific skill gap analysis.",
    techGroups: {
      Core: ["Python", "Transformers", "Streamlit"],
      AI: ["Hugging Face", "NLP", "Text Classification"],
      Engineering: ["PDF Parsing", "Document Analysis", "Scoring Algorithms"],
    },
    github: "https://github.com/Mohammedbilal12345/-CV-Sensei",
  },
  {
    title: "Classroom Networking Simulation",
    rating: 3,
    description:
      "Enterprise-grade campus network simulation with VLAN segmentation, VPN remote access, ASA firewall policies, and inter-VLAN routing validated through Cisco Packet Tracer.",
    techGroups: {
      Core: ["Cisco IOS", "VLAN", "VPN"],
      Infrastructure: ["ASA Firewall", "DHCP", "ACL", "Routing & Switching"],
      Engineering: ["Network Segmentation", "Enterprise Topology Design", "Failover Planning"],
    },
    github: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING",
  },
  {
    title: "Custom Ping Utility",
    rating: 3,
    description:
      "Raw-socket ICMP diagnostic tool providing RTT statistics, packet loss visualization, and traceroute functionality — built from scratch for deep network debugging.",
    techGroups: {
      Core: ["Python", "Raw Sockets", "ICMP Protocol"],
      Engineering: ["Network Diagnostics", "RTT Aggregation", "Statistical Analysis", "Matplotlib Visualization"],
    },
    github: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-",
  },
  {
    title: "Team Banalo",
    rating: 2,
    description:
      "Hackathon team formation platform with intelligent project matching, real-time collaboration, and persistent team state management for event participants.",
    techGroups: {
      Core: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL"],
      Engineering: ["Real-time Sync", "Docker Deployment", "REST APIs", "User Matching"],
    },
    github: "https://github.com/Mohammedbilal12345/TeamBanalo",
    demo: "https://teambanalo-frontend.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Featured Projects</span>
          <h2 id="projects-heading">Mohammed Bilal – Featured Projects</h2>
          <p>
            A focused set of software, AI/ML, and systems projects built by Mohammed Bilal — each explained clearly
            with real-world context, tech stack, and links.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="premium-card flex flex-col" itemScope itemType="https://schema.org/SoftwareSourceCode">
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-main break-words text-lg font-semibold sm:text-xl" itemProp="name">{project.title}</h3>
                  <StarBadge rating={project.rating} />
                </div>
                <p className="text-copy-muted mt-3 text-sm leading-6 md:min-h-28" itemProp="description">{project.description}</p>
                <div className="mt-4 space-y-3" aria-label="Technologies used">
                  {Object.entries(project.techGroups).map(([group, techs]) => (
                    <div key={group}>
                      <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">{group}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {techs.map((tech) => (
                          <span key={tech} className="max-w-full break-words rounded-md border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 text-[11px] font-medium text-teal-800 dark:text-teal-100" itemProp="programmingLanguage">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2 px-4 pb-4 min-[420px]:flex-row min-[420px]:flex-wrap sm:px-6 sm:pb-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`} itemProp="codeRepository" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-200 dark:hover:text-white min-[420px]:flex-1 sm:w-auto sm:flex-none">
                  <Github size={16} aria-hidden="true" />
                  Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-teal-600 min-[420px]:flex-1 sm:w-auto sm:flex-none">
                    <ExternalLink size={16} aria-hidden="true" />
                    Live
                  </a>
                )}
                {project.certificate && (
                  <a href={project.certificate} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} certificate`} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-800 transition hover:border-teal-500/50 dark:text-teal-100 min-[420px]:flex-1 sm:w-auto sm:flex-none">
                    <Award size={16} aria-hidden="true" />
                    Certificate
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
