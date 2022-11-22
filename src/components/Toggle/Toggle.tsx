import React, { useContext } from "react";
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';
import { ThemeContext } from "../../context/themeContext";

import './Toggle.css';

export const Toggle = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div className="toggle">
            <img src={Sun} alt="sun" className="toggle__img"/>
            <img src={Moon} alt="sun" className="toggle__img"/>
            <button className="toggle__btn" onClick={handleClick} style={{left: darkMode ? '25px' : '0'}}/>
        </div>
    );
}