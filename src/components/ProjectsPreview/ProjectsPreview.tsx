import React, {useContext} from "react";
import {projectsPreview} from "../../data/projectsPreview";
import {ProjectPreview} from "../ProjectPreview/ProjectPreview";
import {ThemeContext} from "../../context/themeContext";

import './ProjectsPreviev.css';

export const ProjectsPreview = () => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="projectsPreview" id="projects" style={{backgroundColor: darkMode ? 'var(--color-dark-blue)' : 'var(--color-light-beige)'}}>
            <div className="projectPreview__text">
                <h1 className="projectPreview__text-title" style={{textShadow: darkMode ? '0 0 3px var(--color-light-beige)' : ''}}>Projekty</h1>
            </div>
            <div className="projectPreview__list">
                {projectsPreview.map(project => (
                    <ProjectPreview key={project.id} link={project.link} img={project.img}/>
                ))}
            </div>
        </div>
    );
};