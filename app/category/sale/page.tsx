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

const brands = ["Nike", "Adidas", "Converse", "New Balance", "Puma", "Reebok", "Vans", "Jordan"]
const categories = ["Sneakers", "Streetwear", "Limited Editions", "Accessories"]
const colors = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Gray", "Brown"]

// Mock data for products
const products = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    price: 89.99,
    originalPrice: 129.99,
    discount: 30,
    rating: 4.7,
    reviews: 256,
    image: "/4.png",
    colors: ["Black", "White"],
    category: "Sneakers",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Adidas Originals Superstar",
    brand: "Adidas",
    price: 69.99,
    originalPrice: 99.99,
    discount: 30,
    rating: 4.8,
    reviews: 189,
    image: "/4.png",
    colors: ["White", "Black"],
    category: "Sneakers",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Nike Sportswear Club Fleece",
    brand: "Nike",
    price: 49.99,
    originalPrice: 79.99,
    discount: 37,
    rating: 4.6,
    reviews: 145,
    image: "/4.png",
    colors: ["Black", "Gray"],
    category: "Streetwear",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "New Balance 574 Classic",
    brand: "New Balance",
    price: 79.99,
    originalPrice: 119.99,
    discount: 33,
    rating: 4.5,
    reviews: 98,
    image: "/4.png",
    colors: ["Gray", "Blue"],
    category: "Sneakers",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Puma RS-X Reinvention",
    brand: "Puma",
    price: 69.99,
    originalPrice: 109.99,
    discount: 36,
    rating: 4.4,
    reviews: 112,
    image: "/4.png",
    colors: ["Black", "Red"],
    category: "Sneakers",
    isNew: false,
    isSale: true,
  },
  {
    id: 6,
    name: "Reebok Classic Leather",
    brand: "Reebok",
    price: 59.99,
    originalPrice: 89.99,
    discount: 33,
    rating: 4.3,
    reviews: 89,
    image: "/4.png",
    colors: ["White", "Black"],
    category: "Sneakers",
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

export default function SalePage() {
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
          <h1 className="text-4xl font-bold tracking-tight cyberpunk-text">Sale</h1>
          <p className="text-muted-foreground">
            Discover amazing deals on our premium collection. Limited time offers on selected items.
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
                  defaultValue={[0, 500]}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
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
                      <Badge className="absolute top-2 left-2 bg-destructive">
                        {product.discount}% OFF
                      </Badge>
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
                        <div className="flex flex-col items-end">
                          <p className="font-bold">${product.price}</p>
                          <p className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {product.brand} • {product.category}
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