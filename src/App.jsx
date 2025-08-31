import React from 'react'
import Home from './pages/Home'
import Nav from './Components/Nav'
import {ToastContainer} from "react-toastify"
import Footer from './Components/Footer'

function App() {
  return (
    <div className='bg-slate-200 w-full h-[100%]'>
      <Home />
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default App