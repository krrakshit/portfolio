import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import StructuredData from "./components/StructuredData"
import SEOMonitoring from "./components/SEOMonitoring"
import type React from "react" // Added import for React
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: {
    default: "Kumar Rakshit | Full Stack Developer Portfolio",
    template: "%s | Kumar Rakshit - Full Stack Developer",
  },
  description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. View my projects, certifications, and get in touch for collaboration.",
  keywords: [
    "Kumar Rakshit", "Full Stack Developer", "React Developer", "Next.js Developer",
    "TypeScript", "JavaScript", "Node.js", "Web Development", "Frontend Developer",
    "Backend Developer", "Portfolio", "Software Engineer", "Web Applications",
    "Responsive Design", "API Development", "Database Design", "UI/UX"
  ],
  authors: [{ name: "Kumar Rakshit", url: "https://rexit.live" }],
  creator: "Kumar Rakshit",
  publisher: "Kumar Rakshit",
  metadataBase: new URL("https://rexit.live"),
  alternates: {
    canonical: "https://rexit.live",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Kumar Rakshit | Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Explore my projects, certifications, and technical expertise.",
    url: "https://rexit.live",
    siteName: "Kumar Rakshit - Full Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kumar Rakshit - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Rakshit | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. View my projects and technical expertise.",
    creator: "@_kr_rakshit",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <SEOMonitoring />
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  )
}