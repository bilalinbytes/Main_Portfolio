import { Award, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ModelMatrix - CoreStack Capstone",
    description: "AI model benchmarking and recommendation platform using AWS Bedrock and Google Vertex AI, with FastAPI services for prompt analysis, governance insights, and enterprise model evaluation.",
    focus: ["FastAPI", "AWS Bedrock", "Vertex AI", "React", "Model Evaluation"],
    github: "https://github.com/Capstone-82",
  },
  {
    title: "SaansSync - AIIMS Delhi Collaboration",
    description: "Respiratory care platform for patient and clinician workflows, symptom tracking, medication monitoring, appointments, multilingual access, and risk signals using SpO2, AQI, and symptom trends.",
    focus: ["React", "Node.js", "Healthcare", "Role-Based Access", "AIIMS Delhi"],
    github: "https://github.com/bilalinbytes/webversionSS",
    demo: "https://webversion10.vercel.app/login",
    certificate: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
  },
  {
    title: "Perishables Management System",
    description: "Semester 5 software engineering project for retail perishables such as fruits and vegetables, built with formal Scrum workflow, Jira tracking, Git branching, CI/CD practices, API work, reviews, merges, and full-marks evaluation.",
    focus: ["Software Engineering", "Jira", "Git Workflow", "CI/CD", "APIs"],
    github: "https://github.com/bilalinbytes/Perishable-Management-System",
  },
  {
    title: "Hangman AI Solver",
    description: "Machine learning hackathon project combining Hidden Markov Models, word filtering, and a PyTorch Deep Q-Network to solve Hangman with a 94.40% success rate across 2,000 test games.",
    focus: ["Python", "PyTorch", "HMM", "Deep RL", "DQN"],
    github: "https://github.com/bilalinbytes/Machine-Learning-Hackathon-Hangman",
  },
  {
    title: "CareerSphere - Campus Placement Portal",
    description: "DBMS mini project for a campus placement platform with role-based Admin, Student, and Recruiter flows, job applications, recruiter approval, analytics, MySQL/SQLite support, triggers, procedures, transactions, and constraints.",
    focus: ["Python", "Streamlit", "MySQL", "SQLite", "DBMS"],
    github: "https://github.com/bilalinbytes/DBMS_MINI_PROJECT_F_344_347",
  },
  {
    title: "Coding Fingerprint",
    description: "Machine learning system that analyzes code style, tokens, indentation, and structural patterns to predict a programmer's competitive programming rank and country from 25,000+ Codeforces samples.",
    focus: ["Python", "Scikit-Learn", "Flask", "Streamlit", "TF-IDF"],
    github: "https://github.com/bilalinbytes/Coding-Fingerprint",
  },
  {
    title: "Classroom Networking Simulation",
    description: "Cisco Packet Tracer simulation of a secure classroom network with DHCP, VLAN segmentation, VPN access, ASA firewall, routing, switching, servers, printers, and smartboard connectivity.",
    focus: ["Cisco Packet Tracer", "DHCP", "VLAN", "VPN", "Firewall"],
    github: "https://github.com/bilalinbytes/CLASSROOM_NETWORKING",
  },
  {
    title: "Securite System",
    description: "Full-stack e-commerce platform for security products with authentication, product flows, payment integration, and admin-ready architecture.",
    focus: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
    demo: "https://ecommerce-website-mern-five.vercel.app/",
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning app for identifying suspicious transactions with preprocessing, model evaluation, and a Streamlit interface for testing predictions.",
    focus: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection",
  },
  {
    title: "Team Banalo",
    description: "Hackathon team-formation platform with project matching, collaboration flows, and a modern full-stack structure for real users.",
    focus: ["React", "TypeScript", "FastAPI", "Supabase", "Docker"],
    github: "https://github.com/Mohammedbilal12345/TeamBanalo",
    demo: "https://teambanalo-frontend.onrender.com/",
  },
  {
    title: "CodeMentor AI",
    description: "AI-powered code review assistant that analyzes source code, explains issues, and returns practical improvement suggestions.",
    focus: ["React", "Express", "Gemini API", "PrismJS"],
    github: "https://github.com/Mohammedbilal12345/CodeMentorAI-",
  },
  {
    title: "Custom Ping Utility",
    description: "Networking utility for ICMP testing, analysis, and visualization, built to show systems thinking beyond frontend work.",
    focus: ["Python", "Raw Sockets", "Networking", "Matplotlib"],
    github: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-",
  },
  {
    title: "CV Sensei",
    description: "Resume evaluator using NLP and PDF parsing to score resumes and surface role-specific improvement signals.",
    focus: ["Streamlit", "NLP", "Transformers", "PyMuPDF"],
    github: "https://github.com/Mohammedbilal12345/-CV-Sensei",
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
                <h3 className="text-main break-words text-lg font-semibold sm:text-xl" itemProp="name">{project.title}</h3>
                <p className="text-copy-muted mt-3 text-sm leading-6 md:min-h-28" itemProp="description">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.focus.map((tech) => (
                    <span key={tech} className="max-w-full break-words rounded-md border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 text-xs font-medium text-teal-800 dark:text-teal-100" itemProp="programmingLanguage">
                      {tech}
                    </span>
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
