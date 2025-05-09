"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: 1,
    name: "Running",
    image: "/running.jpg",
    count: 24,
    link: "/category/running",
  },
  {
    id: 2,
    name: "Basketball",
    image: "/basketball.jpg",
    count: 18,
    link: "/category/basketball",
  },
  {
    id: 3,
    name: "Lifestyle",
    image: "/lifestyle.jpg",
    count: 36,
    link: "/category/lifestyle",
  },
  {
    id: 4,
    name: "Training",
    image: "/training.png",
    count: 16,
    link: "/category/training",
  },
]

export default function FeaturedCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent blur-3xl rounded-full -z-10"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-2">
            <span className="cyber-subheading text-sm tracking-widest text-primary">
              EXPLORE BY STYLE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 cyber-heading">
            Featured Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collections of <span className="text-gradient-primary">premium footwear</span> designed for every occasion
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Link href={category.link} className="block group">
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors duration-300 h-full bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0 relative aspect-[4/5] overflow-hidden">
                    {/* Image */}
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                      {/* Line accent */}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white/90 cyber-title-accent mb-1">
                        {category.name}
                      </h3>
                      
                      <p className="text-sm text-white/60">
                        {category.count} products
                      </p>
                      
                      <div className="mt-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <span className="text-xs uppercase tracking-wider font-medium text-primary flex items-center">
                          Explore Collection
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
