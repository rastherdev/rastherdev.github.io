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
    statTech: "Tecnologías",
  },
  about: {
    heading: "Sobre Mí",
    bio: [
      "Soy un desarrollador backend apasionado por crear código limpio y mantenible que resista el paso del tiempo. Con más de tres años de experiencia construyendo plataformas SaaS, he aprendido que el mejor software no solo es funcional — es un placer trabajar con él, tanto para los usuarios como para los desarrolladores que le dan mantenimiento.",
      "Me especializo en el ecosistema Laravel, pero siempre estoy explorando nuevos patrones y tecnologías. Ya sea diseñando una arquitectura multi-tenant, optimizando workers de colas para cargas pesadas o migrando sistemas legacy — disfruto resolviendo desafíos complejos de backend.",
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
      { key: "patterns", label: "Design Patterns" },
      { key: "tools", label: "Herramientas" },
    ],
  },
  experience: {
    heading: "Experiencia",
    present: "Actualidad",
    achievementsLabel: "Logros Clave",
    responsibilitiesLabel: "Responsabilidades",
    currentBadge: "Actual",
    translations: {
      bloomingtec: {
        role: "Desarrollador Backend",
        responsibilities: [
          "Desarrollé y mantuve el backend de la plataforma SaaS con Laravel, garantizando su escalabilidad y solidez.",
          "Implementé nuevas funcionalidades según las necesidades de los clientes, en estrecha colaboración con el equipo de DevOps.",
          "Configuré y administré la infraestructura de DigitalOcean, incluidos servidores, bases de datos y servicios de almacenamiento.",
          "Migré la plataforma SaaS heredada de Express.js a Laravel, mejorando el rendimiento y la mantenibilidad.",
          "Desempeñé el rol de Product Owner y colaboré en la definición de requisitos y la priorización del backlog.",
        ],
        achievements: [
          {
            text: "Migré el backend heredado de Express.js a Laravel con una arquitectura de monolito modular, con servicios independientes por módulo (usuarios, facturación y gestión de cultivos) y API RESTful bien definidas.",
          },
          {
            text: "Implementé un sistema de colas asíncronas para tareas críticas (cálculo de nómina y procesamiento masivo de datos) con Redis y Laravel Queues, reduciendo los tiempos de respuesta en un 95%.",
          },
          {
            text: "Implementé una arquitectura multi-tenant con instancias PostgreSQL por cliente y una única base de código, mejorando el aislamiento de datos y permitiendo escalar horizontalmente mediante una abstracción dinámica de conexiones.",
          },
          {
            text: "Desarrollé un sistema robusto de autenticación y autorización con JWT y Laravel Sanctum, con roles y permisos granulares para distintos tipos de usuario.",
          },
          {
            text: "Configuré desde cero la infraestructura en DigitalOcean, incluidos servidores, bases de datos y almacenamiento, para garantizar alta disponibilidad y escalabilidad.",
          },
        ],
      },
      "presidencia-digital": {
        role: "Desarrollador Full Stack",
        responsibilities: [
          "Desarrollé nuevas funcionalidades para la plataforma SaaS con Laravel y Bootstrap, con foco en mejorar la experiencia de usuario y la eficiencia administrativa de los gobiernos locales.",
          "Colaboré con el equipo de diseño para implementar una interfaz intuitiva y accesible para la ciudadanía.",
          "Administré la base de datos MySQL, optimicé consultas y protegí la integridad de los datos.",
          "Configuré y administré la infraestructura de WPS Hosting, garantizando la disponibilidad y seguridad de la plataforma.",
        ],
        achievements: [
          {
            text: "Implementé un sistema de gestión documental con búsqueda avanzada y categorización, mejorando significativamente la eficiencia administrativa de gobiernos locales que antes no contaban con esta herramienta.",
          },
          {
            text: "Desarrollé un módulo de atención ciudadana para solicitudes, reportes de incidencias y respuestas eficientes, mejorando la comunicación entre gobiernos locales y la ciudadanía.",
          },
          {
            text: "Implementé un sistema de gestión de licencias y permisos que garantiza el cumplimiento normativo y mejora la seguridad.",
          },
          {
            text: "Configuré una plataforma de seguimiento de programas sociales para gobiernos locales, con datos en tiempo real para respaldar la toma de decisiones.",
          },
        ],
      },
    },
  },
  projects: {
    heading: "Proyectos Destacados",
    viewProject: "Ver Proyecto",
    viewCode: "Ver Código",
    close: "Cerrar",
    techStack: "Tecnologías",
    problem: "Problema",
    solution: "Solución",
    gallery: "Galería",
    featuredBadge: "Principal",
    screenshot: "captura de pantalla",
    translations: {
      bloomingtec: {
        description:
          "Plataforma SaaS que funciona como ERP y CRM para el sector agroindustrial, con especial enfoque en los procesos administrativos, logísticos y de gestión de clientes de productores de materias primas agrícolas. Incluye módulos de gestión de cultivos, cálculo de nómina, inventario, ventas, facturación y atención al cliente, integrados en una interfaz intuitiva.",
        problem:
          "Los productores agrícolas suelen enfrentar dificultades para gestionar sus operaciones de forma eficiente, desde el seguimiento de cultivos hasta la administración de clientes y la facturación. Bloomingtec ofrece una solución integral que simplifica estos procesos y les permite centrarse en su actividad principal sin perder el control.",
        solution:
          "Desarrollé una arquitectura de monolito modular en Laravel, con servicios independientes por dominio (usuarios, facturación y cultivos). Implementé bases de datos PostgreSQL multi-tenant por cliente para aislar los datos y permitir el escalado horizontal. Usé colas con Redis para procesar de forma asíncrona tareas críticas, como el cálculo de nómina y el procesamiento masivo de datos.",
        snippet: `// Resolución de bases de datos multi-tenant
class TenantManager
{
    public function connect(Tenant $tenant): void
    {
        Config::set('database.connections.tenant', [
            'driver' => 'pgsql',
            'host' => $tenant->db_host,
            'database' => $tenant->db_name,
            'username' => $tenant->db_user,
            'password' => $tenant->db_pass,
        ]);
        
        DB::purge('tenant');
        DB::reconnect('tenant');
    }
}`,
      },
      "presidencia-digital": {
        description:
          "Plataforma SaaS diseñada para ayudar a los gobiernos locales a digitalizar sus servicios y mejorar la comunicación con la ciudadanía. Incluye módulos de gestión documental, atención ciudadana, transparencia, participación, trámites, solicitudes y comunicación directa con sus habitantes.",
        problem:
          "Muchos gobiernos locales carecen de los recursos o conocimientos técnicos para desarrollar sus propias soluciones digitales, lo que limita su capacidad para ofrecer servicios eficientes y transparentes a la ciudadanía. Presidencia Digital ofrece una plataforma lista para usar y adaptada a las necesidades de cada municipio.",
        solution:
          "Desarrollé una plataforma SaaS integral con Laravel y Bootstrap, con gestión documental con búsqueda avanzada, módulos de atención ciudadana para solicitudes y seguimiento de incidencias, y paneles para supervisar programas sociales y tomar decisiones basadas en datos en tiempo real.",
        snippet: `// Gestión documental con búsqueda avanzada
class DocumentController extends Controller
{
    public function search(Request $request): JsonResponse
    {
        $documents = Document::query()
            ->when($request->category, fn($q, $v) =>
                $q->where('category', $v))
            ->when($request->query, fn($q, $v) =>
                $q->whereFullText(['title', 'content'], $v))
            ->paginate(20);
            
        return response()->json($documents);
    }
}`,
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
