import React, {useContext, useState} from "react";
import {ThemeContext} from "../../context/themeContext";

import '../ProjectDescription/ProjectDescription.css';

interface Props {
    imgTitle: string,
    images: string[],
    link: string,
}

export const ProjectDescImg = ({imgTitle, images, link}: Props) => {
    const [index, setIndex] = useState<number>(0);
    const {darkMode} = useContext(ThemeContext);

    const handleArrow = (direction: 'L' | 'R') => {
        if(direction === 'L') {
            if(index === 0) return;
            setIndex(index => index - 1);
        } else if(direction === 'R') {
            if(index === images.length-1) return;
            setIndex(index => index + 1);
        }
    }

    return (
        <div className="project-desc__img">
            <h2 className="project-desc__img-h2" style={{textShadow: darkMode ? '0 0 3px var(--color-light-beige)' : ''}}>{imgTitle}</h2>
            <div className="project-desc__img-wrapper">
                <div className="arrow arr-left" onClick={() => handleArrow('L')}>←</div>
                <div className="arrow arr-right" onClick={() => handleArrow('R')}>→</div>
                <div className="p-card bg"/>
                <div className="p-card">
                    <a href={link} target="_blank"><img src={images[index]} alt="img" className="p-img"/></a>
                </div>
            </div>
        </div>
    )
}