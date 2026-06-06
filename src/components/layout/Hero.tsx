import {motion} from 'framer-motion'

import { useState, useEffect } from "react";
//import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


export const Hero = () => {

  const imgSliders = [
    "imgHero1.jpg",
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    const totalSlides = imgSliders.length;
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, );
    return () => clearInterval(interval);
  });


  return (
    <section>
      <motion.section
      initial={{ opacity: 0, x:-50}}
      whileInView={{ opacity: 1, x:0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      >
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={imgSliders[currentIndex]}
          alt=""
        />

        {/*<div className="absolute bottom-14 right-14 flex space-x-4">
          <button aria-label="Previous slide" onClick={() => moveSlide(-1)} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none hover:cursor-pointer">
            <FiArrowRight />
          </button>
          <button aria-label="Next slide" onClick={() => moveSlide(1)} className="absolute right-0  transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none hover:cursor-pointer">
            <FiArrowLeft />
          </button>
        </div>*/}


      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-7xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-slate-700 uppercase rounded-full bg-teal-accent-400">
            Construyendo sueños, creando realidades
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
             Construimos espacios con calidad 
              y confianza
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Especialistas en obra gris, obra blanca, acabados con
            remodelaciones para proyectos
            residenciales y comerciales.
          </p>
          <div className="flex items-center">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-slate-700 hover:bg-slate-900 text-white"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </div>
      
    </div>
    </motion.section>
    </section>
  );
};