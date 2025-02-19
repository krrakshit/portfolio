import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio showcasing projects and skills",
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
      </body>
    </html>
  )
}

