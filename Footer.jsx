import React from 'react';
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-section">
        <br></br>
      <div className="container">
        <div className="cta-text">
          <h4>Find us</h4>
          <span>Sri Krishna College of Technology,<br></br>Kovaipudur,<br></br> Coimbatore<br></br> 641042</span>
          <br></br>
          <br></br>
        <div className="col-xl-4 col-md-4 mb-30">
         <h4>Call us</h4>
        <span>6374474731</span>
        <br></br>
        <br></br>
         <h4>EMail us</h4>
        <span>mugeshselvakumer0412@gmail.com</span> 
        <br></br>
        <br></br>
         <h4>Follow us</h4>
         <a href="#" className='abc'><FaFacebook /></a>
         <a href="#" className='abc'><FaTwitter /></a>
         <a href="#" className='abc'><FaInstagram /></a>
          </div>
        </div>
        </div>
        <br></br>
        <br></br>
    </footer>
  );
}

export default Footer;