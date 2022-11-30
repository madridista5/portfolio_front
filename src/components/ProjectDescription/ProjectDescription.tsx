import React from "react";
import {ProjectDescImg} from "../ProjectDescImg/ProjectDescImg";
import {ProjectDescText} from "../ProjectDescText/ProjectDescText";
import imgSobitem1 from '../../assets/sobitem_1.png';
import imgSobitem2 from '../../assets/sobitem_2.png';
import imgSobitem3 from '../../assets/sobitem_3.png';
import imgSobitem4 from '../../assets/sobitem_4.png';
import imgSobitem5 from '../../assets/sobitem_5.png';

import './ProjectDescription.css';

export const ProjectDescription = () => {
    return (
        <div className="project-desc">
            <ProjectDescImg imgTitle="SoBitem" images={[imgSobitem1, imgSobitem2, imgSobitem3, imgSobitem4, imgSobitem5]} link="https://sobitem.tlossy.networkmanager.pl"/>
            <ProjectDescText title="Projekt 1: SoBitem" description="opis"/>
        </div>
    );
}