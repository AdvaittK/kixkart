"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Nike Air Quantum X",
    price: 249.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Nike",
    isNew: true,
    category: "Sneakers",
  },
  {
    id: 2,
    name: "Adidas Cyber Boost",
    price: 219.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Adidas",
    isNew: false,
    category: "Sneakers",
  },
  {
    id: 3,
    name: "Jordan Neon Retro",
    price: 229.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "Jordan",
    isNew: true,
    category: "Sneakers",
  },
  {
    id: 4,
    name: "New Balance 990v6",
    price: 199.99,
    image: "/images/sneakers/sneaker-1.jpg",
    brand: "New Balance",
    isNew: false,
    category: "Sneakers",
  },
  
  
]

export default function NewArrivals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="py-16 bg-gradient-to-b from-transparent to-card/30 relative">
      {/* Background accent elements */}
      <div className="absolute left-0 top-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-transparent blur-2xl rounded-full"></div>
      <div className="absolute right-10 bottom-10 w-32 h-32 bg-gradient-to-l from-blue-500/10 to-transparent blur-2xl rounded-full"></div>
      
      <div className="container relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-3xl md:text-4xl font-bold cyber-heading">New Arrivals</h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Fresh drops and <span className="text-gradient-primary">latest releases</span> to elevate your style
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/new-arrivals">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="overflow-hidden border-0 product-card h-full">
                <Link href={`/product/${product.id}`} className="block group">
                  <CardContent className="p-0 relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40 z-10" />
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* New badge */}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 z-20">
                        <span className="bg-primary px-2 py-0.5 text-xs font-medium text-white rounded">NEW</span>
                      </div>
                    )}
                  </CardContent>
                
                  <CardFooter className="flex flex-col items-start p-3 bg-gradient-to-b from-card/80 to-card">
                    <div className="w-full">
                      <div className="text-xs text-primary/80 mb-1">{product.brand}</div>
                      <h3 className="font-semibold text-sm md:text-base line-clamp-1 group-hover:text-white/90 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center mt-1">
                        <div className="font-bold text-sm md:text-base cyber-title-accent">${product.price}</div>
                        <div className="text-xs text-muted-foreground">{product.category}</div>
                      </div>
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
