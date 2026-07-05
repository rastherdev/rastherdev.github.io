import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    downloadCv: "Download Resume",
  },
  hero: {
    terminalLines: [
      "$ php artisan inspire",
      '> "Simplicity is the ultimate sophistication." — Leonardo da Vinci',
      "$ composer install --no-dev --optimize-autoloader",
      "[████████████████████] 100%  Packages installed",
      "$ php artisan serve --port=443",
      "[Laravel] Development server started: https://giovany.dev",
      "",
    ],
    greeting: "Hi, I'm",
    name: "Giovany Domínguez",
    title: "Laravel Backend Developer",
    tagline:
      "I build scalable and robust applications using Laravel, asynchronous queues, microservices, and design patterns. Focused on performance, security, and long-term maintainability.",
    viewProjects: "View Projects",
    downloadCv: "Download Resume",
    statTech: "Technologies",
  },
  about: {
    heading: "About Me",
    bio: [
      "I'm a backend developer passionate about crafting clean, maintainable code that stands the test of time. With over three years of experience building SaaS platforms, I've learned that the best software isn't just functional — it's a joy to work with, both for users and for the developers who maintain it.",
      "I specialize in the Laravel ecosystem, but I'm always exploring new patterns and technologies. Whether it's designing a multi-tenant database architecture, optimizing queue workers for heavy workloads, or migrating legacy systems — I thrive on solving complex backend challenges.",
      "When I'm not coding, you'll find me exploring the beautiful landscapes of Michoacán, contributing to open-source projects, or diving into a good book on software architecture.",
    ],
    quickFacts: [
      { label: "Location", value: "Michoacán, México" },
      { label: "Experience", value: "3+ years" },
      { label: "Focus", value: "Laravel, PHP, Cloud" },
      { label: "Interests", value: "Architecture, DX, OSS" },
    ],
  },
  skills: {
    heading: "Tech Stack",
    categories: [
      { key: "languages", label: "Languages" },
      { key: "frameworks", label: "Frameworks" },
      { key: "databases", label: "Databases" },
      { key: "devops", label: "DevOps & Cloud" },
      { key: "patterns", label: "Design Patterns" },
      { key: "tools", label: "Tools" },
    ],
  },
  experience: {
    heading: "Experience",
    present: "Present",
    achievementsLabel: "Key Achievements",
    responsibilitiesLabel: "Responsibilities",
    currentBadge: "Current",
  },
  projects: {
    heading: "Featured Projects",
    viewProject: "View Project",
    viewCode: "View Code",
    close: "Close",
    techStack: "Tech Stack",
    problem: "Problem",
    solution: "Solution",
    gallery: "Gallery",
    featuredBadge: "Flagship",
  },
  contact: {
    heading: "Let's Connect",
    status: "Open to new opportunities",
    subtitle:
      "I'm always open to new opportunities and interesting conversations. Whether you're hiring, collaborating, or just want to chat about backend architecture — reach out!",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Download Resume",
  },
  footer: {
    copyright: "© 2026 Giovany Domínguez. Built with Astro & GSAP.",
    backToTop: "Back to top ↑",
  },
  cv: {
    title: "Curriculum Vitae",
    subtitle: "Giovany Domínguez — Laravel Backend Developer",
    professionalSummary: "Professional Summary",
    summaryText:
      "Backend developer with 3+ years of experience building scalable SaaS applications using Laravel and PHP. Specialized in multi-tenant architectures, asynchronous queue systems, and performance optimization. Experienced in migrating legacy systems and designing robust APIs. Based in Michoacán, México.",
    technicalSkills: "Technical Skills",
    professionalExperience: "Professional Experience",
    projects: "Featured Projects",
    education: "Education",
    languages: "Languages",
    contactInfo: "Contact",
    downloadPdf: "Download PDF",
    print: "Print CV",
  },
};

export default en;
