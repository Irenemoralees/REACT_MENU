import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
    return (
        <header className="navHeader">
            <nav className="navBar">
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/" className="navLink">Inicio</Link>
                        </li>
                        <li className="navItem">
                        <Link to="/register" className="navLink">Registrate</Link>
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