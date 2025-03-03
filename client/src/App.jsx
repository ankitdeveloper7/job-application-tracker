import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/LandingPage/Home'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'
import JobTracker from './pages/Dashboard/JobTracker'

function App() {
 

  return (
    <>
    {/* <Home /> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tracker" element={<JobTracker />} />
        {/* <Route path="/home" element={<Index />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/job" element={<JobTracker />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} /> */}
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
