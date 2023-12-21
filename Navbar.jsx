import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  const [isBuyDropdownOpen, setBuyDropdownOpen] = useState(false);

  const toggleBuyDropdown = () => {
    setBuyDropdownOpen(!isBuyDropdownOpen);
  };

  return (
    <div className="navdiv">
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="app">Home</Link></li>
          <li className="dropdown" onClick={toggleBuyDropdown}>
            <Link to="#" className="app">Buy</Link>
            {isBuyDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/buy">Buy House</Link>
                <Link to="/rent">Rent House</Link>
              </div>
            )}
          </li>
          <li><Link to="/footer" className="app">Contact</Link></li>
          <li><Link to="/login" className="app">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
