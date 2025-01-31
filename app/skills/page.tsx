"use client"
import dynamic from "next/dynamic"

const SkillsSphere = dynamic(() => import("../components/SkillsSphere"), { ssr: false })

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <SkillsSphere />
    </div>
  )
}

