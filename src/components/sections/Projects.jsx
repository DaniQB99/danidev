import React from "react";
import {
  Rocket,
  Github,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "../../data/portfolioData";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="animate-fade-in-up delay-300 scroll-mt-24"
    >
      <SectionHeading
        title="Proyectos Destacados"
        icon={<Rocket size={28} />}
      />

      {/* Featured Projects Showcase */}
      <div className="space-y-12">
        {featuredProjects.map((proj, idx) => (
          <article
            key={proj.title || idx}
            className="group relative bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 p-6 md:p-8 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 overflow-hidden"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100/90 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-300 border border-cyan-300/60 dark:border-cyan-800/60 shadow-sm">
                    <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400 animate-pulse" />
                    {proj.badge || "Featured Case Study"}
                  </span>
                  {proj.subtitle && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline-block">
                      {proj.subtitle}
                    </span>
                  )}
                </div>

                {proj.status && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {proj.status}
                  </span>
                )}
              </div>

              {/* Banner Visual Display */}
              {proj.image && (
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 group/banner shadow-md">
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden"
                  >
                    <img
                      src={proj.image}
                      alt={`Banner de ${proj.title}`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/banner:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover/banner:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900/85 text-white shadow-lg backdrop-blur-md border border-white/20">
                        Ver Showcase <ArrowUpRight size={14} className="text-cyan-400" />
                      </span>
                    </div>
                  </a>
                </div>
              )}

              {/* Title & Description */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {proj.title}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Key Architectural Highlights */}
              {proj.highlights && proj.highlights.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {proj.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5"
                      />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags / Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/70 mt-2">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <ExternalLink size={18} />
                    <span>Demo en vivo</span>
                  </a>
                )}

                {proj.appUrl && (
                  <a
                    href={proj.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <Smartphone size={18} />
                    <span>App Oficial</span>
                  </a>
                )}

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-sm"
                  >
                    <Github size={18} />
                    <span>Código (Showcase)</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other Projects Grid (if any) */}
      {otherProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {otherProjects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (proj.demo && proj.demo !== "#") window.open(proj.demo, "_blank");
              }}
              className={`bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all group hover:-translate-y-1 shadow-sm dark:shadow-none ${
                proj.demo && proj.demo !== "#" ? "cursor-pointer" : ""
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
                {proj.github && proj.github !== "#" ? (
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

                {proj.demo && proj.demo !== "#" ? (
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
      )}
    </section>
  );
};

export default Projects;
