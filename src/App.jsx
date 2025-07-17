import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/LandingPage/Home';
import Contact from './Components/LandingPage/Contact';
import Service from './Components/LandingPage/Service';
import About from './Components/LandingPage/About';
import Signup from './Components/LandingPage/Forms/Signup';
import Login from './Components/LandingPage/Forms/Login';
import ResetPassword from './Components/LandingPage/Forms/ResetPassword';
import ScrollToTop from './Components/LandingPage/ScrollToTop';
import Footer from './Components/LandingPage/Footer';
import WriteUs from './Components/LandingPage/WriteUs';
import Dashboard from './Components/UserComponents/Dashboard';

import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import AdminHome from './Components/AdminComponents/Home';


const App = () => {
  return (
    <>
        <ScrollToTop />
        <Routes>
          {/* Public Routes - accessible only if NOT logged in */}
          <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
          <Route path='/services' element={<PublicRoute><Service /></PublicRoute>} />
          <Route path='/about' element={<PublicRoute><About /></PublicRoute>} />
          <Route path='/contact' element={<PublicRoute><Contact /></PublicRoute>} />
          <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path='/signin' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/scheduleCall' element={<PublicRoute><WriteUs /></PublicRoute>} />
          <Route path='/forgotPassword' element={<PublicRoute><ResetPassword /></PublicRoute>} />

          {/* Protected Route - accessible only if logged in */}
          <Route path='/user' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          {/* <Route path='/admin' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
          <Route path='/admin' element={<AdminHome />} />
        </Routes>
        <Footer />
      </>
  );
};

export default App;
