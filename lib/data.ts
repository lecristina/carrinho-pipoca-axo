export type Product = {
  id: number
  name: string
  description: string
  image: string
  images?: string[] // Array de imagens adicionais para galeria
  category: string
  badge?: string
  slug: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: "Máquina de Pipoca Vintage Clássica",
    description: "Máquina de pipoca vintage vermelha e dourada com design clássico. Perfeita para eventos temáticos e festas retrô.",
    image: "/images/cart-vintage-red.png",
    images: [
      "/images/cart-vintage-red.png",
      "/images/cart-modern-red.png",
      "/images/cart-personalized.png",
    ],
    category: "Máquinas de Pipoca",
    badge: "VINTAGE",
    slug: "maquina-pipoca-vintage-classica",
    featured: true,
  },
  {
    id: 2,
    name: "Máquina de Pipoca Premium",
    description: "Máquina de pipoca com design moderno e funcionalidades avançadas. Ideal para eventos corporativos e grandes festas.",
    image: "/images/cart-modern-red.png",
    images: [
      "/images/cart-modern-red.png",
      "/images/cart-personalized.png",
      "/images/cart-vintage-red.png",
    ],
    category: "Máquinas de Pipoca",
    badge: "PREMIUM",
    slug: "maquina-pipoca-premium",
    featured: true,
  },
  {
    id: 3,
    name: "Máquina de Pipoca Luxo",
    description: "Máquina de pipoca de luxo com acabamento dourado e design exclusivo. Para eventos especiais e celebrações únicas.",
    image: "/images/cart-personalized.png",
    images: [
      "/images/cart-personalized.png",
      "/images/cart-vintage-red.png",
      "/images/cart-modern-red.png",
    ],
    category: "Máquinas de Pipoca",
    badge: "LUXO",
    slug: "maquina-pipoca-luxo",
    featured: true,
  },
  {
    id: 4,
    name: "Carrinho Básico",
    description: "Carrinho de pipoca, sorvete e algodão doce para eventos pequenos. Ideal para até 50 pessoas.",
    image: "/images/cart-modern-red.png",
    images: [
      "/images/cart-modern-red.png",
      "/images/cart-personalized.png",
    ],
    category: "Carrinhos",
    badge: "POPULAR",
    slug: "carrinho-basico",
    featured: false,
  },
  {
    id: 5,
    name: "Carrinho Premium",
    description: "Carrinho completo com personalização de cores e logo. Perfeito para eventos corporativos.",
    image: "/images/cart-personalized.png",
    images: [
      "/images/cart-personalized.png",
      "/images/cart-vintage-red.png",
    ],
    category: "Carrinhos",
    badge: "PREMIUM",
    slug: "carrinho-premium",
    featured: false,
  },
  {
    id: 6,
    name: "Carrinho Luxo",
    description: "Carrinho de luxo com design exclusivo e personalização completa. Para eventos especiais.",
    image: "/images/cart-vintage-red.png",
    images: [
      "/images/cart-vintage-red.png",
      "/images/cart-modern-red.png",
    ],
    category: "Carrinhos",
    badge: "LUXO",
    slug: "carrinho-luxo",
    featured: false,
  },
]

export const categories = [
  { id: "all", name: "Todos" },
  { id: "maquinas-pipoca", name: "Máquinas de Pipoca" },
  { id: "carrinhos", name: "Carrinhos" },
]

export type Testimonial = {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Gerente de Eventos - Multinacional",
    content:
      "INCRÍVEL! O carrinho foi o ponto focal do nosso evento. Os convidados ficaram fascinados e passaram mais tempo interagindo. Aumentou em 40% o engajamento do nosso evento. Já contratamos para os próximos 3 eventos!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CEO - Startup Tech",
    content:
      "ROI fantástico! O carrinho personalizado com nossa marca gerou mais conversas sobre a empresa do que qualquer outro elemento do evento. Nossos leads qualificados aumentaram 60%. Vale cada centavo investido!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Diretora de Marketing",
    content:
      "O carrinho virou assunto nas redes sociais! Nossos posts sobre o evento tiveram 3x mais engajamento. A personalização ficou perfeita e todos perguntavam onde contratamos. Melhor investimento do ano!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 4,
    name: "Roberto Santos",
    role: "Organizador de Eventos",
    content:
      "Já organizei mais de 200 eventos e nunca vi algo assim. O carrinho transformou completamente a atmosfera. Os clientes ficaram impressionados e já me pediram para contratar novamente. Sucesso garantido!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 5,
    name: "Mariana Lima",
    role: "Coordenadora de RH",
    content:
      "Nossos funcionários adoraram! O carrinho criou um ambiente descontraído e divertido. A produtividade do evento aumentou e todos saíram felizes. Já está no orçamento para todos os eventos futuros!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
  {
    id: 6,
    name: "Pedro Oliveira",
    role: "Diretor Comercial",
    content:
      "O carrinho foi um diferencial competitivo! Nossos clientes ficaram impressionados com a inovação. Fechamos 3 contratos grandes durante o evento. O investimento se pagou em uma única noite!",
    rating: 5,
    image: "/placeholder-user.jpg",
  },
]