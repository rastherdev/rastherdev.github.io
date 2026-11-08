export interface Skill {
  name: string;
}

export interface SkillCategory {
  key: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    items: [
      { name: "PHP" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Laravel" },
      { name: "Vue" },
      { name: "React" },
      { name: "Angular" },
      { name: "Bootstrap" },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "SQLite" },
    ],
  },
  {
    key: "devops",
    items: [
      { name: "Docker" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "DigitalOcean" },
      { name: "GitHub" },
      { name: "Nginx" },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git" },
      { name: "PHPUnit" },
      { name: "Pest" },
      { name: "Postman" },
      { name: "VS Code" },
      { name: "Linux" },
    ],
  },
];
