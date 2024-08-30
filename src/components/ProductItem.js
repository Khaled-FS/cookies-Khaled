import React from "react";
import "../assest/css/day1.css";
const ProductItem = ({ itemImage, itemAlt, itemPrice, itemName }) => {
  return (
    <div className="menu-section">
      <img src={itemImage} alt={itemAlt} />
      <h2>{itemName}</h2>
      <p>{itemPrice}</p>
    </div>
  );
};

export default ProductItem;
