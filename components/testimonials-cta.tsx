import { Button } from "@/components/ui/button"
import { Video } from "lucide-react"
import Link from "next/link"

interface TestimonialsCtaProps {
  id?: string
}

export default function TestimonialsCta({ id }: TestimonialsCtaProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              🎥 Tu experiencia es clave para el cambio
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Comparte tu testimonio y sé parte del cambio. Tu experiencia es fundamental para presentar esta injusticia
              ante los tribunales europeos.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-2xl w-full">
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Video className="h-10 w-10 text-[#0055A5]" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold text-gray-900">Comparte tu historia</h3>
                <p className="text-gray-600">
                  Tu testimonio puede ayudar a miles de autónomos en situaciones similares. Cuéntanos cómo te ha
                  afectado esta práctica de la AEAT.
                </p>
              </div>
              <Button asChild className="bg-[#0055A5] hover:bg-[#004080] text-white px-8 py-6 text-lg">
                <Link href="/testimonios">Compartir mi experiencia</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
