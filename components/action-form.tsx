"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, Download, FileText, HandHelping, Lock, Mail } from "lucide-react"

export default function ActionForm() {
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
    <section className="w-full pt-32 pb-12 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0055A5]">
              📢 Actúa ahora
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Únete a nuestra causa, accede a información exclusiva y ayúdanos a defender los derechos de los autónomos
              en España.
            </p>
          </div>

          <div className="w-full max-w-3xl">
            <Tabs defaultValue="unete" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="unete" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Únete
                </TabsTrigger>
                <TabsTrigger value="informes" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Informes
                </TabsTrigger>
                <TabsTrigger value="apoya" className="flex items-center gap-2">
                  <HandHelping className="h-4 w-4" /> Apoya
                </TabsTrigger>
              </TabsList>

              <TabsContent value="unete">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-6">
                      <Mail className="h-16 w-16 text-[#0055A5]" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Únete a la causa</h2>
                    <p className="text-gray-600 mb-6 text-center">
                      Recibe actualizaciones, noticias y recursos exclusivos sobre nuestra iniciativa.
                    </p>

                    {!submitted ? (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                            Nombre Completo
                          </label>
                          <Input
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Tu nombre completo"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Correo Electrónico
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
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
                          Unirme a la causa
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          <p className="font-medium text-green-800">¡Gracias por unirte!</p>
                          <p className="text-sm text-green-700">
                            Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="informes">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-6">
                      <FileText className="h-16 w-16 text-[#0055A5]" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Descarga nuestros informes</h2>
                    <p className="text-gray-600 mb-6 text-center">
                      Accede a análisis detallados sobre la situación de los autónomos y las prácticas de la AEAT.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">Informe completo 2024</h3>
                          <p className="text-sm text-gray-600">Análisis jurídico y estadístico actualizado</p>
                        </div>
                        <Button className="bg-[#0055A5] hover:bg-[#004080] text-white flex items-center gap-2">
                          <Download className="h-4 w-4" /> Descargar
                        </Button>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">Guía práctica para autónomos</h3>
                          <p className="text-sm text-gray-600">Cómo actuar ante notificaciones de la AEAT</p>
                        </div>
                        <Button className="bg-[#0055A5] hover:bg-[#004080] text-white flex items-center gap-2">
                          <Download className="h-4 w-4" /> Descargar
                        </Button>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">Comparativa europea</h3>
                          <p className="text-sm text-gray-600">Análisis de prácticas fiscales en la UE</p>
                        </div>
                        <Button className="bg-[#0055A5] hover:bg-[#004080] text-white flex items-center gap-2">
                          <Download className="h-4 w-4" /> Descargar
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <form className="space-y-4">
                        <p className="text-sm text-gray-700">
                          Para recibir automáticamente futuros informes, suscríbete a nuestra newsletter:
                        </p>
                        <div className="flex space-x-2">
                          <Input type="email" placeholder="tu@email.com" className="flex-1" />
                          <Button className="bg-[#0055A5] hover:bg-[#004080] text-white">Suscribirme</Button>
                        </div>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apoya">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center mb-6">
                      <HandHelping className="h-16 w-16 text-[#0055A5]" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Apoya económicamente</h2>
                    <p className="text-gray-600 mb-6 text-center">
                      Tu contribución es fundamental para financiar nuestra lucha legal y de concienciación.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold mb-4">Selecciona una cantidad</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <Button variant="outline" className="text-lg font-medium h-14">
                            10€
                          </Button>
                          <Button variant="outline" className="text-lg font-medium h-14">
                            25€
                          </Button>
                          <Button variant="outline" className="text-lg font-medium h-14">
                            50€
                          </Button>
                          <Button variant="outline" className="text-lg font-medium h-14">
                            Otra cantidad
                          </Button>
                        </div>
                        <Button className="w-full bg-[#0055A5] hover:bg-[#004080] text-white py-6 text-lg">
                          Donar ahora
                        </Button>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">¿A qué se destina tu donación?</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Honorarios de abogados especializados en Derecho Europeo</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Costes administrativos y procesales</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>Campañas de difusión para aumentar concienciación social</span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex items-center space-x-2 text-sm">
                        <Lock className="h-4 w-4 text-gray-500" />
                        <p className="text-gray-500 text-xs text-left">
                          🔒 Auditoría independiente y publicación regular de todos los gastos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
