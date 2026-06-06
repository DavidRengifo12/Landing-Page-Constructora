import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <div>
    <motion.section
      initial={{ opacity: 0, x:-50}}
      whileInView={{ opacity: 1, x:0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      >
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('retiro2.jpeg')" }}>
    <motion.section
    initial={{opacity:4, x:50}}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false }}
    >
      <article className="w-full">
        <div className="relative z-10 items-center px-12 text-center">
            <h1 className="text-4xl md:text-4xl lg:text-6xl text-white font-semibold mb-8">Construimos sus ideas con calidad, seriedad y cumplimiento</h1>
            <p className="text-white text-2xl md:text-3xl">Maestro de obra Luis Rengifo - Más de 15 Años de experiencia en Popayán, Bogota, Cali..</p>
            <motion.button
            className="bg-slate-600 text-white font-bold py-2 px-4 rounded mt-8"
            whileHover={{ scale: 1.2 }}
            whileTap={{scale: 0.8}}
            style={{ backgroundColor: "#1e293b", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "0.25rem" }}
            >
                Visita Técnica Gratuita
            </motion.button>
        </div>
      </article>
    </motion.section>
    </section>
    </motion.section>
    </div>
  )
}
