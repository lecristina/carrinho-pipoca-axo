"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Calendar, MapPin, Mail, Phone, User, ShoppingBag, MessageCircle } from "lucide-react"
import Link from "next/link"
import confetti from "canvas-confetti"

interface OrderData {
  orderId: string
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  address: string
  notes: string
  cart: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  total: number
  orderDate: string
}

export default function ConfirmacaoPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (!savedOrder) {
      router.push("/produtos")
      return
    }

    const order = JSON.parse(savedOrder)
    setOrderData(order)

    // Trigger confetti animation
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#8fdde7", "#b6e5d8", "#ffc2c7"],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8fdde7", "#b6e5d8", "#ffc2c7"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [router])

  const handleWhatsApp = () => {
    if (!orderData) return
    const message = `Olá! Gostaria de confirmar meu pedido #${orderData.orderId}. Nome: ${orderData.name}, Data do evento: ${new Date(orderData.eventDate).toLocaleDateString("pt-BR")}`
    window.open(`https://wa.me/5521959017485?text=${encodeURIComponent(message)}`, "_blank")
  }

  if (!orderData) {
    return (
      <main className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Carregando...</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Pedido <span className="colorful-text">Confirmado!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Obrigado por escolher o Carrinho Premium! Recebemos seu pedido e entraremos em contato em breve para
              finalizar os detalhes.
            </p>
          </div>

          {/* Order ID Card */}
          <Card className="border-2 border-primary/20 mb-8 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Número do Pedido</p>
                  <p className="text-2xl font-bold text-primary">{orderData.orderId}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Data do Pedido</p>
                  <p className="font-semibold">{new Date(orderData.orderDate).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Customer Information */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Informações do Cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Nome</p>
                    <p className="font-medium">{orderData.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-medium">{orderData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">{orderData.phone}</p>
                  </div>
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
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Data do Evento</p>
                    <p className="font-medium">{new Date(orderData.eventDate).toLocaleDateString("pt-BR")}</p>
                  </div>
                </div>
                {orderData.eventType && (
                  <div className="flex items-start gap-3">
                    <ShoppingBag className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Tipo de Evento</p>
                      <p className="font-medium">{orderData.eventType}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Endereço</p>
                    <p className="font-medium">{orderData.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Items */}
          <Card className="border-2 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Itens do Pedido
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {orderData.cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-3">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Quantidade: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">R$ {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">R$ {orderData.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Notes */}
          {orderData.notes && (
            <Card className="border-2 mb-8">
              <CardHeader>
                <CardTitle>Observações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{orderData.notes}</p>
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          <Card className="border-2 border-primary/20 bg-primary/5 mb-8">
            <CardHeader>
              <CardTitle>Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium">Confirmação por E-mail</p>
                  <p className="text-sm text-muted-foreground">
                    Você receberá um e-mail de confirmação com todos os detalhes do pedido.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">Contato da Nossa Equipe</p>
                  <p className="text-sm text-muted-foreground">
                    Entraremos em contato via WhatsApp ou telefone para finalizar os detalhes.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium">Preparação do Evento</p>
                  <p className="text-sm text-muted-foreground">
                    Prepararemos tudo com carinho para tornar seu evento inesquecível!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Link href="/produtos">
              <Button variant="outline" className="w-full sm:w-auto rounded-full bg-transparent" size="lg">
                Fazer Novo Pedido
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="w-full sm:w-auto rounded-full bg-transparent" size="lg">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
