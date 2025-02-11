import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/projects/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://project1.example.com",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/projects/project2.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://project2.example.com",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

