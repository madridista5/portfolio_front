import React, {useEffect, useRef} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Title} from "../Title/Title";

import './Header.css';

export const Header = () => {
    let vidRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        vidRef.current?.play();
    }, []);

    return (
        <div className="app__header">
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
        </div>
    );
}