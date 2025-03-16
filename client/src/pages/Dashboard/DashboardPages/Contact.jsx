import React, { useEffect, useState } from 'react'
import ContactModal from '../../../components/ContactModal';
import axios from 'axios';
import { API_URL } from '../../../API_URL';

export default function Contact() {
  const[isModalOpen, setModalopen] = useState(false);
  const[contactdetail, getContactdetail] = useState([]);
 

  useEffect(()=>{
    const getData = async () => {
      const response = await axios({
        method:'get',
        url:`${API_URL}/api/contact/getcontact`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      });
      const data = response.data;
       getContactdetail(data);
       console.log("data fetch succesfully", response.data);
    }
    getData();

  },[]);
 

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

<div className='m-3'>
  <p>contact details will be shown here</p>
  {/* {contactdetail.map((item)=>{
    <p>name:{item.name}</p>
  })} */}
</div>

<ContactModal isModalOpen={isModalOpen} onClose={handleclick} />

   
   </>
  )
}
