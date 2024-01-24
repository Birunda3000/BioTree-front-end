import './navbar.css';
import Link from 'next/link';

function NavBar() {
  return (
    <nav className="navbar">

      <Link href="/" className="navbar-brand">
        BioTree
      </Link>

      <ul className="nav-links">
        <li className="nav-item">
          <Link href="user_panel" className="nav-link">
            Welcome Birunda
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/registry" className="nav-link">
            Registry
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/tree" className="nav-link">
            Tree
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">
            Sair
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;




