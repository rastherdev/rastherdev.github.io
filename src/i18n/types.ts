import type { ExperienceId } from "../data/experience";
import type { ProjectId } from "../data/projects";

export interface TerminalCommand {
  command: string;
  output: string;
}

export interface NavDict {
  home: string;
  mainNavigation: string;
  openMenu: string;
  closeMenu: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  downloadCv: string;
}

export interface HeroDict {
  terminalCommands: TerminalCommand[];
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  viewProjects: string;
  downloadCv: string;
}

export interface AboutDict {
  heading: string;
  bio: string[];
  quickFacts: {
    label: string;
    value: string;
  }[];
}

export interface SkillsDict {
  heading: string;
  categories: {
    key: string;
    label: string;
  }[];
}

export interface ExperienceDict {
  heading: string;
  entryLabel: string;
  present: string;
  contributionsLabel: string;
  responsibilitiesLabel: string;
  currentBadge: string;
  translations: Partial<
    Record<
      ExperienceId,
      Partial<{
        company: string;
        role: string;
        responsibilities: string[];
        achievements: { text: string }[];
      }>
    >
  >;
}

export interface ProjectCaseStudy {
  flows: {
    label: string;
    nodes: {
      title: string;
      detail: string;
    }[];
  }[];
  contributions: {
    title: string;
    detail: string;
  }[];
}

export interface ProjectTranslation {
  description?: string;
  caseStudy: ProjectCaseStudy;
}

export interface ProjectsDict {
  heading: string;
  viewProject: string;
  viewDetails: string;
  visitSite: string;
  close: string;
  techStack: string;
  roleLabel: string;
  organizationLabel: string;
  periodLabel: string;
  architectureLabel: string;
  contributionsLabel: string;
  featuredBadge: string;
  translations: Record<ProjectId, ProjectTranslation>;
}

export interface ContactDict {
  heading: string;
  subtitle: string;
  status: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  cvLabel: string;
}

export interface FooterDict {
  copyright: string;
  backToTop: string;
}

export interface CvDict {
  title: string;
  subtitle: string;
  professionalSummary: string;
  summaryText: string;
  technicalSkills: string;
  professionalExperience: string;
  projects: string;
  education: string;
  languages: string;
  languagesSummary: string;
  contactInfo: string;
  downloadPdf: string;
  print: string;
}

export interface Dictionary {
  nav: NavDict;
  hero: HeroDict;
  about: AboutDict;
  skills: SkillsDict;
  experience: ExperienceDict;
  projects: ProjectsDict;
  contact: ContactDict;
  footer: FooterDict;
  cv: CvDict;
}
