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
<div className='mt-3 mx-3 flex flex-row justify-between'>
  <div className='text'>Contacts</div>
  <div className='last-order'>
    <button className='p-2 rounded bg-customColor text-white' onClick={onPressC}>
      Save Contacts
    </button>
  </div>
</div>

<hr/>

<ContactModal isModalOpen={isModalOpen} onClose={handleclick} />

   
   </>
  )
}
