import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { API_URL } from '../API_URL';
import axios from 'axios';

export default function DocumentModal({modalopen,onClose}) {
      const[title, setTitle] = useState();
      const[description, setDescription]=  useState();

    async function saveDoc(){
      const response = await axios({
        method:'post',
        url:`${API_URL}/api/document/writedocument`,
        data:{
          title,
          description
        },
        headers:{
          "Content-Type":"application/json",
          "Authorization":"bearer " + localStorage.getItem("token")
        }
      }).then(res=>{
        console.log(res.json);
        console.log("doc uploaded succesfully")
      });
      console.log(response)
    }

  return (
   <>
    <Dialog open={modalopen} onClose={onClose}className="relative z-10">
       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
   
   {/* Modal Panel */}
   <div className="fixed inset-0 z-10 overflow-y-auto">
     <div className="flex  justify-center p-4  sm:p-0">
   <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
   <div className='p-4'>
    <div>
      <label >
        Title:
      </label>
      <input
      id="title"
      type="text"
      placeholder="i.e, Important Leetcode Question"
      className='p-2 w-full' 
      onChange={e=> setTitle(e.target.value)}
      />
       
    </div>
    <div>
      <label>
        Description:
      </label>
      <textarea
      type="text"
      id="description"
      placeholder='Sum of two Number'
      className='p-2 w-full h-64'
      onChange={e=> setDescription(e.target.value)}
       />
    </div>
    <center className='p-2'>
    <button onClick={onClose} className='border-2 rounded p-1'>
    cancel</button>
    <button className='border-2 p-1 rounded ml-2 hover:bg-customColor hover:text-white' onClick={saveDoc}>save</button>
    </center>
   </div>
   
       </div>
       </div>
       </div>
       </Dialog>
   </>
  )
}
