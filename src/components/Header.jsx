import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <a href="/" className="link">
          Home
        </a>
        <a href="/" className="link">
          About
        </a>
        <a href="/" className="link">
          Contact
        </a>
      </div>
      <p className="username">Marit</p>
    </div>
  );
};

export default Header;
