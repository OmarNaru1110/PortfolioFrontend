export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  tags: string[];
  codeHref?: string;
  demoHref?: string;
}

export interface WritingItem {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
}

export interface AboutItem {
  id: string;
  title: string;
}

export const aboutItems: AboutItem[] = [
  { id: 'default', title: 'Overview & Contacts' }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: 'exp-mafazaa',
    title: 'Backend Software Engineer (Volunteer)',
    role: 'Backend Software Engineer (Volunteer)',
    company: 'Mafazaa',
    period: '2025 — 2025',
    location: 'Remote',
    description:
      'Contributed to AinaaDNS, a privacy-focused DNS server that filters adult and harmful content. Built a high-performance DNS resolver in Go with custom CoreDNS plugins, Redis caching, and DynamoDB persistence, supporting multiple protection tiers and DNS-over-HTTPS. Integrated backend services with a .NET admin dashboard and collaborated with DevOps to ensure scalable, monitored production deployments.'
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: 'proj-byto',
    title: 'byto',
    date: '2025',
    subtitle: 'Lightweight desktop GUI for yt-dlp',
    description:
      'byto is a lightweight desktop application that provides a clean and intuitive GUI for yt-dlp. It simplifies media downloading by offering an easy-to-use interface, smart defaults, and direct link handling without the need for command-line knowledge. byto focuses on speed, clarity, and user convenience, making advanced downloading accessible to everyone while keeping the experience smooth, modern, and reliable. The project has reached 1,000+ downloads and has attracted multiple contributors, making it an actively evolving open-source project.',
    tags: ['Go', 'Vue', 'React', 'ASP.NET Core Web API', 'yt-dlp'],
    codeHref: 'https://github.com/OmarNaru1110/byto',
    demoHref: 'https://byto.online/'
  },
  {
    id: 'proj-ainaa',
    title: 'AinaaDNS',
    date: '2025',
    subtitle: 'Privacy-focused DNS filtering service',
    description:
      'AinaaDNS is a privacy-focused DNS service that filters harmful and adult content at the domain level. Built on CoreDNS with custom Go plugins, it delivers fast, adaptive resolution, multi-tier protection and seamless integration with admin tools, providing safe, reliable internet access at scale.',
    tags: ['Go', 'DynamoDB', 'Redis', 'DNS'],
    codeHref: 'https://github.com/OmarNaru1110/coredns-ainaa',
    demoHref: 'https://ainaa.mafazaa.com/'
  },
  {
    id: 'proj-elearning',
    title: 'E-Learning',
    date: '2025',
    subtitle: 'Real-time language learning platform',
    description:
      'E-Learning is a real-time language learning platform that connects users for collaborative practice through structured sessions and instant messaging. It features interest-based matching, WebSocket and WebRTC communication, and feedback systems to ensure an engaging and effective learning experience.',
    tags: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'SignalR', 'WebRTC'],
    codeHref: 'https://github.com/E-Learning-Application'
  },
  {
    id: 'proj-aggar',
    title: 'Aggar',
    date: '2024',
    subtitle: 'Vehicle rental platform',
    description:
      'Aggar is a vehicle rental platform that connects customers with vehicle owners securely and efficiently. It offers easy vehicle search, booking, and payment, while enabling renters to list and manage vehicles. With real-time chat, escrow payments, and review systems, Aggar ensures a smooth and trustworthy rental experience.',
    tags: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'SignalR', 'Dapper', 'Worker Services', 'Stripe API', 'IMemoryCache', 'Hangfire', 'GitHub Actions', 'Razor Pages'],
    codeHref: 'https://github.com/Aggar-rent-a-ride',
    demoHref: 'https://drive.google.com/file/d/1_2l2ve63Zk_gnS7YvD_0qFqXAELZ2JS4/view'
  },
  {
    id: 'proj-yaqra',
    title: 'Yaqra',
    date: '2024',
    subtitle: 'Social media for book enthusiasts',
    description:
      'Yaqra is a social media website tailored for book enthusiasts. It provides a rich set of features allowing users to review books, create playlists, engage in discussions, and stay updated with articles and news. Yaqra facilitates a comprehensive social media experience for book geeks.',
    tags: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'SignalR', 'Dapper', 'Worker Services'],
    codeHref: 'https://github.com/Yaqra',
    demoHref: 'https://drive.google.com/file/d/1EBKqUySOXieF3XiOTuNxCxkRc5eypNEW/view'
  }
];

export const writingItems: WritingItem[] = [
  {
    id: 'writing-di',
    title: 'Dependency Injection: What, Why and How?',
    date: '2026',
    description:
      'An introduction to Dependency Injection, explaining how it reduces tight coupling by separating dependency creation from business logic. The article explores dependency management, service registration, and how a DI Container automatically creates and provides the required dependencies.',
    url: 'https://www.linkedin.com/pulse/%25D8%25A7%25D9%2584%25D9%2580dependency-injection-%25D8%25A7%25D9%258A%25D9%2587-%25D9%2584%25D9%258A%25D9%2587-%25D9%2588%25D8%25A7%25D8%25B2%25D8%25A7%25D9%258A-omar-elnaggar-qspwe/?trackingId=FXoLr5N7TBCU5jeZbbbQ%2FQ%3D%3D'
  },
  {
    id: 'writing-tolerant',
    title: 'Tolerant Reader Pattern: Building Resilient Consumers That Embrace Change',
    date: '2024',
    description:
      'An overview of the Tolerant Reader pattern and how resilient consumers can handle changes in response structures without breaking. The article explains how reducing coupling to provider responses improves backward compatibility and service resilience.',
    url: 'https://www.linkedin.com/pulse/tolerant-reader-pattern-building-resilient-consumers-embrace-omar-ihq2f/?trackingId=FXoLr5N7TBCU5jeZbbbQ%2FQ%3D%3D'
  },
  {
    id: 'writing-decentralize',
    title: 'Microservices: Decentralize All The Things',
    date: '2024',
    description:
      'An exploration of autonomy in Microservices, covering team ownership, internal open source, and approaches to handling long-lived processes through orchestration and choreography.',
    url: 'https://www.linkedin.com/pulse/microservices-decentralize-all-things-omar-elnaggar-ptoif/?trackingId=FXoLr5N7TBCU5jeZbbbQ%2FQ%3D%3D'
  },
  {
    id: 'writing-microservices',
    title: 'Microservices: Pros and Cons',
    date: '2024',
    description:
      'An overview of Microservices architecture, exploring its key benefits — faster releases, technology flexibility, team autonomy, and focused security — alongside challenges such as increased complexity, testing, monitoring, and resiliency.',
    url: 'https://www.linkedin.com/pulse/%25D9%2585%25D9%2585%25D9%258A%25D8%25B2%25D8%25A7%25D8%25AA-%25D9%2588%25D8%25B9%25D9%258A%25D9%2588%25D8%25A8-%25D8%25A7%25D9%2584%25D9%2580microservices-omar-elnaggar-azljf/?trackingId=FXoLr5N7TBCU5jeZbbbQ%2FQ%3D%3D'
  }
];