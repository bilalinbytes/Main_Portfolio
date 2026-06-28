import { useState } from "react";
import {
  Award, ExternalLink, Github, Bookmark, Network, Layers,
  Cpu, Code2, Braces, FolderGit2, X, ChevronRight,
  BarChart3, Search, Shield, Server, Globe, Database,
  Cloud, Lock, Workflow, FileText, Building2, ArrowUpRight
} from "lucide-react";

type ProjectLink = {
  type: "github" | "demo" | "certificate" | "architecture" | "case-study" | "docs" | "video";
  url: string;
  label: string;
};

type Project = {
  title: string;
  description: string;
  techStack: string[];
  skills: string[];
  category: "ai-ml" | "fullstack" | "software-eng" | "networking";
  featured: boolean;
  links: ProjectLink[];
  imagePrompt: string;
};

const projects: Project[] = [
  // ─── 🤖 AI & ML ─────────────────────────────────────────────
  {
    title: "Quantara — AI Financial Intelligence",
    description: "Production-grade AI financial intelligence platform combining 17 parallel data sources, multi-agent Groq LLM research, SEC filing RAG with Qdrant, and real-time SSE streaming for conversational investment analysis.",
    techStack: [
      "Next.js", "TypeScript", "Tailwind CSS", "React",
      "FastAPI", "Python", "PostgreSQL", "Redis", "Qdrant",
      "Celery", "SQLAlchemy", "Alembic", "Groq", "fastembed",
      "Docker", "Prometheus", "Grafana", "GitHub Actions",
      "JWT", "OAuth", "FMP API", "NewsAPI", "SEC EDGAR",
      "SSE", "REST API"
    ],
    skills: [
      "LLMs", "RAG", "Prompt Engineering", "Multi-Agent Systems",
      "Vector Databases", "Semantic Search", "ETL", "Workflow Automation",
      "Distributed Systems", "Caching", "Observability", "Monitoring",
      "REST APIs", "Authentication", "CI/CD", "System Design",
      "Streaming", "FinTech"
    ],
    category: "ai-ml",
    featured: true,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/quantara", label: "GitHub" }
    ],
    imagePrompt: "Dark SaaS dashboard for AI financial intelligence platform with glassmorphism panels, live market data charts, SEC filing analysis interface, multi-pane layout with chat interface and portfolio analytics, 16:9, ultra-detailed, professional lighting, no text, no logos"
  },
  {
    title: "ModelMatrix — CoreStack Capstone",
    description: "Enterprise AI model benchmarking and recommendation platform integrating AWS Bedrock and Google Vertex AI with FastAPI services for prompt analysis, governance insights, and cross-cloud model evaluation.",
    techStack: [
      "React", "TypeScript", "FastAPI", "Python",
      "AWS Bedrock", "Google Vertex AI", "Docker",
      "REST API", "Prompt Engineering", "Cloud Infrastructure"
    ],
    skills: [
      "LLMs", "Prompt Engineering", "Model Evaluation", "Benchmarking",
      "Cloud Infrastructure", "REST APIs", "AI Agents",
      "Cross-Cloud", "Governance"
    ],
    category: "ai-ml",
    featured: true,
    links: [
      { type: "github", url: "https://github.com/Capstone-82", label: "GitHub" }
    ],
    imagePrompt: "Enterprise AI benchmarking dashboard with dark glassmorphism UI, comparing model performance charts across AWS and GCP, latency and accuracy metrics side by side, 16:9, ultra-detailed, professional lighting, no text, no logos"
  },
  {
    title: "Hangman AI Solver",
    description: "ML hackathon project combining Hidden Markov Models, probabilistic word filtering, and a PyTorch Deep Q-Network to achieve 94.40% word-level accuracy across 2,000 test games.",
    techStack: [
      "Python", "PyTorch", "NumPy", "Scikit-Learn",
      "HMM", "DQN", "Deep Reinforcement Learning"
    ],
    skills: [
      "Machine Learning", "Deep Learning", "Reinforcement Learning",
      "Hidden Markov Models", "DQN", "Model Evaluation",
      "Probabilistic Modeling"
    ],
    category: "ai-ml",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman", label: "GitHub" }
    ],
    imagePrompt: "Dark AI visualization dashboard showing Hangman game solving interface with probability heatmaps, neural network architecture diagram, word pattern analysis, 16:9, glassmorphism, ultra-detailed, no text, no logos"
  },
  {
    title: "CodeMentor AI",
    description: "AI-powered code review assistant that analyzes source code across multiple languages, identifies anti-patterns, explains issues, and generates practical improvement suggestions via Gemini API.",
    techStack: [
      "React", "Express", "Node.js", "Gemini API",
      "PrismJS", "JavaScript", "HTML/CSS", "REST API"
    ],
    skills: [
      "LLMs", "Prompt Engineering", "Code Analysis",
      "REST APIs", "Full Stack Development", "UI/UX"
    ],
    category: "ai-ml",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/CodeMentorAI-", label: "GitHub" }
    ],
    imagePrompt: "Dark code review dashboard with glassmorphism panels showing source code with AI annotations, side-by-side diff view, suggestion cards with highlighted improvements, 16:9, ultra-detailed, no text, no logos"
  },
  {
    title: "Coding Fingerprint",
    description: "ML system analyzing code style, tokens, indentation, and structural patterns from 25,000+ Codeforces samples to predict programmer competitive programming rank and country with TF-IDF and ensemble classification.",
    techStack: [
      "Python", "Scikit-Learn", "Flask", "Streamlit",
      "Pandas", "NumPy", "Matplotlib", "TF-IDF",
      "Classification", "Feature Engineering"
    ],
    skills: [
      "Machine Learning", "NLP", "Feature Engineering",
      "Text Classification", "TF-IDF", "Data Analysis",
      "Model Evaluation", "Data Visualization"
    ],
    category: "ai-ml",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Coding-Fingerprint", label: "GitHub" }
    ],
    imagePrompt: "Dark analytics dashboard showing code fingerprint analysis with style pattern visualizations, token distribution charts, programmer ranking predictions, 16:9, glassmorphism, ultra-detailed, no text, no logos"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning pipeline for identifying suspicious transactions with preprocessing, class imbalance handling, model evaluation across multiple algorithms, and interactive Streamlit interface for real-time predictions.",
    techStack: [
      "Python", "Streamlit", "Pandas", "Scikit-Learn",
      "NumPy", "Matplotlib", "Classification",
      "Anomaly Detection"
    ],
    skills: [
      "Machine Learning", "Anomaly Detection", "Classification",
      "Feature Engineering", "Data Processing", "Model Evaluation",
      "Data Visualization", "Imbalanced Learning"
    ],
    category: "ai-ml",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection", label: "GitHub" }
    ],
    imagePrompt: "Dark fraud detection dashboard with transaction flow visualization, anomaly scoring interface, risk heatmaps, real-time monitoring panels with glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  },
  {
    title: "CV Sensei",
    description: "NLP-powered resume evaluator using transformer models and PDF parsing to score resumes across multiple dimensions and surface role-specific improvement signals for job seekers.",
    techStack: [
      "Python", "Streamlit", "Transformers", "PyMuPDF",
      "NLP", "Hugging Face", "PDF Parsing"
    ],
    skills: [
      "NLP", "Transformers", "Document Processing",
      "Resume Parsing", "Machine Learning", "Text Analysis",
      "Feature Extraction"
    ],
    category: "ai-ml",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/-CV-Sensei", label: "GitHub" }
    ],
    imagePrompt: "Dark resume analysis dashboard with PDF preview pane, scoring breakdown by sections, improvement suggestion cards, skill gap visualization, 16:9, glassmorphism, ultra-detailed, no text, no logos"
  },

  // ─── 🌐 Full Stack ──────────────────────────────────────────
  {
    title: "SaansSync — AIIMS Delhi Collaboration",
    description: "Respiratory care platform for patient and clinician workflows with role-based access, symptom tracking, medication monitoring, appointment scheduling, multilingual support, and SpO2/AQI risk signal detection.",
    techStack: [
      "React", "Node.js", "Express", "JavaScript",
      "HTML/CSS", "REST API", "Authentication",
      "Role-Based Access Control", "Healthcare"
    ],
    skills: [
      "Healthcare AI", "RBAC", "REST APIs", "Authentication",
      "Full Stack Development", "Database Design",
      "Real-Time Monitoring", "Data Visualization",
      "Multilingual Systems"
    ],
    category: "fullstack",
    featured: true,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/webversionSS", label: "GitHub" },
      { type: "demo", url: "https://webversion10.vercel.app/login", label: "Live Demo" },
      { type: "certificate", url: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing", label: "Certificate" }
    ],
    imagePrompt: "Dark healthcare dashboard with patient monitoring panels, vital signs graphs, role-based interface showing clinician workflow, appointment calendar, risk alert system, 16:9, glassmorphism, ultra-detailed, no text, no logos"
  },
  {
    title: "SecureIT System",
    description: "Full-stack e-commerce platform for security products featuring user authentication, product catalog with search and filtering, shopping cart, Stripe payment integration, and admin management dashboard.",
    techStack: [
      "React", "Node.js", "Express", "MongoDB",
      "JavaScript", "HTML/CSS", "Stripe",
      "JWT", "REST API", "Authentication"
    ],
    skills: [
      "Full Stack Development", "E-Commerce", "Payment Integration",
      "Authentication", "REST APIs", "Database Design",
      "MERN Stack", "Admin Dashboards"
    ],
    category: "fullstack",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-", label: "GitHub" },
      { type: "demo", url: "https://ecommerce-website-mern-five.vercel.app/", label: "Live Demo" }
    ],
    imagePrompt: "Dark e-commerce dashboard for security products with product grid, shopping cart interface, payment processing UI, admin analytics panel, glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  },
  {
    title: "Team Banalo",
    description: "Hackathon team-formation platform with intelligent project matching, collaborative workflows, real-time messaging, and a modern full-stack architecture deployed on cloud infrastructure.",
    techStack: [
      "React", "TypeScript", "FastAPI", "Python",
      "Supabase", "PostgreSQL", "Docker",
      "REST API", "Authentication"
    ],
    skills: [
      "Full Stack Development", "Real-Time Systems",
      "Database Design", "Docker", "REST APIs",
      "Authentication", "TypeScript", "Cloud Deployment"
    ],
    category: "fullstack",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/TeamBanalo", label: "GitHub" },
      { type: "demo", url: "https://teambanalo-frontend.onrender.com/", label: "Live Demo" }
    ],
    imagePrompt: "Dark collaboration platform dashboard with team matching interface, project cards, messaging panels, user profiles, real-time activity feed, glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  },

  // ─── ⚙️ Software Engineering ──────────────────────────────
  {
    title: "Perishables Management System",
    description: "Semester 5 software engineering project for retail perishables using formal Scrum methodology with Jira tracking, Git branching strategy, CI/CD pipeline, API design, code reviews, and achieved full marks.",
    techStack: [
      "Python", "JavaScript", "HTML/CSS", "SQL",
      "REST API", "Git", "GitHub", "CI/CD",
      "Jira", "Scrum", "Agile"
    ],
    skills: [
      "Software Engineering", "Scrum/Agile", "CI/CD",
      "Git Workflow", "REST APIs", "Testing",
      "Clean Architecture", "Project Management",
      "Code Review"
    ],
    category: "software-eng",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Perishable-Management-System", label: "GitHub" }
    ],
    imagePrompt: "Dark inventory management dashboard for perishable goods with expiry tracking, stock alerts, supply chain visualization, analytics panels, glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  },
  {
    title: "CareerSphere — Campus Placement Portal",
    description: "DBMS mini project implementing a full placement lifecycle platform with role-based Admin, Student, and Recruiter flows, job applications, recruiter approval workflows, analytics dashboards, and ACID-compliant transactions.",
    techStack: [
      "Python", "Streamlit", "MySQL", "SQLite",
      "SQL", "Database Design", "REST API"
    ],
    skills: [
      "Database Design", "SQL", "RBAC",
      "Data Analytics", "Software Engineering",
      "System Design", "ACID Transactions",
      "Stored Procedures", "Triggers"
    ],
    category: "software-eng",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347", label: "GitHub" }
    ],
    imagePrompt: "Dark campus placement portal with role-based dashboards for admin, student, and recruiter views, application tracking pipeline, analytics charts, glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  },

  // ─── 🌍 Networking & Systems ─────────────────────────────
  {
    title: "Classroom Networking Simulation",
    description: "Enterprise-grade Cisco Packet Tracer simulation of a secure classroom network with DHCP auto-addressing, VLAN segmentation, VPN remote access, ASA firewall policies, inter-VLAN routing, and multi-service server infrastructure.",
    techStack: [
      "Cisco Packet Tracer", "DHCP", "VLAN", "VPN",
      "ASA Firewall", "Routing", "Switching",
      "TCP/IP", "Network Security", "DNS", "HTTP"
    ],
    skills: [
      "Networking", "VLAN", "DHCP", "VPN",
      "Firewall", "Routing & Switching", "Network Security",
      "TCP/IP Stack", "Infrastructure Design"
    ],
    category: "networking",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING", label: "GitHub" }
    ],
    imagePrompt: "Dark network topology visualization showing VLAN segmentation, firewall policies, routing tables, connected devices including servers, printers, and workstations, 16:9, glassmorphism, ultra-detailed, no text, no logos"
  },
  {
    title: "Custom Ping Utility",
    description: "Raw-socket networking utility implementing ICMP echo requests with custom packet construction, response analysis, RTT statistics, packet loss visualization, and multi-hop traceroute capability.",
    techStack: [
      "Python", "Raw Sockets", "ICMP", "TCP/IP",
      "Matplotlib", "NumPy", "Systems Programming"
    ],
    skills: [
      "Networking", "ICMP Protocol", "Socket Programming",
      "Systems Programming", "Data Visualization",
      "Network Diagnostics", "Protocol Analysis"
    ],
    category: "networking",
    featured: false,
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-", label: "GitHub" }
    ],
    imagePrompt: "Dark network diagnostics dashboard with real-time ping statistics, RTT charts, packet loss visualization, raw packet inspector, glassmorphism design, 16:9, ultra-detailed, no text, no logos"
  }
];

