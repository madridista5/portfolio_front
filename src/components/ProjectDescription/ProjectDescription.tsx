import React from "react";
import {ProjectDescImg} from "../ProjectDescImg/ProjectDescImg";
import {ProjectDescText} from "../ProjectDescText/ProjectDescText";
import {sobItem} from '../../data/projectDescriptions';

import './ProjectDescription.css';

export const ProjectDescription = () => {
    return (
        <div className="project-desc">
            <ProjectDescImg imgTitle={sobItem.imgTitle} images={sobItem.images} link={sobItem.link}/>
            <ProjectDescText title={sobItem.title} description={sobItem.description}/>
        </div>
    );
}