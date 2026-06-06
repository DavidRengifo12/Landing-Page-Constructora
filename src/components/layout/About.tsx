import { HiMiniCheck } from "react-icons/hi2"
import { motion } from 'framer-motion'


export default function AboutComponent() {
  const features = [
  {
    title: "Experiencia y Calidad",
    description:
      "Contamos con personal calificado y materiales de alta calidad para garantizar resultados duraderos en cada proyecto."
  },
  {
    title: "Cumplimiento y Confianza",
    description:
      "Trabajamos con responsabilidad, respetando los tiempos de entrega y los estándares de construcción establecidos."
  }
]

const descriptions = [

  "Desarrollamos cada proyecto con compromiso, precisión y atención al detalle, ofreciendo soluciones adaptadas a las necesidades de nuestros clientes.",

  "Nuestro objetivo es construir espacios seguros, funcionales y modernos que aporten valor, comodidad y bienestar a quienes los utilizan."
]

  return (
    <section
      id="nosotros"
      className="py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="relative inline-block pb-4 text-2xl md:text-4xl">
            Sobre Nosotros

            <span className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
          </h2>
        </div>

        {/* Contenido */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Imagen */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <motion.section 
            initial={{ opacity: 0, x:-50}}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            
            >
              <img
              src="equipoWork.jpg"
              alt="Equipo de trabajo"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 hover:cursor-pointer"
            />
            </motion.section>
          </div>

          {/* Información */}
          <div>
            <motion.section
            initial={{ opacity: 0, x:50}}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            >
            <h3 className="mb-12 text-2xl leading-tight text-slate-900 md:text-3xl">
              Somos un equipo de profesionales comprometidos con la construcción, remodelación y transformación de espacios que combinan calidad, innovación y confianza.
            </h3>

            <div className="space-y-4 text-slate-600">
              {descriptions.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* Características */}
            <div className="mt-5 space-y-6">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-400/50">
                    <HiMiniCheck />
                  </div>

                  <div>
                    <h4 className="mb-1 text-lg font-semibold text-slate-900 md:text-xl">
                      {feature.title}
                    </h4>

                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
</motion.section>
          </div>

        </div>
      </div>
    </section>
  )
}