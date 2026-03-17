import React from "react";
import { Home, Star, Briefcase, FolderGit2, GraduationCap } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 safe-area-pb">
      <div className="flex items-center justify-around h-16 px-2">
        <a
          href="#inicio"
          className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
        >
          <Home size={20} />
          <span className="text-[10px] mt-1 font-medium">Inicio</span>
        </a>
        <a
          href="#skills"
          className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
        >
          <Star size={20} />
          <span className="text-[10px] mt-1 font-medium">Skills</span>
        </a>
        <a
          href="#experiencia"
          className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
        >
          <Briefcase size={20} />
          <span className="text-[10px] mt-1 font-medium">Lab</span>
        </a>
        <a
          href="#proyectos"
          className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
        >
          <FolderGit2 size={20} />
          <span className="text-[10px] mt-1 font-medium">Proyectos</span>
        </a>
        <a
          href="#formacion"
          className="flex flex-col items-center justify-center w-full h-full text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
        >
          <GraduationCap size={20} />
          <span className="text-[10px] mt-1 font-medium">Estudios</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
