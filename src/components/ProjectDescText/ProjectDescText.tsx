import React, {useContext} from "react";
import {ThemeContext} from "../../context/themeContext";

interface Props {
    title: string;
    description: string;
}

export const ProjectDescText = ({title, description}: Props) => {
    const {darkMode} = useContext(ThemeContext);

    return (
        <div className="project-desc__text">
            <h2 className="project-desc__text-h2" style={{textShadow: darkMode ? '0 0 3px var(--color-light-beige)' : ''}}>{title}</h2>
            <div className="project-desc__text-desc" style={{color: darkMode ? 'var(--color-beige)' : ''}}>{description}</div>
        </div>
    )
}