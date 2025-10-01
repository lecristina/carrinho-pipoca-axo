"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[hsl(var(--rosewater))]/15 via-[hsl(var(--peach))]/20 to-[hsl(var(--turquoise))]/15">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-coffee-dark text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  )
}
