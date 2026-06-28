import { useState } from "react";
import {
  ExternalLink, Github, BarChart3, X, ChevronRight,
  Database, Globe, Activity, LineChart, Network,
  Shield, Code, TrendingUp, Layers, Zap,
  BookOpen, FileText, ArrowUpRight, Eye
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
  accent: string;
};

type Project = {
  title: string;
  tagline: string;
  badges: string[];
  metrics?: ProjectMetric[];
  category: "featured" | "professional" | "ml" | "academic";
  illustration: ProjectIllustration;
  links: ProjectLink[];
  techStack: string[];
  skills: string[];
  description: string;
};

// ─── Projects Data ────────────────────────────────────────────

const projects: Project[] = [
  // ═══ FEATURED ═══════════════════════════════════════════════
  {
    title: "Quantara",
    tagline: "AI financial intelligence platform with live market data, SEC filing RAG, and multi-agent conversational research.",
    badges: ["Next.js", "FastAPI", "Groq", "Redis", "PostgreSQL", "Docker"],
    metrics: [
      { label: "17 Live APIs" },
      { label: "8 AI Agents" },
      { label: "Multi-Agent RAG" },
      { label: "Production Ready" },
    ],
    category: "featured",
    illustration: { gradient: "from-slate-900 via-teal-950 to-slate-900", pattern: "finance", accent: "teal" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/quantara" },
    ],
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "Qdrant", "Celery", "Groq", "Docker", "Prometheus", "GitHub Actions", "JWT", "OAuth", "SSE"],
    skills: ["LLMs", "RAG", "Multi-Agent Systems", "Vector Databases", "Distributed Systems", "Caching", "Observability", "System Design", "FinTech"],
    description: "Institutional AI investment platform with 17 parallel data sources, SEC EDGAR integration, and real-time streaming research."
  },
  {
    title: "ModelMatrix",
    tagline: "Enterprise AI benchmarking across AWS Bedrock and Google Vertex AI with automated governance and prompt analysis.",
    badges: ["FastAPI", "AWS Bedrock", "Vertex AI", "React", "Docker"],
    metrics: [
      { label: "Cross-Cloud AI" },
      { label: "Model Benchmarking" },
      { label: "Governance" },
    ],
    category: "featured",
    illustration: { gradient: "from-slate-900 via-indigo-950 to-slate-900", pattern: "network", accent: "indigo" },
    links: [
      { type: "github", url: "https://github.com/Capstone-82" },
    ],
    techStack: ["React", "TypeScript", "FastAPI", "Python", "AWS Bedrock", "Google Vertex AI", "Docker", "Cloud Infrastructure"],
    skills: ["LLMs", "Model Evaluation", "Benchmarking", "Cloud Infrastructure", "AI Agents", "Cross-Cloud", "Governance"],
    description: "CoreStack industry capstone for cross-cloud AI model benchmarking and recommendation."
  },
  {
    title: "SaansSync",
    tagline: "AI-powered respiratory care platform developed with AIIMS Delhi for patient monitoring and clinical workflows.",
    badges: ["React", "Node.js", "FastAPI", "Healthcare", "RBAC"],
    metrics: [
      { label: "AIIMS Delhi" },
      { label: "Real-time Analytics" },
      { label: "Healthcare AI" },
    ],
    category: "featured",
    illustration: { gradient: "from-slate-900 via-emerald-950 to-slate-900", pattern: "health", accent: "emerald" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/webversionSS" },
      { type: "demo", url: "https://webversion10.vercel.app/login" },
      { type: "certificate", url: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing" },
    ],
    techStack: ["React", "Node.js", "Express", "JavaScript", "REST API", "RBAC", "Healthcare"],
    skills: ["Healthcare AI", "RBAC", "REST APIs", "Full Stack Development", "Real-Time Monitoring", "Data Visualization", "Clinical Collaboration"],
    description: "Respiratory care platform with SpO2/AQI risk detection, symptom tracking, and multilingual clinician workflows."
  },

  // ═══ PROFESSIONAL ═══════════════════════════════════════════
  {
    title: "Distributed API Gateway",
    tagline: "API gateway with rate limiting, request routing, JWT authentication middleware, and Prometheus metrics for microservices observability.",
    badges: ["FastAPI", "Python", "Redis", "Docker", "Prometheus", "JWT"],
    category: "professional",
    illustration: { gradient: "from-slate-900 via-blue-950 to-slate-900", pattern: "topology", accent: "blue" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes" },
    ],
    techStack: ["FastAPI", "Python", "Redis", "Docker", "Prometheus", "JWT", "OAuth", "REST API", "WebSockets"],
    skills: ["System Design", "API Gateway", "Rate Limiting", "Authentication", "Microservices", "Observability", "Distributed Systems"],
    description: "Scalable API gateway for microservices with middleware pipeline, caching, and real-time metrics."
  },
  {
    title: "Perishables Management",
    tagline: "Retail inventory system with expiry tracking, stock alerts, and supply chain analytics built using Scrum methodology.",
    badges: ["Python", "CI/CD", "Jira", "Scrum", "REST API"],
    category: "professional",
    illustration: { gradient: "from-slate-900 via-amber-950 to-slate-900", pattern: "stats", accent: "amber" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Perishable-Management-System" },
    ],
    techStack: ["Python", "JavaScript", "HTML/CSS", "SQL", "REST API", "Git", "CI/CD", "Jira", "Scrum"],
    skills: ["Software Engineering", "Scrum/Agile", "CI/CD", "Git Workflow", "REST APIs", "Testing", "Clean Architecture"],
    description: "Full-marks SE project with formal Jira tracking, Git branching, CI/CD pipeline, and API design."
  },
  {
    title: "Coding Fingerprint",
    tagline: "ML system predicting programmer rank and country from code style analysis across 25,000+ Codeforces submissions.",
    badges: ["Python", "Scikit-Learn", "Flask", "TF-IDF"],
    category: "professional",
    illustration: { gradient: "from-slate-900 via-purple-950 to-slate-900", pattern: "code", accent: "purple" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Coding-Fingerprint" },
    ],
    techStack: ["Python", "Scikit-Learn", "Flask", "Streamlit", "Pandas", "NumPy", "Matplotlib", "TF-IDF"],
    skills: ["Machine Learning", "NLP", "Feature Engineering", "Text Classification", "Data Analysis", "Model Evaluation"],
    description: "Code authorship attribution using TF-IDF features and ensemble classification from competitive programming data."
  },

  // ═══ ML PROJECTS ════════════════════════════════════════════
  {
    title: "Hangman AI Solver",
    tagline: "94.4% accuracy Hangman solver combining HMM probabilistic filtering with Deep Q-Network reinforcement learning.",
    badges: ["PyTorch", "DQN", "HMM", "Python"],
    category: "ml",
    illustration: { gradient: "from-slate-900 via-rose-950 to-slate-900", pattern: "game", accent: "rose" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman" },
    ],
    techStack: ["Python", "PyTorch", "NumPy", "Scikit-Learn", "HMM", "DQN", "Deep RL"],
    skills: ["Deep Learning", "Reinforcement Learning", "HMMs", "DQN", "Model Evaluation", "Probabilistic Modeling"],
    description: "ML hackathon project achieving 94.40% accuracy across 2,000 test games using HMM + DQN architecture."
  },
  {
    title: "Credit Card Fraud",
    tagline: "Real-time fraud detection pipeline with class imbalance handling and interactive Streamlit prediction interface.",
    badges: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
    category: "ml",
    illustration: { gradient: "from-slate-900 via-red-950 to-slate-900", pattern: "shield", accent: "red" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection" },
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "NumPy", "Matplotlib", "Anomaly Detection"],
    skills: ["Machine Learning", "Anomaly Detection", "Classification", "Feature Engineering", "Model Evaluation", "Data Visualization"],
    description: "ML pipeline for identifying suspicious transactions with multi-algorithm evaluation and real-time predictions."
  },
  {
    title: "CodeMentor AI",
    tagline: "AI code review assistant analyzing source code for anti-patterns and generating fixes via Gemini API.",
    badges: ["React", "Express", "Gemini API", "Node.js"],
    category: "ml",
    illustration: { gradient: "from-slate-900 via-cyan-950 to-slate-900", pattern: "code", accent: "cyan" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/CodeMentorAI-" },
    ],
    techStack: ["React", "Express", "Node.js", "Gemini API", "PrismJS", "JavaScript", "REST API"],
    skills: ["LLMs", "Prompt Engineering", "Code Analysis", "REST APIs", "Full Stack Development"],
    description: "AI-powered code review assistant with multi-language analysis and practical improvement suggestions."
  },

  // ═══ ACADEMIC ═══════════════════════════════════════════════
  {
    title: "CareerSphere",
    tagline: "Campus placement portal with role-based Admin/Student/Recruiter flows and ACID-compliant transactions.",
    badges: ["Python", "Streamlit", "MySQL", "SQLite"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "stats", accent: "slate" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347" },
    ],
    techStack: ["Python", "Streamlit", "MySQL", "SQLite", "SQL", "Database Design"],
    skills: ["Database Design", "SQL", "RBAC", "Data Analytics", "Software Engineering", "ACID Transactions"],
    description: "Full placement lifecycle with triggers, procedures, and role-based access control."
  },
  {
    title: "Classroom Networking",
    tagline: "Enterprise network simulation with VLAN segmentation, VPN access, ASA firewall, and inter-VLAN routing.",
    badges: ["Cisco", "VLAN", "VPN", "Firewall"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "topology", accent: "slate" },
    links: [
      { type: "github", url: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING" },
    ],
    techStack: ["Cisco Packet Tracer", "DHCP", "VLAN", "VPN", "ASA Firewall", "Routing", "Switching", "TCP/IP"],
    skills: ["Networking", "VLAN", "DHCP", "VPN", "Firewall", "Routing & Switching", "Network Security"],
    description: "Cisco Packet Tracer simulation with DHCP, VLANs, VPN, firewall policies, and multi-service servers."
  },
  {
    title: "SecureSite",
    tagline: "Full-stack e-commerce platform with Stripe payments, JWT auth, and admin management dashboard.",
    badges: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "shield", accent: "slate" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-" },
      { type: "demo", url: "https://ecommerce-website-mern-five.vercel.app/" },
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "REST API"],
    skills: ["Full Stack Development", "E-Commerce", "Payment Integration", "Authentication", "MERN Stack"],
    description: "Security products e-commerce with product catalog, cart, Stripe payments, and admin dashboard."
  },
  {
    title: "CV Sensei",
    tagline: "NLP resume evaluator using transformer models for multi-dimensional scoring and improvement signals.",
    badges: ["Python", "Transformers", "NLP", "Streamlit"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "search", accent: "slate" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/-CV-Sensei" },
    ],
    techStack: ["Python", "Streamlit", "Transformers", "PyMuPDF", "NLP", "Hugging Face"],
    skills: ["NLP", "Transformers", "Document Processing", "Machine Learning", "Text Analysis"],
    description: "Resume scoring and skill gap analysis using transformer-based NLP and PDF parsing."
  },
  {
    title: "Team Banalo",
    tagline: "Hackathon team-formation platform with project matching, real-time messaging, and Supabase backend.",
    badges: ["React", "TypeScript", "FastAPI", "Supabase"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "network", accent: "slate" },
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
    tagline: "Raw-socket ICMP utility with RTT statistics, packet loss visualization, and traceroute capability.",
    badges: ["Python", "Raw Sockets", "ICMP", "TCP/IP"],
    category: "academic",
    illustration: { gradient: "from-slate-900 via-slate-800 to-slate-900", pattern: "topology", accent: "slate" },
    links: [
      { type: "github", url: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-" },
    ],
    techStack: ["Python", "Raw Sockets", "ICMP", "TCP/IP", "Matplotlib", "NumPy"],
    skills: ["Networking", "ICMP Protocol", "Socket Programming", "Systems Programming", "Data Visualization"],
    description: "Network diagnostics tool with custom packet construction and real-time response analysis."
  },
];

// ─── Illustration Components ─────────────────────────────────

const IllustrationCanvas = ({ illustration }: { illustration: ProjectIllustration }) => {
  const patterns: Record<string, React.ReactNode> = {
    charts: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <rect x="40" y="100" width="40" height="80" rx="4" className="fill-white" />
        <rect x="90" y="70" width="40" height="110" rx="4" className="fill-white" />
        <rect x="140" y="50" width="40" height="130" rx="4" className="fill-white" />
        <rect x="190" y="80" width="40" height="100" rx="4" className="fill-white" />
        <rect x="240" y="30" width="40" height="150" rx="4" className="fill-white" />
        <rect x="290" y="90" width="40" height="90" rx="4" className="fill-white" />
        <path d="M40 180 L320 180" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <circle cx="260" cy="30" r="2" className="fill-teal-400" />
      </svg>
    ),
    network: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
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
      </svg>
    ),
    health: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <path d="M0 112 Q50 40 100 112 Q150 180 200 112 Q250 40 300 112 Q350 180 400 112" stroke="white" strokeWidth="1" fill="none" />
        <path d="M0 140 Q50 100 100 140 Q150 180 200 140 Q250 100 300 140 Q350 180 400 140" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="170" y="80" width="12" height="60" rx="2" className="fill-white/10" />
        <rect x="190" y="60" width="12" height="80" rx="2" className="fill-white/10" />
        <rect x="210" y="90" width="12" height="50" rx="2" className="fill-white/10" />
      </svg>
    ),
    finance: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <path d="M0 170 Q50 130 100 150 Q150 100 200 120 Q250 60 300 90 Q350 40 400 70" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M0 190 Q50 170 100 180 Q150 150 200 160 Q250 120 300 140 Q350 100 400 110" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="280" y="40" width="8" height="40" rx="2" className="fill-white/10" />
        <rect x="296" y="55" width="8" height="25" rx="2" className="fill-white/10" />
        <rect x="312" y="30" width="8" height="50" rx="2" className="fill-white/10" />
        <rect x="40" y="100" width="40" height="6" rx="2" className="fill-white/5" />
        <rect x="40" y="112" width="28" height="6" rx="2" className="fill-white/5" />
        <rect x="40" y="124" width="34" height="6" rx="2" className="fill-white/5" />
      </svg>
    ),
    code: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <rect x="40" y="40" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <rect x="40" y="64" width="280" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="80" width="200" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="104" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <rect x="40" y="128" width="240" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="144" width="160" height="8" rx="2" stroke="white" strokeWidth="0.2" fill="none" opacity="0.5" />
        <rect x="40" y="168" width="320" height="16" rx="3" stroke="white" strokeWidth="0.3" fill="none" />
        <circle cx="56" cy="48" r="3" className="fill-white/10" />
        <circle cx="56" cy="112" r="3" className="fill-white/10" />
        <circle cx="56" cy="176" r="3" className="fill-white/10" />
      </svg>
    ),
    shield: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <path d="M200 30 L300 60 L300 120 Q300 170 200 195 Q100 170 100 120 L100 60 Z" stroke="white" strokeWidth="1" fill="none" />
        <path d="M200 50 L260 70 L260 110 Q260 150 200 170 Q140 150 140 110 L140 70 Z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="200" y1="60" x2="200" y2="165" stroke="white" strokeWidth="0.3" opacity="0.2" />
        <line x1="145" y1="90" x2="255" y2="90" stroke="white" strokeWidth="0.3" opacity="0.2" />
      </svg>
    ),
    topology: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <rect x="150" y="30" width="100" height="40" rx="6" stroke="white" strokeWidth="0.5" fill="none" />
        <rect x="50" y="130" width="80" height="36" rx="6" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="270" y="130" width="80" height="36" rx="6" stroke="white" strokeWidth="0.3" fill="none" opacity="0.5" />
        <rect x="100" y="180" width="60" height="24" rx="4" stroke="white" strokeWidth="0.2" fill="none" opacity="0.3" />
        <rect x="240" y="180" width="60" height="24" rx="4" stroke="white" strokeWidth="0.2" fill="none" opacity="0.3" />
        <line x1="200" y1="70" x2="130" y2="130" stroke="white" strokeWidth="0.3" />
        <line x1="200" y1="70" x2="270" y2="130" stroke="white" strokeWidth="0.3" />
        <line x1="130" y1="166" x2="130" y2="180" stroke="white" strokeWidth="0.2" opacity="0.3" />
        <line x1="270" y1="166" x2="270" y2="180" stroke="white" strokeWidth="0.2" opacity="0.3" />
      </svg>
    ),
    game: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <rect x="100" y="60" width="200" height="120" rx="12" stroke="white" strokeWidth="0.5" fill="none" />
        <line x1="140" y1="120" x2="200" y2="120" stroke="white" strokeWidth="1" />
        <line x1="170" y1="90" x2="170" y2="150" stroke="white" strokeWidth="1" />
        <circle cx="270" cy="100" r="10" stroke="white" strokeWidth="0.3" fill="none" />
        <circle cx="270" cy="140" r="10" stroke="white" strokeWidth="0.3" fill="none" />
        <line x1="210" y1="95" x2="240" y2="100" stroke="white" strokeWidth="0.2" opacity="0.3" />
        <line x1="210" y1="145" x2="240" y2="140" stroke="white" strokeWidth="0.2" opacity="0.3" />
        <text x="200" y="205" textAnchor="middle" className="fill-white/5 text-[10px] font-mono">_ _ _ _ _ _</text>
      </svg>
    ),
    search: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <circle cx="180" cy="100" r="40" stroke="white" strokeWidth="0.5" fill="none" />
        <line x1="210" y1="130" x2="240" y2="150" stroke="white" strokeWidth="0.5" />
        <rect x="60" y="170" width="80" height="6" rx="2" className="fill-white/5" />
        <rect x="60" y="182" width="60" height="6" rx="2" className="fill-white/5" />
        <rect x="60" y="194" width="100" height="6" rx="2" className="fill-white/5" />
        <rect x="260" y="170" width="80" height="6" rx="2" className="fill-white/5" />
        <rect x="260" y="182" width="60" height="6" rx="2" className="fill-white/5" />
      </svg>
    ),
    stats: (
      <svg className="absolute inset-0 h-full w-full opacity-[0.04]" viewBox="0 0 400 225" fill="none">
        <rect x="30" y="120" width="30" height="60" rx="3" className="fill-white/5" />
        <rect x="70" y="90" width="30" height="90" rx="3" className="fill-white/5" />
        <rect x="110" y="60" width="30" height="120" rx="3" className="fill-white/5" />
        <rect x="150" y="80" width="30" height="100" rx="3" className="fill-white/5" />
        <rect x="190" y="40" width="30" height="140" rx="3" className="fill-white/5" />
        <line x1="30" y1="200" x2="350" y2="200" stroke="white" strokeWidth="0.2" opacity="0.2" />
        <line x1="30" y1="160" x2="350" y2="160" stroke="white" strokeWidth="0.2" opacity="0.1" />
        <line x1="30" y1="120" x2="350" y2="120" stroke="white" strokeWidth="0.2" opacity="0.1" />
      </svg>
    ),
  };

  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${illustration.gradient}`}>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.08),transparent_60%)]`} />
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.04),transparent_50%)]`} />
      {patterns[illustration.pattern]}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
    </div>
  );
};

// ─── Project Image ────────────────────────────────────────────

const ProjectImage = ({ illustration, title }: { illustration: ProjectIllustration; title: string }) => (
  <div className="relative overflow-hidden">
    <IllustrationCanvas illustration={illustration} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
  </div>
);

// ─── Project Metrics ──────────────────────────────────────────

const ProjectMetrics = ({ metrics }: { metrics: ProjectMetric[] }) => (
  <div className="flex flex-wrap gap-3">
    {metrics.map((m) => (
      <span
        key={m.label}
        className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
      >
        <Zap className="h-3 w-3 text-teal-300" />
        {m.label}
      </span>
    ))}
  </div>
);

// ─── Tech Badge ───────────────────────────────────────────────

const TechBadge = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-md border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/10">
    {label}
  </span>
);

// ─── Project Actions ──────────────────────────────────────────

const linkStyles: Record<string, string> = {
  github: "border-white/20 text-white/80 hover:border-white/40 hover:text-white",
  demo: "bg-teal-600 text-white hover:bg-teal-500 border-transparent",
  certificate: "border-white/20 text-white/70 hover:border-white/40 hover:text-white",
  "case-study": "border-indigo-500/40 text-indigo-300 hover:border-indigo-400 hover:text-indigo-200",
};

const ProjectActions = ({ links }: { links: ProjectLink[] }) => (
  <div className="flex flex-wrap gap-2">
    {links.map((link) => {
      const iconMap: Record<string, React.ReactNode> = {
        github: <Github className="h-3.5 w-3.5" />,
        demo: <ExternalLink className="h-3.5 w-3.5" />,
        certificate: <Eye className="h-3.5 w-3.5" />,
        "case-study": <FileText className="h-3.5 w-3.5" />,
      };
      return (
        <a
          key={link.type}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[11px] font-medium transition-all hover:scale-105 active:scale-100 ${linkStyles[link.type] || "border-white/20 text-white/80 hover:border-white/40"}`}
        >
          {iconMap[link.type] || <ArrowUpRight className="h-3.5 w-3.5" />}
          {link.type === "github" ? "GitHub" : link.type === "demo" ? "Live Demo" : link.type === "certificate" ? "Certificate" : "Case Study"}
        </a>
      );
    })}
  </div>
);

