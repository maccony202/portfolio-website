import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <header>
             <nav className="navbar">
            <Link to='/' className="logo">Nana Antwi</Link>
            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                <Link to ="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                     Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to ="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                        About
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/projects" activeClassName="active" className="nav-links" onClick={handleClick}>
                        Projects
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                        Contact
                </Link>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
        </header>
       
    )
}

export default Navbar;