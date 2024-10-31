import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import encryptionLogo from '../encryptionLogo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to='/about'>
          <img src={encryptionLogo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="header-buttons">
        <Link to="/about">
          <button className="header-button">About</button>
        </Link>
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