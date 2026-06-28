export type ProjectGroup = {
  name: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image: string;
  metrics: string[];
  tech: ProjectGroup[];
  github?: string;
  demo?: string;
  certificate?: string;
  featured: boolean;
};

export const projects: Project[] = [
  // ─── Featured ─────────────────────────────────────────────
  {
    title: "Quantara",
    description: "Institutional AI investment platform with live market intelligence, SEC filing RAG, and conversational AI research.",
    category: "AI/ML",
    image: "/projects/quantara.webp",
    metrics: ["17 Live APIs", "Multi-Agent AI", "RAG Pipeline", "SSE Streaming"],
    tech: [
      { name: "Core", items: ["Next.js", "TypeScript", "FastAPI", "Python"] },
      { name: "AI", items: ["Groq", "RAG", "Prompt Engineering", "Multi-Agent"] },
      { name: "Infra", items: ["Redis", "Docker", "PostgreSQL", "Qdrant", "Celery"] },
      { name: "DevOps", items: ["Prometheus", "GitHub Actions", "JWT", "OAuth"] },
    ],
    github: "https://github.com/bilalinbytes/quantara",
    featured: true,
  },
  {
    title: "ModelMatrix",
    description: "Cross-cloud AI model benchmarking platform with automated governance across AWS Bedrock and Google Vertex AI.",
    category: "AI/ML",
    image: "/projects/modelmatrix.webp",
    metrics: ["Cross-Cloud AI", "Model Benchmarking", "Governance", "Prompt Analysis"],
    tech: [
      { name: "Core", items: ["React", "TypeScript", "FastAPI", "Python"] },
      { name: "AI", items: ["AWS Bedrock", "Vertex AI", "Prompt Engineering"] },
      { name: "Infra", items: ["Docker", "Cloud Infrastructure"] },
    ],
    github: "https://github.com/Capstone-82",
    featured: true,
  },
  {
    title: "SaansSync",
    description: "AI-powered respiratory care platform developed with AIIMS Delhi for patient monitoring and clinical workflows.",
    category: "Full-Stack",
    image: "/projects/saanssync.webp",
    metrics: ["AIIMS Delhi", "Real-time Analytics", "Healthcare AI", "RBAC"],
    tech: [
      { name: "Core", items: ["React", "Node.js", "FastAPI", "Python"] },
      { name: "Infra", items: ["REST API", "RBAC", "Express"] },
      { name: "Domain", items: ["Healthcare", "Clinical Workflows", "Data Visualization"] },
    ],
    github: "https://github.com/bilalinbytes/webversionSS",
    demo: "https://webversion10.vercel.app/login",
    certificate: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
    featured: true,
  },

  // ─── Other Projects ───────────────────────────────────────
  {
    title: "Distributed API Gateway",
    description: "API gateway with rate limiting, JWT authentication, and Prometheus metrics for microservices observability.",
    category: "Infra",
    image: "/projects/flowgate.webp",
    metrics: ["Rate Limiting", "JWT Auth", "Prometheus Metrics", "Dockerized"],
    tech: [
      { name: "Core", items: ["FastAPI", "Python", "Redis"] },
      { name: "Infra", items: ["Docker", "Prometheus", "REST API", "WebSockets"] },
      { name: "Security", items: ["JWT", "OAuth", "Middleware"] },
    ],
    github: "https://github.com/bilalinbytes",
    featured: false,
  },
  {
    title: "Perishables Management",
    description: "Retail inventory system with expiry tracking, stock alerts, and Scrum-based software engineering lifecycle.",
    category: "Full-Stack",
    image: "/projects/perishables.webp",
    metrics: ["Scrum/Agile", "Jira Tracking", "CI/CD Pipeline", "Full Marks"],
    tech: [
      { name: "Core", items: ["Python", "JavaScript", "SQL"] },
      { name: "Process", items: ["Jira", "Scrum", "Git", "CI/CD", "REST API"] },
    ],
    github: "https://github.com/bilalinbytes/Perishable-Management-System",
    featured: false,
  },
  {
    title: "Coding Fingerprint",
    description: "ML system predicting programmer rank and country from code style across 25,000+ Codeforces submissions.",
    category: "AI/ML",
    image: "/projects/coding-fingerprint.webp",
    metrics: ["25K+ Samples", "TF-IDF", "Ensemble Classification", "94% Accuracy"],
    tech: [
      { name: "Core", items: ["Python", "Scikit-Learn", "Pandas", "NumPy"] },
      { name: "AI", items: ["TF-IDF", "Classification", "Feature Engineering"] },
      { name: "Stack", items: ["Flask", "Streamlit", "Matplotlib"] },
    ],
    github: "https://github.com/bilalinbytes/Coding-Fingerprint",
    featured: false,
  },
  {
    title: "Hangman AI Solver",
    description: "94.4% accuracy Hangman solver combining Hidden Markov Models with Deep Q-Network reinforcement learning.",
    category: "AI/ML",
    image: "/projects/hangman.webp",
    metrics: ["94.4% Accuracy", "HMM + DQN", "2K Test Games", "Hackathon"],
    tech: [
      { name: "Core", items: ["Python", "PyTorch", "NumPy", "Scikit-Learn"] },
      { name: "AI", items: ["HMM", "DQN", "Deep RL", "Probabilistic"] },
    ],
    github: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman",
    featured: false,
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Real-time fraud detection pipeline with class imbalance handling and interactive Streamlit prediction interface.",
    category: "AI/ML",
    image: "/projects/fraud-detection.webp",
    metrics: ["Anomaly Detection", "Multi-Algorithm", "Streamlit UI", "Real-time"],
    tech: [
      { name: "Core", items: ["Python", "Pandas", "Scikit-Learn", "NumPy"] },
      { name: "AI", items: ["Anomaly Detection", "Classification", "Feature Engineering"] },
      { name: "Stack", items: ["Streamlit", "Matplotlib"] },
    ],
    github: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection",
    featured: false,
  },
  {
    title: "CodeMentor AI",
    description: "AI-powered code review assistant analyzing source code for anti-patterns and generating fixes via Gemini API.",
    category: "AI/ML",
    image: "/projects/codementor.webp",
    metrics: ["Gemini API", "Multi-Language", "Anti-Pattern Detection", "Full Stack"],
    tech: [
      { name: "Core", items: ["React", "Node.js", "Express"] },
      { name: "AI", items: ["Gemini API", "Prompt Engineering", "Code Analysis"] },
      { name: "Stack", items: ["JavaScript", "PrismJS", "REST API"] },
    ],
    github: "https://github.com/Mohammedbilal12345/CodeMentorAI-",
    featured: false,
  },
  {
    title: "CareerSphere",
    description: "Campus placement portal with role-based Admin/Student/Recruiter flows and ACID-compliant transactions.",
    category: "Full-Stack",
    image: "/projects/careersphere.webp",
    metrics: ["RBAC", "ACID Transactions", "Triggers & Procedures", "Analytics"],
    tech: [
      { name: "Core", items: ["Python", "Streamlit", "MySQL", "SQLite"] },
      { name: "Infra", items: ["SQL", "Database Design", "REST API"] },
    ],
    github: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347",
    featured: false,
  },
  {
    title: "Classroom Networking",
    description: "Enterprise network simulation with VLAN segmentation, VPN access, ASA firewall, and inter-VLAN routing.",
    category: "Infra",
    image: "/projects/networking.webp",
    metrics: ["VLAN Segmentation", "VPN Access", "ASA Firewall", "Multi-Service"],
    tech: [
      { name: "Core", items: ["Cisco Packet Tracer", "TCP/IP"] },
      { name: "Network", items: ["DHCP", "VLAN", "VPN", "ASA Firewall", "Routing", "Switching"] },
    ],
    github: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING",
    featured: false,
  },
  {
    title: "SecureIT",
    description: "Full-stack e-commerce platform with Stripe payments, JWT authentication, and admin management dashboard.",
    category: "Full-Stack",
    image: "/projects/secureit.webp",
    metrics: ["Stripe Payments", "JWT Auth", "Admin Dashboard", "MERN Stack"],
    tech: [
      { name: "Core", items: ["React", "Node.js", "Express", "MongoDB"] },
      { name: "Stack", items: ["Stripe", "JWT", "REST API"] },
    ],
    github: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
    demo: "https://ecommerce-website-mern-five.vercel.app/",
    featured: false,
  },
  {
    title: "CV Sensei",
    description: "NLP-powered resume evaluator using transformer models for multi-dimensional scoring and improvement signals.",
    category: "AI/ML",
    image: "/projects/cv-sensei.webp",
    metrics: ["NLP Scoring", "Transformers", "PDF Parsing", "Skill Gap Analysis"],
    tech: [
      { name: "Core", items: ["Python", "Streamlit", "Hugging Face"] },
      { name: "AI", items: ["Transformers", "NLP", "Document Processing"] },
      { name: "Stack", items: ["PyMuPDF", "PDF Parsing"] },
    ],
    github: "https://github.com/Mohammedbilal12345/-CV-Sensei",
    featured: false,
  },
  {
    title: "Team Banalo",
    description: "Hackathon team-formation platform with intelligent project matching and real-time collaboration features.",
    category: "Full-Stack",
    image: "/projects/teambanalo.webp",
    metrics: ["Project Matching", "Real-time", "Supabase", "Dockerized"],
    tech: [
      { name: "Core", items: ["React", "TypeScript", "FastAPI", "Python"] },
      { name: "Infra", items: ["Supabase", "PostgreSQL", "Docker", "REST API"] },
    ],
    github: "https://github.com/Mohammedbilal12345/TeamBanalo",
    demo: "https://teambanalo-frontend.onrender.com/",
    featured: false,
  },
  {
    title: "Ping Utility",
    description: "Raw-socket ICMP network diagnostics tool with RTT statistics, packet loss visualization, and traceroute capability.",
    category: "Infra",
    image: "/projects/ping-utility.webp",
    metrics: ["Raw Sockets", "ICMP Protocol", "RTT Stats", "Packet Loss"],
    tech: [
      { name: "Core", items: ["Python", "Raw Sockets", "TCP/IP"] },
      { name: "Stack", items: ["ICMP", "Matplotlib", "NumPy"] },
    ],
    github: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-",
    featured: false,
  },
];

export const categories = ["AI/ML", "Full-Stack", "Infra"] as const;
export const allTechTags = [...new Set(projects.flatMap((p) => p.tech.flatMap((g) => g.items)))].sort();
