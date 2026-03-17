import React from "react";

const Badge = ({ text }) => (
  <span
    className="px-3 py-1
    bg-white
    dark:bg-slate-800
    border
    border-slate-200
    dark:border-slate-700
    hover:border-cyan-500
    dark:hover:border-cyan-500
    text-slate-600
    dark:text-slate-300
    rounded-full
    text-sm
    transition-all
    duration-300
    cursor-default
    hover:text-cyan-500
    dark:hover:text-cyan-400
    hover:-translate-y-1
    hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]
    dark:hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
  >
    {text}
  </span>
);

export default Badge;
