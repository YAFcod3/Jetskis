import React from 'react'

function ItemInfo() {
  return (
    <div className="relative mb-44 " style={{ top: "66px" }}>
    {/* imagen */}
    <div
      className="w-full md:h-[500px] h-[400px] bg-cover md:bg-right-bottom  relative brightness-[85%]"
      style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/843633/pexels-photo-843633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}`,
      }}
    >
      <div className=" absolute top-20  left-1">
        <p
          className="text-white          font-bold
drop-shadow-3xl ml-3 text-2xl md:text-3xl "
        >
          Luxury Cruiser 2000
        </p>
      </div>
    </div>

    {/* text */}
    <div className="md:shadow-lg rounded-lg py-8 px-4  md:px-8 md:absolute md:top-[80%] md:right-44  bg-white w-full md:w-[600px] h-[400px] md:h-auto ">

      <div className="flex flex-col gap-6 mx-auto">

        {/* flex boton precio */}
      <div className="flex justify-between items-center ">
        <p className="text-black font-bold text-xl md:text-2xl">
          $200 per hour
        </p>
        <button className="mt-4 bg-gradient-to-r from-blue-900 to-cyan-400  hover:from-blue-700 hover:to-cyan-200 text-white font-bold py-2 px-4 text-sm rounded-md">
          Reserve Now
        </button>
      </div>

      {/* desc 1 */}
      <p className="text-slate-600 font-semibold text-sm">
        Luxury yacht available for hourly rental
      </p>
      {/* desc 2 */}

      <p className="text-slate-600  font-serif  text-md">
        Includes captain and crew
      </p>
      <p className="text-slate-600  font-serif  text-md">
        Capacity for <span className=" text-blue-500">10 people</span>
      </p>
      <p className="text-slate-600  font-serif  text-md">JetSki dock</p>
      <p className="text-slate-600  font-serif  text-md">Pool and Layout</p>
      <p className="text-slate-600  font-serif  text-md">Misc floats etc</p>
      </div>
      
    </div>
  </div>  )
}

export default ItemInfo