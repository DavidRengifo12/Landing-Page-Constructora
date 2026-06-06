import { useEffect, useState } from 'react';
import CarruselServicios from './CarruselServicios';
import CarruselServicios2 from './CarruselServicios2';
import type { Proyecto } from '../types/types';

interface Props {
  proyectos: Proyecto[];
}

export default function ProyectosCarrusel({ proyectos }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderValues, setSliderValues] = useState(
    proyectos.map(() => 50)
  );

  useEffect(() => {
    if (proyectos.length < 2) return;

    const interval = setInterval(
      () =>
        setCurrentIndex(
          (prev) => (prev + 1) % proyectos.length
        ),
      9000
    );

    return () => clearInterval(interval);
  }, [proyectos.length]);

  const changeSlide = (direction: number) =>
    setCurrentIndex(
      (prev) =>
        (prev + direction + proyectos.length) %
        proyectos.length
    );

  const updateSlider = (
    index: number,
    value: number
  ) =>
    setSliderValues((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });

  if (!proyectos.length) return null;

  return (
    <section
      id="proyectos"
      className="bg-slate-50 py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8 md:mb-12" >
          <h2 className="text-3xl md:text-4xl text-slate-900 uppercase tracking-wide">
            Nuestra Trayectoria en Acción
          </h2>

          <p className="text-slate-700 max-w-2xl mx-auto mt-4">
            Desplaza el regulador central en cada obra para ver el cambio estructural y su respectiva información técnica.
          </p>
        </div>

        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {proyectos.map((proyecto, idx) => (
              <div
                key={proyecto.id || idx}
                className="w-full shrink-0 px-2"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                  <div className="lg:col-span-7">
                    <CarruselServicios
                      titulo={proyecto.titulo}
                      imgAntes={proyecto.imgAntes}
                      imgDespues={proyecto.imgDespues}
                      sliderValue={sliderValues[idx]}
                      onChange={(value ) =>
                        updateSlider(idx, value)
                      }
                    />
                  </div>

                  <CarruselServicios2 proyecto={proyecto} />

                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => changeSlide(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-slate-900/80 hover:cursor-pointer text-white w-11 h-11 rounded-full"
          >
            &#10094;
          </button>

          <button
            onClick={() => changeSlide(1)}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-slate-900/80 hover:cursor-pointer text-white w-11 h-11 rounded-full"
          >
            &#10095;
          </button>

        </div>

        <div className="flex justify-center gap-2 mt-8">
          {proyectos.map((_, idx) => (
            <button
            aria-label={`Ir al proyecto ${idx + 1}`}
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-slate-800 w-6'
                  : 'bg-slate-300 w-2'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}