import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navHeader">
      <nav className="navBar">
        <div className="menuToggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navList ${menuOpen ? "show" : ""}`}>
          <li className="navItem">
            <Link to="/" className="navLink">Inicio</Link>
          </li>
          <li className="navItem">
            <Link to="/register" className="navLink">Registrate</Link>
          </li>
          <li className="navItem">
            <Link to="/login" className="navLink">Login</Link>
          </li>
          <li className="navItem">
            <Link to="/profile" className="navLink">Perfil de usuario</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
