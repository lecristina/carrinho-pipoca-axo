"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Star, Sparkles, Heart, Zap } from "lucide-react"
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

const floatingElements = [
  { icon: Star, delay: 0, duration: 3, size: "w-4 h-4", color: "text-gold" },
  { icon: Sparkles, delay: 1, duration: 4, size: "w-3 h-3", color: "text-mint" },
  { icon: Heart, delay: 2, duration: 3.5, size: "w-3 h-3", color: "text-gold" },
  { icon: Zap, delay: 0.5, duration: 2.5, size: "w-2 h-2", color: "text-mint" },
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

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
      {/* Background com parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ y, opacity }}
      >
        {carouselImages.map((image, index) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentImageIndex === index ? 0.1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05
            }}
            transition={{ 
              duration: 2,
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
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine/40 via-wine/25 to-gold/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/30 z-10" />
      
      {/* Elementos decorativos geométricos */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-gold/15 to-mint/10 blur-3xl animate-pulse z-20" />
      <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-gradient-to-br from-mint/15 to-gold/10 blur-3xl animate-pulse z-20" />
      <div className="absolute top-1/2 left-5 w-48 h-48 rounded-full bg-gradient-to-br from-wine/10 to-gold/8 blur-2xl animate-pulse z-20" />
      
      {/* Partículas flutuantes com ícones */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon
        return (
          <motion.div
            key={index}
            className={`absolute ${element.size} ${element.color} z-20`}
            style={{
              top: `${20 + index * 20}%`,
              left: `${15 + index * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-full h-full drop-shadow-lg" />
          </motion.div>
        )
      })}

      {/* Ondas de energia animadas */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full border border-gold/20 z-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full border border-mint/20 z-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.05, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Partículas de luz flutuantes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/30 rounded-full z-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Raios de luz */}
      <motion.div
        className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent z-20"
        animate={{
          opacity: [0, 1, 0],
          scaleY: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mint/20 to-transparent z-20"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut"
        }}
      />

      {/* Linhas decorativas animadas */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent z-20"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-mint/40 to-transparent z-20"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
        }}
      />

      {/* Efeito Aurora Boreal */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-wine/10 to-transparent z-20"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-t from-transparent via-gold/10 to-transparent z-20"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Círculos de energia pulsantes */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full border-2 border-gold/30 z-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-mint/30 z-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

      {/* Estrelas piscantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full z-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container relative z-30 px-4 py-8 h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge de destaque */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-white/90 font-medium text-sm">Premium Experience</span>
            <Star className="w-3 h-3 text-gold fill-current" />
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
              <motion.span 
                className="wine-accent block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Carrinho
              </motion.span>
              <motion.span 
                className="wine-gradient-text block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Premium
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Transforme seus eventos em experiências
              <span className="text-wine font-bold"> inesquecíveis</span>
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Pipoca gourmet, sorvete artesanal e algodão doce premium
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-wine to-gold hover:from-wine/90 hover:to-gold/90 text-white text-lg px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-wine/25 transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsApp}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Solicitar Orçamento
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-mint opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>

            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-wine to-gold hover:from-wine/90 hover:to-gold/90 text-white text-lg px-10 py-4 rounded-full font-semibold shadow-2xl hover:shadow-wine/25 transition-all duration-300 transform hover:scale-105"
              onClick={scrollToServices}
            >
              <span className="relative z-10 flex items-center gap-2">
                <ChevronDown className="w-5 h-5" />
                Ver Serviços
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-mint opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator discreto */}
      <motion.div
        className="absolute bottom-4 w-full z-30 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/70 cursor-pointer"
          onClick={scrollToServices}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <span className="text-xs font-medium">Descubra mais</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
