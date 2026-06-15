import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "mohammedbilal96654@gmail.com",
    link: "mailto:mohammedbilal96654@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 93707 78994",
    link: "tel:+919370778994",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bengaluru, India",
    link: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    text: "Projects and code",
    href: "https://github.com/Mohammedbilal12345",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    text: "Professional profile",
    href: "https://www.linkedin.com/in/mohammed-bilal-23678328a/",
  },
];

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-shell section-secondary">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="section-kicker">Contact Mohammed Bilal</span>
          <h2 id="contact-heading">Contact Mohammed Bilal</h2>
          <p>Reach out to Mohammed Bilal for SDE internship opportunities, AI/ML roles, project collaboration, or placement conversations.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="premium-card p-4 sm:p-6">
            <h3 className="text-main text-xl font-semibold">Contact Info</h3>
            <div className="mt-5 space-y-3">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="subtle-panel flex min-h-16 items-start gap-3 p-3 transition hover:border-teal-500/40 sm:gap-4 sm:p-4"
                >
                  <info.icon className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                  <span className="min-w-0">
                    <span className="text-main block text-sm font-semibold">{info.title}</span>
                    <span className="text-copy-muted block break-words text-sm">{info.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="premium-card p-4 sm:p-6">
            <h3 className="text-main text-xl font-semibold">Find Me Online</h3>
            <div className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subtle-panel flex min-h-16 items-start gap-3 p-3 transition hover:border-teal-500/40 sm:gap-4 sm:p-4"
                >
                  <social.icon className="h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                  <span className="min-w-0">
                    <span className="text-main block text-sm font-semibold">{social.label}</span>
                    <span className="text-copy-muted block text-sm">{social.text}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="text-copy-muted mt-8 border-t border-slate-200 pt-6 text-center text-sm dark:border-white/10 sm:mt-12">
          <p>
            &copy; 2026{" "}
            <a href="https://www.mohammedbilal.me/" className="font-medium text-teal-700 hover:underline dark:text-teal-300">
              Mohammed Bilal
            </a>{" "}
            · Software Engineer &amp; AI/ML Developer · PES University, Bengaluru · Built with React and Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
