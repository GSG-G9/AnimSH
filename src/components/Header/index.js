import React from 'react';
import './Header.css';

const Header = () => (
  <nav>
    <ul>
      <li className="logo">
        <img src="./resources/logo.png" alt="" />
        <h1>AnimSH</h1>
      </li>
      <li className="search-icon">
        <input
          id="first-name"
          type="search"
          name="icon"
          placeholder="Enter anime name ..."
        />
        <div name="icon" className="icon">
          <span className="fas fa-search" />
        </div>
      </li>
    </ul>
  </nav>
);

export default Header;
