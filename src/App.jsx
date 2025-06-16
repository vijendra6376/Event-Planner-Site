<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <>
    <AboutUs></AboutUs>
    </>
  )
}

export default App
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/About Us';
import Services from './components/Services';
import Contact from './components/Contact Us';
// import Gallery from './components/Gallery';
const App = () => (
  <>
    <Navbar />
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </>
);

export default App;
>>>>>>> origin/Gungun
