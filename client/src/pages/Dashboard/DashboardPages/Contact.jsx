import React, { useState } from 'react'
import ContactModal from '../../../components/ContactModal'

export default function Contact() {
  const[isModalOpen, setModalopen] = useState(false);

 function onPressC(){
  setModalopen(true);
 }

 function handleclick(){
  setModalopen(false);
 }

  return (
   <>
<div className='m-1 flex flex-row justify-between'>
  <div className='text-color2 font-semibold text-center'>Contacts</div>
  <div className='last-order'>
    <button className='p-1 rounded bg-customColor text-white' onClick={onPressC}>
      +contacts
    </button>
  </div>
</div>

<hr/>

<ContactModal isModalOpen={isModalOpen} onClose={handleclick} />

   
   </>
  )
}
