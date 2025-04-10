import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Lock, Video, Info } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TestimonialsForm() {
  return (
    <section className="w-full pt-32 pb-12 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0055A5]">
              🎥 Comparte tu experiencia
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Tu testimonio es fundamental para presentar esta injusticia ante los tribunales europeos y ayudar a otros
              autónomos en situaciones similares.
            </p>
          </div>

          <div className="w-full max-w-4xl grid md:grid-cols-3 gap-8">
            {/* Instrucciones para el testimonio */}
            <div className="md:col-span-1">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-left sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-blue-500" />
                  <h3 className="font-bold text-lg">Instrucciones para el testimonio</h3>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-sm font-medium text-left">Identificación básica</AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tu nombre completo (o iniciales si deseas más privacidad).</li>
                        <li>Sector de actividad (hostelería, consultoría, comercio, etc.).</li>
                        <li>Indica brevemente tu antigüedad como autónomo.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-sm font-medium text-left">
                      Datos relacionados con la deuda
                    </AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Importe aproximado de la deuda o reclamación (si es viable mencionarlo).</li>
                        <li>Tipo de impuesto o tributo afectado (IVA, IRPF, etc.).</li>
                        <li>
                          Explica si la deuda estaba disputada o en fase de recurso cuando Hacienda notificó a tus
                          clientes.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-sm font-medium text-left">
                      Causa y desarrollo de los hechos
                    </AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          ¿Cómo se originó la supuesta deuda? (ej.: morosidad de tus clientes, problemas de liquidez,
                          error de cálculo, etc.).
                        </li>
                        <li>
                          ¿En qué momento la AEAT decide notificar a tus clientes? Aclara si hubo una previa
                          comunicación contigo o una solicitud de aplazamiento en curso.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-sm font-medium text-left">
                      Efecto y consecuencias
                    </AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Impacto en tu reputación: ¿Perdiste clientes? ¿Se vio afectada tu credibilidad profesional?
                        </li>
                        <li>
                          Impacto económico: Reducción de ingresos, riesgo de quiebra, problemas de liquidez para
                          afrontar pagos.
                        </li>
                        <li>
                          Daño personal y emocional: Estrés, ansiedad, conflictos familiares o tensiones derivadas.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-sm font-medium text-left">
                      Reacciones y pasos que diste
                    </AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>¿Intentaste negociar con la AEAT o presentar recursos?</li>
                        <li>¿Has solicitado aplazamientos de pago o algún tipo de mediación?</li>
                        <li>¿Buscaste asesoría legal o apoyo en asociaciones de autónomos?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-sm font-medium text-left">
                      Mensaje final o petición
                    </AccordionTrigger>
                    <AccordionContent className="text-sm">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>¿Qué te gustaría transmitir a las autoridades y al público?</li>
                        <li>¿Por qué consideras que esta práctica debe revisarse o prohibirse?</li>
                        <li>¿Recomendarías a otros autónomos unirse a esta iniciativa?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-2">
              <div className="w-full bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Video className="h-16 w-16 text-[#0055A5]" />
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-gray-700">
                      Nombre Completo
                    </label>
                    <Input id="nombre" placeholder="Tu nombre completo" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="sector" className="text-sm font-medium text-gray-700">
                        Sector de actividad
                      </label>
                      <Input id="sector" placeholder="Ej: Hostelería, Consultoría..." required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="antiguedad" className="text-sm font-medium text-gray-700">
                        Antigüedad como autónomo
                      </label>
                      <Input id="antiguedad" placeholder="Ej: 5 años" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Correo Electrónico
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="video-upload" className="text-sm font-medium text-gray-700">
                      Tu vídeo-testimonio
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="video-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Camera className="w-8 h-8 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Haz clic para subir tu vídeo</span>
                          </p>
                          <p className="text-xs text-gray-500">Máximo 3 minutos de duración</p>
                        </div>
                        <input id="video-upload" type="file" accept="video/*" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="testimonio" className="text-sm font-medium text-gray-700">
                      Tu testimonio escrito
                    </label>
                    <Textarea
                      id="testimonio"
                      placeholder="Comparte tu experiencia siguiendo las instrucciones..."
                      rows={8}
                    />
                    <p className="text-xs text-gray-500">
                      Consulta las instrucciones para saber qué información incluir en tu testimonio.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-500 text-xs text-left">
                      🔒 Privacidad garantizada. No se publicará nada sin tu consentimiento explícito.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-[#0055A5] hover:bg-[#004080] text-white py-6 text-lg">
                    Enviar mi testimonio
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
