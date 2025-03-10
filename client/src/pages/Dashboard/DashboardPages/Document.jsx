import React, { useState } from 'react';
import Documentoption from '../../../components/Documentoption';
import { use } from 'react';

export default function Document() {
  const[isModalOpen, setModal] = useState(false);



  function onPressD(){
    setModal(true);
  }
  function handleclickd(){
    setModal(false);
  }

  return (
   <>
   <div className=''>
     <div className='text-color2 block p-1 font-semibold text-center'>Documents</div>
     <hr className='w-full'/>
     <div className='flex flex-row justify-between m-8 p-2 border-b-2'>
     <button className='p-1 rounded text-customColor bg-lightbg'>
      Add
     </button>
      <div className='last-order'>
       <button className='p-1 rounded bg-customColor text-white' onClick={onPressD}>
         +new Documents
       </button>
     </div>
     </div>
     
   </div>
   
   
   
   <Documentoption isModalOpen={isModalOpen} onClose={handleclickd} />
   </>
  )
}
