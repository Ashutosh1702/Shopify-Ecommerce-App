import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/images/hand_icon.png";
import arrow_icon from "../../assets/images/arrow_icon.png";
import mens from "../../assets/images/p8.webp"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals !  Best Prices </h2>

        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="" height="60px" />
        </div>
        <p>Collection for everyone</p>
        <div className="hero-latest-btn">
        <div>Latest Collections </div>
        <img src={arrow_icon} alt="" height="30px" />
      </div>
      </div>
      
      <div className="hero-right">
      <img src={mens} alt="" height="400px" />
      </div>
    </div>
  );
};

export default Hero;
