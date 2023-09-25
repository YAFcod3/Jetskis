"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function ItemGallery() {
  
  const photos = [
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
    },
    {
      src: "https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  console.log(photos.length);

  const [open, setOpen] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  return (
    <div className="md:relative mb-96 md:top-[280px]">
      <div className="max-w-5xl mx-auto">
        {/* ***************************************** */}

        {open && (
          <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-50">
            <FaTimes
              className="absolute bottom-10 md:right-20 right-4 text-5xl text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />

            <div className="w-full h-full flex justify-center items-center">
              {/* <img src={photos[sliderNumber].src} alt="" className="w-80 h-80vh" /> */}
              <Image
                width={500}
                height={500}
                src={photos[sliderNumber].src}
                alt="imageSlider"
              />
            </div>
          </div>
        )}
        {/* ************************************************ */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px]">
          {photos.map((photo, i) => (
            <div className="w-full" key={photo.src}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=""
                className="w-full h-200px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemGallery;
