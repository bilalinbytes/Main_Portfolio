const skillCategories = [
  { title: "Core CS", skills: ["DSA", "OOP", "DBMS", "OS", "Networks", "System Design"] },
  { title: "Languages", skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Authentication"] },
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"] },
  { title: "Cloud & DevOps", skills: ["AWS", "EC2", "S3", "Lambda", "Bedrock", "Docker", "CI/CD"] },
  { title: "AI/ML", skills: ["Vertex AI", "Scikit-Learn", "Pandas", "NumPy", "Model Evaluation"] },
  { title: "Networking & Tools", skills: ["TCP/IP", "HTTP/HTTPS", "ICMP", "Wireshark", "Linux", "Git", "GitHub", "Jira"] },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell section-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Technical Stack</span>
          <h2>Skills mapped to top-company interviews</h2>
          <p>Core CS, backend implementation, project depth, and applied AI/ML tools in a recruiter-scannable format.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="premium-card p-5">
              <h3 className="text-main text-lg font-semibold">{category.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-teal-500/25 bg-teal-500/10 px-3 py-1.5 text-sm font-medium text-teal-800 dark:text-teal-100">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
