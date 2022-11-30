import React, {useContext} from "react";
import {ProjectDescImg} from "../ProjectDescImg/ProjectDescImg";
import {ProjectDescText} from "../ProjectDescText/ProjectDescText";
import {asianFood, sobItem} from '../../data/projectDescriptions';
import {ThemeContext} from "../../context/themeContext";

import './ProjectDescription.css';

export const ProjectDescription = () => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <>
            <div className="project-desc" style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}>
                <ProjectDescImg imgTitle={sobItem.imgTitle} images={sobItem.images} link={sobItem.link}/>
                <ProjectDescText title={sobItem.title} description={sobItem.description}/>
            </div>
            <div className="project-desc" style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}>
                <ProjectDescText title={asianFood.title} description={asianFood.description}/>
                <ProjectDescImg imgTitle={asianFood.imgTitle} images={asianFood.images} link={asianFood.link}/>
            </div>
        </>
    );
}