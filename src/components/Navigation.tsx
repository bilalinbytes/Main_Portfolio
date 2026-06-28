import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-teal-900/10 bg-white/92 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1220]/88 dark:shadow-black/20"
          : "border-transparent bg-white/80 backdrop-blur-md dark:bg-[#0B1220]/70"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 min-[380px]:px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Mohammed Bilal – Home" className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
          <span className="rounded-lg border border-teal-500/30 bg-teal-500/10 px-2 py-1 font-mono text-teal-700 dark:text-teal-300 min-[380px]:px-2.5" aria-hidden="true">&lt;/&gt;</span>
          <span>Mohammed Bilal</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-teal-50 hover:text-teal-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-teal-500/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-white"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 transition hover:border-teal-500/40 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-white lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-slate-200 bg-white/96 px-3 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1220]/96 min-[380px]:px-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
