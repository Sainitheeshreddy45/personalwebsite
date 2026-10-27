import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLink, FaLinkedin } from 'react-icons/fa';
import data from "../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialIcons = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <footer className={`bottom container-fluid 
        } custom-footer py-4 px-4 px-md-5`}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        {/* Social Links */}
        <div className="d-flex gap-4 mb-3 mb-md-0">
          {data.footer.socialLinks.map(({ name, url }) => (
            <a href={url} className="footer-link text-decoration-none" target="_blank" rel="noreferrer" key={name}>
              {socialIcons[name] || <FaLink />}
            </a>
          ))}
        </div>

        {/* Copyright Information */}
        <div className="copyright-text">
          © {currentYear} {data.footer.copyrightName}. {data.footer.copyrightNotice}
        </div>

      </div>
    </footer>
  );
};

export default Footer;