"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popcorn, IceCream, Candy, Sparkles, Star, Heart } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: <Popcorn className="h-12 w-12" />,
    title: "Pipoca Gourmet",
    description: "Pipoca fresquinha e crocante, preparada na hora com diversos sabores premium para seu evento.",
    color: "hsl(var(--wine))",
    accent: <Sparkles className="h-6 w-6 text-wine/60" />,
    badge: "🔥 Quente",
  },
  {
    icon: <IceCream className="h-12 w-12" />,
    title: "Sorvete Artesanal",
    description: "Sorvetes cremosos e deliciosos, com opções variadas de sabores para refrescar seus convidados.",
    color: "hsl(var(--mint))",
    accent: <Star className="h-6 w-6 text-mint/60" />,
    badge: "❄️ Gelado",
  },
  {
    icon: <Candy className="h-12 w-12" />,
    title: "Algodão Doce",
    description: "Algodão doce colorido e divertido, perfeito para criar momentos mágicos e memoráveis.",
    color: "hsl(var(--gold))",
    accent: <Heart className="h-6 w-6 text-gold/60" />,
    badge: "💕 Doce",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5521959017485?text=Olá! Gostaria de saber mais sobre os serviços do carrinho premium!",
      "_blank",
    )
  }

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-wine/10 to-gold/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-mint/10 to-wine/5 blur-3xl" />

      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground font-light">
            Nossos <span className="colorful-text">Serviços</span>
          </h2>
          <p className="text-2xl text-foreground/60 max-w-4xl mx-auto leading-relaxed font-light">
            Experiências gastronômicas únicas para eventos memoráveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full modern-card elegant-card-hover group wine-card relative overflow-hidden">
                <CardContent className="p-12 text-center relative">
                  {/* Badge decorativo */}
                  <motion.div
                    className="absolute top-4 right-4 bg-wine/10 text-wine px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {service.badge}
                  </motion.div>

                  {/* Elementos decorativos flutuantes */}
                  <motion.div
                    className="absolute top-8 left-8 opacity-20"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {service.accent}
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 opacity-20"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  >
                    {service.accent}
                  </motion.div>

                  {/* Ícone principal */}
                  <motion.div
                    className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-8 elegant-hover relative"
                    style={{ backgroundColor: service.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                  >
                    <div className="text-white text-4xl relative z-10">{service.icon}</div>
                    {/* Efeito de brilho */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  <h3 className="text-3xl font-bold mb-6 text-foreground font-light text-reveal wine-accent">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-lg text-reveal">{service.description}</p>

                  {/* Linha decorativa */}
                  <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-wine to-gold mx-auto mt-6 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 64 } : { width: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="modern-card elegant-card-hover">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto elegant-hover">
                  <Image
                    src="/images/gallery-cart-4.png.jpg"
                    alt="Carrinho de pipoca premium personalizado"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                <div className="p-16 flex flex-col justify-center bg-gradient-to-br from-wine/5 to-gold/5">
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-light text-reveal">Personalização Exclusiva</h3>
                  <p className="text-xl text-foreground/60 mb-12 leading-relaxed font-light text-reveal">
                    Cada carrinho é uma obra de arte única, personalizada com as cores e identidade visual do seu evento, 
                    criando uma experiência visual inesquecível para seus convidados.
                  </p>
                  <Button
                    size="lg"
                    className="sales-cta w-fit text-lg px-12 py-6 elegant-button"
                    onClick={handleWhatsApp}
                  >
                    Solicitar Personalização
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
