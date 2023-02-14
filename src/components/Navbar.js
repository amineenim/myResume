import React,{ useState } from 'react';
import './NavbarStyle.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';


function Navbar() {
    // define a state to handle showing the items of
    // the menu after click 
    const [toggleMenu,setToggleMenu] = useState(false)
    const [headerColor,setHeaderColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 1)
        {
            setHeaderColor(true)
        }else {
            setHeaderColor(false)
        } 
    }
    window.addEventListener("scroll",changeColor);
    return (
        <div className={headerColor ? 'header header-bg' : 'header'}>
            <Link to="/">
                <h2>Amine Maourid</h2>
            </Link>
            <ul className={toggleMenu ? "nav-menu active" : "nav-menu" }>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='toggle-menu'>
                {toggleMenu ? (
                    <FaTimes size={20} style={{color: "white"}}
                    onClick={() => setToggleMenu(!toggleMenu)}
                    />
                ) : (
                    <FaBars size={20} style={{color: "white"}}
                onClick={() => setToggleMenu(!toggleMenu)}
                />
                )
                }
            </div>
        </div>
  )
}

export default Navbar