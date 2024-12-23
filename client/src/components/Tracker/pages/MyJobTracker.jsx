import React, { useState, useMemo } from "react";

import Contacts from "./Contacts";
import Documents from "./Documents";
import Modal from "./Modal";
import Activities from "./jobsearch/Activities";
import Board from "./jobsearch/Board";


export default function MyJobTracker() {
  const [activeSegment, setActiveSegment] = useState("home");
  const[isModalopen, setModalopen] = useState(false);
  

  const renderContent = () => {
    switch (activeSegment) {
      case "boards":
        return <Board />
      case "activities":
        return <Activities />
      case "contacts":
        return <Contacts />;
      case "documents":
        return <Documents />;
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
        <ul className="inline-block">
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

        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("contacts")}>
          <span className="material-symbols-outlined align-bottom">contacts</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Contacts</span>
        </li>
        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("documents")}>
          <span className="material-symbols-outlined align-bottom">folder</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Documents</span>
        </li>
        <li className="m-3 text-t1 inline-block" onClick={() => setActiveSegment("aicoverletters")}>
          <span className="material-symbols-outlined align-bottom">hotel_class</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Metricsics</span>
        </li>
        </ul>
        <ul className="inline-block ml-[22rem] sm:ml-[10rem] xs:ml-[5rem]">
          <li className="m-1 text-t1 inline-block" onClick={() => setActiveSegment("aicoverletters")}>
            <button className="rounded-lg border-black-200 p-1 mt-2 bg-white text-[rgb(24, 0, 69)]">
              <span className="material-symbols-outlined align-bottom">share</span>
              share
            </button>
          </li>
          <li className="m-1 text-t1 inline-block" onClick={() => setActiveSegment("aicoverletters")}>
            <button className="rounded-lg p-1 mt-2 bg-customColor text-white" onClick={onpress2}>
              <span className="material-symbols-outlined align-bottom">add</span>
              Create
            </button>
          </li>
        </ul>
      </nav>


       
      <Modal isModalopen={isModalopen} onClose={handleCloseModal} />


      <div className="flex absolute top-0 bottom-0 mt-14">
        {renderContent()}
      </div>
    </div>
    </>
  );
}
