export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kumar Rakshit",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies",
    "url": "https://rexit.live",
    "image": "https://rexit.live/pfp.jpg",
    "sameAs": [
      "https://twitter.com/_kr_rakshit",
      "https://github.com/rakshit", // Update with your actual GitHub URL
      "https://linkedin.com/in/rakshit" // Update with your actual LinkedIn URL
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Your University/College" // Update with your actual education
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer" // Update with your current work status
    }
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kumar Rakshit Portfolio",
    "description": "Full Stack Developer Portfolio showcasing projects, skills, and experience",
    "url": "https://rexit.live",
    "author": {
      "@type": "Person",
      "name": "Kumar Rakshit"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rexit.live/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  )
}
