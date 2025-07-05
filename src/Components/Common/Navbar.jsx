import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg px-4 ${isSticky ? 'sticky-top shadow-sm' : 'fixed-top'
        }`}
      style={{background: isSticky ? '#00b386' : 'red'}}
    >
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="logowbg.png"
          alt="QualityServ Logo"
          width="100%"
          height="60"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link button" to="/register">SignUp/LogIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
