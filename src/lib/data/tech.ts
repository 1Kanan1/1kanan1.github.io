export const techIcons: Record<string, string> = {
  typescript: "devicon-typescript-plain",
  python: "devicon-python-plain",
  react: "devicon-react-original",
  svelte: "devicon-svelte-plain",
  "tailwind css": "devicon-tailwindcss-plain",
  redux: "devicon-redux-original",
  "next.js": "devicon-nextjs-plain",
  "node.js": "devicon-nodejs-plain",
  bun: "devicon-bun-plain",
  postgresql: "devicon-postgresql-plain",
  mongodb: "devicon-mongodb-plain",
  prisma: "devicon-prisma-original",
  git: "devicon-git-plain",
  github: "devicon-github-original",
  gitlab: "devicon-gitlab-plain",
  docker: "devicon-docker-plain",
  figma: "devicon-figma-plain",
  fastapi: "devicon-fastapi-plain",
};

export const techUrls: Record<string, string> = {
  typescript: "https://www.typescriptlang.org/",
  python: "https://www.python.org/",
  react: "https://react.dev/",
  svelte: "https://svelte.dev/",
  "tailwind css": "https://tailwindcss.com/",
  redux: "https://redux.js.org/",
  "next.js": "https://nextjs.org/",
  "node.js": "https://nodejs.org/",
  bun: "https://bun.sh/",
  postgresql: "https://www.postgresql.org/",
  mongodb: "https://www.mongodb.com/",
  prisma: "https://www.prisma.io/",
  git: "https://git-scm.com/",
  github: "https://github.com/",
  gitlab: "https://gitlab.com/",
  docker: "https://www.docker.com/",
  figma: "https://www.figma.com/",
  radix: "https://www.radix-ui.com/",
  fastapi: "https://fastapi.tiangolo.com/",
};

export function getTechIcon(name: string): string | null {
  return techIcons[name.toLowerCase()] || null;
}

export function getTechUrl(name: string): string | null {
  return techUrls[name.toLowerCase()] || null;
}
