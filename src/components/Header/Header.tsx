import React, {useContext, useEffect, useRef} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Title} from "../Title/Title";
import {Arrow} from "../Arrow/Arrow";
import {ThemeContext} from "../../context/themeContext";
import bgMobile from '../../assets/bg_mobile.jpg';

import './Header.css';

export const Header = () => {
    let vidRef = useRef<HTMLVideoElement | null>(null);
    const {darkMode} = useContext(ThemeContext);

    useEffect(() => {
        vidRef.current?.play();
    }, []);

    return (
        <div className="app__header">
            <div className="app__header-img">
                <img src={bgMobile} alt="background-mobile"/>
            </div>
            <div className="app__header-dark-theme" style={{display: darkMode ? 'block' : 'none'}}/>
            <video
                src={require('../../assets/vid1.mp4')}
                ref={vidRef}
                loop
                controls={false}
                muted
                className="video-js"
            />
            <Navbar/>
            <Title/>
            <Arrow/>
        </div>
    );
}