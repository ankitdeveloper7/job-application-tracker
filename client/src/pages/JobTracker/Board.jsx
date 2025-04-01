import React, { useEffect, useState } from 'react';
import Modal from '../../components/JobModal';
import axios from 'axios';
import JobBox from '../../components/JobBox';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function useJobdetail(n){
  const[job, setJob]= useState([]);

  
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
  const [isModalopen, setModalopen] = useState(false);
  const JobData = useJobdetail(3);
  const [jobdetail, setJobdetails] = useState([]);
  
  useEffect(() => {
    setJobdetails(JobData);
  }, [JobData]);
  
  console.log("this is job details", jobdetail);
  
  
  const jobwishlist = jobdetail.filter((item) => item.status === "wishlist");
  const jobapplied = jobdetail.filter((item) => item.status === "applied");
  const jobinterview = jobdetail.filter((item) => item.status === "interview");
  const joboffer = jobdetail.filter((item) => item.status === "offer");
  const jobrejected = jobdetail.filter((item) => item.status === "rejected");
  
  function onpress2() {
    setModalopen(true);
  }
  function handleCloseModal() {
    setModalopen(false);
  }
  
  async function handleDragEnd(result) {
    const { source, destination } = result;
    
    if (!destination) return;  
    if (source.droppableId === destination.droppableId) return; 
  
    const draggedItem = jobdetail.find(
      (job) => job.id.toString() === result.draggableId
    );
  
    if (!draggedItem) return;
  
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/job/updatestatus`,
        {
          id: draggedItem.id, 
          newstatus: destination.droppableId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
  
      if (response.status === 200) {
        const updatedJobDetail = jobdetail.map((job) =>
          job.id === draggedItem.id ? { ...job, status: destination.droppableId } : job
        );
  
        setJobdetails(updatedJobDetail); 
        console.log("Job status updated successfully:", response.data);
      } else {
        console.error("Failed to update job status:", response.data);
      }
    } catch (error) {
      console.error("Error updating job status:", error);
    }
  }
  
  return (
    <>
    <DragDropContext onDragEnd={handleDragEnd}>
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
            <Droppable droppableId="whishlist">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {jobwishlist.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <JobBox title={item.title} company={item.company} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

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
            <Droppable droppableId="applied">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {jobapplied.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <JobBox title={item.title} company={item.company} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
          </div>
          <div className="min-h-screen box-border border-r-2 inline-block align-top  flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]">
            <div className=' align-bottom pb-[30px] inline'>
              <span className="material-symbols-outlined">
                business_center
              </span>
               <span className='ml-11 text-t1 font-[600]'>INTERVIEW</span>
                <center>{jobinterview.length} JOBS</center>
            </div>

            <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
            <Droppable droppableId="interview">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {jobinterview.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <JobBox title={item.title} company={item.company} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
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
            <Droppable droppableId="offer">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {joboffer.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <JobBox title={item.title} company={item.company} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
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
            <Droppable droppableId="rejected">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {jobrejected.map((item, index) => (
                      <Draggable key={item._id} draggableId={item._id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <JobBox title={item.title} company={item.company} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
          </div>
        </div>
      </section>
      
      
    </DragDropContext>
      <Modal isModalopen={isModalopen} onClose={handleCloseModal} />
    </>
  );
}

export default Board;
