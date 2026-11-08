export interface Achievement {
  text: string;
}

export type ExperienceId = "bloomingtec" | "lagunillas";

export interface ExperienceEntry {
  id: ExperienceId;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null; // null = present
  responsibilities: string[];
  achievements: Achievement[];
  stack: string[];
}

export function formatMonthYear(date: string, locale: string): string {
  const [year, month] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, 1)).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const experience: ExperienceEntry[] = [
  {
    id: "bloomingtec",
    company: "Bloomingtec",
    role: "Backend Developer",
    startDate: "2025-10",
    endDate: null,
    responsibilities: [
      "Build and maintain Laravel backend services for a production agribusiness ERP.",
      "Develop REST APIs with validation, error handling, and access control.",
      "Model data, optimize PostgreSQL queries, migrate legacy features into modern architectures, and administer Linux VPS environments.",
    ],
    achievements: [
      {
        text: "Implemented database-per-client PostgreSQL tenancy on a single codebase.",
      },
      {
        text: "Implemented Redis-backed Laravel queues for payroll calculation and bulk data processing.",
      },
    ],
    stack: ["Laravel", "PostgreSQL", "Redis", "REST APIs", "Linux"],
  },
  {
    id: "lagunillas",
    company: "Lagunillas City Government",
    role: "Backend Developer",
    startDate: "2023-08",
    endDate: "2026-02",
    responsibilities: [
      "Developed backend modules for the institutional ERP using CodeIgniter 4 and MySQL.",
      "Analyzed requirements with municipal departments and administered VPS hosting.",
    ],
    achievements: [
      {
        text: "Designed module architecture and data models, and optimized MySQL queries.",
      },
      {
        text: "Developed backend modules for Presidencia Digital, the institutional ERP platform.",
      },
    ],
    stack: ["CodeIgniter 4", "MySQL"],
  },
];
