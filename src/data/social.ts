export interface SocialLink {
  label: string;
  url: string;
  icon: "email" | "linkedin" | "github";
}

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    url: "mailto:rastherdev@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rastherdev",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/rastherdev",
    icon: "github",
  },
];

export const resumeUrl = "/assets/resume.pdf";

export const siteConfig = {
  name: "Giovany Domínguez",
  title: "Laravel Backend Developer",
  email: "rastherdev@gmail.com",
  github: "https://github.com/rastherdev",
  linkedin: "https://www.linkedin.com/in/rastherdev",
  location: "Michoacán, México",
  yearsOfExperience: "3+",
};
