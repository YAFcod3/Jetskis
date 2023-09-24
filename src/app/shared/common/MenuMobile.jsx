"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Our Services", url: "/catalogue" },
  { id: 3, title: "FAQ", url: "/faq" },
  { id: 4, title: "About us", url: "/about" },
  { id: 5, title: "Contact us", url: "/contact" },
];

//  mobile menu
const MenuMobile = ({ open, setOpenMenuMobile }) => {
  return (
    <div>
      {/* SHORTCUT */}

      {open && (
        <div className="bg-gradient-to-r from-blue-700 to-cyan-400 text-white font-semibold absolute top-0 left-0 w-full h-screen flex flex-col gap-8 items-center justify-center text-lg z-20">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpenMenuMobile(false)}>
              {item.title}
            </Link>
          ))}

          <div
            className="cursor-pointer"
            onClick={() => setOpenMenuMobile(false)}
          >
            <img
              src="/menu-close.png"
              alt="close"
              className="absolute top-6 left-4 w-10 h-10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
