import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import Service from './Components/LandingPage/Service';
import About from './Components/LandingPage/About';
import Signup from './Components/LandingPage/Forms/Signup';
import Login from './Components/LandingPage/Forms/Login';
import ResetPassword from './Components/LandingPage/Forms/ResetPassword';
import ScrollToTop from './Components/LandingPage/ScrollToTop';
import Footer from './Components/LandingPage/Footer';
import WriteUs from './Components/LandingPage/WriteUs';

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/scheduleCall' element={<WriteUs />} />
        <Route path='/forgotPassword' element={<ResetPassword />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App