"use client";
import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import MenuMobile from "./MenuMobile";
import Image from "next/image";

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
    <nav className="w-full fixed z-40 ">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center justify-between transition duration-500 ${
          type === "showEffect"
            ? showBackground
              ? "bg-white shadow-lg "
              : ""
            : "bg-white shadow-lg "
        } `}
      >
        <Image
          src="/Logo.svg"
          width={100}
          height={100}
          alt="Picture of the author"
          className="absolute w-20 h-20 object-cover z-10 opacity-100 cursor-pointer hover:animate-pulse overflow-hidden transition-transform transform hover:scale-110"
        />
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
          ></div>
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
          <Link
            href="/catalogue"
            className="overflow-hidden transition-transform transform hover:scale-110"
          >
            {" "}
            <NavbarItem label="All posts" />
          </Link>
          <Link
            href="/contact"
            className="overflow-hidden transition-transform transform hover:scale-110"
          >
            {" "}
            <NavbarItem label="Contact us" />
          </Link>{" "}
          <Link
            href="/about"
            className="overflow-hidden transition-transform transform hover:scale-110"
          >
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
          <MenuMobile />
          {/* <p className="text-sm">Browse</p> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
