import ProjectCard from "@/components/ProjectCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse Rakshit's full stack development projects — including real-time chat apps, exchange platforms, AI tools, and more. Built with Next.js, React, TypeScript, and modern technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Rakshit Portfolio",
    description:
      "Explore a curated collection of full stack projects by Rakshit, from AI-powered tools to real-time applications.",
    url: "https://rakshit.online/projects",
    type: "website",
  },
}

const projects = [
  {
    id: 1,
    title: "PRO-HELPER",
    description: "Get your projects on the go",
    type : "single page",
    image: "/Screenshot 2025-01-24 001353.png",
    technologies: ["Next.js", "TypeScript", "GEMINI","Tailwind CSS"],
    link: "https://pro-helper.rakshit.online",
    gitlink : "https://github.com/krrakshit/proo-helper"
  },
  {
    id: 2,
    title: "Comp Q Code",
    description: "Practise company wise leetcode problems",
    type : "single page",
    image: "/cqc.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Next-Auth","Gemini",],
    link: "https://cqc.rakshit.online",
    gitlink : "https://github.com/krrakshit/chaotic_curse"
  },
  {
    id: 3,
    title: "Exchange Project",
    description: "Exchange Project",
    image: "/exchange.png",
    technologies: ["Express","TypeScript","TimeScaleDB","WebSockets","Redis","Next"],
    type : "full stack",
    link: "https://exchange.rakshit.online",
    gitlink : "https://github.com/krrakshit/iiiiiiii"
  }, {
    id: 4,
    title: "Writeflow",
    description: "AI based SEO content Generator",
    type : "single page",
    image: "/Screenshot 2025-02-26 102700.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","Gemini",],
    link: "https://writeflow.rakshit.online",
    gitlink : "https://github.com/krrakshit/WriteFlow"
  }
  , {
    id: 5,
    title: "Chat-App",
    description: "Realtime chat application",
    image: "/chat.png",
    type : "full stack",
    technologies: ["React-JS", "Express", "Tailwind CSS","MongoDb","Socket IO","Daisy UI","Express"],
    link: "https://chat.rakshit.online",
    gitlink : "https://github.com/krrakshit/CHAT_APP"
  },
  {
    id: 6,
    title: "Notify-Hub",
    description: "Realtime Notifications sharing",
    image: "/noti.png",
    type : "full stack",
    technologies: ["NEXT JS","Tailwind CSS","WebSocket","Redis","Prisma","Postgres"],
    link: "https://notify.rakshit.online",
    gitlink : "https://github.com/krrakshit/awsome_pacific"
  },
  {
    id: 7,
    title: "Code-converter",
    description: "Convert code on the go!",
    image: "/codec.png",
    technologies: ["NEXT JS","Tailwind CSS","Gemini AI","Accertinity UI"],
    link: "https://codec.rakshit.online",
    type : "single page",
    gitlink : "https://github.com/krrakshit/CODE-CONVERTER"

  },
  {
    id: 8,
    title: "LMS",
    description: "Course selling platform",
    image: "/lms.png",
    technologies: ["React JS","Tailwind CSS","MONGO DB","Express" , "Multer"],
    link: "https://lms.rakshit.online",
    type : "full stack",
    gitlink : "https://github.com/krrakshit/LMS"

  }
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
