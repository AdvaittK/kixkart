"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Sneakerhead",
    avatar: "/placeholder-user.jpg",
    content: "These are the most comfortable shoes I've ever owned. The futuristic design turns heads everywhere I go.",
    rating: 5,
  },
  {
    id: 2,
    name: "Morgan Lee",
    role: "Urban Explorer",
    avatar: "/placeholder-user.jpg",
    content: "CyberKicks have become my go-to for both style and durability. They perform exceptionally well in all urban environments.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jamie Rodriguez",
    role: "Digital Artist",
    avatar: "/placeholder-user.jpg",
    content: "As someone who values aesthetic and quality, I'm beyond impressed. The attention to detail in these designs is unmatched.",
    rating: 4,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
  
  return (
    <section ref={ref} className="py-16 relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      
      {/* Grid line accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Background accents */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 bg-blue-500/5 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-2">
            <span className="cyber-subheading text-sm tracking-widest mb-3">
              CUSTOMER VOICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 cyber-heading">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Authentic reviews from the <span className="text-gradient-primary">CyberKicks community</span>, sharing their experiences with our products
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants} transition={{ duration: 0.6 }}>
              <Card className="bg-card/50 backdrop-blur-sm border-0 relative group overflow-hidden">
                <CardContent className="p-6 relative z-10">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4 absolute -top-1 -left-1 opacity-30" />
                  
                  <div className="flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex items-center mb-4 mt-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">"{testimonial.content}"</p>
                    
                    {/* Author */}
                    <div className="flex items-center mt-4">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-sm cyber-title-accent">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/20 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/20 opacity-50"></div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
