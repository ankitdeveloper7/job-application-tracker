import React, { useEffect, useState } from 'react';
import Modal from '../../components/JobModal';
import axios from 'axios';
import { API_URL } from '../../API_URL';
import JobBox from '../../components/JobBox';

function useJobdetail(n){
  const[job, setJob]= useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(()=>{
     const data = setInterval(()=>{
      axios.get(`${API_BASE_URL}/api/job/getjobdetails`,{ headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }}).then(res=>{
        setJob(res.data)
      }
        
      )
     }, n*1000);
     
     axios.get(`${API_BASE_URL}/api/job/getjobdetails`,{ headers:{
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }}).then(res=>{
      setJob(res.data)
    }
     
     
    )

    return()=>{
      clearInterval(data)
    }

  },[])
  return job;
}

function Board() {
  const[isModalopen, setModalopen] = useState(false);
  const jobdetail = useJobdetail(3);
  const jobwishlist = jobdetail.filter( e => e.status==="wishlist");
  const jobapplied = jobdetail.filter( e => e.status==="applied");
  const jobinteview = jobdetail.filter( e => e.status==="interview");
  const joboffer = jobdetail.filter( e => e.status==="offer");
  const jobrejected = jobdetail.filter( e => e.status==="rejected");


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
          <div className="min-h-screen box-border  border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                star
              </span>
               <span className='ml-[40px] text-t1 font-[600]'> WISHLIST</span>
                <center>{jobwishlist.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
           {jobwishlist.map((item)=>(
            <JobBox title={item.title} company={item.company} />
           ))}
            

          </div>

          <div className="min-h-screen box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                draft
              </span>
               <span className='ml-11 text-t1 font-[600]'>APPLIED</span>
                <center>{jobapplied.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
            {jobapplied.map((item)=>(
            <JobBox title={item.title} company={item.company} />
           ))}
          </div>
          <div className="min-h-screen box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                business_center
              </span>
               <span className='ml-11 text-t1 font-[600]'>INTERVIEW</span>
                <center>{jobinteview.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
            {jobinteview.map((item)=>(
            <JobBox title={item.title} company={item.company} />
           ))}
          </div>
          <div className="min-h-screen box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                emoji_events
              </span>
               <span className='ml-11 text-t1 font-[600]'>OFFER</span>
                <center>{joboffer.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
            {joboffer.map((item)=>(
            <JobBox title={item.title} company={item.company} />
           ))}
          </div>
          <div className="min-h-screen box-border  inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                thumb_down
              </span>
               <span className='ml-11 text-t1 font-[600]'>REJECTED</span>
                <center>{jobrejected.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
            {jobrejected.map((item)=>(
            <JobBox title={item.title} company={item.company} />
           ))}
          </div>
          {/* <div className="h-full box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span class="material-symbols-outlined">
                service_toolbox
              </span>
               <span className='ml-6 text-t1 font-[600]'>JOB PREPARATION</span>
                <center>{wishlist} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>

          </div> */}
        </div>
      </section>
      <Modal isModalopen={isModalopen} onClose={handleCloseModal} />
    </>
  );
}

export default Board;
