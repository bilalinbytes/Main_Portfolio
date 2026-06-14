import { Award, Calendar, GraduationCap } from "lucide-react";

const coursework = [
  "Automata Formal Languages and Logic",
  "Blockchain",
  "Cloud Computing",
  "Compiler Design",
  "Computer Networks",
  "DBMS",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Digital Design and Computer Organisation",
  "Linear Algebra and its Applications",
  "Machine Learning",
  "Microprocessor and Computer Architecture",
  "Object Oriented Analysis and Design",
  "Operating Systems",
  "Statistics for Data Science",
  "Web Technology",
  "Computer Network Security",
  "Cryptography",
  "Software Engineering",
];

const certifications = [
  {
    name: "AIIMS Delhi Collaboration Certificate",
    href: "https://drive.google.com/file/d/1V25BEDX2Wm8gsVd-Bf0WHQczfGRmH6C-/view?usp=sharing",
  },
  { name: "AWS Educate - Machine Learning Foundations" },
  { name: "Generative AI with AWS" },
  { name: "AWS APAC Solutions Architecture Job Simulation" },
  { name: "HackerRank Python" },
  { name: "HackerRank React" },
  { name: "HackerRank Problem Solving" },
];

const Education = () => {
  return (
    <section id="education" className="section-shell section-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Education</span>
          <h2>Computer Science foundation</h2>
          <p>Academic training and continuous learning aligned with SDE and AI/ML interview expectations.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="premium-card p-6">
            <GraduationCap className="mb-6 h-8 w-8 text-teal-600 dark:text-teal-300" />
            <h3 className="text-main text-2xl font-semibold">B.E. Computer Science & Engineering</h3>
            <p className="mt-3 text-lg font-medium text-teal-700 dark:text-teal-300">PES University</p>
            <div className="text-copy-muted mt-5 flex items-center gap-2">
              <Calendar size={18} />
              <span>Expected Graduation: 2027</span>
            </div>
          </div>

          <div className="premium-card p-6 lg:col-span-2">
            <h3 className="text-main text-lg font-semibold">Relevant Coursework</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {coursework.map((course) => (
                <span key={course} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
                  {course}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-slate-200 pt-6 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                <h3 className="text-main text-lg font-semibold">Certifications & Practice</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  certification.href ? (
                    <a
                      key={certification.name}
                      href={certification.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-teal-500/20 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-800 transition hover:border-teal-500/50 dark:text-teal-100"
                    >
                      {certification.name}
                    </a>
                  ) : (
                    <span key={certification.name} className="rounded-md border border-teal-500/20 bg-teal-500/10 px-3 py-2 text-sm font-medium text-teal-800 dark:text-teal-100">
                      {certification.name}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