const categories = [
  { id: "ai-ml", label: "Artificial Intelligence & Machine Learning", icon: Cpu, description: "Applied AI, LLMs, Machine Learning, Deep Learning, NLP, AI Systems, Data Science" },
  { id: "fullstack", label: "Full Stack Applications", icon: Globe, description: "Production-grade web applications with scalable frontend and backend architectures" },
  { id: "software-eng", label: "Software Engineering", icon: Code2, description: "Scrum, CI/CD, Git workflows, testing, and clean architecture" },
  { id: "networking", label: "Networking & Systems", icon: Network, description: "Networking, protocols, distributed communication, and infrastructure" },
] as const;

const categoryIcons: Record<string, React.ElementType> = {
  "ai-ml": Cpu,
  "fullstack": Globe,
  "software-eng": Code2,
  "networking": Network,
};

const buttonConfig: Record<string, { icon: React.ElementType; className: string }> = {
  github: { icon: Github, className: "border-slate-200 text-slate-700 hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-200 dark:hover:text-white" },
  demo: { icon: ExternalLink, className: "bg-teal-700 text-white hover:bg-teal-600" },
  certificate: { icon: Award, className: "border-teal-500/20 bg-teal-500/10 text-teal-800 hover:border-teal-500/50 dark:text-teal-100" },
  architecture: { icon: Building2, className: "border-purple-500/20 bg-purple-500/10 text-purple-800 hover:border-purple-500/50 dark:text-purple-100" },
  "case-study": { icon: FileText, className: "border-blue-500/20 bg-blue-500/10 text-blue-800 hover:border-blue-500/50 dark:text-blue-100" },
  docs: { icon: Bookmark, className: "border-amber-500/20 bg-amber-500/10 text-amber-800 hover:border-amber-500/50 dark:text-amber-100" },
  video: { icon: BarChart3, className: "border-rose-500/20 bg-rose-500/10 text-rose-800 hover:border-rose-500/50 dark:text-rose-100" },
};

