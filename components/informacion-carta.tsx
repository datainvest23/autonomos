import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, CheckCircle, Lock, Shield } from "lucide-react"

export default function InformacionCarta() {
  return (
    <>
      {/* Hero section */}
      <section className="w-full pt-32 pb-12 md:py-32 bg-[#0055A5] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                📢 Información Importante sobre la Carta de Hacienda (AEAT)
              </h1>
              <p className="mx-auto max-w-[800px] text-xl md:text-2xl font-medium">
                ⚖️ La notificación que has recibido vulnera los derechos fundamentales del autónomo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0055A5]">¿Por qué estás aquí?</h2>
                <p className="text-gray-700">
                  Probablemente has recibido una carta de la Agencia Tributaria (AEAT) informándote de que un
                  profesional autónomo con quien trabajas tiene una deuda tributaria pendiente.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0055A5] space-y-4">
                  <p className="font-medium">Es esencial que conozcas lo siguiente:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <p>
                        Esta práctica es abusiva y podría ser ilegal según la normativa europea (RGPD, Carta de Derechos
                        Fundamentales UE).
                      </p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <p>La deuda mencionada puede estar incluso en disputa o proceso de recurso.</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <p>
                        La notificación directa a clientes daña injustamente la reputación, el negocio y la dignidad de
                        profesionales autónomos.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0055A5]">📌 Qué debes saber claramente:</h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <p className="font-medium text-red-600">
                    🔴 La práctica de AEAT podría infringir leyes europeas sobre privacidad y reputación profesional:
                  </p>
                  <ul className="space-y-4">
                    <li className="space-y-1">
                      <p className="font-medium">Reglamento General de Protección de Datos (RGPD):</p>
                      <p className="text-gray-700">
                        Hacienda no debería revelar datos personales sensibles (como la situación tributaria) a terceros
                        sin cumplir requisitos estrictos de necesidad y proporcionalidad.
                      </p>
                    </li>
                    <li className="space-y-1">
                      <p className="font-medium">Carta Europea de Derechos Fundamentales:</p>
                      <p className="text-gray-700">
                        Esta práctica podría vulnerar directamente los artículos 7 (Privacidad), 8 (Protección de Datos)
                        y 16 (Libertad de Empresa).
                      </p>
                    </li>
                    <li className="space-y-1">
                      <p className="font-medium">Jurisprudencia europea (TJUE/TEDH):</p>
                      <p className="text-gray-700">
                        Sentencias recientes (casos como "L.B. c. Hungría" o "Schecke vs. Alemania") han condenado
                        prácticas similares.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0055A5]">🛡️ ¿Qué estamos haciendo para solucionarlo?</h2>
                <p className="text-gray-700">
                  Desde la iniciativa «Volvamos a Ser Autónomos» estamos trabajando en una demanda formal ante el
                  Tribunal Europeo para detener esta práctica abusiva en España, proteger la dignidad y reputación
                  profesional de los autónomos y lograr que la AEAT respete plenamente los derechos fundamentales.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0055A5]">💬 ¿Qué puedes hacer tú?</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 space-y-4">
                    <p className="font-medium text-blue-700">🔹 Si eres cliente:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p>
                          Entiende que recibir esta notificación no implica ningún delito ni fraude por parte del
                          autónomo afectado.
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p>Mantén tu relación profesional con confianza y tranquilidad.</p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <p>
                          Apoya al autónomo uniéndote a esta causa justa para proteger la economía y el emprendimiento
                          en España.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 space-y-4">
                    <p className="font-medium text-amber-700">🔸 Si eres autónomo afectado:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p>
                          Únete a nuestra iniciativa para sumar fuerzas en nuestra denuncia conjunta ante las instancias
                          europeas competentes.
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p>
                          Protege tu reputación informando a tus clientes sobre la realidad jurídica de esta práctica
                          abusiva.
                        </p>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p>
                          Facilita la transparencia en tus relaciones comerciales y tranquiliza a tus clientes aportando
                          información clara y objetiva.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0055A5]">🗣️ Preguntas frecuentes</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>¿Es legal la carta que recibieron mis clientes?</AccordionTrigger>
                    <AccordionContent>
                      Actualmente está siendo cuestionada su legalidad en Europa. Estamos trabajando precisamente para
                      lograr que deje de enviarse.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>¿Qué datos se enviarán a mis clientes?</AccordionTrigger>
                    <AccordionContent>
                      Solo información objetiva sobre la situación jurídica real, explicando claramente que recibir esta
                      notificación no implica ningún delito, fraude ni incumplimiento grave del autónomo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>¿Qué ocurre con mis datos personales?</AccordionTrigger>
                    <AccordionContent>
                      Están protegidos por RGPD, con garantía absoluta de confidencialidad y nunca se utilizarán para
                      fines ajenos a esta iniciativa.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar with form */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24 space-y-6">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-[#0055A5]">
                    📧 Únete Ahora y Defiende Tu Negocio y Reputación
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Completa el formulario a continuación para unirte formalmente a la iniciativa como autónomo
                    afectado.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre completo (Autónomo):
                    </label>
                    <Input id="nombre" placeholder="Tu nombre completo" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo Electrónico (Autónomo):
                    </label>
                    <Input id="email" type="email" placeholder="tu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono (opcional):
                    </label>
                    <Input id="telefono" placeholder="+34 600 000 000" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="comentarios" className="text-sm font-medium">
                      Comentarios o descripción breve del caso:
                    </label>
                    <Textarea id="comentarios" placeholder="Cuéntanos brevemente tu situación..." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emails-clientes" className="text-sm font-medium">
                      Emails de Clientes/Contactos que han recibido la carta de AEAT:
                    </label>
                    <Textarea id="emails-clientes" placeholder="cliente1@email.com, cliente2@email.com..." rows={2} />
                    <p className="text-xs text-gray-500 italic">
                      Opcional, confidencial y seguro para enviarles información objetiva sobre la situación.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-500 text-xs">
                      Garantía absoluta de privacidad y confidencialidad. No compartiremos nunca tus datos ni los de tus
                      clientes con terceros.
                    </p>
                  </div>

                  <Button type="submit" className="w-full bg-[#0055A5] hover:bg-[#004080] text-white">
                    Únete a la causa ahora y protege tu reputación profesional
                  </Button>
                </form>

                <div className="bg-blue-50 p-4 rounded-lg space-y-3 mt-6">
                  <h4 className="font-medium text-[#0055A5] flex items-center gap-2">
                    <Shield className="h-5 w-5" /> 🙌 ¿Qué conseguirás uniéndote?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>
                        Participar activamente en una iniciativa histórica para defender los derechos de miles de
                        autónomos.
                      </p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Aportar información transparente a tus clientes, protegiendo tu reputación comercial.</p>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Estar informado regularmente sobre el avance del caso ante instancias europeas.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>📌 Aviso legal:</strong> Esta iniciativa tiene exclusivamente fines informativos y legales.
              Nuestro objetivo es proteger los derechos fundamentales, privacidad y reputación profesional de los
              autónomos afectados. Todos los datos están protegidos bajo la normativa europea RGPD.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
