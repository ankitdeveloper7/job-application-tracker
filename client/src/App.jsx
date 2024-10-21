import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Signin from './components/Signin';

function App() {
 

  return (
    <>
    {/* <Home /> */}

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
