import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

