import Image from 'next/image'
import React from 'react'

function Offer() {
  return (
    <div className="bg-blue-600 mt-44 flex flex-col-reverse md:flex-row md:justify-between
    md:h-[60vh]">
       {/* //  md:bg-[url('/banner.jpg')]   */}



    {/* TEXT CONTAINER */}
    <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">


      <h1 className="text-white text-3xl font-bold xl:text-6xl"> Yaths & Jet Ski </h1>
      <p className="text-white xl:text-xl">
        Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.
      </p>
      {/* <CountDown/> */}
      <button className="bg-white text-blue-600 rounded-md py-3 px-6">Reservation now</button>
    </div>




    {/* IMAGE CONTAINER */}
    <div className="flex-1 w-full pb-4 md:pb-0 md:h-full">
      <img src="/featureItem5.jpg" className='w-full h-full cover ' alt="" />
      {/* <Image src="/banner.jpg" alt="" fill className='cover' /> */}
    </div>
  </div>  )
}

export default Offer