import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const LetsConnect = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:your.email@example.com" className="text-3xl hover:text-red-600">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default LetsConnect

