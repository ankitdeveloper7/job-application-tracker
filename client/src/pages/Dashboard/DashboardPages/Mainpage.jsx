import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ActiveAtom } from '../../store/atom';
import Welcome from './Welcome';
import Contact from './Contact';
import Document from './Document';
import Profile from './Profile';
import Skilltracker from './Skilltracker';
import Taskscheduler from './Taskscheduler';
import MyJobTracker from '../../JobTracker/MyJobTracker';

export default function Mainpage() {
  const mainpage = useRecoilValue(ActiveAtom);
  const [currentComponent, setCurrentComponent] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      switch(mainpage) {
        case "welcome":
          setCurrentComponent(<Welcome />);
          break;
        case "skilltracker":
          setCurrentComponent(<Skilltracker />);
          break;
        case "taskscheduler":
          setCurrentComponent(<Taskscheduler />);
          break;
        case "profile":
          setCurrentComponent(<Profile />);
          break;
        case "contact":
          setCurrentComponent(<Contact />);
          break;
        case "document":
          setCurrentComponent(<Document />);
          break;
        case "jobtracker":
          setCurrentComponent(<MyJobTracker />);
          break;
        default:
          setCurrentComponent(<Welcome />);
      }
    }, 50); 
    
    
    return () => clearTimeout(timer);
  }, [mainpage]);
  
  return (
    <>
      <div className=''>
        {currentComponent}
      </div>
    </>
  );
}
