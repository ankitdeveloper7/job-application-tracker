import React from 'react';
import { Dialog } from '@headlessui/react';

export default function DocumentModal({modelopen,onClose}) {
  return (
   <>
    <Dialog open={modelopen} onClose={onClose}className="relative z-10">
       <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
   
   {/* Modal Panel */}
   <div className="fixed inset-0 z-10 overflow-y-auto">
     <div className="flex  justify-center p-4  sm:p-0">
   <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    <p>this is document write folder</p>
   <button onClick={onClose}>
    cancel</button>
    <button>save</button>
       </div>
       </div>
       </div>
       </Dialog>
   </>
  )
}
