import React from 'react';
import './footer.css';
import footerImage from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer-img"
        src={footerImage}
        alt="BioTree_logo"
      />
      <p className="footer-text">BioTree®™</p>
    </footer>
  );
};

export default Footer;

