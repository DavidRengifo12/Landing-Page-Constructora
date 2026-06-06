import type { IconType } from "react-icons";

interface CardFeaturesProps {
  icon: IconType;
  title?: string;
  description?: string;
  variant?: "large" | "compact"; 
  iconPosition?: 'top' | 'left'
  //iconColor: 'text-brand-accent' | 'black'
}

export default function CardFeatures({
  icon: Icon,
  title,
  description,
  variant = "large",
  iconPosition ='top',
//iconColor = 'text-brand-accent'
}: CardFeaturesProps) {
  const isLarge = variant === "large";
  const isIconTop = iconPosition === 'top';

  //const colorIcon = iconColor === 'text-brand-accent' ? 'text-brand-accent' : 'text-text-title';

  return (
    <div
      className={`
        border border-gray-300 bg-bg-card-2 h-full transition-shadow duration-300 hover:shadow-md
        ${isLarge ? "p-8" : "p-6"}
      `}
    >
      <div className={`flex ${isIconTop ? "flex-col items-start" : "flex-row items-center"} gap-5`}>
        
        {/* CONTENEDOR DEL ÍCONO CORREGIDO: Libre de restricciones de altura */}
        
          <div className="flex shrink-0 text-text-title items-center justify-center py-4">
            <Icon />
          </div>
        

        <div className="flex flex-col">
          {title && (
            <h3
              className={`font-medium text-text-title ${isLarge ? "text-xl mb-3" : "text-lg mb-2"}`}
            >
              {title}
            </h3>
          )}
          <p className="leading-relaxed text-text-body">{description}</p>
        </div>
      </div>
    </div>
  );
}