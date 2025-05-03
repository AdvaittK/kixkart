"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsletterCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Cyberpunk-style grid lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Glowing accent elements */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
      <div className="absolute right-1/4 top-1/4 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full"></div>
      
      <div ref={ref} className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.span 
              className="inline-block cyber-subheading text-sm font-medium tracking-wide text-primary mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              JOIN THE MOVEMENT
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold cyber-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Stay Updated <span className="text-gradient-primary">on Exclusive Drops</span>
            </motion.h2>
            <motion.p 
              className="mt-3 text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Subscribe to our newsletter and be the first to know about new releases, 
              exclusive offers, and limited edition drops before they're gone.
            </motion.p>
          </div>
          
          <motion.form 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl opacity-30 -z-10 rounded-lg" />
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-secondary/50 border-primary/30 backdrop-blur-sm"
            />
            <Button type="submit" className="cyber-button group flex items-center gap-2">
              Subscribe 
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>
          
          <motion.div
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </motion.div>
        </motion.div>
      </div>
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-t border-primary/10 rotate-12"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] border-t border-primary/10 rotate-[28deg]"></div>
      </div>
    </section>
  )
}
