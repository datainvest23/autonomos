"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Download, FileText, Lock } from "lucide-react"

interface ReportDownloadProps {
  id?: string
}

export default function ReportDownload({ id }: ReportDownloadProps) {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nombre.trim() || !email.trim()) {
      setError("Por favor, completa todos los campos.")
      return
    }

    // Aquí iría la lógica para enviar los datos a un servidor
    // Por ahora, simplemente simulamos una respuesta exitosa
    setSubmitted(true)
    setError("")
  }

  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              📥 Descarga del Informe Completo (PDF)
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Accede al análisis completo: Incluye cifras detalladas, marco legal europeo, y recomendaciones
              estratégicas basadas en investigaciones actualizadas.
            </p>
          </div>

          <Card className="w-full max-w-md bg-gray-50 border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-16 w-16 text-[#0055A5]" />
              </div>

              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Input
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Nombre Completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo Electrónico"
                      required
                    />
                  </div>

                  {error && (
                    <Alert variant="destructive" className="py-2">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex items-center space-x-2 text-sm">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-500 text-xs text-left">
                      🔒 Privacidad garantizada. No compartiremos tus datos con terceros.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-[#0055A5] hover:bg-[#004080] text-white">
                    Descargar Informe Completo Ahora
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="font-medium text-green-800">¡Gracias por tu interés!</p>
                    <p className="text-sm text-green-700">Tu descarga está lista.</p>
                  </div>
                  <Button
                    className="w-full bg-[#0055A5] hover:bg-[#004080] text-white flex items-center justify-center gap-2"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Download className="h-4 w-4" />
                    Descargar PDF
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
