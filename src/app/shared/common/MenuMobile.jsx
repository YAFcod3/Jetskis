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
const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* SHORTCUT */}
      <Image
        src="/barra-de-menus.png"
        // src={open ? "/close.png" : "/open.png"}
        alt=""
        width={25}
        height={25}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-blue-700 text-white font-semibold absolute top-0 left-0 w-full h-screen flex flex-col gap-8 items-center justify-center text-lg z-20">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          <div className="cursor-pointer" onClick={() => setOpen(false)}>
            Close
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
