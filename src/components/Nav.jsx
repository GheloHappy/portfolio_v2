import '../css/nav.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

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
                <li >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/journey">Journey</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;