const ImagePlaceholder = ({ prompt, title }: { prompt: string; title: string }) => (
  <div className="group relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.08),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.06),transparent_50%)]" />
    <div className="relative flex h-full items-center justify-center p-6">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <BarChart3 className="h-6 w-6 text-teal-400/60" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-500">AI Hero Image</p>
        <p className="mt-1 max-w-xs text-[10px] leading-relaxed text-slate-600">{prompt.slice(0, 80)}...</p>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent" />
  </div>
);

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-indigo-600 ring-1 ring-indigo-500/20 dark:text-indigo-300 dark:ring-indigo-500/30">
    <ChevronRight className="h-2.5 w-2.5" />
    {skill}
  </span>
);

const TechBadge = ({ tech }: { tech: string }) => (
  <span className="inline-flex items-center rounded-md border border-teal-500/20 bg-teal-500/[0.08] px-2 py-0.5 text-[10px] font-medium text-teal-700 transition-colors hover:border-teal-500/40 hover:bg-teal-500/15 dark:text-teal-300">
    {tech}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const CategoryIcon = categoryIcons[project.category];

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/[0.06] dark:bg-slate-900/60 dark:hover:border-teal-500/20 ${
        project.featured
          ? "md:col-span-2 xl:col-span-2"
          : ""
      }`}
    >
      {project.featured && (
        <div className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-1 ring-teal-500/10" />
      )}
      {project.featured && (
        <div className="pointer-events-none absolute -inset-px z-10 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/5 via-transparent to-indigo-500/5" />
        </div>
      )}

      <ImagePlaceholder prompt={project.imagePrompt} title={project.title} />

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-main text-base font-semibold leading-snug sm:text-lg">{project.title}</h3>
          {project.featured && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-400">
              <Bookmark className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        <p className="text-copy-muted mt-2 text-xs leading-relaxed sm:text-sm">{project.description}</p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <Database className="-mt-0.5 mr-1 inline h-3 w-3" />
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <Workflow className="-mt-0.5 mr-1 inline h-3 w-3" />
              Engineering Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.links.map((link) => {
            const btn = buttonConfig[link.type];
            const Icon = btn?.icon || ArrowUpRight;
            return (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-9 items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-medium transition-all hover:scale-105 active:scale-100 ${
                  btn?.className || "border-slate-200 text-slate-700 hover:border-teal-500/50 dark:border-white/10 dark:text-slate-200"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2 id="projects-heading">Engineering Portfolio</h2>
          <p>
            Production projects across AI/ML, full-stack, software engineering, and infrastructure —
            built with measurable impact and real-world deployment.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          <button
            onClick={() => setActiveCategory(null)}
            role="tab"
            aria-selected={activeCategory === null}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-teal-600 text-white shadow-md"
                : "border border-slate-200 bg-white text-slate-600 hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-teal-300"
            }`}
          >
            <Layers className="h-4 w-4" />
            All
          </button>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = projects.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-teal-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
                <span className="ml-0.5 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {categories.map((category) => {
          const catProjects = filteredProjects.filter((p) => p.category === category.id);
          if (catProjects.length === 0) return null;

          const Icon = category.icon;

          return (
            <div key={category.id} className="mb-12 last:mb-0">
              <div className="mb-4 border-b border-slate-200 pb-3 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 ring-1 ring-teal-500/20">
                    <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-main text-lg font-semibold">{category.label}</h3>
                    <p className="text-copy-muted text-xs">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {catProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <FolderGit2 className="h-12 w-12 text-slate-300 dark:text-slate-600" />
            <p className="mt-4 text-sm text-slate-500">No projects in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
