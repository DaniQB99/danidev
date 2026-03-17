import React from "react";

const SectionHeading = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg text-cyan-500 dark:text-cyan-400 transition-colors">
      {icon}
    </div>
    <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 transition-colors">
      {title}
    </h2>
    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 ml-4 transition-colors"></div>
  </div>
);

export default SectionHeading;
