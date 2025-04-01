import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='main'>
           <h1>Study.in</h1>
      </div>
          <div className='footer-left-box'>
              <h3>Company</h3>
              <i class="fa-solid fa-phone"></i>
              <i class="fa-brands fa-instagram"></i>
              <ul>
                <li><Link to="/about">About us</Link></li>
                <li><Link to ='/contact'>Contact Us</Link></li>
              </ul><br/>
                <h3>Connect With Us</h3>
                <ul>
                <li><a href="mailto:info@example.com">Email us</a></li>
                <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">Talk to A Counselor</a></li>
              </ul>
          </div><br/>
        
        <h5>Study.inCorporation © 2025</h5>
    </div>
  )
}

export default Footer
