"use client"

import { useEffect, useRef } from "react"
import TagCloud from "TagCloud"

const SkillsSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Next.js",
      "Git",
      "Tailwind CSS",
      "RESTful API",
      "GraphQL",
      "Webpack",
      "Babel",
      "Jest",
      "Docker",
      "AWS",
      "Redux",
      "Sass",
      "PostgreSQL",
    ]

    if (container) {
      const tagCloud = TagCloud([container], texts, {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      })

      return () => {
        tagCloud.destroy()
      }
    }
  }, [])

  return (
    <div className="flex justify-center items-center h-[600px]">
      <div ref={containerRef} className="text-2xl"></div>
    </div>
  )
}

export default SkillsSphere

