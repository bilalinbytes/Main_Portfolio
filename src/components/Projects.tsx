import { useState, useMemo } from "react";
import {
  ExternalLink, Github, X, ChevronRight,
  Database, Layers, Zap, Eye, ArrowUpRight,
  RefreshCw, FileText, Code, Cpu,
  Globe, Server, BookOpen
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────

type ProjectLink = {
  type: "github" | "demo" | "certificate" | "case-study";
  url: string;
};

type ProjectMetric = {
  label: string;
};

type ProjectIllustration = {
  gradient: string;
  pattern: "charts" | "network" | "health" | "finance" | "code" | "shield" | "topology" | "game" | "search" | "stats";
};

type ProjectCategory = "ai-ml" | "fullstack" | "infra" | "academic";

type Project = {
  title: string;
  tagline: string;
  badges: string[];
  metrics?: ProjectMetric[];
  category: "featured" | "professional" | "ml" | "academic";
  displayCategory: ProjectCategory;
  illustration: ProjectIllustration;
  links: ProjectLink[];
  techStack: string[];
  skills: string[];
  description: string;
};

// ─── Badge Priority (most recognizable → least) ──────────────

const BADGE_PRIORITY = [
  "Python", "React", "TypeScript", "FastAPI", "AWS", "Docker",
  "Node.js", "PyTorch", "Next.js", "PostgreSQL", "MongoDB",
  "Scikit-Learn", "Streamlit", "Redis", "Express", "TensorFlow",
  "Kubernetes", "GraphQL", "AWS Bedrock", "Vertex AI", "Groq",
  "Flask", "Supabase", "MySQL", "SQLite", "JWT", "OAuth",
  "GitHub Actions", "CI/CD", "Jira", "REST API", "Stripe",
  "Transformers", "NLP", "HMM", "DQN", "MQTT", "Cisco",
  "VLAN", "VPN", "Firewall", "TCP/IP", "ICMP",
];

const badgePriority = (b: string) => {
  const idx = BADGE_PRIORITY.indexOf(b);
  return idx === -1 ? 999 : idx;
};

// ─── Projects Data ────────────────────────────────────────────

const projects: Project[] = [
  {
    title: "Quantara",
    tagline: "AI financial intelligence with live market data, SEC filing RAG, and multi-agent research.",
    badges: ["Next.js", "FastAPI", "Groq", "Redis", "PostgreSQL", "Docker"],
    metrics: [{ label: "17 Live APIs" }, { label: "8 AI Agents" }, { label: "Multi-Agent RAG" }, { label: "Production Ready" }],
    category: "featured",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-teal-950 to-slate-900", pattern: "finance" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/quantara" }],
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "Qdrant", "Celery", "Groq", "Docker", "Prometheus", "GitHub Actions", "JWT", "OAuth", "SSE"],
    skills: ["LLMs", "RAG", "Multi-Agent Systems", "Vector Databases", "Distributed Systems", "Caching", "Observability", "System Design", "FinTech"],
    description: "Institutional AI investment platform with 17 parallel data sources, SEC EDGAR integration, and real-time streaming research."
  },
  {
    title: "ModelMatrix",
    tagline: "Cross-cloud AI benchmarking across AWS Bedrock and Vertex AI with automated governance.",
    badges: ["FastAPI", "AWS Bedrock", "Vertex AI", "React", "Docker"],
    metrics: [{ label: "Cross-Cloud AI" }, { label: "Model Benchmarking" }, { label: "Governance" }],
    category: "featured",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-indigo-950 to-slate-900", pattern: "network" },
    links: [{ type: "github", url: "https://github.com/Capstone-82" }],
    techStack: ["React", "TypeScript", "FastAPI", "Python", "AWS Bedrock", "Google Vertex AI", "Docker", "Cloud Infrastructure"],
    skills: ["LLMs", "Model Evaluation", "Benchmarking", "Cloud Infrastructure", "AI Agents", "Cross-Cloud", "Governance"],
    description: "CoreStack industry capstone for cross-cloud AI model benchmarking and recommendation."
  },
  {
    title: "SaansSync",
    tagline: "Respiratory care platform with AIIMS Delhi for patient monitoring and clinical workflows.",
    badges: ["React", "Node.js", "FastAPI", "Python", "Healthcare"],
    metrics: [{ label: "AIIMS Delhi" }, { label: "Real-time Analytics" }, { label: "Healthcare AI" }],
    category: "featured",
    displayCategory: "fullstack",
    illustration: { gradient: "from-slate-900 via-emerald-950 to-slate-900", pattern: "health" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/webversionSS" },
      { type: "demo", url: "https://webversion10.vercel.app/login" },
      { type: "certificate", url: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing" },
    ],
    techStack: ["React", "Node.js", "Express", "JavaScript", "REST API", "RBAC", "Healthcare"],
    skills: ["Healthcare AI", "RBAC", "REST APIs", "Full Stack Development", "Real-Time Monitoring", "Data Visualization", "Clinical Collaboration"],
    description: "Respiratory care platform with SpO2/AQI risk detection, symptom tracking, and multilingual clinician workflows."
  },
  {
    title: "Distributed API Gateway",
    tagline: "API gateway with rate limiting, JWT auth, and Prometheus metrics for microservices.",
    badges: ["FastAPI", "Python", "Redis", "Docker", "JWT"],
    category: "professional",
    displayCategory: "infra",
    illustration: { gradient: "from-slate-900 via-blue-950 to-slate-900", pattern: "topology" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes" }],
    techStack: ["FastAPI", "Python", "Redis", "Docker", "Prometheus", "JWT", "OAuth", "REST API", "WebSockets"],
    skills: ["System Design", "API Gateway", "Rate Limiting", "Authentication", "Microservices", "Observability", "Distributed Systems"],
    description: "Scalable API gateway with middleware pipeline, caching, and real-time metrics."
  },
  {
    title: "Perishables Management",
    tagline: "Retail inventory system with expiry tracking and Scrum-based SDLC.",
    badges: ["Python", "CI/CD", "Jira", "Scrum", "REST API"],
    category: "professional",
    displayCategory: "fullstack",
    illustration: { gradient: "from-slate-900 via-amber-950 to-slate-900", pattern: "stats" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/Perishable-Management-System" }],
    techStack: ["Python", "JavaScript", "HTML/CSS", "SQL", "REST API", "Git", "CI/CD", "Jira", "Scrum"],
    skills: ["Software Engineering", "Scrum/Agile", "CI/CD", "Git Workflow", "REST APIs", "Testing", "Clean Architecture"],
    description: "Full-marks SE project with formal Jira tracking, Git branching, CI/CD pipeline, and API design."
  },
  {
    title: "Coding Fingerprint",
    tagline: "ML code authorship attribution from 25K+ Codeforces submissions using TF-IDF.",
    badges: ["Python", "Scikit-Learn", "Flask", "Streamlit"],
    category: "professional",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-purple-950 to-slate-900", pattern: "code" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/Coding-Fingerprint" }],
    techStack: ["Python", "Scikit-Learn", "Flask", "Streamlit", "Pandas", "NumPy", "Matplotlib", "TF-IDF"],
    skills: ["Machine Learning", "NLP", "Feature Engineering", "Text Classification", "Data Analysis", "Model Evaluation"],
    description: "Code authorship attribution using TF-IDF features and ensemble classification from competitive programming data."
  },
  {
    title: "Hangman AI Solver",
    tagline: "94.4% accuracy Hangman solver using HMM + Deep Q-Network reinforcement learning.",
    badges: ["PyTorch", "Python", "HMM", "DQN"],
    category: "ml",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-rose-950 to-slate-900", pattern: "game" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman" }],
    techStack: ["Python", "PyTorch", "NumPy", "Scikit-Learn", "HMM", "DQN", "Deep RL"],
    skills: ["Deep Learning", "Reinforcement Learning", "HMMs", "DQN", "Model Evaluation", "Probabilistic Modeling"],
    description: "ML hackathon project achieving 94.40% accuracy across 2,000 test games."
  },
  {
    title: "Credit Card Fraud",
    tagline: "Real-time fraud detection with multi-algorithm evaluation and Streamlit UI.",
    badges: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
    category: "ml",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-red-950 to-slate-900", pattern: "shield" },
    links: [{ type: "github", url: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection" }],
    techStack: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib", "Anomaly Detection"],
    skills: ["Machine Learning", "Anomaly Detection", "Classification", "Feature Engineering", "Model Evaluation", "Data Visualization"],
    description: "ML pipeline for identifying suspicious transactions with real-time predictions."
  },
  {
    title: "CodeMentor AI",
    tagline: "AI code review assistant powered by Gemini API for multi-language analysis.",
    badges: ["React", "Node.js", "Express", "Gemini API"],
    category: "ml",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-cyan-950 to-slate-900", pattern: "code" },
    links: [{ type: "github", url: "https://github.com/Mohammedbilal12345/CodeMentorAI-" }],
    techStack: ["React", "Express", "Node.js", "Gemini API", "PrismJS", "JavaScript", "REST API"],
    skills: ["LLMs", "Prompt Engineering", "Code Analysis", "REST APIs", "Full Stack Development"],
    description: "AI-powered code review with multi-language anti-pattern detection and fix suggestions."
  },
  {
    title: "CareerSphere",
    tagline: "Campus placement portal with RBAC flows and ACID-compliant transactions.",
    badges: ["Python", "Streamlit", "MySQL", "SQLite"],
    category: "academic",
    displayCategory: "fullstack",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "stats" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347" }],
    techStack: ["Python", "Streamlit", "MySQL", "SQLite", "SQL", "Database Design"],
    skills: ["Database Design", "SQL", "RBAC", "Data Analytics", "Software Engineering", "ACID Transactions"],
    description: "Full placement lifecycle with triggers, procedures, and role-based access control."
  },
  {
    title: "Classroom Networking",
    tagline: "Enterprise network simulation with VLANs, VPN, and ASA firewall.",
    badges: ["Cisco", "VLAN", "VPN", "Firewall"],
    category: "academic",
    displayCategory: "infra",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "topology" },
    links: [{ type: "github", url: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING" }],
    techStack: ["Cisco Packet Tracer", "DHCP", "VLAN", "VPN", "ASA Firewall", "Routing", "Switching", "TCP/IP"],
    skills: ["Networking", "VLAN", "DHCP", "VPN", "Firewall", "Routing & Switching", "Network Security"],
    description: "Cisco Packet Tracer simulation with DHCP, VLANs, VPN, firewall, and multi-service servers."
  },
  {
    title: "SecureSite",
    tagline: "E-commerce platform with Stripe payments and admin dashboard.",
    badges: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "academic",
    displayCategory: "fullstack",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "shield" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-" },
      { type: "demo", url: "https://ecommerce-website-mern-five.vercel.app/" },
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "REST API"],
    skills: ["Full Stack Development", "E-Commerce", "Payment Integration", "Authentication", "MERN Stack"],
    description: "Security products e-commerce with catalog, cart, Stripe payments, and admin dashboard."
  },
  {
    title: "CV Sensei",
    tagline: "NLP resume scoring with transformer models and PDF parsing.",
    badges: ["Python", "Streamlit", "Transformers", "NLP"],
    category: "academic",
    displayCategory: "ai-ml",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "search" },
    links: [{ type: "github", url: "https://github.com/Mohammedbilal12345/-CV-Sensei" }],
    techStack: ["Python", "Streamlit", "Transformers", "PyMuPDF", "NLP", "Hugging Face"],
    skills: ["NLP", "Transformers", "Document Processing", "Machine Learning", "Text Analysis"],
    description: "Resume scoring and skill gap analysis using transformer-based NLP."
  },
  {
    title: "Team Banalo",
    tagline: "Hackathon team-formation platform with Supabase and FastAPI.",
    badges: ["React", "TypeScript", "FastAPI", "Supabase"],
    category: "academic",
    displayCategory: "fullstack",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "network" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/TeamBanalo" },
      { type: "demo", url: "https://teambanalo-frontend.onrender.com/" },
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Python", "Supabase", "PostgreSQL", "Docker"],
    skills: ["Full Stack Development", "Database Design", "Docker", "REST APIs", "Authentication", "TypeScript"],
    description: "Team collaboration platform with intelligent project matching and cloud deployment."
  },
  {
    title: "Custom Ping Utility",
    tagline: "Raw-socket ICMP tool with RTT stats and packet loss visualization.",
    badges: ["Python", "ICMP", "TCP/IP", "Raw Sockets"],
    category: "academic",
    displayCategory: "infra",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "topology" },
    links: [{ type: "github", url: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-" }],
    techStack: ["Python", "Raw Sockets", "ICMP", "TCP/IP", "Matplotlib", "NumPy"],
    skills: ["Networking", "ICMP Protocol", "Socket Programming", "Systems Programming", "Data Visualization"],
    description: "Network diagnostics tool with custom packet construction and real-time analysis."
  },
];

// ─── Filter Config ────────────────────────────────────────────

type FilterOption = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const CATEGORY_FILTERS: FilterOption[] = [
  { id: "ai-ml", label: "AI/ML", icon: Cpu },
  { id: "fullstack", label: "Full-Stack", icon: Globe },
  { id: "infra", label: "Infra", icon: Server },
  { id: "academic", label: "Academic", icon: BookOpen },
];

const TECH_FILTERS = [
  "Python", "React", "TypeScript", "FastAPI", "Node.js",
  "AWS", "Docker", "PyTorch", "Next.js", "PostgreSQL",
  "MongoDB", "Redis", "Streamlit", "Flask",
];

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "ai-ml": "AI/ML",
  "fullstack": "Full-Stack",
  "infra": "Infra",
  "academic": "Academic",
};

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  "ai-ml": "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300",
  "fullstack": "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "infra": "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  "academic": "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400",
};

