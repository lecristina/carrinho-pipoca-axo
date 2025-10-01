"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Palette, Star, Zap, Sparkles, Heart, Award, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const benefits = [
  {
    icon: Users,
    title: "Atrai Convidados",
    description: "O carrinho premium se torna o ponto focal do seu evento, atraindo e encantando todos os convidados.",
    color: "wine",
    accent: <Sparkles className="h-5 w-5 text-wine/60" />,
    badge: "👥 Popular",
    gradient: "from-wine to-gold",
  },
  {
    icon: Palette,
    title: "Visual Premium",
    description: "Design elegante e personalizado com suas cores e logo, criando uma experiência visual única.",
    color: "mint",
    accent: <Heart className="h-5 w-5 text-mint/60" />,
    badge: "🎨 Exclusivo",
    gradient: "from-mint to-wine",
  },
  {
    icon: Star,
    title: "Experiência Divertida",
    description: "Momentos mágicos e memoráveis com pipoca, sorvete e algodão doce preparados na hora.",
    color: "gold",
    accent: <Award className="h-5 w-5 text-gold/60" />,
    badge: "⭐ Premium",
    gradient: "from-gold to-mint",
  },
  {
    icon: Zap,
    title: "Fácil Contratação",
    description: "Processo simples: contratar → escolher cores/logo → carrinho no seu evento. Sem complicações!",
    color: "wine",
    accent: <CheckCircle className="h-5 w-5 text-wine/60" />,
    badge: "⚡ Rápido",
    gradient: "from-wine to-gold",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="benefits" className="py-32 bg-gradient-to-br from-wine/5 via-white to-gold/5 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-wine/10 to-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-mint/10 to-wine/5 blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-balance font-light">
            Por que escolher o <span className="wine-gradient-text">Carrinho Premium</span>?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty font-light">
            Experiências que transformam eventos em memórias inesquecíveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="modern-card elegant-card-hover group wine-card relative overflow-hidden h-full">
                <CardContent className="p-12 text-center relative">
                  {/* Badge decorativo */}
                  <motion.div
                    className="absolute top-4 right-4 bg-wine/10 text-wine px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {benefit.badge}
                  </motion.div>

                  {/* Elementos decorativos flutuantes */}
                  <motion.div
                    className="absolute top-8 left-8 opacity-20"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {benefit.accent}
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 opacity-20"
                    animate={{ 
                      y: [0, 8, 0],
                      rotate: [0, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  >
                    {benefit.accent}
                  </motion.div>

                  {/* Ícone principal */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 elegant-hover relative bg-gradient-to-br ${benefit.gradient}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <benefit.icon className="h-12 w-12 text-white relative z-10" />
                    {/* Efeito de brilho */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-6 text-foreground font-light text-reveal wine-accent">{benefit.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed text-lg text-reveal">{benefit.description}</p>

                  {/* Linha decorativa */}
                  <motion.div
                    className={`w-16 h-1 bg-gradient-to-r ${benefit.gradient} mx-auto mt-6 rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 64 } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
