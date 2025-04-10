"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, FileText, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function InformeCompleto() {
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
    <>
      {/* Hero section */}
      <section className="w-full pt-32 pb-12 md:py-32 bg-[#0055A5] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                📄 Volvamos a Ser Autónomos
              </h1>
              <p className="mx-auto max-w-[800px] text-xl md:text-2xl font-medium">
                Descarga Nuestro Informe Completo sobre las prácticas de la AEAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-12">
              {/* Por qué es importante */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">⚖️ ¿Por qué es importante este informe?</h2>
                <p className="text-gray-700">
                  La Agencia Tributaria Española (<strong>AEAT</strong>) está aplicando una práctica controvertida y
                  perjudicial hacia los autónomos españoles: notifica directamente a sus clientes sobre cualquier deuda
                  tributaria pendiente, incluso cuando esta deuda está en discusión o aún no es firme.
                </p>
                <p className="text-gray-700 font-medium">Esto provoca daños serios:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Pérdida inmediata de clientes y reputación profesional.</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Riesgo elevado de insolvencia y cierre del negocio.</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      <strong>Impacto emocional severo y daño a la dignidad personal.</strong>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Qué dice nuestro informe */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">🔴 ¿Qué dice nuestro informe?</h2>
                <p className="text-gray-700">
                  Hemos elaborado una investigación exhaustiva que expone claramente por qué esta práctica de la AEAT
                  podría vulnerar leyes fundamentales de la Unión Europea, como:
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <h3 className="font-bold">Reglamento General de Protección de Datos (RGPD):</h3>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>
                        Divulgación indebida de datos personales sensibles a terceros no responsables de la deuda.
                      </li>
                      <li>Incumple los principios de necesidad y proporcionalidad.</li>
                      <li>Podría infringir artículos 5.1 (minimización de datos) y 6.1 (proporcionalidad).</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <h3 className="font-bold">Carta Europea de Derechos Fundamentales (Arts. 7 y 8):</h3>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Vulneración del derecho a la privacidad personal y protección de datos.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <h3 className="font-bold">Convenio Europeo de Derechos Humanos (CEDH, Art. 8):</h3>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>
                        El Tribunal Europeo de Derechos Humanos (TEDH) ha condenado prácticas similares en otros países,
                        como Hungría, considerándolas innecesarias y desproporcionadas.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comparativa Europea */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">🌍 Comparativa Europea</h2>
                <p className="text-gray-700">
                  Nuestro informe también incluye una comparativa de cómo otros países europeos manejan estas
                  situaciones:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold mb-3">Alemania, Francia, Reino Unido:</h3>
                    <p className="text-gray-700">
                      Se respeta estrictamente la privacidad del contribuyente; las notificaciones a clientes son una
                      medida excepcional, sujeta a supervisión judicial y siempre bajo estrictas condiciones.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                    <h3 className="font-bold mb-3">Hungría (precedente reciente):</h3>
                    <p className="text-gray-700">
                      Condenada recientemente por el TEDH precisamente por prácticas similares de divulgación pública de
                      deudores.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-medium mt-4">
                  España es uno de los pocos países en Europa aplicando estas medidas de forma rutinaria y generalizada.
                </p>
              </div>

              {/* Impacto real en Autónomos */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">📌 Impacto real en Autónomos</h2>
                <p className="text-gray-700">
                  Este documento incluye casos reales y explica claramente el impacto negativo:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pérdida significativa y demostrable de ingresos.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Daño irreparable a relaciones comerciales.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Graves efectos emocionales y personales para los afectados.</span>
                  </li>
                </ul>
              </div>

              {/* Quiénes nos apoyan */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">🤝 Quiénes nos apoyan</h2>
                <p className="text-gray-700">
                  Contamos con apoyo activo de asociaciones y organizaciones que defienden los derechos fundamentales:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">ATA</p>
                    <p className="text-sm text-gray-500">Federación Nacional de Autónomos</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">UPTA</p>
                    <p className="text-sm text-gray-500">Unión de Profesionales y Autónomos</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Cámara de Comercio</p>
                    <p className="text-sm text-gray-500">de España</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="font-medium">Xnet, EDRi</p>
                    <p className="text-sm text-gray-500">Privacidad digital</p>
                  </div>
                </div>
              </div>

              {/* Qué conseguirás */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">📌 ¿Qué conseguirás con este informe?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Entender en profundidad tus derechos frente a la AEAT.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Clarificar la situación legal real ante tus clientes.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Apoyar una causa colectiva que busca defender la privacidad, la reputación profesional y la
                      dignidad de los autónomos españoles.
                    </span>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">❓ Preguntas frecuentes (FAQ)</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Puedo usar esta información para tranquilizar a mis clientes?</AccordionTrigger>
                    <AccordionContent>
                      Sí, el informe está diseñado para que puedas explicar claramente a tus clientes la situación real
                      desde un enfoque jurídico y objetivo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Qué pasará con mis datos personales?</AccordionTrigger>
                    <AccordionContent>
                      Tus datos serán tratados con absoluta confidencialidad, bajo estricto cumplimiento del RGPD.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar with form */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-gray-50 border-none shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center justify-center">
                      <FileText className="h-16 w-16 text-[#0055A5]" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold text-[#0055A5]">📥 Descarga el Informe Completo (PDF)</h3>
                      <p className="text-gray-700 text-sm">
                        Completa el formulario con tu nombre y correo electrónico, y recibirás inmediatamente acceso al
                        informe completo en formato PDF.
                      </p>
                    </div>

                    {!submitted ? (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <label htmlFor="nombre" className="text-sm font-medium">
                            Nombre Completo:
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
                          <label htmlFor="email" className="text-sm font-medium">
                            Correo Electrónico:
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
                          <p className="text-gray-500 text-xs">
                            Garantía absoluta de privacidad: No compartiremos tus datos personales con terceros ni los
                            utilizaremos con ningún otro propósito.
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

                <div className="bg-blue-50 p-6 rounded-lg space-y-3 mt-6">
                  <h4 className="font-medium text-[#0055A5] flex items-center gap-2">
                    <Shield className="h-5 w-5" /> Información verificada
                  </h4>
                  <p className="text-sm text-gray-700">
                    Este informe ha sido elaborado por expertos en derecho tributario y protección de datos, con el
                    respaldo de organizaciones profesionales reconocidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
