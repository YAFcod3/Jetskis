import React from "react";
import Link from "next/link";
import {  Lora  } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });



function Catalogue() {

 




  return (
    <div className={lora.className}>
     

      <div className="flex flex-col sm:flex-row py-16 items-center sm:justify-center sm:gap-10 md:gap-16 md:min-h-screen">
        <Link
          style={{
            backgroundImage: `url(${ "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
          }}
          className="brightness-[75%]  hover:opacity-70 bg-cover  sm:border-2 sm:border-slate-200 sm:border-solid sm:rounded-md  w-full sm:w-[300px] md:w-[500px] h-[300px] relative cover"
          href="/catalogue/yachts"
        >
          <span className="absolute right-3 top-3 text-2xl bold  drop-shadow-xl">
          Yachts
          </span>
        </Link>
        <Link
          style={{
            backgroundImage: `url(${"https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
          }}
          className="brightness-[75%]  bg-cover hover:opacity-70  sm:border-2 sm:border-slate-200 sm:border-solid sm:rounded-md  w-full sm:w-[300px] md:w-[500px] h-[300px] relative cover"
          href="/catalogue/jetskis"
        >
          <span className="absolute right-3 top-3 text-2xl bold  drop-shadow-xl">
            Jet Skis
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Catalogue;
