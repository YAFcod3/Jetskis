import Image from "next/image";
import Link from "next/link";
import React from "react";

function FeaturesItem({ card }) {
  const { name, description, image, pricePerHour, technicalSpecifications } =
    card;

  return (
    <>
      <div className="w-[280px] shadow-md  ">
        {/* contenedror de intercambio de imagen */}
        <div className="w-full h-56 overflow-hidden relative group">
          {/* Imagen 1 */}
          <Image
            src={image}
            width={300}
            height={300}
            alt="Picture of the author"
            className="w-full h-full absolute object-cover transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Imagen 2 */}
          <Image
            src="/featureItem2.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            className="absolute w-full h-full object-cover z-10 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        </div>

        {/* contenedor de texto */}
        <div className="flex flex-col gap-2 mt-2 pb-4 px-2">
          <h3 className="text-xl font-bold text-slate-800 ">{name}</h3>

          <span className="text-xs text-slate-800 ">
            {" "}
            {description.length > 65
              ? description.slice(0, 65) + "..."
              : description}
          </span>
          <span className="text-sm text-slate-700">
            <span className="font-bold">maxSpeed:</span>{" "}
            {technicalSpecifications.maxSpeed} mph
          </span>
          {/* flex precio - boton */}
          <div className="flex justify-between items-center w-full">
            <span className="text-lg text-black font-semibold">
              $ {pricePerHour}
            </span>
            <button className="bg-blue-600 text-sm rounded-md text-white px-2 py-2 hover:bg-blue-400 ">
              More Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesItem;
