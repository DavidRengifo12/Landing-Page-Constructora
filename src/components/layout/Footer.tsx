
{/*import {
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";*/}
import { Link } from "react-scroll";

export default function Footer() {
  const soluciones = [
    "Obra gris",
    "Obra blanca",
    "Acabados",
    "Remodelaciones",
    "Instalación de puertas",
    "Proyectos comerciales",
  ];

  const Footer = [
  { href: "inicio", label: "Inicio" },
  { href: "proyectos", label: "Proyectos" },
 // { href: "nosotros", label: "Nosotros" },
  { href: "servicios", label: "Servicios" },
  { href: "contacto", label: "Contacto" },
];

  return (
    <footer className="border-t border-border-ui bg-bg-main pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[1fr_1.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <h3 className="text-lg font-light text-text-body md:text-2xl">
                Manos a la Obra
              </h3>
            </div>

            <p className=" text-sm leading-relaxed text-text-body">
              Especialistas en obra gris, obra blanca, acabados con
              remodelaciones para proyectos
              residenciales y comerciales.
            </p>

            {/*<div className="mt-6 flex gap-4 text-3xl text-text-body">
              
              <FaInstagram className="cursor-pointer transition hover:scale-110 hover:text-pink-500" />
              <SiTiktok className="cursor-pointer transition hover:scale-110 hover:text-black" />
              <FaFacebook className="cursor-pointer transition hover:scale-110 hover:text-blue-500" />
            </div>*/}
          </div>

          <nav>
            <h3 className="mb-4 text-lg font-light text-text-body md:text-2xl">
              Soluciones
            </h3>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-text-body">
              {soluciones.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h4 className="mb-4 text-lg font-light text-text-body md:text-2xl">
              Acciones
            </h4>

            <ul className="flex flex-col gap-2 text-sm text-text-body">
              {Footer.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    smooth
                    spy
                    duration={800}
                    offset={-40}
                    activeClass="text-amber-500"
                    className="cursor-pointer px-3 py-2 text-slate-800 transition-colors hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-center">
            {" "}
            © 2026 Manos a la obra. Todos los derechos reservados.
          </p>
      </div>
    </footer>
  );
}