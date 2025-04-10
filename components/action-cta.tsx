import { Button } from "@/components/ui/button"
import { FileText, HandHelping, Mail } from "lucide-react"
import Link from "next/link"

interface ActionCtaProps {
  id?: string
}

export default function ActionCta({ id }: ActionCtaProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              📢 Actúa ahora
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Únete a nuestra causa, accede a información exclusiva y ayúdanos a defender los derechos de los autónomos
              en España.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold">Únete a la causa</h3>
              <p className="text-gray-600 text-sm">Recibe actualizaciones y noticias sobre nuestra iniciativa.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold">Descarga informes</h3>
              <p className="text-gray-600 text-sm">Accede a análisis detallados sobre la situación de los autónomos.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <HandHelping className="h-8 w-8 text-[#0055A5]" />
              </div>
              <h3 className="text-lg font-bold">Apoya económicamente</h3>
              <p className="text-gray-600 text-sm">Contribuye a financiar nuestra lucha legal y de concienciación.</p>
            </div>
          </div>

          <Button asChild className="bg-[#0055A5] hover:bg-[#004080] text-white px-8 py-6 text-lg mt-4">
            <Link href="/actua">Quiero actuar ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
