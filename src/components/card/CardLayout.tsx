import { motion } from 'framer-motion'
import { ServicesData } from "../../data/DataWeb";
import Card from "./Card";


export default function CardLayout() {
  return (
    <section className=" py-16  dark:text-white" id="servicios">
      <div className="mx-auto mb-12 max-w-7xl px-6 text-center">
        <h2 className="relative inline-block pb-4 text-2xl md:text-4xl" >Conoce Nuestros Servicios</h2>
        <p className="text-lg text-slate-600 ">
          Ofrecemos soluciones integrales en construcción, remodelación y adecuación de espacios, combinando experiencia, calidad y compromiso en cada proyecto. Nuestro objetivo es transformar ideas en obras funcionales, seguras y duraderas que superen las expectativas de nuestros clientes.
        </p>
      </div>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ServicesData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card
                  icon={card.icon}
                  titleCard={card.titleCard}
                  descriptionCard={card.descriptionCard}
                />
              </motion.div>
            ))}
          </article>
        </section>


        {/*
        REVISAR ALGO
        <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 ">
            {ServicesData.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                titleCard={service.titleCard}
                descriptionCard={service.descriptionCard}
              />
            ))}
          </div>
        </article>*/}
    </section>
  )
}
