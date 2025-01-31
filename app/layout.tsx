import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "A showcase of my skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {git 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}

