import { ServicesData } from "../../data/DataWeb";
import Card from "../card/Card";


export default function Carrusel() {

  const filasCarrusel = [
    ServicesData.slice(0, 4),
    ServicesData.slice(4, 8),
    ServicesData.slice(8, 12),
  ];

  return (
    <section className="overflow-hidden py-16">

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold">
          Nuestros Servicios
        </h2>
      </div>

      <div className="space-y-6 ">

        {filasCarrusel.map((fila, index) => {

          const direction =
            index % 2 === 0
              ? "animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]"
              : "animate-[scrollReverse_25s_linear_infinite] hover:[animation-play-state:paused]";

          return (

            <div
              key={index}
              className="overflow-hidden "
            >

              <div className={`flex w-max gap-6 ${direction}`}>

                {[...fila, ...fila].map((service, serviceIndex) => (

                  <div
                    key={serviceIndex}
                    className="w-[320px] shrink-0"
                  >

                    <Card
                      icon={service.icon}
                      titleCard={service.titleCard}
                      descriptionCard={service.descriptionCard}
                    />

                  </div>

                ))}

              </div>

            </div>

          );
        })}

      </div>

    </section>
  );
}