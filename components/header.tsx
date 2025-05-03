"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"

const brands = ["Nike", "Adidas", "Converse", "New Balance", "Puma", "Reebok", "Vans", "Jordan"]

const categories = ["Sneakers", "Streetwear", "Limited Editions", "Accessories", "Sale"]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const isMobile = useMobile()
  const [cartCount, setCartCount] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  
  // Add scroll event listener to create a solid header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
      scrolled 
        ? "bg-card/95 backdrop-blur-md border-primary/10 shadow-lg" 
        : "bg-transparent border-transparent"
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] border-r border-primary/10 glass-effect">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="relative w-10 h-10 overflow-hidden rounded-md glass-effect border border-primary/20 p-1">
                    <Image
                      src="/cyberkick.png"
                      alt="CyberKicks Logo"
                      width={32}
                      height={32}
                      className="object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <span className="text-2xl font-bold tracking-tight cyberpunk-text">CYBERKICKS</span>
                </Link>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search products..." 
                    className="w-full pl-10 bg-background/40 border-primary/20 focus:border-primary/60"
                  />
                </div>
                <nav className="flex flex-col gap-4">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-primary/80 uppercase tracking-wider">Categories</h4>
                    <div className="flex flex-col gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category}
                          href={`/category/${category.toLowerCase()}`}
                          className="text-muted-foreground hover:text-primary transition-colors pl-1 py-1 border-l-2 border-transparent hover:border-primary/40"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-primary/80 uppercase tracking-wider">Brands</h4>
                    <div className="flex flex-col gap-2">
                      {brands.map((brand) => (
                        <Link
                          key={brand}
                          href={`/brand/${brand.toLowerCase()}`}
                          className="text-muted-foreground hover:text-primary transition-colors pl-1 py-1 border-l-2 border-transparent hover:border-primary/40"
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
          
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative w-10 h-10 overflow-hidden rounded-md glass-effect border border-primary/20 flex items-center justify-center"
            >
              <Image
                src="/cyberkick.png"
                alt="CyberKicks Logo"
                width={28}
                height={28}
                className="object-contain"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight cyberpunk-text hidden sm:inline-block">CYBERKICKS</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="text-sm font-medium px-3 py-2 rounded-md hover:bg-primary/5 hover:text-primary transition-all relative group"
              >
                {category}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium flex items-center">
                  Brands
                  <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 grid grid-cols-2 gap-1 p-2 border-primary/10 glass-effect">
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand} asChild className="hover:bg-primary/5 hover:text-primary">
                    <Link href={`/brand/${brand.toLowerCase()}`} className="w-full">{brand}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          {isSearchOpen && !isMobile ? (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] md:w-[250px] pl-10 bg-background/40 border-primary/20 focus:border-primary/60"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hover:bg-primary/5">
              <Search className="h-[18px] w-[18px]" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/5">
            <Link href="/wishlist">
              <Heart className="h-[18px] w-[18px]" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/5">
            <Link href="/account">
              <User className="h-[18px] w-[18px]" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/5" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
