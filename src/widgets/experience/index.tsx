import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";
import Image from "next/image";

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  logo?: string;
  description: string | string[];
  skills: string[];
}

const defaultExperiences: ExperienceItem[] = [
  {
    id: "andersen",
    period: "Aug 2025 – Aug 2026",
    role: "Frontend Developer",
    company: "Andersen Lab",
    logo: "/andersen-logo.png",
    description: [
      "Developed production web application features using React, Next.js, and TypeScript, based on business requirements and UI designs.",
      "Built reusable UI components and responsive interfaces using TailwindCSS and MUI.",
      "Implemented client-side state management and asynchronous data fetching with Redux, TanStack Query, and Axios.",
      "Integrated frontend applications with REST APIs, handling data, loading states, validation, and errors.",
      "Collaborated with developers, QA, and other team members in an Agile/Scrum environment to deliver and maintain production features.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Docker",
      "React Router",
      "TanStack Query",
      "Redux",
      "TailwindCSS",
      "MUI",
    ],
  },
  {
    id: "company",
    period: "Mar 2024 – May 2025",
    role: "Python Backend Developer",
    company: "Freelance",
    description: [
      "Developed and maintained REST APIs and backend services using Python, FastAPI, PostgreSQL, and SQLAlchemy for web applications.",
      "Built asynchronous API endpoints and implemented application logic, database operations, and data models for core features.",
      "Implemented JWT-based authentication and integrated third-party services into backend workflows.",
      "Containerized applications with Docker and configured GitHub Actions workflows for automated testing and deployment.",
      "Worked with a microservices-oriented architecture, contributing to the development and integration of independent backend services.",
    ],
    skills: ["Python", "FastAPI", "PostgreSQL"],
  },
];

interface ExperienceProps {
  items?: ExperienceItem[];
  className?: string;
}

export default function Experience({ items = defaultExperiences, className }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={cn("bg-transparent py-24 md:py-32 text-foreground", className)}
    >
      <Container>
        <div className="w-full max-w-2xl">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Work Experience
          </h2>

          {/* Timeline */}
          <div className="mt-12 flex">
            {/* Vertical Connector Line */}
            <div className="w-0.5 shrink-0 mt-1.5 bg-border" />

            <ol className="relative">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const description = item.description;
                const isString = typeof description === "string";

                return (
                  <li key={item.id} className={cn("group relative pl-7", !isLast && "pb-12")}>
                    {/* Timeline Node Dot */}
                    <span
                      className="absolute -left-1.75 top-1.5 size-3 rounded-full border-2 border-background bg-muted-foreground ring-2 ring-border transition-all duration-500 group-hover:ring-muted-foreground"
                      aria-hidden="true"
                    />

                    {/* Period */}
                    <time className="text-xs font-mono font-medium tracking-wide text-muted-foreground">
                      {item.period}
                    </time>

                    {/* Role Title */}
                    <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.role}
                    </h3>

                    {/* Company */}
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={`${item.company} logo`}
                          width={18}
                          height={18}
                          className="rounded-sm object-contain"
                        />
                      ) : (
                        <Building2
                          className="size-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                      )}
                      <span className="font-medium text-foreground/90">{item.company}</span>
                    </div>

                    {/* Description */}
                    <div className="mt-3 text-sm leading-relaxed text-muted-foreground font-light">
                      {isString ? (
                        <p>{description}</p>
                      ) : (
                        <ul className="space-y-1.5 list-disc list-outside pl-4 marker:text-muted-foreground/60">
                          {description.map((desc) => (
                            <li key={desc}>{desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Skills Tags */}
                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label={`Technologies used at ${item.company}`}
                    >
                      {item.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-mono text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-hover:border-foreground/20"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
