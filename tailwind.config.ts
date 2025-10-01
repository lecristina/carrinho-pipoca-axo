import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nova paleta de cores personalizada
        wine: {
          DEFAULT: "#7A152C", // Vermelho vinho principal
          light: "#9B1F3A",
          dark: "#5D0F21",
        },
        gold: {
          DEFAULT: "#F39F2B", // Laranja dourado
          light: "#F5B041",
          dark: "#E67E22",
        },
        gray: {
          DEFAULT: "#DAD6D6", // Cinza claro
          light: "#E8E5E5",
          dark: "#C4C0C0",
        },
        mint: {
          DEFAULT: "#92BFB1", // Verde água
          light: "#A8D0C4",
          dark: "#7BA89A",
        },
        // Cores antigas mantidas para compatibilidade
        coffee: {
          dark: "#7A152C", // Usando wine como coffee-dark
          medium: "#F39F2B", // Usando gold como coffee-medium
          light: "#92BFB1", // Usando mint como coffee-light
        },
        cream: "#DAD6D6", // Usando gray como cream
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        sans: ["var(--font-inter)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        slideRight: "slideRight 0.5s ease-out forwards",
        shimmer: "shimmer 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #7A152C 0%, #F39F2B 50%, #92BFB1 100%)",
        "wine-gradient": "linear-gradient(135deg, #7A152C 0%, #F39F2B 100%)",
        "mint-gradient": "linear-gradient(135deg, #92BFB1 0%, #DAD6D6 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
