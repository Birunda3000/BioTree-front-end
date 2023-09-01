import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <div className="logo">
          BioTree
        </div>
      </a>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#" className="nav-link">DataBaseAccess</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Tree</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;




