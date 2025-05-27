import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="DescriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This is one of the best vape websites I had ever seen, their service
          is unmatched and their prices are fantastic!!, will totally buy again.
        </p>
        <p>Excellent delivery, will buy again!</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
