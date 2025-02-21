import Image from "next/image"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Image src="/pfp.jpg" alt="Your Name" width={300} height={300} className="rounded-full" />
        <div>
          <p className="mb-4">
            Hello! I&apos;m Rakshit, a passionate web developer with expertise in building modern, responsive, and
            user-friendly applications. With a strong foundation in both front-end and back-end technologies, I strive
            to create seamless digital experiences that solve real-world problems.
          </p>
          <p className="mb-4">
            My journey in web development began few months ago, and since then, I&apos;ve had the opportunity to work on a
            diverse range of projects. I&apos;m
            constantly learning and staying up-to-date with the latest technologies and best practices in the
            ever-evolving world of web development.
          </p>
          <p>
            When I&apos;m not coding, you can find me playing football. I believe in the power of technology to
            make a positive impact on people&apos;s lives, and I&apos;m always excited to take on new challenges and collaborate
            on innovative projects.
          </p>
        </div>
      </div>
    </div>
  )
}

