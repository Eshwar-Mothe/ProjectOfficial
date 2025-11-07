import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Home from './Components/LandingPage/Home';
import Contact from './Components/LandingPage/Contact';
import Service from './Components/LandingPage/ServiceComponent';
import About from './Components/LandingPage/About';
import Signup from './Components/LandingPage/Forms/Signup';
import Login from './Components/LandingPage/Forms/Login';
import ResetPassword from './Components/LandingPage/Forms/ResetPassword';
import ScrollToTop from './Components/LandingPage/ScrollToTop';
import Footer from './Components/LandingPage/Footer';
import WriteUs from './Components/LandingPage/WriteUs';
import Dashboard from './Components/UserComponents/Dashboard';
import AdminHome from './Components/AdminComponents/AdminHome';

import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Common/Loader';
import RefundStatus from './Components/LandingPage/RefundStatus';
import ReferPolicy from './Components/LandingPage/ReferPolicy';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Handle route changes
  useEffect(() => {
    setLoading(true);

    // Simulate loading delay or fetch for better UX
    const timer = setTimeout(() => setLoading(false), 600); // adjust timeout as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicRoute><Home /></PublicRoute>} />
        <Route path="/services" element={<PublicRoute><Service /></PublicRoute>} />
        <Route path="/refundStatus" element={<PublicRoute><RefundStatus /></PublicRoute>} />
        <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
        <Route path="/referral" element={<PublicRoute><ReferPolicy /></PublicRoute>} />
        <Route path="/contact" element={<PublicRoute><Contact /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/signin" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/scheduleCall" element={<PublicRoute><WriteUs /></PublicRoute>} />
        <Route path="/forgotPassword" element={<PublicRoute><ResetPassword /></PublicRoute>} />

        {/* Protected Routes */}
        <Route path="/user" element={<ProtectedRoute ><Dashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
