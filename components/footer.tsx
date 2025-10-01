"use client"

import Link from "next/link"
import { MessageCircle, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5521959017485?text=Olá! Gostaria de saber mais sobre o carrinho premium para meu evento!",
      "_blank",
    )
  }

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--foreground))] via-[hsl(var(--foreground))] to-[hsl(var(--foreground))] text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="colorful-text">Carrinho Premium</span>
            </h2>
            <p className="text-background/80 mt-4 max-w-xs">
              Transformando seus eventos em experiências inesquecíveis com carrinhos personalizados de pipoca, sorvete e algodão doce.
            </p>
            <div className="flex space-x-4 pt-2">
              <button
                onClick={handleWhatsApp}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="sr-only">WhatsApp</span>
              </button>
              <a
                href="https://www.instagram.com/carrinhopremium/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-primary text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/90 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/90 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("services")
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-white/90 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("benefits")
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-white/90 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById("gallery")
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="text-background/80 hover:text-primary transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-primary text-xl mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-white/90">Pipoca Gourmet</span>
              </li>
              <li>
                <span className="text-white/90">Sorvete Artesanal</span>
              </li>
              <li>
                <span className="text-white/90">Algodão Doce</span>
              </li>
              <li>
                <span className="text-white/90">Personalização Completa</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-primary text-xl mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
        <span className="text-white/90">Atendemos em todo o Brasil</span>
      </li>
      <li className="flex items-center">
        <Phone className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
        <a href="tel:+5521959017485" className="text-white/90 hover:text-primary transition-colors">
          (21) 95901-7485
        </a>
      </li>
      <li className="flex items-center">
        <MessageCircle className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
        <button
          onClick={handleWhatsApp}
          className="text-white/90 hover:text-primary transition-colors text-left"
        >
          WhatsApp
        </button>
      </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 pt-12 border-t border-background/20">
          <div className="inline-block bg-gradient-to-r from-wine/20 via-gold/15 to-mint/20 backdrop-blur-sm p-12 rounded-2xl border border-wine/20">
            <p className="text-white text-xl max-w-4xl font-light leading-relaxed mb-8">
              Junte-se aos nossos clientes satisfeitos e descubra por que somos a escolha preferida para 
              experiências gastronômicas únicas em eventos corporativos e sociais em todo o Brasil.
            </p>
            <Button
              size="lg"
              className="wine-button"
              onClick={() => window.open("https://wa.me/5521959017485?text=Olá! Gostaria de saber mais sobre os carrinhos premium!", "_blank")}
            >
              Entrar em Contato
            </Button>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-white/80 text-sm">
          <p>© {new Date().getFullYear()} Carrinho Premium. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
