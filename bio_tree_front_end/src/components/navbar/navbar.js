import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">

      <a href="#" className="navbar-brand">
        BioTree
      </a>

      <ul className="nav-links">
        <li className="nav-item">
          <a href="#" className="nav-link">DBAccess</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Tree</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Sair</a>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;




