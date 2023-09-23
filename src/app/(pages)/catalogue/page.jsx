import Navbar from '@/app/shared/common/Navbar';
import React from 'react';
import AllItems from './components/Allltems';

function Catalogue() {
  return (
    <>
      <Navbar  />

      <div className='relative' style={{ top: '66px' }}>
        <h2 className='font-bold text-center text-3xl pt-14'>Lorem ipsum </h2>
        <div className='pt-18  pb-24'>
         <AllItems/>
        </div>
      </div>
    </>
  );
}

export default Catalogue;
