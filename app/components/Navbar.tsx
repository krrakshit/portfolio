import Link from "next/link"
import ShinyText from "@/components/ShinyText"

const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <ShinyText text="RAKSHIT" disabled={false} speed={3}/>
        </Link>
        <ul className="flex space-x-8">
          <li className="px-2">
            <Link href="/" className="hover:text-gray-300">
              <ShinyText text="Home" disabled={false} speed={3}  />
            </Link>
          </li>
          <li className="px-2">
            <Link href="/projects" className="hover:text-gray-300">
              <ShinyText text="Projects" disabled={false} speed={3}  />
            </Link>
          </li>
          <li className="px-2">
            <Link href="/skills" className="hover:text-gray-300">
              <ShinyText text="Skills" disabled={false} speed={3}  />
            </Link>
          </li>
          <li className="px-2">
            <Link href="/about" className="hover:text-gray-300">
              <ShinyText text="About" disabled={false} speed={3}  />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar