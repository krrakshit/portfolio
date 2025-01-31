"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere, Html } from "@react-three/drei"
import type * as THREE from "three"
import { FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiTypescript, SiExpress } from "react-icons/si"

const SkillIcon = ({
  position,
  Icon,
  name,
}: { position: [number, number, number]; Icon: React.ElementType; name: string }) => {
  return (
    <Html position={position} center>
      <div className="flex flex-col items-center">
        <Icon className="text-4xl" />
        <span className="text-sm">{name}</span>
      </div>
    </Html>
  )
}

const RotatingSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null)
  const [skillIcons] = useState([
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: FaReact, name: "React" },
    { Icon: FaJs, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiExpress, name: "Express" },
    { Icon: FaHtml5, name: "HTML5" },
    { Icon: FaCss3, name: "CSS3" },
  ])

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005
    }
  })

  return (
    <Sphere ref={sphereRef} args={[2, 32, 32]} visible={false}>
      {skillIcons.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skillIcons.length)
        const theta = Math.sqrt(skillIcons.length * Math.PI) * phi
        const x = 2 * Math.cos(theta) * Math.sin(phi)
        const y = 2 * Math.sin(theta) * Math.sin(phi)
        const z = 2 * Math.cos(phi)
        return <SkillIcon key={index} position={[x, y, z]} Icon={skill.Icon} name={skill.name} />
      })}
    </Sphere>
  )
}

const SkillsSphere = () => {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <RotatingSphere />
      </Canvas>
    </div>
  )
}

export default SkillsSphere

