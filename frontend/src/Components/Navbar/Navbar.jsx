import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/Logo.png";
import cart_icon from "../Assets/cart_Icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/menuIcon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visable");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Divinity Vapes</p>
      </div>
      <img
        onClick={dropdown_toggle}
        src={nav_dropdown}
        height="35"
        width="35"
        alt=""
        className="nav-dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} className="l" to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("disposables");
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            className="l"
            to="/disposables"
          >
            Disposables
          </Link>
          {menu === "disposables" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("eliquids");
          }}
        >
          <Link style={{ textDecoration: "none" }} className="l" to="/eliquids">
            E-Liquids
          </Link>
          {menu === "eliquids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("vapekits");
          }}
        >
          <Link style={{ textDecoration: "none" }} className="l" to="/vapekits">
            Vape Kits
          </Link>
          {menu === "vapekits" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="l">Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" className="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
