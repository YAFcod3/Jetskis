import Navbar from "@/app/shared/common/Navbar";
import React from "react";
import AllItems from "./components/AllYaths";

function Catalogue() {
  return (
    <>
      <h2 className="font-bold text-center text-4xl pt-16">Yaths </h2>

      <div className="pt-18  pb-24">
        <AllItems />
      </div>
    </>
  );
}

export default Catalogue;
