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
  type : string
  gitlink : string
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 0.87 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
        {/* Project Type Badge */}
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            project.type === 'full stack' 
              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
              : 'bg-purple-100 text-purple-700 border border-purple-200'
          }`}>
            {project.type}
          </span>
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <p className="text-white text-center">{project.description}</p>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-500 h-44">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.link, "_blank")
            }}
            className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1 rounded text-sm transition-colors duration-200 flex-1 font-medium border border-green-200"
          >
            Live Link
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.gitlink, "_blank")
            }}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded text-sm transition-colors duration-200 flex-1 font-medium border border-slate-200"
          >
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

