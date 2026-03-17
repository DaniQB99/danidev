import React from "react";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { educations, certificates } from "../../data/portfolioData";

const Education = () => {
  return (
    <section
      id="formacion"
      className="animate-fade-in-up delay-400 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <SectionHeading
            title="Formación"
            icon={<GraduationCap size={28} />}
          />
          <div className="space-y-6">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="group flex gap-4 bg-white dark:bg-slate-900/30 p-5 rounded-xl border border-slate-200 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 shrink-0 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-slate-800 dark:text-white font-semibold text-md leading-tight mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                    {edu.center}
                  </p>
                  <span className="text-xs text-slate-500 font-mono">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div id="certificados">
          <SectionHeading title="Certificaciones" icon={<Award size={28} />} />
          <div className="space-y-4">
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all group cursor-pointer shadow-sm dark:shadow-none hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10"
              >
                <div>
                  <h4 className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    {cert.name}
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500"
                    />
                  </h4>
                  <p className="text-sm text-slate-500">{cert.entity}</p>
                </div>
                <span className="text-xs text-cyan-600 dark:text-cyan-500 font-mono px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 rounded">
                  {cert.date}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
