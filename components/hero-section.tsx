"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/60"></div>
        
        {/* Accent glows */}
        <div className="absolute top-1/4 left-0 w-3/4 h-1/2 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl rounded-full"></div>
      </div>
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-t border-primary/10 rotate-12"></div>
      </div>
  
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-block mb-4">
                <motion.span
                  className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  New Collection Available Now
                </motion.span>
              </div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight cyber-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <span className="block">Future-Forward</span>
                <span className="block text-gradient-neon bg-clip-text text-transparent">Footwear Revolution</span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Experience our cutting-edge <span className="text-gradient-primary font-medium">KixKart</span> collection—where futuristic design meets unparalleled comfort and performance.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Button asChild size="lg" className="cyber-button group">
                  <Link href="/products">
                    Shop Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  <Link href="/about">
                    Our Story
                  </Link>
                </Button>
              </motion.div>
              
              {/* Features/Benefits */}
              <motion.div 
                className="mt-8 grid grid-cols-3 gap-4 lg:max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-primary mb-1">Free</div>
                  <div className="text-xs text-muted-foreground">Shipping</div>
                </div>
                <div className="text-center">
                  <div className="text-primary mb-1">30 Day</div>
                  <div className="text-xs text-muted-foreground">Returns</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden">
              {/* Decorative border */}
              <div className="absolute inset-0 border border-primary/20 rounded-2xl z-[1]"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/30 z-[1]"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/30 z-[1]"></div>
              
              {/* Pulse effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
                <div className="absolute w-3/4 h-3/4 rounded-full bg-primary/5 animate-pulse"></div>
              </div>
              
              {/* Product image */}
              <Image
                src="/nike.png"
                alt="KixKart Featured Product"
                fill
                className="object-contain z-[2] relative"
                priority
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/50 rounded-xl z-[3]"></div>
              
              {/* Product highlight box */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-background/80 backdrop-blur-md rounded-lg border border-primary/20 z-[4]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold cyber-title-accent">Neo Spectra X9</div>
                    <div className="text-xs text-muted-foreground">Limited Edition</div>
                  </div>
                  <div className="text-primary font-bold">$249.99</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
