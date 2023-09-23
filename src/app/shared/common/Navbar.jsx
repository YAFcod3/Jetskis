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
        className={`px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between transition duration-500 ${
          type === "showEffect"
            ? showBackground
              ? "bg-white shadow-lg"
              : ""
            : "bg-white shadow-lg"
        }`}
      >
        <Image
          src={
            type === "showEffect"
              ? showBackground
                ? "/Logo.svg"
                : "/Logo-white.svg"
              : "/Logo.svg"
          }
          // src="/Logo.svg"
          width={50}
          height={50}
          alt="Picture of the author"
          className="absolute w-60 h-60 object-cover z-10 opacity-100 cursor-pointer hover:animate-pulse overflow-hidden transition-transform transform hover:scale-110"
        />

        {/* logo */}
        <div></div>

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
            <NavbarItem label="Our services" />
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
          <MenuMobile />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;