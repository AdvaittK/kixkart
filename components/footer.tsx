"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Youtube, ChevronRight, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Thank you for subscribing to our newsletter!")
  }

  return (
    <footer className="relative border-t border-primary/10">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="relative">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand and Newsletter Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 overflow-hidden rounded-xl glass-effect border border-primary/20 flex items-center justify-center"
                >
                  <Image
                    src="/cyberkick.png"
                    alt="KixKart Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <span className="text-xl font-bold tracking-tight cyberpunk-text">KIXKART</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">
                Premium sneakers and streetwear with a futuristic edge.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-l-lg bg-background/40 border border-primary/20 border-r-0 focus:border-primary/60 px-3 py-2 text-sm"
                  required
                  aria-label="Email for newsletter"
                />
                <Button type="submit" className="rounded-l-none px-4" size="sm">
                  Subscribe
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Sneakers", href: "/category/sneakers" },
                  { name: "Streetwear", href: "/category/streetwear" },
                  { name: "Limited Editions", href: "/category/limited-editions" },
                  { name: "Sale", href: "/category/sale" }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary/60" />
                  <span>1234 Cyber Street, NY 10001</span>
                </li>
                <li>
                  <Link 
                    href="mailto:advaitt.dev@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-primary/60" />
                    advaitt.dev@gmail.com
                  </Link>
                </li>
                <li>
                  <Link 
                    href="tel:+12125551234" 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4 text-primary/60" />
                    +1 (212) 555-1234
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative border-t border-primary/10 py-4 bg-background/50 backdrop-blur-sm"
      >
        <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} KixKart</p>
            <p>Developed by <a href="mailto:advaitt.dev@gmail.com" className="text-primary hover:underline">Advait</a></p>
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Cookies", href: "/cookies" }
            ].map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="hover:text-primary transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
