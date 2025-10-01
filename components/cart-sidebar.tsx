"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { CartItem } from "@/app/produtos/page"

interface CartSidebarProps {
  cart: CartItem[]
  isOpen: boolean
  onClose: () => void
  onUpdateQuantity: (productId: string, quantity: number) => void
  onRemoveItem: (productId: string) => void
}

export default function CartSidebar({ cart, isOpen, onClose, onUpdateQuantity, onRemoveItem }: CartSidebarProps) {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <div>
                <h2 className="text-2xl font-bold">Seu Carrinho</h2>
                <p className="text-sm text-muted-foreground">
                  {getTotalItems()} {getTotalItems() === 1 ? "item" : "itens"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-muted">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Carrinho vazio</h3>
                <p className="text-muted-foreground mb-6">Adicione produtos para começar seu pedido</p>
                <Button onClick={onClose} className="rounded-full">
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors"
                  >
                    <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1 truncate">{item.name}</h3>
                      <p className="text-primary font-bold mb-3">R$ {item.price.toFixed(2)}</p>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-transparent"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-full bg-transparent"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Subtotal:</span>
                <span className="text-2xl font-bold text-primary">R$ {getTotal().toFixed(2)}</span>
              </div>

              <Link href="/checkout" onClick={onClose}>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
                  size="lg"
                >
                  Finalizar Pedido
                </Button>
              </Link>

              <Button variant="outline" className="w-full rounded-full bg-transparent" onClick={onClose}>
                Continuar Comprando
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
