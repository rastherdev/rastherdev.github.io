import type { Dictionary } from "./types";

const es: Dictionary = {
  nav: {
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    downloadCv: "Descargar CV",
  },
  hero: {
    terminalLines: [
      "$ php artisan inspire",
      '> "La simplicidad es la máxima sofisticación." — Leonardo da Vinci',
      "$ composer install --no-dev --optimize-autoloader",
      "[████████████████████] 100%  Paquetes instalados",
      "$ php artisan serve --port=443",
      "[Laravel] Servidor iniciado: https://giovany.dev",
      "",
    ],
    greeting: "Hola, soy",
    name: "Giovany Domínguez",
    title: "Laravel Backend Developer",
    tagline:
      "Construyo aplicaciones escalables y robustas utilizando Laravel, colas asíncronas, microservicios y patrones de diseño. Enfocado en rendimiento, seguridad y mantenibilidad a largo plazo.",
    viewProjects: "Ver Proyectos",
    downloadCv: "Descargar CV",
  },
  about: {
    heading: "Sobre Mí",
    bio: [
      "Soy un desarrollador backend apasionado por crear código limpio y mantenible que resista el paso del tiempo. Con más de tres años de experiencia construyendo plataformas SaaS, he aprendido que el mejor software no solo es funcional — es un placer trabajar con él, tanto para los usuarios como para los desarrolladores que le dan mantenimiento.",
      "Me especializo en el ecosistema Laravel, pero siempre estoy explorando nuevos patrones y tecnologías. Ya sea diseñando una arquitectura multi-tenant, optimizando workers de colas para cargas pesadas o migrando sistemas legacy — disfruto resolviendo desafíos complejos de backend.",
      "Cuando no estoy programando, me encontrarás explorando los hermosos paisajes de Michoacán, contribuyendo a proyectos open-source o sumergido en un buen libro de arquitectura de software.",
    ],
    quickFacts: [
      { label: "Ubicación", value: "Michoacán, México" },
      { label: "Experiencia", value: "3+ años" },
      { label: "Enfoque", value: "Laravel, PHP, Cloud" },
      { label: "Intereses", value: "Arquitectura, DX, OSS" },
    ],
  },
  skills: {
    heading: "Stack Tecnológico",
    categories: [
      { key: "languages", label: "Lenguajes" },
      { key: "frameworks", label: "Frameworks" },
      { key: "databases", label: "Bases de Datos" },
      { key: "devops", label: "DevOps & Cloud" },
      { key: "tools", label: "Herramientas" },
    ],
  },
  experience: {
    heading: "Experiencia",
    present: "Actualidad",
    achievementsLabel: "Logros Clave",
  },
  projects: {
    heading: "Proyectos Destacados",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código",
    close: "Cerrar",
    techStack: "Tecnologías",
    problem: "Problema",
    solution: "Solución",
  },
  contact: {
    heading: "Conectemos",
    subtitle:
      "Siempre estoy abierto a nuevas oportunidades y conversaciones interesantes. Ya sea que estés contratando, colaborando o simplemente quieras charlar sobre arquitectura backend — ¡escríbeme!",
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
  },
  footer: {
    copyright: "© 2026 Giovany Domínguez. Hecho con Astro & GSAP.",
    backToTop: "Volver arriba ↑",
  },
  cv: {
    title: "Curriculum Vitae",
    subtitle: "Giovany Domínguez — Laravel Backend Developer",
    professionalSummary: "Resumen Profesional",
    summaryText:
      "Desarrollador backend con más de 3 años de experiencia construyendo aplicaciones SaaS escalables con Laravel y PHP. Especializado en arquitecturas multi-tenant, sistemas de colas asíncronas y optimización de rendimiento. Con experiencia en migración de sistemas legacy y diseño de APIs robustas. Resido en Michoacán, México.",
    technicalSkills: "Habilidades Técnicas",
    professionalExperience: "Experiencia Profesional",
    projects: "Proyectos Destacados",
    education: "Educación",
    languages: "Idiomas",
    contactInfo: "Contacto",
    downloadPdf: "Descargar PDF",
    print: "Imprimir CV",
  },
};

export default es;
