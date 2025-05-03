"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const hotDrops = [
  {
    id: 1,
    name: "CyberGlide X9",
    price: 289.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Nike",
    isNew: true,
    isSoldOut: false,
    badgeText: "Hot Drop"
  },
  {
    id: 2,
    name: "Quantum Force",
    price: 249.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Adidas",
    isNew: false,
    isSoldOut: true,
    badgeText: "Sold Out"
  },
  {
    id: 3,
    name: "Neon Runner",
    price: 219.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Puma",
    isNew: true,
    isSoldOut: false,
    badgeText: "Trending"
  },
]

export default function HotDrops() {
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
    hidden: { opacity: 0, y: 30 },
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
    <section className="py-16 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 bg-gradient-to-r from-primary/20 to-transparent blur-xl rounded-full"></div>
      <div className="absolute right-0 bottom-10 w-36 h-36 bg-gradient-to-l from-blue-500/20 to-transparent blur-xl rounded-full"></div>
      
      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-3xl md:text-4xl cyber-heading">Hot Drops</h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Limited edition releases and <span className="text-gradient-primary">most-wanted</span> styles
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/hot-drops">
              <Button variant="outline" className="glass-effect hover:bg-primary/10 transition-colors">
                View All
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hotDrops.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 product-card">
                <Link href={`/product/${product.id}`} className="block relative">
                  <CardContent className="p-0 relative aspect-square group overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-white">
                        {product.badgeText}
                      </Badge>
                    </div>
                    
                    {/* Quick action buttons that appear on hover */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <Button size="sm" variant="secondary" className="glass-effect">
                        Quick View
                      </Button>
                    </div>
                  </CardContent>
                </Link>
                
                <CardFooter className="flex flex-col items-start bg-gradient-to-b from-card/80 to-card px-4 py-5">
                  <div className="w-full flex justify-between items-start">
                    <div>
                      <div className="text-sm text-primary font-medium mb-1">{product.brand}</div>
                      <h3 className="font-bold text-lg">{product.name}</h3>
                    </div>
                    <div className={`text-lg font-bold ${product.isSoldOut ? 'text-red-500' : 'cyber-title-accent'}`}>
                      ${product.price}
                    </div>
                  </div>
                  
                  <div className="w-full mt-4">
                    <Button 
                      className="w-full cyber-button"
                      disabled={product.isSoldOut}
                    >
                      {product.isSoldOut ? 'Sold Out' : 'Add to Cart'}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
