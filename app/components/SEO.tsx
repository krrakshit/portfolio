import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
}

export function generateSEOMetadata({
  title = "Kumar Rakshit | Full Stack Developer Portfolio",
  description = "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
  keywords = ["Kumar Rakshit", "Full Stack Developer", "React", "Next.js", "TypeScript"],
  image = "/og-image.png",
  url = "https://rexit.live",
  type = "website"
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Component for adding additional SEO elements to specific pages
export default function SEO({  
  structuredData 
}: {
  title?: string
  description?: string
  keywords?: string[]
  structuredData?: object
}) {
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  )
}
