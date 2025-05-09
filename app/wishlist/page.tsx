"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star, Trash2 } from "lucide-react"

// Mock data for wishlist items
const wishlistItems = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150,
    rating: 4.5,
    reviews: 128,
    image: "/products/nike-air-max-270.jpg",
    colors: ["Black", "White", "Red"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 180,
    rating: 4.8,
    reviews: 256,
    image: "/products/adidas-ultraboost-22.jpg",
    colors: ["Black", "White", "Blue"],
    sizes: ["US 7", "US 8", "US 9", "US 10"],
    isNew: false,
    isSale: true,
  },
  // Add more items as needed
]

export default function WishlistPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight cyberpunk-text">Wishlist</h1>
            <Badge className="bg-primary text-white px-3 py-1">
              {wishlistItems.length} items
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Your saved items. Add items to your wishlist to keep track of products you love.
          </p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative glass-effect rounded-lg overflow-hidden"
            >
              <Link href={`/product/${item.id}`}>
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {item.isNew && (
                    <Badge className="absolute top-2 left-2 bg-primary">
                      New
                    </Badge>
                  )}
                  {item.isSale && (
                    <Badge className="absolute top-2 right-2 bg-destructive">
                      Sale
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-bold">${item.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.brand}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 text-sm">{item.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({item.reviews} reviews)
                    </span>
                  </div>
                  <Button className="w-full" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Heart className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding items to your wishlist to keep track of products you love.
            </p>
            <Button asChild>
              <Link href="/category/sneakers">
                Browse Products
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 