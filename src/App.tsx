import React from 'react';
import {Header} from "./components/Header/Header";
import {ProjectsPreview} from "./components/ProjectsPreview/ProjectsPreview";

import './App.css';

export const App = () => {
    return (
        <>
            <Header/>
            <ProjectsPreview/>
        </>
    );
}