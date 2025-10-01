"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Palette, Truck, PartyPopper, ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Contratar",
    description: "Entre em contato pelo WhatsApp e conte-nos sobre seu evento. Faremos um orçamento personalizado!",
    color: "wine",
    accent: <CheckCircle className="h-5 w-5 text-wine/60" />,
    badge: "💬 Contato",
    gradient: "from-wine to-gold",
    time: "5 min",
  },
  {
    icon: Palette,
    number: "2",
    title: "Escolher Cores/Logo",
    description: "Personalize seu carrinho com as cores da sua empresa e aplique seu logo para um visual único.",
    color: "mint",
    accent: <Sparkles className="h-5 w-5 text-mint/60" />,
    badge: "🎨 Design",
    gradient: "from-mint to-wine",
    time: "1 dia",
  },
  {
    icon: Truck,
    number: "3",
    title: "Carrinho no Evento",
    description: "Levamos e montamos o carrinho personalizado no local do seu evento, tudo pronto para funcionar.",
    color: "gold",
    accent: <Star className="h-5 w-5 text-gold/60" />,
    badge: "🚚 Entrega",
    gradient: "from-gold to-mint",
    time: "2 horas",
  },
  {
    icon: PartyPopper,
    number: "4",
    title: "Aproveite!",
    description: "Seus convidados vão adorar! O carrinho se torna o ponto focal do evento, criando momentos inesquecíveis.",
    color: "wine",
    accent: <PartyPopper className="h-5 w-5 text-wine/60" />,
    badge: "🎉 Sucesso",
    gradient: "from-wine to-gold",
    time: "Evento",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-br from-white via-mint/5 to-wine/5 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-wine/10 to-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-gold/10 to-mint/5 blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance font-light">
            Como <span className="wine-gradient-text">Funciona</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty font-light">
            Um processo elegante e descomplicado para criar experiências únicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="modern-card elegant-card-hover h-full wine-card relative overflow-hidden">
                <CardContent className="p-12 text-center relative">
                  {/* Badge de tempo */}
                  <motion.div
                    className="absolute top-4 right-4 bg-wine/10 text-wine px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {step.time}
                  </motion.div>

                  {/* Badge principal */}
                  <motion.div
                    className="absolute top-4 left-4 bg-wine/10 text-wine px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {step.badge}
                  </motion.div>

                  {/* Elementos decorativos flutuantes */}
                  <motion.div
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-20"
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {step.accent}
                  </motion.div>

                  {/* Número do passo */}
                  <motion.div 
                    className={`relative inline-flex items-center justify-center w-24 h-24 rounded-full text-white text-3xl font-bold mb-8 elegant-hover bg-gradient-to-br ${step.gradient}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <span className="relative z-10">{step.number}</span>
                    {/* Efeito de brilho */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  {/* Ícone do passo */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 elegant-hover bg-gradient-to-br ${step.gradient}`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-6 text-foreground font-light text-reveal wine-accent">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed text-lg text-reveal">{step.description}</p>

                  {/* Linha decorativa */}
                  <motion.div
                    className={`w-16 h-1 bg-gradient-to-r ${step.gradient} mx-auto mt-6 rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 64 } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  />
                </CardContent>
              </Card>

              {/* Seta conectora */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 z-10 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : { width: 0 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.8 }}
                >
                  <div className={`w-full h-full bg-gradient-to-r ${step.gradient} rounded-full`} />
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <ArrowRight className="h-4 w-4 text-wine" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
