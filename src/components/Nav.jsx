import '../css/nav.css'
import { HashLink as Link } from 'react-router-hash-link';
import { useState} from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <Link to='#home' smooth onClick={handleLinkClick}>
                    {/*className={location.hash === "#home" ? "active" : ""}> */}
                        Home
                    </Link>
                </li>
                <li >
                    <Link to='#about' smooth onClick={handleLinkClick}>
                        About</Link>
                </li>
                <li >
                    <Link to='#journey' smooth onClick={handleLinkClick}
                        >
                        Journey</Link>
                </li>
                <li>
                    <Link to="/#projects" onClick={handleLinkClick}
                        >
                        Projects</Link>
                </li>
                <li>
                    <Link to="/#contact" onClick={handleLinkClick}>
                        Contact</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Nav;