// ─── Illustration ─────────────────────────────────────────────

const IllustrationCanvas = ({ illustration }: { illustration: ProjectIllustration }) => {
  const patterns: Record<string, React.ReactNode> = {
    charts: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <rect x="40" y="100" width="40" height="80" rx="4" className="fill-white" />
        <rect x="90" y="70" width="40" height="110" rx="4" className="fill-white" />
        <rect x="140" y="50" width="40" height="130" rx="4" className="fill-white" />
        <rect x="190" y="80" width="40" height="100" rx="4" className="fill-white" />
        <rect x="240" y="30" width="40" height="150" rx="4" className="fill-white" />
        <rect x="290" y="90" width="40" height="90" rx="4" className="fill-white" />
        <path d="M40 180 L320 180" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    network: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <circle cx="200" cy="50" r="20" stroke="white" strokeWidth="0.5" />
        <circle cx="100" cy="120" r="16" stroke="white" strokeWidth="0.5" />
        <circle cx="300" cy="120" r="16" stroke="white" strokeWidth="0.5" />
        <circle cx="160" cy="175" r="14" stroke="white" strokeWidth="0.5" />
        <circle cx="240" cy="175" r="14" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="70" x2="100" y2="104" stroke="white" strokeWidth="0.3" />
        <line x1="200" y1="70" x2="300" y2="104" stroke="white" strokeWidth="0.3" />
        <line x1="100" y1="136" x2="160" y2="161" stroke="white" strokeWidth="0.3" />
        <line x1="300" y1="136" x2="240" y2="161" stroke="white" strokeWidth="0.3" />
        <line x1="160" y1="189" x2="240" y2="189" stroke="white" strokeWidth="0.3" />
        <circle cx="200" cy="50" r="6" className="fill-white/40" />
        <circle cx="100" cy="120" r="5" className="fill-white/30" />
        <circle cx="300" cy="120" r="5" className="fill-white/30" />
      </svg>
    ),
    health: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <path d="M0 112 Q50 40 100 112 Q150 180 200 112 Q250 40 300 112 Q350 180 400 112" stroke="white" strokeWidth="1" fill="none" />
        <path d="M0 140 Q50 100 100 140 Q150 180 200 140 Q250 100 300 140 Q350 180 400 140" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="170" y="80" width="12" height="60" rx="2" className="fill-white/20" />
        <rect x="190" y="60" width="12" height="80" rx="2" className="fill-white/20" />
        <rect x="210" y="90" width="12" height="50" rx="2" className="fill-white/20" />
      </svg>
    ),
    finance: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <path d="M0 170 Q50 130 100 150 Q150 100 200 120 Q250 60 300 90 Q350 40 400 70" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M0 190 Q50 170 100 180 Q150 150 200 160 Q250 120 300 140 Q350 100 400 110" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="280" y="40" width="8" height="40" rx="2" className="fill-white/20" />
        <rect x="296" y="55" width="8" height="25" rx="2" className="fill-white/20" />
        <rect x="312" y="30" width="8" height="50" rx="2" className="fill-white/20" />
        <rect x="40" y="100" width="40" height="6" rx="2" className="fill-white/10" />
        <rect x="40" y="112" width="28" height="6" rx="2" className="fill-white/10" />
        <rect x="40" y="124" width="34" height="6" rx="2" className="fill-white/10" />
      </svg>
    ),
    code: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <rect x="40" y="40" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <rect x="40" y="64" width="280" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="80" width="200" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="104" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <rect x="40" y="128" width="240" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="144" width="160" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="168" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <circle cx="56" cy="48" r="3" className="fill-white/20" />
        <circle cx="56" cy="112" r="3" className="fill-white/20" />
        <circle cx="56" cy="176" r="3" className="fill-white/20" />
      </svg>
    ),
    shield: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <path d="M200 30 L300 60 L300 120 Q300 170 200 195 Q100 170 100 120 L100 60 Z" stroke="white" strokeWidth="1" fill="none" />
        <path d="M200 50 L260 70 L260 110 Q260 150 200 170 Q140 150 140 110 L140 70 Z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="200" y1="60" x2="200" y2="165" stroke="white" strokeWidth="0.3" opacity="0.2" />
        <line x1="145" y1="90" x2="255" y2="90" stroke="white" strokeWidth="0.3" opacity="0.2" />
        <circle cx="200" cy="110" r="8" className="fill-white/30" />
      </svg>
    ),
    topology: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <rect x="150" y="30" width="100" height="40" rx="6" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="50" y="130" width="80" height="36" rx="6" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="270" y="130" width="80" height="36" rx="6" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="100" y="180" width="60" height="24" rx="4" stroke="white" strokeWidth="0.2" fill="none" opacity="0.3" />
        <rect x="240" y="180" width="60" height="24" rx="4" stroke="white" strokeWidth="0.2" fill="none" opacity="0.3" />
        <line x1="200" y1="70" x2="130" y2="130" stroke="white" strokeWidth="0.3" />
        <line x1="200" y1="70" x2="270" y2="130" stroke="white" strokeWidth="0.3" />
        <line x1="130" y1="166" x2="130" y2="180" stroke="white" strokeWidth="0.2" opacity="0.3" />
        <line x1="270" y1="166" x2="270" y2="180" stroke="white" strokeWidth="0.2" opacity="0.3" />
        <rect x="150" y="40" width="100" height="5" rx="2" className="fill-white/30" />
      </svg>
    ),
    game: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <rect x="100" y="60" width="200" height="120" rx="12" stroke="white" strokeWidth="0.5" fill="none" />
        <line x1="140" y1="120" x2="200" y2="120" stroke="white" strokeWidth="1" />
        <line x1="170" y1="90" x2="170" y2="150" stroke="white" strokeWidth="1" />
        <circle cx="270" cy="100" r="10" stroke="white" strokeWidth="0.3" fill="none" />
        <circle cx="270" cy="140" r="10" stroke="white" strokeWidth="0.3" fill="none" />
        <text x="200" y="205" textAnchor="middle" className="fill-white/10 text-[10px] font-mono">_ _ _ _ _ _</text>
      </svg>
    ),
    search: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <circle cx="180" cy="100" r="40" stroke="white" strokeWidth="0.5" fill="none" />
        <line x1="210" y1="130" x2="240" y2="150" stroke="white" strokeWidth="0.5" />
        <rect x="60" y="170" width="80" height="6" rx="2" className="fill-white/10" />
        <rect x="60" y="182" width="60" height="6" rx="2" className="fill-white/10" />
        <rect x="60" y="194" width="100" height="6" rx="2" className="fill-white/10" />
        <rect x="260" y="170" width="80" height="6" rx="2" className="fill-white/10" />
        <rect x="260" y="182" width="60" height="6" rx="2" className="fill-white/10" />
        <circle cx="180" cy="100" r="12" className="fill-white/20" />
      </svg>
    ),
    stats: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 400 225" fill="none">
        <rect x="30" y="120" width="30" height="60" rx="3" className="fill-white/10" />
        <rect x="70" y="90" width="30" height="90" rx="3" className="fill-white/10" />
        <rect x="110" y="60" width="30" height="120" rx="3" className="fill-white/10" />
        <rect x="150" y="80" width="30" height="100" rx="3" className="fill-white/10" />
        <rect x="190" y="40" width="30" height="140" rx="3" className="fill-white/10" />
        <line x1="30" y1="200" x2="350" y2="200" stroke="white" strokeWidth="0.2" opacity="0.2" />
        <rect x="110" y="60" width="30" height="15" rx="2" className="fill-white/30" />
        <rect x="190" y="40" width="30" height="15" rx="2" className="fill-white/30" />
      </svg>
    ),
  };

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${illustration.gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />
      {patterns[illustration.pattern]}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/50 to-transparent" />
    </div>
  );
};

