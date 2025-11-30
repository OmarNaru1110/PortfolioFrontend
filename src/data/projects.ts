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

export const projects: Project[] = [
    {
        id: '1',
        name: 'API Gateway Service',
        description: 'Built a high-performance API gateway with rate limiting, authentication, and request routing for microservices architecture.',
        image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGZ1amklMjBqYXBhbnxlbnwxfHx8fDE3NjQzMTc4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        codeUrl: '#',
        demoUrl: '#',
        endDate: '2024-12',
        technologies: ['Node.js', 'Redis', 'Docker', 'PostgreSQL'],
        featured: true,
    },
    {
        id: '2',
        name: 'Real-time Data Pipeline',
        description: 'Developed a scalable data processing pipeline for handling millions of events per day with real-time analytics.',
        image: 'https://images.unsplash.com/photo-1718621460033-c89dfec8dd1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmb3Jlc3QlMjBqYXBhbnxlbnwxfHx8fDE3NjQzMjg2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        codeUrl: '#',
        demoUrl: '#',
        endDate: '2024-11',
        technologies: ['Python', 'Apache Kafka', 'MongoDB', 'AWS'],
        featured: true,
    },
    {
        id: '3',
        name: 'Authentication Service',
        description: 'Created a secure authentication microservice with JWT, OAuth2, and multi-factor authentication support.',
        image: 'https://images.unsplash.com/photo-1553615942-99d827ad7b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGdhcmRlbiUyMHRlbXBsZXxlbnwxfHx8fDE3NjQ0MTc1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        codeUrl: '#',
        demoUrl: '#',
        endDate: '2024-10',
        technologies: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
        featured: true,
    },
    // Add more projects here as needed
];

export const featuredProjects = projects.filter(p => p.featured);
