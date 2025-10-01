"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import CartSidebar from "@/components/cart-sidebar"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "popcorn" | "ice-cream" | "cotton-candy"
  flavors?: string[]
}

export interface CartItem extends Product {
  quantity: number
}

const products: Product[] = [
  {
    id: "1",
    name: "Pipoca Doce",
    description: "Pipoca crocante com cobertura de caramelo artesanal",
    price: 15.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "popcorn",
    flavors: ["Caramelo", "Chocolate", "Morango"],
  },
  {
    id: "2",
    name: "Pipoca Salgada",
    description: "Pipoca tradicional com manteiga e sal na medida certa",
    price: 12.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "popcorn",
    flavors: ["Manteiga", "Queijo", "Bacon"],
  },
  {
    id: "3",
    name: "Pipoca Gourmet Mix",
    description: "Combinação especial de sabores doces e salgados",
    price: 20.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "popcorn",
    flavors: ["Caramelo & Queijo", "Chocolate & Bacon", "Mix Especial"],
  },
  {
    id: "4",
    name: "Pipoca Colorida",
    description: "Pipoca colorida perfeita para festas infantis",
    price: 18.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "popcorn",
    flavors: ["Tutti-Frutti", "Algodão Doce", "Chiclete"],
  },
  {
    id: "5",
    name: "Sorvete Artesanal",
    description: "Sorvete cremoso feito com ingredientes premium",
    price: 10.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "ice-cream",
    flavors: ["Chocolate", "Morango", "Baunilha", "Pistache"],
  },
  {
    id: "6",
    name: "Algodão Doce",
    description: "Algodão doce fresquinho feito na hora",
    price: 8.0,
    image: "/placeholder.svg?height=400&width=400",
    category: "cotton-candy",
    flavors: ["Rosa", "Azul", "Arco-íris"],
  },
]

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    } else {
      setCart((prevCart) => prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
              Nossos <span className="colorful-text">Produtos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Delícias artesanais para tornar seu evento inesquecível
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="rounded-full"
            >
              Todos
            </Button>
            <Button
              variant={selectedCategory === "popcorn" ? "default" : "outline"}
              onClick={() => setSelectedCategory("popcorn")}
              className="rounded-full"
            >
              Pipoca
            </Button>
            <Button
              variant={selectedCategory === "ice-cream" ? "default" : "outline"}
              onClick={() => setSelectedCategory("ice-cream")}
              className="rounded-full"
            >
              Sorvete
            </Button>
            <Button
              variant={selectedCategory === "cotton-candy" ? "default" : "outline"}
              onClick={() => setSelectedCategory("cotton-candy")}
              className="rounded-full"
            >
              Algodão Doce
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* Floating Cart Button */}
      <Button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-40"
        size="icon"
      >
        <ShoppingCart className="h-6 w-6" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground h-7 w-7 rounded-full flex items-center justify-center text-sm font-bold">
            {getTotalItems()}
          </span>
        )}
      </Button>

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </main>
  )
}
