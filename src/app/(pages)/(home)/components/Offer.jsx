import Image from "next/image";
import React from "react";

function Offer() {
  return (
    <div className="footer bg-gradient-to-r from-blue-900 to-cyan-400 mt-44  h-screen flex flex-col-reverse md:flex-row md:justify-between md:h-[65vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-3xl font-bold xl:text-6xl">
          {" "}
          Jet Ski Offers
        </h1>
        <p className="text-white xl:text-xl">
          Exclusive jet ski, enjoy your day with this aquatic ship with a 10%
          discount for at least one day !!
        </p>
        <button className="bg-white text-blue-600 rounded-md py-3 px-6">
          Reserve Now{" "}
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image fill className="cover" src="/image/yacht/featureItem6.jpg" alt="" />
      </div>
    </div>
  );
}

export default Offer;
