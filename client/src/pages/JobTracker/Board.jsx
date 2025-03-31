import React, { useEffect, useState } from 'react';
import Modal from '../../components/JobModal';
import axios from 'axios';
import JobBox from '../../components/JobBox';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function useJobdetail(n) {
  const [job, setJob] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const data = setInterval(() => {
      axios.get(`${API_BASE_URL}/api/job/getjobdetails`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then(res => {
        setJob(res.data)
      }

      )
    }, n * 1000);

    axios.get(`${API_BASE_URL}/api/job/getjobdetails`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(res => {
      setJob(res.data)
    }


    )

    return () => {
      clearInterval(data)
    }

  }, [])
  return job;
}

function Board() {
  const [isModalopen, setModalopen] = useState(false);
  const jobdetail = useJobdetail(3);
 

  function onpress2() {
    setModalopen(true);
  }
  function handleCloseModal() {
    setModalopen(false);
  }

  function handleDragEnd(result) {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      const newarray = Arrays.from(jobdetail);
      const[dragItem] = newarray.splice(source.index, 1);
      newarray.splice(destination.index, 0, dragItem);
      jobdetail = newarray;
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
                  <center>0JOBS</center>
                </div>

                <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
                <Droppable droppableId="wishlist">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {jobdetail
                        .filter((item) => item.status === "wishlist")
                        .map((item, index) => (
                          <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
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
                  <center> JOBS</center>
                </div>

                <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
                <Droppable droppableId="applied">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {jobdetail
                        .filter((item) => item.status === "applied")
                        .map((item, index) => (
                          <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
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
                  <center> JOBS</center>
                </div>

                <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
                <Droppable droppableId="interview">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {jobdetail
                        .filter((item) => item.status === "interview")
                        .map((item, index) => (
                          <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
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
                  <center> JOBS</center>
                </div>

                <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
                <Droppable droppableId="offer">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {jobdetail
                        .filter((item) => item.status === "offer")
                        .map((item, index) => (
                          <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
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
                  <center> JOBS</center>
                </div>

                <button className='text-t1 border p-2 rounded' onClick={onpress2}><span className="material-symbols-outlined align-bottom">add</span></button>
                <Droppable droppableId="rejected">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {jobdetail
                        .filter((item) => item.status === "rejected")
                        .map((item, index) => (
                          <Draggable key={item._id} draggableId={item._id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
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


        </DragDropContext>
        <Modal isModalopen={isModalopen} onClose={handleCloseModal} />
      </>
    );
  }

  export default Board;
