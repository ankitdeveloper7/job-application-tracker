import React from 'react';
import { IoEllipsisVerticalOutline } from "react-icons/io5";

export default function Documentbox(props) {
  return (
    <>
    <div className='m-2 w-48 h-64 gap-4 border-2 rounded-lg shadow-xl hover:border-2 hover:border-customColor hover:rounded-lg cursor-pointer'>
      <div className='p-[25px] justify-center h-[13rem]'>
           {props.title}
      </div> 
      <hr />
      <div className='p-2 grid grid-cols-2 relative align-bottom'>
        <div>{props.category}</div>
        <div className='absolute right-2 top-3'><IoEllipsisVerticalOutline  /> </div>
      
      </div>
    </div>
    </>
  )
}
