import { Dialog } from '@headlessui/react'
import React from 'react'

export default function ContactModal({isModalOpen, onClose}) {

    function saveData(){
        console.log("data saved on contact details")
    }

  return (
    <>
    <Dialog open={isModalOpen} onClose={onClose}className="relative z-10">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

{/* Modal Panel */}
<div className="fixed inset-0 z-10 overflow-y-auto">
  <div className="flex  justify-center p-4  sm:p-0">
<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    <div className='border-2 rounded p-2'>   
    <center className='text-color1 font-semibold'>
      Save New Contacts
    </center>
    <hr />
   <form  action="#" method="POST" className="space-y-6">
    <div className='inline-block'>
      <label className='font-semibold text-t1'>
        Name:
      </label>
      <div>
        <input
        type="text"
        id='name'
        placeholder='i.e:Ankur Kumar'
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"
 />
      </div>
    </div>
    <div className='sm:ml-4 inline-block'>
      <label className='font-semibold text-t1'>
        Job title:
      </label>
      <div className=''>
        <input
        type="text"
        id='jobtitle'
        placeholder='i.e:Software Engineer'
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Companie:
      </label>
      <div className=''>
        <input
        type="text"
        id='companies'
        placeholder='i.e:Microsoft' 
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
        Emails:
      </label>
      <div className=''>
        <input
        type="text"
        id='email'
        placeholder='i.e:example@gmail.com' 
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
    <div>
      <label className='font-semibold text-t1'>
        Phone no:
      </label>
      <div className=''>
        <input
        type="number"
        id='phoneno'
        placeholder='i.e: +913456789837'
        className="border-2 rounded p-1 w-full focus:border-formoutline-700 focus:outline-4 focus:outline-formoutline-700"/>
      </div>
    </div>
   <hr />
   <center>
    <div className='m-2'>
    <button className="rounded-lg p-2 bg-customColor text-white" onClick={onClose}>
                    Discard
                </button>
    
    <button className="rounded-lg p-2 ml-3 bg-customColor text-white" onClick={saveData}>
                    Save Contacts
                </button>
    </div>
  
   </center>
   </form>
   </div>
   </div>
   </div>
   </div>
   
    </Dialog>
    </>
  )
}
