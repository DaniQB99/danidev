import React from "react";
import { Wrench, Cpu, Code2 } from "lucide-react";

export const skills = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Python", "Node.js", "MySQL", "PostgreSQL", "Supabase"],
  tools: ["GitHub & Git", "Vite", "Astro", "Prompt Engineering", "IA Agents"],
  soft: [
    "Resolución de problemas",
    "Adaptabilidad",
    "Trabajo en equipo",
    "Lógica secuencial",
  ],
};

export const experiences = [
  {
    role: "Técnico electromecánico",
    company: "Conesa Group",
    period: "2025 - Actualidad",
    description:
      "Mantenimiento preventivo y correctivo de maquinaria industrial. Reparación de averías, optimización de procesos y mejoras en la línea de producción.",
    icon: <Wrench size={20} />,
  },
  {
    role: "Técnico de Mantenimiento - Maquinista",
    company: "Icap (Laundry Care)",
    period: "2024 - 2025",
    description:
      "Análisis y corrección de fallos, mantenimiento preventivo y correctivo en la línea de producción. Optimización de procesos, control y gestión de la materia prima y producto terminado.",
    icon: <Cpu size={20} />,
  },
  {
    role: "Técnico electromecánico",
    company: "GBFoods",
    period: "2023",
    description:
      "Mantenimiento preventivo y correctivo, y optimización de procesos de maquinaria industrial.",
    icon: <Wrench size={20} />,
  },
  {
    role: "Becario Fullstack",
    company: "Ibermática",
    period: "Mar 2019 - Jun 2019",
    description:
      "Desarrollo de funciones básicas con HTML/CSS, JavaScript y SQL. Gestión y realización de consultas a bases de datos relacionales (SQL) para la visualización de datos. Análisis de documentación técnica e integración en flujos de trabajo de equipo de desarrollo de software.",
    icon: <Code2 size={20} />,
  },
];

export const educations = [
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    center: "Universidad Alfonso X El Sabio (Online)",
    period: "2025 - 2027",
  },
  {
    title: "Técnico Superior en Mecatrónica Industrial",
    center: "C.I.F.P. Rodríguez Fabrés",
    period: "2021 - 2023",
  },
  {
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataformas",
    center: "I.E.S. Donoso Cortés",
    period: "2017 - 2019",
  },
];

export const certificates = [
  {
    name: "Iniciación al desarrollo con IA",
    date: "Marzo 2026",
    entity: "BIG school",
    url: "/iniciacion-ia-big-school.pdf",
  },
  {
    name: "IA Heroes Live (Iniciación en IA)",
    date: "Marzo 2026",
    entity: "Learning Heroes",
    url: "/ia-heroes-live.pdf",
  },
  {
    name: "Google: Inteligencia Artificial y Productividad",
    date: "Mayo 2025",
    entity: "Google",
    url: "/ia-google.pdf",
  },
  {
    name: "Python desde Cero",
    date: "Enero 2025",
    entity: "Mouredev Pro",
    url: "/mouredevpro-python-desde-0.pdf",
  },
  {
    name: "Everis BootCAMP: Spring Framework & Angular",
    date: "Marzo 2020",
    entity: "Everis (NTT Data)",
    url: "/bootcamp-everis-ntt-data.pdf",
  },
];

export const projects = [
  {
    title: "Wallet.ia",
    description:
      "Aplicación PWA de gestión financiera para parejas. Permite el control de gastos personales y compartidos con sincronización en tiempo real y autenticación segura.",
    tags: ["React", "Vite", "Supabase", "PWA", "Tailwind CSS"],
    github: "https://github.com/DaniQB99/wallet.ia",
    demo: "https://wallet-ia-k1sc.vercel.app/",
    status: "En proceso",
  }
];
