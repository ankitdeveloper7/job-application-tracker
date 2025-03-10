import React from 'react';
import congrat from "../../../../public/gif/congratulation.gif";

export default function Welcome() {
  return (
    <>
    <div className='p-4 border-3 border-customColor rounded-lg   grid grid-cols-1 md:grid-cols-2 lg:m-[120px]'>
   
      <div>
      <img src={congrat} className='w-80' />
      <div className='p-3'>
      <p className='text-t1 text-2xl'>Welcome</p>
       <p className='text-color2 text-4xl'>Your Name !</p>
       <p className='text-t1 text-lg'>Stay organized and in control of your job search with Trackify. Effortlessly manage applications, store important documents, and track your progress—all in one place. Upgrade to premium for unlimited access and powerful insights to land your dream job faster.</p>
      
      </div>
      </div>
      <div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Install Chrome Extension</p>
          <p className='text-t1'>Get Huntr's chrome extension to bookmark jobs, view job insights and autofill applications.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Install Chrome Extension</p>
          <p className='text-t1'>Get Huntr's chrome extension to bookmark jobs, view job insights and autofill applications.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Install Chrome Extension</p>
          <p className='text-t1'>Get Huntr's chrome extension to bookmark jobs, view job insights and autofill applications.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Install Chrome Extension</p>
          <p className='text-t1'>Get Huntr's chrome extension to bookmark jobs, view job insights and autofill applications.</p>
        </div>
        <div className='mt-1 p-2 hover:border-2 hover:border-customColor hover:rounded-lg hover:bg-lightbg cursor-pointer'>
          <p className='text-color2 font-semibold'>Install Chrome Extension</p>
          <p className='text-t1'>Get Huntr's chrome extension to bookmark jobs, view job insights and autofill applications.</p>
        </div>
      </div>
    </div>
    </>
  )
}
