import type { Dictionary } from "./types";

const es: Dictionary = {
  nav: {
    home: "Inicio",
    mainNavigation: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
    downloadCv: "Descargar CV",
  },
  hero: {
    terminalCommands: [
      { command: 'echo "Laravel · PostgreSQL · Redis"', output: "Laravel · PostgreSQL · Redis" },
      { command: 'echo "PostgreSQL · una base por cliente"', output: "PostgreSQL · una base por cliente" },
      { command: 'echo "Redis · nóminas y procesamiento masivo"', output: "Redis · nóminas y procesamiento masivo" },
      { command: 'echo "Disponible para nuevas oportunidades"', output: "Disponible para nuevas oportunidades" },
    ],
    greeting: "Hola, soy",
    name: "Giovany Domínguez",
    title: "Laravel Backend Developer",
    tagline:
      "Construyo sistemas backend con Laravel para producción, con aislamiento de datos en PostgreSQL, colas con Redis y modernización cuidadosa de funciones heredadas.",
    viewProjects: "Ver Proyectos",
    downloadCv: "Descargar CV",
  },
  about: {
    heading: "Sobre Mí",
    bio: [
      "Desarrollo servicios backend con Laravel para un ERP agroindustrial en producción. El sistema usa una base PostgreSQL por cliente y colas con Redis para calcular nóminas y procesar datos en lote.",
      "Mi trabajo incluye APIs REST, modelado de datos, optimización de consultas, migración de funciones heredadas y administración de VPS Linux. También desarrollé módulos del ERP institucional del Gobierno de Lagunillas con CodeIgniter 4 y MySQL.",
    ],
    quickFacts: [
      { label: "Ubicación", value: "Michoacán, México" },
      { label: "Experiencia", value: "3+ años" },
      { label: "Enfoque", value: "Laravel, PostgreSQL, Redis" },
      { label: "Idiomas", value: "Español (nativo), inglés (B2)" },
    ],
  },
  skills: {
    heading: "Stack Tecnológico",
    categories: [
      { key: "languages", label: "Lenguajes" },
      { key: "frameworks", label: "Frameworks" },
      { key: "databases", label: "Bases de Datos" },
      { key: "devops", label: "DevOps y nube" },
      { key: "tools", label: "Herramientas" },
    ],
  },
  experience: {
    heading: "Experiencia",
    entryLabel: "experiencia",
    present: "Actualidad",
    contributionsLabel: "Contribuciones clave",
    responsibilitiesLabel: "Responsabilidades",
    currentBadge: "Actual",
    translations: {
      bloomingtec: {
        role: "Desarrollador Backend",
        responsibilities: [
          "Desarrollo servicios backend con Laravel para un ERP agroindustrial en producción.",
          "Construyo APIs REST con validación, manejo de errores y control de acceso.",
          "Modelo datos, optimizo consultas de PostgreSQL, modernizo funciones heredadas y administro VPS Linux.",
        ],
        achievements: [
          {
            text: "Implementé una base de datos PostgreSQL por cliente sobre una sola base de código.",
          },
          {
            text: "Implementé colas de Laravel con Redis para calcular nóminas y procesar datos en lote.",
          },
        ],
      },
      lagunillas: {
        company: "Gobierno Municipal de Lagunillas",
        role: "Desarrollador Backend",
        responsibilities: [
          "Desarrollé módulos backend para el ERP institucional con CodeIgniter 4 y MySQL.",
          "Analicé requisitos con las áreas municipales y administré el VPS.",
        ],
        achievements: [
          {
            text: "Diseñé la arquitectura de los módulos y los modelos de datos; optimicé consultas de MySQL.",
          },
          {
            text: "Desarrollé módulos backend para Presidencia Digital, la plataforma del ERP institucional.",
          },
        ],
      },
    },
  },
  projects: {
    heading: "Proyectos Destacados",
    viewProject: "Ver Proyecto",
    viewDetails: "Ver caso de estudio",
    visitSite: "Visitar el sitio del producto",
    close: "Cerrar",
    techStack: "Tecnologías",
    roleLabel: "Rol",
    organizationLabel: "Organización",
    periodLabel: "Periodo",
    architectureLabel: "Arquitectura del sistema",
    contributionsLabel: "Mi trabajo",
    featuredBadge: "Principal",
    translations: {
      bloomingtec: {
        description:
          "ERP agroindustrial en producción. Desarrollo servicios backend con Laravel para el aislamiento de datos y el procesamiento asíncrono.",
        caseStudy: {
          flows: [
            {
              label: "API y datos por cliente",
              nodes: [
                {
                  title: "APIs REST con Laravel",
                  detail: "Validación, manejo de errores y control de acceso",
                },
                {
                  title: "PostgreSQL",
                  detail: "Una base de datos por cliente",
                },
              ],
            },
            {
              label: "Procesamiento en segundo plano",
              nodes: [
                {
                  title: "Colas de Laravel",
                  detail: "Cálculo de nóminas y procesamiento masivo",
                },
                {
                  title: "Redis",
                  detail: "Backend de colas",
                },
              ],
            },
          ],
          contributions: [
            {
              title: "Aislamiento por cliente",
              detail: "Implementé una base PostgreSQL por cliente con una sola base de código.",
            },
            {
              title: "Procesamiento asíncrono",
              detail: "Implementé colas de Laravel con Redis para calcular nóminas y procesar datos en lote.",
            },
            {
              title: "APIs y datos",
              detail: "Desarrollé APIs REST con validación, manejo de errores y control de acceso; modelé datos y optimicé consultas.",
            },
            {
              title: "Modernización y operación",
              detail: "Migré funciones heredadas y administré entornos VPS Linux para desarrollo y producción.",
            },
          ],
        },
      },
      "presidencia-digital": {
        description:
          "Plataforma del ERP institucional del Gobierno de Lagunillas. Desarrollé módulos backend con CodeIgniter 4 y MySQL.",
        caseStudy: {
          flows: [
            {
              label: "ERP institucional",
              nodes: [
                {
                  title: "CodeIgniter 4",
                  detail: "Módulos backend",
                },
                {
                  title: "MySQL",
                  detail: "Modelos de datos y consultas optimizadas",
                },
              ],
            },
          ],
          contributions: [
            {
              title: "Arquitectura de módulos",
              detail: "Diseñé la arquitectura de los módulos del ERP institucional.",
            },
            {
              title: "Modelado de datos",
              detail: "Diseñé los modelos de datos de los módulos.",
            },
            {
              title: "Optimización de consultas",
              detail: "Optimicé consultas de MySQL.",
            },
            {
              title: "Trabajo con áreas municipales",
              detail: "Analicé requisitos con las áreas municipales y administré el VPS.",
            },
          ],
        },
      },
    },
  },
  contact: {
    heading: "Conectemos",
    status: "Abierto a nuevas oportunidades",
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
      "Desarrollador backend con más de 3 años de experiencia en distintos roles de backend; actualmente trabajo con Laravel en Bloomingtec. Desarrollo servicios para un ERP agroindustrial en producción, con una base PostgreSQL por cliente y colas de Laravel con Redis para calcular nóminas y procesar datos en lote. Mi experiencia también incluye APIs REST, modelado de datos, optimización de consultas, migración de funciones heredadas y administración de VPS Linux. Resido en Michoacán, México.",
    technicalSkills: "Habilidades Técnicas",
    professionalExperience: "Experiencia Profesional",
    projects: "Proyectos Destacados",
    education: "Educación",
    languages: "Idiomas",
    languagesSummary: "Español (Nativo), Inglés (Avanzado, B2)",
    contactInfo: "Contacto",
    downloadPdf: "Descargar PDF",
    print: "Imprimir CV",
  },
};

export default es;
