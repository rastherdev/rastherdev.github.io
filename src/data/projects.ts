export type ProjectId = "bloomingtec" | "presidencia-digital";

export interface Project {
  id: ProjectId;
  name: string;
  description: string;
  context: string;
  contribution: string;
  stack: string[];
  url: string;
  /** Flagship project — gets the animated highlight treatment in the grid. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "bloomingtec",
    name: "Bloomingtec",
    featured: true,
    description:
      "Production agribusiness ERP. I build Laravel backend services for tenant isolation and asynchronous processing.",
    context: "A production ERP for the agribusiness sector.",
    contribution:
      "Implemented database-per-client PostgreSQL tenancy on a single codebase and Redis-backed Laravel queues for payroll calculation and bulk data processing.",
    stack: ["Laravel", "PostgreSQL", "Redis", "REST APIs"],
    url: "https://bloomingtec.com/",
  },
  {
    id: "presidencia-digital",
    name: "Presidencia Digital",
    description:
      "Institutional ERP platform for the Government of Lagunillas. I developed backend modules with CodeIgniter 4 and MySQL.",
    context: "Presidencia Digital is the institutional ERP platform built for the Government of Lagunillas.",
    contribution:
      "Developed backend modules with CodeIgniter 4 and MySQL, including module architecture, data modeling, query optimization, requirements analysis with municipal departments, and VPS administration.",
    stack: ["CodeIgniter 4", "MySQL"],
    url: "https://presidenciadigital.com/",
  },
];
