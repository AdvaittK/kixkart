"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut } from "lucide-react"

// Mock data for orders
const orders = [
  {
    id: "ORD-001",
    date: "2024-03-15",
    status: "Delivered",
    total: 330,
    items: [
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
    ],
  },
  // Add more orders as needed
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

export default function AccountPage() {
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
          <h1 className="text-4xl font-bold tracking-tight cyberpunk-text">My Account</h1>
          <p className="text-muted-foreground">
            Manage your profile, orders, and preferences.
          </p>
        </motion.div>

        {/* Account Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/4.png"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">advaitt.dev@gmail.com</p>
                </div>
              </div>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="payment">Payment Methods</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <div className="glass-effect p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue="advaitt.dev@gmail.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input defaultValue="+1 (555) 123-4567" type="tel" />
                    </div>
                  </div>
                  <Button className="mt-6">Save Changes</Button>
                </div>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="glass-effect p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">Order {order.id}</h3>
                        <p className="text-sm text-muted-foreground">
                          Placed on {order.date}
                        </p>
                      </div>
                      <Badge>{order.status}</Badge>
                    </div>
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex gap-4">
                          <div className="relative w-20 h-20">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.brand} • {item.color} • {item.size}
                            </p>
                            <p className="text-sm">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">${item.price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t mt-4 pt-4">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${order.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Other Tabs */}
              <TabsContent value="wishlist">
                <div className="glass-effect p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Wishlist</h2>
                  <p className="text-muted-foreground">
                    Your wishlist is empty. Start adding items you love.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="addresses">
                <div className="glass-effect p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Addresses</h2>
                  <p className="text-muted-foreground">
                    No addresses saved yet. Add your first address.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="payment">
                <div className="glass-effect p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
                  <p className="text-muted-foreground">
                    No payment methods saved yet. Add your first payment method.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="glass-effect p-6 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Settings</h2>
                  <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
} 