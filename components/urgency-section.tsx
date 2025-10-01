"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Users, Zap, AlertTriangle } from "lucide-react"

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Simular contador regressivo de 7 dias
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5521959017485?text=URGENTE! Quero garantir minha vaga para o carrinho premium!",
      "_blank",
    )
  }

  return (
    <section className="py-16 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-300" />
            <span className="text-lg font-bold text-yellow-300">ATENÇÃO</span>
            <AlertTriangle className="h-6 w-6 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            ⚡ OFERTA LIMITADA ⚡
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            <strong>ÚLTIMAS VAGAS</strong> para eventos de Dezembro!
            <br />
            <span className="text-yellow-300">Apenas 3 carrinhos disponíveis</span>
          </p>

          {/* Contador regressivo */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">DIAS</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">HORAS</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">MIN</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">SEG</div>
            </div>
          </div>

          {/* Benefícios da urgência */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="h-6 w-6 text-yellow-300" />
              <span className="font-semibold">Entrega Garantida</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-6 w-6 text-yellow-300" />
              <span className="font-semibold">500+ Eventos Atendidos</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Zap className="h-6 w-6 text-yellow-300" />
              <span className="font-semibold">Montagem Rápida</span>
            </div>
          </div>

          <Button
            className="bg-white text-red-600 hover:bg-yellow-300 text-xl font-bold px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleWhatsApp}
          >
            🚨 GARANTIR MINHA VAGA AGORA
          </Button>

          <p className="text-sm mt-4 text-yellow-200">
            ⚠️ Após o prazo, os preços voltam ao normal
          </p>
        </motion.div>
      </div>
    </section>
  )
}
