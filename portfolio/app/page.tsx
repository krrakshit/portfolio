import TechStack from "./components/TechStack"
import LetsConnect from "./components/LetsConnect"

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-center">Welcome to My Portfolio</h1>
      <TechStack />
      <LetsConnect />
    </div>
  )
}

