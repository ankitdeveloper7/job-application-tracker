import React from 'react';
import { Dialog } from '@headlessui/react';

export default function DocumentModal({modalopen,onClose}) {
  const titleval = "this is okay to be a title";
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
      className='p-2 w-full' />
       
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
       />
    </div>
    <center className='p-2'>
    <button onClick={onClose} className='border-2 rounded p-1'>
    cancel</button>
    <button className='border-2 p-1 rounded ml-2 hover:bg-customColor hover:text-white'>save</button>
    </center>
   </div>
   
       </div>
       </div>
       </div>
       </Dialog>
   </>
  )
}
