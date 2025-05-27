import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/images/images.png"
import cart_icon from "../assets/images/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from './Context/ShopContext'

function Navbar() {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="60px" />
        <p>Shopify</p>
      </div>
      
      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li onClick={() => { setMenu("home"); setMobileMenuOpen(false); }}>
          <Link style={{color: menu === "home" ? "#FF4141" : "#626262"}} to="/">Home</Link>
          {menu === "home" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("mens"); setMobileMenuOpen(false); }}>
          <Link style={{color: menu === "mens" ? "#FF4141" : "#626262"}} to="/mens">Mens</Link>
          {menu === "mens" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("womens"); setMobileMenuOpen(false); }}>
          <Link style={{color: menu === "womens" ? "#FF4141" : "#626262"}} to="/womens">Womens</Link>
          {menu === "womens" ? <hr/> : <></>}
        </li>
        <li onClick={() => { setMenu("kids"); setMobileMenuOpen(false); }}>
          <Link style={{color: menu === "kids" ? "#FF4141" : "#626262"}} to="/kids">Kids</Link>
          {menu === "kids" ? <hr/> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" height="40px"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

