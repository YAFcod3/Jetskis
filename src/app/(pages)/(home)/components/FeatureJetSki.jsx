import { jetSkis } from "@/app/dbTemporal/jetKit";
import FeaturesItem from "@/app/shared/components/FeaturesItem";
import Link from "next/link";
import React from "react";

function FeatureJetSki() {
  return (
    <div className="py-14">
      <div className="py-20  max-w-5xl mx-auto w-full	flex justify-center flex-wrap gap-20">
        {jetSkis.slice(0, 3).map((card) => (
          <FeaturesItem key={card.id} card={card} />
        ))}
      </div>

      <div className="flex flex-col items-center md:mt-10  ">
        <Link
          href="/catalogue/jetskis"
          className="bg-gradient-to-r from-blue-900 to-cyan-400 font-semibold text-white px-4 py-2 md:text-lg rounded-md hover:from-blue-700 hover:to-cyan-200"
        >
          Explore More JetSkis --
        </Link>
      </div>
    </div>
  );
}

export default FeatureJetSki;
