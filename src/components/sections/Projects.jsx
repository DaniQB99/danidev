import React from "react";
import { Rocket, Github, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="animate-fade-in-up delay-300 scroll-mt-24"
    >
      <SectionHeading
        title="Proyectos Destacados"
        icon={<Rocket size={28} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (proj.demo !== "#") window.open(proj.demo, "_blank");
            }}
            className={`bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all group hover:-translate-y-1 shadow-sm dark:shadow-none ${
              proj.demo !== "#" ? "cursor-pointer" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {proj.title}
              </h3>
              {proj.status && (
                <span className="text-xs font-mono px-3 py-1 bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-500/20 whitespace-nowrap ml-4">
                  {proj.status}
                </span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {proj.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800/80 text-cyan-600 dark:text-cyan-200/70 rounded border border-slate-200 dark:border-transparent"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 border-t border-slate-100 dark:border-slate-800/50 pt-4 mt-auto">
              {proj.github !== "#" ? (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github size={18} /> Código
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <Github size={18} /> Código (Pronto)
                </span>
              )}

              {proj.demo !== "#" ? (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              ) : (
                <span className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-600 cursor-not-allowed">
                  <ExternalLink size={18} /> Demo (Pronto)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
