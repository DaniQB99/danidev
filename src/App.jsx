import React, { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Footer from "./components/layout/Footer";
import MobileNav from "./components/layout/MobileNav";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initial animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Theme logic
  useEffect(() => {
    // Check user preference or system preference on load
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 font-sans selection:bg-cyan-500/30 transition-colors duration-300 pb-16 md:pb-0">
      {/* Custom Styles for Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `,
        }}
      />

      {/* Navbar Fixed */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-20 space-y-32">
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      {/* Footer */}
      <Footer />
      <MobileNav />
    </div>
  );
}
