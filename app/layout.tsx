import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import type React from "react" // Added import for React
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Rakshit | Full Stack Developer Portfolio",
    template: "%s | Rakshit",
  },
  description:
    "Explore Rakshit's portfolio — a Full Stack Developer skilled in Next.js, TypeScript, React, Node.js, and modern web technologies. View projects, experience, and certifications.",
  keywords: [
    "Rakshit",
    "Kumar Rakshit",
    "Full Stack Developer",
    "Portfolio",
    "Next.js Developer",
    "TypeScript",
    "React Developer",
    "Node.js",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Rakshit", url: "https://rakshit.online" }],
  creator: "Rakshit",
  publisher: "Rakshit",
  metadataBase: new URL("https://rakshit.online"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rakshit | Full Stack Developer Portfolio",
    description:
      "Explore Rakshit's full stack development portfolio, featuring projects, tech stacks, certifications, and contact info.",
    url: "https://rakshit.online",
    siteName: "Rakshit Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rakshit — Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakshit | Full Stack Developer Portfolio",
    description:
      "Check out Rakshit's projects, skills, and experience as a full stack developer.",
    creator: "@_kr_rakshit",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  category: "technology",
}

// JSON-LD Structured Data for Person (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rakshit",
  url: "https://rakshit.online",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, React, and Node.js.",
  sameAs: [
    "https://github.com/krrakshit",
    "https://twitter.com/_kr_rakshit",
    // Add LinkedIn URL here: "https://linkedin.com/in/your-profile"
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "WebSockets",
    "Tailwind CSS",
    "Docker",
    "AWS",
  ],
}

// JSON-LD for the Website itself
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rakshit Portfolio",
  url: "https://rakshit.online",
  description:
    "Full Stack Developer Portfolio — Projects, Skills, and Experience",
  author: {
    "@type": "Person",
    name: "Rakshit",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}