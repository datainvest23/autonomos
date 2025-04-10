import { Users, TrendingUp, FileText, AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"

interface RealityProps {
  id?: string
}

export default function Reality({ id }: RealityProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              📊 La Realidad del Autónomo en España
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <Users className="h-12 w-12 text-[#0055A5] mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">3.383.394</h3>
              <p className="text-gray-600">autónomos afiliados</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Más del 37%</h3>
              <p className="text-gray-600">afectados por morosidad</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">Más del 80%</h3>
              <p className="text-gray-600">afrontando costes crecientes</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center">
              <FileText className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">90%</h3>
              <p className="text-gray-600">sufre alta presión administrativa</p>
            </div>
          </div>

          <p className="max-w-[800px] text-gray-700 md:text-lg mt-4">
            Estos factores reducen significativamente la resiliencia económica del autónomo, poniéndolo en riesgo alto
            ante cualquier eventual crisis o recesión futura.
          </p>

          {/* Referencias */}
          <div className="w-full max-w-4xl mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-left text-sm font-semibold text-gray-600 mb-2">Referencias:</h4>
            <ul className="text-left text-sm space-y-2">
              <li>
                <Link
                  href="https://www.mites.gob.es/ficheros/ministerio/estadisticas/documentos/RUD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0055A5] hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Registro Único de Datos (RUD) - Ministerio de Trabajo y Economía Social
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.mites.gob.es/es/estadisticas/novedades/todas/index.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0055A5] hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Estadísticas del Ministerio de Trabajo y Economía Social
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
