import type { IconType } from "react-icons";

interface cardProps {
  icon: IconType;
  titleCard: string;
  descriptionCard: string;
}

export default function Card({
  icon: Icon,
  titleCard,
  descriptionCard,
}: cardProps) {
  return (
    <div className="h-full ">

      <div className="group flex h-full min-h-65 flex-col rounded-lg border border-gray-200 dark: p-8 transition-shadow duration-300 hover:shadow-lg">

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full  transition-colors group-hover:bg-gray-200">

          <Icon className="text-3xl text-gray-600 transition-colors group-hover:text-gray-800" />

        </div>

        <h3 className="mb-3 text-xl font-bold text-gray-800 ">
          {titleCard}
        </h3>

        <p className="flex grow text-gray-600 ">
          {descriptionCard}
        </p>

      </div>

    </div>
  );
}