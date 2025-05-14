import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";
import cart_icon from "../Assets/cart_Icon.png";
import { Link } from "react-router-dom";

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
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("disposables");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/disposables">
            Disposables
          </Link>
          {menu === "disposables" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("eliquids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/eliquids">
            E-Liquids
          </Link>
          {menu === "eliquids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("vapekits");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/vapekits">
            Vape Kits
          </Link>
          {menu === "vapekits" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" className="cart_icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
