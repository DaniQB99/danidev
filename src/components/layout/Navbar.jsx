import React from "react";
import { Code2, Sun, Moon } from "lucide-react";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Code2 className="text-cyan-500 w-6 h-6" />
          <span>DQB</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#inicio"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#experiencia"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#proyectos"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#formacion"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            Formación
          </a>
        </div>

        {/* Custom Theme Toggle Switch */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none flex items-center shadow-inner overflow-hidden ${
            isDarkMode
              ? "bg-slate-800 shadow-slate-900 border border-slate-700"
              : "bg-slate-200 shadow-slate-300 border border-slate-300"
          }`}
        >
          {/* Background Icons (Visible behind the moving knob) */}
          <div className="absolute w-full flex justify-between px-[6px] text-xs pointer-events-none">
            <Sun className="text-amber-500/50 dark:text-slate-400 w-4 h-4 ml-1" />
            <Moon className="text-slate-400 dark:text-blue-400/50 w-4 h-4 mr-0.5" />
          </div>

          {/* Moving Toggle Knob */}
          <div
            className={`absolute w-8 h-8 rounded-full shadow-md flex items-center justify-center transition-transform duration-500 transform ${
              isDarkMode
                ? "translate-x-8 bg-[#4D80DF] shadow-blue-500/40 border-2 border-slate-800 scale-105"
                : "translate-x-0 bg-[#FF9D00] shadow-orange-500/40 border-2 border-slate-200 scale-105"
            }`}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              {isDarkMode ? (
                <Moon
                  className="w-4 h-4 text-white opacity-100 absolute drop-shadow-sm"
                  strokeWidth={2.5}
                />
              ) : (
                <Sun
                  className="w-4 h-4 text-white opacity-100 absolute drop-shadow-sm"
                  strokeWidth={2.5}
                />
              )}
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
