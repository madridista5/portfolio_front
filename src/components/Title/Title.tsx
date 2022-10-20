import React from "react";
import { TypeAnimation } from 'react-type-animation';

import './Title.css';

export const Title = () => {
    return (
        <div className="app__title">
            <h1><TypeAnimation sequence={['Tymoteusz Lossy', 'Junior JavaScript Developer']} speed={1}/></h1>
        </div>
    );
}