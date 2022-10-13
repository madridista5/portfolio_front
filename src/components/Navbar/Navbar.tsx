import React, {useState} from "react";
import { GiHamburgerMenu} from 'react-icons/gi';
import {AiFillCloseCircle} from 'react-icons/ai';

import './Navbar.css';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <>
            <div className="app__navbar">
                <ul className="app__navbar-links">
                    <li><a href="#stack">Stack</a></li>
                    <li><a href="#projects">Projekty</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                    <li><a href="https://github.com/madridista5" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu className="hamburger" color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center">
                        <AiFillCloseCircle fontSize={27} className="overlay__close"
                                           onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li><a href="#stack">Stack</a></li>
                            <li><a href="#projects">Projekty</a></li>
                            <li><a href="#contact">Kontakt</a></li>
                            <li><a href="https://github.com/madridista5" target="_blank" rel="noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}