import React from "react";
import FeaturesItem from "../../../shared/components/FeaturesItem";
import { jetSkis } from "../../../dbTemporal/jetKit";

function Features() {
  return (
    <>




      <div className="py-20  max-w-5xl mx-auto w-full	flex justify-center flex-wrap gap-20"
      >


        {jetSkis.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}


      </div>



      <div className="flex flex-col items-center md:mt-10  ">
        <button className="bg-blue-600 font-semibold text-white px-4 py-2 md:text-lg rounded-md hover:bg-blue-400">
          Explore More --
        </button>
      </div>


    </>
  );
}

export default Features;
