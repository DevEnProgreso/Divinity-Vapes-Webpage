import React from "react";
import "./Hero.css";
import disposableFront from "../Assets/disposableFront.png";
import smokingEmoji from "../Assets/smokingEmoji.png";
import arrow from "../Assets/arrow.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome to Divinity vapes!</h2>
        <div>
          <div className="hero-hand-icon">
            <p>We</p>
            <img src={smokingEmoji} alt="" />
          </div>
          <p>have what</p>
          <p>you want!</p>
        </div>
        <div className="hero-latest-btn">
          <div>Check Our Stock!</div>
          <img src={arrow} height="40" width="40" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={disposableFront} alt="" />
      </div>
    </div>
  );
};

export default Hero;
