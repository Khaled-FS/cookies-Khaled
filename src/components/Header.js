import React from "react";
import cookies from "../assest/media/cookieShop.jpg";
import "../assest/css/day1.css";
const Header = () => {
  return (
    <div className="container">
      <h1>Khaled's cookies</h1>
      <p>where the best cookies in the world</p>
      <img src={cookies} alt="Khaled's cookies" className="img-style" />
    </div>
  );
};

export default Header;
