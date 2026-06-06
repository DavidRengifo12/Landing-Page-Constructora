import type { Proyecto } from "../types/types";



interface Props {
  proyecto: Proyecto;
}

export default function CarruselServicios2({ proyecto }: Props) {
  return (
    <div className="lg:col-span-5 p-2">

      <span className="bg-slate-200 text-slate-600 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider inline-block mb-4">
        {proyecto.categoria}
      </span>

      <h3 className="text-2xl text-slate-900 mb-4">
        {proyecto.titulo}
      </h3>

      <p className="text-slate-700 text-sm md:text-base mb-6">
        {proyecto.descripcion}
      </p>

      <div className="bg-slate-100 p-5 rounded-xl flex flex-col gap-3 text-sm border border-slate-100">
        {[
          ['📍 Ubicación', proyecto.ubicacion],
          ['⏱️ Plazo', proyecto.plazo],
          ['📐 Dimensión', proyecto.dimension],
          ['👷‍♂️ Reto', proyecto.reto],
        ].map(([label, value]) => (
          <div key={label}>
            <strong>{label}:</strong> {value}
          </div>
        ))}
      </div>

    </div>
  );
}