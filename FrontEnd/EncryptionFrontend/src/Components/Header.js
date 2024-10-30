import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from '../logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>

      <div className="header-buttons">
        <Link to="/encrypt">
          <button className="header-button">Encrypt</button>
        </Link>
        <Link to="/decrypt">
          <button className="header-button">Decrypt</button>
        </Link> 
      </div>
    </header>
  );
};

export default Header;
