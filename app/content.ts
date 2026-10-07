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
    role: "Software Engineer Contractor",
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
  {
    role: "Operations Intern",
    org: "Chosan",
    location: "Rockville, MD",
    dates: "May – Aug 2024",
    logo: "/logos/chosan.png",
    summary: "Coordinated 3 property build-outs that added $72,000 in annual revenue.",
    bullets: [
      "Coordinated 3 property build-out projects across cross-functional teams, managing timelines through Jira and contributing to $72,000 in added annual revenue.",
      "Kept 16 clients and 12 internal team members aligned on project scope and requirements by coordinating meeting agendas and updates through Jira and Google Chat.",
    ],
    tags: ["Jira", "Google Chat"],
  },
];

export type Project = {
  slug: "quietplate" | "professor-rating";
  name: string;
  tagline: string;
  dates: string;
  description: string;
  highlight: string;
  repo: string;
  slides?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "quietplate",
    name: "QuietPlate",
    tagline: "Chrome extension",
    dates: "Spring 2026",
    description:
      "Hides calorie numbers on restaurant menu sites. A regex pass catches the plain cases, and two more passes handle menus that split the number and unit apart: across sibling elements like Starbucks, or across text nodes inside one element like Shake Shack. A MutationObserver rescans as single-page menus load new items.",
    highlight:
      "The Shake Shack case blanks each text node in place instead of merging them, so React's virtual DOM stays intact. All scanning happens in the browser, and 21 Vitest tests run the content script and popup against jsdom.",
    repo: "https://github.com/dpkingii/quietplate",
    tags: ["JavaScript", "Manifest V3", "Vitest"],
  },
  {
    slug: "professor-rating",
    name: "Professor Rating Predictor",
    tagline: "Machine learning",
    dates: "Spring 2025",
    description:
      "Pulls 3,000+ UMD professors and 8,000+ reviews from the PlanetTerp API and predicts their star rating from grade distributions, the GPA students expect based on reviews, and VADER sentiment over the review text.",
    highlight:
      "Linear regression, random forest, and support vector regression were each scored with 10-fold cross-validation on the same held-out split. SVR did best at R² 0.62, with plain linear regression right behind at 0.61, so most of the signal is linear.",
    repo: "https://github.com/dpkingii/PredictingProfessorRating",
    slides:
      "https://docs.google.com/presentation/d/1ZMibFFO4Uu8lSp2cKLQP4mOkvs8rS6rBQGHvfSQlXj0/edit?usp=sharing",
    tags: ["Python", "scikit-learn", "pandas"],
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
