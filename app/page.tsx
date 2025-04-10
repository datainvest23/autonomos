import Header from "@/components/header"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Reality from "@/components/reality"
import LegalBasis from "@/components/legal-basis"
import TestimonialsCta from "@/components/testimonials-cta"
import ActionCta from "@/components/action-cta"
import Allies from "@/components/allies"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem id="problema" />
      <Reality id="realidad" />
      <LegalBasis id="fundamentos" />
      <TestimonialsCta id="testimonios" />
      <ActionCta id="actua" />
      <Allies id="aliados" />
      <Faq id="faq" />
      <Footer />
    </main>
  )
}
