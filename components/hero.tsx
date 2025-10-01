"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const carouselImages = [
  {
    src: "/images/gallery-cart-1.png.jpg",
    alt: "Carrinho de Pipoca Premium"
  },
  {
    src: "/images/gallery-cart-2.png.jpg",
    alt: "Carrinho Personalizado"
  },
  {
    src: "/images/gallery-cart-3.png.jpg",
    alt: "Carrinho de Luxo"
  },
  {
    src: "/images/gallery-cart-4.png.jpg",
    alt: "Máquina de Pipoca com Folhagens Verdes"
  },
  {
    src: "/images/gallery-cart-5.png.jpg",
    alt: "Carrinho de Pipoca Elegante"
  },
  {
    src: "/images/gallery-cart-6.png.jpg",
    alt: "Carrinho de Pipoca Sofisticado"
  },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5521959017485?text=Olá! Gostaria de contratar o carrinho premium para meu evento!",
      "_blank",
    )
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrossel de imagens infinito no fundo - mais suave */}
      <div className="absolute inset-0 w-full h-full z-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 0.15 : 0,
              scale: currentImageIndex === index ? 1 : 1.02
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover w-full h-full"
              sizes="100vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay suave com cor principal - acima das imagens */}
      <div className="absolute inset-0 bg-wine/20 z-10" />
      
      {/* Overlay gradiente suave para melhor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-wine/12 to-wine/20 z-10" />
      
      {/* Elementos decorativos flutuantes suaves */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-gold/10 to-mint/8 blur-3xl animate-pulse z-20" />
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-mint/10 to-gold/8 blur-3xl animate-pulse z-20" />
      
      {/* Partículas flutuantes suaves */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-gold/30 animate-bounce z-20" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-mint/30 animate-bounce z-20" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-gold/30 animate-bounce z-20" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-mint/40 animate-bounce z-20" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />

      <div className="container relative z-30 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-tight">
              <span className="wine-accent text-reveal">Carrinho </span>
              <span className="wine-gradient-text">Premium</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light text-reveal">
              Experiências inesquecíveis para seus eventos
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="wine-button text-xl px-16 py-8 bounce-cta elegant-button"
              onClick={handleWhatsApp}
            >
              <span className="relative z-10">Solicitar Orçamento</span>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 z-30 flex justify-center"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-primary/80 hover:bg-transparent"
          onClick={scrollToServices}
        >
          <ChevronDown className="h-10 w-10" />
          <span className="sr-only">Rolar para baixo</span>
        </Button>
      </motion.div>
    </section>
  )
}
