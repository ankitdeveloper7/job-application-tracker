// import React, { useState } from 'react';
// import ContactModal from '../../../components/ContactModal';

// export default function Profile() {
//   const[isModalOpen, setModalopen] = useState(false);
//   const[update, setUpdate] = useState(false);
//   function onPressC1(){
//     setModalopen(true);
//     setUpdate(true);
//    }
//    function onPressC2(){
//     setModalopen(true);
//     setUpdate(false);
//    }
  
//    function handleclick(){
//     setModalopen(false);
//     // setUpdate(false);
//    }
//   return (
//   <>
//   <p>this is profile section</p>
//   <button onClick={onPressC1}>add contact</button> 
//   <button onClick={onPressC2}>update contact</button> 
//   {update? <ContactModal isModalOpen={isModalOpen} onClose={handleclick} /> :
//   <ContactModal isModalOpen={isModalOpen} onClose={handleclick} initialname="alok" initialjobtitle="software engineer" initialcompanies="thi sis t" initiallocation="tha ti si s" initialemail="asldjfklas" initialphone="alsjdfklas" /> }
//   </>

//   )
// }

import React from 'react'

export default function Profile() {
  return (
    <div>Profile</div>
  )
}

