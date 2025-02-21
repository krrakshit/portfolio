import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const LetsConnect = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/krrakshit"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rex7t"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:rkrkr365@gmail.com" className="text-3xl hover:text-red-600">
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default LetsConnect

