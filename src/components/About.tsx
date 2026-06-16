import { Brain, Cloud, Code2, Database, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/bilal-profile.png";

const highlights = [
  { icon: Code2, title: "Software Engineering", text: "Clean code, practical features, APIs, and production-minded execution." },
  { icon: Database, title: "Backend Engineering", text: "REST APIs, authentication, CRUD systems, and data modeling." },
  { icon: Cloud, title: "Cloud Computing", text: "AWS, Bedrock, EC2, S3, Lambda, Docker, and cloud-aware project delivery." },
  { icon: Brain, title: "AI/ML Engineering", text: "Vertex AI, Scikit-learn, Pandas, NumPy, benchmarking, and model evaluation workflows." },
];

const whoIsMohammedBilal = [
  {
    title: "Software Engineer",
    description:
      "Mohammed Bilal is a Software Engineer with hands-on experience building REST APIs, full-stack web applications, and production-ready systems using React, Node.js, TypeScript, Python, and FastAPI.",
  },
  {
    title: "AI/ML Developer",
    description:
      "Mohammed Bilal works on applied machine learning projects using PyTorch, Scikit-learn, AWS Bedrock, and Google Vertex AI — from hackathon solvers to enterprise model benchmarking platforms.",
  },
  {
    title: "Full Stack Developer",
    description:
      "Mohammed Bilal builds end-to-end web applications with modern MERN and React + FastAPI stacks, including healthcare platforms, placement portals, and AI-powered developer tools.",
  },
  {
    title: "Cloud Enthusiast",
    description:
      "Mohammed Bilal actively works with AWS services including EC2, S3, Lambda, Bedrock, and cloud architecture patterns through industry projects and AWS certifications.",
  },
  {
    title: "DSA Practitioner",
    description:
      "Mohammed Bilal practises Data Structures and Algorithms with a focus on interview preparation for top software engineering roles at product-based companies.",
  },
  {
    title: "Problem Solver",
    description:
      "From networking simulations to fraud detection ML pipelines, Mohammed Bilal consistently tackles complex engineering problems with structured thinking and execution.",
  },
];

const About = () => {
  return (
    <>
      {/* ============ ABOUT SECTION ============ */}
      <section id="about" aria-labelledby="about-heading" className="section-shell section-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <span className="section-kicker">About Mohammed Bilal</span>
            <h2 id="about-heading">Mohammed Bilal – Profile</h2>
            <p>
              A compact snapshot of Mohammed Bilal's background, technical direction, and project strengths.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
            <aside className="premium-card p-4 text-center sm:p-5">
              <img
                src={profileImage}
                alt="Mohammed Bilal – Software Engineer and AI/ML Developer, PES University Bengaluru"
                width={112}
                height={112}
                loading="lazy"
                decoding="async"
                className="mx-auto h-28 w-28 rounded-full border border-slate-200 object-cover shadow-md dark:border-white/10"
              />
              <h3 className="text-main mt-4 text-xl font-semibold sm:text-2xl">Mohammed Bilal</h3>
              <p className="mt-2 text-base font-medium text-teal-700 dark:text-teal-300">
                Software Engineer · AI/ML Developer
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">PES University, Bengaluru</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a
                  href="mailto:mohammedbilal96654@gmail.com"
                  aria-label="Email Mohammed Bilal"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-bilal-23678328a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mohammed Bilal on LinkedIn"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </aside>

            <div className="premium-card p-4 sm:p-6">
              <h3 className="text-main text-xl font-semibold sm:text-2xl">Mohammed Bilal — software engineer in progress.</h3>
              <div className="text-soft mt-4 space-y-4 text-sm leading-6 sm:text-base sm:leading-7">
                <p>
                  Mohammed Bilal is a Computer Science &amp; Engineering student at PES University, Bengaluru, with a
                   distinction awards, and hands-on work across backend systems, cloud-aware application
                  design, applied AI/ML, and practical project execution.
                </p>
                <p>
                  Mohammed Bilal's recent work includes the CoreStack industry capstone, ModelMatrix, where he is
                  building AI model benchmarking and recommendation workflows with AWS Bedrock, Google Vertex AI, and
                  FastAPI services.
                </p>
                <p>
                  Mohammed Bilal also developed SaansSync through an AIIMS Delhi collaboration, building patient and
                  clinician flows for respiratory care with role-based access, symptom tracking, medication monitoring,
                  and risk signals.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.title} className="premium-card p-4 sm:p-5">
                <item.icon className="mb-5 h-7 w-7 text-teal-600 dark:text-teal-300" aria-hidden="true" />
                <h3 className="text-main text-lg font-semibold">{item.title}</h3>
                <p className="text-copy-muted mt-3 text-sm leading-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHO IS MOHAMMED BILAL? (SEO SECTION) ============ */}
      <section
        id="who-is-mohammed-bilal"
        aria-labelledby="who-heading"
        className="section-shell section-primary"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="section-heading">
            <span className="section-kicker">Personal Brand</span>
            <h2 id="who-heading">Who is Mohammed Bilal?</h2>
            <p>
              Mohammed Bilal is a Software Engineer, AI/ML Developer, and Full Stack Developer from PES University,
              Bengaluru — building scalable systems, machine learning applications, and cloud-native software.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoIsMohammedBilal.map((item) => (
              <article key={item.title} className="premium-card p-5">
                <h3 className="text-main text-lg font-semibold">
                  Mohammed Bilal – {item.title}
                </h3>
                <p className="text-copy-muted mt-3 text-sm leading-6">{item.description}</p>
              </article>
            ))}
          </div>

          {/* Hidden SEO text block – visible and crawlable, subtle styling */}
          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-main text-lg font-semibold">About Mohammed Bilal</h3>
            <p className="text-copy-muted mt-3 text-sm leading-7">
              Mohammed Bilal is a final-year Computer Science &amp; Engineering student at PES University, Bengaluru,
              India. He is actively building projects at the intersection of software engineering, machine learning, and
              cloud computing. Mohammed Bilal's portfolio includes real-world collaborations — an AI model benchmarking
              platform (CoreStack capstone) and a respiratory care application developed with AIIMS Delhi. As a Full
              Stack Developer, Mohammed Bilal works across the React, Node.js, Python, and AWS ecosystem. His interest
              in DSA and system design drives his preparation for software engineering roles at top product companies.
              Searching for Mohammed Bilal Software Engineer, Mohammed Bilal AI Engineer, Mohammed Bilal Portfolio, or
              Mohammed Bilal PES University will lead you here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
