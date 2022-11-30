import React, {useContext} from "react";
import {ProjectDescImg} from "../ProjectDescImg/ProjectDescImg";
import {ProjectDescText} from "../ProjectDescText/ProjectDescText";
import {sobItem} from '../../data/projectDescriptions';

import './ProjectDescription.css';
import {ThemeContext} from "../../context/themeContext";

export const ProjectDescription = () => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="project-desc" style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}>
            <ProjectDescImg imgTitle={sobItem.imgTitle} images={sobItem.images} link={sobItem.link}/>
            <ProjectDescText title={sobItem.title} description={sobItem.description}/>
        </div>
    );
}