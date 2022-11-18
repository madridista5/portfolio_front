import React from "react";

import './ProjectPreview.css';

interface Props {
    link: string,
    img: string,
}

export const ProjectPreview = ({link, img}: Props) => (
    <div className="projectPreview">
        <div className="projectPreview__browser">
            <div className="projectPreview__browser-circle"/>
            <div className="projectPreview__browser-circle"/>
            <div className="projectPreview__browser-circle"/>
        </div>
        <a href={link}>
            <img src={img} alt="photo" className="projectPreview__img"/>
        </a>
    </div>
)