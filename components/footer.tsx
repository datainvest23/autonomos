import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#0055A5] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Volvamos a Ser Autónomos</h3>
            <p className="text-sm text-gray-200">
              Iniciativa para defender los derechos de los autónomos españoles frente a prácticas abusivas de la AEAT.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contacto</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span className="text-sm">contacto@volvamosaserautomos.es</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-sm">+34 900 000 000</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-200">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} Volvamos a Ser Autónomos. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-200 hover:underline">
              Aviso Legal
            </Link>
            <Link href="#" className="text-sm text-gray-200 hover:underline">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
