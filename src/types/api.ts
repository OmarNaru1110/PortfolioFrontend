// API Response Types

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string | null;
  codeUrl: string | null;
  demoUrl: string | null;
  endDate: string | null;
  technologies: string | null;
  star: boolean;
}

export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | null;
  workArrangement: WorkArrangement;
}

export enum WorkArrangement {
  Onsite = 0,
  Hybrid = 1,
  Remote = 2,
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

// Transformed types for UI usage
export interface ProjectUI {
  id: string;
  name: string;
  description: string;
  image: string;
  codeUrl: string;
  demoUrl: string;
  endDate: string;
  technologies: string[];
  featured: boolean;
}

export interface WorkExperienceUI {
  id: number;
  company: string;
  role: string;
  description: string;
  period: string;
  location: string;
}
