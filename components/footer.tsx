import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="bg-gradient-to-b from-transparent to-card/50">
        <div className="container py-16">
          {/* Top section with newsletter teaser */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 pb-12 border-b border-primary/10">
            <div className="max-w-md mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10 overflow-hidden rounded-md glass-effect border border-primary/20 flex items-center justify-center">
                  <Image
                    src="/cyberkick.png"
                    alt="CyberKicks Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight cyberpunk-text">CYBERKICKS</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-xs">
                Premium sneakers and streetwear with a futuristic edge. Join our community for exclusive drops and cyberpunk-inspired styles.
              </p>
              <div className="flex space-x-3">
                <Link 
                  href="https://instagram.com" 
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link 
                  href="https://twitter.com"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link 
                  href="https://facebook.com"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link 
                  href="https://youtube.com"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>
            
            <div className="w-full max-w-sm">
              <h3 className="text-lg font-bold mb-3">Join our newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up to receive updates on new releases, exclusive offers and more.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-l-md bg-background/40 border border-primary/20 border-r-0 focus:border-primary/60 px-4 py-2 text-sm outline-none"
                />
                <Button className="rounded-l-none" size="sm">
                  Subscribe
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main footer links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/category/sneakers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sneakers
                  </Link>
                </li>
                <li>
                  <Link href="/category/streetwear" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Streetwear
                  </Link>
                </li>
                <li>
                  <Link href="/category/limited-editions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Limited Editions
                  </Link>
                </li>
                <li>
                  <Link href="/category/accessories" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/category/sale" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Help</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/size-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4 text-primary/80 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-muted-foreground">
                  1234 Cyber Street<br />
                  New York, NY 10001
                </li>
                <li>
                  <Link href="mailto:info@cyberkicks.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@cyberkicks.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+12125551234" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (212) 555-1234
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar */}
      <div className="border-t border-primary/10 py-6 bg-card/70">
        <div className="container flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cyberkicks. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
