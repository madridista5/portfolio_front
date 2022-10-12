import React, {useEffect, useRef} from "react";

import './Header.css';
import {Navbar} from "../Navbar/Navbar";

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
        </div>
    );
}