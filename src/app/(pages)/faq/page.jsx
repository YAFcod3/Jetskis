import Navbar from "@/app/shared/common/Navbar";
import React from "react";
import FaqChild from "./components/FaqChild";

function Faq() {
  return (
    <>
      <Navbar />
      <div className="relative" style={{ top: "86px" }}>
        <div className="py-8 pb-36 max-w-5xl mx-auto"><FaqChild/></div>
      </div>
    </>
  );
}

export default Faq;
