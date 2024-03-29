// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

function FeaturesItem({ card }) {
  const { name, description, image, pricePerHour, technicalSpecifications } =
    card;

  let fieldMaxSpeed = technicalSpecifications.maxSpeed ? true : false;

  return (
    <>
      <div className="w-[280px] shadow-lg rounded-md ">
        {/* contenedror de intercambio de imagen */}
        <div className="w-full h-56 overflow-hidden relative group">
          {/* Imagen 1 */}
          <Image
            // blurDataURL="data:image/jpeg..."
            // onLoad={}
            // onLoadingComplete={}
            // loader={imageLoader}
            src={image}
            width={300}
            height={300}
            // blurDataURL=""
            // placeholder="blur"
            // quality={100}
            // fill
            alt="Picture of the author"
            className="w-full h-full absolute object-cover transform scale-100 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          {/* Imagen 2 */}
          <Image
            src={
              (fieldMaxSpeed
                ? "https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=600"
                : "https://images.pexels.com/photos/2412611/pexels-photo-2412611.jpeg?auto=compress&cs=tinysrgb&w=600")
            }
            // src="/image/yacht/featureItem6.jpg"
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

          {fieldMaxSpeed ? (
            <>
              <span className="text-sm text-slate-700">
                <span className="font-bold">max Speed:</span>{" "}
                {technicalSpecifications.maxSpeed}
              </span>
            </>
          ) : (
            <>
              <span className="text-sm text-slate-700">
                <span className="font-bold">max Capacity:</span>{" "}
                {technicalSpecifications.maxCapacity}
              </span>
            </>
          )}
          {/* flex precio - boton */}
          <div className="flex justify-between items-center w-full">
            <span className="text-lg text-black font-semibold">
              $ {pricePerHour}
            </span>
            <Link
              href="/item/3"
              className="bg-gradient-to-r from-blue-900 to-cyan-400 text-sm rounded-md text-white px-2 py-2  hover:from-blue-700 hover:to-cyan-200 "
            >
              More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesItem;
