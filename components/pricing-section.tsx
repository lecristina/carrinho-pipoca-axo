"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

const pricingPlans = [
  {
    name: "Básico",
    price: "R$ 1.200",
    period: "por evento",
    description: "Perfeito para eventos pequenos",
    features: [
      "Carrinho de pipoca personalizado",
      "Até 100 pessoas",
      "2 horas de atendimento",
      "Personalização básica",
      "Atendente especializado",
      "Montagem e desmontagem"
    ],
    popular: false,
    color: "hsl(var(--spearmint))"
  },
  {
    name: "Premium",
    price: "R$ 1.800",
    period: "por evento",
    description: "Mais vendido - Ideal para eventos corporativos",
    features: [
      "Carrinho completo (pipoca + sorvete + algodão doce)",
      "Até 200 pessoas",
      "4 horas de atendimento",
      "Personalização completa com logo",
      "2 atendentes especializados",
      "Montagem e desmontagem",
      "Garantia de satisfação"
    ],
    popular: true,
    color: "hsl(var(--turquoise))"
  },
  {
    name: "Luxo",
    price: "R$ 2.500",
    period: "por evento",
    description: "Para eventos especiais e grandes",
    features: [
      "Carrinho de luxo com design exclusivo",
      "Até 300 pessoas",
      "6 horas de atendimento",
      "Personalização premium",
      "3 atendentes especializados",
      "Montagem e desmontagem",
      "Garantia de satisfação",
      "Suporte 24/7",
      "Decoração adicional"
    ],
    popular: false,
    color: "hsl(var(--rosewater))"
  }
]

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleWhatsApp = (plan: string) => {
    window.open(
      `https://wa.me/5521959017485?text=Olá! Gostaria de contratar o plano ${plan} do carrinho premium!`,
      "_blank",
    )
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-[hsl(var(--peach))]/5 to-[hsl(var(--spearmint))]/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-[hsl(var(--rosewater))]/20 to-[hsl(var(--turquoise))]/20 px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">💰 PREÇOS ESPECIAIS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Escolha seu <span className="colorful-text">Plano</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Planos flexíveis para qualquer tipo de evento. Sem taxa de instalação!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[hsl(var(--rosewater))] to-[hsl(var(--turquoise))] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    MAIS VENDIDO
                  </div>
                </div>
              )}
              
              <Card className={`premium-card h-full ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-foreground/70">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full premium-button sparkle ${plan.popular ? 'text-lg py-6' : ''}`}
                    onClick={() => handleWhatsApp(plan.name)}
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    {plan.popular ? 'CONTRATAR AGORA' : 'Solicitar Orçamento'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[hsl(var(--rosewater))]/10 to-[hsl(var(--turquoise))]/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">🎉 Oferta Especial por Tempo Limitado!</h3>
            <p className="text-lg text-foreground/80 mb-6">
              <strong>10% de desconto</strong> para eventos agendados nos próximos 30 dias!
              <br />
              <span className="text-sm text-foreground/60">Válido até o final do mês</span>
            </p>
            <Button
              className="premium-button sparkle text-lg px-8 py-4"
              onClick={() => handleWhatsApp('Oferta Especial')}
            >
              🚀 GARANTIR DESCONTO AGORA
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
