
import Header from '../components/layout/Header'
import { Hero } from '../components/layout/Hero'
import AboutComponent from '../components/layout/About'
import CardLayout from '../components/card/CardLayout'
import ProyectosCarrusel from '../components/carrusel/ProyectosCarrusel'
import { Contactanos } from '../components/layout/Contact'
import { datosProyectosMock } from '../data/DataWeb'

import Footer from '../components/layout/Footer'


function LandingPage() {
  
  return (
    <>
      <section id="center">
        
        <Header />
        <Hero />
        <AboutComponent />
        <CardLayout />
        <ProyectosCarrusel proyectos={datosProyectosMock}/>
        <Contactanos />
        <Footer />
        
      </section>
    </>
  )
}

export default LandingPage
