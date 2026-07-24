export const aboutData = {
  summary:
    "Software Engineer with <b>2+ years of experience</b> and a strong foundation in clean code architecture, design patterns, and scalable system design. Adept at applying SOLID, KISS, and DRY principles to eliminate technical debt and build highly maintainable applications. Experienced in optimizing backend systems, streamlining developer workflows, and delivering user-centric technical solutions.",
};

export const stackData = [
  {
    number: "01",
    category: "Languages",
    items: ["TypeScript", "Python"],
  },
  {
    number: "02",
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Svelte"],
  },
  {
    number: "03",
    category: "Backend & Database",
    items: ["Node.js", "Bun", "PostgreSQL", "MongoDB"],
  },
  {
    number: "04",
    category: "Dev Tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "Figma"],
  },
];

export const experienceData = [
  {
    company: "Andersen LLC",
    icon: "andersen",
    roles: [
      {
        id: "exp-1",
        title: "Software Engineer",
        dates: "08.2025 - 08.2026",
        description: [
          "Built scalable web applications using <b>React</b> and <b>Next.js</b>, leveraging <b>React Router</b> for client-side navigation.",
          "Integrated <b>REST/GraphQL APIs</b> using <b>Axios</b>, <b>Redux</b>, and <b>TanStack Query</b> for efficient state management.",
          "Built reusable component libraries with <b>TailwindCSS</b> & <b>MUI</b>, adhering to <b>Feature-Sliced Design (FSD)</b>.",
          "Containerized applications using <b>Docker</b> and enforced code quality with <b>ESLint</b>, <b>Prettier</b>, and <b>Oxlint</b> in an <b>Agile</b> workflow.",
        ],
        stack: [
          "typescript",
          "react",
          "redux",
          "next.js",
          "tailwind css",
          "docker",
        ],
      },
    ],
  },
  {
    company: "NurBank",
    icon: "nurbank",
    roles: [
      {
        id: "exp-2",
        title: "Python Developer",
        dates: "06.2024 - 04.2025",
        description: [
          "Engineered high-performance backend microservices using <b>Python</b> and <b>FastAPI</b>.",
          "Refactored core legacy codebases applying <b>SOLID principles</b> to reduce technical debt and improve maintainability.",
          "Optimized <b>PostgreSQL</b> queries and indexing strategies to improve data integrity and execution speed.",
          "Executed unit, integration, and API testing via <b>Pytest</b> and <b>Postman</b> to ensure contract payload validation.",
          "Streamlined deployments with <b>Docker</b> and <b>CI/CD pipelines</b>, resolving production bugs via application log analysis.",
        ],
        stack: ["python", "fastapi", "postgresql", "docker"],
      },
    ],
  },
];

export const projectsData = [
  {
    title: "Nexus",
    description:
      "A high-performance real-time task manager with collaborative workspaces. Features optimistic UI updates and conflict resolution.",
    link: "https://github.com",
    stack: ["Svelte", "TypeScript"],
  },
  {
    title: "Aura UI",
    description:
      "Accessible, headless component library focusing on keyboard navigation and strict ARIA patterns for modern frameworks.",
    link: "https://github.com",
    stack: ["React", "TailwindCSS", "Radix"],
  },
  {
    title: "DevSpace",
    description:
      "Minimalist writing platform for developers. Includes built-in syntax highlighting, markdown support, and seamless GitHub gist integration.",
    link: "https://github.com",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
  },
];
