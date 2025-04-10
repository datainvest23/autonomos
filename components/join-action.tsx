import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"

interface JoinActionProps {
  id?: string
}

export default function JoinAction({ id }: JoinActionProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              📢 Únete y Actúa
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Únete formalmente a nuestra causa para defender legalmente tus derechos y recibir información actualizada
              del proceso.
            </p>
          </div>

          <Card className="w-full max-w-md bg-white">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Nombre Completo" required />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Correo Electrónico" required />
                </div>
                <div className="space-y-2">
                  <Input type="tel" placeholder="Teléfono (opcional)" />
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Lock className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-500 text-xs text-left">
                    🔒 Privacidad garantizada. No compartiremos tus datos con terceros.
                  </p>
                </div>
                <Button type="submit" className="w-full bg-[#0055A5] hover:bg-[#004080] text-white">
                  Únete a la causa
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
