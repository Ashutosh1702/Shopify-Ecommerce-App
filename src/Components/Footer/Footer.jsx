import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo.webp"
import insta_logo from "../../assets/images/instagram.png"
import facebook_logo from "../../assets/images/facebook.png"
import whatsapp_logo from "../../assets/images/whatsapp.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt="" height="40px" />
        <p>Shopify</p>
      </div>
      <ul className='footer-links'>
        <li>About</li>
        <li>Product</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icons'>
        <div className="footer-icon-container">
            <img src={insta_logo} alt="" height="30px"/>
        </div>
        <div className="footer-icon-container">
            <img src={facebook_logo} alt=""  height="30px"/>
        </div>
        <div className="footer-icon-container">
            <img src={whatsapp_logo} alt="" height="30px" />
        </div>

      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
