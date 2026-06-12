export interface SkillCategory {
  key: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    items: ["PHP 8+", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    key: "frameworks",
    items: ["Laravel", "Vue.js", "React", "Angular", "Express.js", "Bootstrap"],
  },
  {
    key: "databases",
    items: ["PostgreSQL", "MySQL", "Redis", "SQLite"],
  },
  {
    key: "devops",
    items: ["Docker", "AWS", "GCP", "DigitalOcean", "GitHub Actions", "Nginx"],
  },
  {
    key: "tools",
    items: ["Git", "PHPUnit", "Pest", "Postman", "VS Code", "Linux"],
  },
];
