import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'
import Reports from './Pages/Reports'
import Inventory from './Pages/Inventory'
import Purchase from './Pages/Purchase'
import Sales from './Pages/Sales'

const App = () => {
  return (
   <div>
      <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/about' element= {<About />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/dashboard' element= {<Dashboard />} />
      <Route path='/inventory' element= {<Inventory />} />
      <Route path='/reports' element= {<Reports />} />
      <Route path='/purchase' element= {<Purchase />} />
      <Route path='/sales' element= {<Sales />} />
    </Routes>
   </div>
  )
}

export default App