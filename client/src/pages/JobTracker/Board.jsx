import React, { useState } from 'react';
import Modal from '../../components/Modal';

function Board() {
  const[wishlist, setWishlist] = useState(0);
  const[isModalopen, setModalopen] = useState(false);


  function onpress2(){
    setModalopen(true);
  }
  function handleCloseModal(){
    setModalopen(false);
  }

  return (
    <>
      <section id="boards" className=" overflow-x-hidden">
        <div className="flex flex-row">
          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                star
              </span>
              {/* <center className=''> */}
               <span className='ml-[40px] text-t1 font-[600]'> WISHLIST</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>

          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                draft
              </span>
              {/* <center className=''> */}
               <span className='ml-11 text-t1 font-[600]'>APPLIED</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>
          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                business_center
              </span>
              {/* <center className=''> */}
               <span className='ml-11 text-t1 font-[600]'>INTERVIEW</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>
          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                emoji_events
              </span>
              {/* <center className=''> */}
               <span className='ml-11 text-t1 font-[600]'>OFFER</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>
          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                thumb_down
              </span>
              {/* <center className=''> */}
               <span className='ml-11 text-t1 font-[600]'>REJECTED</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>
          <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                service_toolbox
              </span>
              {/* <center className=''> */}
               <span className='ml-6 text-t1 font-[600]'>JOB PREPARATION</span>
                {/* </center> */}
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div>
        </div>
      </section>
      <Modal isModalopen={isModalopen} onClose={handleCloseModal} />
    </>
  );
}

export default Board;
