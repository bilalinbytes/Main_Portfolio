import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Update document title for 404
    document.title = "Page Not Found | Mohammed Bilal – Software Engineer";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center dark:bg-[#0B1220]"
      role="main"
      aria-label="Page not found"
    >
      <div className="max-w-md">
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-teal-700 dark:text-teal-300">
          404 Error
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
          This page doesn't exist. Head back to Mohammed Bilal's portfolio to explore projects, skills, and
          experience.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-teal-500/30 bg-teal-500/10 px-5 py-3 text-sm font-semibold text-teal-800 transition hover:border-teal-500/60 dark:text-teal-100"
          aria-label="Return to Mohammed Bilal's portfolio homepage"
        >
          ← Mohammed Bilal's Portfolio
        </a>
      </div>
    </main>
  );
};

export default NotFound;
