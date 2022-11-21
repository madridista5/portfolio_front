import React from "react";
import Moon from '../../assets/moon.png';
import Sun from '../../assets/sun.png';

import './Toggle.css';

export const Toggle = () => {
    return (
        <div className="toggle">
            <img src={Sun} alt="sun" className="toggle__img"/>
            <img src={Moon} alt="sun" className="toggle__img"/>
            <button className="toggle__btn"/>
        </div>
    );
}