import React from "react";
import { Briefcase } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { experiences } from "../../data/portfolioData";

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="animate-fade-in-up delay-200 scroll-mt-24"
    >
      <SectionHeading
        title="Experiencia Profesional"
        icon={<Briefcase size={28} />}
      />
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-500 shadow-sm md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-all group-hover:scale-110 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/30">
              {exp.icon}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="font-bold text-slate-800 dark:text-white text-lg">
                  {exp.role}
                </h3>
                <span className="text-sm text-cyan-600 dark:text-cyan-400 font-mono bg-cyan-100/50 dark:bg-cyan-950/50 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-slate-600 dark:text-slate-300 mb-3 font-medium">
                {exp.company}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
