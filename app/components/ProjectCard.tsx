import Image from "next/image"
import Link from "next/link"
import type React from "react" // Added import for React

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={imageUrl || "/placeholder.svg"} alt={title} width={400} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          href={projectUrl}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          View Project
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

