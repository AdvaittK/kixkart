"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

// Mock data for cart items
const cartItems = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150,
    image: "/4.png",
    color: "Black",
    size: "US 9",
    quantity: 1,
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    price: 180,
    image: "/4.png",
    color: "White",
    size: "US 10",
    quantity: 1,
  },
]

// Calculate totals
const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
const shipping = 15
const tax = subtotal * 0.1 // 10% tax
const total = subtotal + shipping + tax

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

export default function CartPage() {
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
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold tracking-tight cyberpunk-text">Shopping Cart</h1>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Review your items and proceed to checkout.
          </p>
        </motion.div>

        {/* Cart Content */}
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Cart Items */}
            <motion.div variants={itemVariants} className="space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="glass-effect rounded-lg p-6"
                >
                  <div className="flex gap-6">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.brand} • {item.color} • {item.size}
                          </p>
                        </div>
                        <p className="font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            className="w-16 text-center"
                            readOnly
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Order Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6">
                  Proceed to Checkout
                </Button>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add items to your cart to proceed with checkout.
            </p>
            <Button asChild>
              <Link href="/category/sneakers">
                Browse Products
              </Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
} 