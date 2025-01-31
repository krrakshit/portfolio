import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiTypescript, SiExpress } from "react-icons/si"

export default function Home() {
  const techStack = [
    { icon: FaNodeJs, name: "Node.js" },
    { icon: FaReact, name: "React" },
    { icon: FaJs, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiExpress, name: "Express" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
  ]

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <tech.icon className="text-6xl mb-2" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

