import React from "react";
import {projectsPreview} from "../../data/projectsPreview";
import {ProjectPreview} from "../ProjectPreview/ProjectPreview";

import './ProjectsPreviev.css';

export const ProjectsPreview = () => (
    <div className="projectsPreview" id="projects">
        <div className="projectPreview__text">
            <h1 className="projectPreview__text-title">Projekty</h1>
        </div>
        <div className="projectPreview__list">
            {projectsPreview.map(project => (
                <ProjectPreview key={project.id} link={project.link} img={project.img}/>
            ))}
        </div>
    </div>
);