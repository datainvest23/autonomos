import InformeCompleto from "@/components/informe-completo"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function InformePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InformeCompleto />
      <Footer />
    </main>
  )
}
