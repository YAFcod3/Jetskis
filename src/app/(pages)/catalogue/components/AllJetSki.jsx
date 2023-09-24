import { jetSkis } from '@/app/dbTemporal/jetKit'
import FeaturesItem from '@/app/shared/components/FeaturesItem'
import React from 'react'

function AllJetKits() {
  return (


    <>
    
    

    <div className="py-20  max-w-5xl mx-auto w-full	flex justify-center flex-wrap gap-20"
      >


        {jetSkis.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}
         


      </div>

    </>
  )
}

export default AllJetKits