import Navbar from "@/app/shared/common/Navbar";
import Link from "next/link";
import React from "react";
// import {  Lora  } from "next/font/google";

// const lora = Lora({ subsets: ["latin"] });

function Layout({ children }) {
  return (
    <div>
      <Navbar />

      <div className="relative " style={{ top: "86px" }}>
        {/* <div className={lora.className}> */}
        {/* <h2 className="text-center bold text-3xl py-4">Choose a Category</h2> */}

        {/* </div> */}
      </div>
      {children}
    </div>
  );
}

export default Layout;
