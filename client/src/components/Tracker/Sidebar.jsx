import React from 'react';
import { SEGMENTS } from './constants';

const Sidebar = ({ isMenuOpen, setIsMenuOpen, setActiveSegment }) => {
  const onPressExtension = () => {
    window.open("https://chromewebstore.google.com/category/extensions", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-10 bg-white w-56 h-full border-r-2 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <ul>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.HOME)}
        >
          <span className="material-symbols-outlined align-bottom">home</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Home</span>
        </li>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.RESUME_BUILDER)}
        >
          <span className="material-symbols-outlined align-bottom">description</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Resume Builder</span>
        </li>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.AI_COVER_LETTERS)}
        >
          <span className="material-symbols-outlined align-bottom">hotel_class</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">AI Cover Letters</span>
        </li>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.AUTOFILL_APPLICATIONS)}
        >
          <span className="material-symbols-outlined align-bottom">apps</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Autofill Applications</span>
        </li>
        <li className="m-3 text-t1" onClick={onPressExtension}>
          <span className="material-symbols-outlined align-bottom">extension</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Chrome Extension</span>
        </li>
        <hr />
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.PROFILE)}
        >
          <span className="material-symbols-outlined align-bottom">person</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Profile</span>
        </li>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.CONTACTS)}
        >
          <span className="material-symbols-outlined align-bottom">contacts</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Contacts</span>
        </li>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.DOCUMENTS)}
        >
          <span className="material-symbols-outlined align-bottom">folder</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Documents</span>
        </li>
        <hr />
        <div className="flex justify-between m-3 text-t2 text-xs">
          My Job Trackers?
          <button aria-label="Add a new job tracker">
            <span className="material-symbols-outlined align-bottom">add</span>
          </button>
        </div>
        <li
          className="m-3 text-t1"
          onClick={() => setActiveSegment(SEGMENTS.MY_JOB_TRACKER)}
        >
          <span className="material-symbols-outlined align-bottom">folder</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Job Search 2024</span>
        </li>
        <li
          className="m-1 text-t1 border p-2 rounded fixed bottom-0"
          onClick={() => setActiveSegment(SEGMENTS.DOCUMENTS)}
        >
          <span className="material-symbols-outlined align-bottom">account_circle</span>
          <span className="pl-1 align-bottom text-base font-[600] cursor-pointer">Ankit</span>
          <button className="absolute right-0" aria-label="Settings">
            <span className="material-symbols-outlined align-bottom">settings</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
