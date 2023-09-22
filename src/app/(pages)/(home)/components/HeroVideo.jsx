import React from "react";

function HeroVideo() {
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56-25vw] object-cover brightness-[65%] "
        autoPlay
        src="/videos/hero-video.mp4"
        muted
        // controls
        loop
        data-smart-video
      ></video>

      <div className="absolute top-[40%]  ml-4 md:ml-16">
        <p
          className="text-white 
        text-1xl 
        md:text-5xl
        h-full w-[50%] 
        lg:text-6xl
         font-bold
          drop-shadow-xl
           "
        >
          Jet Ski Rentals
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 my-4 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
          dolorem, consequuntur eum sit mi
        </p>

        <div>
          {/* poner icono aqui */}
          {/* boton */}
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;
