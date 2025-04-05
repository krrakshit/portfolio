import Image from 'next/image'

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Node(Basic) Certificate",
    issuer: "HackerRank",
    date: "2025",
    imageUrl: "/node.png",
    link: "https://www.hackerrank.com/certificates/e0b6b93c4ed2"
  },
  {
    title: "Java(Basic) Certificate",
    issuer: "HackerRank",
    date: "2024",
    imageUrl: "/java.png",
    link: "https://www.hackerrank.com/certificates/5590e1f69fdd"
  }
];

export default function Certificates() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            className="bg-foreground/10 backdrop-blur-sm rounded-lg p-6 hover:bg-foreground/20 transition-all duration-300"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
            <p className="text-foreground/70 mb-2">{cert.issuer}</p>
            <p className="text-foreground/50 mb-4">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 