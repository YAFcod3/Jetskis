import { yaths } from '@/app/dbTemporal/yaths';
import FeaturesItem from '@/app/shared/components/FeaturesItem';
import React from 'react'

function AllItems() {
  return (
    <>




      <div className="py-20  max-w-5xl mx-auto w-full	flex justify-center flex-wrap gap-20"
      >


        {yaths.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}
         {yaths.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}
         {yaths.map((card) => (
          <FeaturesItem key={card.id} card={card} />
          // console.log(card)
        ))}


      </div>





    </>
  );
}

export default AllItems