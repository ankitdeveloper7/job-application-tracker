import React, { useEffect, useState } from 'react';
import Documentoption from '../../../components/Documentoption';
import { use } from 'react';
import { API_URL } from '../../../API_URL';
import axios from 'axios';

function useDocument(n){
  const[documentdata, setDocumentdata] = useState([]);

  useEffect(()=>{

   const response = setInterval(()=>{
       axios.get(`${API_URL}/api/document/getdocument`, { headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer " + localStorage.getItem("token")
       }}).then(res =>{
        setDocumentdata(res.data);
        console.log("this data is running many times")
       })
   }, n*1000)

    axios.get(`${API_URL}/api/document/getdocument`, { headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + localStorage.getItem("token")
    }}).then(res=>{
          setDocumentdata(res.data);
          console.log("data set succesfully")
    })


    return()=>{
      clearInterval(response);
    }
  },[])

  return documentdata;
}
export default function Document() {
  const[isModalOpen, setModal] = useState(false);
  const docdata = useDocument(3);
console.log(docdata)


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

     <div>
      {docdata.map((item)=>(
        <iframe src={item.filename}  className=' w-full max-w-80 min-h-full m-2'></iframe>
      ))}
      
     </div>
     
   </div>
   
   
   
   <Documentoption isModalOpen={isModalOpen} onClose={handleclickd} />
   </>
  )
}
