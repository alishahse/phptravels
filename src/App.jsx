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
import FlightResults from "./Pages/flights/FlightResults.jsx";
import GetApp from './Pages/cars/GetApp.jsx'
import Footer from './components/shared/Footer.jsx'
import About from './Pages/slug/About.jsx'
import Privacy from './Pages/slug/Privacy.jsx'
import File from './Pages/slug/File.jsx'
import Terms from './Pages/slug/Terms.jsx'
import Faq from './Pages/slug/Faq.jsx'
import Booking from './Pages/slug/Booking.jsx'

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
          <Route path="/flights/:from/:to/:type/:class/:date/:adults/:children/:infants" element={<FlightResults />} />
          <Route path='/About' element = {<About />} />
          <Route path='/File' element = {<File />} />
          <Route path='/Privacy' element = {<Privacy />} />
          <Route path='/Terms' element = {<Terms />} />
          <Route path='/Faq' element = {<Faq />} />
          <Route path='/Booking' element = {<Booking />} />
        </Routes>
        <GetApp />
        <Footer/>
    </Router>
      
    </>
  )
}

export default App
