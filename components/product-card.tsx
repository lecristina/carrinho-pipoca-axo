"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import type { Product } from "@/app/produtos/page"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const categoryLabels = {
    popcorn: "Pipoca",
    "ice-cream": "Sorvete",
    "cotton-candy": "Algodão Doce",
  }

  return (
    <Card className="product-card overflow-hidden border-2 hover:border-primary/50">
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        <Badge className="absolute top-4 left-4 bg-primary/90 text-white">{categoryLabels[product.category]}</Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-balance">{product.name}</h3>
        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{product.description}</p>

        {product.flavors && product.flavors.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Sabores disponíveis:</p>
            <div className="flex flex-wrap gap-2">
              {product.flavors.map((flavor) => (
                <Badge key={flavor} variant="secondary" className="text-xs">
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="text-3xl font-bold text-primary">R$ {product.price.toFixed(2)}</div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}
