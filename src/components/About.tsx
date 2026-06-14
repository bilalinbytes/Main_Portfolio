import { Brain, Cloud, Code2, Database, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/bilal-profile.png";

const highlights = [
  { icon: Code2, title: "Software Engineering", text: "Clean code, practical features, APIs, and production-minded execution." },
  { icon: Database, title: "Backend Engineering", text: "REST APIs, authentication, CRUD systems, and data modeling." },
  { icon: Cloud, title: "Cloud Computing", text: "AWS, Bedrock, EC2, S3, Lambda, Docker, and cloud-aware project delivery." },
  { icon: Brain, title: "AI/ML Engineering", text: "Vertex AI, Scikit-learn, Pandas, NumPy, benchmarking, and model evaluation workflows." },
];

const About = () => {
  return (
    <section id="about" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">About</span>
          <h2>Profile</h2>
          <p>A compact snapshot of my background, technical direction, and project strengths.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <aside className="premium-card p-5 text-center">
            <img
              src={profileImage}
              alt="Mohammed Bilal"
              className="mx-auto h-28 w-28 rounded-full border border-slate-200 object-cover shadow-md dark:border-white/10"
            />
            <h3 className="text-main mt-4 text-2xl font-semibold">Mohammed Bilal</h3>
            <p className="mt-2 text-base font-medium text-teal-700 dark:text-teal-300">Final-Year CSE Student</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <a
                href="mailto:mohammedbilal96654@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-bilal-23678328a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </aside>

          <div className="premium-card p-6">
            <h3 className="text-main text-2xl font-semibold">Software engineer in progress.</h3>
            <div className="text-soft mt-4 space-y-4 text-base leading-7">
              <p>
                I am Mohammed Bilal, a Computer Science & Engineering student at PES University with a 7.60 CGPA,
                distinction awards, and hands-on work across backend systems, cloud-aware application design, applied
                AI/ML, and practical project execution.
              </p>
              <p>
                My recent work includes the CoreStack industry capstone, ModelMatrix, where I am building AI model
                benchmarking and recommendation workflows with AWS Bedrock, Google Vertex AI, and FastAPI services.
              </p>
              <p>
                I also developed SaansSync through an AIIMS Delhi collaboration, building patient and clinician flows for
                respiratory care with role-based access, symptom tracking, medication monitoring, and risk signals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="premium-card p-5">
              <item.icon className="mb-5 h-7 w-7 text-teal-600 dark:text-teal-300" />
              <h3 className="text-main text-lg font-semibold">{item.title}</h3>
              <p className="text-copy-muted mt-3 text-sm leading-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
