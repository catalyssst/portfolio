export type TeamMember = {
  id: string;
  name: string;
  role: "Frontend" | "Backend" | "Fullstack" | "UI/UX";
  image: string;
  shortBio: string;
  focus: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
};
