

interface Props {
  titulo: string;
  imgAntes: string;
  imgDespues: string;
  sliderValue: number;
  onChange: (value: number) => void;
}

export default function ProyectoComparador({
  titulo,
  imgAntes,
  imgDespues,
  sliderValue,
  onChange,
}: Props) {
  return (
    <div className="relative w-full h-70 sm:h-100 overflow-hidden rounded-xl shadow-md bg-slate-100 select-none touch-none">

      <img
        src={imgDespues}
        alt={`Después - ${titulo}`}
        className="w-full h-full object-cover"
      />

      <span className="absolute bottom-5 right-5 bg-slate-900/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded z-10">
        Después
      </span>

      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderValue}%` }}
      >
        <img
          src={imgAntes}
          alt={`Antes - ${titulo}`}
          className="w-full h-full object-cover"
        />

        <span className="absolute bottom-5 left-5 bg-slate-900/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded z-10">
          Antes
        </span>
      </div>

      <input
        aria-label={`Controlar opacidad antes y después de: ${titulo}`}
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize z-30"
      />

      <div
        className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 shadow-lg -translate-x-1/2"
        style={{ left: `${sliderValue}%` }}
      />
    </div>
  );
}