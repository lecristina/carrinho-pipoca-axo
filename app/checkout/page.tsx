"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ShoppingBag, MapPin, User, Calendar } from "lucide-react"
import Link from "next/link"
import type { CartItem } from "@/app/produtos/page"

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState<CartItem[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    address: "",
    notes: "",
  })

  useEffect(() => {
    // In a real app, this would come from a global state or context
    // For now, we'll just show an empty cart message
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store order data
    const orderData = {
      ...formData,
      cart,
      total: getTotal(),
      orderDate: new Date().toISOString(),
      orderId: `PED-${Date.now()}`,
    }

    localStorage.setItem("lastOrder", JSON.stringify(orderData))
    localStorage.removeItem("cart")

    router.push("/confirmacao")
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.eventDate && formData.address
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 pt-24 pb-16 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-4">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Carrinho Vazio</h1>
            <p className="text-muted-foreground mb-8">Adicione produtos ao carrinho antes de finalizar o pedido.</p>
            <Link href="/produtos">
              <Button className="rounded-full bg-primary hover:bg-primary/90">Ver Produtos</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back Button */}
          <Link href="/produtos" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Produtos
          </Link>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Finalizar <span className="colorful-text">Pedido</span>
            </h1>
            <p className="text-muted-foreground">Preencha os dados para confirmar seu pedido</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Informações Pessoais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-2"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(21) 99999-9999"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Event Information */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Informações do Evento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Data do Evento *</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          required
                          className="border-2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Tipo de Evento</Label>
                        <Input
                          id="eventType"
                          name="eventType"
                          placeholder="Ex: Aniversário, Casamento, Corporativo"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="border-2"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Endereço do Evento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço Completo *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        placeholder="Rua, número, bairro, cidade, estado"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="border-2 resize-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Observações</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Informações adicionais sobre o evento, preferências, etc."
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-2 resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-2 sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                      Resumo do Pedido
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Cart Items */}
                    <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-3 text-sm">
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-muted-foreground">Qtd: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-medium">R$ {getTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total de itens</span>
                        <span className="font-medium">{getTotalItems()}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary">R$ {getTotal().toFixed(2)}</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
                      size="lg"
                    >
                      {isSubmitting ? "Processando..." : "Confirmar Pedido"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center text-pretty">
                      Ao confirmar, você receberá um e-mail com os detalhes do pedido e entraremos em contato para
                      finalizar os detalhes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  )
}
