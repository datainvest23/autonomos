import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface FaqProps {
  id?: string
}

export default function Faq({ id }: FaqProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-[#0055A5]">
              ❓ Preguntas Frecuentes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Respuestas a las dudas más comunes sobre nuestra iniciativa
            </p>
          </div>
          <div className="w-full max-w-3xl space-y-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué puedo hacer si mis clientes recibieron una notificación?</AccordionTrigger>
                <AccordionContent>
                  Puedes compartir con ellos información sobre esta iniciativa y explicarles que la práctica de la AEAT
                  está siendo cuestionada legalmente. Además, puedes proporcionarles nuestro informe completo para que
                  entiendan mejor la situación.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Qué pasa si tengo deuda tributaria pendiente?</AccordionTrigger>
                <AccordionContent>
                  Tener una deuda tributaria pendiente no justifica la vulneración de tus derechos fundamentales.
                  Nuestra iniciativa no cuestiona la legitimidad de las deudas, sino el método utilizado por la AEAT
                  para su recaudación, que daña injustamente tu reputación profesional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Cómo garantiza esta iniciativa mi privacidad?</AccordionTrigger>
                <AccordionContent>
                  Todos los datos que nos proporcionas están protegidos bajo la normativa RGPD. No compartiremos tu
                  información con terceros y solo la utilizaremos para los fines específicos de esta iniciativa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="pt-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Consulta más dudas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
