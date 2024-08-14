import React from "react";
import './Header.css';

function Header() {
  return (
    <nav>
      <ul className="navbar">
        <li>Home</li>
        <li>About us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Header;
