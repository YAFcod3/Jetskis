import Navbar from "@/app/shared/common/Navbar";
import Link from "next/link";
import React from "react";

function Item() {
  return (
    <>
      <Navbar />
      <div className="relative" style={{ top: "86px" }}>
        <div className="py-24 h-screen">
          {" "}
          <h3>Item</h3> <Link href="/reserve">Reserve</Link>
        </div>
      </div>
    </>
  );
}

export default Item;
