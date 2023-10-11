import '../css/nav.css'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAnimation } from 'framer-motion';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const controls = useAnimation();

    const handleScroll = () => {
        controls.start({ opacity: 1 });
    };

    useEffect(() => {
        controls.start({ opacity: 0 });
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

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
                    <NavLink
                        to='home'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        HOME
                    </NavLink>
                </li>
                <li >
                    <NavLink to="journey"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Journey</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;