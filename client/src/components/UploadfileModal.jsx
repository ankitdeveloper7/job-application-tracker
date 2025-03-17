import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function UploadfileModal({fileuploadmodal, onClose}) {
  const[doc, getDoc] = useState(null);
 
  function getFile(event){
    getDoc(event.target.files[0]);
  }

  function uploadfile(){
    alert("file has been submitted")
    onClose();

  }

  return (
   
    <>
        <Dialog open={fileuploadmodal} onClose={onClose}className="relative z-10">
           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
       
       {/* Modal Panel */}
       <div className="fixed inset-0 z-10 overflow-y-auto">
         <div className="flex  justify-center p-4  sm:p-0">
       <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        
        <div className='p-2'>
        <form action="/stats" enctype="multipart/form-data" method="post">
  <div class="form-group">
    <input type="file" class="form-control-file" name="uploaded_file" onChange={getFile} />
  
  </div>
</form>
        </div>
        <center className='p-2'>
        <button onClick={onClose} className='border-2 rounded p-1'>
        cancel</button>
        <button className='border-2 p-1 rounded ml-2 hover:bg-customColor hover:text-white' onClick={uploadfile}>Upload</button>
        </center>
       

        {/* <div>
          <p>this is file {doc.name}</p>
        </div> */}
           </div>
           </div>
           </div>
           </Dialog>
    </>
)
}
