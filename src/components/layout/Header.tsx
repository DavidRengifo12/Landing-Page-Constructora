import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = [
  { href: "inicio", label: "Inicio" },
  { href: "proyectos", label: "Proyectos" },
  { href: "nosotros", label: "Nosotros" },
  { href: "servicios", label: "Servicios" },
  { href: "contacto", label: "Contacto" },
];

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b border-slate-200 ${
        scroll
          ? "backdrop-blur-md bg-white/80 shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between py-4 px-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="LogoWeb2.png"
            alt="logo"
            className="h-16 w-auto rounded-full"
          />
          <p className="text-slate-900 font-bold text-xl">
            Manos a la obra
          </p>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="lg:hidden text-2xl text-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* MENÚ DESKTOP */}
        <nav className="hidden lg:block">
          <ul className="flex gap-4">
            {Navbar.map((item) => (
              <li
                key={item.label}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-slate-700 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  to={item.href}
                  smooth
                  spy
                  duration={800}
                  offset={-90}
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

      {/* MENÚ MOBILE */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Navbar.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  smooth
                  spy
                  duration={800}
                  offset={-90}
                  activeClass="text-amber-500"
                  className="cursor-pointer px-3 py-2 text-slate-800 transition hover:text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}