export interface Achievement {
  text: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null = present
  responsibilities: string[];
  achievements: Achievement[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Bloomingtec",
    role: "Backend Developer",
    startDate: "2025-01",
    endDate: null,
    responsibilities: [
      "Developed and maintained the backend of the SaaS platform using Laravel, ensuring scalability and robustness.",
      "Implemented new features based on client needs, working closely with the DevOps team.",
      "Configured and managed DigitalOcean infrastructure including servers, databases, and storage services.",
      "Migrated legacy SaaS from Express.js to Laravel, improving performance and maintainability.",
      "Acted as Product Owner, collaborating on requirements definition and backlog prioritization.",
    ],
    achievements: [
      {
        text: "Migrated legacy Express.js backend to Laravel with a modular monolith architecture, featuring independent services per module (users, billing, crop management) with well-defined RESTful APIs.",
      },
      {
        text: "Implemented an async queue system for critical tasks (payroll calculation, bulk data processing) using Redis and Laravel Queues, reducing response times by 95%.",
      },
      {
        text: "Achieved multi-tenancy with per-client PostgreSQL instances using a single codebase, improving data isolation and enabling horizontal scalability through dynamic database connection abstraction.",
      },
      {
        text: "Built a robust authentication and authorization system with JWT and Laravel Sanctum, featuring granular roles and permissions for different user types.",
      },
      {
        text: "Set up DigitalOcean infrastructure from scratch, including servers, databases, and storage, ensuring high availability and scalability.",
      },
    ],
  },
  {
    company: "Presidencia Digital",
    role: "Full Stack Developer",
    startDate: "2023-08",
    endDate: "2026-01",
    responsibilities: [
      "Developed new features for the SaaS platform using Laravel and Bootstrap, focusing on UX improvements and administrative efficiency for local governments.",
      "Collaborated with the design team to implement an intuitive and accessible citizen-facing interface.",
      "Managed MySQL database including query optimization and data integrity.",
      "Configured and managed WPS Hosting infrastructure ensuring platform availability and security.",
    ],
    achievements: [
      {
        text: "Implemented a document management system with advanced search and categorization, significantly improving administrative efficiency for local governments that previously had no such system.",
      },
      {
        text: "Developed a citizen service module enabling requests, issue reporting, and efficient responses, improving communication between local governments and citizens.",
      },
      {
        text: "Implemented a license and permit management system ensuring regulatory compliance and improved security.",
      },
      {
        text: "Configured a social program tracking platform for local governments, enabling real-time data-driven decision making.",
      },
    ],
  },
];
