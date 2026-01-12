import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/shared/Navabar.jsx'
import FlightDetails from './Pages/flights/FlightDetails.jsx'
import Hotel from './Pages/hotels/Hotel.jsx'
import Cars from './Pages/cars/Cars.jsx'
import Visa from './Pages/visa/Visa.jsx'
import Blog from './Pages/blog/Blog.jsx'
import Tours from './Pages/tours/Tours.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
         <Route path = '/FlightDetails' element = {< FlightDetails/>}/>
         <Route path = '/Hotel' element = {< Hotel/>}/>
         <Route path = '/Cars' element = {< Cars/>}/>
         <Route path = '/Visa' element = {< Visa/>}/>
         <Route path = '/Blog' element = {< Blog/>}/>
         <Route path = '/Tours' element = {< Tours/>}/>

        </Routes>
    </Router>
      
    </>
  )
}

export default App
