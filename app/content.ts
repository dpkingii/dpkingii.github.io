export const links = {
  github: "https://github.com/dpkingii",
  linkedin: "https://www.linkedin.com/in/lianyu-peng",
};

export type Job = {
  role: string;
  org: string;
  location: string;
  dates: string;
  logo: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export const experience: Job[] = [
  {
    role: "Software Engineer Intern",
    org: "Visa",
    location: "Austin, TX",
    dates: "May – Aug 2026",
    logo: "/logos/visa.svg",
    summary: "Reworked RBAC for an agentic AI workforce planning app and closed a pre-production authorization gap.",
    bullets: [
      "Shipped an admin role to an agentic AI workforce planning app by reworking its RBAC model across MongoDB, Spring Boot, and Angular, enforcing separation of duties for 16 security groups in a launch projected to save 24,000 hours a year.",
      "Closed a pre-production security gap by extending role-based authorization from Angular route guards to Spring Boot controller-level checks, then wrote unit tests for 15+ endpoints to confirm no other routes were exposed.",
      "Blocked malformed and unauthorized data from reaching downstream systems by adding validation across 38 fields in 5 upload sheets, at both the Angular front end and the Spring Boot REST API layer.",
      "Cut partial-match search round trips by 67% by consolidating 3 MongoDB queries into 1 aggregation pipeline, prototyped on real data in Compass and released through Jenkins CI/CD after code review.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "TypeScript", "MongoDB", "Jenkins"],
  },
  {
    role: "Software Engineer",
    org: "Qubi by Qolour",
    location: "Remote",
    dates: "Sep 2025 – Apr 2026",
    logo: "/logos/qubi.svg",
    summary: "Built the Firebase storage layer and redesigned navigation across 15 screens of a quantum computing education app.",
    bullets: [
      "Architected a Firebase-backed metadata storage system for the iOS and Android Flutter app, persisting user profiles, quantum circuit results, and progress across 11 games and 70+ levels so users can resume on any device.",
      "Redesigned and rebuilt the home page and navigation across 15 screens in Figma and Flutter, cutting the steps needed to create a quantum circuit and enlarging touch targets. The redesign shipped to production.",
      "Delivered a dedicated iPad landscape mode across 3 screens in response to an educator feature request, for classroom and group lessons.",
    ],
    tags: ["Flutter", "Dart", "Firebase", "Figma"],
  },
  {
    role: "Software Engineer Intern",
    org: "Chosan",
    location: "Rockville, MD",
    dates: "May – Aug 2025",
    logo: "/logos/chosan.png",
    summary: "Automated syncing of 400+ property listings into PostgreSQL and built the property search.",
    bullets: [
      "Eliminated 6+ hours of weekly manual data entry with Node.js cron jobs that sync properties from Hostaway into PostgreSQL.",
      "Integrated 400+ property listings from Hostaway via OAuth 2.0 and Next.js API routes, with integration tests covering sync accuracy and error handling.",
      "Built a full-stack property search in React and Next.js with Prisma-backed multi-field filtering (location, availability, guests) to replace manual catalog browsing.",
    ],
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
  },
];

export type Project = {
  slug: "layerup" | "relay-authz" | "fake-artist" | "umd-calendar" | "quietplate" | "professor-rating";
  name: string;
  tagline: string;
  summary: string;
  description: string;
  repo: string;
  live?: string;
  slides?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "relay-authz",
    name: "relay-authz",
    tagline: "Authorization service",
    summary:
      "A Zanzibar-style authorization service in Go that checks access through nested groups and folders. Its Redis cache held a 12.6 ms p99 at 8,000 checks/s.",
    description:
      "A relationship-based authorization service modeled on Google's Zanzibar paper. It answers \"can this user do this action on this object?\" by walking relation tuples in PostgreSQL through nested groups and parent folders, with rules defined in one config file.",
    repo: "https://github.com/dpkingii/relay-authz",
    tags: ["Go", "PostgreSQL", "Redis", "Docker", "k6"],
    featured: true,
  },
  {
    slug: "layerup",
    name: "Layerup",
    tagline: "AI stylist web app",
    summary:
      "An AI stylist that builds outfits from photos of your own clothes, layered for today's forecast.",
    description:
      "Tell it your plans and it builds an outfit from photos of your own clothes, layered for the hours you'll actually be outside. Swipe any piece to swap it, or ask for \"warmer\" or \"dressier\" and the next outfit keeps your swaps. A one-click guest demo comes with a seeded closet.",
    repo: "https://github.com/dpkingii/layerup",
    live: "https://layerup-woad.vercel.app",
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini", "ONNX Runtime", "Vercel"],
    featured: true,
  },
  {
    slug: "fake-artist",
    name: "Fake Artist",
    tagline: "Multiplayer web game",
    summary:
      "A multiplayer drawing and bluffing game where the server keeps the secret word from the fake artist.",
    description:
      "A drawing and deduction game for up to 8 players, played remotely with a room code or on one shared device. Everyone adds to one canvas, but the fake artist only knows the category and has to bluff. Three modes (ink budget, free whiteboard, one stroke each) plus timers and a vote to finish.",
    repo: "https://github.com/dpkingii/fake-artist",
    live: "https://fake-artist-0awa.onrender.com/",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Docker", "Vitest"],
  },
  {
    slug: "umd-calendar",
    name: "UMD Calendar",
    tagline: "Full-stack web app",
    summary:
      "A subscribable calendar of UMD breaks, finals, and term dates with reminders you choose.",
    description:
      "A subscribable calendar of UMD breaks, finals, and term dates with reminders you choose. Pick what to include, add it to Google or Apple Calendar once, and it keeps itself up to date. No account, name, or email.",
    repo: "https://github.com/dpkingii/umd-calendar",
    live: "https://umd-calendar-tau.vercel.app",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "Supabase", "Vercel"],
  },
  {
    slug: "professor-rating",
    name: "Professor Rating Predictor",
    tagline: "Machine learning",
    summary:
      "Predicts UMD professors' star ratings from 36,000+ PlanetTerp reviews and grade data.",
    description:
      "Pulls 4,000+ UMD professors and 36,000+ reviews from the PlanetTerp API and predicts their star rating from grade distributions, the GPA students expect based on reviews, and VADER sentiment over the review text.",
    repo: "https://github.com/dpkingii/PredictingProfessorRating",
    slides:
      "https://docs.google.com/presentation/d/1ZMibFFO4Uu8lSp2cKLQP4mOkvs8rS6rBQGHvfSQlXj0/edit?usp=sharing",
    tags: ["Python", "scikit-learn", "pandas"],
  },
  {
    slug: "quietplate",
    name: "QuietPlate",
    tagline: "Chrome extension",
    summary:
      "A Chrome extension that hides calorie counts on restaurant menus, built for people with eating disorders.",
    description:
      "Built for people with eating disorders or disordered eating, for whom a calorie count next to every menu item can turn ordering into counting and push them away from what they actually want to eat. QuietPlate hides those numbers on restaurant menu sites as you browse, so the menu is just food again.",
    repo: "https://github.com/dpkingii/quietplate",
    tags: ["JavaScript", "Manifest V3", "Vitest"],
  },
];

