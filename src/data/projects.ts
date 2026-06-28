export type ProjectStory = {
  problem: string;
  challenge: string;
  solution: string;
  impact: string;
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
  certificate?: string;
};

export type ProjectCategory = "AI/ML" | "Full-Stack" | "Infra";

export type Project = {
  slug: string;
  title: string;
  impact: string;
  story: ProjectStory;
  category: ProjectCategory;
  image: string;
  stack: string[];
  highlights: string[];
  links: ProjectLinks;
  /** 1 = flagship, 2–3 = secondary featured, undefined = archive */
  rank?: 1 | 2 | 3;
};

export const projects: Project[] = [
  {
    slug: "quantara",
    title: "Quantara",
    impact:
      "Institutional investment intelligence — live market data, SEC filing RAG, and multi-agent research in one system.",
    story: {
      problem:
        "Research teams stitch together market terminals, filing portals, and chat tools that never share context.",
      challenge:
        "Unify 17 live market APIs, vector search over SEC filings, and multi-agent orchestration with streaming responses under load.",
      solution:
        "Event-driven FastAPI services with Celery workers, Qdrant RAG, Redis caching, and SSE delivery to a Next.js research surface.",
      impact:
        "Single workflow from live quotes to filing-grounded AI answers — built for sustained production traffic.",
    },
    category: "AI/ML",
    image: "/projects/quantara.webp",
    stack: ["Next.js", "FastAPI", "Qdrant", "Redis"],
    highlights: ["17 live APIs", "Multi-agent RAG", "SSE streaming", "Celery workers"],
    links: { github: "https://github.com/bilalinbytes/quantara" },
    rank: 1,
  },
  {
    slug: "modelmatrix",
    title: "ModelMatrix",
    impact:
      "Cross-cloud model benchmarking with automated governance across AWS Bedrock and Google Vertex AI.",
    story: {
      problem:
        "Teams lack a consistent way to compare foundation models across cloud providers before production rollout.",
      challenge:
        "Normalize heterogeneous cloud APIs, run reproducible benchmarks, and enforce governance policies across vendors.",
      solution:
        "React control plane over FastAPI orchestration with provider adapters for Bedrock and Vertex, containerized eval pipelines.",
      impact:
        "Repeatable model selection and compliance checks before models reach production workloads.",
    },
    category: "AI/ML",
    image: "/projects/modelmatrix.webp",
    stack: ["React", "FastAPI", "Bedrock", "Vertex AI"],
    highlights: ["Cross-cloud eval", "Governance rules", "Prompt analysis"],
    links: { github: "https://github.com/Capstone-82" },
    rank: 2,
  },
  {
    slug: "saanssync",
    title: "SaansSync",
    impact:
      "Clinical respiratory monitoring platform built with AIIMS Delhi for real-time patient workflows.",
    story: {
      problem:
        "Respiratory care teams need continuous vitals visibility without adding friction to clinical rounds.",
      challenge:
        "Ship HIPAA-aware role separation, real-time analytics, and reliable sync across web and API layers.",
      solution:
        "React frontend with Node.js and FastAPI services, RBAC middleware, and domain-specific monitoring dashboards.",
      impact:
        "Deployed collaboration with AIIMS Delhi — clinical staff monitor patients from a unified interface.",
    },
    category: "Full-Stack",
    image: "/projects/saanssync.webp",
    stack: ["React", "FastAPI", "Node.js", "RBAC"],
    highlights: ["AIIMS Delhi", "Real-time vitals", "Clinical RBAC"],
    links: {
      github: "https://github.com/bilalinbytes/webversionSS",
      demo: "https://webversion10.vercel.app/login",
      certificate:
        "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
    },
    rank: 3,
  },
  {
    slug: "distributed-api-gateway",
    title: "Distributed API Gateway",
    impact: "Rate-limited gateway with JWT auth and Prometheus observability for microservices.",
    story: {
      problem: "Internal services needed a single ingress with authentication and traffic control.",
      challenge: "Implement per-client rate limits and metrics without adding latency to every request.",
      solution: "FastAPI gateway with Redis-backed limiters, JWT middleware, and Prometheus exporters.",
      impact: "Centralized auth and observability for downstream microservices.",
    },
    category: "Infra",
    image: "/projects/flowgate.webp",
    stack: ["FastAPI", "Redis", "Prometheus"],
    highlights: ["Rate limiting", "JWT middleware", "Metrics export"],
    links: { github: "https://github.com/bilalinbytes" },
  },
  {
    slug: "perishables-management",
    title: "Perishables Management",
    impact: "Retail inventory with expiry tracking, alerts, and full Scrum delivery lifecycle.",
    story: {
      problem: "Perishable stock losses from manual expiry tracking across retail locations.",
      challenge: "Model inventory state transitions and alert thresholds with audit-friendly data design.",
      solution: "Python backend with SQL persistence, automated alerts, and CI/CD through Jira-tracked sprints.",
      impact: "Reduced spoilage risk with automated expiry workflows and traceable releases.",
    },
    category: "Full-Stack",
    image: "/projects/perishables.webp",
    stack: ["Python", "SQL", "REST API"],
    highlights: ["Expiry automation", "Scrum delivery", "CI/CD"],
    links: { github: "https://github.com/bilalinbytes/Perishable-Management-System" },
  },
  {
    slug: "coding-fingerprint",
    title: "Coding Fingerprint",
    impact: "Predict programmer rank and country from code style across 25,000+ submissions.",
    story: {
      problem: "Code style carries signal about author skill and origin but is hard to quantify at scale.",
      challenge: "Extract features from 25K+ Codeforces submissions without overfitting sparse classes.",
      solution: "TF-IDF feature pipeline with ensemble classifiers and rigorous holdout evaluation.",
      impact: "94% accuracy on rank prediction with interpretable style features.",
    },
    category: "AI/ML",
    image: "/projects/coding-fingerprint.webp",
    stack: ["Python", "Scikit-Learn", "TF-IDF"],
    highlights: ["25K+ samples", "Ensemble models", "94% accuracy"],
    links: { github: "https://github.com/bilalinbytes/Coding-Fingerprint" },
  },
  {
    slug: "hangman-ai-solver",
    title: "Hangman AI Solver",
    impact: "94.4% win rate combining Hidden Markov Models with Deep Q-Network reinforcement learning.",
    story: {
      problem: "Hangman requires sequential letter guesses under partial observability — a hard planning problem.",
      challenge: "Blend probabilistic language modeling with learned policy optimization on 2K test games.",
      solution: "HMM letter priors fused with DQN action selection in PyTorch, evaluated on held-out corpora.",
      impact: "94.4% accuracy across 2,000 test games in a hackathon-winning pipeline.",
    },
    category: "AI/ML",
    image: "/projects/hangman.webp",
    stack: ["PyTorch", "HMM", "DQN"],
    highlights: ["94.4% accuracy", "HMM + DQN", "2K test games"],
    links: { github: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman" },
  },
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    impact: "Real-time fraud scoring pipeline with class-imbalance handling and Streamlit interface.",
    story: {
      problem: "Fraudulent transactions are rare events that break standard classification assumptions.",
      challenge: "Balance recall on fraud without flooding operators with false positives.",
      solution: "Multi-algorithm ensemble with resampling strategies and a Streamlit prediction surface.",
      impact: "Interactive real-time scoring for anomaly detection workflows.",
    },
    category: "AI/ML",
    image: "/projects/fraud-detection.webp",
    stack: ["Python", "Scikit-Learn", "Streamlit"],
    highlights: ["Imbalanced data", "Multi-algorithm", "Real-time UI"],
    links: { github: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection" },
  },
  {
    slug: "codementor-ai",
    title: "CodeMentor AI",
    impact: "AI code review assistant detecting anti-patterns and generating fixes via Gemini API.",
    story: {
      problem: "Manual code review misses recurring anti-patterns across large multi-language codebases.",
      challenge: "Parse heterogeneous source, classify issues, and return actionable fixes with low latency.",
      solution: "React client with Node.js API orchestrating Gemini prompts and syntax-aware analysis.",
      impact: "Multi-language anti-pattern detection with suggested remediation in one pass.",
    },
    category: "AI/ML",
    image: "/projects/codementor.webp",
    stack: ["React", "Node.js", "Gemini API"],
    highlights: ["Multi-language", "Anti-pattern detection", "Fix generation"],
    links: { github: "https://github.com/Mohammedbilal12345/CodeMentorAI-" },
  },
  {
    slug: "careersphere",
    title: "CareerSphere",
    impact: "Campus placement portal with Admin, Student, and Recruiter flows on ACID-compliant transactions.",
    story: {
      problem: "Placement offices coordinate three role types with conflicting permissions and audit needs.",
      challenge: "Design schema with triggers, procedures, and transactional integrity across concurrent users.",
      solution: "Streamlit frontend over MySQL with RBAC, stored procedures, and analytics dashboards.",
      impact: "Role-separated placement workflows with reliable transactional state.",
    },
    category: "Full-Stack",
    image: "/projects/careersphere.webp",
    stack: ["Python", "MySQL", "Streamlit"],
    highlights: ["RBAC", "ACID transactions", "Stored procedures"],
    links: { github: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347" },
  },
  {
    slug: "classroom-networking",
    title: "Classroom Networking",
    impact: "Enterprise network simulation with VLAN segmentation, VPN access, and ASA firewall rules.",
    story: {
      problem: "Campus networks require segmented traffic, remote access, and inter-VLAN routing at scale.",
      challenge: "Model multi-service topology with correct ACLs, DHCP scopes, and failover paths.",
      solution: "Cisco Packet Tracer design with VLANs, VPN tunnels, ASA policies, and routed subnets.",
      impact: "Production-faithful network architecture validated through simulation.",
    },
    category: "Infra",
    image: "/projects/networking.webp",
    stack: ["Cisco", "VLAN", "VPN"],
    highlights: ["VLAN segmentation", "ASA firewall", "Inter-VLAN routing"],
    links: { github: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING" },
  },
  {
    slug: "secureit",
    title: "SecureIT",
    impact: "E-commerce platform with Stripe payments, JWT authentication, and admin operations dashboard.",
    story: {
      problem: "Small merchants need secure checkout and inventory control without dedicated ops teams.",
      challenge: "Integrate payment webhooks, auth flows, and admin tooling in a cohesive MERN stack.",
      solution: "React storefront with Express API, MongoDB persistence, Stripe checkout, and JWT sessions.",
      impact: "End-to-end commerce with payment processing and admin visibility.",
    },
    category: "Full-Stack",
    image: "/projects/secureit.webp",
    stack: ["React", "Node.js", "MongoDB"],
    highlights: ["Stripe payments", "JWT auth", "Admin dashboard"],
    links: {
      github: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
      demo: "https://ecommerce-website-mern-five.vercel.app/",
    },
  },
  {
    slug: "cv-sensei",
    title: "CV Sensei",
    impact: "NLP resume evaluator using transformer models for multi-dimensional scoring and skill gaps.",
    story: {
      problem: "Candidates lack structured feedback on resume quality beyond generic templates.",
      challenge: "Parse PDF resumes and score multiple dimensions with transformer-based NLP.",
      solution: "Streamlit app with Hugging Face models, PDF extraction, and skill-gap analysis.",
      impact: "Actionable resume scores with improvement signals across dimensions.",
    },
    category: "AI/ML",
    image: "/projects/cv-sensei.webp",
    stack: ["Python", "Transformers", "Streamlit"],
    highlights: ["PDF parsing", "NLP scoring", "Skill gap analysis"],
    links: { github: "https://github.com/Mohammedbilal12345/-CV-Sensei" },
  },
  {
    slug: "team-banalo",
    title: "Team Banalo",
    impact: "Hackathon team formation with intelligent project matching and real-time collaboration.",
    story: {
      problem: "Hackathon participants struggle to find complementary teammates before events start.",
      challenge: "Match skills and project interests in real time with persistent team state.",
      solution: "React and FastAPI stack on Supabase with PostgreSQL and Dockerized deployment.",
      impact: "Live team formation with project-aware matching.",
    },
    category: "Full-Stack",
    image: "/projects/teambanalo.webp",
    stack: ["React", "FastAPI", "Supabase"],
    highlights: ["Project matching", "Real-time sync", "Dockerized"],
    links: {
      github: "https://github.com/Mohammedbilal12345/TeamBanalo",
      demo: "https://teambanalo-frontend.onrender.com/",
    },
  },
  {
    slug: "ping-utility",
    title: "Ping Utility",
    impact: "Raw-socket ICMP diagnostics with RTT statistics, packet loss visualization, and traceroute.",
    story: {
      problem: "Standard ping tools hide implementation details needed for network debugging education.",
      challenge: "Implement ICMP from raw sockets with accurate timing and loss measurement.",
      solution: "Python raw-socket ICMP client with RTT aggregation and matplotlib visualization.",
      impact: "Low-level network diagnostics with statistical output.",
    },
    category: "Infra",
    image: "/projects/ping-utility.webp",
    stack: ["Python", "Raw Sockets", "ICMP"],
    highlights: ["Raw sockets", "RTT statistics", "Packet loss"],
    links: { github: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-" },
  },
];

export const flagship = projects.find((p) => p.rank === 1)!;
export const featuredSecondary = projects.filter((p) => p.rank === 2 || p.rank === 3);
export const archive = projects.filter((p) => !p.rank);
