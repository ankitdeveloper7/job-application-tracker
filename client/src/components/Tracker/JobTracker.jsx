import React, { useState } from "react";
import { SEGMENTS } from './constants'; 
import Sidebar from "./Sidebar"; 
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import MyJobTracker from "./pages/MyJobTracker";
import TaskScheduler from "./pages/TaskScheduler";
import Skilltracker from "./pages/Skilltracker";

export default function JobTracker() {
  const [activeSegment, setActiveSegment] = useState(SEGMENTS.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSegment) {
      case SEGMENTS.HOME:
        return <Index />;
      case SEGMENTS.SKILL_TRACKER:
        return <Skilltracker />;
      case SEGMENTS.TASK_SCHEDULER:
        return <TaskScheduler />;
      case SEGMENTS.PROFILE:
        return <Profile />;
      case SEGMENTS.CONTACTS:
        return <Contacts />;
      case SEGMENTS.DOCUMENTS:
        return <Documents />;
      case SEGMENTS.MY_JOB_TRACKER:
        return <MyJobTracker />;
      default:
        return <Index />;
    }
  };

  return (
    <section>
      <div className="flex min-h-screen">
        {/* Toggle Button for Small Screens */}
        <button
          className="p-3 fixed top-4 left-4 z-20 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setActiveSegment={setActiveSegment}
        />

        
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "ml-56" : "ml-0"
          }`} 
        >
          <main>{renderContent()}</main>
        </div>
      </div>
    </section>
  );
}
