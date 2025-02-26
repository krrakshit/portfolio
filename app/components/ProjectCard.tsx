"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 0.85 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <p className="text-white text-center">{project.description}</p>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-500 h-36">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

