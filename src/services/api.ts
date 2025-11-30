import type {
  Project,
  WorkExperience,
  ContactMessage,
  ProjectUI,
  WorkExperienceUI,
  WorkArrangement,
} from '../types/api';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://omarelnaggar.runasp.net';

// API Response wrapper type
interface ApiResponse<T> {
  errorMessage: string | null;
  statusCode: number;
  result: T;
}

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error:', response.status, errorText);
    throw new Error(errorText || `HTTP error! status: ${response.status}`);
  }
  
  const json = await response.json();
  console.log('API Response:', json);
  
  // Handle wrapped response format
  if (json && typeof json === 'object' && 'result' in json) {
    const data = json as ApiResponse<T>;
    if (data.errorMessage) {
      throw new Error(data.errorMessage);
    }
    return data.result;
  }
  
  // Return as-is if not wrapped
  return json as T;
}

// Helper function to format work arrangement
function formatWorkArrangement(arrangement: WorkArrangement): string {
  switch (arrangement) {
    case 0:
      return 'On-site';
    case 1:
      return 'Hybrid';
    case 2:
      return 'Remote';
    default:
      return 'Unknown';
  }
}

// Helper function to format date period
function formatPeriod(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  if (!endDate) {
    return `${startFormatted} - Present`;
  }

  const end = new Date(endDate);
  const endFormatted = end.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return `${startFormatted} - ${endFormatted}`;
}

// Helper function to format end date for projects
function formatEndDate(endDate: string | null): string {
  if (!endDate) return 'In Progress';
  const date = new Date(endDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}

// Transform API project to UI project
function transformProject(project: Project): ProjectUI {
  // Handle image URL - if it's a relative path, prepend the API base URL
  let imageUrl = project.image;
  if (imageUrl && imageUrl.startsWith('/')) {
    imageUrl = `${API_BASE_URL}${imageUrl}`;
  } else if (!imageUrl) {
    imageUrl = 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGZ1amklMjBqYXBhbnxlbnwxfHx8fDE3NjQzMTc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
  }

  return {
    id: String(project.id),
    name: project.name,
    description: project.description,
    image: imageUrl,
    codeUrl: project.codeUrl || '#',
    demoUrl: project.demoUrl || '#',
    endDate: formatEndDate(project.endDate),
    technologies: project.technologies
      ? project.technologies.split(',').map((t) => t.trim())
      : [],
    featured: project.star,
  };
}

// Transform API work experience to UI work experience
function transformWorkExperience(exp: WorkExperience): WorkExperienceUI {
  return {
    id: exp.id,
    company: exp.company,
    role: exp.role,
    description: exp.description || '',
    period: formatPeriod(exp.startDate, exp.endDate),
    location: formatWorkArrangement(exp.workArrangement),
  };
}

// ============ Project API ============

export async function getAllProjects(): Promise<ProjectUI[]> {
  const response = await fetch(`${API_BASE_URL}/api/Project/all`);
  const projects = await handleResponse<Project[]>(response);
  return projects.map(transformProject);
}

export async function getStarredProjects(): Promise<ProjectUI[]> {
  const response = await fetch(`${API_BASE_URL}/api/Project/starred`);
  const projects = await handleResponse<Project[]>(response);
  return projects.map(transformProject);
}

// ============ Work Experience API ============

export async function getAllWorkExperiences(): Promise<WorkExperienceUI[]> {
  const response = await fetch(`${API_BASE_URL}/api/WorkExperience/all`);
  const experiences = await handleResponse<WorkExperience[]>(response);
  return experiences.map(transformWorkExperience);
}

// ============ Contact API ============

export async function sendContactMessage(
  message: ContactMessage
): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/Contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Failed to send message');
  }
}
