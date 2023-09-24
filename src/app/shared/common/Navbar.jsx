"use client";
import React, { useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import MenuMobile from "./MenuMobile";
import Image from "next/image";

function Navbar({ type }) {
  const TOP_OFFSET = 66;

  const [showBackground, setShowBackground] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

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
        className={` transition duration-500 ${
          type === "showEffect"
            ? showBackground
              ? "bg-white shadow-lg"
              : ""
            : "bg-white shadow-lg"
        }`}
      >
        <div className="px-4 md:px-8 py-6 flex max-w-7xl mx-auto  md:flex-row items-center justify-between">
          <Image
            src={
              type === "showEffect"
                ? showBackground
                  ? "/Logo.svg"
                  : "/Logo-white.svg"
                : "/Logo.svg"
            }
            // src="/Logo.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className="absolute w-10 md:w-20 h-80 object-cover z-10 opacity-100 cursor-pointer hover:animate-pulse overflow-hidden transition-transform transform hover:scale-110"
          />

          {/* logo */}
          <div>
            <h2
              className={` hidden lg:block ml-24 text-3xl bold lg:cursor-pointer ${
                type === "showEffect"
                  ? showBackground
                    ? "text-black"
                    : " text-white"
                  : "text-black"
              }
            
            `}
            >
             Breezes  <span className="text-xl">of</span> Paradise 
            </h2>
          </div>

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
              href="/"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <NavbarItem label="Home" />
            </Link>

            <Link
              href="/catalogue"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <NavbarItem label="Catalogue" />
            </Link>

            <Link
              href="/faq"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <NavbarItem label="FAQ" />
            </Link>

            <Link
              href="/contact"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <NavbarItem label="Contact us" />
            </Link>

            <Link
              href="/about"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <NavbarItem label="About us" />
            </Link>
          </div>

          <div className="sm:hidden">
            {/* <MenuMobile showBackground={showBackground}/> */}

            <Image
              src={
                type === "showEffect"
                  ? showBackground
                    ? "/open-menu-black.png"
                    : "/open-menu-white.png"
                  : "/open-menu-black.png"
              }
              // src={open ? "/close.png" : "/open.png"}
              alt=""
              width={25}
              height={25}
              onClick={() => setOpenMenuMobile(!openMenuMobile)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <MenuMobile
          open={openMenuMobile}
          setOpenMenuMobile={setOpenMenuMobile}
        />
      </div>
    </nav>
  );
}

export default Navbar;
