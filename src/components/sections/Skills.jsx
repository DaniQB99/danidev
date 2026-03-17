import React from "react";
import { Terminal, Code2, Database, Wrench, Cpu } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { skills } from "../../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="animate-fade-in-up delay-100 scroll-mt-24">
      <SectionHeading
        title="Skills & Tecnologías"
        icon={<Terminal size={28} />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4 text-cyan-500 dark:text-cyan-400">
            <Code2 size={24} />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Frontend
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4 text-emerald-500 dark:text-emerald-400">
            <Database size={24} />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Backend & DB
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4 text-purple-500 dark:text-purple-400">
            <Wrench size={24} />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Herramientas
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none">
          <div className="flex items-center gap-3 mb-4 text-amber-500 dark:text-amber-400">
            <Cpu size={24} />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Soft Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
