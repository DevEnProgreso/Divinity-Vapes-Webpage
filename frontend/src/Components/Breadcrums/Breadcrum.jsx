import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/arrow_icon.png";

export const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} height="15" width="15" alt="" /> SHOP{" "}
      <img src={arrow_icon} height="15" width="15" alt="" /> {product.category}{" "}
      <img src={arrow_icon} height="15" width="15" alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
