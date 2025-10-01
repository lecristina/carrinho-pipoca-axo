"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

// Dados das imagens da galeria - Carrinhos de pipoca reais
const galleryImages = [
  {
    src: "/images/gallery-cart-1.png.jpg",
    alt: "Carrinho vintage clássico com design retrô",
  },
  {
    src: "/images/gallery-cart-2.png.jpg",
    alt: "Carrinho moderno com acabamento premium",
  },
  {
    src: "/images/gallery-cart-3.png.jpg",
    alt: "Carrinho em ambiente elegante com iluminação",
  },
  {
    src: "/images/gallery-cart-4.png.jpg",
    alt: "Carrinho personalizado para eventos corporativos",
  },
  {
    src: "/images/gallery-cart-5.png.jpg",
    alt: "Carrinho com design clássico e detalhes dourados",
  },
  {
    src: "/images/gallery-cart-6.png.jpg",
    alt: "Carrinho premium com acabamento sofisticado",
  },
]

export default function WorkGallery() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-white via-wine/5 to-gold/5 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-wine/20 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-wine/15 to-gold/10 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-mint/15 to-wine/10 blur-3xl"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground relative z-10">
              Nossos <span className="wine-gradient-text">Carrinhos</span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-wine to-gold rounded-full"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-xl mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Conheça nossos carrinhos de pipoca premium em ação. Cada carrinho é único, elegante e cria uma experiência inesquecível para seus convidados.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.4, type: "spring", stiffness: 300 },
              }}
              className="group relative"
            >
              {/* Sombra personalizada */}
              <div className="absolute inset-0 bg-gradient-to-r from-wine/20 via-gold/20 to-mint/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Efeito de reflexo */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-wine via-gold to-mint rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                animate={{
                  background: [
                    "linear-gradient(45deg, #7A152C, #F39F2B, #92BFB1)",
                    "linear-gradient(45deg, #F39F2B, #92BFB1, #7A152C)",
                    "linear-gradient(45deg, #92BFB1, #7A152C, #F39F2B)",
                    "linear-gradient(45deg, #7A152C, #F39F2B, #92BFB1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-2xl premium-card group/card">
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-wine/20 via-transparent to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                
                {/* Borda animada */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-wine via-gold to-mint p-[2px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-white rounded-3xl" />
                </div>
                
                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                
                {/* Imagem principal */}
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover/card:scale-110 group-hover/card:brightness-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                
                {/* Badge de destaque */}
                <motion.div
                  className="absolute top-4 right-4 bg-wine/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  Premium
                </motion.div>
                
                {/* Ícone decorativo */}
                <motion.div
                  className="absolute top-4 left-4 w-10 h-10 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center z-20"
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  whileHover={{ rotate: 360 }}
                >
                  <span className="text-white text-lg">✨</span>
                </motion.div>
                
                {/* Overlay de informações */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-20 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500"
                >
                  <h3 className="text-white font-bold text-lg mb-2">
                    {image.alt.split(' ').slice(0, 3).join(' ')}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Design exclusivo e personalizado
                  </p>
                </motion.div>
                
                {/* Efeito de partículas */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gold/60 rounded-full"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${25 + (i % 4) * 15}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Efeito de ondas */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-gold/30 rounded-3xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7,
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* Indicador de qualidade */}
                <motion.div
                  className="absolute bottom-4 right-4 bg-wine/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-bold z-20"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  HD
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