// ─── Tech Stack Modal ─────────────────────────────────────────

const TechStackModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${project.title} tech stack`}>
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

// ─── Project Hero Card ─────────────────────────────────────────

const ProjectHeroCard = ({ project, wide }: { project: Project; wide?: boolean }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-slate-900/80 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${wide ? "xl:col-span-2" : ""}`}>
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/8 via-transparent to-indigo-500/8" />
        </div>
        <div className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-teal-500/30" />
        </div>

        <ProjectImage illustration={project.illustration} title={project.title} />

        <div className="relative z-20 flex flex-1 flex-col bg-gradient-to-b from-slate-900 to-slate-900/95 p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
          </div>

          <p className="mt-1.5 text-sm leading-relaxed text-white/60">{project.tagline}</p>

          {project.metrics && (
            <div className="mt-4">
              <ProjectMetrics metrics={project.metrics} />
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.badges.map((b) => (
              <TechBadge key={b} label={b} />
            ))}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1 rounded-md border border-dashed border-white/15 px-2 py-0.5 text-[10px] font-medium text-white/40 transition-colors hover:border-white/30 hover:text-white/70"
            >
              <Layers className="h-3 w-3" />
              +{project.techStack.length - project.badges.length} more
            </button>
          </div>

          <div className="mt-5">
            <ProjectActions links={project.links} />
          </div>
        </div>
      </article>
      {showModal && <TechStackModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};

// ─── Project Compact Card ─────────────────────────────────────

const ProjectCompactCard = ({ project }: { project: Project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.06] dark:bg-slate-900/60 dark:hover:border-white/10">
        <div className="relative overflow-hidden">
          <IllustrationCanvas illustration={project.illustration} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{project.title}</h3>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{project.tagline}</p>

          <div className="mt-3 flex flex-wrap gap-1">
            {project.badges.slice(0, 4).map((b) => (
              <span key={b} className="rounded-md border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[9px] font-medium text-slate-500 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-400">{b}</span>
            ))}
            {project.badges.length > 4 && (
              <button onClick={() => setShowModal(true)} className="rounded-md border border-dashed border-slate-200 px-1.5 py-0.5 text-[9px] font-medium text-slate-400 dark:border-white/[0.06] dark:text-slate-500">+{project.badges.length - 4}</button>
            )}
          </div>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
            {project.links.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600 transition hover:border-teal-500/30 hover:text-teal-700 dark:border-white/10 dark:text-slate-400 dark:hover:text-teal-300"
              >
                {link.type === "github" ? <Github className="h-3 w-3" /> : <ExternalLink className="h-3 w-3" />}
                {link.type === "github" ? "GitHub" : "Live"}
              </a>
            ))}
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-1 rounded-md border border-dashed border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-400 transition hover:border-slate-300 hover:text-slate-600 dark:border-white/10 dark:text-slate-500 dark:hover:text-slate-300"
            >
              <Database className="h-3 w-3" />
              Stack
            </button>
          </div>
        </div>
      </article>
      {showModal && <TechStackModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};

