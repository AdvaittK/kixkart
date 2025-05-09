"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, Filter, ChevronDown, Star } from "lucide-react"

const brands = ["Nike", "Adidas", "Under Armour", "Reebok", "Puma", "New Balance", "Asics"]
const sizes = ["US 7", "US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 11.5", "US 12"]
const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Gray"]

// Mock data for products
const products = [
  {
    id: 1,
    name: "Nike Metcon 8",
    brand: "Nike",
    price: 130,
    rating: 4.8,
    reviews: 245,
    image: "/1.png",
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Adidas Powerlift 5",
    brand: "Adidas",
    price: 110,
    rating: 4.7,
    reviews: 189,
    image: "/2.png",
    colors: ["Black", "White", "Blue"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Under Armour Tribase Reign 4",
    brand: "Under Armour",
    price: 140,
    rating: 4.6,
    reviews: 156,
    image: "/3.png",
    colors: ["Black", "Gray", "White"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Reebok Nano X2",
    brand: "Reebok",
    price: 120,
    rating: 4.5,
    reviews: 134,
    image: "/4.png",
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Puma FUSE 2.0",
    brand: "Puma",
    price: 100,
    rating: 4.4,
    reviews: 98,
    image: "/5.png",
    colors: ["Black", "Blue", "White"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: true,
    isSale: false,
  },
  {
    id: 6,
    name: "New Balance Minimus TR",
    brand: "New Balance",
    price: 110,
    rating: 4.3,
    reviews: 87,
    image: "/6.png",
    colors: ["Black", "Green", "White"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: false,
    isSale: true,
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

export default function TrainingPage() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container py-8"
    >
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight cyberpunk-text">Training</h1>
          <p className="text-muted-foreground">
            Elevate your training with our collection of high-performance training shoes. Perfect for cross-training, weightlifting, and HIIT workouts.
          </p>
        </motion.div>

        {/* Filters and Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Filters Sidebar */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-effect p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Price Range</h3>
                <Slider
                  defaultValue={[0, 300]}
                  max={300}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$300</span>
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label
                        htmlFor={brand}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Sizes</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="w-full text-sm"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Colors</h3>
                <div className="grid grid-cols-3 gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant="outline"
                      className="w-full text-sm"
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="space-y-6">
            {/* Sort and Filter Bar */}
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Sort
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative glass-effect rounded-lg overflow-hidden"
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-2 left-2 bg-primary">
                          New
                        </Badge>
                      )}
                      {product.isSale && (
                        <Badge className="absolute top-2 right-2 bg-destructive">
                          Sale
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="font-bold">${product.price}</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.brand}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 