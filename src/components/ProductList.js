import React from "react";
import menu from "../assest/data";
import ProductItem from "./ProductItem";
import "../assest/css/day1.css";

const ProductList = () => {
  const products = menu.map((item) => {
    return (
      <ProductItem
        itemImage={item.image}
        itemAlt={item.name}
        itemPrice={item.price}
        itemName={item.name}
      />
    );
  });

  return (
    <div>
      <div className="menu-container">{products}</div>
    </div>
  );
};

export default ProductList;
