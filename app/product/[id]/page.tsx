"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Star, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock product data
const product = {
  id: 1,
  name: "Nike Air Quantum X",
  price: 249.99,
  description:
    "Step into the future with the Nike Air Quantum X. These sneakers feature cutting-edge cushioning technology and a futuristic design that's perfect for the streets. The breathable mesh upper and responsive sole provide all-day comfort, while the reflective accents ensure you stand out in low light.",
  images: [
    "/cyberkick.png",
    "/cyberkick.png",
    "/cyberkick.png",
    "/cyberkick.png",
  ],
  sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
  colors: ["Black", "Red", "White"],
  brand: "Nike",
  stock: 12,
  rating: 4.8,
  reviewCount: 124,
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "You need to select a size and color before adding to cart.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedColor}, ${selectedSize}) x ${quantity} added to your cart.`,
    })
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <Link href={`/brand/${product.brand.toLowerCase()}`} className="text-sm text-primary">
              {product.brand}
            </Link>
            <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="mt-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex gap-2">
                {product.colors.map((color) => (
                  <Label
                    key={color}
                    className={`cursor-pointer rounded-md border p-2 ${
                      selectedColor === color ? "border-primary bg-primary/10" : "border-input"
                    }`}
                  >
                    <RadioGroupItem value={color} className="sr-only" />
                    {color}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Label
                    key={size}
                    className={`cursor-pointer rounded-md border p-2 ${
                      selectedSize === size ? "border-primary bg-primary/10" : "border-input"
                    }`}
                  >
                    <RadioGroupItem value={size} className="sr-only" />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Quantity</h3>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
                <span className="ml-4 text-sm text-muted-foreground">{product.stock} pairs available</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
              <Heart className="mr-2 h-5 w-5" />
              Wishlist
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over $100</span>
          </div>

          <div className="border-t pt-6">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="details" className="pt-4">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Upper: Engineered mesh with synthetic overlays</li>
                  <li>Midsole: Nike Air cushioning technology</li>
                  <li>Outsole: Rubber with digital traction pattern</li>
                  <li>Reflective details for visibility in low light</li>
                  <li>Pull tab for easy on/off</li>
                  <li>Style: CK-QX2023</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <p className="mb-2">Free standard shipping on all orders over $100.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Standard Shipping: 3-5 business days</li>
                  <li>Express Shipping: 1-2 business days</li>
                  <li>Same-day delivery available in select cities</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
