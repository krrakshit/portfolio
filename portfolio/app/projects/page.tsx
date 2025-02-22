import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    id: 1,
    title: "PRO-HELPER",
    description: "Get your projects on the go",
    image: "/Screenshot 2025-01-24 001353.png",
    technologies: ["Next.js", "TypeScript", "GEMINI","Tailwind CSS"],
    link: "https://pro-helper.rexit.live",
  },
  {
    id: 2,
    title: "Echo Words",
    description: "Thoughts Sharing in 60 words",
    
    image: "/Screenshot 2025-02-19 131628.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","PostgreSQL","PRISMA"],
    link: "https://echo-words.rexit.live",
  },
  {
    id: 2,
    title: "Stratum",
    description: "Explore System Design Concepts",
    image: "Screenshot 2025-02-22 120437.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Notion",],
    link: "https://stratum.rexit.live",
  }
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