// ─── Section Wrapper ───────────────────────────────────────────

const Section = ({ title, description, children, className }: { title: string; description?: string; children: React.ReactNode; className?: string }) => (
  <div className={`mb-12 last:mb-0 ${className || ""}`}>
    <div className="mb-5">
      <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
      {description && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>}
    </div>
    {children}
  </div>
);

// ─── Projects ──────────────────────────────────────────────────

const Projects = () => {
  const featured = projects.filter((p) => p.category === "featured");
  const professional = projects.filter((p) => p.category === "professional");
  const ml = projects.filter((p) => p.category === "ml");
  const academic = projects.filter((p) => p.category === "academic");

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Projects</span>
          <h2 id="projects-heading">Engineering Portfolio</h2>
          <p>Production software across AI, full-stack, infrastructure, and systems — built with measurable impact.</p>
        </div>

        {/* Featured */}
        <Section title="Featured Work" description="Flagship projects demonstrating production-quality engineering.">
          <div className="grid gap-6 xl:grid-cols-3">
            {featured.map((p, i) => (
              <ProjectHeroCard key={p.title} project={p} wide={i === 0} />
            ))}
          </div>
        </Section>

        {/* Professional */}
        <Section title="Professional Projects" description="Well-engineered systems with real-world application.">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {professional.map((p) => (
              <ProjectCompactCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* ML */}
        <Section title="Machine Learning" description="Applied ML across reinforcement learning, anomaly detection, and AI-powered tools.">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {ml.map((p) => (
              <ProjectCompactCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* Academic */}
        <Section title="Academic Projects" description="Coursework and hackathon projects demonstrating breadth across domains.">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {academic.map((p) => (
              <ProjectCompactCard key={p.title} project={p} />
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
};

export default Projects;
