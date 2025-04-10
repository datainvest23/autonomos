import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-background.png')" }}
      >
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido superpuesto */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
              🚀 Volvamos a Ser Autónomos
            </h1>
            <p className="mx-auto max-w-[800px] text-white text-xl md:text-2xl font-medium drop-shadow-md">
              «Es hora de detener los abusos de Hacienda contra los autónomos españoles.»
            </p>
            <div className="pt-4 flex flex-col space-y-2">
              <p className="text-white text-lg md:text-xl">
                <span className="block mb-1">🛡️ «Defiende tu reputación y tu derecho a emprender.»</span>
                <span className="block">💼 «Protejamos nuestro trabajo, dignidad y futuro.»</span>
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <Button asChild className="w-full text-lg py-6 bg-[#0055A5] hover:bg-[#004080] text-white">
              <Link href="#unete">Únete Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
