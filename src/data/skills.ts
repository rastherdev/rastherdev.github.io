export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  key: string;
  items: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    items: [
      { name: "PHP", level: 95 },
      { name: "TypeScript", level: 78 },
      { name: "JavaScript", level: 82 },
      { name: "Python", level: 60 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Laravel", level: 95 },
      { name: "Vue", level: 72 },
      { name: "React", level: 65 },
      { name: "Angular", level: 55 },
      { name: "Express", level: 60 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 75 },
      { name: "SQLite", level: 70 },
    ],
  },
  {
    key: "devops",
    items: [
      { name: "Docker", level: 78 },
      { name: "AWS", level: 60 },
      { name: "GCP", level: 50 },
      { name: "DigitalOcean", level: 85 },
      { name: "GitHub", level: 72 },
      { name: "Nginx", level: 65 },
    ],
  },
  {
    key: "patterns",
    items: [
      // ponytail: placeholder levels — user will adjust to their profile
      { name: "Repository", level: 85 },
      { name: "Factory", level: 78 },
      { name: "Observer", level: 72 },
      { name: "Singleton", level: 80 },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", level: 90 },
      { name: "PHPUnit", level: 85 },
      { name: "Pest", level: 70 },
      { name: "Postman", level: 82 },
      { name: "VS Code", level: 88 },
      { name: "Linux", level: 75 },
    ],
  },
];
