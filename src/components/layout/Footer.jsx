import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-950 py-10 mt-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Daniel Quirós Barroso.
        </div>
        <div className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
          Construido con{" "}
          <span className="text-cyan-600 dark:text-cyan-400">React</span> &{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
