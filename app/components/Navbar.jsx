"use client";
import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";

function Navbar() {
  const TOP_OFFSET = 66;

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="w-full fixed z-40
    
    "
    >
      <div
        className={`px-4  md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-white shadow-lg " : ""
        } `}
      >
        {/* logo */}
        <div
          className={` transition duration-500 uppercase font-bold text-md md:text-2xl ${
            showBackground ? "text-black " : "text-white "
          }`}
        >
          logo
        </div>

        {/* elementos nav */}
        <div
          className={`flex-grow ml-8 gap-7 hidden lg:flex transition duration-500  ${
            showBackground ? "text-black " : "text-white "
          }`}
        >
          <NavbarItem label="All posts" />
          <NavbarItem label="Contact us" />

          <NavbarItem label="About us" />
        </div>

        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
