import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Lock } from "lucide-react"

interface TestimonialsProps {
  id?: string
}

export default function Testimonials({ id }: TestimonialsProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              🎥 Tu experiencia es clave para el cambio
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Comparte tu testimonio y sé parte del cambio. Tu experiencia es fundamental para presentar esta injusticia
              ante los tribunales europeos.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
            <form className="space-y-4">
              <div className="space-y-2">
                <Input placeholder="Nombre Completo" required />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Correo Electrónico" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="video-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Camera className="w-8 h-8 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Tu vídeo-testimonio</span>
                      </p>
                      <p className="text-xs text-gray-500">Haz clic para subir (máximo 3 minutos)</p>
                    </div>
                    <input id="video-upload" type="file" accept="video/*" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Comentarios adicionales" rows={4} />
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Lock className="h-4 w-4 text-gray-500" />
                <p className="text-gray-500 text-xs text-left">
                  🔒 Privacidad garantizada. No se publicará nada sin tu consentimiento explícito.
                </p>
              </div>
              <Button type="submit" className="w-full bg-[#0055A5] hover:bg-[#004080] text-white">
                Enviar mi testimonio
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