export const leadership: Job[] = [
  {
    role: "Director of Education",
    org: "App Development Club at UMD",
    location: "College Park, MD",
    dates: "Jan 2026 – Present",
    logo: "/logos/adc.png",
    summary: "Lead an 8-person education team and teach a production-stack curriculum to 45 students a semester.",
    bullets: [
      "Lead an 8-person team that scaled recruitment to 500+ applicants a semester by redesigning interviews to evaluate incoming freshmen on interest and commitment rather than prior technical experience.",
      "Design and teach a production-oriented curriculum in React, FastAPI, MongoDB, and PostgreSQL to 45 students a semester, with 18 advancing through the shadowing program onto active development teams.",
    ],
    tags: ["React", "FastAPI", "MongoDB", "PostgreSQL", "Teaching"],
    link: { label: "Lecture code", href: "https://github.com/dpkingii/bootcamp-lecture-code" },
  },
  {
    role: "Technical Support Engineer",
    org: "UMD Department of Computer Science",
    location: "College Park, MD",
    dates: "May 2024 – Present",
    logo: "/logos/umd-seal.png",
    summary: "Implemented LDAP and Red Hat IdM authentication for 80+ faculty across a 1,200+ node network.",
    bullets: [
      "Secured centralized authentication for 80+ CS faculty across a 1,200+ node network by implementing LDAP and Red Hat Identity Management, including host-based access policies and provisioning.",
      "Maintain a 2-hour response SLA while troubleshooting and resolving 12+ technical issues a week across Linux and Windows environments, and write reference documentation for recurring issues.",
    ],
    tags: ["Linux", "RHEL", "LDAP", "Red Hat IdM"],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "University of Maryland, College Park",
  dates: "Expected May 2028",
  logo: "/logos/umd-seal.png",
  gpa: "3.8",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Computer & Network Security",
    "Discrete Structures",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Linear Algebra",
  ],
};

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C", "C++", "Dart", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    items: ["Spring Boot", "Angular", "React", "Next.js", "Node.js", "Flutter", "FastAPI", "Tailwind CSS", "Prisma", "pandas", "scikit-learn"],
  },
  {
    label: "Tools & data",
    items: ["Git", "Docker", "Jenkins", "Jira", "Linux", "Vercel", "Figma", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "Practices",
    items: ["Agile/Scrum", "CI/CD", "REST APIs", "OAuth 2.0", "RBAC", "Unit & integration testing", "Code review"],
  },
];
