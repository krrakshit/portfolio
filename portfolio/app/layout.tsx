import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Rakshit - Portfolio",
  description: "Personal portfolio showcasing projects and skills",
}
export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container mx-auto px-4 py-8">
          {/* Removed {children} as it is no longer needed */}
        </main>
      </body>
    </html>
  )
}
