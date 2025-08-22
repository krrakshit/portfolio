import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import type React from "react" // Added import for React
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Rakshit | Portfolio",
    template: "%s | Rakshit",
  },
  description: "Rakshit's Full Stack Developer Portfolio showcasing projects, skills, and experience.",
  keywords: ["Rakshit", "Portfolio", "Full Stack Developer", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Rakshit" }],
  creator: "Rakshit",
  metadataBase: new URL("https:rexit.live"), // Replace with your domain
  openGraph: {
    title: "Rakshit | Portfolio",
    description: "Explore Rakshit's full stack development portfolio, featuring tech stacks, certifications, and contact info.",
    url: "https://rexit.live",
    siteName: "Kumar Rakshit Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rakshit Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakshit | Portfolio",
    description: "Check out Rakshit's projects and skills as a full stack developer.",
    creator: "@_kr_rakshit",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  )
}