import React, { useState, useMemo } from "react";
import JobModal from "../../components/JobModal";
import Activities from "./Activities";
import Board from "./Board";


export default function MyJobTracker() {
  const [activeSegment, setActiveSegment] = useState("home");
  const[isModalopen, setModalopen] = useState(false);
  

  const renderContent = () => {
    switch (activeSegment) {
      case "boards":
        return <Board />
      case "activities":
        return <Activities />
      default:
        return;
    }
  };

  function onpress2(){
    setModalopen(true);
  }
  function handleCloseModal(){
    setModalopen(false);
  }


  return (
    <>
    <div>
      <nav className="list-none border-b-2 fixed flex w-[100vw]">
        <ul className="inline-block flex justify-between">
        <li className="m-3 text-t1 inline-block">
          <span className="pl-1 align-bottom text-base font-[600]">Job Search 2024</span>
        </li>
        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("boards")}>
          <span className="material-symbols-outlined align-bottom">home</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Board</span>
        </li>
        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("activities")}>
          <span className="material-symbols-outlined align-bottom">description</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Activities</span>
        </li>
        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("aicoverletters")}>
          <span className="material-symbols-outlined align-bottom">hotel_class</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Metricsics</span>
        </li>
          <li className="m-1 text-t1 inline-block order-last">
            <button className="rounded-lg p-1 mt-2 bg-customColor text-white" onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
              Create
            </button>
          </li>
        </ul>
      </nav>


       
      <JobModal isModalopen={isModalopen} onClose={handleCloseModal} />


      <div className="pt-14">
        {renderContent()}
      </div>
    </div>
    </>
  );
}
