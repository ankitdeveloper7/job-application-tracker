import React from 'react'

export default function JobBox(props) {
  return (
   <>
   <div className='border-2 rounded'>
     <p className='font-semibold'>{props.title} </p>
     <p>{props.company} </p>
   </div>
   </>
  )
}
