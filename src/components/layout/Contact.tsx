import { FaDoorClosed, FaHardHat, FaHome, FaMapMarkerAlt, FaPaintRoller } from "react-icons/fa";
import Formulario from "./Form";


export const Contactanos = () => {
  return (
    <div className="relative" id="contacto">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-white bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl sm:leading-none">
                Construcción y remodelación en Popayán
              </h2>
              <p className="max-w-xl mb-4 text-base text-slate-700 md:text-lg">
                Brindamos soluciones integrales en construcción para hogares, oficinas y
                proyectos comerciales. Nuestro compromiso es entregar trabajos de calidad
                que superen las expectativas de nuestros clientes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <FaMapMarkerAlt className="text-red-500 text-xl" />
                  <span className="text-slate-700">Popayán, Cauca</span>
                </li>

                <li className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <FaHardHat className="text-amber-400 text-xl" />
                  <span className="text-slate-700">Construcción y obra civil</span>
                </li>

                <li className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <FaPaintRoller className="text-gray-400 text-xl" />
                  <span className="text-slate-700">Acabados y obra blanca</span>
                </li>

                <li className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <FaHome className="text-amber-400 text-xl" />
                  <span className="text-slate-700">Remodelaciones y adecuaciones</span>
                </li>

                <li className="flex items-center gap-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <FaDoorClosed className="text-orange-400 text-xl" />
                  <span className="text-slate-700">Instalación de puertas y carpintería</span>
                </li>
              </ul>
            </div>
            <Formulario />
          </div>
        </div>
      </div>
    </div>
  );
};