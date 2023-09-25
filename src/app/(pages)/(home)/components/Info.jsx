import React from "react";
import Image from "next/image";

function Info() {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-center h-auto gap-4 lg:gap-8 mb-32">
      <div className="flex flex-col bg-white flex-auto items-center lg:w-1/3 p-4">
        <Image
          width={150}
          height={50}
          src="/skindiving.png"
          alt="ssgs"
          className="w-16 md:w-32 lg:w-48"
        />
        <h1 className="text-3xl text-blue-900 text-center">
          Skin<span className="text-3xl">Diving</span>
        </h1>
        <p className="text-center max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          saepe, dolor quos quidem quo magnam commodi doloremque eius soluta,
          expedita, sed placeat fuga perferendis exercitationem? Reprehenderit
          sint vel tenetur quidem?
        </p>
      </div>

      <div className="flex flex-col bg-white flex-auto items-center lg:w-1/3 p-4">
        <Image
          width={150}
          height={50}
          src="/food.png"
          alt="ssgs"
          className="w-16 md:w-32 lg:w-48"
        />
        <h1 className="text-3xl text-blue-900 text-center">
          Gastronomic<span className="text-3xl">Services</span>
        </h1>
        <p className="text-center max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          saepe, dolor quos quidem quo magnam commodi doloremque eius soluta,
          expedita, sed placeat fuga perferendis exercitationem? Reprehenderit
          sint vel tenetur quidem?
        </p>
      </div>

      <div className="flex flex-col bg-white flex-auto items-center lg:w-1/3 p-4">
        <Image
          width={150}
          height={50}
          src="/massage.png"
          alt="ssgs"
          className="w-16 md:w-32 lg:w-48"
        />
        <h1 className="text-3xl text-blue-900 text-center">
          Massage<span className="text-3xl">Service</span>
        </h1>
        <p className="text-center max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          saepe, dolor quos quidem quo magnam commodi doloremque eius soluta,
          expedita, sed placeat fuga perferendis exercitationem? Reprehenderit
          sint vel tenetur quidem?
        </p>
      </div>
    </div>
  );
}

export default Info;
