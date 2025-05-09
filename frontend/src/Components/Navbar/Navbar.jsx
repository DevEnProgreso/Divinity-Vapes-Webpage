import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";
import cart_icon from "../Assets/cart_Icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Divinity Vapes</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("disposables");
          }}
        >
          Disposables{menu === "disposables" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("eliquids");
          }}
        >
          E-Liquids{menu === "eliquids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("vapekits");
          }}
        >
          Vape Kits{menu === "vapekits" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" className="cart_icon" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
