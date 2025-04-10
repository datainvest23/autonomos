"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo Volvamos a Ser Autónomos"
                width={40}
                height={40}
                className="drop-shadow-md"
              />
              <span className="text-xl font-bold text-white drop-shadow-md">Volvamos a Ser Autónomos</span>
            </Link>
          </div>

          {/* Menú para escritorio */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/#problema" className="text-white hover:text-gray-200 font-medium drop-shadow-md">
              El Problema
            </Link>
            <Link href="/#realidad" className="text-white hover:text-gray-200 font-medium drop-shadow-md">
              Realidad
            </Link>
            <Link href="/#fundamentos" className="text-white hover:text-gray-200 font-medium drop-shadow-md">
              Fundamentos
            </Link>
            <Link href="/testimonios" className="text-white hover:text-gray-200 font-medium drop-shadow-md">
              Testimonios
            </Link>
            <Link href="/informacion-carta" className="text-white hover:text-gray-200 font-medium drop-shadow-md">
              Carta AEAT
            </Link>
            <Button asChild className="bg-[#0055A5] hover:bg-[#004080] text-white">
              <Link href="/actua">Actúa Ahora</Link>
            </Button>
          </nav>

          {/* Botón de menú móvil */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0055A5]/95 py-4">
          <div className="container px-4 flex justify-center mb-4">
            <Image src="/images/logo.png" alt="Logo Volvamos a Ser Autónomos" width={40} height={40} />
          </div>
          <nav className="container px-4 flex flex-col space-y-2">
            <Link
              href="/#problema"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              El Problema
            </Link>
            <Link
              href="/#realidad"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Realidad
            </Link>
            <Link
              href="/#fundamentos"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fundamentos
            </Link>
            <Link
              href="/testimonios"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="/informacion-carta"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Carta AEAT
            </Link>
            <Link
              href="/actua"
              className="text-white hover:text-gray-200 font-medium px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Actúa Ahora
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
