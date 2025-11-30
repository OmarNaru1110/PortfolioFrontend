// This file is kept for backwards compatibility but data is now fetched from the API
// See src/services/api.ts for the API integration

export interface Project {
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

// Legacy static data - no longer used, data is fetched from API
export const projects: Project[] = [];
export const featuredProjects = projects.filter(p => p.featured);

