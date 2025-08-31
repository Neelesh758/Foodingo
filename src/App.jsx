import React from 'react'
import Home from './pages/Home'
import Nav from './Components/Nav'
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className='bg-slate-200 w-full h-[100%]'>
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App