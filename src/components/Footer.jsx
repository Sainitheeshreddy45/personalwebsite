import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bottom container-fluid 
        } custom-footer py-4 px-4 px-md-5`}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Social Links */}
        <div className="d-flex gap-4 mb-3 mb-md-0">
          <a href="https://www.facebook.com/DureddySainitheeshreddy" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><FaFacebook/></a>
          <a href="https://www.instagram.com/sainitheesh45" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sainitheesh-reddy-57b11b1a3/?skipRedirect=true" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.github.com/sainitheeshreddy45" className="footer-link text-decoration-none" target='_blank' rel="noreferrer"><FaGithub /></a>
        </div>

        {/* Copyright Information */}
        <div className="copyright-text">
          © {currentYear} Sainitheesh Reddy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;