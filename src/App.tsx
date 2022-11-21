import React from 'react';
import {Header} from "./components/Header/Header";
import {ProjectsPreview} from "./components/ProjectsPreview/ProjectsPreview";
import {Contact} from "./components/Contact/Contact";
import {Toggle} from "./components/Toggle/Toggle";

import './App.css';

export const App = () => {
    return (
        <>
            <Toggle/>
            <Header/>
            <ProjectsPreview/>
            <Contact/>
        </>
    );
}