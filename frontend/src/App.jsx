import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'

const App = () => {
  return (
   <div>
    <Navbar/>
     <div className='w-[95%] mx-auto'>
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/dashboard' element= {<Dashboard />} />
    </Routes>
     </div>
   </div>
  )
}

export default App