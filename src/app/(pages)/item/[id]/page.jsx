import Navbar from "@/app/shared/common/Navbar";
import Link from "next/link";
import React from "react";
import ItemGallery from "./components/ItemGallery";
import ItemInfo from "./components/ItemInfo";

function Item() {
  return (
    <>
      <Navbar />
      <ItemInfo />

      <ItemGallery />
    </>
  );
}

export default Item;
