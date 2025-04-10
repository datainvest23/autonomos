import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

interface LegalBasisProps {
  id?: string
}

export default function LegalBasis({ id }: LegalBasisProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              ⚖️ Fundamentos Legales y Comparativa Europea
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold mb-2">RGPD (UE)</h3>
              <p className="text-gray-600 text-center">Violación de principios de proporcionalidad y privacidad.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Carta de Derechos Fundamentales (UE)</h3>
              <p className="text-gray-600 text-center">
                Protección de privacidad, datos personales y libertad de empresa (arts. 7, 8, 16).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Jurisprudencia TEDH</h3>
              <p className="text-gray-600 text-center">
                Condena prácticas similares por vulneración de privacidad y reputación personal (Caso Hungría).
              </p>
            </div>
          </div>

          <div className="w-full max-w-3xl overflow-auto mt-8">
            <Table>
              <TableCaption>España debe alinearse con Europa.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>País</TableHead>
                  <TableHead>Notificación a Clientes</TableHead>
                  <TableHead>Protección de Privacidad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">🇩🇪 Alemania</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">🇫🇷 Francia</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">🇳🇱 Países Bajos</TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">🇭🇺 Hungría (antes)</TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <Check className="h-5 w-5 text-red-500" />
                      <span className="text-xs">(similar)</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <Link
                        href="https://www.jurist.org/news/2023/03/echr-finds-hungarys-public-disclosure-of-tax-debtors-violates-privacy-rights/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-red-500 hover:underline flex items-center"
                      >
                        🚨 Condenado por el TEDH
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">🇪🇸 España</TableCell>
                  <TableCell className="text-center">
                    <Check className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
