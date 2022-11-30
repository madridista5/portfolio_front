import React, {useState} from "react";

import '../ProjectDescription/ProjectDescription.css';

interface Props {
    title: string,
    img: string[],
}

export const ProjectDescImg = ({title, img}: Props) => {
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
                    <img src={img[index]} alt="p-img"/>
                </div>
            </div>
        </div>
    )
}