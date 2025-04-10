import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

export default function Comparison() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              🌍 España, aislada en Europa
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mb-8">
              Comparativa de cómo otros países europeos manejan la privacidad fiscal de los autónomos:
            </p>
          </div>
          <div className="w-full max-w-3xl overflow-auto">
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
                      <span className="text-xs font-medium text-red-500">🚨 Condenado por el TEDH</span>
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
