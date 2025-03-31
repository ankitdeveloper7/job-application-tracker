import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Modal from "../../components/JobModal";
import axios from "axios";
import JobBox from "../../components/JobBox";

function useJobDetail(n) {
  const [job, setJob] = useState([]);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchJobs = () => {
      axios
        .get(`${API_BASE_URL}/api/job/getjobdetails`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => setJob(res.data));
    };

    const interval = setInterval(fetchJobs, n * 1000);
    fetchJobs();

    return () => clearInterval(interval);
  }, []);

  return job;
}

function Board() {
  const [isModalOpen, setModalOpen] = useState(false);
  const jobDetails = useJobDetail(3);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const groupedJobs = jobDetails.reduce((acc, job) => {
      if (!acc[job.status]) acc[job.status] = [];
      acc[job.status].push(job);
      return acc;
    }, {});

    setColumns(groupedJobs);
  }, [jobDetails]);

  function onDragEnd(result) {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = [...columns[source.droppableId]];
    const destColumn = [...columns[destination.droppableId]];
    const [draggedItem] = sourceColumn.splice(source.index, 1);

    destColumn.splice(destination.index, 0, draggedItem);

    setColumns({
      ...columns,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  }

  function onPressAdd() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  const sections = ["wishlist", "applied", "interview", "offer", "rejected"];

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <section id="boards" className="overflow-x-hidden">
          <div className="flex flex-row">
            {sections.map((section) => (
              <div
                key={section}
                className="min-h-screen box-border border-r-2 inline-block align-top flex flex-col w-[260px] h-full pt-[30px] pr-[10px] pb-0 pl-[10px]"
              >
                <div className="align-bottom pb-[30px] inline">
                  <span className="material-symbols-outlined">star</span>
                  <span className="ml-4 text-t1 font-[600]">{section.toUpperCase()}</span>
                  <center>{(columns[section] || []).length} JOBS</center>
                </div>

                <button className="text-t1 border p-2 rounded" onClick={onPressAdd}>
                  <span className="material-symbols-outlined align-bottom">add</span>
                </button>

                <Droppable droppableId={section}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {(columns[section] || []).map((job, index) => (
                        <Draggable key={job.id} draggableId={job.id.toString()} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <JobBox title={job.title} company={job.company} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </section>
      </DragDropContext>
      <Modal isModalOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Board;
