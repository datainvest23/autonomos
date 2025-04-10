import { Button } from "@/components/ui/button"

interface AlliesProps {
  id?: string
}

export default function Allies({ id }: AlliesProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              🤝 Nuestros Aliados
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Organizaciones que apoyan activamente esta causa:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 py-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">ATA</span>
              </div>
              <h3 className="font-medium text-sm">Federación Nacional de Autónomos</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">UPTA</span>
              </div>
              <h3 className="font-medium text-sm">Unión de Profesionales y Autónomos</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">CCE</span>
              </div>
              <h3 className="font-medium text-sm">Cámara de Comercio de España</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">Xnet</span>
              </div>
              <h3 className="font-medium text-sm">Derechos digitales y privacidad</h3>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xl font-bold text-gray-500">EDRi</span>
              </div>
              <h3 className="font-medium text-sm">European Digital Rights</h3>
            </div>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button variant="outline" className="w-full">
              Únete como Aliado
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
