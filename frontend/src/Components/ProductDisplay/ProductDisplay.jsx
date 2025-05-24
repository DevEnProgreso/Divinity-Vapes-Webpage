import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} height="25" width="25" alt="" />
          <img src={star_icon} height="25" width="25" alt="" />
          <img src={star_icon} height="25" width="25" alt="" />
          <img src={star_icon} height="25" width="25" alt="" />
          <img src={star_dull_icon} height="25" width="25" alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-description">
            A fresh and delicious taste, that will calm your senses and active
            your happiness within yourself.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Hits</h1>
            <div className="productdisplay-right-size">
              <div>5k</div>
              <div>10k</div>
              <div>15k</div>
              <div>20k</div>
              <div>25k</div>
            </div>
          </div>
          <button>ADD TO CART</button>
          <p className="productdisplay-right-category">
            <span>Category :</span> Disposable
          </p>
          <p className="productdisplay-right-category">
            <span>Tags :</span> Fresh, Delicious, Flavorfull
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
