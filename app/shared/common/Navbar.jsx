"use client";
import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import MenuMobile from "./MenuMobile";

function Navbar({ type }) {
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
      className="w-full fixed   z-40
    
    "
    >
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
          type === "showEffect"
            ? showBackground
              ? "bg-white shadow-lg "
              : ""
            : "bg-white shadow-lg "
        } `}
      >
        {/* logo */}
        <Link href="">
          <div
            className={` transition duration-500 uppercase font-bold text-md md:text-2xl ${
              type === "showEffect"
                ? showBackground
                  ? "text-black "
                  : "text-white "
                : "text-black "
            }`}
          >
            logo
          </div>
        </Link>

        {/* elementos nav */}
        <div
          className={`gap-7 hidden sm:flex transition duration-500  ${
            type === "showEffect"
              ? showBackground
                ? "text-black "
                : "text-white "
              : "text-black "
          }`}
        >
          <Link href="/catalogue">
            {" "}
            <NavbarItem label="All posts" />
          </Link>
          <Link href="/contact">
            {" "}
            <NavbarItem label="Contact us" />
          </Link>{" "}
          <Link href="/about">
            {" "}
            <NavbarItem label="About us" />
          </Link>
        </div>

        <div
          // className={`sm:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative ${
          //   type === "showEffect"
          //   ? showBackground
          //     ? "text-black "
          //     : "text-white "
          //   : "text-black "
          // } `}
          className="sm:hidden"
        >
          <MenuMobile/>
          {/* <p className="text-sm">Browse</p> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
