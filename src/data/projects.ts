import type { ExperienceId } from "./experience";

export type ProjectId = "bloomingtec" | "presidencia-digital";

export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface Project {
  id: ProjectId;
  experienceId: ExperienceId;
  name: string;
  description: string;
  stack: string[];
  url: string;
  gallery: ProjectGalleryImage[];
  /** Flagship project — gets the animated highlight treatment in the grid. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "bloomingtec",
    experienceId: "bloomingtec",
    name: "Bloomingtec",
    featured: true,
    description:
      "Production agribusiness ERP. I build Laravel backend services for tenant isolation and asynchronous processing.",
    stack: ["Laravel", "PostgreSQL", "Redis", "REST APIs"],
    url: "https://bloomingtec.com/",
    gallery: [],
  },
  {
    id: "presidencia-digital",
    experienceId: "lagunillas",
    name: "Presidencia Digital",
    description:
      "Institutional ERP platform for the Government of Lagunillas. I developed backend modules with CodeIgniter 4 and MySQL.",
    stack: ["CodeIgniter 4", "MySQL"],
    url: "https://presidenciadigital.com/",
    gallery: [],
  },
];
