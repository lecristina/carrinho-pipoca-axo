"use client"

import { motion } from "framer-motion"
import { Star, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    number: "500+",
    label: "Eventos Realizados",
    description: "Experiências únicas entregues",
    icon: Star,
    color: "text-gold"
  },
  {
    number: "98%",
    label: "Satisfação dos Clientes",
    description: "Avaliação média dos eventos",
    icon: Users,
    color: "text-mint"
  },
  {
    number: "24h",
    label: "Suporte Disponível",
    description: "Atendimento sempre disponível",
    icon: Clock,
    color: "text-gold"
  },
  {
    number: "5★",
    label: "Avaliação Premium",
    description: "Qualidade reconhecida",
    icon: Award,
    color: "text-mint"
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-wine/5 via-gold/5 to-mint/5 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-wine/10 to-gold/5 blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-mint/10 to-gold/5 blur-2xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-wine/5 to-mint/5 blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 wine-gradient-text">
            Números que Impressionam
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Nossa trajetória de sucesso fala por si só. Cada número representa uma experiência única e memorável.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                className="group relative flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90 w-64 h-48 flex flex-col justify-center items-center text-center">
                  {/* Ícone decorativo */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>

                  {/* Número principal */}
                  <div className="text-3xl md:text-4xl font-bold wine-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-base font-semibold text-foreground mb-1 group-hover:text-wine transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Descrição */}
                  <div className="text-xs text-foreground/60 leading-relaxed px-2">
                    {stat.description}
                  </div>

                  {/* Linha decorativa */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-wine via-gold to-mint rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-wine/10 via-gold/10 to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-foreground/70 mb-6">
            Faça parte desses números impressionantes
          </p>
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-wine to-gold hover:from-wine/90 hover:to-gold/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-wine/25 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open(
                "https://wa.me/5521959017485?text=Olá! Gostaria de contratar o carrinho premium para meu evento!",
                "_blank",
              )
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Seja Nosso Próximo Cliente
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-mint opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
