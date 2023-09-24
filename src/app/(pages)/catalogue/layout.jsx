import Navbar from "@/app/shared/common/Navbar";
import Link from "next/link";
import React from "react";

function Layout({ children }) {





  



  return (
    <div>
      <Navbar />

      <div
        className="relative"  style={{ top: "66px" }}
      >
        {" "}
        <nav className="flex gap-4 py-14   text-xl md:text-2xl justify-center md:justify-start md:max-w-5xl mx-auto  ">
          <div className=" text-gray-500 hover:text-gray-700 " >
          <Link href="/catalogue">Yaths</Link>
          </div>
          <div className=" text-gray-500 hover:text-gray-700 " >
          <Link href="/catalogue/jetskis">Jet Skis</Link>
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
}

export default Layout;
