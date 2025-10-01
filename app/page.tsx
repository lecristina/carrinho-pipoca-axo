"use client"

import { Suspense, lazy } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ServicesSection from "@/components/services-section"
import BenefitsSection from "@/components/benefits-section"
import HowItWorks from "@/components/how-it-works"
import WorkGallery from "@/components/work-gallery"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

// Lazy load components that are not immediately visible
const LazyWorkGallery = lazy(() => import("@/components/work-gallery"))
const LazyTestimonials = lazy(() => import("@/components/testimonials"))

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ServicesSection />
      <BenefitsSection />
      <HowItWorks />
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <LazyWorkGallery />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <LazyTestimonials />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
