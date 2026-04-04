import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.css';

const Navbar = () => {
    const LOGO_URLS = {
        dark: "https://raw.githubusercontent.com/nullsniper45/personalwebsite/main/src/assets/logo2.png",
        light: "https://raw.githubusercontent.com/nullsniper45/personalwebsite/main/src/assets/logo1.png"
    };

    const [theme, setThemeState] = useState(() => {
        const saved = localStorage.getItem('user-theme');
        return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('user-theme', theme);
    }, [theme]);

    const toggleTheme = () => setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary custom-nav sticky-top"
      >
        <div className="container-fluid">
          <img
            className="navbar-brand mx-3"
            src={LOGO_URLS[theme]}
            alt="Logo"
            height="40"
          ></img>
          <Link className="navbar-brand mx-3" to="/home">
            Sainitheesh Reddy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link" aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3 d-flex align-items-center gap-2">
                <span className="nav-link theme-item">Theme</span>
                <button
                  className={`mode-toggle ${theme}`}
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  <span className="track">
                    <span className="icon sun">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="sun-icon size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                      </svg>
                    </span>
                    
                    <span className="icon moon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="moon-icon size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    
                    <span className="knob" />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;