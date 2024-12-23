import React, { useState } from "react";
import { SEGMENTS } from './constants'; // Import constants
import Sidebar from "./Sidebar"; // Import Sidebar component
import Index from "./Tracker-components/Index";
import ResumeBuilder from "./Tracker-components/ResumeBuilder";
import AICoverLetters from "./Tracker-components/AICoverLetters";
import AutofillApplications from "./Tracker-components/AutofillApplications";
import Profile from "./Tracker-components/Profile";
import Contacts from "./Tracker-components/Contacts";
import Documents from "./Tracker-components/Documents";
import MyJobTracker from "./Tracker-components/MyJobTracker";

export default function JobTracker() {
  const [activeSegment, setActiveSegment] = useState(SEGMENTS.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSegment) {
      case SEGMENTS.HOME:
        return <Index />;
      case SEGMENTS.RESUME_BUILDER:
        return <ResumeBuilder />;
      case SEGMENTS.AI_COVER_LETTERS:
        return <AICoverLetters />;
      case SEGMENTS.AUTOFILL_APPLICATIONS:
        return <AutofillApplications />;
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

        {/* Sidebar Component */}
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setActiveSegment={setActiveSegment}
        />

        {/* Main Content Area */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "ml-56" : "ml-0"
          }`} // Adds margin when sidebar is open
        >
          <main>{renderContent()}</main>
        </div>
      </div>
    </section>
  );
}
