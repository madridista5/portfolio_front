import React from "react";
import {ProjectDescImg} from "../ProjectDescImg/ProjectDescImg";
import {ProjectDescText} from "../ProjectDescText/ProjectDescText";

import './ProjectDescription.css';

export const ProjectDescription = () => {
    return (
        <div className="project-desc">
            <ProjectDescImg/>
            <ProjectDescText/>
        </div>
    );
}