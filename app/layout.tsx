import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CyberpunkElements from "@/components/cyberpunk-elements"
import CyberpunkDataStreams from "@/components/cyberpunk-data-streams"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyberkicks | Premium Sneakers & Streetwear",
  description: "Shop the latest premium sneakers and streetwear with futuristic style at Cyberkicks.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          {/* Background cyberpunk elements - z-0 ensures they stay in the background */}
          <CyberpunkElements />
          <CyberpunkDataStreams />
          
          <div className="flex min-h-screen flex-col relative z-10">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
