import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CyberpunkElements from "@/components/cyberpunk-elements"
import CyberpunkDataStreams from "@/components/cyberpunk-data-streams"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KixKart - Premium Sneakers & Streetwear",
  description: "Discover the future of sneaker culture with our exclusive collection of premium kicks and streetwear.",
  icons: {
    icon: "/cyberkick.png",
  },
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
        <Toaster />
      </body>
    </html>
  )
}
