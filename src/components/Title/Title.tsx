import React from "react";
import { TypeAnimation } from 'react-type-animation';

import './Title.css';

export const Title = () => {
    return (
        <div className="app__title">
            <h1><TypeAnimation sequence={['Tymoteusz Lossy', 'Junior JavaScript Developer']} speed={1}/></h1>
            <p className="app__tilte-info">Cześć, nazywam się Tymek Lossy. Od lipca 2021 uczę się programowania w JavaScript. Od tego czasu poznałem podstawy HTML, CSS, JS, TS, React, Node, mongoDB, MySQL, Express.js oraz Nest.js. Korzystając z tych technologii wykonałem kilka aplikcaji fullstack. Obecnie szukam pierwszej pracy lub stażu / praktyk w IT.</p>
        </div>
    );
}