// ─── Small Reusable Components ────────────────────────────────

const TechBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-md border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10">
    {label}
  </span>
);

const linkBtnStyles: Record<string, string> = {
  github: "border-white/20 text-white/80 hover:border-white/40 hover:text-white",
  demo: "bg-teal-600 text-white hover:bg-teal-500 border-transparent",
  certificate: "border-white/20 text-white/70 hover:border-white/40 hover:text-white",
  "case-study": "border-indigo-500/40 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200",
};

const Actions = ({ links }: { links: ProjectLink[] }) => (
  <div className="flex flex-wrap gap-2">
    {links.map((link) => {
      const icons: Record<string, React.ReactNode> = {
        github: <Github className="h-3.5 w-3.5" />,
        demo: <ExternalLink className="h-3.5 w-3.5" />,
        certificate: <Eye className="h-3.5 w-3.5" />,
        "case-study": <FileText className="h-3.5 w-3.5" />,
      };
      const labels: Record<string, string> = { github: "GitHub", demo: "Live Demo", certificate: "Certificate", "case-study": "Case Study" };
      return (
        <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-medium transition-all hover:scale-105 active:scale-100 ${linkBtnStyles[link.type] || "border-white/20 text-white/80"}`}
        >
          {icons[link.type] || <ArrowUpRight className="h-3.5 w-3.5" />}
          {labels[link.type] || link.type}
        </a>
      );
    })}
  </div>
);

const Metrics = ({ metrics }: { metrics: ProjectMetric[] }) => (
  <div className="flex flex-wrap gap-2">
    {metrics.map((m) => (
      <span key={m.label} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm">
        <Zap className="h-3 w-3 text-teal-300" />
        {m.label}
      </span>
    ))}
  </div>
);

const CatBadge = ({ category }: { category: ProjectCategory }) => (
  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${CATEGORY_COLORS[category]}`}>
    {CATEGORY_LABELS[category]}
  </span>
);

// ─── Tech Stack Modal ─────────────────────────────────────────

const TechStackModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl">
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-lg p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white">
        <X className="h-5 w-5" />
      </button>
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-1 text-sm text-white/50">Full Tech Stack & Engineering Skills</p>

      <div className="mt-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-400">Technology Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((t) => (
            <span key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70">{t}</span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">Engineering Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {project.skills.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/20">
              <ChevronRight className="h-3 w-3" />
              {s}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-5 text-[11px] text-white/30">{project.description}</p>
    </div>
  </div>
);

// ─── Card: Hero (featured) ────────────────────────────────────

const HeroCard = ({ project }: { project: Project }) => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? project.badges : project.badges.slice(0, 4);
  const hidden = project.badges.length - visible.length;

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/80 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/8 via-transparent to-indigo-500/8" />
        </div>
        <div className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-teal-500/30" />
        </div>

        <IllustrationCanvas illustration={project.illustration} />

        <div className="relative z-20 flex flex-1 flex-col bg-gradient-to-b from-slate-900 to-slate-900/95 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">{project.tagline}</p>
            </div>
            <CatBadge category={project.displayCategory} />
          </div>

          {project.metrics && <div className="mt-4"><Metrics metrics={project.metrics} /></div>}

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {visible.map((b) => <TechBadge key={b} label={b} />)}
            {hidden > 0 && !expanded && (
              <button onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-1 rounded-md border border-dashed border-white/15 px-2 py-0.5 text-[10px] font-medium text-white/40 transition-colors hover:border-white/30 hover:text-white/70">
                <Layers className="h-3 w-3" />+{hidden}
              </button>
            )}
            {expanded && (
              <button onClick={() => setExpanded(false)}
                className="inline-flex items-center gap-1 rounded-md border border-dashed border-white/15 px-2 py-0.5 text-[10px] font-medium text-white/40 transition-colors hover:border-white/30 hover:text-white/70">
                <RefreshCw className="h-3 w-3" />less
              </button>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <Actions links={project.links} />
            <button onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1 text-[10px] font-medium text-white/30 transition-colors hover:text-white/60">
              <Database className="h-3 w-3" />Stack
            </button>
          </div>
        </div>
      </article>
      {showModal && <TechStackModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};

// ─── Card: Standard ──────────────────────────────────────────

const StandardCard = ({ project }: { project: Project }) => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? project.badges : project.badges.slice(0, 3);
  const hidden = project.badges.length - visible.length;

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.06] dark:bg-slate-900/60 dark:hover:border-white/10">
        <div className="relative overflow-hidden">
          <IllustrationCanvas illustration={project.illustration} />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.title}</h3>
            <CatBadge category={project.displayCategory} />
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{project.tagline}</p>

          <div className="mt-3 flex flex-wrap items-center gap-1">
            {visible.map((b) => (
              <span key={b} className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] font-medium text-slate-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400">{b}</span>
            ))}
            {hidden > 0 && !expanded && (
              <button onClick={() => setExpanded(true)}
                className="rounded-md border border-dashed border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 transition-colors hover:border-slate-300 dark:border-white/[0.06] dark:text-slate-500">+{hidden}</button>
            )}
            {expanded && (
              <button onClick={() => setExpanded(false)}
                className="rounded-md border border-dashed border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 transition-colors hover:border-slate-300 dark:border-white/[0.06] dark:text-slate-500">less</button>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between gap-2 pt-3">
            <div className="flex flex-wrap gap-1.5">
              {project.links.map((link) => (
                <a key={link.type} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600 transition hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:text-slate-400 dark:hover:text-teal-300">
                  {link.type === "github" ? <Github className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                  {link.type === "github" ? "GitHub" : "Live"}
                </a>
              ))}
            </div>
            <button onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1 text-[9px] font-medium text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
              <Database className="h-3 w-3" />Stack
            </button>
          </div>
        </div>
      </article>
      {showModal && <TechStackModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};

// ─── Filter Bar ───────────────────────────────────────────────

const FilterPill = ({
  active, onClick, icon: Icon, label, count,
}: {
  active: boolean; onClick: () => void; icon: React.ElementType; label: string; count?: number;
}) => (
  <button onClick={onClick}
    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
      active
        ? "bg-teal-600 text-white shadow-sm"
        : "border border-slate-200 bg-white text-slate-600 hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-teal-300"
    }`}
  >
    <Icon className="h-3.5 w-3.5" />
    {label}
    {count !== undefined && (
      <span className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
        active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
      }`}>{count}</span>
    )}
  </button>
);

// ─── Main Projects Component ──────────────────────────────────

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState<ProjectCategory[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleCategory = (cat: ProjectCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedTechs([]);
  };

  const hasFilters = selectedCategories.length > 0 || selectedTechs.length > 0;

  const featured = useMemo(() => projects.filter((p) => p.category === "featured"), []);

  const filteredOthers = useMemo(() => {
    let list = projects.filter((p) => p.category !== "featured");
    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.displayCategory));
    }
    if (selectedTechs.length > 0) {
      list = list.filter((p) => p.techStack.some((t) => selectedTechs.includes(t)));
    }
    return list;
  }, [selectedCategories, selectedTechs]);

  const projectCount = (cat: ProjectCategory) =>
    projects.filter((p) => p.category !== "featured" && p.displayCategory === cat).length;

  const techCount = (tech: string) =>
    projects.filter((p) => p.category !== "featured" && p.techStack.includes(tech)).length;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2 id="projects-heading">Engineering Portfolio</h2>
          <p>Production software across AI, full-stack, infrastructure, and systems.</p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Category</span>
            {CATEGORY_FILTERS.map((f) => (
              <FilterPill key={f.id} active={selectedCategories.includes(f.id as ProjectCategory)}
                onClick={() => toggleCategory(f.id as ProjectCategory)} icon={f.icon} label={f.label}
                count={hasFilters ? undefined : projectCount(f.id as ProjectCategory)} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Tech</span>
            {TECH_FILTERS.map((tech) => (
              <FilterPill key={tech} active={selectedTechs.includes(tech)}
                onClick={() => toggleTech(tech)} icon={Code} label={tech}
                count={hasFilters ? undefined : techCount(tech)} />
            ))}
            {hasFilters && (
              <button onClick={resetFilters}
                className="inline-flex items-center gap-1 rounded-full border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900/30 dark:text-red-400 dark:hover:bg-red-950/30">
                <RefreshCw className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Featured — always visible */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Featured</span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.title} className={i === 0 ? "xl:col-span-2" : ""}>
                <HeroCard project={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Filtered projects */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {hasFilters ? "Filtered" : "All Projects"}
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-white/5" />
          <span className="text-[11px] text-slate-400">{filteredOthers.length} project{filteredOthers.length !== 1 ? "s" : ""}</span>
        </div>

        {filteredOthers.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredOthers.map((p) => (
              <StandardCard key={p.title} project={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 py-16 dark:border-white/5">
            <RefreshCw className="h-8 w-8 text-slate-300 dark:text-slate-600" />
            <p className="mt-3 text-sm text-slate-500">No projects match the selected filters.</p>
            <button onClick={resetFilters} className="mt-2 text-xs font-medium text-teal-600 hover:text-teal-500 dark:text-teal-400">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
