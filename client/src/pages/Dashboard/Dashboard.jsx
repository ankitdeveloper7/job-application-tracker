import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Mainpage from './DashboardPages/Mainpage';

export default function Dashboard() {
  return (
    <>
    <div className='grid  grid-cols-[220px_1fr] bg-[#fdfdff]'>
        <Sidebar />
        <Mainpage />
        </div>
    </>
    
  )
}
