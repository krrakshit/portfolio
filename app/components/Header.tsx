import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

