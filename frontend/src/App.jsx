import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<div>About Page</div>} />
        <Route path='/contact' element={<div>Contact Page</div>} />
      </Routes>


    </div>
  )
}

export default App