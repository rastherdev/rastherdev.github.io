import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    home: "Home",
    mainNavigation: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    downloadCv: "Download Resume",
  },
  hero: {
    terminalCommands: [
      { command: 'echo "Laravel · PostgreSQL · Redis"', output: "Laravel · PostgreSQL · Redis" },
      { command: 'echo "PostgreSQL database per client"', output: "PostgreSQL database per client" },
      { command: 'echo "Redis queues: payroll + bulk processing"', output: "Redis queues: payroll + bulk processing" },
      { command: 'echo "Open to new opportunities"', output: "Open to new opportunities" },
    ],
    greeting: "Hi, I'm",
    name: "Giovany Domínguez",
    title: "Laravel Backend Developer",
    tagline:
      "I build Laravel backend systems for production, with PostgreSQL data isolation, Redis-backed queues, and careful migration of legacy features.",
    viewProjects: "View Projects",
    downloadCv: "Download Resume",
  },
  about: {
    heading: "About Me",
    bio: [
      "I build Laravel backend services for a production agribusiness ERP. The system uses a separate PostgreSQL database per client and Redis-backed queues for payroll calculations and bulk processing.",
      "My work includes REST APIs, data modeling, query optimization, legacy feature migrations, and Linux VPS administration. I also developed institutional ERP modules for the Government of Lagunillas with CodeIgniter 4 and MySQL.",
    ],
    quickFacts: [
      { label: "Location", value: "Michoacán, México" },
      { label: "Experience", value: "3+ years" },
      { label: "Focus", value: "Laravel, PostgreSQL, Redis" },
      { label: "Languages", value: "Spanish (native), English (B2)" },
    ],
  },
  skills: {
    heading: "Tech Stack",
    categories: [
      { key: "languages", label: "Languages" },
      { key: "frameworks", label: "Frameworks" },
      { key: "databases", label: "Databases" },
      { key: "devops", label: "DevOps & Cloud" },
      { key: "tools", label: "Tools" },
    ],
  },
  experience: {
    heading: "Experience",
    entryLabel: "experience",
    present: "Present",
    contributionsLabel: "Key contributions",
    responsibilitiesLabel: "Responsibilities",
    currentBadge: "Current",
    translations: {},
  },
  projects: {
    heading: "Featured Projects",
    viewProject: "View Project",
    viewDetails: "View case study",
    visitSite: "Visit live product",
    close: "Close",
    techStack: "Tech Stack",
    roleLabel: "Role",
    organizationLabel: "Organization",
    periodLabel: "Period",
    architectureLabel: "System architecture",
    contributionsLabel: "What I worked on",
    featuredBadge: "Flagship",
    translations: {
      bloomingtec: {
        caseStudy: {
          flows: [
            {
              label: "API and tenant data",
              nodes: [
                {
                  title: "Laravel REST APIs",
                  detail: "Validation, error handling, and access control",
                },
                {
                  title: "PostgreSQL",
                  detail: "One database per client",
                },
              ],
            },
            {
              label: "Background processing",
              nodes: [
                {
                  title: "Laravel queues",
                  detail: "Payroll calculations and bulk data",
                },
                {
                  title: "Redis",
                  detail: "Queue backend",
                },
              ],
            },
          ],
          contributions: [
            {
              title: "Tenant isolation",
              detail: "Implemented database-per-client PostgreSQL tenancy on one codebase.",
            },
            {
              title: "Queued workloads",
              detail: "Implemented Redis-backed Laravel queues for payroll and bulk data processing.",
            },
            {
              title: "API and data foundations",
              detail: "Developed REST APIs with validation, error handling, access control, data modeling, and query optimization.",
            },
            {
              title: "Modernization and operations",
              detail: "Migrated legacy features and administered Linux VPS environments for development and production.",
            },
          ],
        },
      },
      "presidencia-digital": {
        caseStudy: {
          flows: [
            {
              label: "Institutional ERP",
              nodes: [
                {
                  title: "CodeIgniter 4",
                  detail: "Backend modules",
                },
                {
                  title: "MySQL",
                  detail: "Data models and optimized queries",
                },
              ],
            },
          ],
          contributions: [
            {
              title: "Module architecture",
              detail: "Designed the architecture for modules in the institutional ERP.",
            },
            {
              title: "Data modeling",
              detail: "Designed the module data models.",
            },
            {
              title: "Query optimization",
              detail: "Optimized MySQL queries.",
            },
            {
              title: "Municipal delivery",
              detail: "Analyzed requirements with municipal departments and administered VPS hosting.",
            },
          ],
        },
      },
    },
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
      "Backend developer with 3+ years of experience across backend roles, including my current Laravel work at Bloomingtec. I build services for a production agribusiness ERP, with PostgreSQL database-per-client tenancy and Redis-backed Laravel queues for payroll and bulk data processing. My work also includes REST APIs, data modeling, query optimization, legacy feature migrations, and Linux VPS administration. Based in Michoacán, México.",
    technicalSkills: "Technical Skills",
    professionalExperience: "Professional Experience",
    projects: "Featured Projects",
    education: "Education",
    languages: "Languages",
    languagesSummary: "Spanish (Native), English (Advanced, B2)",
    contactInfo: "Contact",
    downloadPdf: "Download PDF",
    print: "Print CV",
  },
};

export default en;
