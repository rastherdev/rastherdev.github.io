export interface NavDict {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  downloadCv: string;
}

export interface HeroDict {
  terminalLines: string[];
  greeting: string;
  name: string;
  title: string;
  tagline: string;
  viewProjects: string;
  downloadCv: string;
  statTech: string;
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
  present: string;
  achievementsLabel: string;
  responsibilitiesLabel: string;
  currentBadge: string;
}

export interface ProjectsDict {
  heading: string;
  viewProject: string;
  viewCode: string;
  close: string;
  techStack: string;
  problem: string;
  solution: string;
  gallery: string;
  featuredBadge: string;
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
