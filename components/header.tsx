"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#services", label: "Serviços" },
  { href: "/#benefits", label: "Benefícios" },
  { href: "/#gallery", label: "Galeria" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5521959017485?text=Olá! Gostaria de saber mais sobre o carrinho premium para meu evento!",
      "_blank",
    )
  }

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)

    if (href.startsWith("/#")) {
      const element = document.getElementById(href.substring(2))
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-lg py-3 shadow-xl border-b border-white/20" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="colorful-text">Carrinho Premium</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:text-primary hover:bg-primary/10"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button
              className="ml-4 sales-cta elegant-button"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-transparent"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) =>
                  link.href.startsWith("/#") ? (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors text-left"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Button
                  className="mt-2 sales-cta elegant-button"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contato
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
