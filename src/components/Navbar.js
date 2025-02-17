import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changColor = () => {
        if (window.scrollY >= 100 ){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changColor);

  return (
    <div className={color? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Port<span style={{color:'yellow'}}>folio.</span></h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Skills">Skills</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{ color: '#fff'}}/>) : (<FaBars size={20} style={{ color: '#fff'}}/>)}
        </div>
        </div>
  );
};

export default Navbar;
