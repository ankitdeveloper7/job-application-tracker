import React, { useEffect, useState } from 'react'
import ContactModal from '../../../components/ContactModal';
import axios from 'axios';
import { API_URL } from '../../../API_URL';
import Contactbox from '../../../components/Contactbox';

function useContact(n){
  const[contactdetail, setContactdetail] = useState([]);

  useEffect(()=>{   
      const data = setInterval(()=>{
        axios.get(`${API_URL}/api/contact/getcontact`,{ headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }})
        .then(res=>{
            setContactdetail(res.data);
            console.log("till now code has ran successfully");
        })
      }, n*1000);

      axios.get(`${API_URL}/api/contact/getcontact`,{ headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }}
  )
      .then(res=>{
          setContactdetail(res.data);
          console.log("till now code has ran successfully");
      })

      return()=>{
        clearInterval(data);
      }
   
  },[]);
  return contactdetail;
}

export default function Contact() {
  const[isModalOpen, setModalopen] = useState(false); 
  const contactdetails = useContact(5);
  console.log("the value of contactdetails", contactdetails);
 

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
  {contactdetails.map((item)=>(
 <Contactbox 
 key={item._id}
 name={item.name} 
 jobtitle={item.jobtitle} 
 companies={item.companies} 
 location={item.location} 
 email={item.email} 
 phoneno={item.phonenumber}/>
  )
   
  )}
</div>

<ContactModal isModalOpen={isModalOpen} onClose={handleclick} />

   
   </>
  )
}
