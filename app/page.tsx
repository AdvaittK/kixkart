"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import HeroSection from "@/components/hero-section"
import NewArrivals from "@/components/new-arrivals"
import FeaturedCategories from "@/components/featured-categories"
import HotDrops from "@/components/hot-drops"
import NewsletterCTA from "@/components/newsletter-cta"
import Testimonials from "@/components/testimonials"
import CyberpunkElements from "@/components/cyberpunk-elements"
import CyberpunkDataStreams from "@/components/cyberpunk-data-streams"

const featuredCategories = [
  {
    name: "Running",
    description: "Performance running shoes for every pace",
    image: "/running.jpg",
    link: "/category/running",
  },
  {
    name: "Basketball",
    description: "Court-ready basketball shoes",
    image: "/basketball.jpg",
    link: "/category/basketball",
  },
  {
    name: "Training",
    description: "Versatile training shoes for all workouts",
    image: "/training.png",
    link: "/category/training",
  },
  {
    name: "Lifestyle",
    description: "Stylish everyday sneakers",
    image: "/lifestyle.jpg",
    link: "/category/lifestyle",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute right-10 top-3/4 w-48 h-48 bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl rounded-full"></div>
      </div>
      
      {/* Animated data streams in background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <CyberpunkDataStreams />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <CyberpunkElements />
        <NewArrivals />
        <FeaturedCategories />
        <HotDrops />
        <Testimonials />
        <NewsletterCTA />
      </div>
    </main>
  )
}
