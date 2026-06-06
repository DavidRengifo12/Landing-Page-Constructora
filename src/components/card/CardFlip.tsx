type CardFlipProps = {
  before: string
  after: string
  index?: string | number
}

export default function CardFlip({
  before,
  after,
  index,
}: CardFlipProps) {
  return (
    <div className="group w-full perspective-[1000px]">

      <div className="relative aspect-16/10 w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] mb-8">

        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg backface-hidden hover:cursor-pointer">

          <img
            src={before}
            alt={`antes-${index}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 rounded bg-red-500/70 px-3 py-1 text-sm text-white">
            Antes
          </div>

        </div>

        {/* BACK */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg backface-hidden transform-[rotateY(180deg)] ">

          <img
            src={after}
            alt={`despues-${index}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 rounded bg-sky-500/80 px-3 py-1 text-sm text-white">
            Después
          </div>

        </div>

      </div>

    </div>
  )
}