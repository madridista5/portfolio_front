import React from "react";
import { TypeAnimation } from 'react-type-animation';

import './Title.css';

export const Title = () => {
    return (
        <div className="app__title">
            <h1><TypeAnimation sequence={['Tymoteusz Lossy', 'Junior JavaScript Developer']} speed={1}/></h1>
            <p className="app__tilte-info">Cześć, nazywam się Tymek Lossy. Od lipca 2021 uczę się programownaia w JavaScript. Obecnie szukam pierwszej pracy lub stażu / praktyk w IT. Mój stack technologiczny to React.js + TypeScript na front-endzie oraz Express.js/Nest.js + TypeScript na backendzie. Korzystając z tych technologii wykonałem kilka aplikcaji fullstack. Poniżej znajduje się ich szczegółowy opis.</p>
        </div>
    );
}