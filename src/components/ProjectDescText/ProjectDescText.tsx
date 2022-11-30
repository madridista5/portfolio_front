import React from "react";

interface Props {
    title: string;
    description: string;
}

export const ProjectDescText = ({title, description}: Props) => (
    <div className="project-desc__text">
        <h2 className="project-desc__text-h2">{title}</h2>
        <div className="project-desc__text-desc">{description}</div>
    </div>
)