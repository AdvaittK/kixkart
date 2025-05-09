"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

const brands = ["Nike", "Adidas", "Converse", "New Balance", "Puma", "Reebok", "Vans", "Jordan"]

const categories = ["Sneakers", "Streetwear", "Limited Editions", "Accessories", "Sale"]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const isMobile = useMobile()
  const [cartCount, setCartCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      toast.info(`Searching for: ${searchQuery}`)
      // Implement search functionality
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled 
          ? "bg-card/95 backdrop-blur-md border-primary/10 shadow-lg" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary/10 transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] border-r border-primary/10 glass-effect">
              <div className="flex flex-col gap-8 py-6">
                <Link href="/" className="flex items-center gap-3 group">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-12 h-12 overflow-hidden rounded-xl glass-effect border border-primary/20 p-1.5"
                  >
                    <Image
                      src="/final.png"
                      alt="KixKart Logo"
                      width={36}
                      height={36}
                      className="object-contain transition-transform group-hover:scale-110"
                      priority
                    />
                  </motion.div>
                  <span className="text-2xl font-bold tracking-tight cyberpunk-text">KIXKART</span>
                </Link>
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search products..." 
                    className="w-full pl-10 bg-background/40 border-primary/20 focus:border-primary/60 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                  />
                </form>
                <nav className="flex flex-col gap-6" aria-label="Main navigation">
                  <div>
                    <h4 className="mb-4 text-sm font-semibold text-primary/80 uppercase tracking-wider">Categories</h4>
                    <div className="flex flex-col gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 pl-2 py-2 border-l-2 border-transparent hover:border-primary/40 hover:bg-primary/5 rounded-r-md"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-sm font-semibold text-primary/80 uppercase tracking-wider">Brands</h4>
                    <div className="flex flex-col gap-2">
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          href={`/brand/${brand.toLowerCase()}`}
                          className="text-muted-foreground hover:text-primary transition-all duration-300 pl-2 py-2 border-l-2 border-transparent hover:border-primary/40 hover:bg-primary/5 rounded-r-md"
                        >
                          {brand}
                        </Link>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 overflow-hidden rounded-xl glass-effect border border-primary/20 flex items-center justify-center"
            >
              <Image
                src="/final.png"
                alt="KixKart Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight cyberpunk-text hidden sm:inline-block">KIXKART</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <AnimatePresence>
            {isSearchOpen && !isMobile ? (
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="relative"
              >
                <form onSubmit={handleSearch} className="flex items-center">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-[200px] md:w-[250px] pl-10 bg-background/40 border-primary/20 focus:border-primary/60 transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                    aria-label="Search products"
                  />
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-2 hover:bg-primary/10"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsSearchOpen(true)} 
                className="hover:bg-primary/10 transition-all duration-300"
                aria-label="Open search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>
            )}
          </AnimatePresence>
          
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hover:bg-primary/10 transition-all duration-300"
            aria-label="Wishlist"
          >
            <Link href="/wishlist">
              <Heart className="h-[18px] w-[18px]" />
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="hover:bg-primary/10 transition-all duration-300"
            aria-label="Account"
          >
            <Link href="/account">
              <User className="h-[18px] w-[18px]" />
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-primary/10 transition-all duration-300" 
            asChild
            aria-label="Shopping cart"
          >
            <Link href="/cart">
              <ShoppingCart className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary hover:bg-primary/90"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
