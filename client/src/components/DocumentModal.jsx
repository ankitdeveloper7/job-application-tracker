import React from 'react';
import { Dialog } from '@headlessui/react';

export default function DocumentModal({modalopen,onClose}) {
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
      <input
      type="text"
      id="description"
      className='p-2 w-full h-64'
       />
    </div>
    <button onClick={onClose} className='bg-cus'>
    cancel</button>
    <button>save</button>
   </div>
   
       </div>
       </div>
       </div>
       </Dialog>
   </>
  )
}
