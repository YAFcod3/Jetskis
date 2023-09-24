import React from "react";
import FeaturesItem from "../../../shared/components/FeaturesItem";
import { jetSkis } from "../../../dbTemporal/jetKit";
import Link from "next/link";
import { yaths } from "@/app/dbTemporal/yaths";

function Features() {
  return (
    <>




      <div className="py-20  max-w-5xl mx-auto w-full	flex justify-center flex-wrap gap-20"
      >


        {yaths.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}


      </div>



      <div className="flex flex-col items-center md:mt-10  ">
        <Link href='/catalogue/yachts' className="bg-gradient-to-r from-blue-900 to-cyan-400 font-semibold text-white px-4 py-2 md:text-lg rounded-md hover:bg-blue-400  hover:from-blue-700 hover:to-cyan-200">
          Explore More Yachts --
        </Link>
      </div>


    </>
  );
}

export default Features;
