import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Suscribe and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Suscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
