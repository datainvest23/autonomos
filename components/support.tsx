import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Lock } from "lucide-react"

interface SupportProps {
  id?: string
}

export default function Support({ id }: SupportProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              🤝 Apóyanos para llevar esta lucha a Europa
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">Tu apoyo económico permitirá cubrir:</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-3xl">
            <div className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Honorarios de abogados especializados en Derecho Europeo</h3>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Costes administrativos y procesales</h3>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Campañas de difusión para aumentar concienciación social</h3>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Transparencia absoluta</h3>
                <p className="text-sm text-gray-500">Todos los gastos serán auditados y publicados.</p>
              </div>
            </div>
          </div>
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="text-lg font-medium">
                    10€
                  </Button>
                  <Button variant="outline" className="text-lg font-medium">
                    25€
                  </Button>
                  <Button variant="outline" className="text-lg font-medium">
                    50€
                  </Button>
                  <Button variant="outline" className="text-lg font-medium">
                    Otra cantidad
                  </Button>
                </div>
                <Button className="w-full bg-[#0055A5] hover:bg-[#004080] text-white">Donar ahora</Button>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Lock className="h-4 w-4 text-gray-500" />
                  <p className="text-gray-500 text-xs">
                    Auditoría independiente y publicación regular de todos los gastos.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
