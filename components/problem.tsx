import { AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProblemProps {
  id?: string
}

export default function Problem({ id }: ProblemProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              ⚠️ El Problema
            </h2>
            <p className="mx-auto max-w-[800px] text-gray-700 md:text-xl">
              La Agencia Tributaria (AEAT) notifica directamente a los clientes de autónomos la existencia de deudas
              tributarias pendientes, incluso cuando estas están en proceso de recurso o negociación.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0055A5]">Impacto directo sobre autónomos:</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pérdida inmediata de clientes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Daño grave a la reputación</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Riesgo real de cierre de negocio y quiebra personal</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Estrés emocional y personal</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0055A5]">
                Cifras críticas según el informe (Barómetro ATA 2024):
              </h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold">37%</span>
                  </div>
                  <span className="text-gray-700">
                    de los autónomos afirma sufrir morosidad, afectando directamente su capacidad para cumplir
                    obligaciones tributarias y cotizaciones sociales.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold">80,2%</span>
                  </div>
                  <span className="text-gray-700">afirmó que sus gastos operativos aumentaron en 2023.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                    <span className="text-red-600 font-bold">9/10</span>
                  </div>
                  <span className="text-gray-700">
                    autónomos consideran que las cargas administrativas han aumentado significativamente.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Referencias */}
          <div className="w-full max-w-4xl mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-left text-sm font-semibold text-gray-600 mb-2">Referencias:</h4>
            <ul className="text-left text-sm space-y-2">
              <li>
                <Link
                  href="https://as.com/actualidad/economia/la-lista-negra-de-hacienda-incluye-a-6084-morosos-con-una-deuda-de-15237-millones-n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0055A5] hover:underline flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  La lista negra de Hacienda incluye a 6.084 morosos con una deuda de 15.237 millones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
