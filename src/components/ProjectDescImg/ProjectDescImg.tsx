import React, {useState} from "react";

import '../ProjectDescription/ProjectDescription.css';

interface Props {
    title: string,
    img: string[],
    link: string,
}

export const ProjectDescImg = ({title, img, link}: Props) => {
    const [index, setIndex] = useState<number>(0);

    const handleArrow = (direction: 'L' | 'R') => {
        if(direction === 'L') {
            if(index === 0) return;
            setIndex(index => index - 1);
        } else if(direction === 'R') {
            if(index === img.length-1) return;
            setIndex(index => index + 1);
        }
    }

    return (
        <div className="project-desc__img">
            <h2 className="project-desc__img-h2">{title}</h2>
            <div className="project-desc__img-wrapper">
                <div className="arrow arr-left" onClick={() => handleArrow('L')}>←</div>
                <div className="arrow arr-right" onClick={() => handleArrow('R')}>→</div>
                <div className="p-card bg"/>
                <div className="p-card">
                    <a href={link} target="_blank"><img src={img[index]} alt="img" className="p-img"/></a>
                </div>
            </div>
        </div>
    )
}