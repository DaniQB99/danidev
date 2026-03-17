import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  FileText,
} from "lucide-react";

const Hero = () => {
  return (
    <header
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none transition-colors duration-500"></div>

      <div
        className={`z-10 w-full max-w-4xl flex flex-col items-center text-center animate-fade-in-up`}
      >
        <div className="mb-6 relative">
          {/* Avatar */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-900 shadow-[0_0_30px_rgba(6,182,212,0.15)] dark:shadow-[0_0_30px_rgba(6,182,212,0.2)] flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="./foto_dni.jpg"
              alt="Daniel Quirós"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://github.com/DaniQB99.png";
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-slate-100 dark:bg-slate-900 rounded-full p-2 transition-colors duration-300">
            <span className="flex h-4 w-4 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
          Daniel Quirós Barroso
        </h1>
        <h2 className="text-xl md:text-3xl text-cyan-500 dark:text-cyan-400 font-medium mb-6 transition-colors">
          Fullstack Developer & Especialista en Mecatrónica (IOT/Industrial)
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed transition-colors">
          Especializado en crear soluciones escalables con JavaScript y Python.
          Combino una sólida base lógica industrial con desarrollo de software e
          integración de agentes IA para optimizar la eficiencia y calidad del
          código.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/DaniQB99"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/daniel-quiros-barroso"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:daniqb99@icloud.com"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <Mail size={20} /> Contactar
          </a>
          <a
            href="/cv-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <FileText size={20} /> Abrir CV
          </a>
        </div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <MapPin size={16} /> Don Benito, Badajoz, España
        </div>
      </div>

      
    </header>
  );
};

export default Hero;
