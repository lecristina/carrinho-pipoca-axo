"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import type { Testimonial } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Gerente de Eventos",
    content:
      "Adorei o coffee break! A comida estava fresca e saborosa. Todo mundo no evento elogiou bastante. Com certeza vou pedir de novo.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor Executivo",
    content:
      "Chegou no horário e a qualidade foi ótima. Os salgados estavam quentinhos e o atendimento foi super atencioso. Recomendo!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Coordenadora de RH",
    content:
      "Já é a terceira vez que peço para eventos da empresa. Nunca decepciona! Preço justo e comida de qualidade. O pessoal adora.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section className="py-24 bg-gradient-to-b from-[hsl(var(--spearmint))]/5 via-white to-[hsl(var(--turquoise))]/5 relative overflow-hidden" ref={containerRef}>
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[hsl(var(--spearmint))]/10 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[hsl(var(--rosewater))]/10 to-[hsl(var(--peach))]/10 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(var(--turquoise))]/10 to-[hsl(var(--spearmint))]/10 blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground relative z-10">
              <span className="colorful-text">500+</span> Clientes Satisfeitos
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--rosewater))] to-[hsl(var(--turquoise))] rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground max-w-3xl mx-auto text-xl mt-6">
              Veja como nossos clientes <strong>aumentaram o ROI dos seus eventos</strong> e criaram experiências inesquecíveis.
              <br />
              <span className="text-lg text-primary font-semibold">Resultados reais, depoimentos reais!</span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="h-full premium-card group">
                <CardContent className="p-8 relative">
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="h-24 w-24 text-primary rotate-180" />
                  </div>

                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-8 italic text-lg relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-wine/20 via-gold/15 to-mint/20 backdrop-blur-sm p-8 rounded-2xl border border-wine/20">
            <p className="text-foreground/80 text-lg max-w-2xl mb-6">
              Junte-se aos nossos clientes satisfeitos e descubra por que somos a escolha preferida para carrinhos premium
              em eventos corporativos e sociais em todo o Brasil.
            </p>
            <Button
              size="lg"
              className="wine-button"
              onClick={() => window.open("https://wa.me/5521959017485?text=Olá! Gostaria de saber mais sobre os carrinhos premium!", "_blank")}
            >
              Entrar em Contato
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
