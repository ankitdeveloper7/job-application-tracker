'use client';

import { Dialog } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Modal({ isModalopen, onClose }) {

  function saveData(){
    alert("data saved")
  }

  return (
    <Dialog open={isModalopen} onClose={onClose} className="relative z-10">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      {/* Modal Panel */}
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className='border-2 rounded p-2'>   
    <center className='text-color1 font-semibold'>
      Add new job
    </center>
    <hr />
   <form  action="#" method="POST" className="space-y-6">
    <div className='inline-block'>
      <label className='font-semibold text-t1'>
        Job title:
      </label>
      <div>
        <input
        type="text"
        id='jobtitle'
        placeholder='i.e: Software Engineer'
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
 />
      </div>
    </div>
    <div className='sm:ml-4 inline-block'>
      <label className='font-semibold text-t1'>
        Company:
      </label>
      <div className=''>
        <input
        type="text"
        id='company'
        placeholder='i.e: Google'
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Job url:
      </label>
      <div className=''>
        <input
        type="text"
        id='joburl'
        placeholder='i.e: naukari.com/google/software_engineer' 
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Location:
      </label>
      <div className=''>
        <input
        type="text"
        id='location'
        placeholder='i.e:New Delhi' 
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Work Mode:
      </label>
      <div className=''>
       <select className='p-1 border-2 rounded w-full'>
        <option value="">onSite</option>
        <option value="">Hybrid</option>
        <option value="">Remote</option>
       </select>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Status
      </label>
      <div className=''>
        <select className='w-full p-1 border-2 rounded'>
         <option value="">wishlist</option>
         <option value="">applied</option>
         <option value="">interview</option>
         <option value="">offer</option>
         <option value="">rejected</option>

        </select>
        </div>
    </div>
   <hr />
   <center>
    <div className='m-2'>
    <button className="rounded-lg p-2 bg-customColor text-white" onClick={onClose}>
                    Discard
                </button>
    
    <button className="rounded-lg p-2 ml-3 bg-customColor text-white" onClick={saveData}>
                    Add Job
                </button>
    </div>
  
   </center>
   </form>
   </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
