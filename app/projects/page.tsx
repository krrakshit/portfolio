import ProjectCard from "../components/ProjectCard"
export const dynamic = "force-dynamic"

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
    id: 3,
    title: "Stratum",
    description: "Explore System Design Concepts",
    image: "/Screenshot 2025-02-22 120437.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Notion",],
    link: "https://stratum.rexit.live",
  }, {
    id: 4,
    title: "Writeflow",
    description: "AI based SEO content Generator",
    image: "/Screenshot 2025-02-26 102700.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Gemini",],
    link: "https://writeflow.rexit.live",
  }
  , {
    id: 5,
    title: "Chat-App",
    description: "Realtime chat application",
    image: "/chat.png",
    technologies: ["React-JS", "Express", "Tailwind CSS","MongoDb","Socket IO","Daisy UI","Express"],
    link: "https://chat.rexit.live",
  },
  {
    id: 6,
    title: "WebRTC-screen-share",
    description: "Realtime ScreenSharing Application",
    image: "/webrtc.png",
    technologies: ["NEXT JS","Tailwind CSS","Gemini AI","ShadCN"],
    link: "https://webrtc.rexit.live",
  },
  {
    id: 7,
    title: "Code-converter",
    description: "Convert code on the go!",
    image: "/codec.png",
    technologies: ["NEXT JS","Tailwind CSS","Gemini AI","Accertinity UI"],
    link: "https://codec.rexit.live",
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

