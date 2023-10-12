import '../css/nav.css'
// import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            < div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <div className='logo'>
                    <a href="/">GHELO</a>
                </div>
                <li className='f-link'>
                    <Link to='#home' smooth onClick={handleLinkClick}
                    className={location.hash === "#home" ? "active" : ""}>
                        Home
                    </Link>
                </li>
                <li >
                    <Link to='#about' smooth onClick={handleLinkClick}
                     className={location.hash === "#about" ? "active" : ""}>
                        About</Link>
                </li>
                <li >
                    <Link to='#journey' smooth onClick={handleLinkClick}
                     className={location.hash === "#journey" ? "active" : ""}>
                        Journey</Link>
                </li>
                <li>
                    <Link to="/#projects" onClick={handleLinkClick}
                     className={location.hash === "#projects" ? "active" : ""}>
                        Projects</Link>
                </li>
                <li>
                    <Link to="/#contact" onClick={handleLinkClick}
                     className={location.hash === "#contact" ? "active" : ""}>
                        Contact</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Nav;