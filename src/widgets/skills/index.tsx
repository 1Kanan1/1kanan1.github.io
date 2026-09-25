import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export interface SkillCategory {
  title: string;
  skills: string[];
}

const defaultSkillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Router",
      "TanStack Query",
      "Redux",
      "TailwindCSS",
      "MUI",
    ],
  },
  {
    title: "Backend & Databases",
    skills: ["Python", "FastAPI", "AsyncIO", "PostgreSQL", "SQLAlchemy", "REST", "JWT"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "Linux", "CI/CD", "Postman", "ESLint", "Prettier"],
  },
  {
    title: "Workflows",
    skills: ["Agile", "Scrum", "Code Review"],
  },
];

interface SkillsProps {
  categories?: SkillCategory[];
  className?: string;
}

export default function Skills({ categories = defaultSkillCategories, className }: SkillsProps) {
  return (
    <section id="skills" className={cn("bg-transparent py-24 md:py-32 text-foreground", className)}>
      <Container>
        <div className="w-full max-w-2xl">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
            Skills & Tools
          </h2>

          {/* Categories */}
          <div className="mt-12 space-y-10">
            {categories.map((category) => (
              <div key={category.title} className="flex flex-col gap-3.5">
                <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground">
                  {category.title}
                </h3>

                <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs sm:text-sm font-mono text-muted-foreground transition-colors duration-300 hover:border-foreground/30 hover:bg-muted/70 hover:text-foreground cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
